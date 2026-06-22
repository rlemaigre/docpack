// ATX heading regex: # through ###### followed by space and text.
const HEADING_RE = /^(#{1,6})\x20+(\S[^\n]*)$/;

/**
 * Internal heading node produced by the Markdown parser.
 *
 * One shape for all nodes - file root, sections, leaves.
 * The chunk field holds the node's self content only (not aggregated from children).
 */
export interface MDNode {
  title: string;
  chunk: string | null;
  parent: MDNode | null;
  children: MDNode[];
  index: number;
}

/**
 * Parse Markdown headings into a tree of MDNode nodes.
 *
 * Scans line-by-line with fenced code block awareness. No full Markdown parser
 * is used - converters produce imperfect Markdown and full parsers fail on
 * innocuous syntax mistakes.
 *
 * Root construction rules:
 * - No preamble + h1 exists -> root = h1 node (filename discarded).
 * - Preamble exists -> root = file node (title from filename, chunk = preamble).
 * - No headings at all -> root = file node (title from filename, chunk = all content).
 *
 * @param filename - Basename used as fallback title when no h1 promotes to root.
 * @param markdown - Raw Markdown string produced by the converter.
 * @returns Root MDNode representing the file or top-level heading.
 */
export function walkMD(filename: string, markdown: string): MDNode {
  const title = extractBasenameTitle(filename);
  const root = createRootNode(title);

  const result = scanLines(markdown, root);

  return applyH1Promotion(root, result.hasH1);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract a human-readable title from a filename (strip extension). */
function extractBasenameTitle(filename: string): string {
  const basename = filename.includes("/")
    ? filename.slice(filename.lastIndexOf("/") + 1)
    : filename;
  return basename.includes(".")
    ? basename.slice(0, basename.lastIndexOf("."))
    : basename;
}

/** Create the initial root node before scanning. */
function createRootNode(title: string): MDNode {
  return { title, chunk: null, parent: null, children: [], index: 0 };
}

/** Result of scanning markdown lines - tracks state for post-processing. */
interface ScanResult {
  hasH1: boolean;
}

/**
 * Scan markdown lines and build the heading tree under root.
 *
 * Handles fenced code blocks (triple backticks), indented code blocks (4+ spaces),
 * ATX headings, and trailing # trimming.
 */
function scanLines(markdown: string, root: MDNode): ScanResult {
  const stack: Array<{ node: MDNode; level: number }> = [];
  let current = root;
  let currentChunk: string[] = [];
  let inFencedCode = false;
  let hasH1 = false;

  for (const line of markdown.split("\n")) {
    if (handleCodeFence(line, current, currentChunk)) {
      inFencedCode = !inFencedCode;
      currentChunk.push(line);
      continue;
    }

    if (inFencedCode || isIndentedCode(line)) {
      currentChunk.push(line);
      continue;
    }

    const heading = parseHeading(line);
    if (!heading) {
      currentChunk.push(line);
      continue;
    }

    // Flush accumulated content to current node before switching
    flushChunk(current, currentChunk);
    currentChunk = [];

    if (heading.level === 1) hasH1 = true;

    const child = createHeadingNode(heading.title);
    attachHeading(child, heading.level, stack, root);
    current = child;
  }

  // Flush remaining content
  flushChunk(current, currentChunk);

  return { hasH1 };
}

/** Check if a line is a fenced code block delimiter (triple backticks). */
function handleCodeFence(line: string, _current: MDNode, chunk: string[]): boolean {
  return line.trimStart().startsWith("```");
}

/** Check if a line is an indented code block (4+ leading spaces). */
function isIndentedCode(line: string): boolean {
  return /^ {4}/.test(line);
}

/** Parse an ATX heading line. Returns level and trimmed title, or null. */
function parseHeading(line: string): { level: number; title: string } | null {
  const match = HEADING_RE.exec(line);
  if (!match) return null;

  const level = match[1].length;
  // Trim trailing # characters (e.g. "## Title ##" -> "Title")
  let title = match[2].trim();
  while (title.endsWith("#")) title = title.slice(0, -1).trimEnd();
  return { level, title };
}

/** Create a new heading node. Index is set by attachHeading after parent resolution. */
function createHeadingNode(title: string): MDNode {
  return {
    title,
    chunk: null,
    parent: null,
    children: [],
    index: 0, // set by attachHeading
  };
}

/**
 * Pop the heading stack to find the correct parent for a new heading,
 * then push the new heading onto the stack.
 */
function attachHeading(
  child: MDNode,
  level: number,
  stack: Array<{ node: MDNode; level: number }>,
  root: MDNode,
): void {
  // Pop entries at or above this heading level
  while (stack.length > 0 && stack[stack.length - 1].level >= level) {
    stack.pop();
  }

  if (stack.length === 0) {
    child.parent = root;
    child.index = root.children.length;
    root.children.push(child);
  } else {
    const parent = stack[stack.length - 1].node;
    child.parent = parent;
    child.index = parent.children.length;
    parent.children.push(child);
  }

  stack.push({ node: child, level });
}

/** Flush accumulated chunk lines to the current node. */
function flushChunk(node: MDNode, lines: string[]): void {
  if (lines.length > 0) {
    node.chunk = lines.join("\n").trim();
  }
}

// ---------------------------------------------------------------------------
// H1 promotion
// ---------------------------------------------------------------------------

/**
 * If the file has an h1 and no preamble, promote the first h1 to root.
 *
 * The h1 title replaces the filename-derived title. Its children are merged
 * into root's children. This matches the spec rule:
 * "No preamble + h1 exists -> root = h1 node (filename discarded)."
 */
function applyH1Promotion(root: MDNode, hasH1: boolean): MDNode {
  if (!hasH1 || root.chunk !== null || root.children.length === 0) {
    return root;
  }

  const h1Child = root.children[0];
  root.title = h1Child.title;
  root.chunk = h1Child.chunk;

  // Merge h1's children before any other root-level children
  const merged = [...h1Child.children, ...root.children.slice(1)];
  for (const child of h1Child.children) {
    child.parent = root;
  }
  root.children = merged;
  root.children.forEach((child, i) => { child.index = i; });

  return root;
}
