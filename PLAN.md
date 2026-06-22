# Implementation Plan — docpack

> Self-contained reference. Start from this document in any session.
> Full spec: [SPECS.md](../SPECS.md)

## Project Summary

`docpack` — a TypeScript library for turning a directory of documents into a portable, queryable knowledge base. Published as `@rlemaigre/docpack`. CLI wraps the same TypeScript library.

**Knowledge Base layout:**
```
mykb/
  docpack.db        # SQLite (nodes, FTS5, originals, closure, relationships)
  docpack.yaml      # human-readable manifest (version, stats, root slugs, file list with summaries)
```

**Core flow:**
1. **Bundle** — walk files → converter (user-supplied) → Markdown → parse headings → build node tree → insert into SQLite
2. **Post-process** (optional) — `summarize()` generates subtree summaries
3. **Query** — `manifest()` reads YAML, `toc()` navigates hierarchy, `get()` fetches subtree, `search()` runs FTS5

---

## Build Configuration

### Build Tool

`tsup` — TypeScript bundler on esbuild.

### `package.json` (relevant fields)

```json
{
  "name": "@rlemaigre/docpack",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "bin": {
    "docpack": "dist/cli/index.js"
  },
  "files": ["dist"],
  "dependencies": {
    "better-sqlite3": "^12.11.1",
    "fast-glob": "^3.3.3",
    "@sindresorhus/slugify": "^3.0.0",
    "yaml": "^2.9.0",
    "xmlbuilder": "^15.1.1",
    "mime-types": "^3.0.2",
    "cac": "^7.0.0",
    "@modelcontextprotocol/sdk": "^1.29.0"
  },
  "devDependencies": {
    "typescript": "^6.0.3",
    "tsup": "^8.5.1",
    "@types/better-sqlite3": "^7.6.13",
    "@types/mime-types": "^3.0.1",
    "@types/node": "^26.0.0"
  },
  "scripts": {
    "build": "tsup",
    "cli": "node dist/cli/index.js"
  }
}
```

### `tsup.config.ts`

```ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: false,
  clean: true,
  shims: false,
  noExternal: [],          // bundle everything except node_modules
  external: ["better-sqlite3", "node:*"],  // better-sqlite3 needs native binding
  banner: {
    js: { "src/cli/index.ts": "#!/usr/bin/env node" },
  },
});
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "verbatimModuleSyntax": true,
    "declaration": false,   // tsup handles .d.ts
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

---

## Dependencies

| Package | Purpose |
|---|---|
| `better-sqlite3` | Synchronous SQLite. Required for closure table batch operations (no async drivers support the transactional inserts we need). |
| `fast-glob` | File discovery with glob patterns. |
| `@sindresorhus/slugify` | Heading text → URL-safe slug. |
| `yaml` | Parse docpack.yaml (manifest) + CLI YAML output. |
| `xmlbuilder` | XML serialization for CLI `get()` output. |
| `mime-types` | MIME type detection from file extension for originals table. |
| `cac` | CLI argument parsing. |
| `@modelcontextprotocol/sdk` | MCP server mode. |
| `zlib` (built-in) | Gzip for originals table. |
| `crypto` (built-in) | SHA256 for originals. |
| `readline` (built-in) | Stdio utilities. |

---

## SQLite Schema

```sql
CREATE TABLE nodes (
  slug        TEXT PRIMARY KEY,
  type        TEXT NOT NULL CHECK (type IN ('directory', 'file', 'section')),
  title       TEXT NOT NULL,
  parent_slug TEXT REFERENCES nodes(slug),
  idx         INTEGER NOT NULL,
  chunk       TEXT,          -- Markdown content. FTS5 keeps its own indexed copy.
  summary     TEXT,          -- AI-generated subtree summary text. Optional.

  UNIQUE (parent_slug, idx)
);

CREATE VIRTUAL TABLE nodes_fts USING fts5(title, chunk, content='nodes');

