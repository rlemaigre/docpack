# Delta Specs — introduction

## Goal

Eliminate the need for a separate `peek()` method by ensuring every chunk is a leaf document fetchable via `get(slug)`.

## Changes

### 1. Synthetic Introduction sections

**Before:** A document (file, section, or subsection) can have both a non-empty chunk (self-content) AND non-empty children. `get(slug)` returns the full subtree.

**After:** Any document with both a non-empty chunk AND non-empty children gets its chunk moved into a synthetic "Introduction" section as the first child. The parent's chunk becomes null. Applied recursively at every hierarchy level.

**Rationale:** All chunks become leaf documents. `get(slug)` on a leaf is a single-row lookup — no subtree traversal needed. No API surface changes required.

### 2. Slug generation for synthetic sections

**Before:** N/A.
**After:** Synthetic introduction slugs are `<parent-slug>-introduction` (e.g. `readme-introduction`, `api-auth-introduction`), resolved through the standard collision resolver.

### 3. FTS5 indexes only leaf nodes

**Before:** FTS search could match internal nodes (documents with both chunk and children).
**After:** FTS5 sync excludes internal nodes via `WHERE slug NOT IN (SELECT DISTINCT parent_slug FROM nodes)`. All search hits are guaranteed to be leaves, so `get(slug)` is always a single-row lookup.

### 4. Whitespace-only content no longer sets empty chunk

**Before:** `flushChunk()` set `chunk: ""` when accumulated lines contained only whitespace.
**After:** `flushChunk()` checks `if (text)` after trimming, so whitespace-only content leaves `chunk` as `null`.

## Affected Files

- `src/bundler/parser.ts` — `applyIntro()` transformation, `flushChunk()` fix, `isSynthetic` flag on `MDNode`
- `src/bundler/db.ts` — synthetic node slug derivation, FTS5 leaf-only filter
- `SPECS.md` — data model, parser rules, slug generation, search behavior, breaking changes, v2+ proposal
- `README.md` — document model, search, summarize, storage sections
- `tests/parser.test.ts` — updated expectations for synthetic intro tree shapes
- `tests/query.test.ts` — updated test for readme document (container) vs intro section (leaf)

## Breaking Changes

- File documents that previously had preamble content (chunk) now have `chunk: null` and a synthetic "Introduction" child. Agents using `get("<file-slug>")` will see an empty chunk instead of preamble text. The content is at `get("<file-slug>-introduction")`.
- Existing `docpack://<file-slug>` links in home files still resolve to the file document (container). Agents must navigate to the introduction child for content.
