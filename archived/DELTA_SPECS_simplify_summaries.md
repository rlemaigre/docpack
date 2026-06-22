# Delta Specs — simplify_summaries

## Goal

Replace the TypeScript callback summarizer with two simpler paths:

1. **JSONL file import** — fully decoupled, any tool produces a JSONL file, docpack ingests it.
2. **Built-in bottom-up LLM fold** — docpack traverses the tree and calls an OpenAI-compatible endpoint with a user-supplied prompt template. No code to write.

Both paths share upsert semantics and the same storage contract.

## Changes

### 1. Replace `Summarizer` callback with JSONL file import

**Before:**

User writes a TypeScript module exporting a `Summarizer` callback:

```ts
// summarize.ts
export default async (kb, emit) => {
  const manifest = kb.manifest();
  for (const file of manifest.files) {
    const doc = kb.get(file.slug);
    const summary = await summarizeDoc(doc);
    emit(file.slug, summary);
  }
};
```

CLI: `docpack summarize ./mykb --fn ./summarize.ts`

TS API: `summarize({ input: "./mykb", summarizer: myCallback })`

**After — JSONL mode:**

User produces a JSONL file, one summary per line:

```jsonl
{"slug":"getting-started","summary":"Overview of setup, configuration, and first steps."}
{"slug":"api-reference","summary":"Complete API documentation covering auth, billing, and webhooks."}
{"slug":"api-reference-auth","summary":"OAuth 2.0 authentication flows and token management."}
```

CLI: `docpack summarize ./mykb --summaries ./summaries.jsonl`

TS API: `summarize({ input: "./mykb", summaries: "./summaries.jsonl" })`

**Rationale:**

- Summaries are produced by scripts (LLM-driven), not hand-written. JSONL is trivial to emit: one `JSON.stringify` + newline per entry.
- Streaming-friendly — the producer doesn't need to hold all summaries in memory or track commas/brackets.
- Bottom-up aggregation scripts naturally emit child summaries before parent summaries; JSONL preserves order.
- Each line is independently parseable — broken line = clear error location.
- No escaping headaches (unlike CSV, where summary text contains commas, quotes, newlines).
- Zero dependency on TypeScript, Node.js, or docpack internals.

### 2. Add built-in bottom-up LLM fold

**New feature.** Docpack handles tree traversal and LLM calls. The user provides a prompt template and an endpoint.

CLI:

```bash
docpack summarize ./mykb \
  --mode llm \
  --model qwen3-8b \
  --endpoint http://localhost:8000/v1 \
  --prompt ./prompt.txt \
  --concurrency 32 \
  --min-content-length 200
```

TS API:

```ts
summarize({
  input: "./mykb",
  mode: "llm",
  model: "qwen3-8b",
  endpoint: "http://localhost:8000/v1",
  prompt: fs.readFileSync("./prompt.txt", "utf8"),
  concurrency: 32,
  minContentLength: 200,
});
```

**Traversal:**

- Bottom-up, level by level. All nodes at the same depth are processed in parallel (bounded by `concurrency`). Parents wait for all children.
- At each node, docpack fills the prompt template and sends a `POST /chat/completions` request.

**Prompt template variables:**

| Variable | Description |
|---|---|
| `{title}` | Node's own title. |
| `{slug}` | Node's own slug. |
| `{chunk}` | Node's own content (markdown). Empty for directories and nodes without content. |
| `{children_titles}` | Ordered list of children titles, one per line. Empty string if no children. |
| `{children_summaries}` | Ordered list of `title: summary` pairs, one per line. Empty string if no children. |
| `{children_count}` | Number of children. |

**Example prompt template:**

```
You are summarizing a documentation section for a knowledge base.

Section: "{title}"
Children count: {children_count}

Children (in reading order):
{children_summaries}

Section content:
{chunk}

Write a concise one-paragraph summary of this section.
```

**Pass-through optimization (`minContentLength`):**

If `node.children.length === 0` AND (`node.chunk` is absent OR `node.chunk.length < minContentLength`), skip the LLM call. Use the chunk as-is if present, or empty string for directories. This avoids wasting LLM calls on trivial leaves and reduces hallucination risk on tiny inputs.

**Endpoint:**

