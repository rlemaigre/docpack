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
    // Preamble moved into synthetic Introduction section
    expect(root.chunk).toBeNull();
    expect(root.children).toHaveLength(2);
    expect(root.children[0].title).toBe("Introduction");
    expect(root.children[0].isSynthetic).toBe(true);
    expect(root.children[0].chunk).toBe("Intro text");
    expect(root.children[1].title).toBe("Main Title");
    expect(root.children[1].chunk).toBe("Content");
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
    // Root has chunk + children -> synthetic intro. Section A has chunk + children -> synthetic intro.
    expect(root.chunk).toBeNull();
    expect(root.children).toHaveLength(3); // intro, Section A, Section B
    expect(root.children[0].title).toBe("Introduction");
    expect(root.children[0].isSynthetic).toBe(true);
    expect(root.children[0].chunk).toBe("Title content");
    expect(root.children[1].title).toBe("Section A");
    expect(root.children[1].chunk).toBeNull();
    expect(root.children[1].children).toHaveLength(2); // intro, Subsection A1
    expect(root.children[1].children[0].title).toBe("Introduction");
    expect(root.children[1].children[0].isSynthetic).toBe(true);
    expect(root.children[1].children[0].chunk).toBe("A content");
    expect(root.children[1].children[1].title).toBe("Subsection A1");
    expect(root.children[1].children[1].chunk).toBe("A1 content");
    expect(root.children[2].title).toBe("Section B");
    expect(root.children[2].chunk).toBe("B content");
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
    // Root has chunk (code block) + children -> synthetic intro
    expect(root.children).toHaveLength(2);
    expect(root.children[0].title).toBe("Introduction");
    expect(root.children[0].isSynthetic).toBe(true);
    expect(root.children[1].title).toBe("Real Section");
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
    // Root has chunk (indented code) + children -> synthetic intro
    expect(root.children).toHaveLength(2);
    expect(root.children[0].title).toBe("Introduction");
    expect(root.children[0].isSynthetic).toBe(true);
    expect(root.children[1].title).toBe("Real Section");
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
    // Preamble moved into synthetic Introduction
    expect(root.chunk).toBeNull();
    expect(root.children).toHaveLength(2);
    expect(root.children[0].title).toBe("Introduction");
    expect(root.children[0].isSynthetic).toBe(true);
    expect(root.children[0].chunk).toBe("Preamble text");
    expect(root.children[1].title).toBe("Section 1");
    expect(root.children[1].chunk).toBe("Section 1 content");
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
    expect(root.chunk).toBeNull();
    expect(root.children).toHaveLength(0);
  });

  it("handles heading with no content after it", () => {
    const root = walkMD("doc.md", "# Title");
    expect(root.title).toBe("Title");
    expect(root.chunk).toBeNull();
  });

  it("creates synthetic Introduction for node with chunk and children", () => {
    const md = [
      "Preamble",
      "",
      "## Section A",
      "",
      "A content",
      "",
      "### Sub A1",
      "",
      "Sub content",
    ].join("\n");

    const root = walkMD("doc.md", md);
    // Root has preamble + children -> synthetic intro
    expect(root.chunk).toBeNull();
    expect(root.children).toHaveLength(2); // intro, Section A
    expect(root.children[0].title).toBe("Introduction");
    expect(root.children[0].isSynthetic).toBe(true);
    expect(root.children[0].chunk).toBe("Preamble");
    expect(root.children[0].children).toHaveLength(0);

    // Section A has content + children -> synthetic intro
    expect(root.children[1].title).toBe("Section A");
    expect(root.children[1].chunk).toBeNull();
    expect(root.children[1].children).toHaveLength(2); // intro, Sub A1
    expect(root.children[1].children[0].title).toBe("Introduction");
    expect(root.children[1].children[0].isSynthetic).toBe(true);
    expect(root.children[1].children[0].chunk).toBe("A content");

    // Leaf section unchanged
    expect(root.children[1].children[1].title).toBe("Sub A1");
    expect(root.children[1].children[1].chunk).toBe("Sub content");
    expect(root.children[1].children[1].children).toHaveLength(0);
  });

  it("does not create synthetic Introduction for leaf nodes", () => {
    const md = "# Title\n\nJust content";
    const root = walkMD("doc.md", md);
    // No children -> no synthetic intro, chunk stays on root
    expect(root.chunk).toBe("Just content");
    expect(root.children).toHaveLength(0);
  });

  it("does not create synthetic Introduction when node has no chunk", () => {
    const md = "# Title\n\n## Section";
    const root = walkMD("doc.md", md);
    // After H1 promotion: root has no chunk, has children -> no synthetic intro
    expect(root.chunk).toBeNull();
    expect(root.children).toHaveLength(1);
    expect(root.children[0].title).toBe("Section");
    expect(root.children[0].isSynthetic).toBeUndefined();
  });
});
