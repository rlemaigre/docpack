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
| Relationship tables (`relationships`, `relationship_instances`, `relationship_params`) | Future feature, never shipped. Premature. |
| `home` manifest field | With single synthetic root, the entry point is always known. |
| `exportedAt` manifest field | User land concern. |

## New Core Concepts

### Everything Is a Document

No separate "KB" data type. A knowledge base is a document tree stored in SQLite. The tree has a single root (synthetic if multiple source files).

### The KB Interface (Lazy Read Handle)

```ts
interface KB {
  /** Slug of the single root document. */
  root(): string;
  /** Fetch a document by slug. Returns null if not found. */
  fetch(slug: string): Document | null;
  /** Slugs of direct children, in order. Empty array for leaves. */
  fetchChildren(slug: string): string[];
}
```

All three methods are lazy — they query SQLite on each call. No caching guarantee. The consumer controls traversal depth and thus memory usage.

### Operators

Two kinds:

```ts
/** 0-ary: reads filesystem, produces initial flat KB. */
type Ingestor = () => KB;

/** Unary: transforms a KB into a new KB. Lazy wrapper. */
type Operator = (src: KB) => KB;
```

An operator receives a read-only KB and returns a new KB. The returned KB is a wrapper — it delegates to `src` and transforms results on demand. Zero materialization.

**Properties:**
- Pure: same input KB produces same output KB.
- Lazy: no traversal happens until the output KB is consumed.
- Composable: `op3(op2(op1(kb)))` chains transformations.

**Ingestor** — the seed. Reads a directory and produces a flat KB: synthetic root (`_root`) with one child per file. Each child is an atomic document — `chunk` is the raw file text (Markdown, frontmatter, whatever). Zero parsing, zero structure. The ingestor has no brain.

**Built-in operators:**

| Operator | Kind | Purpose |
|---|---|---|
| `ingest(dir)` | Ingestor | Read directory → flat KB (root + raw file docs). |
| `parseHeadings()` | Unary | Split chunks on ATX headings → recursive section tree. |
| `insertIntroductions()` | Unary | Move preamble content into synthetic "Introduction" children. |
| `resolveCollisions()` | Unary | Disambiguate duplicate slugs (cross-file and section). |
| `rewriteLinks()` | Unary | Rewrite relative `.md` links to `docpack://slug` references. |
| `summarizeFile(path)` | Unary | Import summaries from a JSONL file. |
| `summarizeLLM(opts)` | Unary | Bottom-up tree fold with an LLM endpoint. |

### The Pipeline

```ts
/**
 * Chain an ingestor + operators, materialize the result into a SQLite knowledge base.
 *
 * The first element is always an Ingestor (0-ary, reads filesystem).
 * Remaining elements are Operators (unary, transform KB → KB).
 *
 * Traverses the composed KB tree, writes nodes and closure table to SQLite,
 * syncs FTS5 index, writes manifest.
 *
 * @param steps - [ingest, op1, op2, ...] applied left-to-right.
 * @param output - Path to output directory (produces output/docpack.db + output/docpack.yaml).
 * @param options - Manifest metadata (description, url).
 * @returns Bundle statistics.
 */
function pipeline(
  steps: [Ingestor, ...Operator[]],
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
import { pipeline, ingest, parseHeadings, insertIntroductions, resolveCollisions, rewriteLinks } from "@rlemaigre/docpack";

pipeline(
  [
    ingest("./docs"),           // 0-ary: flat KB, raw file text
    parseHeadings(),            // unary: split on ATX headings → sections
    insertIntroductions(),      // unary: preamble → synthetic children
    resolveCollisions(),        // unary: fix duplicate slugs
    rewriteLinks(),             // unary: relative .md → docpack://slug
  ],
  "./mykb",
  { description: "Project documentation" },
);
```

The `bundle()` function remains as a convenience wrapper around the default pipeline:

```ts
function bundle(options: BundleOptions): BundleStats;
```

### The Document Type

