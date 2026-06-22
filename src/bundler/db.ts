import type { Database, Statement } from "better-sqlite3";
import * as fs from "node:fs";
import { toSlug } from "../utils/slug";
import type { FSNode } from "./walker";
import { walkMD } from "./parser";

/** Statistics returned by insertTree. */
export interface InsertStats {
  totalChunks: number;
  totalBytes: number;
  filesProcessed: number;
}

/**
 * Walk the FSNode tree, read Markdown files, and insert into the database.
 *
 * All inserts run inside a single synchronous transaction. After the transaction,
 * the closure table is materialized via recursive CTE and FTS5 is synced.
 *
 * Insert order is mandatory: parent slug must exist before children
 * (FK constraint on parent_slug).
 *
 * @param db - Open database connection (caller must close).
 * @param roots - Top-level filesystem nodes from walkFS.
 * @param onProgress - Optional callback called per file.
 * @param onError - Optional callback called on file errors.
 * @returns Insert statistics (chunk counts, byte totals, file counts).
 */
export function insertTree(
  db: Database,
  roots: FSNode[],
  onProgress?: (path: string, processed: number, total: number) => void,
  onError?: (path: string, error: string) => void,
): InsertStats {
  const insertNode = prepareInsertNode(db);
  const existsStmt = prepareExistsCheck(db);

  const stats: InsertStats = {
    totalChunks: 0,
    totalBytes: 0,
    filesProcessed: 0,
  };

  const totalFiles = countFilesInTree(roots);

  // Single transaction wraps the entire bundle
  const tx = db.transaction((roots: FSNode[]) => {
    for (const root of roots) {
      insertNodeRecursive(
        root, null, db, existsStmt,
        insertNode, stats, totalFiles, onProgress, onError,
      );
    }
  });

  tx(roots);

  buildClosureTable(db);
  syncFTS5(db);

  return stats;
}

// ---------------------------------------------------------------------------
// Statement preparation
// ---------------------------------------------------------------------------

/** Prepare the INSERT statement for the nodes table. */
function prepareInsertNode(db: Database): Statement {
  return db.prepare(`
    INSERT INTO nodes (slug, type, title, parent_slug, idx, chunk, summary)
    VALUES (@slug, @type, @title, @parent_slug, @idx, @chunk, @summary)
  `);
}

/** Prepare the slug existence check statement. */
function prepareExistsCheck(db: Database): Statement {
  return db.prepare("SELECT slug FROM nodes WHERE slug = @slug");
}

// ---------------------------------------------------------------------------
// Tree insertion
// ---------------------------------------------------------------------------

/** Count total file nodes in the tree (for progress tracking). */
function countFilesInTree(nodes: FSNode[]): number {
  let count = 0;
  for (const n of nodes) {
    if (n.type === "file") count++;
    count += countFilesInTree(n.children);
  }
  return count;
}

/**
 * Recursively insert an FSNode and all its children into the database.
 *
 * For directory nodes: insert a directory row, then recurse into children.
 * For file nodes: read Markdown, parse headings, insert file row + heading children.
 *
 * @returns The resolved slug for the inserted node.
 */
function insertNodeRecursive(
  fsNode: FSNode,
  parentSlug: string | null,
  db: Database,
  existsStmt: Statement,
  insertNode: Statement,
  stats: InsertStats,
  totalFiles: number,
  onProgress?: (path: string, processed: number, total: number) => void,
  onError?: (path: string, error: string) => void,
): string {
  if (fsNode.type === "directory") {
    const slug = insertDirectoryNode(fsNode, parentSlug, existsStmt, insertNode);
    for (const child of fsNode.children) {
      insertNodeRecursive(child, slug, db, existsStmt, insertNode, stats, totalFiles, onProgress, onError);
    }
    return slug;
  }

  return insertFileNode(
    fsNode, parentSlug, db, existsStmt,
    insertNode, stats, totalFiles, onProgress, onError,
  );
}

/** Insert a directory node. */
function insertDirectoryNode(
  fsNode: FSNode,
  parentSlug: string | null,
  existsStmt: Statement,
  insertNode: Statement,
): string {
  const desired = fsNode.path
    ? toSlug(fsNode.name) || fsNode.name
    : fsNode.name;
  const slug = resolveCollision(desired, parentSlug, fsNode.index, existsStmt);

  insertNode.run({
    slug,
    type: "directory",
    title: fsNode.name,
    parent_slug: parentSlug,
    idx: fsNode.index,
    chunk: null,
    summary: null,
  });

  return slug;
}

