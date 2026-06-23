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

## Token budget guide

Output scales with KB size. These relative orderings hold across KBs. Use `chunkCount` and `totalBytes` from `toc` output to gauge actual sizes.

| Command | Relative cost | Use for |
|---|---|---|
| `manifest` | tiny | Always start here. KB stats + home slug. |
| `toc <slug> --depth 1` | small | Scout structure. Children show `chunkCount` and `totalBytes`. |
| `toc <home> --depth 2` | medium | Detailed overview of top sections. Usually safe. |
| `toc <section> --depth 2` | medium | Check depth 1 first. Scales with section size. |
| `search "<q>" --limit 5` | small | Snippet excerpts (~30 tokens per hit). Use `--limit 3-10`. |
| `search "title:q" --limit 5` | tiny | Title-only search. 3–5x smaller than regular search. |
| `get <leaf>` | small | Single section (depth=0). Best value for content. |
| `get --slug a --slug b` | small (batch) | Fewer API calls, shared XML wrapper. Skips missing slugs. |
| `get <internal>` | large | Full subtree. ~10x larger than `toc --depth 2` on the same node. |
| `get <root>` | huge | Avoid. Use `toc` + targeted `get` calls instead. |

**Rule of thumb:** `toc` for structure, `search` for discovery, `get` for content. Never `get` a root document.

## Phase 0: Always start with manifest

```bash
npx @rlemaigre/docpack manifest ./mykb
```

Output (YAML):
```yaml
version: 0.7.0
totalChunks: 6496
totalBytes: 7436104
home: powerbuilder-2019-users-guide-for-pb-2019
description: null
url: null
exportedAt: 2026-06-23T07:13:56.538Z
```

Returns `version`, `totalChunks`, `totalBytes`, `home` (slug of the primary entry file), `description`, `url`, and `exportedAt`.

Use `totalChunks` and `totalBytes` to gauge KB size. Use `home` as your entry point slug.

## Phase 1: Assess the home file structure

```bash
npx @rlemaigre/docpack toc ./mykb "<home_slug>" --depth 1
```

Output (YAML) — clipped children carry `Summary` stats, not expanded trees:
```yaml
slug: powerbuilder-2019-users-guide-for-pb-2019
title: Part I. The PowerBuilder Environment
children:
  - slug: 1-working-with-powerbuilder
    title: 1 Working with PowerBuilder
    children:
      chunkCount: 40
      totalBytes: 45856
      depth: 2
```

Each child shows `chunkCount`, `totalBytes`, and `depth`. This tells you two things:

1. **Is the home file a good TOC?** If it has many children (5+), it's a structured entry point. Drill with `toc --depth 2` on sections of interest.

2. **Is the home file flat?** If it has 1-2 children, the home file is not useful for navigation. Switch to a **search-driven strategy** (see below).

### Good home file → TOC-driven strategy

```bash
# Drill one level deeper on sections of interest
npx @rlemaigre/docpack toc ./mykb "<section_slug>" --depth 2

# Retrieve specific leaf sections (depth=0)
npx @rlemaigre/docpack get ./mykb --slug "<leaf_slug>"
```

Use `chunkCount` and `totalBytes` from depth 1 to decide which sections are worth exploring.

### Flat home file → search-driven strategy

When the home file has few children, use search to discover content:

```bash
# Broad search to find relevant sections
npx @rlemaigre/docpack search ./mykb "topic" --limit 10

# Use parent slugs from hits to understand structure
npx @rlemaigre/docpack toc ./mykb "<parent_slug>" --depth 1

# Retrieve content
npx @rlemaigre/docpack get ./mykb --slug "<leaf_slug>"
```

## Query strategies

### Strategy 1: Focused question (search → get)

Best when you know the topic but not its location.

```bash
# Step 1: search with combined terms
npx @rlemaigre/docpack search ./mykb "DataWindow AND filter" --limit 5
```

Search output (YAML):
```yaml
total: 82
hits:
  - slug: 1-1-4-77-authentication-failed
    snippet: You set the database_<b>authentication</b> ... option incorrectly.
    parent: 1-1-sql-anywhere-error-messages
```

```bash
# Step 2: pick the best match from snippets, get full content
npx @rlemaigre/docpack get ./mykb --slug "9-31-filter"
```

Get output (XML):
```xml
<documents>
  <document slug="1-1-4-77-authentication-failed" title="1.1.4.77 Authentication failed" level="3" depth="0" parent="1-1-sql-anywhere-error-messages">
    <chunk>Error constant
SQLE_AUTHENTICATION_FAILED
...</chunk>
    <children/>
  </document>
</documents>
```

Search returns **snippet excerpts** (~30 tokens per hit with `<b>`/`</b>` markers), not full chunks. Output is compact. Use `--limit 3-10` depending on how many candidates you want to scan.

### Strategy 2: Find sections by name (title: search)

