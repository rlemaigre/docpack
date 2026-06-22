import { describe, it, expect } from "vitest";
import { toSlug } from "../src/utils/slug";

describe("toSlug", () => {
  it("lowercases and hyphenates", () => {
    expect(toSlug("Hello World")).toBe("hello-world");
  });

  it("handles special characters", () => {
    expect(toSlug("Foo & Bar")).toBe("foo-and-bar");
  });

  it("returns empty string for CJK-only input", () => {
    expect(toSlug("你好世界")).toBe("");
  });

  it("returns empty string for punctuation-only input", () => {
    expect(toSlug("!@#$%")).toBe("");
  });

  it("does not decamelize by default", () => {
    expect(toSlug("fooBar")).toBe("foobar");
  });

  it("handles leading/trailing whitespace", () => {
    expect(toSlug("  Hello  ")).toBe("hello");
  });

  it("converts dots to dashes (slugify behavior)", () => {
    expect(toSlug("my-file.md")).toBe("my-file-md");
  });
});
