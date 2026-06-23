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

Recursively walks a directory of Markdown files, flattening the filesystem into a uniform tree of knowledge where all ingested files are root documents and directory structure is discarded. The hierarchy comes from Markdown headings within each file, and from links between files.

1. Collects all files in the input directory (flat, no directory nodes).
2. For each file:
  1. Reads the file as Markdown.
  2. Rewrites relative `.md` links to `docpack://slug` references.
  3. Parses headings to extract the internal hierarchy and extends the tree with one `Document` for each section.

The bundler runs entirely within a single synchronous SQLite transaction — no async involved. Input files are assumed to be Markdown; conversion from other formats is the caller's responsibility.

### Home File

The `--home` flag is mandatory. It points to a Markdown file that serves as the primary entry point into the knowledge base. This file is bundled like any other — it becomes a root document with its own section tree. The manifest records its slug.

**What it is:** a Markdown file with headings, subsections, and `docpack://slug` links that organize the KB's content into a meaningful navigation structure. It is a semantic table of contents — unlike directories, it reflects how the documents relate to each other, not how they were stored on disk.

**Why it is necessary:** without directory nodes, all files are flat root documents. With many files (hundreds, thousands), agents need an entry point to orient themselves before falling back to `search()`. The home file provides classification and reading order.

**When to create it:** before bundling, as a preprocessing step — just like converting files to Markdown. The user (or an agent) writes the file and places it alongside the other input files.

**Where it goes:** anywhere in the input directory. The `--home` flag points to it by path.

**Example** (`toc.md`):
```markdown
# Documentation

## Getting Started

* [Installation](docpack://getting-started-installation)
* [Configuration](docpack://getting-started-configuration)

## API Reference

* [Authentication](docpack://api-auth)
* [Endpoints](docpack://api-endpoints)
```

When bundled, this file becomes the `home` document. Agents call `toc(home)` to navigate the KB's structure, following `docpack://slug` links to drill into content.

## Knowledge Base

A directory containing two files:

```
mykb/
  docpack.db        # SQLite knowledge base
  docpack.yaml      # human-readable manifest
```

`docpack.yaml` is a metadata manifest written by `bundle()`. Describes the KB's provenance and scope. Human-readable on GitHub — no CLI needed to understand what's inside.

```yaml
version: "0.3.0"        # docpack version that created this KB
totalChunks: 42
totalBytes: 133714
home: toc               # slug of the primary entry file
description: null       # human-readable description, if supplied
url: null               # source URL, if supplied
exportedAt: "2025-01-15T10:30:00.000Z"  # source export date or bundle time
```

* `home` — slug of the primary entry file (mandatory, supplied via `--home`).
* `description` — human-readable description of what the KB covers. Optional.
* `url` — source URL (wiki, website, etc.). Optional.
* `exportedAt` — date of source data export/scraping (ISO 8601). Auto-set to bundle time if omitted.
* Agents discover content via `home` → follow links → `search()`.

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

### Skill Package Output

The generated skill is a self-contained directory:

```
<output>/
  SKILL.md
  references/
    docpack.db
    docpack.yaml
  scripts/
    docpack.mjs
```

* `SKILL.md` — auto-generated from manifest metadata + home TOC (depth 1) + `--use-when` text, rendered via Eta template (`src/skill/templates/skill.md.eta`). Contains frontmatter (`name`, `description`), KB overview section, structure section, and usage section with CLI commands.
* `references/` — the KB directory (`docpack.db` + `docpack.yaml`).
* `scripts/docpack.mjs` — thin wrapper script (~1KB) that pins `npx @rlemaigre/docpack@<version>` using the version from package.json at generation time. Resolves `references/` path relative to `import.meta.dirname`. Accepts subcommands via CLI args: `manifest`, `toc <slug> [--depth <n|full>]`, `get <slug>`, `search <query> [--limit <n>] [--offset <n>]`.

The generated skill is self-contained. Any agent loading it can query the KB using the bundled `scripts/docpack.mjs` wrapper without needing the higher-order skill or docpack source code.

Skill generation is an optional post-processing step, separate from bundling. The bundler produces data; the skill generator produces agent instructions.

# Data Model

## Document

One shape for all documents — files and sections:

```
Document = { type : "file" | "section", title : string, slug : string, index : number, chunk : string?, summary : string?, children: Document[] }
```

* `type` — distinguishes files (ingested source documents) from sections (Markdown headings). All files are root documents (`parent_slug IS NULL`). There are no directory nodes.
* `title` — human-readable label.
* `slug` — globally unique identifier.
* `index` — position among siblings. Assigned by the bundler (filesystem sort order or heading order).
* `chunk` — *self content* of the document only, does NOT aggregate the whole subtree. Present only on leaf documents. Internal nodes (documents with children) always have `chunk: null` — their preamble content is stored in a synthetic "Introduction" child section.
* `summary` — AI-generated summary of the entire subtree (chunk + all descendants). Optional. Produced by post-processing.
* `children` — always present. Empty `[]` = leaf. Non-empty = internal node (container, `chunk` is null).