CREATE TABLE originals (
  slug    TEXT PRIMARY KEY REFERENCES nodes(slug),
  path    TEXT NOT NULL,      -- relative to bundler input, forward slashes
  data    BLOB NOT NULL,      -- original file bytes, gzipped
  mime    TEXT NOT NULL,
  sha256  TEXT NOT NULL
);

CREATE TABLE closure (
  ancestor   TEXT REFERENCES nodes(slug),
  descendant TEXT REFERENCES nodes(slug),
  depth      INTEGER NOT NULL,
  PRIMARY KEY (ancestor, descendant)
);

CREATE TABLE relationships (
  name   TEXT PRIMARY KEY,
  schema TEXT NOT NULL
);

CREATE TABLE relationship_instances (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  relationship_name TEXT NOT NULL REFERENCES relationships(name),
  value  TEXT NOT NULL DEFAULT '{}'
);

CREATE TABLE relationship_params (
  instance_id INTEGER NOT NULL REFERENCES relationship_instances(id),
  role   TEXT NOT NULL,
  slug   TEXT NOT NULL REFERENCES nodes(slug),
  PRIMARY KEY(instance_id, role, slug)
);

CREATE INDEX idx_rel_params_slug ON relationship_params(slug);
```

---

## Source Files

### `src/schema.ts` — DB Creation

```ts
import Database from "better-sqlite3";
import type { Database as DB } from "better-sqlite3";

export function createSchema(db: DB): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS nodes (...);
    CREATE VIRTUAL TABLE IF NOT EXISTS nodes_fts USING fts5(title, chunk, content='nodes');
    CREATE TABLE IF NOT EXISTS originals (...);
    CREATE TABLE IF NOT EXISTS closure (...);
    CREATE TABLE IF NOT EXISTS relationships (...);
    CREATE TABLE IF NOT EXISTS relationship_instances (...);
    CREATE TABLE IF NOT EXISTS relationship_params (...);
  `);
}
```

---

### `src/utils/slug.ts` — Slug Utilities

```ts
import slugify from "@sindresorhus/slugify";

export function toSlug(text: string): string {
  const s = slugify(text, { decamelize: false });
  return s || "";  // empty for CJK / punctuation-only
}
```

---

### `src/bundler/parser.ts` — Markdown Heading Tree Builder

Returns the bottom hierarchy: a tree of heading nodes with parent pointers. Same shape as `FSNode`.

```ts
const HEADING_RE = /^(#{1,6})\s+(.+)$/;

export interface MDNode {
  title: string;
  chunk: string | null;     // self content (not aggregated)
  parent: MDNode | null;    // pointer to parent heading (or file node conceptually)
  children: MDNode[];       // subsections
  index: number;            // position among siblings (heading order)
}

export function walkMD(filename: string, markdown: string): MDNode {
  // Line-by-line scan with fenced code block awareness.
  // Returns a single MDNode tree. Root construction depends on preamble:
  //
  // No preamble + h1 exists → root = h1 node (title from h1, chunk = h1 content).
  //   Filename is discarded. The h1 title is semantically meaningful.
  //   e.g. book.md containing "# Alice in Wonderland" → slug=alice-in-wonderland
  //
  // Preamble exists → root = file node (title from filename, chunk = preamble).
  //   h1 becomes a child node under root. Both nodes are mandatory.
  //
  // No headings at all → root = file node (title from filename, chunk = all content).
  //   No children.
  //
  // Heading children follow the same MDNode shape recursively.

  // Gotchas to avoid:
  // - Skip lines inside fenced code blocks (``` ... ```). A # inside code is not a heading.
  // - Skip indented code blocks (4+ space indent). Same reason.
  // - Do NOT use a full Markdown parser (remark, markdown-it, etc.). User-supplied converters
  //   produce imperfect Markdown. Full parsers fail on innocuous syntax mistakes.
  // - Heading regex: /^(#{1,6})\s+(.+)$/. ATX only. No setext headings (--- / ===).
  // - Trim trailing # characters from heading text (e.g. "## Title ##" → "Title").
  // - Empty heading text after slugify → fallback to _N (node index).
}
```

---

### `src/bundler/walker.ts` — File Discovery

