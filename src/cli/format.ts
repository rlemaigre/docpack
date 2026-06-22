import { create } from "xmlbuilder";
import YAML from "yaml";
import type { Document } from "../query";

/**
 * Serialize a Document tree to XML.
 *
 * Produces a single <document> root element with attributes
 * (slug, title, level, depth, parent, prev, next) and child elements
 * (<chunk>, <children>).
 *
 * @param doc - Document tree to serialize.
 * @returns XML string.
 */
export function formatXml(doc: Document): string {
  const root = create("document", { encoding: "UTF-8" });

  // Apply attributes directly to the root element
  applyAttributes(root, doc);

  // Optional chunk content as text node
  if (doc.chunk !== undefined) {
    root.ele("chunk").txt(doc.chunk);
  }

  // Children element (always present, may be empty)
  const childrenEl = root.ele("children");
  for (const child of doc.children) {
    buildChildElement(childrenEl, child);
  }

  return root.end({ pretty: true, indent: "  " });
}

/** Apply document attributes to an XML element. */
function applyAttributes(el: ReturnType<typeof create>, doc: Document): void {
  el.att("slug", doc.slug);
  el.att("title", doc.title);
  el.att("level", doc.level);
  el.att("depth", doc.depth);

  if (doc.parent !== undefined) el.att("parent", doc.parent);
  if (doc.prev !== undefined) el.att("prev", doc.prev);
  if (doc.next !== undefined) el.att("next", doc.next);
}

/** Build a child <document> element and recurse into its subtree. */
function buildChildElement(parent: ReturnType<typeof create>, doc: Document): void {
  const el = parent.ele("document");

  applyAttributes(el, doc);

  if (doc.chunk !== undefined) {
    el.ele("chunk").txt(doc.chunk);
  }

  const childrenEl = el.ele("children");
  for (const child of doc.children) {
    buildChildElement(childrenEl, child);
  }
}

/**
 * Serialize data to YAML.
 *
 * Uses lineWidth: 0 to disable line wrapping.
 *
 * @param data - Data to serialize.
 * @returns YAML string.
 */
export function formatYaml(data: unknown): string {
  return YAML.stringify(data, { lineWidth: 0 });
}
