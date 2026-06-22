import type { Database } from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";
import YAML from "yaml";

/**
 * Manifest data written to docpack.yaml.
 *
 * Metadata only — no file enumeration. Describes the KB's provenance
 * and scope. Agents discover content via `home` → follow links → `search()`.
 */
export interface Manifest {
  version: string;
  totalChunks: number;
  totalBytes: number;
  home: string | null;
  description: string | null;
  url: string | null;
  exportedAt: string;
}

/** Options for building the manifest. */
export interface ManifestOptions {
  /** Slug of the primary entry page. */
  home?: string;
  /** Human-readable description of what the KB covers. */
  description?: string;
  /** Source URL (wiki, website, etc.). */
  url?: string;
  /** Date of source data export/scraping (ISO 8601). Auto-set to bundle time if omitted. */
  exportedAt?: string;
}

/**
 * Build a metadata-only Manifest.
 *
 * @param db - Open database connection (unused, kept for API compatibility).
 * @param version - Package version string (from package.json).
 * @param totalChunks - Total chunk count from insertion stats.
 * @param totalBytes - Total byte count from insertion stats.
 * @param options - Optional metadata fields.
 * @returns Manifest object.
 */
export function buildManifest(
  _db: Database,
  version: string,
  totalChunks: number,
  totalBytes: number,
  options: ManifestOptions = {},
): Manifest {
  const exportedAt = options.exportedAt ?? new Date().toISOString();

  return {
    version,
    totalChunks,
    totalBytes,
    home: options.home ?? null,
    description: options.description ?? null,
    url: options.url ?? null,
    exportedAt,
  };
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
