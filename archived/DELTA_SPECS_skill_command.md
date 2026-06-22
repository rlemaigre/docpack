# Delta Specs — skill_command

## Goal

Add a `docpack skill <kb>` CLI command that packages an existing knowledge base as a self-contained, shareable agent skill.

## Changes

### 1. `skill` CLI command

**Before:** No skill packaging command.
**After:** `docpack skill <kb> --use-when "..." --output <dir>` produces a skill package.

**Command signature:**
```
docpack skill <kb> --use-when "<description>" --output <dir>
```
- `<kb>` — path to existing KB directory (required)
- `--use-when` — imperative description of when to use the skill (required)
- `--output` — path to output skill directory (required)

### 2. Skill package output structure

**Before:** N/A
**After:**
```
<output>/
  SKILL.md
  references/
    docpack.db
    docpack.yaml
  scripts/
    docpack.mjs
```

### 3. SKILL.md generation

**Before:** SKILL.md must be authored by an agent following the higher-order skill workflow.
**After:** Auto-generated from manifest metadata + home TOC (depth 1) + `--use-when` text, rendered via Eta template.

Content:
- Frontmatter: `name` (KB dir basename), `description` (--use-when text)
- Body: KB overview section (from manifest), structure section (from home TOC), usage section (fixed template with CLI commands)

Template: `src/skill/templates/skill.md.eta` — external Eta template file, copied to `dist/` at build time.

### 4. `scripts/docpack.mjs` wrapper

**Before:** N/A
**After:** Thin wrapper script (~1KB) that:
- Pins `npx @rlemaigre/docpack@<version>` using the version from package.json at generation time
- Resolves `references/` path relative to `import.meta.dirname`
- Exports wrapper functions: `manifest()`, `toc(slug, depth)`, `get(slug)`, `search(query, limit, offset)`
- Accepts subcommands via CLI args when run directly

### 5. Public API export

**Before:** `src/index.ts` exports `bundle`, `query`, `summarize`.
**After:** Also exports `generateSkill` function.

## Affected Files

- `src/cli/index.ts` — add `skill` command
- `src/skill/generate.ts` — new file, skill generation logic with Eta template rendering
- `src/skill/templates/skill.md.eta` — new file, SKILL.md Eta template
- `src/skill/templates/docpack.mjs.eta` — new file, wrapper script Eta template
- `src/index.ts` — export `generateSkill`
- `tsup.config.ts` — copy templates to dist/ on build
- `tests/skill.test.ts` — new file, tests for skill generation
- `package.json` — add `eta` dependency

## Breaking Changes

None.
