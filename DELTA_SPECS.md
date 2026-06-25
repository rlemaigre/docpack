# Delta Specs — docpack v2

**Branch:** `docpack2`
**Baseline:** v0.7.6 (main)
**Nature:** Complete architectural overhaul. Breaking changes throughout.

---

## Why

Shift from a monolithic bundler with bundled features (skill generation, MCP, summaries) to a minimal primitive set. AI agents in user land compose and extend. The bundler becomes a chain of composable operators.

---

## Removed

| Feature | Reason |
|---|---|
| Skill generation (`generateSkill`) | Heavily collection-specific. User land. |
| MCP server (`serve --mcp`) | Trivial to wire. Tools are user-specific. |
| Multi-slug `get([slug1, slug2])` | Client loops and aggregates. |
| `parent`/`prev`/`next` fields on `Document` | Replaced by `ancestors()` query primitive. |
| `prev`/`next`/`parent` on `SearchHit` | Same reasoning. Client calls `ancestors()` if needed. |
| `level`/`depth` fields on `Document` | Derivable from `ancestors()` and tree walk. |
| `meta` field on `Document` | Not needed in the stripped model. |
| `home` manifest field | With single synthetic root, the entry point is always known. |
| `exportedAt` manifest field | User land concern. |

## New Core Concepts

### Everything Is a Document

A knowledge base is a document tree stored in SQLite. The tree has a single root (synthetic if multiple source files).

### The Document Type

```ts
interface Document<T = Record<string, unknown>> {
  slug: string;                      // globally unique identifier
  title: string | null;              // display name (populated by operators)
  chunk: string | null;              // self content (Markdown). null for internal nodes.
  meta: T;                           // typed metadata (frontmatter, ingestion info, operator output)
}
```

Generic over `T`. Default is untyped `Record<string, unknown>`.

**Ingestion output** — `KB.ofDirectory()` produces `Document<FileMeta>`:
- `slug`: auto-incremental ID (no parsing)
- `title`: null
- `chunk`: null
- `meta`: raw file attributes — content, path, basename, size, mtime, ...

```ts
interface FileMeta {
  content: string;
  path: string;        // absolute path
  relativePath: string; // relative to root directory
  basename: string;
  extname: string;
  size: number;
  mtime: number;
  frontmatter?: Record<string, unknown>; // parsed YAML frontmatter if present
}
```

Operators transform raw documents into structured ones — parsing content into slug/title/chunk, extracting hierarchy, etc.

**Removed fields:** `type`, `summary`, `index`, `parent`, `prev`, `next`, `level`, `depth`, `children`.
**Added:** `meta` — container for frontmatter data, ingestion metadata (file path, basename, author, dates), and operator output (e.g. `meta.summary` from summarize operator). Populated by `KB.ofDirectory()` from YAML frontmatter and filesystem info. Extended by operators as needed.

- Ordering: encoded in the closure table (`order` column), not on the document.
- Navigation: via `KB.fetchChildren()`, `KB.root()`, and the `ancestors()` query primitive.
- Tree structure: assembled by the consumer from `fetchChildren()` calls, not carried in the document.

### The KB Interface

```ts
interface KB<T = Record<string, unknown>> {
  /** Slug of the single root document. */
  root(): string;
  /** Fetch a document by slug. Returns null if not found. */
  fetch(slug: string): Document<T> | null;
  /** Slugs of direct children, in order. Empty array for leaves. */
  fetchChildren(slug: string): string[];
}
```

Generic over `T` — all documents in a KB share the same meta type. `KB.ofDirectory()` produces `KB<FileMeta>`. Operators preserve or transform the meta type.

Base interface. Two primary implementations:

- **Filesystem KB** (`KB.ofDirectory(path, glob)`) — reads files on demand. Flat tree. Produces `Document<FileMeta>` with slug=auto-id, title=null, chunk=null, meta=raw file attrs.
- **SQLite KB** (`query<T>(path)`) — same base methods plus efficient query primitives backed by the closure table and FTS5.

