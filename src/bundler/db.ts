import type { Database, Statement } from "better-sqlite3";
import * as fs from "node:fs";
import { toSlug } from "../utils/slug";
import type { FileEntry } from "./walker";
import { walkMD } from "./parser";
import { buildSlugRegistry, rewriteLinks, type SlugRegistry } from "./link-rewriter";

/** Statistics returned by insertTree. */
export interface InsertStats {
  totalChunks: number;
  totalBytes: number;
  filesProcessed: number;
}

/**
 * Walk the flat file list, read Markdown files, and insert into the database.
 *
 * All inserts run inside a single synchronous transaction. After the transaction,
 * the closure table is materialized via recursive CTE and FTS5 is synced.
 *
 * A slug registry is built before insertion so the link rewriter can resolve
 * relative paths to slugs.
 *
 * @param db - Open database connection (caller must close).
 * @param files - Flat list of file entries from walkFS.
 * @param onProgress - Optional callback called per file.
 * @param onError - Optional callback called on file errors.
 * @returns Insert statistics (chunk counts, byte totals, file counts).
 */
export function insertTree(
  db: Database,
  files: FileEntry[],
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

  // First pass: resolve all slugs so the link registry is complete
  // Track assigned slugs to avoid collisions within this batch
  const assignedSlugs = new Set<string>();
  const fileSlugs: Array<{ relPath: string; slug: string }> = [];
  for (const file of files) {
    const baseSlug = toSlug(file.name.replace(/\.[^.]+$/, "")) || file.name;
    // For file nodes: derive a slug prefix from the directory path (e.g. "a/readme.md" -> "a")
    const dirSlug = file.relPath.includes("/")
      ? toSlug(file.relPath.split("/").slice(0, -1).join("-"))
      : null;
    const slug = resolveFileCollision(baseSlug, dirSlug, file.index, assignedSlugs);
    assignedSlugs.add(slug);
    fileSlugs.push({ relPath: file.relPath, slug });
  }

  // Build slug registry for link rewriting
  const registry = buildSlugRegistry(fileSlugs);

  // Second pass: insert all files
  const tx = db.transaction((entries: FileEntry[]) => {
    for (let i = 0; i < entries.length; i++) {
      const file = entries[i];
      const slug = fileSlugs[i].slug;
      insertFileNode(file, slug, db, existsStmt, insertNode, stats, entries.length, onProgress, onError, registry);
    }
  });

  tx(files);

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
// File insertion
// ---------------------------------------------------------------------------

/** Insert a file node: read Markdown, parse, rewrite links, insert heading children. */
function insertFileNode(
  file: FileEntry,
  slug: string,
  db: Database,
  existsStmt: Statement,
  insertNode: Statement,
  stats: InsertStats,
  totalFiles: number,
  onProgress?: (path: string, processed: number, total: number) => void,
  onError?: (path: string, error: string) => void,
  registry?: SlugRegistry,
): void {
  stats.filesProcessed++;

  if (onProgress) {
    onProgress(file.relPath, stats.filesProcessed, totalFiles);
  }

  let markdown: string;
  try {
    markdown = fs.readFileSync(file.absolutePath, "utf8");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (onError) {
      onError(file.relPath, message);
    }
    return;
  }

  const mdTree = walkMD(file.name, markdown);

  // Rewrite links in the file node chunk
  if (registry && mdTree.chunk) {
    mdTree.chunk = rewriteLinks(mdTree.chunk, file.relPath, registry);
  }

  // Rewrite links in all descendant chunks
  rewriteLinksInTree(mdTree.children, file.relPath, registry);

  // Insert file node (all files are roots, parent_slug is null)
  insertNode.run({
    slug,
    type: "file",
    title: mdTree.title,
    parent_slug: null,
    idx: file.index,
    chunk: mdTree.chunk,
    summary: null,
  });

  // Track chunk stats for file node itself
  trackChunkStats(mdTree.chunk, stats);

  // Insert heading children (offset idx by file.index + 1 to avoid collision with file node)
  for (const child of mdTree.children) {
    insertMDNode(child, slug, db, existsStmt, insertNode, stats, file.index + 1);
  }
}

/** Recursively rewrite links in all MD node chunks. */
function rewriteLinksInTree(
  nodes: ReturnType<typeof walkMD>["children"],
  sourceRelPath: string,
  registry: SlugRegistry | undefined,
): void {
  if (!registry) return;

  for (const node of nodes) {
    if (node.chunk) {
      node.chunk = rewriteLinks(node.chunk, sourceRelPath, registry);
    }
    if (node.children.length > 0) {
      rewriteLinksInTree(node.children, sourceRelPath, registry);
    }
  }
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
 * Resolve slug collisions for file nodes during the first pass.
 * Uses an in-memory set of already-assigned slugs.
 */
function resolveFileCollision(
  desiredSlug: string,
  dirSlug: string | null,
  index: number,
  assigned: Set<string>,
): string {
  if (!assigned.has(desiredSlug)) {
    return desiredSlug;
  }
  if (dirSlug) {
    const prefixed = `${dirSlug}-${desiredSlug}`;
    if (!assigned.has(prefixed)) {
      return prefixed;
    }
  }
  let n = index;
  while (true) {
    const candidate = `_${n}`;
    if (!assigned.has(candidate)) {
      return candidate;
    }
    n++;
  }
}

/**
 * Resolve slug collisions for section nodes against the database.
 *
 * Strategy:
 * 1. Use desired slug if it does not exist.
 * 2. Prefix with parent slug.
 * 3. Fallback to _N (node index), incrementing N until globally unique.
 */
export function resolveCollision(
  desiredSlug: string,
  parentSlug: string,
  index: number,
  existsStmt: Statement,
): string {
  if (existsStmt.get({ slug: desiredSlug }) === undefined) {
    return desiredSlug;
  }

  const prefixed = `${parentSlug}-${desiredSlug}`;
  if (existsStmt.get({ slug: prefixed }) === undefined) {
    return prefixed;
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
