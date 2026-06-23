# Delta Specs — skills_update

## Goal

Update docpack query skills with findings from hands-on testing against real knowledge bases.

## Changes

### 1. Fix search output description

**Before:** Skills said search "returns full chunk text per hit" (SKILL.md) or used vague "scales with N" language.
**After:** Skills correctly state search returns "snippet excerpts (~30 tokens per hit)" with compact output (~400B per hit).
**Rationale:** Testing showed search returns FTS5 snippets, not full chunks. The old description was misleading and discouraged agents from using search efficiently.

### 2. Add `title:` and `chunk:` column search operators

**Before:** Only basic operators (AND, OR, phrase, prefix) were documented.
**After:** `title:term` and `chunk:term` operators documented with guidance.
**Rationale:** `title:` search is extremely compact (~120B for 3 hits) and useful for finding sections by name. `chunk:` excludes title matches when content-only search is needed.

### 3. Add batch get strategy

**Before:** No documentation of batch get (added in v0.7.0).
**After:** Documents `get --slug a --slug b` with note about missing slug handling.
**Rationale:** Batch get is a real feature that saves wrapper overhead and handles missing slugs gracefully.

### 4. Add adaptive strategy selection

**Before:** Assumed home file TOC is always useful. Single discovery strategy.
**After:** Two-phase approach: (1) manifest, (2) assess home file structure, then branch to TOC-driven or search-driven strategy.
**Rationale:** Testing with SQL Anywhere KB showed home files can be flat (1-2 children), making TOC navigation useless. Agents need to adapt.

### 5. Add Eta template syntax fix

**Before:** `<% } %><% if` on same line caused Eta parser error (`%}` instead of `%>`).
**After:** Each Eta block on its own line.
**Rationale:** The inline conditional pattern broke Eta compilation. Multi-line blocks work correctly.

### 6. Add search pagination strategy

**Before:** No mention of `--offset` pagination.
**After:** Documents pagination with `--offset` and `total` field usage.
**Rationale:** Large result sets need pagination to stay within token budgets.

### 7. Add search result navigation

**Before:** `prev`/`next` navigation only mentioned for `get` output.
**After:** Documents that search results also carry `prev`/`next`/`parent` for navigation.
**Rationale:** Search hits include navigation attributes that agents can use without additional queries.

### 8. Add concrete token cost estimates

**Before:** Relative terms only (tiny, small, medium, large, huge).
**After:** Relative terms with byte estimates (e.g., `~160B`, `~2KB`, `~400B`).
**Rationale:** Concrete numbers help agents make better budgeting decisions while remaining KB-agnostic (estimates are approximate).

## Affected Files

- `skill/docpack-query/SKILL.md` — main query skill, comprehensive update
- `src/skill/templates/skill.md.eta` — skill template for generated packages, matching updates + Eta syntax fix
- `samples/outputs/powerbuilder/docpack.*` — regenerated with v0.7.0
- `samples/outputs/sqlanywhere/docpack.*` — regenerated with v0.7.0

## Breaking Changes

None. Skill content is guidance only, not API contracts.
