import slugify from "@sindresorhus/slugify";

/**
 * Convert arbitrary text to a URL-safe slug.
 *
 * Uses @sindresorhus/slugify with decamelize: false.
 * Returns empty string for input that produces no ASCII output (e.g. CJK, punctuation-only).
 * Callers must handle the empty-string case (e.g. fallback to _N index-based slug).
 *
 * @param text - Heading text, filename, or directory name to slugify.
 * @returns URL-safe slug, or empty string if the input transliterates to nothing.
 */
export function toSlug(text: string): string {
  const s = slugify(text, { decamelize: false });
  return s || "";
}