Extremely token-efficient. Searches only document titles, returns just the title text as snippet.

```bash
npx @rlemaigre/docpack search ./mykb "title:filter" --limit 5
```

Output is ~120 bytes for 3 hits. Use this to find sections when you know part of their name.

### Strategy 3: Content-only search (chunk: search)

Search only chunk content, excluding titles. Useful when title matches are noisy.

```bash
npx @rlemaigre/docpack search ./mykb "chunk:authentication" --limit 5
```

### Strategy 4: Multi-section retrieval (batch get)

Fetch multiple documents in one call. Missing slugs are skipped silently.

```bash
npx @rlemaigre/docpack get ./mykb --slug "9-31-filter" --slug "9-32-filteredcount" --slug "9-166-setfilter"
```

Saves wrapper overhead vs individual calls. All results share a single `<documents>` root.

### Strategy 5: Sequential navigation

Use `prev`/`next` attributes in `get` XML output to walk through sections in reading order:

```bash
# Get a section
npx @rlemaigre/docpack get ./mykb --slug "17-2-choosing-a-presentation-style"
# XML shows: prev="17-2-1-..." next="17-2-2-..."

# Follow the chain
npx @rlemaigre/docpack get ./mykb --slug "17-2-2-using-the-freeform-style"
```

`prev`/`next` are present on section documents (children of files), not on root documents. Search results also carry `prev`/`next`/`parent` for navigation context.

### Strategy 6: Search + pagination

For broad topics with many matches, paginate through results:

```bash
npx @rlemaigre/docpack search ./mykb "DataWindow" --limit 5 --offset 0
npx @rlemaigre/docpack search ./mykb "DataWindow" --limit 5 --offset 5
npx @rlemaigre/docpack search ./mykb "DataWindow" --limit 5 --offset 10
```

The `total` field tells you how many matches exist. Use it to decide how many pages to fetch.

### Strategy 7: Hybrid (search → context → get)

For questions that require understanding a section's place in the hierarchy:

```bash
# 1. Find relevant sections
npx @rlemaigre/docpack search ./mykb "authentication AND OAuth" --limit 5

# 2. Understand the section's place in the hierarchy (from parent slug in search hit)
npx @rlemaigre/docpack toc ./mykb "<parent_slug>" --depth 1

# 3. Retrieve the full content
npx @rlemaigre/docpack get ./mykb --slug "<target_slug>"
```

## Search operators

| Operator | Example | Notes |
|---|---|---|
| AND | `"term1 AND term2"` | Narrows results. Reliable. |
| OR | `"term1 OR term2"` | Broadens results. Can return thousands of hits. |
| Phrase | `'"exact phrase"'` | Matches exact word sequence. |
| Prefix | `"DataW*"` | Partial matching. Can return many hits. |
| Column: title | `"title:term"` | Search only titles. 3–5x smaller than regular search. Extremely compact. |
| Column: chunk | `"chunk:term"` | Search only content, not titles. |
| NOT | `"term1 NOT term2"` | Excludes matches. Reliable for filtering noise. |

**Avoid:** `NEAR` (unreliable — matches "near" as a regular term, not as a proximity operator), single broad terms (too many hits).

## What works great

- **`manifest`** -- instant KB overview with metadata and home slug. Always start here.
- **`toc --depth 1`** -- top-level section summaries give you a semantic map. Use `chunkCount` and `totalBytes` to gauge section size.
- **`search "term1 AND term2"`** -- boolean AND narrows results effectively.
- **`search "title:term"`** -- find sections by name. 3–5x smaller than regular search. Extremely compact.
- **`search "term1 NOT term2"`** -- exclude noise terms. Reliable filtering.
- **`get <leaf_slug>`** -- returns a single section. Best value for reading.
- **`get --slug a --slug b`** -- batch retrieval. Fewer API calls, shared XML wrapper. Skips missing slugs.
- **`prev`/`next`/`parent` navigation** -- walk through sections in reading order. Available in both search results and `get` output. Use `parent` from search hits to jump to context via `toc`.

## What works good

- **`toc --depth 2` on home** -- second-level summaries let you drill without loading full content. Usually safe.
- **`search "prefix*"`** -- prefix matching for partial terms (e.g., `GetSeries*`). Can return many hits.
- **`search "chunk:term"`** -- content-only search when titles are noisy.
- **Search pagination** -- `--offset` lets you page through large result sets without blowing token budget.

## What works so-so

- **`search "term1 OR term2"`** -- alternative terms, but returns more results and larger output.
- **`toc --depth 2` on large sections** -- can blow up on KBs with deep hierarchies. Check depth 1 first.
- **Single broad searches** -- e.g., `search "component"` returns too many hits. Combine with `AND`.

## What doesn't work well

