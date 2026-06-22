import { describe, it, expect } from "vitest";
import { walkMD } from "../src/bundler/parser";

describe("walkMD", () => {
  it("handles file with no headings", () => {
    const root = walkMD("readme.md", "Just some text\nNo headings here");
    expect(root.title).toBe("readme");
    expect(root.chunk).toBe("Just some text\nNo headings here");
    expect(root.children).toHaveLength(0);
  });

  it("handles file with single h1, no preamble", () => {
    const root = walkMD("book.md", "# Alice in Wonderland\n\nOnce upon a time...");
    expect(root.title).toBe("Alice in Wonderland");
    expect(root.chunk).toBe("Once upon a time...");
    expect(root.children).toHaveLength(0);
  });

  it("handles file with h1 and preamble", () => {
    const root = walkMD("doc.md", "Intro text\n\n# Main Title\n\nContent");
    expect(root.title).toBe("doc");
    expect(root.chunk).toBe("Intro text");
    expect(root.children).toHaveLength(1);
    expect(root.children[0].title).toBe("Main Title");
    expect(root.children[0].chunk).toBe("Content");
  });

  it("handles nested headings", () => {
    const md = [
      "# Title",
      "",
      "Title content",
      "",
      "## Section A",
      "",
      "A content",
      "",
      "### Subsection A1",
      "",
      "A1 content",
      "",
      "## Section B",
      "",
      "B content",
    ].join("\n");

    const root = walkMD("doc.md", md);
    expect(root.title).toBe("Title");
    expect(root.children).toHaveLength(2);
    expect(root.children[0].title).toBe("Section A");
    expect(root.children[0].children).toHaveLength(1);
    expect(root.children[0].children[0].title).toBe("Subsection A1");
    expect(root.children[0].children[0].chunk).toBe("A1 content");
    expect(root.children[1].title).toBe("Section B");
    expect(root.children[1].chunk).toBe("B content");
  });

  it("skips headings inside fenced code blocks", () => {
    const md = [
      "# Title",
      "",
      "```",
      "# Not a heading",
      "```",
      "",
      "## Real Section",
    ].join("\n");

    const root = walkMD("doc.md", md);
    expect(root.children).toHaveLength(1);
    expect(root.children[0].title).toBe("Real Section");
  });

  it("skips headings inside indented code blocks", () => {
    const md = [
      "# Title",
      "",
      "    # Not a heading",
      "",
      "## Real Section",
    ].join("\n");

    const root = walkMD("doc.md", md);
    expect(root.children).toHaveLength(1);
    expect(root.children[0].title).toBe("Real Section");
  });

  it("trims trailing # from headings", () => {
    const root = walkMD("doc.md", "## Title ##\n\nContent");
    expect(root.children[0].title).toBe("Title");
  });

  it("handles content before first heading as preamble", () => {
    const md = [
      "Preamble text",
      "",
      "## Section 1",
      "",
      "Section 1 content",
    ].join("\n");

    const root = walkMD("doc.md", md);
    expect(root.title).toBe("doc");
    expect(root.chunk).toBe("Preamble text");
    expect(root.children).toHaveLength(1);
    expect(root.children[0].title).toBe("Section 1");
  });

  it("assigns correct indices to siblings", () => {
    const md = [
      "# Title",
      "",
      "## A",
      "",
      "## B",
      "",
      "## C",
    ].join("\n");

    const root = walkMD("doc.md", md);
    expect(root.children[0].index).toBe(0);
    expect(root.children[1].index).toBe(1);
    expect(root.children[2].index).toBe(2);
  });

  it("handles empty markdown", () => {
    const root = walkMD("empty.md", "");
    expect(root.title).toBe("empty");
    expect(root.chunk).toBe("");
    expect(root.children).toHaveLength(0);
  });

  it("handles heading with no content after it", () => {
    const root = walkMD("doc.md", "# Title");
    expect(root.title).toBe("Title");
    expect(root.chunk).toBeNull();
  });
});
