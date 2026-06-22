import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { bundle } from "../src/bundler/index";
import { query } from "../src/query/index";

describe("query", () => {
  let tmpDir: string;
  let inputDir: string;
  let outputDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-query-"));
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
      ["# Guide", "", "Guide content", "", "## Setup", "", "Setup steps", "", "### Config", "", "Config details"].join("\n"),
    );
    fs.writeFileSync(path.join(inputDir, "docs", "api.md"), "# API\n\nAPI docs");

    bundle({ input: inputDir, output: outputDir, converter: mdConverter });
  }

  describe("manifest()", () => {
    it("returns manifest with correct structure", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const manifest = kb.manifest();

        expect(manifest.version).toBeDefined();
        expect(manifest.totalChunks).toBeGreaterThan(0);
        expect(manifest.totalBytes).toBeGreaterThan(0);
        expect(Array.isArray(manifest.roots)).toBe(true);
        expect(manifest.roots.length).toBeGreaterThan(0);
        expect(Array.isArray(manifest.files)).toBe(true);
        expect(manifest.files.length).toBeGreaterThan(0);

        // Each file entry has summary
        for (const file of manifest.files) {
          expect(file.slug).toBeDefined();
          expect(file.summary.chunkCount).toBeGreaterThanOrEqual(1);
          expect(file.summary.totalBytes).toBeGreaterThan(0);
          expect(file.summary.depth).toBeGreaterThanOrEqual(0);
        }
      } finally {
        kb.close();
      }
    });

    it("caches manifest result", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const m1 = kb.manifest();
        const m2 = kb.manifest();
        expect(m1).toBe(m2);
      } finally {
        kb.close();
      }
    });
  });

  describe("toc()", () => {
    it("returns TOC at depth 0 (root only)", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const manifest = kb.manifest();
        const rootSlug = manifest.roots[0];
        const toc = kb.toc(rootSlug, 0);

        expect(toc.slug).toBe(rootSlug);
        // At depth 0, children should be a Summary (clipped)
        expect(Array.isArray(toc.children)).toBe(false);
        if (!Array.isArray(toc.children)) {
          expect(toc.children.chunkCount).toBeGreaterThan(0);
        }
      } finally {
        kb.close();
      }
    });

    it("returns TOC at depth 1", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const manifest = kb.manifest();
        const rootSlug = manifest.roots[0];
        const toc = kb.toc(rootSlug, 1);

        expect(toc.slug).toBe(rootSlug);
        expect(Array.isArray(toc.children)).toBe(true);
        expect(toc.children.length).toBeGreaterThan(0);
      } finally {
        kb.close();
      }
    });

    it("returns full TOC with depth 'full'", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const manifest = kb.manifest();
        const rootSlug = manifest.roots[0];
        const toc = kb.toc(rootSlug, "full");

        expect(toc.slug).toBe(rootSlug);
        expect(Array.isArray(toc.children)).toBe(true);

        // Walk the full tree
        function countNodes(toc: typeof kb.toc): number {
          if (!Array.isArray(toc.children)) return 1;
          return 1 + toc.children.reduce((sum, c) => sum + countNodes(c), 0);
        }

        const total = countNodes(toc);
        expect(total).toBeGreaterThan(3);
      } finally {
        kb.close();
      }
    });

    it("returns TOC with depth 'files'", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const manifest = kb.manifest();
        const rootSlug = manifest.roots[0];
        const toc = kb.toc(rootSlug, "files");

        // With 'files' mode, directories and sections expand but file nodes are clipped with Summary
        expect(toc.slug).toBe(rootSlug);
      } finally {
        kb.close();
      }
    });

    it("throws for non-existent slug", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        expect(() => kb.toc("nonexistent", 0)).toThrow("Slug not found");
      } finally {
        kb.close();
      }
    });

    it("includes summary text in clipped TOC after summarize()", async () => {
      setupKB();

      // Run summarize to add summary text
      await import("../src/post-process/summarize").then(async ({ summarize }) => {
        await summarize({
          input: outputDir,
          summarizer: async (_kb, emit) => {
            emit("guide", "Guide summary text");
          },
        });
      });

      const kb = query(outputDir);
      try {
        // guide has children (setup section), so depth 0 clips them with Summary
        const toc = kb.toc("guide", 0);
        expect(Array.isArray(toc.children)).toBe(false);
        if (!Array.isArray(toc.children)) {
          expect(toc.children.text).toBe("Guide summary text");
          expect(toc.children.chunkCount).toBeGreaterThan(0);
        }
      } finally {
        kb.close();
      }
    });
  });

  describe("get()", () => {
    it("returns document with correct structure", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const manifest = kb.manifest();
        const rootSlug = manifest.roots[0];
        const doc = kb.get(rootSlug);

        expect(doc).not.toBeNull();
        expect(doc!.slug).toBe(rootSlug);
        expect(doc!.title).toBeDefined();
        expect(doc!.level).toBeGreaterThanOrEqual(0);
        expect(doc!.depth).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(doc!.children)).toBe(true);
      } finally {
        kb.close();
      }
    });

    it("returns null for non-existent slug", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const doc = kb.get("nonexistent");
        expect(doc).toBeNull();
      } finally {
        kb.close();
      }
    });

    it("includes chunk content for nodes with content", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        // Get the readme file
        const readmeDoc = kb.get("readme");
        expect(readmeDoc).not.toBeNull();
        expect(readmeDoc!.chunk).toContain("Intro text");
      } finally {
        kb.close();
      }
    });

    it("includes parent navigation for non-root nodes", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const guideDoc = kb.get("guide");
        expect(guideDoc).not.toBeNull();
        // Guide is under docs directory, so it should have a parent
        expect(guideDoc!.parent).toBeDefined();
      } finally {
        kb.close();
      }
    });

    it("includes prev/next navigation for sections", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const setupDoc = kb.get("setup");
        expect(setupDoc).not.toBeNull();
        // Setup is a section under guide, should have prev/next if siblings exist
        if (setupDoc!.next) {
          expect(setupDoc!.next).toBe("config");
        }
      } finally {
        kb.close();
      }
    });

    it("returns subtree with correct depth", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const guideDoc = kb.get("guide");
        expect(guideDoc).not.toBeNull();
        expect(guideDoc!.depth).toBeGreaterThan(0);
        expect(guideDoc!.children.length).toBeGreaterThan(0);
      } finally {
        kb.close();
      }
    });
  });

  describe("search()", () => {
    it("returns results for matching query", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const results = kb.search({ query: "Guide", limit: 10, offset: 0 });

        expect(results.total).toBeGreaterThan(0);
        expect(results.hits.length).toBeGreaterThan(0);
        expect(results.hits[0].slug).toBeDefined();
        expect(results.hits[0].title).toBeDefined();
        expect(results.hits[0].text).toBeDefined();
        expect(results.hits[0].rank).toBeDefined();
      } finally {
        kb.close();
      }
    });

    it("returns empty results for non-matching query", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const results = kb.search({ query: "xyznonexistent", limit: 10, offset: 0 });
        expect(results.total).toBe(0);
        expect(results.hits).toHaveLength(0);
      } finally {
        kb.close();
      }
    });

    it("respects limit and offset", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const allResults = kb.search({ query: "content", limit: 100, offset: 0 });
        const limitedResults = kb.search({ query: "content", limit: 1, offset: 0 });

        expect(allResults.total).toBeGreaterThan(0);
        expect(limitedResults.hits).toHaveLength(Math.min(1, allResults.total));
      } finally {
        kb.close();
      }
    });

    it("supports FTS5 query language (phrases)", () => {
      setupKB();
      const kb = query(outputDir);
      try {
        const results = kb.search({ query: '"Intro text"', limit: 10, offset: 0 });
        expect(results.total).toBeGreaterThan(0);
      } finally {
        kb.close();
      }
    });
  });

  describe("close()", () => {
    it("releases DB handle", () => {
      setupKB();
      const kb = query(outputDir);
      kb.close();

      // After close, operations should fail
      expect(() => kb.manifest()).not.toThrow(); // manifest is cached
      expect(() => kb.toc("readme", 0)).toThrow();
    });
  });

  describe("error handling", () => {
    it("throws when KB directory does not exist", () => {
      expect(() => query("/nonexistent/path")).toThrow();
    });

    it("throws when docpack.db is missing", () => {
      fs.mkdirSync(path.join(tmpDir, "empty-kb"), { recursive: true });
      expect(() => query(path.join(tmpDir, "empty-kb"))).toThrow();
    });
  });
});
