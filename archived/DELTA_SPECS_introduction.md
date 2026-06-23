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

### 3. Search results are always leaf documents

**Before:** FTS search could match internal nodes (documents with both chunk and children).
**After:** All chunks live in leaf documents, so search hits are always depth-0 (leaf) documents. `get(slug)` on a hit is always cheap.

## Affected Files

- `src/bundler/parser.ts` — recursive `applyIntro()` transformation on MD tree
- `src/bundler/db.ts` — synthetic node detection and slug derivation during insertion
- `SPECS.md` — update data model, parser rules, and search behavior docs
- `tests/query.test.ts` — update test expectations for new tree shapes
- `tests/skill.test.ts` — update if needed
- `README.md` — update examples

## Breaking Changes

- File documents that previously had preamble content (chunk) now have `chunk: null` and a synthetic "Introduction" child. Agents using `get("<file-slug>")` will see an empty chunk instead of preamble text. The content is at `get("<file-slug>-introduction")`.
- Existing `docpack://<file-slug>` links in home files still resolve to the file document (container). Agents must navigate to the introduction child for content.
