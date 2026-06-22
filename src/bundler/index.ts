import Database from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";
import { toSlug } from "../utils/slug";
import { createSchema } from "../schema";
import { walkFS } from "./walker";
import { insertTree } from "./db";
import { buildManifest, writeManifest } from "./manifest";
import pkg from "../../package.json";

/** Options for bundle. */
export interface BundleOptions {
  /** Path to the input file or directory. */
  input: string;
  /** Path to the output directory (produces output/docpack.db + output/docpack.yaml). */
  output: string;
  /** Human-readable description of what the KB covers. */
  description?: string;
  /** Source URL (wiki, website, etc.). */
  url?: string;
  /** Date of source data export/scraping (ISO 8601). Auto-set to bundle time if omitted. */
  exportedAt?: string;
  /** Path to the primary entry file. Resolved to a slug for the manifest. */
  home?: string;
  /** Called per file during processing. */
  onProgress?: (path: string, processed: number, total: number) => void;
  /** Called per failed file. Bundler skips and continues. */
  onError?: (path: string, error: string) => void;
}

/** Statistics returned by bundle. */
export interface BundleStats {
  filesProcessed: number;
  totalChunks: number;
  totalBytes: number;
}

/**
 * Bundle a directory of Markdown files into a portable knowledge base.
 *
 * Pipeline: create DB -> schema -> walk filesystem -> insert nodes -> write manifest -> close.
 *
 * All database operations run inside a single synchronous transaction.
 * Overwrites existing output directory.
 *
 * @param options - Bundle configuration.
 * @returns Statistics about the bundling operation.
 */
export function bundle(options: BundleOptions): BundleStats {
  const { input, output, onProgress, onError } = options;

  const dbPath = path.join(output, "docpack.db");

  prepareOutputDir(output);

  const db = new Database(dbPath);
  try {
    createSchema(db);
    const files = walkFS(input);
    const stats = insertTree(db, files, onProgress, onError);
    const homeSlug = resolveHomeSlug(options.home, input);
    const manifest = buildManifest(db, pkg.version, stats.totalChunks, stats.totalBytes, {
      home: homeSlug,
      description: options.description,
      url: options.url,
      exportedAt: options.exportedAt,
    });
    writeManifest(output, manifest);

    return {
      filesProcessed: stats.filesProcessed,
      totalChunks: stats.totalChunks,
      totalBytes: stats.totalBytes,
    };
  } finally {
    db.close();
  }
}

/** Resolve the home file path to a slug, or undefined if not provided. */
function resolveHomeSlug(homePath: string | undefined, input: string): string | undefined {
  if (!homePath) return undefined;

  const absoluteInput = path.resolve(input);
  const absoluteHome = path.resolve(homePath);

  // Check if the file exists
  if (!fs.existsSync(absoluteHome)) {
    process.stderr.write(`[bundle] warning: home file not found: ${homePath}\n`);
    return undefined;
  }

  // Compute the relative path from input to home file
  const relPath = path.relative(absoluteInput, absoluteHome).replace(/\\/g, "/");

  // Derive the slug the same way the bundler does
  const name = path.basename(relPath);
  const baseSlug = toSlug(name.replace(/\.[^.]+$/, "")) || name;

  // For now, return the base slug. In a collision scenario the actual slug
  // may differ, but the home file is typically unique (index.md, README.md, etc.)
  return baseSlug;
}

/** Remove existing output directory and recreate it. */
function prepareOutputDir(output: string): void {
  if (fs.existsSync(output)) {
    fs.rmSync(output, { recursive: true });
  }
  fs.mkdirSync(output, { recursive: true });
}
