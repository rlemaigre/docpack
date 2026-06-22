#!/usr/bin/env node
import { cac } from "cac";
import { bundle } from "../bundler";
import { query } from "../query";
import { summarize, type Summarizer } from "../post-process/summarize";
import { formatXml, formatYaml } from "./format";
import { startMCPServer, parseDepth } from "./mcp";

const cli = cac("docpack");

cli.version("0.1.0");
cli.help();

// ---------------------------------------------------------------------------
// bundle
// ---------------------------------------------------------------------------
cli
  .command(
    "bundle",
    "Bundle a directory of Markdown files into a knowledge base",
  )
  .option("--input <path>", "Path to input file or directory")
  .option("--output <path>", "Path to output directory")
  .action((options) => {
    validateRequired(options, ["input", "output"]);

    const stats = bundle({
      input: options.input,
      output: options.output,
      onProgress: (file, processed, total) => {
        process.stderr.write(`  ${processed}/${total} ${file}\n`);
      },
      onError: (file, error) => {
        process.stderr.write(`  error: ${file}: ${error}\n`);
      },
    });

    process.stdout.write(JSON.stringify(stats, null, 2) + "\n");
  });

// ---------------------------------------------------------------------------
// manifest
// ---------------------------------------------------------------------------
cli
  .command(
    "manifest <kb>",
    "Print the knowledge base manifest",
  )
  .action((kb) => {
    const kbinst = query(kb);
    try {
      const manifest = kbinst.manifest();
      process.stdout.write(formatYaml(manifest));
    } finally {
      kbinst.close();
    }
  });

// ---------------------------------------------------------------------------
// toc
// ---------------------------------------------------------------------------
cli
  .command(
    "toc <kb> <slug>",
    "Print the table of contents for a slug",
  )
  .option("--depth <mode>", "Depth mode: number, 'files', or 'full'")
  .action((kb, slug, options) => {
    const depth = parseDepth(options.depth ?? "full") ?? "full";

    const kbinst = query(kb);
    try {
      const toc = kbinst.toc(slug, depth);
      process.stdout.write(formatYaml(toc));
    } finally {
      kbinst.close();
    }
  });

// ---------------------------------------------------------------------------
// get
// ---------------------------------------------------------------------------
cli
  .command(
    "get <kb> <slug>",
    "Get a document and its subtree as XML",
  )
  .action((kb, slug) => {
    const kbinst = query(kb);
    try {
      const doc = kbinst.get(slug);
      if (!doc) {
        exitError(`Slug not found: ${slug}`);
      }
      process.stdout.write(formatXml(doc));
    } finally {
      kbinst.close();
    }
  });

// ---------------------------------------------------------------------------
// search
// ---------------------------------------------------------------------------
cli
  .command(
    "search <kb> <query>",
    "Full-text search the knowledge base",
  )
  .option("--limit <n>", "Maximum number of results")
  .option("--offset <n>", "Number of results to skip")
  .action((kb, searchQuery, options) => {
    const limit = options.limit ?? 10;
    const offset = options.offset ?? 0;

    const kbinst = query(kb);
    try {
      const results = kbinst.search({ query: searchQuery, limit, offset });
      process.stdout.write(formatYaml(results));
    } finally {
      kbinst.close();
    }
  });

// ---------------------------------------------------------------------------
// summarize
// ---------------------------------------------------------------------------
cli
  .command(
    "summarize <kb>",
    "Run a post-processing summarization pass",
  )
  .option("--fn <path>", "Path to summarizer script (exports a Summarizer function)")
  .action(async (kb, options) => {
    validateRequired(options, ["fn"]);

    const summarizer = await loadScript<Summarizer>(
      options.fn,
      "summarizer",
    );

    await summarize({ input: kb, summarizer });
  });

// ---------------------------------------------------------------------------
// serve
// ---------------------------------------------------------------------------
cli
  .command(
    "serve <kb>",
    "Start an MCP server for the knowledge base",
  )
  .option("--mcp", "Run as MCP server over stdio")
  .action(async (kb, options) => {
    if (!options.mcp) {
      exitError("The serve command requires --mcp");
    }

    await startMCPServer(kb);
  });

// ---------------------------------------------------------------------------
// Parse and run
// ---------------------------------------------------------------------------
try {
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  exitError(message);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Exit with error JSON to stderr and code 1. */
function exitError(message: string): never {
  process.stderr.write(JSON.stringify({ message }) + "\n");
  process.exit(1);
}

/** Check that all required options are present. */
function validateRequired(options: Record<string, unknown>, keys: string[]): void {
  for (const key of keys) {
    if (options[key] === undefined || options[key] === "") {
      exitError(`Missing required option: --${key}`);
    }
  }
}

/** Load a script via dynamic import, expecting a default export. */
async function loadScript<T>(scriptPath: string, label: string): Promise<T> {
  const { pathToFileURL } = await import("node:url");
  const path = await import("node:path");
  const resolved = path.resolve(scriptPath);
  const mod = await import(pathToFileURL(resolved).href);
  const fn = mod.default ?? mod;
  if (typeof fn !== "function") {
    exitError(`${label} script must export a function (default export)`);
  }
  return fn as T;
}
