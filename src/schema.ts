import type { Database } from "better-sqlite3";

/**
 * Create all tables, virtual tables, and indexes required by docpack.
 *
 * Safe to call on an existing database - uses IF NOT EXISTS throughout.
 * The FTS5 virtual table is contentless (content=nodes), meaning it holds
 * its own copy of title/chunk data and must be synced explicitly after inserts.
 */
export function createSchema(db: Database): void {
  createNodesTable(db);
  createFTS5Table(db);
  createClosureTable(db);
  createRelationshipTables(db);
}

function createNodesTable(db: Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS nodes (
      slug        TEXT PRIMARY KEY,
      type        TEXT NOT NULL CHECK (type IN ('directory', 'file', 'section')),
      title       TEXT NOT NULL,
      parent_slug TEXT REFERENCES nodes(slug),
      idx         INTEGER NOT NULL,
      chunk       TEXT,
      summary     TEXT,
      UNIQUE (parent_slug, idx)
    )
  `);
}

function createFTS5Table(db: Database): void {
  db.exec(`
    CREATE VIRTUAL TABLE IF NOT EXISTS nodes_fts USING fts5(title, chunk, content='nodes')
  `);
}

function createClosureTable(db: Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS closure (
      ancestor   TEXT REFERENCES nodes(slug),
      descendant TEXT REFERENCES nodes(slug),
      depth      INTEGER NOT NULL,
      PRIMARY KEY (ancestor, descendant)
    )
  `);
}

function createRelationshipTables(db: Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS relationships (
      name   TEXT PRIMARY KEY,
      schema TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS relationship_instances (
      id     INTEGER PRIMARY KEY AUTOINCREMENT,
      relationship_name TEXT NOT NULL REFERENCES relationships(name),
      value  TEXT NOT NULL DEFAULT '{}'
    );

    CREATE TABLE IF NOT EXISTS relationship_params (
      instance_id INTEGER NOT NULL REFERENCES relationship_instances(id),
      role   TEXT NOT NULL,
      slug   TEXT NOT NULL REFERENCES nodes(slug),
      PRIMARY KEY(instance_id, role, slug)
    );

    CREATE INDEX IF NOT EXISTS idx_rel_params_slug ON relationship_params(slug)
  `);
}