```ts
interface KBQuery<T = Record<string, unknown>> extends KB<T> {
  fetchMany(slugs: string[]): Document<T>[];      // batch fetch, missing skipped
  manifest(): Manifest;
  toc(slug: string, depth: number | "full"): TOC;
  get(slug: string): DocumentNode<T> | null;
  getMany(slugs: string[]): DocumentNode<T>[];
  ancestors(slug: string): DocumentNode<T>[];
  search(params: SearchParams): SearchHit[];
  close(): void;
}
```

All base methods are lazy — queried on each call. No caching guarantee. The consumer controls traversal depth and thus memory usage.

### Adapter

```ts
function asQuery<T>(kb: KB<T>): KBQuery<T>;
```

Adapts any KB to KBQuery. Pass-through if the input is already a KBQuery. Otherwise materializes to a temporary SQLite database. Used by operators that need query primitives (ancestors, toc, search) on an arbitrary KB input.

### Operators

```ts
type Operator<T = Record<string, unknown>> = (src: KB<T>) => KB<T>;
```

An operator receives a read-only KB and returns a new KB. The returned KB is a wrapper — it delegates to `src` and transforms results on demand. Zero materialization.

**Properties:**
- Pure: same input KB produces same output KB.
- Lazy: no traversal happens until the output KB is consumed.
- Composable: `op3(op2(op1(kb)))` chains transformations.

A filesystem-backed KB is just another implementation of the KB interface — like a SQLite-backed KB or a wrapper KB.

**Typical pipeline:**

1. `KB.ofDirectory("./docs")` → flat `KB<FileMeta>` (slug=auto-id, title=null, chunk=null, meta=raw file attrs)
2. `parseMarkdown()` → `KB<MarkdownMeta>` (slug/title/chunk populated from meta.content, frontmatter in meta)
3. `parseHeadings()` → recursive section tree from chunk content
4. `resolveCollisions()` → disambiguate duplicate slugs
5. `rewriteLinks()` → rewrite relative `.md` links to `docpack://slug` references
6. `summarizeLLM(opts)` → bottom-up tree fold, writes to meta.summary

**Built-in operators:**

| Operator | Purpose |
|---|---|
| `parseMarkdown()` | Materialize raw FileMeta into slug/title/chunk from content + frontmatter. |
| `parseHeadings()` | Split chunks on ATX headings → recursive section tree. |
| `insertIntroductions()` | Move preamble content into synthetic "Introduction" children. |
| `resolveCollisions()` | Disambiguate duplicate slugs (cross-file and section). |
| `rewriteLinks()` | Rewrite relative `.md` links to `docpack://slug` references. |
| `summarizeFile(path)` | Import summaries from a JSONL file. |
| `summarizeLLM(opts)` | Bottom-up tree fold with an LLM endpoint. |

### The Pipeline

```ts
/**
 * Apply operators to a source KB, materialize the result into a SQLite knowledge base.
 *
 * Traverses the composed KB tree, writes nodes and closure table to SQLite,
 * syncs FTS5 index, writes manifest.
 *
 * @param source - Source KB (filesystem-backed, SQLite-backed, or any KB implementation).
 * @param operators - Operators applied left-to-right (first wraps source, last wraps all).
 * @param output - Path to output directory (produces output/docpack.db + output/docpack.yaml).
 * @param options - Manifest metadata (description, url).
 * @returns Bundle statistics.
 */
function pipeline<T>(
  source: KB<T>,
  operators: Operator<T>[],
  output: string,
  options?: PipelineOptions,
): BundleStats;

interface PipelineOptions {
  description?: string;
  url?: string;
}

interface BundleStats {
  totalNodes: number;
  totalChunks: number;
  totalBytes: number;
}
```

Usage:

