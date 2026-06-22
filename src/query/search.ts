import type { Database } from "better-sqlite3";

/** Single search result with a highlighted snippet. */
export interface SearchHit {
  slug: string;
  snippet: string;   // excerpt around matched terms, <b>/</b> markers, ... ellipsis
  prev?: string;     // slug of previous sibling, sections only
  next?: string;     // slug of next sibling, sections only
  parent?: string;   // slug of parent document
}

/** Search results with total count and paginated hits. */
export interface SearchResults {
  total: number;
  hits: SearchHit[];
}

/** Parameters for a search query. */
export interface SearchParams {
  query: string;
  limit: number;
  offset: number;
}

/**
 * Full-text search over node titles and chunk content.
 *
 * Uses SQLite FTS5 with BM25 ranking. The query string accepts the full
 * FTS5 query language (plain words, phrases, AND/OR/NOT, prefix, NEAR).
 *
 * @param db - Open database connection.
 * @param params - Search parameters (query, limit, offset).
 * @returns Search results with total count and paginated hits.
 */
export function search(db: Database, params: SearchParams): SearchResults {
  const { query, limit, offset } = params;

  const total = countMatches(db, query);
  const rawHits = fetchRankedHits(db, query, limit, offset);

  // Fetch prev/next navigation for matched slugs
  const slugs = rawHits.map((h) => h.slug);
  const navBySlug = slugs.length > 0 ? fetchNavBySlug(db, slugs) : new Map();

  return {
    total,
    hits: rawHits.map((h) => mapToSearchHit(h, navBySlug)),
  };
}

/** Count total nodes matching the FTS5 query. */
function countMatches(db: Database, query: string): number {
  const row = db.prepare(`
    SELECT COUNT(*) AS total FROM nodes_fts WHERE nodes_fts MATCH ?
  `).get(query) as { total: number };
  return row.total;
}

/*
 * FTS5 snippet() requires exactly 5 arguments (after the table name):
 *   snippet(table, col, open_tag, close_tag, ellipsis, token_limit)
 * col=-1 searches all indexed columns and picks the best excerpt.
 * The documented "2-5 args" in the SQLite docs is wrong; source code enforces 5.
 */
const SNIPPET_COL = -1;       // search all columns
const SNIPPET_OPEN = "<b>";
const SNIPPET_CLOSE = "</b>";
const SNIPPET_ELLIPSIS = "...";
const SNIPPET_TOKENS = 30;

/** Fetch ranked hits matching the FTS5 query, with limit/offset pagination. */
function fetchRankedHits(
  db: Database,
  query: string,
  limit: number,
  offset: number,
): Array<{ slug: string; snippet: string }> {
  return db.prepare(`
    SELECT n.slug,
      snippet(nodes_fts, ${SNIPPET_COL}, '${SNIPPET_OPEN}', '${SNIPPET_CLOSE}', '${SNIPPET_ELLIPSIS}', ${SNIPPET_TOKENS}) AS snippet
    FROM nodes_fts
    JOIN nodes n ON n.rowid = nodes_fts.rowid
    WHERE nodes_fts MATCH ?
    ORDER BY rank
    LIMIT ? OFFSET ?
  `).all(query, limit, offset) as Array<{
    slug: string;
    snippet: string;
  }>;
}

/** Map a raw database hit to a SearchHit. */
function mapToSearchHit(
  h: { slug: string; snippet: string },
  navBySlug: Map<string, { parent: string | null; prev: string | null; next: string | null }>,
): SearchHit {
  const nav = navBySlug.get(h.slug);
  return {
    slug: h.slug,
    snippet: h.snippet,
    ...(nav?.prev ? { prev: nav.prev } : {}),
    ...(nav?.next ? { next: nav.next } : {}),
    ...(nav?.parent ? { parent: nav.parent } : {}),
  };
}

/**
 * Fetch parent, prev, next navigation for a list of slugs using window functions.
 * Returns a map of slug -> { parent, prev, next }.
 * parent is included for all non-root nodes. prev/next only for sections.
 */
function fetchNavBySlug(
  db: Database,
  slugs: string[],
): Map<string, { parent: string | null; prev: string | null; next: string | null }> {
  const placeholders = slugs.map(() => "?").join(",");
  const rows = db.prepare(`
    SELECT
      slug,
      type,
      parent_slug,
      LAG(slug) OVER (PARTITION BY parent_slug ORDER BY idx) AS prev_slug,
      LEAD(slug) OVER (PARTITION BY parent_slug ORDER BY idx) AS next_slug
    FROM nodes
    WHERE slug IN (${placeholders})
  `).all(...slugs) as Array<{
    slug: string;
    type: string;
    parent_slug: string | null;
    prev_slug: string | null;
    next_slug: string | null;
  }>;

  const navMap = new Map<string, { parent: string | null; prev: string | null; next: string | null }>();
  for (const row of rows) {
    const entry: { parent: string | null; prev: string | null; next: string | null } = {
      parent: row.parent_slug,
      prev: null,
      next: null,
    };
    // prev/next only for sections
    if (row.type === "section") {
      entry.prev = row.prev_slug;
      entry.next = row.next_slug;
    }
    navMap.set(row.slug, entry);
  }
  return navMap;
}
