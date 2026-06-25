# Implementation Plan — docpack v2

Phased approach. Each phase leaves the project in a consistent state (compiles, tests pass).

---

## Phase 1: Schema and Types

Foundation. No behavior yet.

- [ ] **1.1** Rewrite `src/schema.ts` — new nodes table (no parent_slug, no idx), closure table with `order` column, retain relationship tables
- [ ] **1.2** Rewrite `src/query/get.ts` — new `Document` type, new `DocumentNode` type (with children), remove nav fields
- [ ] **1.3** Rewrite `src/query/search.ts` — simplified `SearchHit`, flat array return, add `rank`
- [ ] **1.4** Rewrite `src/query/toc.ts` — use closure table instead of parent_slug
- [ ] **1.5** Add `src/query/ancestors.ts` — new `ancestors(slug)` query
- [ ] **1.6** Rewrite `src/query/index.ts` — new `KBInstance` interface, add `getMany`, `ancestors`, simplify `search`
- [ ] **1.7** Update `src/index.ts` — new type exports

**Tests:** Update `tests/query.test.ts` for new types. Expect failures until schema is populated correctly.

---

## Phase 2: KB Interface and Materializer

The lazy read handle and the write path.

- [ ] **2.1** Add `src/kb.ts` — `KB` interface implementation backed by SQLite (root, fetch, fetchChildren)
- [ ] **2.2** Add `src/query/materialize.ts` — traverse a KB, write nodes + closure table to SQLite, sync FTS5
- [ ] **2.3** Update `src/bundler/manifest.ts` — simplified manifest (drop home, exportedAt)

**Tests:** Unit tests for KB interface. Materializer writes correct schema.

---

## Phase 3: Operators

Extract bundler logic into operators.

- [ ] **3.1** Add `src/operators/index.ts` — `Operator` type, exports
- [ ] **3.2** Add `src/kb/of.ts` — `KB.ofDirectory(path, glob)` and `KB.ofFile(path)` factories. Reads filesystem → flat KB: synthetic root + atomic file docs (slug=from abs path, title=null, chunk=null, meta=FileMeta). Zero parsing.
- [ ] **3.3** Add `src/kb/union.ts` — `KB.union(...kbs)` merges multiple KBs into one. Last KB wins on slug collision.
- [ ] **3.3** Add `src/operators/parse-markdown.ts` — `Op.parseMarkdown()` populates slug/title/chunk from FileMeta
- [ ] **3.4** Add `src/operators/parse-headings.ts` — `Op.parseHeadings()` splits chunks on ATX headings
- [ ] **3.5** Add `src/operators/insert-introductions.ts` — `Op.insertIntroductions()` moves preamble to synthetic children
- [ ] **3.6** Add `src/operators/resolve-collisions.ts` — `Op.resolveCollisions()` disambiguates slugs
- [ ] **3.7** Add `src/operators/rewrite-links.ts` — `Op.rewriteLinks()` rewrites relative .md links
- [ ] **3.8** Add `src/operators/summarize-file.ts` — `Op.summarizeFile(path)` imports JSONL summaries
- [ ] **3.9** Add `src/operators/summarize-llm.ts` — `Op.summarizeLLM(opts)` LLM bottom-up fold
- [ ] **3.10** Add `src/operators/index.ts` — `Op` namespace object, exports all operators

**Tests:** Each operator tested in isolation. Input KB → operator → assert output KB.

---

## Phase 4: Pipeline

Compose operators and materialize.

- [ ] **4.1** Add `src/pipeline.ts` — `pipeline(operators[], output, options)` composes operators, traverses result, materializes to SQLite
- [ ] **4.2** Rewrite `src/bundler/index.ts` — `bundle()` becomes a convenience wrapper: `pipeline(KB.ofDirectory(input), [Op.parseMarkdown(), Op.parseHeadings(), ...], output, options)`
- [ ] **4.3** Delete old bundler files: `src/bundler/db.ts`, `src/bundler/walker.ts`, `src/bundler/parser.ts`, `src/bundler/link-rewriter.ts` (logic moved to operators)

**Tests:** Full pipeline integration test. Input dir → pipeline → query KB → assert correct tree.

---

## Phase 5: Cleanup — Remove Dead Features

- [ ] **5.1** Delete `src/skill/` directory (generate.ts, templates/)
- [ ] **5.2** Delete `src/cli/mcp.ts`
- [ ] **5.3** Delete `src/post-process/summarize.ts`
- [ ] **5.4** Update `src/cli/index.ts` — remove skill, serve, summarize commands. Simplify bundle, get, search.
- [ ] **5.5** Update `src/index.ts` — remove generateSkill, summarize exports
- [ ] **5.6** Delete `tests/skill.test.ts`, `tests/summarize.test.ts`
- [ ] **5.7** Update remaining tests for new API surface

---

## Phase 6: Polish

- [ ] **6.1** Run `npx eslint src/` — fix all issues
- [ ] **6.2** Run full test suite — all green
- [ ] **6.3** Build with `npm run build` — no errors
- [ ] **6.4** Smoke test CLI: `node dist/cli/index.js bundle --input ./samples --output ./scratch/testkb`
- [ ] **6.5** Smoke test query: `node dist/cli/index.js get ./scratch/testkb --slug <slug>`
- [ ] **6.6** Bump version in package.json to `2.0.0`

---

## Dependencies

```
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6
```

No parallel phases. Each depends on the previous.

## Risk Areas

1. **Closure table generation** — computing correct `order` values for all ancestor-descendant pairs. Easy to get wrong (order is relative to ancestor, not global).
2. **Operator composition** — wrapper KB chains must not leak state between compositions.
3. **FTS5 sync** — materializer must sync FTS5 after all nodes are inserted (same as current behavior).
4. **Backward compat** — v0.x KB files will NOT work with v2. Schema is incompatible. This is accepted.
