import Database from "better-sqlite3";
import type { Database as DB } from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";
import YAML from "yaml";
import { toc as tocFn } from "./toc";
import { get as getFn, batchGet as batchGetFn } from "./get";
import { search as searchFn } from "./search";
import type { TOC, Summary } from "./toc";
import type { Document } from "./get";
import type { SearchHit, SearchResults, SearchParams } from "./search";

export type { Summary, TOC, Document, SearchHit, SearchResults, SearchParams };

export interface Manifest {
  version: string;
  totalChunks: number;
  totalBytes: number;
  home: string | null;
  description: string | null;
  url: string | null;
  exportedAt: string;
}

/**
 * Live handle to a knowledge base.
 *
 * Wraps a better-sqlite3 DB connection and a cached manifest.
 * All query methods are synchronous. Call close() when done.
 */
export interface KBInstance {
  manifest(): Manifest;
  toc(slug: string, depth: number | "full"): TOC;
  get(slug: string): Document | null;
  get(slugs: string[]): Document[];
  search(params: SearchParams): SearchResults;
  close(): void;
}

/**
 * Open a knowledge base for querying.
 *
 * Opens the DB connection. Returns a KBInstance with manifest(), toc(),
 * get(), search(), close(). Throws if docpack.db is missing.
 *
 * @param kbDir - Path to the directory containing docpack.db and docpack.yaml.
 * @returns KBInstance for querying the knowledge base.
 */
export function query(kbDir: string): KBInstance {
  const dbPath = path.join(kbDir, "docpack.db");
  const yamlPath = path.join(kbDir, "docpack.yaml");

  // better-sqlite3 creates an empty file if the path doesn't exist — guard against that
  if (!fs.existsSync(dbPath)) {
    throw new Error(`Knowledge base not found: ${dbPath}`);
  }

  const db = new Database(dbPath);
  let cachedManifest: Manifest | null = null;

  return createKBInstance(db, yamlPath, () => cachedManifest!, (v) => { cachedManifest = v; });
}

/** Build the KBInstance object with lazy manifest caching. */
function createKBInstance(
  db: DB,
  yamlPath: string,
  getManifest: () => Manifest,
  setManifest: (m: Manifest) => void,
): KBInstance {
  return {
    manifest(): Manifest {
      const cached = getManifest();
      if (cached) return cached;
      const content = fs.readFileSync(yamlPath, "utf8");
      const parsed = YAML.parse(content) as Manifest;
      setManifest(parsed);
      return parsed;
    },

    toc(slug: string, depth: number | "full"): TOC {
      const result = tocFn(db, slug, depth);
      if (!result) {
        throw new Error(`Slug not found: ${slug}`);
      }
      return result;
    },

    // sonarjs: overload implementation — single slug returns Document|null, array returns Document[]
    // eslint-disable-next-line sonarjs/function-return-type
    get(arg: string | string[]): Document | null | Document[] {
      if (Array.isArray(arg)) {
        return batchGetFn(db, arg);
      }
      return getFn(db, arg);
    },

    search(params: SearchParams): SearchResults {
      return searchFn(db, params);
    },

    close(): void {
      db.close();
    },
  } as KBInstance;
}