Returns the top hierarchy: a tree of directory and file nodes with parent pointers. No content loaded.

```ts
import fg from "fast-glob";
import * as mime from "mime-types";

export interface FSNode {
  type: 'directory' | 'file';
  name: string;              // basename
  path: string;              // relative path from input root, forward slashes
  absolutePath: string;      // full filesystem path
  parent: FSNode | null;     // pointer to parent directory
  children: FSNode[];        // subdirectories and files
  index: number;             // position among siblings (filesystem sort order)
  mime?: string;             // MIME type, files only
}

export function walkFS(
  input: string,
  include?: string,
): FSNode[] {
  // 1. fg.glob(include ?? "**/*", { cwd: input, onlyFiles: true }) → file list
  // 2. fg.glob(include ?? "**/", { cwd: input, onlyDirectories: true }) → dir list
  // 3. Build tree: create directory nodes, nest file nodes under deepest parent dir
  // 4. Sort children by name. Assign index.
  // 5. Return root FSNodes (immediate children of input, no synthetic wrapper)
}
```

---

### `src/bundler/db.ts` — DB Insertion

Walks the `FSNode` tree, processes files lazily, inserts into DB immediately.
`MDNode` hierarchy per file is loaded on-demand, merged conceptually into `nodes` table.

#### Interface

```ts
export interface InsertResult {
  totalChunks: number;
  totalBytes: number;
}

function resolveCollision(
  desiredSlug: string,
  parentSlug: string | null,
  index: number,
  db: DB,
): string;

export function insertTree(
  db: DB,
  root: FSNode,
  converter: (path: string) => string | null,
): InsertResult;
```

#### Implementation Notes

* Walk `FSNode` tree, inserting each node before its children (parent `slug` must exist for FK on `parent_slug`).
* **Directory nodes**: no chunk.
* **File nodes**: read → convert → `walkMD` → insert file node + heading children.
* Track `totalChunks` / `totalBytes` during insertion.
* After all inserts: build closure table (recursive CTE) + sync FTS5.

#### Gotchas

* **Insert order is mandatory**: parent `slug` must exist before children — `parent_slug` is a FK constraint.
* **Converter is sync, `db.transaction()` is sync** — clean fit. Single transaction wraps the entire bundle.
* **Slug collision resolution**: `resolveCollision` prefixes with parent slug, recurses up ancestor chain, falls back to `_N`.
* **Originals**: gzip raw file bytes, compute SHA256, store MIME type.
* **Chunks are plain TEXT** (not gzipped per latest spec — FTS5 keeps independent copy).

---

### `src/bundler/manifest.ts` — docpack.yaml Write/Read

#### Interface

```ts
export interface Manifest {
  version: string;
  totalChunks: number;
  totalBytes: number;
  roots: string[];
  files: Array<{
    slug: string;
    summary: {
      chunkCount: number;
      totalBytes: number;
      depth: number;
      text?: string;      // present after summarize()
    };
  }>;
}

export async function writeManifest(
  outputDir: string,
  data: Manifest,
): Promise<void>;

export async function readManifest(kbDir: string): Promise<Manifest>;
```

#### Implementation Notes

* `writeManifest`: create dir if needed, write YAML with `lineWidth: 0` (no wrapping).
* `readManifest`: parse YAML. Used by `manifest()` query.
* Version comes from `package.json`.
* `files` entries: one per file node (from `originals` table). Subtree stats computed via closure table.
* Called by `bundle()` (initial write) and `summarize()` (update with `text`).

---

### `src/bundler/index.ts` — bundle() Entry Point

#### Interface

```ts
export type Converter = (path: string) => string | null;

export interface BundleOptions {
  input: string;
  output: string;
  converter: Converter;
  include?: string;
  onProgress?: (path: string, processed: number, total: number) => void;
  onError?: (path: string, error: string) => void;
}

export interface BundleStats {
  filesProcessed: number;
  filesSkipped: number;
  totalChunks: number;
  totalBytes: number;
}

export function bundle(options: BundleOptions): BundleStats;
```

