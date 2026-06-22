import fg from "fast-glob";
import * as mime from "mime-types";
import path from "node:path";

/**
 * Filesystem node representing a directory or file in the input tree.
 *
 * Built by walkFS from glob results. Parent pointers and indices
 * are assigned after the full tree is constructed.
 */
export interface FSNode {
  type: "directory" | "file";
  name: string;
  path: string;
  absolutePath: string;
  parent: FSNode | null;
  children: FSNode[];
  index: number;
  mime?: string;
}

/**
 * Walk a directory tree and return the top-level FSNode children.
 *
 * Uses fast-glob to discover files and directories, then assembles them
 * into a tree with parent pointers and sorted children.
 *
 * Directories are sorted before files. Siblings use numeric locale ordering.
 * Top-level nodes have parent: null (the internal virtual root is discarded).
 *
 * @param input - Path to the input file or directory.
 * @param include - Glob pattern for file discovery. Passed to fast-glob.
 * @returns Array of top-level FSNode children.
 */
export function walkFS(input: string, include?: string): FSNode[] {
  const absoluteInput = path.resolve(input);
  const pattern = include ?? "**/*";

  const entries = fg.globSync(pattern, {
    cwd: absoluteInput,
    objectMode: true,
    onlyFiles: false,
    dot: true,
  });

  const dirNodes = new Map<string, FSNode>();

  buildDirectoryNodes(entries, absoluteInput, dirNodes);
  wireDirectoryParents(dirNodes);

  const virtualRoot = ensureVirtualRoot(dirNodes, absoluteInput);
  wireTopLevelDirectoriesToRoot(dirNodes, virtualRoot);
  attachFileNodes(entries, absoluteInput, dirNodes, virtualRoot);
  sortAndIndexTree(virtualRoot);

  // Detach top-level children from internal virtual root
  for (const child of virtualRoot.children) {
    child.parent = null;
  }

  return virtualRoot.children;
}

// ---------------------------------------------------------------------------
// Tree construction helpers
// ---------------------------------------------------------------------------

/** Create directory nodes from glob entries. */
function buildDirectoryNodes(
  entries: fg.Entry[],
  absoluteInput: string,
  dirNodes: Map<string, FSNode>,
): void {
  for (const entry of entries) {
    if (!entry.dirent.isDirectory()) continue;

    let rel = normalizePath(entry.path);
    while (rel.endsWith("/")) rel = rel.slice(0, -1);
    const name = rel ? rel.slice(rel.lastIndexOf("/") + 1) : "";

    dirNodes.set(rel, {
      type: "directory",
      name,
      path: rel || "",
      absolutePath: path.join(absoluteInput, rel || "."),
      parent: null,
      children: [],
      index: 0,
    });
  }
}

/** Wire parent pointers between directory nodes. */
function wireDirectoryParents(dirNodes: Map<string, FSNode>): void {
  for (const [dirPath, node] of dirNodes) {
    if (dirPath === "") continue;

    const parentPath = getParentPath(dirPath);
    const parentNode = dirNodes.get(parentPath);
    if (parentNode) {
      node.parent = parentNode;
      parentNode.children.push(node);
    }
  }
}

/** Ensure a virtual root node exists for orphan wiring. */
function ensureVirtualRoot(
  dirNodes: Map<string, FSNode>,
  absoluteInput: string,
): FSNode {
  return dirNodes.get("") ?? {
    type: "directory",
    name: "",
    path: "",
    absolutePath: absoluteInput,
    parent: null,
    children: [],
    index: 0,
  };
}

/** Wire directories whose parent is the root but were missed. */
function wireTopLevelDirectoriesToRoot(
  dirNodes: Map<string, FSNode>,
  virtualRoot: FSNode,
): void {
  if (!dirNodes.has("")) {
    dirNodes.set("", virtualRoot);
  }

  for (const [dirPath, node] of dirNodes) {
    if (dirPath === "" || node.parent !== null) continue;

    const parentPath = getParentPath(dirPath);
    if (parentPath === "") {
      node.parent = virtualRoot;
      virtualRoot.children.push(node);
    }
  }
}

/** Create file nodes and attach them to their parent directory. */
function attachFileNodes(
  entries: fg.Entry[],
  absoluteInput: string,
  dirNodes: Map<string, FSNode>,
  virtualRoot: FSNode,
): void {
  for (const entry of entries) {
    if (!entry.dirent.isFile()) continue;

    const rel = normalizePath(entry.path);
    const parentPath = getParentPath(rel);
    const name = parentPath ? rel.slice(parentPath.length + 1) : rel;

    const fileNode: FSNode = {
      type: "file",
      name,
      path: rel,
      absolutePath: path.join(absoluteInput, rel),
      parent: null,
      children: [],
      index: 0,
      mime: mime.lookup(name) || undefined,
    };

    const parentNode = parentPath ? dirNodes.get(parentPath) : virtualRoot;
    if (parentNode) {
      fileNode.parent = parentNode;
      parentNode.children.push(fileNode);
    }
  }
}

/** Recursively sort children (dirs first, then files, numeric locale) and assign indices. */
function sortAndIndexTree(node: FSNode): void {
  node.children.sort((a, b) => {
    if (a.type !== b.type) return a.type === "directory" ? -1 : 1;
    return a.name.localeCompare(b.name, undefined, { numeric: true });
  });
  node.children.forEach((child, i) => {
    child.index = i;
    sortAndIndexTree(child);
  });
}

// ---------------------------------------------------------------------------
// Path utilities
// ---------------------------------------------------------------------------

/** Normalize path separators to forward slashes. */
function normalizePath(p: string): string {
  return p.replace(/\\/g, "/");
}

/** Extract parent directory path from a relative path. Returns empty string for root-level. */
function getParentPath(rel: string): string {
  const slashIdx = rel.lastIndexOf("/");
  return slashIdx === -1 ? "" : rel.slice(0, slashIdx);
}
