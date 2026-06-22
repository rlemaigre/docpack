import path from "node:path";

/**
 * Map from normalized relative file paths to their docpack slugs.
 * Built from the list of ingested files before rewriting begins.
 */
export interface SlugRegistry {
  /** Look up a slug by normalized relative path. */
  resolve(relPath: string): string | undefined;
}

/**
 * Build a slug registry from a list of file entries.
 *
 * Maps normalized relative paths (forward slashes) to their resolved slugs.
 * Handles both `.md` and `.markdown` extensions.
 * Also indexes paths without extensions so `path/to/file` resolves if
 * `path/to/file.md` exists.
 *
 * @param files - List of ingested file entries with their paths and slugs.
 * @returns Slug registry for link resolution.
 */
export function buildSlugRegistry(
  files: Array<{ relPath: string; slug: string }>,
): SlugRegistry {
  const map = new Map<string, string>();

  for (const file of files) {
    const normalized = file.relPath.replace(/\\/g, "/");
    map.set(normalized, file.slug);

    // Index without extension so `[](path/to/file)` resolves to `path/to/file.md`
    const withoutExt = normalized.replace(/\.(md|markdown)$/i, "");
    if (!map.has(withoutExt)) {
      map.set(withoutExt, file.slug);
    }
  }

  return {
    resolve(relPath: string): string | undefined {
      const normalized = relPath.replace(/\\/g, "/");
      return map.get(normalized);
    },
  };
}

/**
 * Rewrite Markdown links in chunk content.
 *
 * Replaces relative `.md` links that resolve to ingested files with
 * `docpack://slug` references. External links and broken links are left as-is.
 *
 * Handles:
 * - `[](path/to/file.md)` → `[](docpack://slug)`
 * - `[](path/to/file.md#heading)` → `[](docpack://slug#heading)`
 * - `[](path/to/file.md "Title")` → `[](docpack://slug "Title")`
 * - `![](image.md)` → `![](docpack://slug)` (images referenced as md files)
 * - `[](path/to/file)` → resolves if `path/to/file.md` exists
 *
 * Leaves untouched:
 * - External URLs: `[](https://...)`
 * - Fragment-only links: `[](#heading)`
 * - Autolinks: `<https://...>`
 * - Broken links (target not in registry)
 *
 * @param content - Markdown chunk content.
 * @param sourceRelPath - Relative path of the source file (for resolving relative links).
 * @param registry - Slug registry for resolving targets.
 * @returns Content with rewritten links.
 */
export function rewriteLinks(
  content: string,
  sourceRelPath: string,
  registry: SlugRegistry,
): string {
  // Match markdown links: [](url) or [](url "title")
  // Also matches image links: ![](url)
  // Captures: optional !, link content (no ] allowed), url (no ) allowed)
  // eslint-disable-next-line sonarjs/super-linear-regex
  const linkRe = new RegExp("(!?)\\[([^\\]]*)\\]\\(([^)]*)\\)", "g");

  const sourceDir = sourceRelPath.includes("/")
    ? sourceRelPath.slice(0, sourceRelPath.lastIndexOf("/") + 1)
    : "";

  let result = "";
  let lastEnd = 0;
  let m: RegExpExecArray | null;

  while ((m = linkRe.exec(content)) !== null) {
    const replacement = resolveLinkMatch(m, sourceDir, registry);
    result += content.slice(lastEnd, m.index!) + replacement;
    lastEnd = m.index! + m[0].length;
  }

  result += content.slice(lastEnd);
  return result;
}

/** Resolve a single link match. Returns rewritten link or original if unchanged. */
function resolveLinkMatch(
  m: RegExpExecArray,
  sourceDir: string,
  registry: SlugRegistry,
): string {
  const [, bang, linkContent, rawUrl] = m;
  const { href, fragment, title } = parseLinkUrl(rawUrl);

  // Skip empty, external, or autolink URLs
  if (!href || isExternal(href) || isAutolink(href)) {
    return m[0];
  }

  const targetRelPath = path.posix.normalize(sourceDir + href);
  const slug = registry.resolve(targetRelPath);

  if (!slug) {
    return m[0]; // broken link, leave as-is
  }

  let newUrl = fragment ? `docpack://${slug}#${fragment}` : `docpack://${slug}`;
  if (title) {
    newUrl += ` ${title}`;
  }
  return `${bang}[${linkContent}](${newUrl})`;
}

// ---------------------------------------------------------------------------
// URL parsing helpers
// ---------------------------------------------------------------------------

/** Parse a link URL into href, optional fragment, and optional title. */
function parseLinkUrl(raw: string): { href: string; fragment: string | null; title: string | null } {
  // Strip trailing title: `url "title"` or `url 'title'`
  let url = raw.trim();
  let title: string | null = null;

  // Use indexOf to avoid regex backtracking on title parsing
  const lastSpace = url.lastIndexOf(" ");
  if (lastSpace > 0) {
    const afterSpace = url.slice(lastSpace + 1);
    if ((afterSpace.startsWith('"') && afterSpace.endsWith('"')) ||
        (afterSpace.startsWith("'") && afterSpace.endsWith("'"))) {
      title = afterSpace;
      url = url.slice(0, lastSpace).trim();
    }
  }

  // Split fragment
  const hashIdx = url.indexOf("#");
  if (hashIdx !== -1) {
    return {
      href: url.slice(0, hashIdx),
      fragment: url.slice(hashIdx + 1),
      title,
    };
  }

  return { href: url, fragment: null, title };
}

/** Check if a URL is external (has a scheme or is absolute). */
function isExternal(href: string): boolean {
  // Has a scheme: https://, mailto:, etc.
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return true;
  // Protocol-relative
  if (href.startsWith("//")) return true;
  // Root-relative
  if (href.startsWith("/")) return true;
  return false;
}

/** Check if a URL looks like an autolink target. */
function isAutolink(href: string): boolean {
  return href.startsWith("<") && href.endsWith(">");
}
