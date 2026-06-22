import type { Database } from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";
import YAML from "yaml";

/** Subtree summary for a single file node in the manifest. */
export interface FileSummary {
  chunkCount: number;
  totalBytes: number;
  depth: number;
  text?: string;
}

/**
 * Manifest data written to docpack.yaml.
 *
 * Contains version, aggregate statistics, root slugs, and a flat list
 * of all ingested file slugs with subtree summaries.
 */
export interface Manifest {
  version: string;
  totalChunks: number;
  totalBytes: number;
  roots: string[];
  files: Array<{
    slug: string;
    summary: FileSummary;
  }>;
}

/**
 * Build a Manifest from the database.
 *
 * Queries root slugs, file nodes, and per-file subtree statistics
 * via the closure table.
 *
 * @param db - Open database connection.
 * @param version - Package version string (from package.json).
 * @param totalChunks - Total chunk count from insertion stats.
 * @param totalBytes - Total byte count from insertion stats.
 * @returns Complete manifest object.
 */
export function buildManifest(
  db: Database,
  version: string,
  totalChunks: number,
  totalBytes: number,
): Manifest {
  const roots = fetchRootSlugs(db);
  const files = fetchFileSummaries(db);

  return { version, totalChunks, totalBytes, roots, files };
}

/** Fetch root node slugs (nodes with no parent), ordered by index. */
function fetchRootSlugs(db: Database): string[] {
  const rows = db.prepare(
    "SELECT slug FROM nodes WHERE parent_slug IS NULL ORDER BY idx",
  ).all() as Array<{ slug: string }>;

  return rows.map((r) => r.slug);
}

/** Fetch all file nodes with their subtree summaries in a single grouped query. */
function fetchFileSummaries(db: Database): Manifest["files"] {
  const rows = db.prepare(`
    SELECT f.slug,
      COUNT(DISTINCT n.slug) AS chunkCount,
      COALESCE(SUM(CASE WHEN n.chunk IS NOT NULL THEN length(n.chunk) ELSE 0 END), 0) AS totalBytes,
      MAX(c.depth) AS depth
    FROM nodes f
    LEFT JOIN closure c ON c.ancestor = f.slug
    LEFT JOIN nodes n ON n.slug = c.descendant AND n.chunk IS NOT NULL
    WHERE f.type = 'file'
    GROUP BY f.slug
    ORDER BY f.idx
  `).all() as Array<{
    slug: string;
    chunkCount: number;
    totalBytes: number;
    depth: number;
  }>;

  return rows.map((row) => ({
    slug: row.slug,
    summary: {
      chunkCount: row.chunkCount,
      totalBytes: row.totalBytes,
      depth: row.depth,
    },
  }));
}

/**
 * Write the manifest to docpack.yaml in the output directory.
 *
 * Creates parent directories if needed. Uses lineWidth: 0 to disable
 * line wrapping in the YAML output.
 *
 * @param outputDir - Path to the output directory.
 * @param data - Manifest data to serialize.
 */
export async function writeManifest(outputDir: string, data: Manifest): Promise<void> {
  fs.mkdirSync(outputDir, { recursive: true });
  const yamlStr = YAML.stringify(data, { lineWidth: 0 });
  fs.writeFileSync(path.join(outputDir, "docpack.yaml"), yamlStr, "utf8");
}

/**
 * Read and parse the manifest from docpack.yaml.
 *
 * @param kbDir - Path to the knowledge base directory.
 * @returns Parsed manifest object.
 * @throws If docpack.yaml does not exist.
 */
export async function readManifest(kbDir: string): Promise<Manifest> {
  const yamlPath = path.join(kbDir, "docpack.yaml");
  const content = fs.readFileSync(yamlPath, "utf8");
  return YAML.parse(content) as Manifest;
}