```ts
import { pipeline, KB, parseMarkdown, parseHeadings, resolveCollisions, rewriteLinks } from "@rlemaigre/docpack";

pipeline(
  KB.ofDirectory("./docs"),              // flat KB<FileMeta>: slug=auto-id, title=null, chunk=null
  [
    parseMarkdown(),            // populate slug/title/chunk from meta.content + frontmatter
    parseHeadings(),            // split on ATX headings → sections
    resolveCollisions(),        // fix duplicate slugs
    rewriteLinks(),             // relative .md → docpack://slug
  ],
  "./mykb",
  { description: "Project documentation" },
);
```

The `bundle()` function remains as a convenience wrapper around the default pipeline:

```ts
function bundle(options: BundleOptions): BundleStats;
```

### The Closure Table

```sql
CREATE TABLE closure (
  ancestor   TEXT REFERENCES nodes(slug),
  descendant TEXT REFERENCES nodes(slug),
  depth      INTEGER NOT NULL,
  order      INTEGER,  -- pre-order position relative to ancestor. set for all depths.
  PRIMARY KEY (ancestor, descendant)
);
```

- `order` is the pre-order traversal position of `descendant` within the subtree rooted at `ancestor`.
- Relative to `ancestor`: node X has `order=3` under ancestor A but `order=1` under ancestor B. Correct.
- Direct children: `SELECT descendant FROM closure WHERE ancestor = ? AND depth = 1 ORDER BY order`.
- Full subtree: `SELECT descendant FROM closure WHERE ancestor = ? ORDER BY order`.
- Parent of X: `SELECT ancestor FROM closure WHERE descendant = ? AND depth = 1`.

The closure table IS the hierarchy. The nodes table carries no structural information.

### The Nodes Table

```sql
CREATE TABLE nodes (
  slug    TEXT PRIMARY KEY,
  title   TEXT,           // nullable — populated by operators
  chunk   TEXT,
  meta    TEXT  -- JSON object: frontmatter + ingestion metadata + operator output
);
```

No `parent_slug`, no `idx`. Flat attribute store. Structure lives in `closure`.

### FTS5 Table

Indexes `title` and `chunk` columns for full-text search.

### Relationship Tables

Retained. Schema unchanged from v0.x.

```sql
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

## Query API Changes

### KBQuery Interface

The SQLite KB implementation extends the base `KB` with efficient query primitives. Replaces the old `KBInstance`.

```ts
interface KBQuery extends KB {
  manifest(): Manifest;
  toc(slug: string, depth: number | "full"): TOC;
  get(slug: string): DocumentNode | null;     // single slug, with subtree
  getMany(slugs: string[]): DocumentNode[];   // batch fetch, with subtrees
  ancestors(slug: string): DocumentNode[];    // chain from parent to root
  search(params: SearchParams): SearchHit[];  // flat array, no total wrapper
  close(): void;
}
```

```ts
export function query(path: string): KBQuery;
```

### `ancestors(slug)` — New Primitive

Returns the chain of parent documents from immediate parent up to the root. Uses the closure table.

```ts
kb.ancestors("api-auth-introduction");
// [
//   { slug: "api-auth", title: "Authentication" },
//   { slug: "api", title: "API Reference" },
//   { slug: "_root", title: null },
// ]
```

Client can navigate:
- **Downward:** `toc(slug, depth)` 
- **Upward:** `ancestors(slug)`
- **Siblings:** `ancestors(slug)[0]` gives parent → `toc(parentSlug, 0)` gives siblings

### `get(slug)` — Single Slug Only

Returns the document and its full subtree. Returns `null` if not found. No array overload.

The returned `Document` includes a `children` array (populated from the closure table). This is the assembled tree view for the consumer. The base `Document` type itself does not have `children` — the query result adds it.

```ts
interface DocumentNode<T = Record<string, unknown>> {
  slug: string;
  title: string | null;
  chunk: string | null;
  meta: T;
  children: DocumentNode<T>[];  // populated by get() / toc()
}
```

### `getMany(slugs[])` — Batch Fetch

Fetches multiple documents (each with subtree) in one call. Missing slugs skipped. Replaces the old array overload of `get()`.

### `search(params)` — Simplified

Returns a flat array of hits. No `SearchResults` wrapper with `total`.

```ts
interface SearchHit {
  slug: string;
  snippet: string;   // FTS5 excerpt with <b></b> markers
  rank: number;      // BM25 score (cannot be reproduced in user land)
}

