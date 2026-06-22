import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import Database from "better-sqlite3";
import { bundle } from "../src/bundler/index";
import { summarize } from "../src/post-process/summarize";

describe("summarize (JSONL file mode)", () => {
  let tmpDir: string;
  let inputDir: string;
  let outputDir: string;
  let summariesFile: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-summarize-"));
    inputDir = path.join(tmpDir, "input");
    outputDir = path.join(tmpDir, "output");
    summariesFile = path.join(tmpDir, "summaries.jsonl");
    fs.mkdirSync(inputDir);
  });

  const mdConverter = (filePath: string): string | null => {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === ".md" || ext === ".txt" || ext === "") {
      return fs.readFileSync(filePath, "utf8");
    }
    return null;
  };

  function setupKB() {
    fs.mkdirSync(path.join(inputDir, "docs"), { recursive: true });
    fs.writeFileSync(path.join(inputDir, "readme.md"), "# README\n\nIntro text");
    fs.writeFileSync(
      path.join(inputDir, "docs", "guide.md"),
      ["# Guide", "", "Guide content", "", "## Setup", "", "Setup steps"].join("\n"),
    );
    bundle({ input: inputDir, output: outputDir, converter: mdConverter });
  }

  function writeSummaries(lines: string[]) {
    fs.writeFileSync(summariesFile, lines.join("\n"));
  }

  it("imports summaries from a JSONL file", async () => {
    setupKB();

    writeSummaries([
      '{"slug":"readme","summary":"README summary"}',
      '{"slug":"guide","summary":"Guide summary"}',
    ]);

    await summarize({ input: outputDir, summaries: summariesFile });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
      expect(readme.summary).toBe("README summary");

      const guide = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("guide") as { summary: string | null };
      expect(guide.summary).toBe("Guide summary");
    } finally {
      db.close();
    }
  });

  it("updates manifest with text field", async () => {
    setupKB();

    writeSummaries([
      '{"slug":"readme","summary":"README summary text"}',
    ]);

    await summarize({ input: outputDir, summaries: summariesFile });

    const yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).toContain("text: README summary text");
  });

  it("upserts without clearing existing summaries", async () => {
    setupKB();

    // First pass: summarize readme and guide
    writeSummaries([
      '{"slug":"readme","summary":"First readme summary"}',
      '{"slug":"guide","summary":"First guide summary"}',
    ]);
    await summarize({ input: outputDir, summaries: summariesFile });

    // Second pass: only summarize readme with different text
    writeSummaries([
      '{"slug":"readme","summary":"Second readme summary"}',
    ]);
    await summarize({ input: outputDir, summaries: summariesFile });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
      expect(readme.summary).toBe("Second readme summary");

      // Guide summary should be preserved (upsert, not replace-all)
      const guide = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("guide") as { summary: string | null };
      expect(guide.summary).toBe("First guide summary");
    } finally {
      db.close();
    }
  });

  it("last value wins for duplicate slugs", async () => {
    setupKB();

    writeSummaries([
      '{"slug":"readme","summary":"First value"}',
      '{"slug":"readme","summary":"Second value"}',
      '{"slug":"readme","summary":"Final value"}',
    ]);

    await summarize({ input: outputDir, summaries: summariesFile });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const row = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
      expect(row.summary).toBe("Final value");
    } finally {
      db.close();
    }
  });

  it("skips unknown slugs with warning", async () => {
    setupKB();

    const warnings: string[] = [];
    const originalWrite = process.stderr.write;
    process.stderr.write = (chunk: string | Buffer): boolean => {
      warnings.push(typeof chunk === "string" ? chunk : chunk.toString());
      return originalWrite.call(process.stderr, chunk);
    };

    try {
      writeSummaries([
        '{"slug":"readme","summary":"Valid summary"}',
        '{"slug":"nonexistent-slug","summary":"Invalid summary"}',
      ]);

      await summarize({ input: outputDir, summaries: summariesFile });

      expect(warnings.some((w) => w.includes("nonexistent-slug"))).toBe(true);

      const db = new Database(path.join(outputDir, "docpack.db"));
      try {
        const valid = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
        expect(valid.summary).toBe("Valid summary");
      } finally {
        db.close();
      }
    } finally {
      process.stderr.write = originalWrite;
    }
  });

  it("skips malformed JSONL lines with warning", async () => {
    setupKB();

    const warnings: string[] = [];
    const originalWrite = process.stderr.write;
    process.stderr.write = (chunk: string | Buffer): boolean => {
      warnings.push(typeof chunk === "string" ? chunk : chunk.toString());
      return originalWrite.call(process.stderr, chunk);
    };

    try {
      writeSummaries([
        '{"slug":"readme","summary":"Valid summary"}',
        'this is not json',
        '{"slug":"guide"}', // missing summary field
      ]);

      await summarize({ input: outputDir, summaries: summariesFile });

      expect(warnings.length).toBeGreaterThan(0);

      const db = new Database(path.join(outputDir, "docpack.db"));
      try {
        const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
        expect(readme.summary).toBe("Valid summary");

        const guide = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("guide") as { summary: string | null };
        expect(guide.summary).toBeNull();
      } finally {
        db.close();
      }
    } finally {
      process.stderr.write = originalWrite;
    }
  });

  it("handles empty JSONL file", async () => {
    setupKB();

    // First pass: set a summary
    writeSummaries([
      '{"slug":"readme","summary":"Initial summary"}',
    ]);
    await summarize({ input: outputDir, summaries: summariesFile });

    // Second pass: empty file — no changes (upsert semantics)
    writeSummaries([]);
    await summarize({ input: outputDir, summaries: summariesFile });

    // Summary should be preserved
    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
      expect(readme.summary).toBe("Initial summary");
    } finally {
      db.close();
    }
  });

  it("throws when KB directory does not exist", async () => {
    writeSummaries([
      '{"slug":"readme","summary":"summary"}',
    ]);

    await expect(async () => {
      await summarize({
        input: "/nonexistent/path",
        summaries: summariesFile,
      });
    }).rejects.toThrow();
  });

  it("patches manifest only for affected entries", async () => {
    setupKB();

    // First pass: set summary for readme
    writeSummaries([
      '{"slug":"readme","summary":"Readme summary"}',
    ]);
    await summarize({ input: outputDir, summaries: summariesFile });

    let yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).toContain("text: Readme summary");

    // Second pass: set summary for guide
    writeSummaries([
      '{"slug":"guide","summary":"Guide summary"}',
    ]);
    await summarize({ input: outputDir, summaries: summariesFile });

    yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    // Both summaries should be present
    expect(yaml).toContain("text: Readme summary");
    expect(yaml).toContain("text: Guide summary");
  });
});
