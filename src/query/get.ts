import type { Database } from "better-sqlite3";

/**
 * Document node returned by get().
 *
 * Contains self content, navigation slugs, and children subtree.
 * level is hops from KB root. depth is hops to deepest descendant.
 */
export interface Document {
  slug: string;
  title: string;
  level: number;
  depth: number;
  parent?: string;
  prev?: string;
  next?: string;
  chunk?: string;
  children: Document[];
}

/** Raw node data fetched from the nodes table. */
interface NodeRow {
  slug: string;
  title: string;
  parent_slug: string | null;
  idx: number;
  chunk: string | null;
  type: string;
}

/** Node row with navigation computed by window functions. */
interface NodeRowWithNav extends NodeRow {
  prev_slug: string | null;
  next_slug: string | null;
}

/**
 * Fetch a node and its full subtree as a Document tree.
 *
 * Uses the closure table to fetch all descendants in a single batch query.
 * Navigation (prev/next) is computed via window functions (LAG/LEAD).
 * Assembles the tree in TypeScript using parent_slug grouping.
 *
 * @param db - Open database connection.
 * @param slug - Target node slug.
 * @returns Document tree, or null if slug does not exist.
 */
export function get(db: Database, slug: string): Document | null {
  const node = fetchTargetNode(db, slug);
  if (!node) return null;

  const level = computeLevel(db, slug);

  // Fetch all descendants via closure table
  const descendantSlugs = fetchDescendantSlugs(db, slug);

  if (descendantSlugs.length === 0) {
    return createLeafDocument(node, level);
  }

  // Batch fetch descendant data with navigation via window functions
  const rowsWithNav = batchFetchNodesWithNav(db, descendantSlugs);

  // Build a lookup for navigation by slug
  const navBySlug = new Map<string, { prev_slug: string | null; next_slug: string | null }>();
  for (const row of rowsWithNav) {
    navBySlug.set(row.slug, { prev_slug: row.prev_slug, next_slug: row.next_slug });
  }

  // Group descendants by parent
  const { directChildren, childrenByParent } = groupByParent(rowsWithNav, slug);

  // Build document tree
  const rootDoc = buildDocumentTree(node, level, directChildren, childrenByParent, navBySlug);
  setLevelAndDepth(rootDoc, level);

  return rootDoc;
}

/** Fetch the target node with all fields needed for Document construction. */
function fetchTargetNode(db: Database, slug: string): NodeRow & { type: string } | undefined {
  return db.prepare(`
    SELECT slug, title, type, chunk, parent_slug, idx FROM nodes WHERE slug = ?
  `).get(slug) as (NodeRow & { type: string }) | undefined;
}

/** Compute level: hops from nearest KB root to this node. */
function computeLevel(db: Database, slug: string): number {
  const row = db.prepare(`
    SELECT MIN(depth) AS level FROM closure
    WHERE descendant = ?
      AND ancestor IN (SELECT slug FROM nodes WHERE parent_slug IS NULL)
  `).get(slug) as { level: number } | undefined;
  return row?.level ?? 0;
}

/** Fetch descendant slugs from the closure table (excluding self). */
function fetchDescendantSlugs(db: Database, slug: string): string[] {
  const rows = db.prepare(`
    SELECT c.descendant
    FROM closure c
    WHERE c.ancestor = ? AND c.depth > 0
    ORDER BY c.depth
  `).all(slug) as Array<{ descendant: string }>;
  return rows.map((r) => r.descendant);
}

/**
 * Batch fetch node data with prev/next navigation computed via window functions.
 *
 * LAG/LEAD over parent_slug partitions gives sibling navigation in a single query.
 */
function batchFetchNodesWithNav(db: Database, slugs: string[]): NodeRowWithNav[] {
  const placeholders = slugs.map(() => "?").join(",");
  return db.prepare(`
    SELECT
      slug,
      title,
      parent_slug,
      idx,
      chunk,
      type,
      LAG(slug) OVER (PARTITION BY parent_slug ORDER BY idx) AS prev_slug,
      LEAD(slug) OVER (PARTITION BY parent_slug ORDER BY idx) AS next_slug
    FROM nodes
    WHERE slug IN (${placeholders})
  `).all(...slugs) as NodeRowWithNav[];
}

