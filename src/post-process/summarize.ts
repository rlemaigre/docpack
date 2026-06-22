import Database from "better-sqlite3";
import type { Database as DB } from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";


// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Options for JSONL file import mode. */
export interface SummarizeFileOptions {
  /** Path to the KB directory containing docpack.db and docpack.yaml. */
  input: string;
  /** Path to a JSONL file where each line is `{"slug":"...","summary":"..."}`. */
  summaries: string;
}

/** Options for built-in LLM bottom-up fold mode. */
export interface SummarizeLLMOptions {
  /** Path to the KB directory containing docpack.db and docpack.yaml. */
  input: string;
  /** Mode selector. */
  mode: "llm";
  /** Model name sent to the endpoint. */
  model: string;
  /** Base URL of an OpenAI-compatible endpoint (e.g. `http://localhost:8000/v1`). */
  endpoint: string;
  /** Prompt template. Available variables: {title}, {slug}, {chunk}, {children_titles}, {children_summaries}, {children_count}. */
  prompt: string;
  /** Maximum parallel LLM requests per tree level. Default: 8. */
  concurrency?: number;
  /** Skip LLM call for leaf nodes whose chunk is shorter than this. Default: 0 (disabled). */
  minContentLength?: number;
  /** Optional API key for cloud endpoints. */
  apiKey?: string;
}

/** Union of all summarize modes. */
export type SummarizeOptions = SummarizeFileOptions | SummarizeLLMOptions;

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Run a post-processing summarization pass on a knowledge base.
 *
 * Two modes:
 * - **File mode** (`summaries` path): import summaries from a JSONL file.
 * - **LLM mode** (`mode: "llm"`): bottom-up tree fold with an LLM endpoint.
 *
 * Both modes use upsert semantics — existing summaries for untouched slugs
 * are preserved.
 *
 * @param options - Summarize configuration (file or LLM mode).
 */
export async function summarize(options: SummarizeOptions): Promise<void> {
  const kbDir = path.resolve(options.input);
  const dbPath = path.join(kbDir, "docpack.db");

  if (!fs.existsSync(dbPath)) {
    throw new Error(`Knowledge base not found: ${dbPath}`);
  }

  if (isLLMOptions(options)) {
    await summarizeLLM(options, dbPath);
  } else {
    await summarizeFile(options, dbPath);
  }
}

/** Type guard for LLM mode options. */
function isLLMOptions(options: SummarizeOptions): options is SummarizeLLMOptions {
  return "mode" in options && options.mode === "llm";
}

// ---------------------------------------------------------------------------
// JSONL file mode
// ---------------------------------------------------------------------------

async function summarizeFile(
  options: SummarizeFileOptions,
  dbPath: string,
): Promise<void> {
  const raw = fs.readFileSync(options.summaries, "utf8");
  const entries = parseJsonl(raw);
  const deduped = deduplicateEntries(entries);

  const db = new Database(dbPath);
  try {
    const valid = filterValidEntries(db, deduped);
    upsertSummaries(db, valid);
  } finally {
    db.close();
  }
}

/** Parse a JSONL string into an array of { slug, summary } entries. */
function parseJsonl(text: string): Array<{ slug: string; summary: string }> {
  const entries: Array<{ slug: string; summary: string }> = [];
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    let parsed: unknown;
    try {
      parsed = JSON.parse(trimmed);
    } catch {
      process.stderr.write(
        `[summarize] warning: skipping malformed line: ${trimmed.slice(0, 80)}\n`,
      );
      continue;
    }
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("slug" in parsed) ||
      typeof (parsed as Record<string, unknown>).summary !== "string"
    ) {
      process.stderr.write(
        `[summarize] warning: skipping malformed line: ${trimmed.slice(0, 80)}\n`,
      );
      continue;
    }
    const entry = parsed as { slug: unknown; summary: string };
    if (typeof entry.slug !== "string") {
      process.stderr.write(
        `[summarize] warning: skipping malformed line: ${trimmed.slice(0, 80)}\n`,
      );
      continue;
    }
    entries.push({ slug: entry.slug, summary: entry.summary });
  }
  return entries;
}

/** Deduplicate entries — last value wins for duplicate slugs. */
function deduplicateEntries(
  entries: Array<{ slug: string; summary: string }>,
): Array<{ slug: string; summary: string }> {
  const map = new Map<string, string>();
  for (const entry of entries) {
    map.set(entry.slug, entry.summary);
  }
  return Array.from(map.entries()).map(([slug, summary]) => ({ slug, summary }));
}

