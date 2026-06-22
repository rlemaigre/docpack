---
name: docpack-query
description: Query a docpack knowledge base using CLI, TypeScript library, or MCP server. Use when you need to search, navigate, or extract content from a docpack knowledge base (docpack.db + docpack.yaml). Covers manifest discovery, TOC navigation, full-text search, document retrieval, and MCP tool usage.
---

# docpack Knowledge Base Query

Query a docpack knowledge base -- a portable SQLite database built from a directory of documents. Two files: `docpack.db` (SQLite) and `docpack.yaml` (manifest).

## Access methods

| Method | When to use |
|---|---|
| CLI (`npx @rlemaigre/docpack`) | Quick one-shot queries, scripting |
| TypeScript library (`query()`) | Programmatic access in code |
| MCP server (`docpack serve --mcp`) | Multi-turn agent sessions, long-lived access |

## Query strategies

### Discovery workflow (recommended)

Start broad, narrow down. This is the most token-efficient approach.

**Step 1: `manifest`** -- get KB overview, root slugs, file summaries.

```bash
npx @rlemaigre/docpack manifest ./mykb
```

Returns root slugs and file-level summaries with `text` fields (if summaries were generated). Use this to identify which files are relevant to your question.

**Step 2: `toc --depth 1`** -- explore a file's top-level sections with subtree summaries.

```bash
npx @rlemaigre/docpack toc ./mykb "api-reference" --depth 1
```

Each child shows `chunkCount`, `totalBytes`, `depth`, and `text` (summary). Use summaries to pick which sections to drill into.

**Step 3: `toc --depth 2`** -- drill one level deeper.

```bash
npx @rlemaigre/docpack toc ./mykb "api-reference" --depth 2
```

Leaf nodes at depth 2 show their clipped subtree summaries. Pick the slug you want.

**Step 4: `get`** -- retrieve the full document and subtree.

```bash
npx @rlemaigre/docpack get ./mykb "api-reference-auth"
```

Returns XML with chunk content and children.

### Search workflow

Use when you have specific keywords but don't know the structure.

```bash
npx @rlemaigre/docpack search ./mykb "authentication AND OAuth" --limit 5 --offset 0
```

Returns ranked hits with matched text. Use `slug` from hits to call `get`.

### Hybrid workflow

Best for complex questions. Search to find candidate slugs, then use TOC to understand context around them.

```bash
# Find relevant sections
npx @rlemaigre/docpack search ./mykb "DataWindow painter" --limit 10

# Understand the section's place in the hierarchy
npx @rlemaigre/docpack toc ./mykb "api-reference" --depth 2

# Retrieve the full content
npx @rlemaigre/docpack get ./mykb "api-reference-auth"
```

## What works great

- **`manifest`** -- instant KB overview with file summaries. Always start here.
- **`toc --depth 1`** -- top-level section summaries give you a semantic map of each document.
- **`toc --depth 2`** -- second-level summaries let you drill without loading full content.
- **`search "exact phrase"`** -- phrase search finds specific concepts reliably.
- **`search "term1 AND term2"`** -- boolean AND narrows results effectively.
- **`search "title:term"`** -- column-specific search targets titles only.
- **`get <slug>`** -- returns full subtree as XML with navigation attributes (`parent`, `prev`, `next`).

## What works good

- **`search "prefix*"`** -- prefix matching for partial terms (e.g., `GetSeries*`).
- **`search "term1 OR term2"`** -- alternative terms, but returns more results.
- **`toc --depth files`** -- useful for directory-based KBs, expands to file boundaries.
- **`toc --depth full`** -- complete tree, but token-heavy for large subtrees.

## What works so-so

- **`search "NEAR"`** -- limited FTS5 support, often returns 0 results.
- **`search "NOT"`** -- works but can produce counterintuitive result sets.
- **Single broad terms** -- e.g., `search "DataWindow"` returns 1462 hits. Too noisy.

## What doesn't work well

- **Searching terms not in source content** -- summaries may use different vocabulary than the source. Search the chunk content, not the summaries.
- **Index nodes** -- document indexes rank highly in search but contain low-value alphabetical listings.
- **Very large `get` calls** -- a node with 800+ children returns massive XML. Use `toc` with depth limits first.
- **`toc --depth full` on large KBs** -- can exceed token budgets. Use incremental depth instead.

## Anti-rationalization table

| Don't | Do |
|---|---|
| Search for terms that only appear in summaries | Search for terms from the source material |
| Call `get` on a root slug with 1000+ children | Use `toc --depth 2` to find the right slug first |
| Use `NEAR` operator expecting proximity results | Use `AND` with smaller result sets instead |
| Run `toc --depth full` on a large KB | Increment depth: 1, then 2, then target specific slugs |
| Parse YAML output programmatically | Parse XML output from `get` -- it's structured and stable |
| Assume BM25 ranking = semantic relevance | Rank by your own criteria; BM25 is keyword overlap |
| Skip `manifest` and go straight to `search` | Always read `manifest` first to understand KB scope |
| Search single broad terms like "DataWindow" | Combine terms: `DataWindow AND painter`, use `--limit 5` |

## MCP server

Start a long-lived server for multi-turn agent sessions:

```bash
npx @rlemaigre/docpack serve ./mykb --mcp
```

Exposes four tools over stdio:

| Tool | Parameters | Returns |
|---|---|---|
| `manifest` | none | KB overview, root slugs, file stats |
| `toc` | `slug`, `depth` | Hierarchy with clipped summaries |
| `get` | `slug` | Full document with subtree (XML) |
| `search` | `query`, `limit`, `offset` | Ranked search results |

The MCP server keeps the DB connection open across tool calls. Use it instead of repeated CLI invocations for multi-step research.

## TypeScript library

```ts
import { query } from "@rlemaigre/docpack";

const kb = query("./mykb");

// Discover structure
const manifest = kb.manifest();
console.log(manifest.roots); // ["getting-started", "api-reference"]

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

## Effective frontmatter

When generating summaries for a docpack KB, use this frontmatter in your converter output:

```yaml
---
title: "Section Title"
summary: |
  Concise overview of this section and its subsections.
  Mention key concepts, not just structural details.
  Use terminology from the source material, not paraphrases.
---
```

Key rules:
- Summaries must use the same vocabulary as the source chunks (search indexes chunk content, not summaries).
- Avoid paraphrasing technical terms (e.g., don't write "authentification" if the source says "identification").
- Include concept names, function names, and domain terms that users would search for.

## Common pitfalls

1. **Terminology mismatch** -- LLM-generated summaries paraphrase source terms. If the source says "identification" and the summary says "authentification", searching for "authentification" returns nothing. Always verify summaries use source vocabulary.

2. **Token budget** -- `get` on large nodes returns full subtrees as XML. A node with 800+ children can exceed context windows. Use `toc` with depth limits to scout first.

3. **Index pollution** -- Document indexes (table of contents, alphabetical listings) rank highly in FTS5 because they repeat keywords. They contain low-value content. Filter them out or use `title:` prefix to target real sections.

4. **Broad searches** -- Single-term searches on common words return thousands of hits. Always combine terms with `AND` and use `--limit`.

5. **YAML parsing** -- CLI outputs YAML for `manifest`, `toc`, and `search`. It's meant for human reading. For programmatic access, use XML from `get` or the TypeScript library directly.