The `Document` shape is uniform across all levels — a file, a section, and a leaf section all share the same structure.

## Hierarchy

The hierarchy is flat at the top, deep within files:

1. **Root level** — all ingested files are root documents (`parent_slug IS NULL`). Directory structure is discarded.
2. **File level** — Markdown headings form the internal hierarchy of each file (sections → subsections → leaves). Built by the bundler from ATX headings.

Cross-file navigation is achieved through `docpack://slug` links rewritten by the bundler, and through the home file's semantic table of contents. Files and sections can be internal or leaf documents.

## Slug Generation

* Uses `@sindresorhus/slugify` for heading text → slug.
* File documents: slug from basename (without extension).
* Section documents: slug from heading text.
* Synthetic "Introduction" sections: `<parent-slug>-introduction` (e.g. `readme-introduction`, `api-auth-introduction`).
* Empty slug (e.g. CJK, punctuation-only): fallback to `_N` where N is the document's index.
* Cross-file collisions: with no directory nodes, colliding basenames are disambiguated using the original relative path components. E.g. two `README.md` files at `guide/README.md` and `api/README.md` get slugs `guide-readme` and `api-readme`. If that still collides, fall back to `_N`.
* Section collisions: prefix the conflicting slug with its parent slug until globally unique.

# Text Formats

## Input

The bundler recursively walks the input directory and reads every file as **Markdown text (UTF-8)**. No file type filtering or conversion is performed — all files are treated as Markdown. Directory structure is not preserved — all files become root documents.

* Files that are not valid Markdown will still be ingested. The parser scans for ATX headings; files with no headings become single-chunk documents.
* Non-text files (binary, images, etc.) will fail to parse gracefully — they become empty or garbled documents. The caller should exclude such files before bundling.
* Conversion from other formats (PDF, DOCX, etc.) is the caller's responsibility.

## Markdown Parsing

* **Headings** — ATX only (`#` through `######`). Regex: `^(#{1,6})\s+(.+)$`.
* **Content before first heading** — parsed as the file document's self content, then moved into a synthetic "Introduction" section if the file also has headings.
* **Zero headings** — single chunk: file document with content, no children. Unchanged.
* **Content between headings** — becomes chunk content for that heading's document. For nested headings (e.g. `## A` followed by `### B`), content between `## A` and `### B` belongs to the `A` document.
* **Synthetic Introduction** — after parsing, any document (file, section, or subsection) that has both a non-empty chunk AND non-empty children gets its chunk moved into a synthetic "Introduction" section as the first child. Applied recursively. Result: all chunks live in leaf documents; internal nodes always have `chunk: null`.

## Link Rewriting

During bundling, relative Markdown links that resolve to ingested files are rewritten to `docpack://slug` references:

* `[](path/to/file.md)` → `[](docpack://slug)`
* `[](path/to/file.md#heading)` → `[](docpack://slug#heading)`
* `[](path/to/file)` → resolves if `path/to/file.md` exists
* External URLs, fragment-only links (`[](#heading)`), and broken links are left unchanged

An LLM reading a chunk can resolve `docpack://slug` directly via `docpack get <slug>`. Broken links left as-is signal that resolution will fail.

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

* `<chunk>` — optional. Markdown self-content. Absent for documents without content.
* `<children>` — zero or more child `<document>` elements. Empty for leaf documents. Children have semantic ordering (heading order within a file).
* `parent` — optional. Slug of the parent document. Absent for root documents.
* `prev` / `next` — optional. Slugs of sibling documents in reading order. Present only for sections (ordered children of a file).
* `level` — hops from KB root to this document (root = 0). Preserved in subtrees.
* `depth` — hops from this document to its deepest descendant (leaf = 0).
* Attributes (`slug`, `title`, `level`, `depth`, `parent`, `prev`, `next`) are machine-parseable and can be queried by scripts operating on the XML output.
* Unlimited nesting depth — no Markdown h6 limitation.
* Symmetric structure all the way down — no special case for leaf documents.

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