/** Validate slugs against the nodes table, warning on unknowns. */
function filterValidEntries(
  db: DB,
  entries: Array<{ slug: string; summary: string }>,
): Array<{ slug: string; summary: string }> {
  if (entries.length === 0) return [];

  const slugs = entries.map((e) => e.slug);
  const placeholders = slugs.map(() => "?").join(",");
  const validRows = db.prepare(
    `SELECT slug FROM nodes WHERE slug IN (${placeholders})`,
  ).all(...slugs) as Array<{ slug: string }>;

  const validSet = new Set(validRows.map((r) => r.slug));
  const valid: Array<{ slug: string; summary: string }> = [];

  for (const entry of entries) {
    if (validSet.has(entry.slug)) {
      valid.push(entry);
    } else {
      process.stderr.write(`[summarize] warning: skipping unknown slug "${entry.slug}"\n`);
    }
  }

  return valid;
}

/** Upsert summaries into the nodes table in a transaction. */
function upsertSummaries(
  db: DB,
  entries: Array<{ slug: string; summary: string }>,
): void {
  if (entries.length === 0) return;

  const tx = db.transaction(() => {
    const stmt = db.prepare("UPDATE nodes SET summary = ? WHERE slug = ?");
    for (const entry of entries) {
      stmt.run(entry.summary, entry.slug);
    }
  });

  tx();
}

// ---------------------------------------------------------------------------
// LLM fold mode
// ---------------------------------------------------------------------------

interface TreeNode {
  slug: string;
  title: string;
  type: string;
  chunk: string | null;
  children: TreeNode[];
}

async function summarizeLLM(
  options: SummarizeLLMOptions,
  dbPath: string,
): Promise<void> {
  const db = new Database(dbPath);
  try {
    const tree = buildTree(db);
    const groups = groupByDepth(tree);
    const results = new Map<string, string>();

    // Process from deepest level to root (bottom-up)
    const depths = [...groups.keys()].sort((a, b) => b - a);

    for (const depth of depths) {
      const nodes = groups.get(depth)!;
      const concurrency = options.concurrency ?? 8;
      await processLevel(nodes, depth, options, results, concurrency);
    }

    const validEntries = Array.from(results.entries()).map(([slug, summary]) => ({
      slug,
      summary,
    }));

    upsertSummaries(db, validEntries);
  } finally {
    db.close();
  }
}

/** Fetch all nodes and build a flat tree structure. */
function buildTree(db: DB): TreeNode[] {
  const rows = db.prepare(`
    SELECT slug, title, type, chunk, parent_slug, idx
    FROM nodes
    ORDER BY idx
  `).all() as Array<{
    slug: string;
    title: string;
    type: string;
    chunk: string | null;
    parent_slug: string | null;
    idx: number;
  }>;

  const bySlug = new Map<string, TreeNode>();
  for (const row of rows) {
    bySlug.set(row.slug, {
      slug: row.slug,
      title: row.title,
      type: row.type,
      chunk: row.chunk,
      children: [],
    });
  }

  // Link children to parents
  for (const row of rows) {
    if (row.parent_slug && bySlug.has(row.parent_slug)) {
      bySlug.get(row.parent_slug)!.children.push(bySlug.get(row.slug)!);
    }
  }

  return Array.from(bySlug.values());
}

/** Group nodes by their depth (distance from nearest root). */
function groupByDepth(nodes: TreeNode[]): Map<number, TreeNode[]> {
  const groups = new Map<number, TreeNode[]>();

  // Compute depth via BFS from roots
  const depthMap = new Map<string, number>();
  const childrenOf = new Map<string, TreeNode[]>();

  for (const node of nodes) {
    childrenOf.set(node.slug, node.children);
  }

  // Find roots (nodes with no parent in the tree)
  const parentSlugs = new Set(nodes.map((n) => findParentSlug(n, nodes)).filter((s) => s !== null));
  const roots = nodes.filter((n) => !parentSlugs.has(n.slug));

  const queue: Array<{ slug: string; depth: number }> = roots.map((r) => ({
    slug: r.slug,
    depth: 0,
  }));

  while (queue.length > 0) {
    const { slug, depth } = queue.shift()!;
    if (depthMap.has(slug)) continue;
    depthMap.set(slug, depth);

    const group = groups.get(depth + 1) ?? [];
    groups.set(depth + 1, group);

    for (const child of (childrenOf.get(slug) ?? [])) {
      if (!depthMap.has(child.slug)) {
        queue.push({ slug: child.slug, depth: depth + 1 });
        group.push(child);
      }
    }
  }

  // Roots are at depth 0
  const rootGroup = groups.get(0) ?? [];
  groups.set(0, rootGroup);
  for (const root of roots) {
    if (!rootGroup.includes(root)) {
      rootGroup.push(root);
    }
  }

  return groups;
}