/** Group descendant rows by parent_slug, separating direct children. */
function groupByParent(rows: NodeRowWithNav[], parentSlug: string): {
  directChildren: NodeRowWithNav[];
  childrenByParent: Map<string, NodeRowWithNav[]>;
} {
  const directChildren: NodeRowWithNav[] = [];
  const childrenByParent = new Map<string, NodeRowWithNav[]>();

  for (const row of rows) {
    if (row.parent_slug === parentSlug) {
      directChildren.push(row);
    } else if (row.parent_slug) {
      if (!childrenByParent.has(row.parent_slug)) {
        childrenByParent.set(row.parent_slug, []);
      }
      childrenByParent.get(row.parent_slug)!.push(row);
    }
  }

  directChildren.sort((a, b) => a.idx - b.idx);
  for (const [, children] of childrenByParent) {
    children.sort((a, b) => a.idx - b.idx);
  }

  return { directChildren, childrenByParent };
}

/** Create a Document for a leaf node (no descendants). */
function createLeafDocument(node: NodeRow & { type: string }, level: number): Document {
  return {
    slug: node.slug,
    title: node.title,
    level,
    depth: 0,
    ...(node.parent_slug ? { parent: node.parent_slug } : {}),
    ...(node.chunk ? { chunk: node.chunk } : {}),
    children: [],
  };
}

/** Build navigation from a row with window-function computed prev/next. */
function buildNavFromRowWithNav(
  row: NodeRowWithNav,
): { parent?: string; prev?: string; next?: string } {
  const result: { parent?: string; prev?: string; next?: string } = {};

  if (row.parent_slug) {
    result.parent = row.parent_slug;
  }

  // prev/next only for sections
  if (row.type === "section") {
    if (row.prev_slug) result.prev = row.prev_slug;
    if (row.next_slug) result.next = row.next_slug;
  }

  return result;
}

/** Build the document tree from root node and grouped children. */
function buildDocumentTree(
  node: NodeRow & { type: string },
  level: number,
  directChildren: NodeRowWithNav[],
  childrenByParent: Map<string, NodeRowWithNav[]>,
  navBySlug: Map<string, { prev_slug: string | null; next_slug: string | null }>,
): Document {
  const rootNavData = navBySlug.get(node.slug);

  const rootDoc: Document = {
    slug: node.slug,
    title: node.title,
    level: 0,
    depth: 0,
    ...(node.parent_slug ? { parent: node.parent_slug } : {}),
    ...(node.type === "section" && rootNavData?.prev_slug ? { prev: rootNavData.prev_slug } : {}),
    ...(node.type === "section" && rootNavData?.next_slug ? { next: rootNavData.next_slug } : {}),
    ...(node.chunk ? { chunk: node.chunk } : {}),
    children: directChildren.map((child) =>
      buildChildDocument(child, childrenByParent, navBySlug),
    ),
  };

  return rootDoc;
}

/** Recursively build a child Document from its NodeRowWithNav. */
function buildChildDocument(
  row: NodeRowWithNav,
  childrenByParent: Map<string, NodeRowWithNav[]>,
  navBySlug: Map<string, { prev_slug: string | null; next_slug: string | null }>,
): Document {
  const children = (childrenByParent.get(row.slug) ?? []).sort((a, b) => a.idx - b.idx);

  return {
    slug: row.slug,
    title: row.title,
    level: 0,
    depth: 0,
    ...buildNavFromRowWithNav(row),
    ...(row.chunk ? { chunk: row.chunk } : {}),
    children: children.map((child) =>
      buildChildDocument(child, childrenByParent, navBySlug),
    ),
  };
}

/** Set level and depth recursively on the document tree. */
function setLevelAndDepth(doc: Document, level: number): void {
  doc.level = level;

  if (doc.children.length === 0) {
    doc.depth = 0;
    return;
  }

  let maxChildDepth = 0;
  for (const child of doc.children) {
    setLevelAndDepth(child, level + 1);
    if (child.depth + 1 > maxChildDepth) {
      maxChildDepth = child.depth + 1;
    }
  }
  doc.depth = maxChildDepth;
}
