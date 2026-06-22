# docpack

Bundle a directory of Markdown files into a portable, queryable knowledge base.

```bash
docpack bundle --input ./docs --output ./mykb
docpack toc ./mykb "getting-started" --depth 2
docpack search ./mykb "authentication AND OAuth" --limit 5
```

Single binary. CLI, TypeScript library, and MCP server.

## Quick start

```bash
# Bundle a directory of Markdown files
docpack bundle --input ./docs --output ./mykb

# Explore the knowledge base
docpack manifest ./mykb
docpack toc ./mykb "my-root-slug" --depth 2
docpack search ./mykb "keyword" --limit 10

# Start an MCP server
docpack serve ./mykb --mcp
```

## Requirements

- **Node.js >= 20**
- **better-sqlite3** -- native module. Prebuilt binaries are downloaded automatically for common platforms.

## Usage

**From CLI**

```bash
npx @rlemaigre/docpack manifest ./mykb
```

**Or install**

```bash
npm install @rlemaigre/docpack
docpack manifest ./mykb
```

**From TypeScript**

```ts
import { bundle, query } from "@rlemaigre/docpack";
```

**As an AI Skill**

AI agents can install the query skill directly using:

```bash
npx skills add rlemaigre/docpack
```

## Output

Bundle command produces two files:

```
mykb/
  docpack.db        # SQLite knowledge base
  docpack.yaml      # human-readable manifest and entry points
```

## Input

The bundler reads files as **Markdown text (UTF-8)**. It recursively walks the input directory, parses ATX headings (`#` through `######`) to build a node hierarchy, and stores everything in SQLite with an FTS5 full-text index.

Conversion from other formats (PDF, DOCX, etc.) is the caller's responsibility — preprocess your files into Markdown before bundling.

## Cheat sheet

| Command                                    | Output | Use                                      |
| ------------------------------------------ | ------ | ---------------------------------------- |
| `manifest <kb>`                            | YAML   | KB overview, root slugs, file stats      |
| `toc <kb> <slug> --depth N`                | YAML   | Hierarchy with clipped subtree summaries |
| `get <kb> <slug>`                          | XML    | Node content + full subtree              |
| `search <kb> "query" --limit N --offset O` | YAML   | FTS5 search with BM25 ranking            |
| `serve <kb> --mcp`                         | stdio  | Long-lived MCP server for AI agents      |

## Architecture

```mermaid
flowchart LR
    A[Markdown files/] --> B[bundle]
    B --> C[docpack.db]
    B --> D[docpack.yaml]
    C --> E[query / search]
    D --> E
    E --> F[CLI / MCP / TS library]
```

The bundler walks the filesystem, reads each file as Markdown, parses headings into a node tree, and stores everything in SQLite with an FTS5 index. The query side reads from the same database.

### Node hierarchy

```mermaid
graph TD
    D[directory] --> F1[file]
    D --> F2[file]
    F1 --> S1[section]
    F1 --> S2[section]
    S1 --> L1[leaf]
    S1 --> L2[leaf]
    S2 --> L3[leaf]
```

Three input types, abstracted into a single `Node` primitive:

- **directory** -- filesystem folder, no self content
- **file** -- ingested Markdown document, may contain sections
- **section** -- Markdown heading, may contain subsections

Every `Node` has a `slug` (globally unique), `title`, `chunk` (self content), and `children`.

## CLI reference

### bundle

```bash
docpack bundle --input <path> --output <path>
```

| Option       | Required | Description                                              |
| ------------ | -------- | -------------------------------------------------------- |
| `--input`    | yes      | File or directory of Markdown files to bundle            |
| `--output`   | yes      | Output directory (creates `docpack.db` + `docpack.yaml`) |

Progress to stderr. Stats as JSON to stdout.

### manifest

```bash
docpack manifest <kb>
```

Returns YAML with version, statistics, root slugs, and file-level summaries.

### toc

```bash
docpack toc <kb> <slug> [--depth <mode>]
```

| Depth mode   | Behavior                             |
| ------------ | ------------------------------------ |
| `N` (number) | Unfold N levels, clip with `Summary` |
| `files`      | Expand to file boundaries            |
| `full`       | Complete tree, no clipping           |

For clipped subtrees, children `Nodes` are replaced with a `Summary` object : `chunkCount`, `totalBytes`, `depth`, and optional summary `text`.

### get

