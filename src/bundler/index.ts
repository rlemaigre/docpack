import Database from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";
import { createSchema } from "../schema";
import { walkFS } from "./walker";
import { insertTree } from "./db";
import { buildManifest, writeManifest } from "./manifest";
import pkg from "../../package.json";

/**
 * Synchronous function that receives a file path and returns Markdown.
 *
 * The converter is responsible for file I/O, charset detection, format parsing,
 * and text transformation. Return null to skip the file.
 */
export type Converter = (path: string) => string | null;

/** Options for bundle. */
export interface BundleOptions {
  /** Path to the input file or directory. */
  input: string;
  /** Path to the output directory (produces output/docpack.db + output/docpack.yaml). */
  output: string;
  /** Converter callback for transforming files to Markdown. */
  converter: Converter;
  /** Glob pattern for file discovery. */
  include?: string;
  /** Called per file during processing. */
  onProgress?: (path: string, processed: number, total: number) => void;
  /** Called per failed file. Bundler skips and continues. */
  onError?: (path: string, error: string) => void;
}

/** Statistics returned by bundle. */
export interface BundleStats {
  filesProcessed: number;
  filesSkipped: number;
  totalChunks: number;
  totalBytes: number;
}

/**
 * Bundle a directory of documents into a portable knowledge base.
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
  const { input, output, converter, include, onProgress, onError } = options;

  const dbPath = path.join(output, "docpack.db");

  prepareOutputDir(output);

  const db = new Database(dbPath);
  try {
    createSchema(db);
    const roots = walkFS(input, include);
    const stats = insertTree(db, roots, converter, onProgress, onError);
    const manifest = buildManifest(db, pkg.version, stats.totalChunks, stats.totalBytes);
    writeManifest(output, manifest);

    return {
      filesProcessed: stats.filesProcessed,
      filesSkipped: stats.filesSkipped,
      totalChunks: stats.totalChunks,
      totalBytes: stats.totalBytes,
    };
  } finally {
    db.close();
  }
}

/** Remove existing output directory and recreate it. */
function prepareOutputDir(output: string): void {
  if (fs.existsSync(output)) {
    fs.rmSync(output, { recursive: true });
  }
  fs.mkdirSync(output, { recursive: true });
}