Internal document (`get("readme")`):
```xml
<document slug="readme" title="README" level="0" depth="2">
  <chunk>
Intro text...
  </chunk>
  <children>
    <document slug="getting-started" title="Getting Started" level="1" depth="1" parent="readme">
      <chunk>
Getting started content...
      </chunk>
    </document>
    <document slug="api-reference" title="API Reference" level="1" depth="1" parent="readme">
      <chunk>
API reference content...
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
  input: string;              // path to input directory
  output: string;             // path to output directory (e.g. "./mykb" — produces mykb/docpack.db + mykb/docpack.yaml)
  home?: string;              // path to the primary entry file (mandatory via CLI, optional in library — manifest records null if omitted)
  description?: string;       // human-readable description of what the KB covers
  url?: string;               // source URL (wiki, website, etc.)
  exportedAt?: string;        // date of source data export (ISO 8601), auto-set to bundle time if omitted
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
* Relative `.md` links in chunk content are rewritten to `docpack://slug` references.
* `home` — path to the primary entry file (mandatory via CLI, optional in library). Resolved to a slug and recorded in the manifest. Omitted → manifest records `home: null`.
* `onProgress` — called per file. Caller can display a spinner, log, or ignore.
* `onError` — called per failed file. Bundler skips and keeps going.
* Produces `<output>/docpack.db` (SQLite) and `<output>/docpack.yaml` (manifest). Creates parent dirs. Overwrites existing output.
* FTS5 index synced once at bundle time (after all chunks inserted). No triggers.

### Skill Generation

Produce a self-contained agent skill package from an existing KB.

```ts
import { generateSkill } from "@rlemaigre/docpack";

interface GenerateSkillOptions {
  input: string;              // path to KB directory (resolves docpack.db)
  useWhen: string;            // imperative description of when to use the skill
  output: string;             // path to output skill directory
}

generateSkill(options);
```

Reads the KB manifest and home TOC (depth 1), renders the SKILL.md template, copies the KB to `references/`, and generates `scripts/docpack.mjs` wrapper. Template: `src/skill/templates/skill.md.eta`.

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
* Upserts into `nodes.summary`.

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
| `{title}` | Document's own title. |
| `{slug}` | Document's own slug. |
| `{chunk}` | Document's own content (markdown). |
| `{children_titles}` | Ordered list of children titles, one per line. |
| `{children_summaries}` | Ordered list of `title: summary` pairs, one per line. |
| `{children_count}` | Number of children. |

**Pass-through:** if `doc.children.length === 0` AND (`doc.chunk` is absent OR `doc.chunk.length < minContentLength`), skip the LLM call. Use the chunk as-is if present, or skip for empty leaves.

**Endpoint:** any OpenAI-compatible `/v1/chat/completions` endpoint (vLLM, Ollama, LM Studio, cloud OpenAI).

## CLI

Wraps the TypeScript library. Calls `bundle()` internally.

```bash
docpack bundle --input ./docs --output ./mykb --home ./docs/toc.md
```

* `--input` — path to input directory (required).
* `--output` — path to output directory (required).
* `--home` — path to the primary entry file (required). Create a Markdown TOC file with sections and `docpack://slug` links, then point `--home` to it.
* `--description` — human-readable description of the KB (optional).
* `--url` — source URL (optional).
* `--exported-at` — date of source data export, ISO 8601 (optional).

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
* `--min-content-length` — skip LLM call for leaf documents shorter than this (LLM mode).
* `--api-key` — API key for cloud endpoints (LLM mode, optional).

Upserts summaries into the KB.

# API — Query

Access to the knowledge base for AI agents is gated by calling `manifest()` to discover entry point slugs and statistics. `toc()` and `get()` require a slug. `search()` is the exception — it bypasses the gate to enable keyword discovery.

## TypeScript Library

Implementation. The CLI wraps this.

```ts
import { query } from "@rlemaigre/docpack";

interface Summary {
  chunkCount: number;     // descendants that have content
  totalBytes: number;     // sum of chunk bytes in subtree
  depth: number;          // max depth below this document
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
  level: number;      // hops from root to this document
  depth: number;      // hops from this document to deepest descendant
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
  home: string | null;
  description: string | null;
  url: string | null;
  exportedAt: string;
}

interface SearchHit {
  slug: string;
  snippet: string;      // excerpt around matched terms, <b>/</b> markers, ... ellipsis
  prev?: string;        // slug of previous sibling, sections only
  next?: string;        // slug of next sibling, sections only
  parent?: string;      // slug of parent document
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
kb.toc("slug", depth);            // TOC — depth is number | 'full'
kb.get("slug");                   // Document | null
kb.search(params);    // SearchResults
```

