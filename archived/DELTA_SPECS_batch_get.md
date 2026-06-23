# Delta Specs — batch_get

## Goal

Allow `get()` to accept multiple slugs so agents can fetch search/TOC results in one call.

## Changes

### 1. `get()` accepts `string | string[]`

**Before:** `get(slug: string): Document | null`
**After:** `get(slug: string): Document | null` and `get(slugs: string[]): Document[]`
**Rationale:** Agents get lists of slugs from `search()` and `toc()` but have no way to fetch them without N round trips.

### 2. CLI output always wrapped in `<documents>`

**Before:** `docpack get ./kb slug` → `<document slug="...">...</document>`
**After:** `docpack get ./kb slug` → `<documents><document slug="...">...</document></documents>`
**Rationale:** Same command, same output shape. No conditional formatting based on argument count.

### 3. CLI accepts variadic slugs

**Before:** `get <kb> <slug>`
**After:** `get <kb> [slug...]`
**Rationale:** `docpack get ./kb slug1 slug2 slug3`

### 4. MCP `get` tool accepts `string | string[]`

**Before:** `slug: z.string()`
**After:** `slug: z.union([z.string(), z.array(z.string())])`
**Rationale:** MCP consumers can pass one or many slugs in a single tool call.

## Affected Files

- `src/query/get.ts` — add `batchGet()` function
- `src/query/index.ts` — add overload to `KBInstance.get()`
- `src/cli/format.ts` — add `formatXmlBatch()`, update `formatXml()` to always wrap
- `src/cli/index.ts` — variadic slugs for `get` command
- `src/cli/mcp.ts` — accept `string | string[]` for `get` tool
- `src/index.ts` — export updated types
- `tests/query.test.ts` — batch get tests
- `tests/cli.test.ts` — update CLI tests for new output format

## Breaking Changes

- CLI `get` output format: single `<document>` root → `<documents>` wrapper (always)
