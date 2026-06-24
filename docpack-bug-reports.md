# DocPack Bug Reports

Upstream bugs found while using `@rlemaigre/docpack` with the ULIS Wiki pipeline.

---

## Bug 1: FTS5 Crash on Apostrophes in Search Queries

**Severity:** High — crashes the query, no graceful degradation.
**Status:** **FIXED** — `sanitizeFtsQuery()` in `src/query/search.ts` replaces `'` with space before FTS5.
**Repro:** Any French text with apostrophes (extremely common).

### Description

Search queries containing apostrophes crash with an FTS5 syntax error. The apostrophe is tokenized as a delimiter by FTS5, breaking the query syntax.

### Root Cause

FTS5 treats `'` as a phrase delimiter (used for phrase queries like `"word1 word2"`). A bare apostrophe in the query breaks the parser with `fts5: syntax error near "'"`.

### Fix Applied

Sanitize the query before passing to FTS5. Replace apostrophes with spaces so French contractions like `d'une` become `d une` — treated as two separate tokens:

```typescript
function sanitizeFtsQuery(raw: string): string {
  return raw.replace(/'/g, " ");
}
```

### Investigation Notes

- Parent node titles (file documents) are excluded from FTS5 — only leaf sections are indexed. Searching for terms in file titles returns 0 results by design.
- Terms in leaf chunk content with apostrophes work correctly after sanitization: `l'article` → `l article` → matches `article`.

### Testing

After fix:
- `"d'une"` → no crash, returns results if `une` appears in indexed content
- `"l'article"` → no crash, matches `article`
- `"c'est"` → no crash, matches `est`

---

## Bug 2: Accent Insensitivity Missing in FTS5 Search

**Severity:** Medium — silent failure (0 results instead of crash).
**Status:** **NOT A BUG** — FTS5's default `unicode61` tokenizer handles accents correctly.

### Investigation

Tested with accented French content:
- `carrière` → 1 result ✓
- `carriere` → 1 result ✓
- `résumé` → 1 result ✓
- `resume` → 1 result ✓

FTS5's `unicode61` tokenizer normalizes accents during tokenization for both indexed content and queries. No fix needed.

### Root Cause Analysis (from original report)

The original report claimed FTS5 strips accents during tokenization but stores original text with accents, causing mismatches. This is incorrect — FTS5 tokenizes both sides the same way, so `carrière` and `carriere` both tokenize to `carriere` and match.

---

## Bug 3: Ugly Slugs from Collision Cascading

**Severity:** Low — functional but produces unusable slugs.
**Status:** **FIXED** in v0.7.4 — `insertWithRetry()` uses numeric suffixes.

### Fix Applied

The `insertWithRetry()` function in `src/bundler/db.ts` handles collisions by appending `_N` suffixes:

```typescript
function insertWithRetry(insertNode, params, baseSlug, attempt = 0): string {
  const slug = attempt === 0 ? baseSlug : `${baseSlug}_${attempt}`;
  try {
    insertNode.run({ ...params, slug });
    return slug;
  } catch (error) {
    if (message.includes("UNIQUE constraint failed")) {
      return insertWithRetry(insertNode, params, baseSlug, attempt + 1);
    }
    throw error;
  }
}
```

This produces clean slugs like `getting-started`, `getting-started_1`, `getting-started_2` instead of cascading parent prefixes.

---

## Notes

- Bug 1 (apostrophe crash) was the highest priority — fixed with query sanitization.
- Bug 2 (accents) was a false alarm — FTS5 handles accents correctly.
- Bug 3 (slug collision) was already fixed in v0.7.4.
- All three bugs were discovered during the ULIS Wiki pipeline (French-language Confluence content).
