# Delta Plan — flatten_files

## Phase 1 — Schema + types (foundation)

No dependencies. Safe to do first.

- [x] 1.1 `src/schema.ts` — remove `"directory"` from CHECK constraint on `nodes.type`
- [x] 1.2 `src/query/toc.ts` — drop `'files'` from `DepthMode` type and all related logic
- [x] 1.3 `src/query/index.ts` — update `Manifest` interface (drop `roots`, `files`; add `home?`, `description?`, `url?`, `exportedAt?`). Update `KBInstance.toc()` signature.

## Phase 2 — Walker (filesystem)

Depends on: nothing.

- [x] 2.1 `src/bundler/walker.ts` — replace tree builder with flat file collector. Drop `FSNode` tree, return a flat sorted list of file entries.

## Phase 3 — DB insertion + link rewriter

Depends on: Phase 2.

- [x] 3.1 `src/bundler/link-rewriter.ts` — **new file**. Pre-pass builds a `path → slug` map. Rewrite pass converts `[](relative.md#frag)` → `[](docpack://slug#frag)`. External/broken links left as-is.
- [x] 3.2 `src/bundler/db.ts` — remove `insertDirectoryNode`. Adjust `resolveCollision` to use path components instead of parent slug. Wire link rewriter after `walkMD()`.

## Phase 4 — Manifest

Depends on: Phase 1.

- [x] 4.1 `src/bundler/manifest.ts` — rewrite `buildManifest()` for metadata-only manifest. Drop `fetchRootSlugs` and `fetchFileSummaries`. Auto-set `exportedAt`.

## Phase 5 — Bundle entry point

Depends on: Phase 2, 3, 4.

- [x] 5.1 `src/bundler/index.ts` — add `description?`, `url?`, `exportedAt?`, `home?` to `BundleOptions`. Pass to manifest builder. Resolve `home` path to slug.

## Phase 6 — CLI

Depends on: Phase 5.

- [x] 6.1 `src/cli/index.ts` — add `--description`, `--url`, `--exported-at`, `--home` flags
- [x] 6.2 `src/cli/mcp.ts` — remove `'files'` from `parseDepth()`

## Phase 7 — Post-processing

Depends on: Phase 4.

- [x] 7.1 `src/post-process/summarize.ts` — remove `patchManifestWithSummaries()` (summaries live only in DB). Update `Manifest` import.

## Phase 8 — Samples + SPECS

Depends on: all phases.

- [x] 8.1 Rebuild samples (verified with PowerBuilder and link-test)
- [x] 8.2 Update `SPECS.md`
- [x] 8.3 Run `npx eslint src/`
