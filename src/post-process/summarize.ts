import Database from "better-sqlite3";
import type { Database as DB } from "better-sqlite3";
import * as fs from "node:fs";
import * as path from "node:path";
import YAML from "yaml";
import { query, type KBInstance } from "../query";
import type { Manifest } from "../bundler/manifest";

/**
 * User-supplied summarizer callback.
 *
 * Receives a live KB instance and an emit function. The summarizer decides
 * which nodes to summarize, in what order, and with what context.
 *
 * @param kb - Live knowledge base instance with manifest(), toc(), get(), search().
 * @param emit - Call this to record a summary for a node. Last value wins for duplicates.
 */
export type Summarizer = (
  kb: KBInstance,
  emit: (slug: string, summary: string) => void,
) => Promise<void>;

/** Options for summarize. */
export interface SummarizeOptions {
  /** Path to the KB directory containing docpack.db and docpack.yaml. */
  input: string;
  /** Summarizer callback. */
  summarizer: Summarizer;
}

/**
 * Run a post-processing summarization pass on a knowledge base.
 *
 * Opens the KB, passes it to the user's summarizer along with an emit callback.
 * After the summarizer returns: clears all existing summaries, batch-inserts
 * buffered pairs, and rewrites docpack.yaml with updated text fields.
 *
 * If the summarizer emits nothing, all existing summaries are cleared
 * and the manifest is rewritten without text fields.
 *
 * @param options - Summarize configuration.
 */
export async function summarize(options: SummarizeOptions): Promise<void> {
  const { input, summarizer } = options;

  const kbDir = path.resolve(input);
  const dbPath = path.join(kbDir, "docpack.db");
  const yamlPath = path.join(kbDir, "docpack.yaml");

  // Open KB for reads (summarizer discovery)
  const kb = query(kbDir);
  const buffered = createEmitBuffer();

  try {
    await summarizer(kb, buffered.emit);
  } finally {
    kb.close();
  }

  // Open separate connection for writes
  const db = new Database(dbPath);
  try {
    // Spec: "clears all existing summaries" — always, even when nothing emitted.
    const validEntries = filterValidEntries(db, buffered.entries);
    batchWriteSummaries(db, validEntries);
    rewriteManifestWithSummaries(yamlPath, db);
  } finally {
    db.close();
  }
}

/** Buffered summary entries with an emit callback. */
interface EmitBuffer {
  emit: (slug: string, summary: string) => void;
  entries: Array<{ slug: string; summary: string }>;
  size: number;
}

/** Create an emit callback backed by a Map (last value wins for duplicates). */
function createEmitBuffer(): EmitBuffer {
  const map = new Map<string, string>();

  return {
    emit: (slug: string, summary: string) => { map.set(slug, summary); },
    get entries() { return Array.from(map.entries()).map(([slug, summary]) => ({ slug, summary })); },
    get size() { return map.size; },
  };
}

/** Validate slugs against the nodes table, warning on unknowns. */
function filterValidEntries(
  db: DB,
  entries: Array<{ slug: string; summary: string }>,
): Array<{ slug: string; summary: string }> {
  if (entries.length === 0) return [];

  // Single IN query to validate all slugs at once
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

/** Clear existing summaries and batch-insert new ones in a transaction. */
function batchWriteSummaries(
  db: DB,
  entries: Array<{ slug: string; summary: string }>,
): void {
  const tx = db.transaction(() => {
    db.prepare("UPDATE nodes SET summary = NULL WHERE summary IS NOT NULL").run();

    if (entries.length === 0) return;

    const insertStmt = db.prepare("UPDATE nodes SET summary = ? WHERE slug = ?");
    for (const entry of entries) {
      insertStmt.run(entry.summary, entry.slug);
    }
  });

  tx();
}

/**
 * Re-read the manifest and fill the text field from nodes.summary.
 *
 * Reads docpack.yaml, batch-looks up summaries for all file entries,
 * and writes the updated manifest back.
 *
 * @param yamlPath - Path to docpack.yaml.
 * @param db - Open database connection.
 */
function rewriteManifestWithSummaries(yamlPath: string, db: DB): void {
  const content = fs.readFileSync(yamlPath, "utf8");
  const manifest = YAML.parse(content) as Manifest;

  // Batch-fetch summaries for all file slugs in a single query
  const fileSlugs = manifest.files.map((f) => f.slug);
  const summaryMap = new Map<string, string>();

  if (fileSlugs.length > 0) {
    const placeholders = fileSlugs.map(() => "?").join(",");
    const rows = db.prepare(
      `SELECT slug, summary FROM nodes WHERE slug IN (${placeholders}) AND summary IS NOT NULL`,
    ).all(...fileSlugs) as Array<{ slug: string; summary: string }>;

    for (const row of rows) {
      summaryMap.set(row.slug, row.summary);
    }
  }

  for (const file of manifest.files) {
    const summary = summaryMap.get(file.slug);
    if (summary) {
      file.summary.text = summary;
    } else {
      delete file.summary.text;
    }
  }

  const yamlStr = YAML.stringify(manifest, { lineWidth: 0 });
  fs.writeFileSync(yamlPath, yamlStr, "utf8");
}