```ts
interface Document {
  slug: string;           // globally unique identifier
  type: "file" | "section";
  title: string;
  chunk: string | null;   // self content (Markdown). null for internal nodes.
  summary: string | null; // AI-generated subtree summary. optional.
}
```

**Removed fields:** `index`, `parent`, `prev`, `next`, `level`, `depth`, `children`, `meta`.

- Ordering: encoded in the closure table (`order` column), not on the document.
- Navigation: via `KB.fetchChildren()`, `KB.root()`, and the `ancestors()` query primitive.
- Tree structure: assembled by the consumer from `fetchChildren()` calls, not carried in the document.

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
  type    TEXT NOT NULL CHECK (type IN ('file', 'section')),
  title   TEXT NOT NULL,
  chunk   TEXT,
  summary TEXT
);
```

No `parent_slug`, no `idx`. Flat attribute store. Structure lives in `closure`.

### FTS5 Table

Unchanged. `nodes_fts` virtual table indexing `title` and `chunk`.

---

## Query API Changes

### New Interface

```ts
interface KBInstance {
  manifest(): Manifest;
  toc(slug: string, depth: number | "full"): TOC;
  get(slug: string): Document | null;        // single slug only
  getMany(slugs: string[]): Document[];       // batch fetch, missing skipped
  ancestors(slug: string): Document[];        // chain from parent to root, ordered
  search(params: SearchParams): SearchHit[];  // flat array, no total wrapper
  close(): void;
}
```

### `ancestors(slug)` — New Primitive

Returns the chain of parent documents from immediate parent up to the root. Uses the closure table.

```ts
kb.ancestors("api-auth-introduction");
// [
//   { slug: "api-auth", title: "Authentication" },
//   { slug: "api", title: "API Reference" },
//   { slug: "_root", title: "Documents" },
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
interface DocumentNode {
  slug: string;
  type: "file" | "section";
  title: string;
  chunk: string | null;
  summary: string | null;
  children: DocumentNode[];  // populated by get() / toc()
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
  title: string;
  children: TOC[] | Summary;  // [] = leaf, TOC[] = expanded, Summary = clipped
}

interface Summary {
  chunkCount: number;
  totalBytes: number;
  depth: number;
  text?: string;
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
export interface Document { ... }
export interface KB { ... }
export type Ingestor = () => KB;                     // 0-ary: filesystem → flat KB
export type Operator = (src: KB) => KB;              // unary: transform KB → KB

// Pipeline
export function pipeline(steps: [Ingestor, ...Operator[]], output: string, options?: PipelineOptions): BundleStats;
export function bundle(options: BundleOptions): BundleStats;  // convenience wrapper

// Ingestor
export function ingest(dir: string): Ingestor;

// Operators
export function parseHeadings(): Operator;
export function insertIntroductions(): Operator;
export function resolveCollisions(): Operator;
export function rewriteLinks(): Operator;
export function summarizeFile(path: string): Operator;
export function summarizeLLM(opts: SummarizeLLMOptions): Operator;

// Query
export function query(kbDir: string): KBInstance;
export interface KBInstance { ... }

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
- `KBInstance.get(slug[])` overload — replaced by `getMany()`
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
| `src/query/index.ts` | New KBInstance interface, new methods. |
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
| `src/operators/ingest.ts` | `ingest(dir)` ingestor — filesystem → flat KB (root + raw file docs). |
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

1. `bundle()` no longer accepts `--home`. Use the synthetic root or a custom ingest operator.
2. `get([slug1, slug2])` → `getMany([slug1, slug2])`.
3. `search()` returns `SearchHit[]` directly, not `{ total, hits }`.
4. Navigation via `parent`/`prev`/`next` fields → use `ancestors(slug)` and `toc(slug, 0)`.
5. `summarize()` → use `summarizeFile()` or `summarizeLLM()` as operators in a pipeline.
6. `generateSkill()` → implement in user land.
7. MCP server → implement in user land using the query API.