/** Find the parent slug of a node, or null if it's a root. */
function findParentSlug(node: TreeNode, allNodes: TreeNode[]): string | null {
  const parent = allNodes.find((n) => n.children.some((c) => c.slug === node.slug));
  return parent?.slug ?? null;
}

/** Process all nodes at a single depth level with concurrency control. */
async function processLevel(
  nodes: TreeNode[],
  depth: number,
  options: SummarizeLLMOptions,
  results: Map<string, string>,
  concurrency: number,
): Promise<void> {
  // Collect child summaries for each node (already computed from deeper levels)
  // Children are already ordered by idx from buildTree()
  const childSummaries = new Map<string, string[]>();
  for (const node of nodes) {
    const summaries = node.children.map((child) => results.get(child.slug) ?? "");
    childSummaries.set(node.slug, summaries);
  }

  // Process with bounded concurrency
  const tasks: Promise<void>[] = [];
  const semaphore = createSemaphore(concurrency);

  for (const node of nodes) {
    const task = (async () => {
      await semaphore.acquire();
      try {
        const summaries = childSummaries.get(node.slug) ?? [];
        const summary = await summarizeNode(node, options, summaries);
        if (summary !== null) {
          results.set(node.slug, summary);
        }
      } finally {
        semaphore.release();
      }
    })();
    tasks.push(task);
  }

  await Promise.all(tasks);
}

/** Simple async semaphore for bounded concurrency. */
function createSemaphore(limit: number) {
  let running = 0;
  const waiting: Array<() => void> = [];

  return {
    acquire: async () => {
      if (running < limit) {
        running++;
        return;
      }
      await new Promise<void>((resolve) => waiting.push(resolve));
      running++;
    },
    release: () => {
      running--;
      if (waiting.length > 0) {
        const next = waiting.shift()!;
        next();
      }
    },
  };
}

/**
 * Summarize a single node. Returns null if pass-through applies.
 */
async function summarizeNode(
  node: TreeNode,
  options: SummarizeLLMOptions,
  childrenSummaries: string[],
): Promise<string | null> {
  // Pass-through: leaf node with no or short chunk
  const minLen = options.minContentLength ?? 0;
  const isLeaf = node.children.length === 0;
  const chunkTooShort = !node.chunk || node.chunk.length < minLen;

  if (isLeaf && chunkTooShort) {
    // Use existing chunk as summary, or skip if no chunk
    if (node.chunk) {
      return node.chunk;
    }
    return null;
  }

  // Fill prompt template
  const prompt = fillPromptTemplate(options.prompt, node, childrenSummaries);

  // Call LLM endpoint
  const summary = await callLLMEndpoint(options, prompt);
  return summary;
}

/** Fill prompt template variables. */
function fillPromptTemplate(
  template: string,
  node: TreeNode,
  childrenSummaries: string[],
): string {
  const childrenTitles = node.children.map((c) => c.title).join("\n");

  // Build ordered title: summary pairs
  const childrenSummaryPairs = node.children
    .map((child, i) => {
      const summary = childrenSummaries[i] || "(no summary)";
      return `${child.title}: ${summary}`;
    })
    .join("\n");

  return template
    .replace(/\{title\}/g, node.title)
    .replace(/\{slug\}/g, node.slug)
    .replace(/\{chunk\}/g, node.chunk ?? "")
    .replace(/\{children_titles\}/g, childrenTitles)
    .replace(/\{children_summaries\}/g, childrenSummaryPairs)
    .replace(/\{children_count\}/g, String(node.children.length));
}

/** Call an OpenAI-compatible /chat/completions endpoint. */
async function callLLMEndpoint(
  options: SummarizeLLMOptions,
  prompt: string,
): Promise<string> {
  const url = `${options.endpoint}/chat/completions`;
  const body: Record<string, unknown> = {
    model: options.model,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1024,
    temperature: 0,
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (options.apiKey) {
    headers["Authorization"] = `Bearer ${options.apiKey}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `LLM endpoint error (${response.status}): ${text.slice(0, 200)}`,
    );
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("LLM endpoint returned no content in response");
  }

  return content.trim();
}

// ---------------------------------------------------------------------------
// Manifest patching (shared)
// ---------------------------------------------------------------------------


