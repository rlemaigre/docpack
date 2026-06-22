import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import Database from "better-sqlite3";
import { bundle } from "../src/bundler/index";
import { createSchema } from "../src/schema";

describe("bundle", () => {
  let tmpDir: string;
  let inputDir: string;
  let outputDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-bundle-"));
    inputDir = path.join(tmpDir, "input");
    outputDir = path.join(tmpDir, "output");
    fs.mkdirSync(inputDir);
  });

  it("bundles a single file", () => {
    fs.writeFileSync(path.join(inputDir, "hello.md"), "# Hello\n\nWorld");

    const stats = bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "hello.md") });

    expect(stats.filesProcessed).toBe(1);
    expect(stats.totalChunks).toBe(1);
    expect(fs.existsSync(path.join(outputDir, "docpack.db"))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, "docpack.yaml"))).toBe(true);
  });

  it("bundles a directory with nested files", () => {
    fs.mkdirSync(path.join(inputDir, "docs"), { recursive: true });
    fs.writeFileSync(path.join(inputDir, "readme.md"), "# README\n\nIntro");
    fs.writeFileSync(path.join(inputDir, "docs", "guide.md"), "# Guide\n\n## Setup\n\nSteps");

    const stats = bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "readme.md") });

    expect(stats.filesProcessed).toBe(2);
    expect(stats.totalChunks).toBeGreaterThan(0);

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const nodeCount = db.prepare("SELECT COUNT(*) as count FROM nodes").get() as { count: number };
      expect(nodeCount.count).toBeGreaterThan(0);

      const closureCount = db.prepare("SELECT COUNT(*) as count FROM closure").get() as { count: number };
      expect(closureCount.count).toBeGreaterThan(0);

      const ftsCount = db.prepare("SELECT COUNT(*) as count FROM nodes_fts").get() as { count: number };
      expect(ftsCount.count).toBeGreaterThan(0);
    } finally {
      db.close();
    }
  });

  it("handles files with nested headings", () => {
    fs.writeFileSync(path.join(inputDir, "doc.md"), [
      "# Title",
      "",
      "Title content",
      "",
      "## Section A",
      "",
      "A content",
      "",
      "### Subsection",
      "",
      "Sub content",
    ].join("\n"));

    bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "doc.md") });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const nodes = db.prepare("SELECT slug, type, title FROM nodes ORDER BY type, idx").all() as Array<{ slug: string; type: string; title: string }>;

      // Should have: title (file, root), section-a (section), subsection (section)
      // No synthetic root directory — files at input root are root nodes directly
      expect(nodes.some((n) => n.type === "file" && n.title === "Title")).toBe(true);
      expect(nodes.some((n) => n.type === "section" && n.title === "Section A")).toBe(true);
      expect(nodes.some((n) => n.type === "section" && n.title === "Subsection")).toBe(true);
    } finally {
      db.close();
    }
  });

  it("writes valid manifest", () => {
    fs.writeFileSync(path.join(inputDir, "hello.md"), "# Hello");

    bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "hello.md") });

    const yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).toContain("version:");
    expect(yaml).toContain("totalChunks:");
    expect(yaml).toContain("home:");
    expect(yaml).toContain("exportedAt:");
  });

  it("calls onProgress callback", () => {
    fs.writeFileSync(path.join(inputDir, "a.md"), "# A");
    fs.writeFileSync(path.join(inputDir, "b.md"), "# B");

    const progressCalls: Array<{ path: string; processed: number; total: number }> = [];
    bundle({
      input: inputDir,
      output: outputDir,
      home: path.join(inputDir, "a.md"),
      onProgress: (p, processed, total) => {
        progressCalls.push({ path: p, processed, total });
      },
    });

    expect(progressCalls).toHaveLength(2);
    expect(progressCalls[0].processed).toBe(1);
    expect(progressCalls[0].total).toBe(2);
  });

  it("handles slug collisions with same-named files in different dirs", () => {
    fs.mkdirSync(path.join(inputDir, "a"), { recursive: true });
    fs.mkdirSync(path.join(inputDir, "b"), { recursive: true });
    fs.writeFileSync(path.join(inputDir, "a", "readme.md"), "# A README");
    fs.writeFileSync(path.join(inputDir, "b", "readme.md"), "# B README");

    bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "a", "readme.md") });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const slugs = db.prepare("SELECT slug FROM nodes WHERE type = 'file'").all() as Array<{ slug: string }>;
      const slugSet = new Set(slugs.map((s) => s.slug));
      // All slugs should be unique
      expect(slugSet.size).toBe(slugs.length);
    } finally {
      db.close();
    }
  });

  it("overwrites existing output directory", () => {
    fs.writeFileSync(path.join(inputDir, "a.md"), "# A");
    bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "a.md") });

    fs.writeFileSync(path.join(inputDir, "b.md"), "# B");
    bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "a.md") });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const fileCount = db.prepare("SELECT COUNT(*) as count FROM nodes WHERE type = 'file'").get() as { count: number };
      expect(fileCount.count).toBe(2);
    } finally {
      db.close();
    }
  });
});