/** Insert a file node: read Markdown, parse, insert heading children. */
function insertFileNode(
  fsNode: FSNode,
  parentSlug: string | null,
  db: Database,
  existsStmt: Statement,
  insertNode: Statement,
  stats: InsertStats,
  totalFiles: number,
  onProgress?: (path: string, processed: number, total: number) => void,
  onError?: (path: string, error: string) => void,
): string {
  stats.filesProcessed++;

  if (onProgress) {
    onProgress(fsNode.path, stats.filesProcessed, totalFiles);
  }

  let markdown: string;
  try {
    markdown = fs.readFileSync(fsNode.absolutePath, "utf8");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (onError) {
      onError(fsNode.path, message);
    }
    return "";
  }

  const mdTree = walkMD(fsNode.name, markdown);

  const desiredSlug = toSlug(fsNode.name.replace(/\.[^.]+$/, "")) || fsNode.name;
  const slug = resolveCollision(desiredSlug, parentSlug, fsNode.index, existsStmt);

  // Insert file node
  insertNode.run({
    slug,
    type: "file",
    title: mdTree.title,
    parent_slug: parentSlug,
    idx: fsNode.index,
    chunk: mdTree.chunk,
    summary: null,
  });

  // Track chunk stats for file node itself
  trackChunkStats(mdTree.chunk, stats);

  // Insert heading children (offset idx by fsNode.index + 1 to avoid collision with file node)
  for (const child of mdTree.children) {
    insertMDNode(child, slug, db, existsStmt, insertNode, stats, fsNode.index + 1);
  }

  return slug;
}

/** Recursively insert a Markdown heading node and its children.
 *
 * @param baseIdx - Index offset to avoid collision with the parent file node.
 *                  Sections use baseIdx + mdNode.index so they don't overlap
 *                  with the file node's own idx under the same parent_slug.
 */
function insertMDNode(
  mdNode: ReturnType<typeof walkMD>["children"][number],
  parentSlug: string,
  db: Database,
  existsStmt: Statement,
  insertNode: Statement,
  stats: InsertStats,
  baseIdx: number = 0,
): void {
  const adjustedIdx = baseIdx + mdNode.index;
  const desiredSlug = toSlug(mdNode.title) || `_${adjustedIdx}`;
  const slug = resolveCollision(desiredSlug, parentSlug, adjustedIdx, existsStmt);

  insertNode.run({
    slug,
    type: "section",
    title: mdNode.title,
    parent_slug: parentSlug,
    idx: adjustedIdx,
    chunk: mdNode.chunk,
    summary: null,
  });

  trackChunkStats(mdNode.chunk, stats);

  for (const child of mdNode.children) {
    insertMDNode(child, slug, db, existsStmt, insertNode, stats, 0);
  }
}

// ---------------------------------------------------------------------------
// Slug collision resolution
// ---------------------------------------------------------------------------

/**
 * Resolve slug collisions by prefixing with parent slug, falling back to _N.
 *
 * Strategy:
 * 1. Use desired slug if it does not exist.
 * 2. Prefix with parent slug: parentSlug-desiredSlug.
 * 3. Fallback to _N (node index), incrementing N until globally unique.
 */
export function resolveCollision(
  desiredSlug: string,
  parentSlug: string | null,
  index: number,
  existsStmt: Statement,
): string {
  if (existsStmt.get({ slug: desiredSlug }) === undefined) {
    return desiredSlug;
  }

  if (parentSlug) {
    const prefixed = `${parentSlug}-${desiredSlug}`;
    if (existsStmt.get({ slug: prefixed }) === undefined) {
      return prefixed;
    }
  }

  // Fallback: _N, incrementing until globally unique
  let n = index;
  while (true) {
    const candidate = `_${n}`;
    if (existsStmt.get({ slug: candidate }) === undefined) {
      return candidate;
    }
    n++;
  }
}

// ---------------------------------------------------------------------------
// Stats tracking
// ---------------------------------------------------------------------------

/** Add chunk byte length to stats if chunk is non-null. */
function trackChunkStats(chunk: string | null, stats: InsertStats): void {
  if (chunk) {
    stats.totalChunks++;
    stats.totalBytes += Buffer.byteLength(chunk, "utf8");
  }
}

// ---------------------------------------------------------------------------
// Post-transaction: closure table + FTS5 sync
// ---------------------------------------------------------------------------

/** Materialize the transitive closure table via recursive CTE. */
function buildClosureTable(db: Database): void {
  db.exec(`
    INSERT INTO closure (ancestor, descendant, depth)
    WITH RECURSIVE cte(ancestor, descendant, depth) AS (
      SELECT slug, slug, 0 FROM nodes
      UNION ALL
      SELECT c.ancestor, n.slug, c.depth + 1
      FROM cte c
      JOIN nodes n ON n.parent_slug = c.descendant
    )
    SELECT ancestor, descendant, depth FROM cte
  `);
}

/** Sync FTS5 contentless table with nodes data. */
function syncFTS5(db: Database): void {
  db.exec(`
    INSERT INTO nodes_fts(rowid, title, chunk)
    SELECT rowid, title, chunk FROM nodes
  `);
}
