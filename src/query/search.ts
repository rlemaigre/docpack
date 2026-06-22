import type { Database } from "better-sqlite3";

/** Single search result with matched content and BM25 rank. */
export interface SearchHit {
  slug: string;
  title: string;
  text: string;
  rank: number;
  prev?: string;  // slug of previous sibling, sections only
  next?: string;  // slug of next sibling, sections only
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

/** Fetch ranked hits matching the FTS5 query, with limit/offset pagination. */
function fetchRankedHits(
  db: Database,
  query: string,
  limit: number,
  offset: number,
): Array<{ slug: string; title: string; chunk: string | null; rank: number }> {
  return db.prepare(`
    SELECT n.slug, n.title, n.chunk, rank
    FROM nodes_fts
    JOIN nodes n ON n.rowid = nodes_fts.rowid
    WHERE nodes_fts MATCH ?
    ORDER BY rank
    LIMIT ? OFFSET ?
  `).all(query, limit, offset) as Array<{
    slug: string;
    title: string;
    chunk: string | null;
    rank: number;
  }>;
}

/** Map a raw database hit to a SearchHit. */
function mapToSearchHit(
  h: { slug: string; title: string; chunk: string | null; rank: number },
  navBySlug: Map<string, { prev: string | null; next: string | null }>,
): SearchHit {
  const nav = navBySlug.get(h.slug);
  return {
    slug: h.slug,
    title: h.title,
    text: h.chunk ?? "",
    rank: h.rank,
    ...(nav?.prev ? { prev: nav.prev } : {}),
    ...(nav?.next ? { next: nav.next } : {}),
  };
}

/**
 * Fetch prev/next navigation for a list of slugs using window functions.
 * Returns a map of slug -> { prev, next } for sections only.
 */
function fetchNavBySlug(
  db: Database,
  slugs: string[],
): Map<string, { prev: string | null; next: string | null }> {
  const placeholders = slugs.map(() => "?").join(",");
  const rows = db.prepare(`
    SELECT
      slug,
      type,
      LAG(slug) OVER (PARTITION BY parent_slug ORDER BY idx) AS prev_slug,
      LEAD(slug) OVER (PARTITION BY parent_slug ORDER BY idx) AS next_slug
    FROM nodes
    WHERE slug IN (${placeholders})
  `).all(...slugs) as Array<{
    slug: string;
    type: string;
    prev_slug: string | null;
    next_slug: string | null;
  }>;

  const navMap = new Map<string, { prev: string | null; next: string | null }>();
  for (const row of rows) {
    // prev/next only for sections
    if (row.type === "section") {
      navMap.set(row.slug, {
        prev: row.prev_slug,
        next: row.next_slug,
      });
    }
  }
  return navMap;
}