```bash
docpack get <kb> <slug>
```

Returns XML with the node's chunk and its full subtree. Attributes include `slug`, `title`, `level`, `depth`, `parent`, `prev`, `next`.

### search

```bash
docpack search <kb> "query" [--limit N] [--offset O]
```

FTS5 full-text search over titles and chunk content. Query language supports:

- Plain words: `authentication`
- Phrases: `"DataWindow painter"`
- Boolean: `DataWindow AND painter`, `error OR warning`
- Negation: `DataWindow NOT painter`
- Prefix: `GetSeries*`
- Column-specific: `title:DataWindow`

Results ranked by BM25 score. `total` gives full result set size.

Embeddings and reranking : TBD (requires AI).

### summarize

```bash
docpack summarize <kb> --fn <path>
```

Post-processing pass. The script receives a live KB instance and an `emit` callback:

```ts
export default async function (kb, emit) {
  const manifest = kb.manifest();
  for (const file of manifest.files) {
    const doc = kb.get(file.slug);
    const summary = await summarizeWithLLM(doc);
    emit(file.slug, summary);
  }
}
```

### serve

```bash
docpack serve <kb> --mcp
```

Starts an MCP server over stdio, exposing a knowledge base with four tools: `manifest`, `toc`, `get`, `search`.

## TypeScript API

### Bundle

```ts
import { bundle } from "@rlemaigre/docpack";

const stats = bundle({
  input: "./docs",
  output: "./mykb",
  onProgress: (path, done, total) => console.log(`${done}/${total}`),
  onError: (path, err) => console.error(err),
});

console.log(stats);
// { filesProcessed: 10, totalChunks: 85, totalBytes: 133714 }
```

### Query

```ts
import { query } from "@rlemaigre/docpack";

const kb = query("./mykb");

// Discover structure
const manifest = kb.manifest();
console.log(manifest.roots);
// ["getting-started", "api-reference"]

// Navigate with clipped summaries
const toc = kb.toc("api-reference", 2);

// Get full subtree
const doc = kb.get("api-auth");

// Search
const results = kb.search({
  query: "authentication AND OAuth",
  limit: 10,
  offset: 0,
});

kb.close();
```

### Summarize

```ts
import { summarize } from "@rlemaigre/docpack";

await summarize({
  input: "./mykb",
  async summarizer(kb, emit) {
    const manifest = kb.manifest();
    for (const file of manifest.files) {
      const doc = kb.get(file.slug);
      if (!doc) continue;
      const summary = await callLLM(doc);
      emit(file.slug, summary);
    }
  },
});
```

## Data model

### Node

```
Node = {
  type: "directory" | "file" | "section",
  title: string,
  slug: string,
  index: number,
  chunk: string?,      // self content (Markdown)
  summary: string?,    // subtree overview
  children: Node[] | Summary
}
```

### Summary

```
Summary = {
  chunkCount: number,   // descendants with content
  totalBytes: number,   // total chunk bytes in subtree
  depth: number,        // max depth below this node
  text?: string         // AI-generated overview
}
```

### XML output

```xml
<document slug="api-auth" title="Authentication" level="2" depth="0" parent="api" prev="api-overview" next="api-billing">
  <chunk>...</chunk>
  <children>
    <document slug="api-auth-oauth" title="OAuth" level="3" depth="0" parent="api-auth" prev="" next="api-auth-apikey">
      <chunk>...</chunk>
    </document>
  </children>
</document>
```

## Storage

SQLite with FTS5. Schema is an internal detail and may change.

- `nodes` -- node tree with slug, type, title, parent, chunk, summary
- `nodes_fts` -- FTS5 index on title and chunk
- `closure` -- materialized transitive closure for subtree queries

## Notes

- The bundler runs entirely synchronous -- no async, no streaming. Single SQLite transaction.
- Input files are read as Markdown (UTF-8). Conversion from other formats is the caller's responsibility.
- `toc()` is the primary discovery tool. Clipped subtrees carry `Summary` objects that let you aggregate overviews across branches without loading full content.
- `get()` returns the full subtree. Use `toc()` to find the slug you want, then `get()` to read it.
- `search()` bypasses the slug gate -- use it for keyword discovery when you don't know the structure.
- Summaries are optional post-processing. The bundler produces data; the summarizer produces overviews.
- The MCP server keeps the DB connection open across tool calls. Use it for multi-turn agent sessions.