interface SearchParams {
  query: string;
  limit: number;
  offset: number;
}
```

Removed from `SearchHit`: `prev`, `next`, `parent`. Client calls `ancestors()` if needed.

Removed from results: `total` count. Client can do an unbounded query if needed (rare).

### `toc(slug, depth)` — Unchanged Semantics

Returns the table of contents subtree. Clipped subtrees carry `Summary` stats.

```ts
interface TOC {
  slug: string;
  title: string | null;
  children: TOC[] | Summary;  // [] = leaf, TOC[] = expanded, Summary = clipped
}

interface Summary {
  chunkCount: number;
  totalBytes: number;
  depth: number;
}
```

### `manifest()` — Simplified

```ts
interface Manifest {
  version: string;
  totalNodes: number;
  totalChunks: number;
  totalBytes: number;
  description: string | null;
  url: string | null;
}
```

Removed: `home`, `exportedAt`.

---

## CLI Changes

### Removed Commands

| Command | Reason |
|---|---|
| `docpack skill` | Skill generation removed. |
| `docpack serve --mcp` | MCP removed. |
| `docpack summarize` | Becomes an operator, not a standalone CLI command. Users pipe operators in user land. |

### Modified Commands

| Command | Changes |
|---|---|
| `docpack bundle` | Simplified. No `--home`. Wraps default pipeline. |
| `docpack get` | Single `--slug` (no longer repeatable). Client loops. |
| `docpack search` | Output simplified (no `total`, no nav fields). |

### New Commands

None. The pipeline is a TypeScript library concept. CLI stays thin.

### Bundle Command (New)

```bash
docpack bundle --input ./docs --output ./mykb [--description "..."] [--url "..."]
```

Removed: `--home`, `--exported-at`.

---

## Public API Surface (New)

```ts
// Core types
export interface Document<T = Record<string, unknown>> { ... }
export interface KB<T = Record<string, unknown>> { ... }
export interface KBQuery<T = Record<string, unknown>> extends KB<T> { ... }
export type Operator<T = Record<string, unknown>> = (src: KB<T>) => KB<T>;

// KB factory
export const KB: {
  ofDirectory(path: string, glob?: string): KB<FileMeta>;
};

// Query
export function query<T = Record<string, unknown>>(path: string): KBQuery<T>;

// Adapter
export function asQuery<T>(kb: KB<T>): KBQuery<T>;

// Pipeline
export function pipeline<T>(source: KB<T>, operators: Operator<T>[], output: string, options?: PipelineOptions): BundleStats;
export function bundle(options: BundleOptions): BundleStats;  // convenience wrapper

// Operators
export function parseMarkdown(): Operator<FileMeta>;
export function parseHeadings<T>(): Operator<T>;
export function insertIntroductions<T>(): Operator<T>;
export function resolveCollisions<T>(): Operator<T>;
export function rewriteLinks<T>(): Operator<T>;
export function summarizeFile<T>(path: string): Operator<T>;
export function summarizeLLM<T>(opts: SummarizeLLMOptions): Operator<T>;