Any OpenAI-compatible `/v1/chat/completions` endpoint. vLLM, Ollama, LM Studio, cloud OpenAI — all work. The request body follows the standard OpenAI chat completions format:

```json
{
  "model": "qwen3-8b",
  "messages": [{"role": "user", "content": "<filled prompt>"}],
  "max_tokens": 1024,
  "temperature": 0
}
```

The response is parsed for `choices[0].message.content`. No SDK dependency — plain `fetch` (built into Node.js 24).

**Rationale:**

- Bottom-up tree fold is the natural algorithm for hierarchical summaries — parents aggregate children context. Users shouldn't have to implement this traversal themselves.
- The aggregator is a prompt template (string), not code. Decoupled from TypeScript ecosystem.
- Local GPU inference (vLLM) handles batching at the kernel level — set `--concurrency` high and let the server schedule efficiently.
- `minContentLength` saves countless LLM calls for small leaves and avoids hallucinations.

### 3. Remove the `Summarizer` type and `SummarizeOptions.summarizer` field

**Before:**

```ts
export type Summarizer = (
  kb: KBInstance,
  emit: (slug: string, summary: string) => void,
) => Promise<void>;

export interface SummarizeOptions {
  input: string;
  summarizer: Summarizer;
}
```

**After:**

```ts
export interface SummarizeFileOptions {
  input: string;
  summaries: string;  // path to JSONL file
}

export interface SummarizeLLMOptions {
  input: string;
  mode: "llm";
  model: string;
  endpoint: string;   // base URL, e.g. "http://localhost:8000/v1"
  prompt: string;     // template with {title}, {chunk}, {children_summaries}, etc.
  concurrency?: number;    // parallel requests per level (default: 8)
  minContentLength?: number; // pass-through threshold for small leaves (default: 0 = disabled)
  apiKey?: string;    // optional, for cloud endpoints
}

export type SummarizeOptions = SummarizeFileOptions | SummarizeLLMOptions;
```

`Summarizer` type is removed entirely.

### 4. Upsert semantics — no clearing

**Before:**

`summarize()` clears all existing summaries, then batch-inserts the new ones. The callback is the single source of truth — if it doesn't emit a slug, that slug loses its summary.

**After:**

Both modes upsert. Existing summaries for slugs not touched are preserved. Summaries for slugs present in the input (JSONL or LLM output) are overwritten.

**Rationale:** Generating summaries is time-consuming. Users should be able to emit a small JSONL file with just the missing or updated summaries, without regenerating everything. The LLM fold mode naturally upserts as it traverses — nodes that pass through keep their existing summaries if they already have one.

### 5. Upsert manifest text fields

The `docpack.yaml` manifest is updated to reflect the upserted summaries:

- File entries whose slugs received a new summary get their `summary.text` set.
- File entries not touched keep their existing `summary.text` (or lack thereof).

No full manifest rewrite — just patch the affected entries.

### 6. Duplicate handling: last value wins (JSONL mode)

If the JSONL file contains multiple entries for the same slug, the last occurrence wins. This gives the producer flexibility in ordering.

## Affected Files

- `src/post-process/summarize.ts` — rewrite: JSONL import + LLM fold, remove callback
- `src/index.ts` — remove `Summarizer` export, update `SummarizeOptions` types
- `src/cli/index.ts` — new `--mode`, `--summaries`, `--model`, `--endpoint`, `--prompt`, `--concurrency`, `--min-content-length` flags; remove `--fn`
- `SPECS.md` — update API docs for bundler and CLI summarize sections
- `tests/` — update any summarize-related tests

## Breaking Changes

- `Summarizer` type is removed.
- `SummarizeOptions.summarizer` is replaced by `SummarizeOptions.summaries` (file mode) or `mode: "llm"` (LLM mode).
- CLI `--fn` flag is removed. Replaced by `--summaries` (file mode) or `--mode llm` + endpoint flags (LLM mode).
- Existing `summarize.ts` scripts no longer work — users must migrate to JSONL file or LLM fold mode.
- Summary semantics change from replace-all to upsert. Scripts that relied on the clear-then-write behavior (e.g. omitting a slug to remove its summary) need to explicitly handle deletion if desired.