#### Implementation Notes

* Pipeline: create DB → `createSchema` → `walkFS` → `insertTree` → `writeManifest` → close.
* `filesProcessed` / `filesSkipped` tracked during `insertTree` (converter returning `null` = skip).
* Roots for manifest: nodes with `parent_slug IS NULL`.

#### Gotchas

* `insertTree` returns chunk stats but NOT file-level stats (`filesProcessed`/`filesSkipped`). Those need to be tracked inside `insertTree` and returned in `InsertResult`, or tracked separately.
* `onProgress` / `onError` callbacks need to be threaded through `insertTree`.

---

### `src/query/index.ts` — query() Entry, KB Factory

#### Interface

```ts
export interface Summary {
  chunkCount: number;
  totalBytes: number;
  depth: number;
  text?: string;
}

export interface TOC {
  slug: string;
  title: string;
  children: TOC[] | Summary;    // [] = leaf, TOC[] = expanded, Summary = clipped
}

export interface Document {
  slug: string;
  title: string;
  level: number;      // hops from root to this node
  depth: number;      // hops from this node to deepest descendant
  parent?: string;    // slug of parent, absent for roots
  prev?: string;      // slug of previous sibling, sections only
  next?: string;      // slug of next sibling, sections only
  chunk?: string;
  children: Document[];
}

export interface SearchHit {
  slug: string;
  title: string;
  text: string;         // matched node's content
  rank: number;
}

export interface SearchResults {
  total: number;
  hits: SearchHit[];
}

export interface SearchParams {
  query: string;
  limit: number;
  offset: number;
}

export interface KBInstance {
  manifest(): Manifest;
  toc(slug: string, depth: number | "files" | "full"): TOC;
  get(slug: string): Document | null;
  search(params: SearchParams): SearchResults;
  close(): void;
}

export function query(kbDir: string): KBInstance;
```

#### Implementation Notes

* `query()` returns a `KBInstance` wrapping a `better-sqlite3` DB connection + cached manifest.
* Manifest loaded once (sync read of `docpack.yaml`).
* `toc`, `get`, `search` delegated to separate modules.

#### Gotchas

* **better-sqlite3 is sync**. All query methods are sync. The `summarize()` function is async because the user-supplied summarizer callback may call async LLM APIs.
* `close()` must be called to release DB handle.

---

---

### `src/query/toc.ts` — toc(slug, depth)

#### Interface

```ts
export function buildSummary(db: DB, slug: string): Summary | undefined;
export function toc(db: DB, slug: string, depth: number | "files" | "full"): TOC | null;
```

#### Implementation Notes

* `buildSummary`: single query joining `closure` + `nodes` for subtree stats (chunk count, byte sum, max depth, AI text).
* `toc`: verify slug exists → recursive `buildTOC`.
* `buildTOC`: leaf → return node. Depth exceeded → attach `Summary`. Otherwise → recurse into children.
* **depth = `'files'`**: expand to file boundaries — unfold directories and sections, stop at `type: "file"` nodes with `Summary`. Natural document-level overview.
* **depth = `'full'`**: full tree, no clipping. Equivalent to a number exceeding tree height but explicit.
* Clipped nodes: `children` is a `Summary` (replaces the removed subtree). Leaves: `children` is `[]`.

#### Gotchas

* `length(n.chunk)` on TEXT column = byte length of UTF-8 string. Matches `Buffer.byteLength(chunk, "utf8")` used during insertion.
* N+1 query pattern: each `buildTOC` call fires queries for node + children. Could be batched but closure table makes it straightforward.

---

---

### `src/query/get.ts` — get(slug)

#### Interface

```ts
export function get(db: DB, slug: string): Document | null;
function buildNavigation(db: DB, slug: string): { parent?: string; prev?: string; next?: string };
```

#### Implementation Notes

* Fetch target node → fetch all descendants via closure table → fetch full node data → assemble subtree.
* `buildNavigation`: derive `parent`/`prev`/`next` slugs from structure. `prev`/`next` only for sections (siblings with ordered parent).
* `level` = hops from root. `depth` = hops to deepest descendant. Both computed from closure table.

