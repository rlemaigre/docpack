import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { bundle } from "../src/bundler";
import { query } from "../src/query";
import { formatXml, formatYaml } from "../src/cli/format";

describe("cli format integration", () => {
  let tmpDir: string;
  let inputDir: string;
  let outputDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-cli-"));
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
    bundle({ input: inputDir, output: outputDir, home: path.join(inputDir, "readme.md"), converter: mdConverter });
  }

  it("formatXml produces valid XML for get() output", () => {
    setupKB();
    const kb = query(outputDir);
    try {
      const doc = kb.get("readme");
      expect(doc).not.toBeNull();

      const xml = formatXml(doc!);
      expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(xml).toContain("<documents>");
      expect(xml).toContain("</documents>");
      expect(xml).toContain("<document");
      expect(xml).toContain("</document>");
      expect(xml).toContain("slug=");
      expect(xml).toContain("title=");
    } finally {
      kb.close();
    }
  });

  it("formatXml produces XML with chunk and children", () => {
    setupKB();
    const kb = query(outputDir);
    try {
      const doc = kb.get("guide");
      expect(doc).not.toBeNull();

      const xml = formatXml(doc!);
      expect(xml).toContain("<chunk>");
      expect(xml).toContain("</chunk>");
      expect(xml).toContain("<children>");
    } finally {
      kb.close();
    }
  });

  it("formatYaml produces valid YAML for manifest output", () => {
    setupKB();
    const kb = query(outputDir);
    try {
      const manifest = kb.manifest();
      const yaml = formatYaml(manifest);

      expect(yaml).toContain("version:");
      expect(yaml).toContain("totalChunks:");
      expect(yaml).toContain("home:");
      expect(yaml).toContain("exportedAt:");
    } finally {
      kb.close();
    }
  });

  it("formatYaml produces valid YAML for toc output", () => {
    setupKB();
    const kb = query(outputDir);
    try {
      const manifest = kb.manifest();
      const toc = kb.toc(manifest.home!, 1);
      const yaml = formatYaml(toc);

      expect(yaml).toContain("slug:");
      expect(yaml).toContain("title:");
      expect(yaml).toContain("children:");
    } finally {
      kb.close();
    }
  });

  it("formatYaml produces valid YAML for search output", () => {
    setupKB();
    const kb = query(outputDir);
    try {
      const results = kb.search({ query: "Guide", limit: 10, offset: 0 });
      const yaml = formatYaml(results);

      expect(yaml).toContain("total:");
      expect(yaml).toContain("hits:");
    } finally {
      kb.close();
    }
  });

  it("formatXml handles document with navigation attributes", () => {
    setupKB();
    const kb = query(outputDir);
    try {
      const setupDoc = kb.get("setup");
      expect(setupDoc).not.toBeNull();

      const xml = formatXml(setupDoc!);
      expect(xml).toContain("parent=");
    } finally {
      kb.close();
    }
  });
});
