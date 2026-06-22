import fg from "fast-glob";
import * as fs from "node:fs";
import path from "node:path";

/**
 * Flat file entry for a single ingested Markdown file.
 *
 * No directory nodes — all files are collected as a flat, sorted list.
 * The `relPath` preserves the original path for slug disambiguation.
 */
export interface FileEntry {
  name: string;
  relPath: string;
  absolutePath: string;
  index: number;
}

/**
 * Walk a directory and return a flat, sorted list of file entries.
 *
 * Uses fast-glob to discover all files. Directories are ignored —
 * only file entries are returned, sorted by path with numeric locale ordering.
 *
 * For single-file input, returns a list with one entry.
 *
 * @param input - Path to the input file or directory.
 * @returns Sorted array of file entries.
 */
export function walkFS(input: string): FileEntry[] {
  const absoluteInput = path.resolve(input);

  // Check if input is a single file
  const stat = fs.statSync(absoluteInput);
  if (!stat.isDirectory()) {
    const name = path.basename(absoluteInput);
    return [{
      name,
      relPath: name,
      absolutePath: absoluteInput,
      index: 0,
    }];
  }

  const entries = fg.globSync("**/*", {
    cwd: absoluteInput,
    objectMode: true,
    onlyFiles: true,
    dot: true,
  });

  const files: FileEntry[] = [];

  for (const entry of entries) {
    if (!entry.dirent.isFile()) continue;

    const rel = normalizePath(entry.path);
    const name = rel.slice(rel.lastIndexOf("/") + 1);

    files.push({
      name,
      relPath: rel,
      absolutePath: path.join(absoluteInput, rel),
      index: 0, // assigned after sorting
    });
  }

  // Sort by full path, numeric locale ordering
  files.sort((a, b) => a.relPath.localeCompare(b.relPath, undefined, { numeric: true }));

  // Assign indices
  files.forEach((f, i) => { f.index = i; });

  return files;
}

// ---------------------------------------------------------------------------
// Path utilities
// ---------------------------------------------------------------------------

/** Normalize path separators to forward slashes. */
function normalizePath(p: string): string {
  return p.replace(/\\/g, "/");
}
