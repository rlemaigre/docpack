#!/usr/bin/env node
import * as fs from "node:fs";
import { cac } from "cac";
import { bundle } from "../bundler";
import { query } from "../query";
import { summarize } from "../post-process/summarize";
import { generateSkill } from "../skill/generate";
import { formatXml, formatYaml } from "./format";
import { startMCPServer, parseDepth } from "./mcp";

const cli = cac("docpack");

cli.version("0.3.0");
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
  .option("--description <text>", "Human-readable description of the knowledge base")
  .option("--url <url>", "Source URL (wiki, website, etc.)")
  .option("--exported-at <date>", "Date of source data export (ISO 8601)")
  .option("--home <path>", "Path to the primary entry file")
  .action((options) => {
    validateRequired(options, ["input", "output"]);

    if (!options.home) {
      exitError(
        `Missing required option: --home\n` +
          `  Create a Markdown TOC file with sections and docpack://slug links,\n` +
          `  then point --home to it (e.g. --home ./toc.md).`,
      );
    }

    const stats = bundle({
      input: options.input,
      output: options.output,
      description: options.description,
      url: options.url,
      exportedAt: options.exportedAt,
      home: options.home,
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
  .option("--depth <mode>", "Depth mode: number or 'full'")
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
  .option("--summaries <path>", "Path to JSONL file with summaries")
  .option("--mode <mode>", "Summarize mode: 'llm' for built-in LLM fold")
  .option("--model <name>", "Model name (LLM mode)")
  .option("--endpoint <url>", "OpenAI-compatible endpoint URL (LLM mode)")
  .option("--prompt <path>", "Path to prompt template file (LLM mode)")
  .option("--concurrency <n>", "Max parallel LLM requests per level (LLM mode, default: 8)")
  .option("--min-content-length <n>", "Skip LLM call for leaf nodes shorter than this (LLM mode)")
  .option("--api-key <key>", "API key for cloud endpoints (LLM mode)")
  .action(async (kb, options) => {
    if (options.mode === "llm") {
      // LLM fold mode
      validateRequired(options, ["model", "endpoint", "prompt"]);

      const prompt = fs.readFileSync(options.prompt, "utf8");

      await summarize({
        input: kb,
        mode: "llm",
        model: options.model,
        endpoint: options.endpoint,
        prompt,
        concurrency: options.concurrency ? Number(options.concurrency) : undefined,
        minContentLength: options.minContentLength ? Number(options.minContentLength) : undefined,
        apiKey: options.apiKey,
      });
    } else {
      // JSONL file mode (default)
      validateRequired(options, ["summaries"]);

      await summarize({
        input: kb,
        summaries: options.summaries,
      });
    }
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
// skill
// ---------------------------------------------------------------------------
cli
  .command(
    "skill <kb>",
    "Package a knowledge base as a self-contained agent skill",
  )
  .option("--use-when <text>", "Imperative description of when to use the skill (required)")
  .option("--output <path>", "Path to output skill directory (required)")
  .action((kb, options) => {
    validateRequired(options, ["useWhen", "output"]);

    generateSkill({
      kb,
      output: options.output,
      useWhen: options.useWhen,
    });

    process.stderr.write(`Skill package written to: ${options.output}\n`);
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


