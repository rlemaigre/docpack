import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { bundle } from "../src/bundler";
import { generateSkill } from "../src/skill/generate";

describe("skill generation", () => {
  let tmpDir: string;
  let inputDir: string;
  let kbDir: string;
  let skillDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-skill-"));
    inputDir = path.join(tmpDir, "input");
    kbDir = path.join(tmpDir, "mykb");
    skillDir = path.join(tmpDir, "myskill");
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
    fs.writeFileSync(
      path.join(inputDir, "toc.md"),
      ["# Documentation", "", "## Getting Started", "", "Intro content."].join("\n"),
    );
    fs.writeFileSync(
      path.join(inputDir, "api.md"),
      ["# API Reference", "", "API content.", "", "## Auth", "", "Auth details."].join("\n"),
    );
    bundle({
      input: inputDir,
      output: kbDir,
      home: path.join(inputDir, "toc.md"),
      description: "Test knowledge base",
      converter: mdConverter,
    });
  }

  it("produces the expected directory structure", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    expect(fs.existsSync(path.join(skillDir, "SKILL.md"))).toBe(true);
    expect(fs.existsSync(path.join(skillDir, "references", "docpack.db"))).toBe(true);
    expect(fs.existsSync(path.join(skillDir, "references", "docpack.yaml"))).toBe(true);
    expect(fs.existsSync(path.join(skillDir, "scripts", "docpack.mjs"))).toBe(true);
  });

  it("SKILL.md frontmatter contains name and description", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const content = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");

    expect(content).toContain("---");
    expect(content).toContain("name: mykb");
    expect(content).toContain("description: Use when you need test docs.");
  });

  it("SKILL.md body contains use-when text", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const content = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");

    // After frontmatter, the title and use-when should appear
    const bodyStart = content.indexOf("---\n", content.indexOf("---\n") + 1);
    const body = content.slice(bodyStart + 4);
    expect(body).toContain("# mykb");
    expect(body).toContain("Use when you need test docs.");
  });

  it("SKILL.md contains Knowledge Base overview section", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const content = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");

    expect(content).toContain("## Knowledge Base");
    expect(content).toContain("**Chunks:**");
    expect(content).toContain("**Size:**");
    expect(content).toContain("**Home:** toc");
    expect(content).toContain("**Description:** Test knowledge base");
  });

  it("SKILL.md contains Structure section from home TOC", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const content = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");

    expect(content).toContain("## Structure");
    expect(content).toContain("Getting Started");
  });

  it("SKILL.md contains Usage section with bundled wrapper script", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const content = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");

    expect(content).toContain("## Usage");
    expect(content).toContain("node ./scripts/docpack.mjs manifest");
    expect(content).toContain("node ./scripts/docpack.mjs toc");
    expect(content).toContain("node ./scripts/docpack.mjs get");
    expect(content).toContain("node ./scripts/docpack.mjs search");
    // Should NOT reference npx (uses bundled wrapper instead)
    expect(content).not.toContain("npx @rlemaigre/docpack");
  });

  it("wrapper script pins the docpack version", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const script = fs.readFileSync(path.join(skillDir, "scripts", "docpack.mjs"), "utf8");

    expect(script).toContain("@rlemaigre/docpack@0.5.0");
  });

  it("wrapper script resolves KB path relative to itself", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const script = fs.readFileSync(path.join(skillDir, "scripts", "docpack.mjs"), "utf8");

    expect(script).toContain("import.meta.url");
    expect(script).toContain("../references");
  });

  it("wrapper script supports all four subcommands", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const script = fs.readFileSync(path.join(skillDir, "scripts", "docpack.mjs"), "utf8");

    expect(script).toContain('case "manifest":');
    expect(script).toContain('case "toc":');
    expect(script).toContain('case "get":');
    expect(script).toContain('case "search":');
  });

  it("copies KB files correctly (db is non-empty)", () => {
    setupKB();

    generateSkill({ kb: kbDir, output: skillDir, useWhen: "Use when you need test docs." });

    const dbSize = fs.statSync(path.join(skillDir, "references", "docpack.db")).size;
    expect(dbSize).toBeGreaterThan(0);
  });

  it("SKILL.md uses KB directory basename for name, not home slug", () => {
    setupKB();

    // Use a KB dir with a different name than the home slug
    const altKbDir = path.join(tmpDir, "custom-name");
    fs.mkdirSync(altKbDir);
    fs.copyFileSync(path.join(kbDir, "docpack.db"), path.join(altKbDir, "docpack.db"));
    fs.copyFileSync(path.join(kbDir, "docpack.yaml"), path.join(altKbDir, "docpack.yaml"));

    generateSkill({ kb: altKbDir, output: skillDir, useWhen: "Test." });

    const content = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");
    expect(content).toContain("name: custom-name");
    expect(content).toContain("# custom-name");
  });
});
