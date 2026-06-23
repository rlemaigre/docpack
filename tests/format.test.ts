import { describe, it, expect } from "vitest";
import { formatXml, formatYaml } from "../src/cli/format";
import type { Document } from "../src/query";

describe("formatXml", () => {
  function makeDoc(overrides?: Partial<Document>): Document {
    return {
      slug: "test",
      title: "Test",
      level: 0,
      depth: 0,
      children: [],
      ...overrides,
    };
  }

  it("renders a leaf document with required attributes", () => {
    const doc = makeDoc();
    const xml = formatXml(doc);

    expect(xml).toContain('slug="test"');
    expect(xml).toContain('title="Test"');
    expect(xml).toContain('level="0"');
    expect(xml).toContain('depth="0"');
    // xmlbuilder renders empty elements as self-closing: <children/>
    expect(xml).toContain("<children" );
    expect(xml).toContain("/>" );
  });

  it("wraps document(s) in <documents> root", () => {
    const doc = makeDoc();
    const xml = formatXml(doc);

    expect(xml).toContain("<documents>");
    expect(xml).toContain("</documents>");

    // The <document> with attributes should be a child of <documents>
    const lines = xml.trim().split("\n");
    const docLine = lines.find((l) => l.includes('<document slug="test"'));
    expect(docLine).toBeDefined();
  });

  it("renders multiple documents in one call", () => {
    const doc1 = makeDoc({ slug: "a", title: "A" });
    const doc2 = makeDoc({ slug: "b", title: "B" });
    const xml = formatXml(doc1, doc2);

    expect(xml).toContain("<documents>");
    expect(xml).toContain('slug="a"');
    expect(xml).toContain('slug="b"');

    // Exactly two <document slug=...> elements
    const docTags = xml.match(/<document slug="/g);
    expect(docTags?.length).toBe(2);
  });

  it("renders chunk as text content (not XML comment)", () => {
    const doc = makeDoc({ chunk: "# Heading\n\nBody text" });
    const xml = formatXml(doc);

    // Chunk should be text, not a comment
    expect(xml).toContain("<chunk># Heading");
    expect(xml).not.toContain("<!--");
    expect(xml).not.toContain("CDATA");
  });

  it("renders optional navigation attributes", () => {
    const doc = makeDoc({
      parent: "root",
      prev: "prev-slug",
      next: "next-slug",
    });
    const xml = formatXml(doc);

    expect(xml).toContain('parent="root"');
    expect(xml).toContain('prev="prev-slug"');
    expect(xml).toContain('next="next-slug"');
  });

  it("renders chunk content", () => {
    const doc = makeDoc({ chunk: "# Hello\n\nWorld" });
    const xml = formatXml(doc);

    expect(xml).toContain("<chunk>");
    expect(xml).toContain("# Hello");
    expect(xml).toContain("World");
  });

  it("omits chunk element when chunk is undefined", () => {
    const doc = makeDoc();
    const xml = formatXml(doc);

    expect(xml).not.toContain("<chunk>");
  });

  it("renders nested children", () => {
    const doc = makeDoc({
      children: [
        makeDoc({ slug: "child-1", title: "Child 1" }),
        makeDoc({ slug: "child-2", title: "Child 2" }),
      ],
    });
    const xml = formatXml(doc);

    expect(xml).toContain('slug="child-1"');
    expect(xml).toContain('title="Child 1"');
    expect(xml).toContain('slug="child-2"');
    expect(xml).toContain('title="Child 2"');
  });

  it("renders deeply nested trees", () => {
    const doc = makeDoc({
      slug: "root",
      depth: 2,
      children: [
        makeDoc({
          slug: "level-1",
          level: 1,
          depth: 1,
          parent: "root",
          children: [
            makeDoc({
              slug: "level-2",
              level: 2,
              depth: 0,
              parent: "level-1",
              parent: "level-1",
              children: [],
            }),
          ],
        }),
      ],
    });
    const xml = formatXml(doc);

    expect(xml).toContain('slug="root"');
    expect(xml).toContain('slug="level-1"');
    expect(xml).toContain('slug="level-2"');
  });
});

describe("formatYaml", () => {
  it("serializes an object to YAML", () => {
    const data = { key: "value", nested: { a: 1 } };
    const yaml = formatYaml(data);

    expect(yaml).toContain("key: value");
    expect(yaml).toContain("nested:");
    expect(yaml).toContain("a: 1");
  });

  it("serializes arrays", () => {
    const data = { items: ["a", "b", "c"] };
    const yaml = formatYaml(data);

    expect(yaml).toContain("- a");
    expect(yaml).toContain("- b");
    expect(yaml).toContain("- c");
  });

  it("handles null values", () => {
    const data = { key: null };
    const yaml = formatYaml(data);

    expect(yaml).toContain("key: null");
  });
});
