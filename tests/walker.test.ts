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

  it("discovers nested files as flat list", () => {
    fs.mkdirSync(path.join(tmpDir, "docs", "api"), { recursive: true });
    fs.writeFileSync(path.join(tmpDir, "readme.md"), "root");
    fs.writeFileSync(path.join(tmpDir, "docs", "guide.md"), "guide");
    fs.writeFileSync(path.join(tmpDir, "docs", "api", "auth.md"), "auth");

    const result = walkFS(tmpDir);

    // All files are flat, no directory nodes
    expect(result).toHaveLength(3);

    // relPath preserves original directory structure
    expect(result.find((f) => f.name === "readme.md")?.relPath).toBe("readme.md");
    expect(result.find((f) => f.name === "guide.md")?.relPath).toBe("docs/guide.md");
    expect(result.find((f) => f.name === "auth.md")?.relPath).toBe("docs/api/auth.md");
  });

  it("sorts by full path with numeric locale ordering", () => {
    fs.writeFileSync(path.join(tmpDir, "z.md"), "z");
    fs.writeFileSync(path.join(tmpDir, "a.md"), "a");
    fs.mkdirSync(path.join(tmpDir, "b-dir"));
    fs.writeFileSync(path.join(tmpDir, "b-dir", "file.md"), "file");

    const result = walkFS(tmpDir);
    // Sorted by full path: a.md, b-dir/file.md, z.md
    expect(result[0].name).toBe("a.md");
    expect(result[1].name).toBe("file.md");
    expect(result[2].name).toBe("z.md");
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

  it("handles single file input", () => {
    const filePath = path.join(tmpDir, "single.md");
    fs.writeFileSync(filePath, "content");

    const result = walkFS(filePath);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("single.md");
    expect(result[0].relPath).toBe("single.md");
    expect(result[0].absolutePath).toBe(filePath);
  });

});