- **Searching terms not in source content** -- summaries may use different vocabulary than the source. Search the chunk content, not the summaries.
- **`get` on root documents** -- returns the full subtree as XML. Use `toc` with depth limits first.
- **`get` on internal nodes** -- returns full subtree as XML. ~11x larger than `toc --depth 2` on the same node. Use `toc` to scout, then `get` individual leaves.
- **`toc --depth full`** -- can exceed token budgets. Use incremental depth instead.
- **Phrase search with special characters** -- dots, underscores in phrases often fail. Use space-separated terms instead.

## Adaptive strategy selection

Choose your approach based on what `manifest` and `toc --depth 1` reveal:

| KB characteristic | Best strategy |
|---|---|
| Home has 5+ children | TOC-driven: `toc` → drill → `get` leaves |
| Home has 1-2 children | Search-driven: `search` → use `parent` from hits → `toc` → `get` |
| Focused question (known topic) | `search "term1 AND term2"` → `get` best match |
| Finding a section by name | `search "title:name"` → `get` |
| Exploring a topic broadly | `search "topic" --limit 10` with `--offset` pagination |
| Reading a chapter sequentially | `get` first section → follow `next` chain |
| Comparing multiple sections | `search` → extract slugs → `batch get` |
| Need context around a search hit | Use `parent` slug from hit → `toc <parent> --depth 1` |

**Key insight:** `get` on an internal node returns the full subtree as XML — roughly **11x larger** than `toc --depth 2` on the same node. Always prefer `toc` for structure scouting, then `get` individual leaves for content.

## Anti-rationalization table

| Don't | Do |
|---|---|
| Call `get` on a root or internal slug | Use `toc --depth 1` to find the right section, then `get` leaves |
| Use `NEAR` expecting proximity results | Use `AND` with smaller result sets |
| Run `toc --depth full` on a large KB | Increment depth: 1, then 2, then target specific slugs |
| Parse YAML output programmatically | Parse XML output from `get` -- it's structured and stable |
| Assume BM25 ranking = semantic relevance | Rank by your own criteria; BM25 is keyword overlap |
| Skip `manifest` and go straight to `search` | Always read `manifest` first to understand KB scope |
| Search single broad terms like "component" | Combine terms: `component AND render`, use `--limit 3` |
| Search for paraphrased summary terms | Search for terms from the source material |
| Assume home TOC is always useful | Check `toc --depth 1` on home; if flat (1-2 children), switch to search |
| `get` a section to see its children | Use `toc <slug> --depth 1` — ~11x smaller than `get` |

## MCP server

Start a long-lived server for multi-turn agent sessions:

```bash
npx @rlemaigre/docpack serve ./mykb --mcp
```

Exposes four tools over stdio:

| Tool | Parameters | Returns |
|---|---|---|
| `manifest` | none | KB overview (version, totalChunks, totalBytes, home, description, url, exportedAt) |
| `toc` | `slug`, `depth` | Hierarchy with clipped summaries |
| `get` | `slug` | Full document with subtree (XML) |
| `search` | `query`, `limit`, `offset` | Ranked search results with snippets |

The MCP server keeps the DB connection open across tool calls. Use it instead of repeated CLI invocations for multi-step research.

## TypeScript library

```ts
import { query } from "@rlemaigre/docpack";

const kb = query("./mykb");

// Discover structure
const manifest = kb.manifest();
console.log(manifest.home); // "toc" -- slug of the primary entry file

// Navigate with clipped summaries
const toc = kb.toc("api-reference", 2);

// Get full subtree
const doc = kb.get("api-auth");

// Batch get multiple documents
const docs = kb.get(["api-auth", "api-billing"]);

// Search
const results = kb.search({
  query: "authentication AND OAuth",
  limit: 10,
  offset: 0,
});

kb.close();
```

## Summary generation tips

When generating summaries (via JSONL import or LLM fold mode), follow these rules:
- Summaries must use the same vocabulary as the source chunks (search indexes chunk content, not summaries).
- Avoid paraphrasing technical terms (e.g., don't write "authentification" if the source says "identification").
- Include concept names, function names, and domain terms that users would search for.

## Common pitfalls

1. **Terminology mismatch** -- LLM-generated summaries paraphrase source terms. If the source says "identification" and the summary says "authentification", searching for "authentification" returns nothing. Always verify summaries use source vocabulary.

2. **Token budget** -- `get` on large documents returns full subtrees as XML. A document with 800+ children can exceed context windows. Use `toc` with depth limits to scout first.

3. **`get` vs `toc` ratio** -- `get` on an internal node returns ~11x more data than `toc --depth 2` on the same node. Always use `toc` for structure, then `get` individual leaves for content.

4. **Broad searches** -- Single-term searches on common words return thousands of hits. Always combine terms with `AND` and use `--limit`.

5. **Flat home files** -- not all KBs have useful home files. Check `toc --depth 1` on the home slug; if it has 1-2 children, rely on search instead of TOC navigation.

6. **Phrase search with special characters** -- dots, underscores in phrases often fail. Use space-separated terms or `title:` column search instead.