#### Gotchas

* **IN clause with many descendants**: for deep subtrees, `WHERE slug IN (?)` can be huge. Consider batching or using a temp table.
* **Parameter binding limit**: SQLite has a limit on number of parameters (~32766). Deep trees could hit this.
* Chunks are plain TEXT (no decompression needed per latest spec).

---

### `src/query/search.ts` — search(params)

#### Interface

```ts
export function search(db: DB, params: SearchParams): SearchResults;
```

#### Implementation Notes

* Two queries: `COUNT(*)` for total, then ranked fetch with `LIMIT`/`OFFSET`.
* FTS5 MATCH query on `nodes_fts` table, joined to `nodes` on `rowid`.
* Each hit returns the matched node's `text`.

#### Gotchas

* FTS5 query language is exposed directly (phrases, AND/OR/NOT, prefix, NEAR, column-specific). No sanitization needed — it's the user's query.
* N+1 pattern for per-hit processing. Acceptable for paginated results.

---

### `src/post-process/summarize.ts` — summarize()

#### Interface

```ts
export type Summarizer = (
  kb: KBInstance,
  emit: (slug: string, summary: string) => void,
) => Promise<void>;

export interface SummarizeOptions {
  input: string;
  summarizer: Summarizer;
}

export async function summarize(options: SummarizeOptions): Promise<void>;
```

#### Implementation Notes

* Open KB, create KBInstance, pass to summarizer along with `emit` callback.
* `emit` buffers `[slug, summary]` pairs in memory.
* After summarizer returns: clear all existing summaries in DB, then batch-insert buffered pairs.
* Re-read manifest, fill `text` per file entry from `nodes.summary`, rewrite `docpack.yaml`.
* Close KB.

#### Gotchas

* `emit` is synchronous — the summarizer calls it, docpack buffers. Batch write after summarizer returns.
* If summarizer emits duplicate slugs, last value wins.
* If summarizer emits a non-existent slug, skip with warning.

---

### `src/cli/format.ts` — Output Formatting

#### Interface

```ts
export function formatXml(node: Document): string;
export function formatYaml(data: unknown): string;
```

#### Implementation Notes

* `formatXml`: use `xmlbuilder` to serialize `Document` → `<document>` XML.
  * Attributes: `slug`, `title`, `level`, `depth`, `parent` (optional), `prev` (optional), `next` (optional).
  * `<chunk>` (optional, Markdown text).
  * `<children>` (empty for leaves).
* `formatYaml`: `yaml.stringify` with `lineWidth: 0`.

#### Gotchas

