import type { Database } from "better-sqlite3";

/** Single search result with matched content and BM25 rank. */
export interface SearchHit {
  slug: string;
  title: string;
  text: string;
  rank: number;
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

  return {
    total,
    hits: rawHits.map(mapToSearchHit),
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
function mapToSearchHit(h: { slug: string; title: string; chunk: string | null; rank: number }): SearchHit {
  return {
    slug: h.slug,
    title: h.title,
    text: h.chunk ?? "",
    rank: h.rank,
  };
}