* `manifest()` — reads `docpack.yaml`. Returns version, aggregate statistics, and metadata fields (`home`, `description`, `url`, `exportedAt`). Compact — no file enumeration.
* `toc(slug, depth)` — returns the hierarchy rooted at `slug`. `depth` is a number (levels to unfold, `0` = root only) or `'full'` (full tree, no clipping). Clipped subtrees carry `Summary` for semantic discovery.
* `get(slug)` — returns the document and its subtree. Returns `null` if the slug does not exist.
* `search(params)` — full-text search over node titles and chunk content using SQLite FTS5. `query` accepts the full FTS5 query language (plain words, phrases, AND/OR/NOT, prefix, NEAR, column-specific). Results ordered by BM25 score. Each hit carries a `snippet` excerpt (~30 tokens around matched terms with `<b>`/`</b>` markers), `prev`/`next` sibling navigation slugs (sections only), and `parent` slug. Hits are always leaf documents (depth 0) because FTS indexes chunks, and all chunks live in leaf documents. Full content is available via `get(slug)` — a single-row lookup. `limit` and `offset` are required. `total` gives the full result set size.
* `parent`, `prev`, `next` on any `Document` — navigation slugs derived from structure. `parent` is present on all non-root documents. `prev`/`next` present only on sections (ordered children of a file). Absent when not applicable.
* `Summary` merges structural stats and semantic text. On clipped TOC documents, aggregating summaries across branches lets the agent reconstruct a transversal overview of the entire tree — making TOC the primary semantic discovery tool.
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
* On clipped documents, `children` is a `Summary` (replaces the removed subtree). The agent can aggregate summaries across branches to reconstruct a transversal overview.

### Skill Generation

Produce a self-contained agent skill package from an existing KB.

```bash
docpack skill <kb> --use-when "<description>" --output <dir>
```

* `<kb>` — path to existing KB directory (required).
* `--use-when` — imperative description of when to use the skill (required). Used as the `description` field in SKILL.md frontmatter.
* `--output` — path to output skill directory (required).

Produces the skill package structure: `SKILL.md`, `references/` (KB copy), `scripts/docpack.mjs` (wrapper). SKILL.md is auto-generated from manifest metadata, home TOC (depth 1), and `--use-when` text.

### MCP Mode

`--mcp` runs the CLI as a long-lived MCP server over stdio. Translates MCP tool calls into TypeScript library calls — same query logic, different protocol.

```bash
docpack serve ./mykb --mcp    # MCP server over stdio
```

Exposed tools:
* `manifest` — returns the KB manifest.
* `toc(slug, depth)` — returns the table of contents subtree.
* `get(slug)` — returns the document content as XML.
* `search(query, limit, offset)` — full-text search, returns hits with snippet excerpts and navigation.

# Storage — SQLite

## Schema

```sql
CREATE TABLE nodes (
  slug        TEXT PRIMARY KEY,
  type        TEXT NOT NULL CHECK (type IN ('file', 'section')),
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

# Breaking Changes

## Synthetic Introduction sections (v0.6.0)

File documents that previously had preamble content (chunk) now have `chunk: null` and a synthetic "Introduction" child section. Agents using `get("<file-slug>")` will see an empty chunk instead of preamble text. The content is at `get("<file-slug>-introduction")`.

Existing `docpack://<file-slug>` links in home files still resolve to the file document (container). Agents must navigate to the introduction child for content.

# Future

## Knowledge Graph

Relationships lay the groundwork for a knowledge graph: documents reference each other, forming a graph that suggests related content across branches, not just deeper ones.

**Idea (TBD):** agents using the KB should be able to autonomously add content (AI-notes) and relationships between main documents and AI-notes. Like Pi extending its own skills, an agent could extend its knowledge bases when needed — added content is searchable and persists across future sessions.

## v2+

* **Web UI** — `docpack serve ./mykb --ui` spins up a local web app for browsing, searching, and exploring the knowledge base. Browser-based TOC navigation, FTS search, graph visualization when embeddings and relationships are available.
* **Incremental updates** — track file modification times to detect changes. Enable `--watch` mode or manual `docpack update` for incremental KB rebuilds. KB lives in a `.docpack/` folder at document root (like `.git`), updating automatically on file changes or on demand.
* **AI-authored documents** — agents can create new Markdown files in an `ai/` directory alongside `docpack.db` and `docpack.yaml`. An incremental re-bundle ingests these into the KB, and a post-processing step computes bidirectional relationships between AI-authored and source documents. Example: an agent reading a novel creates one document per character in `ai/characters/`. Each chapter relates to the characters that appear in it; each character document relates back to the chapters they appear in. This lets agents autonomously build and evolve layered knowledge on top of source material.

## Known Issues

### Ugly slugs from collision cascading

When section heading slugs collide, `resolveCollision()` prefixes with the full parent slug. Deeply nested sections produce slugs like `1-6-1-2-12-1-recovering-from-media-failure-on-the-database-file`. The `@sindresorhus/slugify` library has no options to address this — the fix requires changing the collision resolution strategy in the bundler (e.g. use a short index suffix instead of full parent prefix).
