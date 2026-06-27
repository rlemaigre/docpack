# docpack

Turn a collection of files into a portable, queryable knowledge base.

docpack is a library for creating queryable knowledge bases from files. It provides primitives for files ingestion, transformation, and eventually produces an document index as an SQLite database, and an API to query it.

---

## Node

A single node without its subtree.

```ts
interface Node<T = Record<string, unknown>> {
  slug: string;
  title: string | null;
  chunk: string | null;
  meta: T;
}
```

## Document

A node in the knowledge base tree.

```ts
interface Document<T = Record<string, unknown>> {
  slug: string;
  title: string | null;
  chunk: string | null;
  meta: T;
  children: Document<T>[];
}
```

## KB

The knowledge base interface. Provides document access and traversal.

```ts
interface KB<T = Record<string, unknown>> {
  // Entrypoints
  roots(): string[];

  // Partial document access
  fetchNode(slug: string): Node<T> | null;
  fetchNodes(slugs: string[]): Node<T>[];
  fetchParent(slug: string): Node<T> | null;
  fetchAncestors(slug: string): Node<T>[];
  fetchChildren(slug: string): Node<T>[];
  fetchDescendants(slug: string): Node<T>[];

  // Full document access
  fetchDocument(slug: string): Document<T> | null;

  // Transversal query API
  search(params: SearchParams): SearchHit[];

  // Lifecycle
  close(): void;
}
```

`fetchAncestors` returns nodes from root downward to the immediate parent. `fetchDescendants` returns nodes in pre-order (depth-first, siblings in document order).

## TOC

Standalone function that reduces a Document tree to a skeleton (slugs, titles, clipped subtrees).

```ts
function toc(doc: Document, depth?: number): TOC;

interface TOC {
  slug: string;
  title: string | null;
  children: TOC[] | Summary;
}

interface Summary {
  chunkCount: number;
  totalBytes: number;
}
```

## TreeIterator

Pre-order tree traversal. Each node carries its own children iterator. Structure is preserved.

```ts
interface TreeIterator<T> extends Iterator<IterNode<T>> {
  // inherits next(): IteratorResult<IterNode<T>>
}

interface IterNode<T> {
  node: Node<T>;
  children: TreeIterator<T>;
}
```

Pruning a subtree: don't iterate its `children`.

## Operator

Transforms a TreeIterator into another TreeIterator.

Curried form: configuration returns an Operator, which is then applied to a TreeIterator.

```ts
interface Operator<T, U = T> {
  (src: TreeIterator<T>): TreeIterator<U>;
}

function pipe<T, U>(a: Operator<T, U>): Operator<T, U>;
function pipe<T, U, V>(a: Operator<T, U>, b: Operator<U, V>): Operator<T, V>;
// ... variadic
```

Operators that need random access (e.g., `resolveCollisions`, `rewriteLinks`) internally materialize to a KB, transform, then stream back.

## Materialize

The only way to create a KB on disk. Consumes a TreeIterator and writes SQLite.

```ts
function materialize<T>(source: TreeIterator<T>, output: string): KB<T>;
```

`stream(kb): TreeIterator` is the reverse — convenience for transformation pipelines.

## Ingestion

Produce a TreeIterator from files.

```ts
interface FileMeta {
  content: string;
  absolutePath: string;
  relativePath: string;
  basename: string;
  extname: string;
  size: number;
  mtime: number;
}

function streamFile(path: string): TreeIterator<FileMeta>;
function streamDir(path: string, glob?: string): TreeIterator<FileMeta>;
```

Node slug is `absolutePath`. Title and chunk are null — populated by operators.

## Built-in Operators

```ts
function parseMarkdown<T>(schema: z.ZodType<T>): Operator<FileMeta, T>;
function parseHeadings<T>(): Operator<T>;
function insertIntroductions<T>(): Operator<T>;
function resolveCollisions<T>(strategy?: Strategy): Operator<T>;
function rewriteLinks<T>(): Operator<T>;
function summarizeFile<T>(path: string): Operator<T>;
function summarizeLLM<T>(opts: SummarizeLLMOptions): Operator<T>;
```

## Search

Full-text search via FTS5.

```ts
interface SearchParams {
  query: string;
  limit: number;
  offset: number;
}

interface SearchHit {
  slug: string;
  snippet: string;
  rank: number;
}
```