* xmlbuilder uses `@attr` prefix for attributes. Handle optional fields carefully (don't emit empty `<chunk/>` or `<children/>`).
* XML output for `get()` only. YAML for `manifest`, `toc`, `search`.

---

### `src/cli/index.ts` — CLI Entry Point

#### Interface

```ts
// Commands:
//   docpack bundle     --input <path> --output <path> --converter <path> [--include <pattern>]
//   docpack manifest   <kb>
//   docpack toc        <kb> <slug> [--depth <n>]
//   docpack get        <kb> <slug>
//   docpack search     <kb> <query> [--limit <n>] [--offset <n>]
//   docpack summarize  <kb> --fn <path>
//   docpack serve      <kb> --mcp
```

#### Implementation Notes

* `cac` for command parsing.
* **bundle**: dynamic `import()` for converter script. Stats JSON to stdout, progress/errors to stderr.
* **manifest/toc/search**: YAML to stdout. **get**: XML to stdout.
* **summarize**: dynamic `import()` for `--fn` script.
* **serve --mcp**: `@modelcontextprotocol/sdk`. Tools: `manifest`, `toc`, `get`, `search`.
* Exit 0 = success (result to stdout). Exit 1 = error (JSON `{ message }` to stderr).

#### Gotchas

* **MCP search params**: MCP tool calls send params as an object. `search` receives `{ query, limit, offset }` directly.
* Dynamic `import()` for converter/fn scripts — must resolve relative to CWD, not module path.
* `kbinst.close()` must be called after each query command (or use try/finally).

---

### `src/index.ts` — Public API Re-exports

#### Interface

```ts
export { bundle } from "./bundler";
export type { BundleOptions, BundleStats, Converter } from "./bundler";

export { query } from "./query";
export type { KBInstance, Summary, TOC, Document, Manifest, SearchHit, SearchResults, SearchParams } from "./query";

export { summarize } from "./post-process/summarize";
export type { SummarizeOptions, Summarizer } from "./post-process/summarize";

```

#### Implementation Notes

* Barrel file. Re-exports all public functions and types.
* No implementation logic — just forwarding.

---

## Implementation Order

### Phase 1 — Foundation

1. **Project setup** — package.json, tsconfig.json, tsup.config.ts
2. **`src/schema.ts`** — DB creation, table definitions
3. **`src/utils/slug.ts`** — slugify + collision resolution (parent-prefixing)
4. **`src/bundler/parser.ts`** — MD heading regex → flat sections → tree

### Phase 2 — Bundler

5. **`src/bundler/walker.ts`** — fast-glob, mime-types
6. **`src/bundler/db.ts`** — transactional insert, gzip chunks, originals, closure table, FTS sync
7. **`src/bundler/manifest.ts`** — docpack.yaml write/read
8. **`src/bundler/index.ts`** — bundle() wiring

### Phase 3 — Query

9. **`src/query/index.ts`** — KB class, DB connection, manifest caching
10. **`src/query/toc.ts`** — toc() with Summary from closure table
11. **`src/query/get.ts`** — get() with navigation, subtree assembly
12. **`src/query/search.ts`** — FTS5 query, BM25 ranking

### Phase 4 — Post-Processing

13. **`src/post-process/summarize.ts`** — open KB, call summarizer(kb, emit), batch-insert results
14. **(TBD v2)** — relationship computation and surfacing to TS APIs

### Phase 5 — Wire It Up

15. **`src/cli/format.ts`** — xmlbuilder for get(), yaml for manifest/toc/search
16. **`src/cli/index.ts`** — cac commands, dynamic script loading for converter/fn
17. **`src/index.ts`** — public API re-exports

### Phase 6 — Servers

18. **MCP server** — @modelcontextprotocol/sdk

### Phase 7 — Build & Test

20. **tsup build** — verify dist output, .d.ts generation
21. **Integration tests** — real files → bundle → query → verify

---

## Known Issues / TODOs

### `totalBytes` accuracy

`length(n.chunk)` on a TEXT column returns the byte length of the UTF-8 string. This is accurate for plain TEXT chunks. Tracked during insertion via `Buffer.byteLength(chunk, "utf8")`.

### Async vs Sync API

The bundler (`bundle()`) is fully synchronous — sync converter, sync DB, single transaction.

The query API (`kb.manifest()`, `kb.toc()`, etc.) is fully sync — matches `better-sqlite3`. The `summarize()` function is async because the user-supplied summarizer callback may call async LLM APIs.

The summarizer (`summarize()`) is async (LLM calls).

### Directory nodes in the tree

The bundler needs to create directory nodes for the horizontal axis. E.g. `docs/api/` creates a `docs` directory node and an `api` directory node. Files become children of their deepest directory node. This is implied by the spec but not detailed in the code sketches.

### FTS5 contentless table

`fts5(title, chunk, content='nodes')` — the `content='nodes'` option means FTS5 is a contentless external-content table. The sync query `INSERT INTO nodes_fts(rowsid, title, chunk) SELECT rowid, title, chunk FROM nodes` copies data at index time. After that, FTS5 is independent of the `nodes.chunk` column.

### MCP `search` params

MCP tool calls send params as an object. For `search`, the params are `{ query, limit, offset }`. The MCP handler receives them directly as an object.

---

## Test Strategy (TBD)

- Integration tests: create temp directory with test files → bundle → query → assert results
- Snapshot tests for XML output format
- Edge cases: empty files, CJK slugs, deep nesting, collision resolution
