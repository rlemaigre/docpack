# Delta Specs — flatten_files

## Goal

Remove directory nodes from the bundler tree and rewrite intra-KB Markdown links to `docpack://slug` references so an LLM can navigate the knowledge base by following links.

## Changes

### 1. Flatten directory hierarchy

**Before:** The bundler creates `type: "directory"` nodes for each folder, nesting files under their parent directories. The tree mirrors the filesystem.

**After:** All ingested files are root nodes (`parent_slug IS NULL`). No directory nodes are created. The tree has only `file` and `section` nodes.

**Rationale:** Directory structure is an organizational artifact, not semantic hierarchy. Reading order and document relationships are defined by links between files, not folder nesting.

### 2. Rewrite Markdown links to docpack:// slugs

**Before:** Chunk content preserves original Markdown links verbatim, e.g. `[](../other/file.md)`.

**After:** Relative `.md` links that resolve to ingested files are rewritten to `[](docpack://slug)`. External links and broken links (target not in KB) are left untouched.

**Rationale:** An LLM reading a chunk can resolve `docpack://slug` directly via `docpack get <slug>` (CLI, MCP, or REST). Broken links left as-is signal to the LLM that resolution will fail.

**Details:**
- Only rewrite links with `.md` or `.markdown` extension (or no extension if target exists as `.md`).
- Resolve relative to the source file's original path on disk.
- Fragments (`#heading`) are preserved: `file.md#heading` → `docpack://slug#heading`. The LLM extracts the slug, calls `toc(slug)` or `get(slug)`, and finds the section in the returned tree.
- If the resolved target is not an ingested file, leave the link unchanged.

### 3. Remove directory type from Node model

**Before:** `Node.type` is `"directory" | "file" | "section"`.

**After:** `Node.type` is `"file" | "section"`.

**Rationale:** Directory nodes no longer exist. The type is simpler and reflects actual content boundaries.

### 4. Adjust slug collision resolution for flat layout

**Before:** Colliding slugs are prefixed with parent slug recursively up the tree.

**After:** With no directory nodes, colliding basenames are disambiguated using the original relative path components. E.g. two `README.md` files at `guide/README.md` and `api/README.md` get slugs `guide-readme` and `api-readme`. If that still collides, fall back to `_N`.

**Rationale:** Without directory nodes in the tree, we need path components for uniqueness but not hierarchy.

### 5. Remove `toc(slug, 'files')` depth mode

**Before:** `toc(slug, 'files')` expands directories and sections, stopping at file nodes with a `Summary`.

**After:** The `'files'` depth mode is removed. All roots are files, so `'files'` is equivalent to showing roots with summaries — which `toc(slug, 1)` already does.

**Rationale:** The mode exists to stop at file boundaries in a directory tree. With no directories, it is redundant.

### 6. Simplify manifest — drop `roots` and `files`, add metadata fields

**Before:** Manifest has `roots` (slug list) and `files` (slug list with summaries).

**After:** Manifest is metadata only — no file enumeration. Fields:
- `version` — docpack version that created the KB.
- `totalChunks` / `totalBytes` — aggregate statistics.
- `home` — slug of the primary entry page. Mandatory, supplied via `--home`.
- `description` — human-readable description of what the KB covers. Optional, supplied via `BundleOptions`. Always present in manifest (`null` when not set).
- `url` — source URL (wiki, website, etc.). Optional, supplied via `BundleOptions`. Always present in manifest (`null` when not set).
- `exportedAt` — date of source data export/scraping (ISO 8601). Auto-set to bundle time if omitted.

**Rationale:** Without directory nodes, `roots` and `files` are flat catalogs that don't scale (Wikipedia export = 10,000+ entries). The manifest describes the KB; agents discover content via `home` → follow links → `search()`.

## Affected Files

- `src/bundler/bundler.ts` — remove directory node creation, flatten file ingestion, accept metadata options
- `src/bundler/manifest.ts` — drop `roots` and `files`, add metadata fields (`home`, `description`, `url`, `exportedAt`)
- `src/bundler/slug.ts` — adjust collision resolution for flat layout
- `src/bundler/link-rewriter.ts` — new: parse and rewrite Markdown links
- `src/types.ts` — remove `"directory"` from Node type
- `src/query/toc.ts` — remove `'files'` depth mode
- `src/schema.ts` — update CHECK constraint on `nodes.type`
- `samples/` — update sample outputs to reflect flat structure
- `SPECS.md` — update data model, API docs, and concepts

## Breaking Changes

- `Node.type` no longer includes `"directory"`. Code checking for directory nodes will break.
- `toc(slug, 'files')` is removed. Callers using this depth mode must switch to a numeric depth.
- `--home` is now mandatory for `bundle`. A guiding error message is shown when omitted.
- Chunk content may differ — rewritten links use `docpack://slug` instead of relative paths.
- DB schema CHECK constraint on `nodes.type` changes.
- Manifest no longer contains `roots` or `files`. Consumers relying on file enumeration must use `search()` or `toc(home)` instead.
- Manifest fields (`home`, `description`, `url`, `exportedAt`) are always present (`null` when not set).
- File slugs may change due to new collision resolution logic.
