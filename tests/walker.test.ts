import { describe, it, expect, beforeEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { walkFS } from "../src/bundler/walker";

describe("walkFS", () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docpack-test-"));
  });

  it("returns empty array for empty directory", () => {
    const result = walkFS(tmpDir);
    expect(result).toHaveLength(0);
  });

  it("discovers files in root", () => {
    fs.writeFileSync(path.join(tmpDir, "a.md"), "content");
    fs.writeFileSync(path.join(tmpDir, "b.txt"), "content");

    const result = walkFS(tmpDir);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("a.md");
    expect(result[1].name).toBe("b.txt");
  });

  it("discovers nested files and directories", () => {
    fs.mkdirSync(path.join(tmpDir, "docs", "api"), { recursive: true });
    fs.writeFileSync(path.join(tmpDir, "readme.md"), "root");
    fs.writeFileSync(path.join(tmpDir, "docs", "guide.md"), "guide");
    fs.writeFileSync(path.join(tmpDir, "docs", "api", "auth.md"), "auth");

    const result = walkFS(tmpDir);

    // Should have: docs (dir), readme.md (file)
    expect(result).toHaveLength(2);

    const docsDir = result.find((n) => n.name === "docs");
    expect(docsDir).toBeDefined();
    expect(docsDir?.type).toBe("directory");

    // docs should have: api (dir), guide.md (file)
    expect(docsDir?.children).toHaveLength(2);

    const apiDir = docsDir?.children.find((n) => n.name === "api");
    expect(apiDir).toBeDefined();
    expect(apiDir?.children).toHaveLength(1);
    expect(apiDir?.children[0].name).toBe("auth.md");
  });

  it("sorts directories before files", () => {
    fs.writeFileSync(path.join(tmpDir, "z.md"), "z");
    fs.writeFileSync(path.join(tmpDir, "a.md"), "a");
    fs.mkdirSync(path.join(tmpDir, "b-dir"));

    const result = walkFS(tmpDir);
    // b-dir should come first (directories before files)
    expect(result[0].name).toBe("b-dir");
    expect(result[0].type).toBe("directory");
  });

  it("assigns correct indices", () => {
    fs.writeFileSync(path.join(tmpDir, "c.md"), "c");
    fs.writeFileSync(path.join(tmpDir, "a.md"), "a");
    fs.writeFileSync(path.join(tmpDir, "b.md"), "b");

    const result = walkFS(tmpDir);
    expect(result[0].name).toBe("a.md");
    expect(result[0].index).toBe(0);
    expect(result[1].name).toBe("b.md");
    expect(result[1].index).toBe(1);
    expect(result[2].name).toBe("c.md");
    expect(result[2].index).toBe(2);
  });

  it("sets parent pointers correctly", () => {
    fs.mkdirSync(path.join(tmpDir, "sub"), { recursive: true });
    fs.writeFileSync(path.join(tmpDir, "sub", "file.md"), "content");

    const result = walkFS(tmpDir);
    const subDir = result.find((n) => n.name === "sub");
    const fileNode = subDir?.children[0];

    expect(fileNode?.parent).toBe(subDir);
    expect(subDir?.parent).toBeNull();
  });

  it("respects include glob pattern", () => {
    fs.writeFileSync(path.join(tmpDir, "a.md"), "a");
    fs.writeFileSync(path.join(tmpDir, "b.txt"), "b");
    fs.mkdirSync(path.join(tmpDir, "sub"));
    fs.writeFileSync(path.join(tmpDir, "sub", "c.md"), "c");

    const result = walkFS(tmpDir, "**/*.md");
    const names = result.map((n) => n.name);

    expect(names).toContain("a.md");
    expect(names).not.toContain("b.txt");
  });

  it("detects MIME types for files", () => {
    fs.writeFileSync(path.join(tmpDir, "readme.md"), "content");
    fs.writeFileSync(path.join(tmpDir, "image.png"), "content");

    const result = walkFS(tmpDir);
    const mdFile = result.find((n) => n.name === "readme.md");
    const pngFile = result.find((n) => n.name === "image.png");

    expect(mdFile?.mime).toBe("text/markdown");
    expect(pngFile?.mime).toBe("image/png");
  });
});