// Query types
export interface Manifest { ... }
export interface TOC { ... }
export interface Summary { ... }
export interface SearchHit { ... }
export interface SearchParams { ... }
```

### Removed Exports

- `generateSkill`, `GenerateSkillOptions`
- `summarize` (standalone function) — replaced by `summarizeFile` / `summarizeLLM` operators
- `SummarizeOptions`, `SummarizeFileOptions` (replaced by operator options)
- `get(slug[])` overload — replaced by `getMany()`
- `SearchResults` wrapper type — search returns `SearchHit[]` directly

---

## File Changes

### Deleted

| File | Reason |
|---|---|
| `src/skill/generate.ts` | Skill generation removed. |
| `src/skill/templates/` | Templates removed. |
| `src/cli/mcp.ts` | MCP removed. |
| `src/post-process/summarize.ts` | Replaced by summarize operators. |

### Modified

| File | Changes |
|---|---|
| `src/index.ts` | New exports, removed old ones. |
| `src/schema.ts` | New schema (no parent_slug, no idx, closure with order, no relationship tables). |
| `src/query/index.ts` | KBQuery interface extending KB, new methods. |
| `src/query/get.ts` | Single slug, new DocumentNode type, uses closure table. |
| `src/query/search.ts` | Simplified SearchHit, flat array return. |
| `src/query/toc.ts` | Uses closure table instead of parent_slug. |
| `src/cli/index.ts` | Removed skill/serve/summarize commands. Simplified bundle/get/search. |
| `src/bundler/index.ts` | Replaced by pipeline + operators. |
| `src/bundler/db.ts` | Replaced by pipeline materializer. |
| `src/bundler/walker.ts` | Becomes `ingest` operator. |
| `src/bundler/parser.ts` | Becomes `parseHeadings` operator. |
| `src/bundler/link-rewriter.ts` | Becomes `rewriteLinks` operator. |
| `src/bundler/manifest.ts` | Simplified manifest (no home, no exportedAt). |
| `src/utils/slug.ts` | Collision resolution becomes `resolveCollisions` operator. |

### Added

| File | Purpose |
|---|---|
| `src/operators/index.ts` | Operator exports and types. |
| `src/kb/of.ts` | `KB.ofDirectory(path, glob)` — filesystem-backed KB factory (root + raw file docs). |
| `src/operators/parse-headings.ts` | `parseHeadings()` operator — ATX heading parsing. |
| `src/operators/insert-introductions.ts` | `insertIntroductions()` operator — synthetic intro sections. |
| `src/operators/resolve-collisions.ts` | `resolveCollisions()` operator — slug disambiguation. |
| `src/operators/rewrite-links.ts` | `rewriteLinks()` operator — link rewriting. |
| `src/operators/summarize-file.ts` | `summarizeFile(path)` operator — JSONL import. |
| `src/operators/summarize-llm.ts` | `summarizeLLM(opts)` operator — LLM fold. |
| `src/pipeline.ts` | Pipeline function — compose operators, materialize to SQLite. |
| `src/query/ancestors.ts` | `ancestors(slug)` query — closure table lookup. |
| `src/query/materialize.ts` | Traverse KB, write nodes + closure to SQLite. |

### Tests

| File | Changes |
|---|---|
| `tests/skill.test.ts` | Deleted. |
| `tests/summarize.test.ts` | Replaced by operator tests. |
| `tests/bundle.test.ts` | Rewritten for pipeline + operators. |
| `tests/query.test.ts` | Updated for new API (ancestors, getMany, simplified search). |
| `tests/cli.test.ts` | Updated for new CLI surface. |
| `tests/parser.test.ts` | Moved to operator tests. |
| `tests/walker.test.ts` | Moved to operator tests. |
| `tests/operators.test.ts` | New — operator unit and integration tests. |
| `tests/pipeline.test.ts` | New — pipeline composition and materialization tests. |

---

## Migration Notes (for reference, not shipped)

Users upgrading from v0.x to v2.x:

1. `bundle()` no longer accepts `--home`. Use `KB.ofDirectory()` or a custom KB implementation.
2. `get([slug1, slug2])` → `getMany([slug1, slug2])`.
3. `search()` returns `SearchHit[]` directly, not `{ total, hits }`.
4. Navigation via `parent`/`prev`/`next` fields → use `ancestors(slug)` and `toc(slug, 0)`.
5. `summarize()` → use `summarizeFile()` or `summarizeLLM()` as operators in a pipeline.
6. `generateSkill()` → implement in user land.
7. MCP server → implement in user land using the query API.
