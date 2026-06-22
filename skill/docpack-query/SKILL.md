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
| `toc <slug> --depth 1` | small | Scout structure. Shows children with `chunkCount` and `totalBytes`. |
| `toc <home> --depth 2` | medium | Detailed overview of top sections. Usually safe. |
| `toc <section> --depth 2` | medium-large | Risky on large sections. Check depth 1 first. |
| `search "<query>" --limit N` | scales with N | Returns full chunk text per hit. Use `--limit 1-3` for budget. |
| `get <leaf>` | small | Retrieve a single section (depth=0). Best value for content. |
| `get <internal>` | large | Full subtree. Only when you need all children. |
| `get <root>` | huge | Avoid. Use `toc` + targeted `get` calls instead. |

**Rule of thumb:** `toc` for structure, `get` for content. Never `get` a root document.

## Query strategies

### Strategy 1: Discovery (broad questions)

Use when you need to understand what the KB covers before asking specific questions.

**Step 1: `manifest`** -- get KB overview and home slug.

```bash
npx @rlemaigre/docpack manifest ./mykb
```

Returns `version`, `totalChunks`, `totalBytes`, `home` (slug of the primary entry file), `description`, `url`, and `exportedAt`. Use the `home` slug as your entry point.

**Step 2: `toc --depth 1`** -- map the top-level structure.

```bash
npx @rlemaigre/docpack toc ./mykb "<home_slug>" --depth 1
```

Each child shows `chunkCount`, `totalBytes`, and `depth`. Use these to identify which sections are large vs small. Pick sections to drill into.

**Step 3: `toc --depth 2`** -- drill one level deeper on sections of interest.

```bash
npx @rlemaigre/docpack toc ./mykb "<section_slug>" --depth 2
```

**Step 4: `get`** -- retrieve specific leaf sections.

```bash
npx @rlemaigre/docpack get ./mykb "<leaf_slug>"
```

Returns XML with chunk content and children. Leaf sections (depth=0) are the smallest units.

### Strategy 2: Search (focused questions)

Use when you know the topic but not its location in the KB.

```bash
# Search with combined terms for narrow results
npx @rlemaigre/docpack search ./mykb "DataWindow AND filter" --limit 5 --offset 0
```

Returns ranked hits with matched text. Each hit includes the full chunk content, so output grows quickly. Use `--limit 1-3` for token efficiency. Extract the `slug` from results and call `get` for full context.

**Token-efficient variant:** pipe search to a file, extract slugs, then get what you need:

```bash
# Save search results
npx @rlemaigre/docpack search ./mykb "DataWindow AND filter" --limit 10 > /tmp/hits.yaml

# Extract just the slugs
grep "slug:" /tmp/hits.yaml

# Get specific documents
npx @rlemaigre/docpack get ./mykb "9-31-filter"
```

### Strategy 3: Hybrid (complex questions)

Best for questions that require context around a specific topic.

```bash
# 1. Find relevant sections
npx @rlemaigre/docpack search ./mykb "authentication AND OAuth" --limit 5

# 2. Understand the section's place in the hierarchy
npx @rlemaigre/docpack toc ./mykb "<parent_slug>" --depth 1

# 3. Retrieve the full content
npx @rlemaigre/docpack get ./mykb "<target_slug>"
```

### Strategy 4: Sequential navigation

Use `prev`/`next` attributes in `get` XML output to walk through sections in reading order:

```bash
# Get a section
npx @rlemaigre/docpack get ./mykb "17-2-choosing-a-presentation-style"
# XML shows: prev="17-2-1-..." next="17-2-2-..."

# Follow the chain
npx @rlemaigre/docpack get ./mykb "17-2-2-using-the-freeform-style"
```

`prev`/`next` are present on section documents (children of files), not on root documents.

## Search operators

| Operator | Example | Notes |
|---|---|---|
| AND | `"term1 AND term2"` | Narrows results. Use this. |
| OR | `"term1 OR term2"` | Broadens results. Returns more hits. |
| Phrase | `'"exact phrase"'` | Matches exact word sequence. |
| Prefix | `"DataW*"` | Partial matching. Can return many hits. |
| Column | `"title:term"` | Search only titles or only chunks. |
| NEAR | `"term1 NEAR term2"` | Limited support. Often returns 0 results. |
| NOT | `"term1 NOT term2"` | Works but can produce counterintuitive sets. |

**Avoid:** `NEAR` (unreliable), `NOT` (counterintuitive), single broad terms (too many hits).

## What works great

- **`manifest`** -- instant KB overview with metadata and home slug. Always start here.
- **`toc --depth 1`** -- top-level section summaries give you a semantic map. Use `chunkCount` and `totalBytes` to gauge section size.
- **`search "term1 AND term2"`** -- boolean AND narrows results effectively.
- **`get <leaf_slug>`** -- returns a single section. Best value for reading.
- **`prev`/`next` navigation** -- walk through sections in reading order without re-searching.

## What works good

- **`toc --depth 2` on home** -- second-level summaries let you drill without loading full content. Usually safe.
- **`search "prefix*"`** -- prefix matching for partial terms (e.g., `GetSeries*`). Can return many hits.
- **`search "title:term"`** -- column-specific search targets titles only. Useful for finding section names.

## What works so-so

- **`search "term1 OR term2"`** -- alternative terms, but returns more results and larger output.
- **`toc --depth 2` on large sections** -- can blow up on KBs with deep hierarchies. Check depth 1 first.
- **Single broad searches** -- e.g., `search "component"` returns too many hits. Combine with `AND`.

## What doesn't work well

- **Searching terms not in source content** -- summaries may use different vocabulary than the source. Search the chunk content, not the summaries.
- **`get` on root documents** -- returns the full subtree as XML. Use `toc` with depth limits first.
- **`toc --depth full`** -- can exceed token budgets. Use incremental depth instead.
- **Phrase search with special characters** -- dots, underscores in phrases often fail. Use space-separated terms instead.

## Anti-rationalization table

| Don't | Do |
|---|---|
| Call `get` on a root slug | Use `toc --depth 1` to find the right section, then `get` leaves |
| Use `NEAR` expecting proximity results | Use `AND` with smaller result sets |
| Run `toc --depth full` on a large KB | Increment depth: 1, then 2, then target specific slugs |
| Parse YAML output programmatically | Parse XML output from `get` -- it's structured and stable |
| Assume BM25 ranking = semantic relevance | Rank by your own criteria; BM25 is keyword overlap |
| Skip `manifest` and go straight to `search` | Always read `manifest` first to understand KB scope |
| Search single broad terms like "component" | Combine terms: `component AND render`, use `--limit 3` |
| Search for paraphrased summary terms | Search for terms from the source material |
| Pipe full search output into context | Save to file, extract slugs with `grep`, then `get` what you need |

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
| `search` | `query`, `limit`, `offset` | Ranked search results |

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

3. **Broad searches** -- Single-term searches on common words return thousands of hits. Always combine terms with `AND` and use `--limit`.

4. **Search output size** -- `search` returns full chunk text per hit. Output grows quickly with result count. Save to a file and extract slugs with `grep` if you only need the document references.

5. **YAML parsing** -- CLI outputs YAML for `manifest`, `toc`, and `search`. It's meant for human reading. For programmatic access, use XML from `get` or the TypeScript library directly.
