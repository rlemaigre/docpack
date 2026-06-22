import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import Database from "better-sqlite3";
import { bundle } from "../src/bundler/index";
import { query } from "../src/query";
import { summarize } from "../src/post-process/summarize";

describe("summarize", () => {
  let tmpDir: string;
  let inputDir: string;
  let outputDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-summarize-"));
    inputDir = path.join(tmpDir, "input");
    outputDir = path.join(tmpDir, "output");
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

  it("runs a summarizer and stores summaries", async () => {
    setupKB();

    const emittedSlugs: string[] = [];
    const summarizer = async (kb, emit) => {
      const manifest = kb.manifest();
      for (const file of manifest.files) {
        emit(file.slug, `Summary for ${file.slug}`);
        emittedSlugs.push(file.slug);
      }
    };

    await summarize({ input: outputDir, summarizer });

    // Verify emit was called
    expect(emittedSlugs.length).toBeGreaterThan(0);

    // Verify summaries are stored in DB
    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      for (const slug of emittedSlugs) {
        const row = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get(slug) as { summary: string | null };
        expect(row.summary).toBe(`Summary for ${slug}`);
      }
    } finally {
      db.close();
    }
  });

  it("updates manifest with text field", async () => {
    setupKB();

    const summarizer = async (_kb, emit) => {
      emit("readme", "README summary text");
    };

    await summarize({ input: outputDir, summarizer });

    const yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).toContain("text: README summary text");
  });

  it("clears previous summaries before inserting new ones", async () => {
    setupKB();

    // First pass: summarize all files
    await summarize({
      input: outputDir,
      summarizer: async (_kb, emit) => {
        emit("readme", "First summary");
        emit("guide", "First guide summary");
      },
    });

    // Second pass: only summarize readme with different text
    await summarize({
      input: outputDir,
      summarizer: async (_kb, emit) => {
        emit("readme", "Second summary");
      },
    });

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
      expect(readme.summary).toBe("Second summary");

      const guide = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("guide") as { summary: string | null };
      expect(guide.summary).toBeNull();
    } finally {
      db.close();
    }
  });

  it("last value wins for duplicate slugs", async () => {
    setupKB();

    const summarizer = async (_kb, emit) => {
      emit("readme", "First value");
      emit("readme", "Second value");
      emit("readme", "Final value");
    };

    await summarize({ input: outputDir, summarizer });

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
      const summarizer = async (_kb, emit) => {
        emit("readme", "Valid summary");
        emit("nonexistent-slug", "Invalid summary");
      };

      await summarize({ input: outputDir, summarizer });

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

  it("uses KB instance to discover and read content", async () => {
    setupKB();

    const discoveredSlugs: string[] = [];
    const summarizer = async (kb, emit) => {
      const manifest = kb.manifest();
      for (const file of manifest.files) {
        const doc = kb.get(file.slug);
        if (doc) {
          discoveredSlugs.push(doc.slug);
          // Summarize based on content
          const content = doc.chunk ?? "";
          emit(file.slug, `Has ${content.length} chars`);
        }
      }
    };

    await summarize({ input: outputDir, summarizer });

    expect(discoveredSlugs.length).toBeGreaterThan(0);

    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      for (const slug of discoveredSlugs) {
        const row = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get(slug) as { summary: string | null };
        expect(row.summary).toMatch(/^Has \d+ chars$/);
      }
    } finally {
      db.close();
    }
  });

  it("throws when KB directory does not exist", async () => {
    await expect(async () => {
      await summarize({
        input: "/nonexistent/path",
        summarizer: async () => {},
      });
    }).rejects.toThrow();
  });

  it("clears all summaries when summarizer emits nothing", async () => {
    setupKB();

    // First pass: set summaries
    await summarize({
      input: outputDir,
      summarizer: async (_kb, emit) => {
        emit("readme", "First summary");
        emit("guide", "First guide summary");
      },
    });

    // Verify summaries exist
    {
      const db = new Database(path.join(outputDir, "docpack.db"));
      try {
        const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
        expect(readme.summary).toBe("First summary");
      } finally {
        db.close();
      }
    }

    // Second pass: emit nothing — should clear all summaries
    await summarize({
      input: outputDir,
      summarizer: async (_kb, _emit) => {
        // emit nothing
      },
    });

    // Verify all summaries are cleared
    const db = new Database(path.join(outputDir, "docpack.db"));
    try {
      const readme = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("readme") as { summary: string | null };
      expect(readme.summary).toBeNull();

      const guide = db.prepare("SELECT summary FROM nodes WHERE slug = ?").get("guide") as { summary: string | null };
      expect(guide.summary).toBeNull();
    } finally {
      db.close();
    }

    // Verify manifest no longer has text fields
    const yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).not.toContain("text:");
  });

  it("removes text from manifest when summary is cleared", async () => {
    setupKB();

    // First pass: set summary
    await summarize({
      input: outputDir,
      summarizer: async (_kb, emit) => {
        emit("readme", "Summary text");
      },
    });

    let yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).toContain("text: Summary text");

    // Second pass: emit nothing for readme (clears it)
    await summarize({
      input: outputDir,
      summarizer: async (_kb, _emit) => {},
    });

    yaml = fs.readFileSync(path.join(outputDir, "docpack.yaml"), "utf8");
    expect(yaml).not.toContain("text:");
  });
});
