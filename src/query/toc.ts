import type { Database } from "better-sqlite3";

/**
 * Aggregated subtree statistics.
 *
 * Used as the children value on clipped TOC nodes to provide
 * semantic discovery without expanding the full subtree.
 */
/** Depth mode for TOC queries. */
export type DepthMode = number | "files" | "full";

export interface Summary {
  chunkCount: number;
  totalBytes: number;
  depth: number;
  text?: string;
}

/**
 * Table of contents node.
 *
 * children is TOC[] when expanded, or Summary when clipped by depth limit.
 * Empty array [] indicates a leaf node with no children.
 */
export interface TOC {
  slug: string;
  title: string;
  children: TOC[] | Summary;
}

/** Raw descendant row from the batch closure query. */
interface DescendantRow {
  slug: string;
  title: string;
  type: string;
  parent_slug: string | null;
  depth: number;
  idx: number;
}

/**
 * Build the TOC tree rooted at the given slug.
 *
 * Pre-fetches all descendants (including root) via the closure table in a
 * single query, then builds the tree in-memory. Depth clipping is a simple
 * comparison on closure depth. Clipped subtrees carry Summary stats
 * batch-fetched in a single grouped query.
 *
 * @param db - Open database connection.
 * @param slug - Root node slug.
 * @param depth - Depth mode: number (levels), "files" (stop at file nodes), or "full" (no limit).
 * @returns TOC tree, or null if slug does not exist.
 */
export function toc(db: Database, slug: string, depth: DepthMode): TOC | null {
  // Verify the root slug exists and get its type
  const root = db.prepare(
    "SELECT slug, title, type FROM nodes WHERE slug = ?",
  ).get(slug) as { slug: string; title: string; type: string } | undefined;

  if (!root) return null;

  // Single query: fetch all descendants INCLUDING root (depth=0)
  const rows = db.prepare(`
    SELECT n.slug, n.title, n.type, n.parent_slug, c.depth, n.idx
    FROM closure c
    JOIN nodes n ON n.slug = c.descendant
    WHERE c.ancestor = ?
    ORDER BY c.depth, n.idx
  `).all(slug) as DescendantRow[];

  // Group descendants by parent slug
  const childrenByParent = groupByParent(rows);

  // Identify all slugs that need summaries (root if clipped + descendants)
  const clippedSlugs = identifyClippedNodes(slug, root, rows, depth);

  // If root is clipped, return immediately with summary
  const rootIsClipped = clippedSlugs.has(slug);

  // Batch-fetch summary stats for all clipped nodes
  const summaries = fetchBatchSummaries(db, [...clippedSlugs]);

  if (rootIsClipped) {
    const summary = summaries.get(slug) ?? { chunkCount: 0, totalBytes: 0, depth: 0 };
    return { slug: root.slug, title: root.title, children: summary };
  }

  // Root is expanded — build tree from its direct children
  const directChildren = childrenByParent.get(root.slug) ?? [];
  return buildNodeTOC(
    root.slug,
    root.title,
    directChildren,
    depth,
    summaries,
    childrenByParent,
  );
}

/** Check if the root node should be clipped. */
function isRootClipped(rootType: string, depth: DepthMode): boolean {
  if (typeof depth === "number") return depth === 0;
  if (depth === "files") return rootType === "file";
  return false;
}

/** Identify nodes that should be clipped based on depth mode. */
function identifyClippedNodes(
  rootSlug: string,
  root: { type: string },
  rows: DescendantRow[],
  depth: DepthMode,
): Set<string> {
  const clipped = new Set<string>();

  if (isRootClipped(root.type, depth)) {
    clipped.add(rootSlug);
  }

  if (depth !== "full") {
    for (const row of rows) {
      if (row.depth === 0) continue;
      if (isClipped(row.depth, row.type, depth)) {
        clipped.add(row.slug);
      }
    }
  }

  return clipped;
}

/** Group descendant rows by their parent slug. */
function groupByParent(rows: DescendantRow[]): Map<string, DescendantRow[]> {
  const map = new Map<string, DescendantRow[]>();
  for (const row of rows) {
    if (row.parent_slug === null) continue;
    if (!map.has(row.parent_slug)) {
      map.set(row.parent_slug, []);
    }
    map.get(row.parent_slug)!.push(row);
  }
  return map;
}

/** Batch-fetch summary stats for multiple slugs in a single grouped query. */
function fetchBatchSummaries(
  db: Database,
  slugs: string[],
): Map<string, Summary> {
  if (slugs.length === 0) return new Map();

  const summaryMap = new Map<string, Summary>();

  // Batch stats via grouped closure query
  const statsRows = db.prepare(`
    SELECT c.ancestor AS slug,
      COUNT(*) AS chunkCount,
      COALESCE(SUM(CASE WHEN n.chunk IS NOT NULL THEN length(n.chunk) ELSE 0 END), 0) AS totalBytes,
      COALESCE(MAX(c.depth), 0) AS depth
    FROM closure c
    JOIN nodes n ON n.slug = c.descendant
    WHERE c.ancestor IN (${slugs.map(() => "?").join(",")})
      AND n.chunk IS NOT NULL
    GROUP BY c.ancestor
  `).all(...slugs) as Array<{ slug: string; chunkCount: number; totalBytes: number; depth: number }>;

  for (const row of statsRows) {
    summaryMap.set(row.slug, {
      chunkCount: row.chunkCount,
      totalBytes: row.totalBytes,
      depth: row.depth,
    });
  }

  // Batch-fetch summary text for clipped nodes
  const textRows = db.prepare(`
    SELECT slug, summary FROM nodes
    WHERE slug IN (${slugs.map(() => "?").join(",")})
      AND summary IS NOT NULL
  `).all(...slugs) as Array<{ slug: string; summary: string }>;

  for (const row of textRows) {
    const existing = summaryMap.get(row.slug);
    if (existing) {
      existing.text = row.summary;
    } else {
      summaryMap.set(row.slug, {
        chunkCount: 0,
        totalBytes: 0,
        depth: 0,
        text: row.summary,
      });
    }
  }

  return summaryMap;
}

/** Build a TOC node from its direct children rows. */
function buildNodeTOC(
  slug: string,
  title: string,
  children: DescendantRow[],
  mode: DepthMode,
  summaries: Map<string, Summary>,
  childrenByParent: Map<string, DescendantRow[]>,
): TOC {
  if (children.length === 0) {
    return { slug, title, children: [] };
  }

  const childTOCs: TOC[] = [];

  for (const child of children) {
    if (isClipped(child.depth, child.type, mode)) {
      // Clipped — use summary
      const summary = summaries.get(child.slug) ?? {
        chunkCount: 0,
        totalBytes: 0,
        depth: 0,
      };
      childTOCs.push({ slug: child.slug, title: child.title, children: summary });
    } else {
      // Expanded — recurse into child's children
      const grandChildren = childrenByParent.get(child.slug) ?? [];
      childTOCs.push(
        buildNodeTOC(child.slug, child.title, grandChildren, mode, summaries, childrenByParent),
      );
    }
  }

  return { slug, title, children: childTOCs };
}

/** Check if a node should be clipped at the given depth. */
function isClipped(nodeDepth: number, nodeType: string, mode: DepthMode): boolean {
  if (mode === "full") return false;
  if (typeof mode === "number") return nodeDepth >= mode;
  if (mode === "files" && nodeType === "file") return true;
  return false;
}
