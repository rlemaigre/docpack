# Project

`docpack` — a TypeScript library for turning a directory of Markdown files into a portable, queryable knowledge base, and querying it back. Published as `@rlemaigre/docpack`. The CLI wraps the same TypeScript library for both bundling and querying.

# Language

TypeScript.

# Use Cases

1. **AI skill generation** — an agent uses the higher-order [Agent Skill](#agent-skill) to turn a folder of documents into a self-contained skill it (or another agent) can load. See [Agent Skill](#agent-skill).
2. **Mini-RAG** — efficient retrieval from a local knowledge base without a vector DB or server. FTS + structured queries + optional embeddings.
3. **Unified bundle** — any directory of Markdown files → single portable file. Language-agnostic consumption via the query CLI.

# Contracts

* **CLI** — single binary for both sides of the pipeline. Consumed via `npx @rlemaigre/docpack` or installed as a dependency.
* **Bundling TypeScript library** (`bundle()`) — for AI agents and developers that create knowledge bases programmatically.
* **Querying TypeScript library** (`query()`) — for AI agents and developers that consume knowledge bases programmatically.
* **DB schema** — internal implementation detail. Not a public contract. May change at any time.

# Concepts

## Bundler

Recursively walks a file or directory of Markdown files, aggregating data into a uniform, hierarchical view of knowledge, where the boundaries between file content structure and directory structure are abstracted away.

1. Converts the hierarchy of directories and files into a tree of `Nodes`.
2. For each file:
  1. Reads the file as Markdown.
  2. Parses headings to extract the internal hierarchy and extends the tree with one `Node` for each section.

The bundler runs entirely within a single synchronous SQLite transaction — no async involved. Input files are assumed to be Markdown; conversion from other formats is the caller's responsibility.

## Knowledge Base

A directory containing two files:

```
mykb/
  docpack.db        # SQLite knowledge base
  docpack.yaml      # human-readable manifest
```

`docpack.yaml` is a living manifest updated by `bundle()` and post-processing steps. Contains the same data as `manifest()`: version, statistics, root slugs, and a flat list of all ingested file slugs with subtree summaries. Human-readable on GitHub — no CLI needed to understand what's inside.

```yaml
version: "1.0.0"    # docpack version that created this KB
totalChunks: 42
totalBytes: 133714
roots:
  - getting-started
  - api-reference
files:
  - slug: getting-started
    summary:
      chunkCount: 5
      totalBytes: 8420
      depth: 2
      text: "Overview of setup, configuration, and first steps."  # after summarize()
  - slug: getting-started-installation
    summary:
      chunkCount: 3
      totalBytes: 4200
      depth: 1
  - slug: api-reference
    summary:
      chunkCount: 12
      totalBytes: 31000
      depth: 3
  - slug: api-reference-auth
    summary:
      chunkCount: 4
      totalBytes: 6200
      depth: 1
```

* `roots` — top-level entry points (nodes with no parent).
* `files` — flat list of all ingested file slugs, each with subtree stats. `text` is absent until `summarize()` runs.
* Updated by `bundle()` (initial write with structural stats) and `summarize()` (fills `text`).

Path resolution is explicit: the consumer always points to the directory containing `docpack.db` and `docpack.yaml`. No suffix guessing.

Consumers query the KB via the CLI (`npx @rlemaigre/docpack toc ./mykb "slug"`) or the TypeScript library (`query("./mykb")`). Direct SQL access is not supported — the schema is an internal detail and may change.

## Agent Skill

A **higher-order skill** (or skill factory) that an agent loads to learn how to produce consumable skills from a directory of documents.

The higher-order skill teaches the agent:

* How to import and call the `bundle()` function.
* How to prepare Markdown files as input.
* How to trigger the bundling process and handle progress/errors.
* How to query the resulting KB using `toc()` and `get()`.
* How to trigger the skill generation post-processing step.

Guided by the higher-order skill, the agent follows three steps:

1. **Bundle** — the agent calls `bundle()` on a directory of Markdown files, producing a KB directory (`docpack.db` + `docpack.yaml`).
2. **Explore** — the agent queries the KB using `toc()` and `get()` to understand its structure and content.
3. **Generate** — the agent triggers a post-processing step, supplying natural language context (what the KB covers, when to use it, domain specifics). This fills a `SKILL.md` template.

The output is a **generated skill** package containing:

* `docpack.db` — the SQLite knowledge base.
* `docpack.yaml` — the manifest.
* `SKILL.md` — explains what is bundled, when and how to use it, and how to query the KB.

The generated skill is self-contained. Any agent loading it can query the KB using `npx @rlemaigre/docpack` without needing the higher-order skill or docpack source code.

Skill generation is an optional post-processing step, separate from bundling. The bundler produces data; the skill generator produces agent instructions.

# Data Model

## Node

One shape for all nodes — directories, files, sections, leaves:

```
Node = { type : "directory" | "file" | "section", title : string, slug : string, index : number, chunk : string?, summary : string?, children: Node[] }
```

* `type` — distinguishes directories (filesystem folders), files (ingested source documents), and sections (Markdown headings). Files are the primary unit — they provide natural boundaries for TOC depth and are the meaningful target for summaries.
* `title` — human-readable label.
* `slug` — globally unique identifier.
* `index` — position among siblings. Assigned by the bundler (filesystem sort order or heading order).
* `chunk` — *self content* of the node only, does NOT aggregate of the whole subtree. Optional (e.g. directories have no associated chunk).
* `summary` — AI-generated summary of the entire subtree (chunk + all descendants). Optional. Produced by post-processing.
* `children` — always present. Empty `[]` = leaf.

## Hierarchy Axes

The hierarchy has two dimensions:

1. **Horizontal** — the directory tree above documents (folders → files). Built by the bundler from the filesystem.
2. **Vertical** — the internal structure within each document (sections → subsections → leaves). Built by the bundler from Markdown headings.

Directories are internal nodes with no self content (`type: "directory"`). Files are ingested source documents (`type: "file"`). Sections are Markdown heading nodes (`type: "section"`). Files and sections can be internal or leaf nodes.

## Slug Generation

* Uses `@sindresorhus/slugify` for heading text → slug.
* File/directory nodes: slug from basename (without extension for files).
* Empty slug (e.g. CJK, punctuation-only): fallback to `_N` where N is the node's index.
* Cross-file collisions: prefix the conflicting slug with its parent slug, recursively up the tree, until globally unique. E.g. two `example` slugs under `getting-started` and `api-reference` become `getting-started-example` and `api-reference-example`. Fallback to `_N` (node index) only if ancestor chaining still collides.

# Text Formats

## Input

The bundler recursively walks the input directory and reads every file as **Markdown text (UTF-8)**. No file type filtering or conversion is performed — all files are treated as Markdown.

* Files that are not valid Markdown will still be ingested. The parser scans for ATX headings; files with no headings become single-chunk nodes.
* Non-text files (binary, images, etc.) will fail to parse gracefully — they become empty or garbled nodes. The caller should exclude such files before bundling.
* Conversion from other formats (PDF, DOCX, etc.) is the caller's responsibility.

## Markdown Parsing

* **Headings** — ATX only (`#` through `######`). Regex: `^(#{1,6})\s+(.+)$`.
* **Content before first heading** — becomes self content of the file node itself.
* **Zero headings** — single chunk: file node with content, no children.
* **Content between headings** — becomes chunk content for that heading's node. For nested headings (e.g. `## A` followed by `### B`), content between `## A` and `### B` belongs to the `A` node.

## Output — Chunk Content

Individual chunk content is Markdown. Stored as TEXT in the knowledge base (`chunk` column). FTS5 maintains its own indexed copy — no live sync needed.

## Output — XML

`get()` returns a typed `Document` tree. The CLI serializes it to XML on stdout.

### document

```
<document slug="..." title="..." level="N" depth="N" parent="..." prev="..." next="...">
  <chunk>...</chunk>              <!-- optional: Markdown self-content -->
  <children> <!-- zero or more child document elements -->
    <document>...</document>
    <document>...</document>
  </children>
</document>
```

* `<chunk>` — optional. Markdown self-content. Absent for nodes without content.
* `<children>` — zero or more child `<document>` elements. Empty for leaf nodes. Directory children are unordered. File/section children have semantic ordering.
* `parent` — optional. Slug of the parent document. Absent for root nodes.
* `prev` / `next` — optional. Slugs of sibling documents in reading order. Present only for sections (ordered children of a file).
* `level` — hops from KB root to this node (root = 0). Preserved in subtrees.
* `depth` — hops from this node to its deepest descendant (leaf = 0).
* Attributes (`slug`, `title`, `level`, `depth`, `parent`, `prev`, `next`) are machine-parseable and can be queried by scripts operating on the XML output.
* Unlimited nesting depth — no Markdown h6 limitation.
* Symmetric structure all the way down — no special case for leaf nodes.

### Examples

Leaf section (`get("api-auth")`):
```xml
<document slug="api-auth" title="Authentication" level="2" depth="0" parent="api" prev="api-overview" next="api-billing">
  <chunk>
# Authentication

OAuth details...
  </chunk>
</document>
```

Internal node (`get("docs")`):
```xml
<document slug="docs" title="docs" level="0" depth="2">
  <children>
    <document slug="readme" title="README" level="1" depth="1" parent="docs">
      <chunk>
# My Project

Intro text...
      </chunk>
    </document>
    <document slug="contributing" title="Contributing" level="1" depth="1" parent="docs">
      <chunk>
# Contributing

How to contribute...
      </chunk>
    </document>
  </children>
</document>
```

# API — Bundler

## TypeScript Library

Implementation. The CLI wraps this.

```ts
import { bundle } from "@rlemaigre/docpack";

interface BundleOptions {
  input: string;              // path to file or directory
  output: string;             // path to output directory (e.g. "./mykb" — produces mykb/docpack.db + mykb/docpack.yaml)
  onProgress?: (path: string, processed: number, total: number) => void;
  onError?: (path: string, error: string) => void;
}

interface BundleStats {
  filesProcessed: number;
  totalChunks: number;
  totalBytes: number;
}

bundle(options): BundleStats;
```

* The bundler reads each file as Markdown, parses headings to build the chunk hierarchy.
* `onProgress` — called per file. Caller can display a spinner, log, or ignore.
* `onError` — called per failed file. Bundler skips and keeps going.
* Produces `<output>/docpack.db` (SQLite) and `<output>/docpack.yaml` (manifest). Creates parent dirs. Overwrites existing output.
* FTS5 index synced once at bundle time (after all chunks inserted). No triggers.

### Summaries

Two modes for post-processing summarization. Both use **upsert semantics** — existing summaries for untouched slugs are preserved.

#### JSONL file mode

Import summaries from a JSONL file produced by any tool (LLM script, human, etc.). No code to write.

```ts
import { summarize } from "@rlemaigre/docpack";

interface SummarizeFileOptions {
  input: string;              // path to KB directory (resolves docpack.db)
  summaries: string;          // path to JSONL file
}

summarize(options);
```

JSONL format — one summary per line:
```jsonl
{"slug":"getting-started","summary":"Overview of setup, configuration, and first steps."}
{"slug":"api-reference","summary":"Complete API documentation covering auth, billing, and webhooks."}
```

* Unknown slugs are skipped with a warning to stderr.
* Malformed lines are skipped with a warning.
* Duplicate slugs: last value wins.
* Upserts into `nodes.summary` and patches `docpack.yaml` text fields.

#### LLM fold mode

Built-in bottom-up tree fold. Docpack traverses the tree and calls an OpenAI-compatible LLM endpoint with a user-supplied prompt template. No code to write.

```ts
import { summarize } from "@rlemaigre/docpack";

interface SummarizeLLMOptions {
  input: string;
  mode: "llm";
  model: string;              // model name sent to the endpoint
  endpoint: string;           // base URL, e.g. "http://localhost:8000/v1"
  prompt: string;             // template with {title}, {chunk}, {children_summaries}, etc.
  concurrency?: number;       // parallel requests per level (default: 8)
  minContentLength?: number;  // pass-through threshold for small leaves (default: 0)
  apiKey?: string;            // optional, for cloud endpoints
}

summarize(options);
```

**Traversal:** bottom-up, level by level. All nodes at the same depth are processed in parallel (bounded by `concurrency`). Parents wait for all children.

**Prompt template variables:**

| Variable | Description |
|---|---|
| `{title}` | Node's own title. |
| `{slug}` | Node's own slug. |
| `{chunk}` | Node's own content (markdown). Empty for directories. |
| `{children_titles}` | Ordered list of children titles, one per line. |
| `{children_summaries}` | Ordered list of `title: summary` pairs, one per line. |
| `{children_count}` | Number of children. |

**Pass-through:** if `node.children.length === 0` AND (`node.chunk` is absent OR `node.chunk.length < minContentLength`), skip the LLM call. Use the chunk as-is if present, or skip for directories.

**Endpoint:** any OpenAI-compatible `/v1/chat/completions` endpoint (vLLM, Ollama, LM Studio, cloud OpenAI).

## CLI

Wraps the TypeScript library. Calls `bundle()` internally.

```bash
docpack bundle --input ./docs --output ./mykb
```

Progress to stderr. Stats as JSON to stdout.

### Summaries

Two modes via CLI flags.

**JSONL file mode** (default):
```bash
docpack summarize ./mykb --summaries ./summaries.jsonl
```

**LLM fold mode:**
```bash
docpack summarize ./mykb \
  --mode llm \
  --model qwen3-8b \
  --endpoint http://localhost:8000/v1 \
  --prompt ./prompt.txt \
  --concurrency 32 \
  --min-content-length 200
```

* `--summaries` — path to JSONL file (file mode).
* `--mode llm` — use built-in LLM fold mode.
* `--model` — model name (LLM mode, required).
* `--endpoint` — OpenAI-compatible endpoint URL (LLM mode, required).
* `--prompt` — path to prompt template file (LLM mode, required).
* `--concurrency` — max parallel LLM requests per level (LLM mode, default: 8).
* `--min-content-length` — skip LLM call for leaf nodes shorter than this (LLM mode).
* `--api-key` — API key for cloud endpoints (LLM mode, optional).

Upserts summaries into the KB and patches `docpack.yaml`.

# API — Query

Access to the knowledge base for AI agents is gated by calling `manifest()` to discover entry point slugs and statistics. `toc()` and `get()` require a slug. `search()` is the exception — it bypasses the gate to enable keyword discovery.

## TypeScript Library

Implementation. The CLI wraps this.

```ts
import { query } from "@rlemaigre/docpack";

interface Summary {
  chunkCount: number;     // descendants that have content
  totalBytes: number;     // sum of chunk bytes in subtree
  depth: number;          // max depth below this node
  text?: string;          // AI-generated, present when summaries were generated
}

interface TOC {
  slug: string;
  title: string;
  children: TOC[] | Summary;    // [] = leaf, TOC[] = expanded, Summary = clipped
}

interface Document {
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

interface Manifest {
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

interface SearchHit {
  slug: string;
  title: string;
  text: string;         // matched node's content
  rank: number;         // BM25 score
}

interface SearchResults {
  total: number;        // total matching nodes
  hits: SearchHit[];
}

interface SearchParams {
  query: string;
  limit: number;
  offset: number;
}

const kb = query("./mykb");  // path is the directory containing docpack.db and docpack.yaml

kb.manifest();                    // Manifest — reads docpack.yaml
kb.toc("slug", depth);            // TOC — depth is number | 'files' | 'full'
kb.get("slug");                   // Document | null
kb.search(params);    // SearchResults
```

* `manifest()` — reads `docpack.yaml`. Returns version, statistics, root slugs, and a flat list of ingested file slugs with subtree summaries. Updated by `bundle()` and post-processing. No token budget — the manifest is compact.
* `toc(slug, depth)` — returns the hierarchy rooted at `slug`. `depth` is a number (levels to unfold, `0` = root only), `'files'` (expand to file boundaries — unfolds directories and sections, stops at file nodes with `Summary`), or `'full'` (full tree, no clipping). Clipped subtrees carry `Summary` for semantic discovery.
* `get(slug)` — returns the node and its subtree. Returns `null` if the slug does not exist.
* `search(params)` — full-text search over node titles and chunk content using SQLite FTS5. `query` accepts the full FTS5 query language (plain words, phrases, AND/OR/NOT, prefix, NEAR, column-specific). Results ranked by BM25 score. Each hit carries the matched `text`. `limit` and `offset` are required. `total` gives the full result set size.
* `parent`, `prev`, `next` on any `Document` — navigation slugs derived from structure. `parent` is present on all non-root nodes. `prev`/`next` present only on sections (ordered children of a file). Absent when not applicable.
* `Summary` merges structural stats and semantic text. On clipped TOC nodes, aggregating summaries across branches lets the agent reconstruct a transversal overview of the entire tree — making TOC the primary semantic discovery tool.
* `get()` omits `Summary` because the agent already obtained it when navigating via `manifest()` or `toc()` to discover the target slug in the first place.

## CLI

Wraps the TypeScript library. Single-shot: reads args, calls TypeScript library, serializes result to stdout, exits.

```bash
docpack manifest ./mykb              # YAML to stdout (reads docpack.yaml)
docpack toc ./mykb "slug" --depth 2  # YAML to stdout
docpack get ./mykb "slug"            # XML to stdout
docpack search ./mykb "query" --limit 10 --offset 0  # YAML to stdout
```

* Exit 0 — success. Result to stdout (YAML for `manifest`/`toc`, XML for `get`).
* Exit 1 — error. JSON `{ message }` to stderr. Nothing to stdout.
* Primary consumer is AI agents, not terminal readers.
* On clipped nodes, `children` is a `Summary` (replaces the removed subtree). The agent can aggregate summaries across branches to reconstruct a transversal overview.

### MCP Mode

`--mcp` runs the CLI as a long-lived MCP server over stdio. Translates MCP tool calls into TypeScript library calls — same query logic, different protocol.

```bash
docpack serve ./mykb --mcp    # MCP server over stdio
```

Exposed tools:
* `manifest` — returns the KB manifest.
* `toc(slug, depth)` — returns the table of contents subtree.
* `get(slug)` — returns the node content as XML.
* `search(query, limit, offset)` — full-text search, returns ranked hits with summaries.

# Storage — SQLite

## Schema

```sql
CREATE TABLE nodes (
  slug        TEXT PRIMARY KEY,
  type        TEXT NOT NULL CHECK (type IN ('directory', 'file', 'section')),
  title       TEXT NOT NULL,
  parent_slug TEXT REFERENCES nodes(slug),
  idx         INTEGER NOT NULL,
  chunk       TEXT,  -- Markdown content. FTS5 keeps its own indexed copy.
  summary     TEXT,
  UNIQUE (parent_slug, idx)
);

CREATE VIRTUAL TABLE nodes_fts USING fts5(title, chunk, content='nodes');

-- Transitive closure. Materialized at bundle time, read-only thereafter.
-- Avoids recursive CTEs or iterative TypeScript calls for subtree queries.
-- Used by: get() (fetch all descendants), toc() (compute Summary stats), summarize() (merge subtree content).
CREATE TABLE closure (
  ancestor   TEXT REFERENCES nodes(slug),
  descendant TEXT REFERENCES nodes(slug),
  depth      INTEGER NOT NULL,
  PRIMARY KEY (ancestor, descendant)
);

-- Relationship type definitions (schema)
CREATE TABLE relationships (
  name   TEXT PRIMARY KEY,
  schema TEXT NOT NULL  -- JSON: { roles: ["from", "to"], payload: {...} }
);

-- Relationship instances
CREATE TABLE relationship_instances (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  relationship_name TEXT NOT NULL REFERENCES relationships(name),
  value  TEXT NOT NULL DEFAULT '{}'
);

-- Parameters binding slugs to roles for each instance
CREATE TABLE relationship_params (
  instance_id INTEGER NOT NULL REFERENCES relationship_instances(id),
  role   TEXT NOT NULL,
  slug   TEXT NOT NULL REFERENCES nodes(slug),
  PRIMARY KEY(instance_id, role, slug)
);

CREATE INDEX idx_rel_params_slug ON relationship_params(slug);
```

# Future

## Knowledge Graph

Relationships lay the groundwork for a knowledge graph: documents reference each other, forming a graph that suggests related content across branches, not just deeper ones.

**Idea (TBD):** agents using the KB should be able to autonomously add content (AI-notes) and relationships between main documents and AI-notes. Like Pi extending its own skills, an agent could extend its knowledge bases when needed — added content is searchable and persists across future sessions.

## v2+

* **Web UI** — `docpack serve ./mykb --ui` spins up a local web app for browsing, searching, and exploring the knowledge base. Browser-based TOC navigation, FTS search, graph visualization when embeddings and relationships are available.
* **Incremental updates** — track file modification times to detect changes. Enable `--watch` mode or manual `docpack update` for incremental KB rebuilds. KB lives in a `.docpack/` folder at document root (like `.git`), updating automatically on file changes or on demand.
* **AI-authored documents** — agents can create new Markdown files in an `ai/` directory alongside `docpack.db` and `docpack.yaml`. An incremental re-bundle ingests these into the KB, and a post-processing step computes bidirectional relationships between AI-authored and source documents. Example: an agent reading a novel creates one document per character in `ai/characters/`. Each chapter relates to the characters that appear in it; each character document relates back to the chapters they appear in. This lets agents autonomously build and evolve layered knowledge on top of source material.
