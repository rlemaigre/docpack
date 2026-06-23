import { create } from "xmlbuilder";
import YAML from "yaml";
import type { Document } from "../query";

/**
 * Serialize one or more Document trees to XML.
 *
 * Produces a <documents> root element containing one or more <document>
 * child elements. Each <document> has attributes (slug, title, level,
 * depth, parent, prev, next) and child elements (<chunk>, <children>).
 *
 * @param docs - Document tree(s) to serialize.
 * @returns XML string.
 */
export function formatXml(...docs: Document[]): string {
  const root = create("documents", { encoding: "UTF-8" });

  for (const doc of docs) {
    buildDocumentElement(root, doc);
  }

  return root.end({ pretty: true, indent: "  " });
}

/** Build a <document> element under the given parent, recursing into children. */
function buildDocumentElement(parent: ReturnType<typeof create>, doc: Document): void {
  const el = parent.ele("document");
  applyAttributes(el, doc);

  if (doc.chunk !== undefined) {
    el.ele("chunk").txt(doc.chunk);
  }

  const childrenEl = el.ele("children");
  for (const child of doc.children) {
    buildDocumentElement(childrenEl, child);
  }
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
