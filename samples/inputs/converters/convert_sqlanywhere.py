"""
Convert SQL Anywhere PDFs (and the mislabeled Errors PDF) to Markdown.

These PDFs share a common layout:
- BentonSans-Bold 20.0 for H2 chapter headings
- BentonSans-Bold 15.0 for ALL deeper heading levels (H3 through H8)
- Running footer at y>780 with font 6.0
- Multi-line headings: number on one line, title text on the next (within 5px)
- Section summary blocks ("In this section:") with [page N] references

Strategy:
1. Use embedded TOC for heading levels (font alone can't distinguish H3 from H8).
2. Extract page text with dict mode, skip footers by y-position and font.
3. Match TOC headings against page text using normalized comparison.
4. Build structured items (headings + body) in y-order.
5. Detect and skip "In this section:" summary blocks.
"""

import fitz
import re
from pathlib import Path

INPUT_DIR = Path("scratch/docs")
OUTPUT_DIR = Path("scratch/docs-md")

# ---------------------------------------------------------------------------
# Footer / header detection
# ---------------------------------------------------------------------------

def _is_footer_line(y: float, font_size: float) -> bool:
    """Detect footer lines by y-position and font size."""
    if y > 780:
        return True
    if font_size < 8:
        return True
    return False


# ---------------------------------------------------------------------------
# Text normalization and matching
# ---------------------------------------------------------------------------

def _normalize(text: str) -> str:
    """Normalize whitespace for comparison."""
    return re.sub(r'[\s\xa0]+', ' ', text).strip().lower()


def _texts_match(a: str, b: str) -> bool:
    """
    Check if two text strings match for heading purposes.
    Uses exact match or startswith with a minimum length guard
    to avoid false positives like "1" matching "1 SQL Anywhere...".
    """
    a_norm = _normalize(a)
    b_norm = _normalize(b)
    if a_norm == b_norm:
        return True
    if len(a_norm) < 3 or len(b_norm) < 3:
        return False
    if a_norm.startswith(b_norm) or b_norm.startswith(a_norm):
        shorter = min(len(a_norm), len(b_norm))
        longer = max(len(a_norm), len(b_norm))
        return shorter / longer >= 0.5
    return False


# ---------------------------------------------------------------------------
# Page text extraction
# ---------------------------------------------------------------------------

def _extract_page_lines(page: fitz.Page) -> list[tuple[float, float, str]]:
    """
    Extract text lines from a page as (y, font_size, text), skipping footers.
    """
    blocks = page.get_text('dict', flags=fitz.TEXT_PRESERVE_WHITESPACE)['blocks']
    result: list[tuple[float, float, str]] = []
    for b in blocks:
        if b.get('type') != 0:
            continue
        for line in b.get('lines', []):
            y = line['bbox'][1]
            spans = line.get('spans', [])
            if not spans:
                continue
            text = ' '.join(s['text'] for s in spans).strip()
            max_font = max(s['size'] for s in spans)
            if text and not _is_footer_line(y, max_font):
                result.append((y, max_font, text))
    return result


def _is_contents_page(page_lines: list[tuple[float, float, str]]) -> bool:
    """
    Detect table-of-contents pages by [page N] patterns.
    TOC pages have [page N] on most lines (>50% of non-empty lines).
    Summary blocks have [page N] on only a few lines mixed with other content.
    """
    page_ref_re = re.compile(r'\[page\s+\d+\]')
    total = 0
    ref_count = 0
    for _, _, text in page_lines:
        total += 1
        if page_ref_re.search(text):
            ref_count += 1
    if total < 5:
        return False
    return ref_count / total > 0.5  # >50% of lines have page refs = TOC page


# ---------------------------------------------------------------------------
# Section summary detection
# ---------------------------------------------------------------------------

_IN_THIS_SECTION_RE = re.compile(
    r'^(in this section|in this chapter|in this part)\s*:?\s*$',
    re.IGNORECASE,
)
_PAGE_REF_RE = re.compile(r'\[page\s+\d+\]')
_RELATED_INFO_RE = re.compile(r'^related\s+information\s*$', re.IGNORECASE)
_NAV_LINK_RE = re.compile(
    r'^(task\s+overview|previous\s+task|next\s+task)\s*:',
    re.IGNORECASE,
)


def _is_summary_entry(text: str) -> bool:
    """Check if a line is a summary entry with [page N] reference."""
    return bool(_PAGE_REF_RE.search(text))


def _detect_summary_blocks(
    items: list[tuple[float, str, str, int]],
    in_summary_block: bool = False,
) -> tuple[set[int], bool]:
    """
    Detect 'In this section:' summary blocks, 'Related Information' blocks,
    and navigation links, and return the set of body line indices that
    belong to them, plus whether we're still in a summary block at the end
    of this page.

    Returns (summary_indices, still_in_summary).
    """
    summary_indices: set[int] = set()
    in_summary = in_summary_block

    for i, (y, item_type, content, level) in enumerate(items):
        if item_type == 'heading':
            in_summary = False
            continue

        # Detect "In this section:" blocks
        if _IN_THIS_SECTION_RE.match(content):
            in_summary = True
            summary_indices.add(i)
            continue

        # Detect "Related Information" blocks
        if _RELATED_INFO_RE.match(content):
            in_summary = True
            summary_indices.add(i)
            continue

        # Detect navigation links (Previous/Next task)
        if _NAV_LINK_RE.match(content):
            summary_indices.add(i)
            continue

        # Detect summary continuation: if page starts with [page N] entries
        # and we haven't seen a heading yet, treat as summary continuation
        if not in_summary and i < 5 and _is_summary_entry(content):
            in_summary = True
            summary_indices.add(i)
            continue

        if in_summary:
            summary_indices.add(i)

    return summary_indices, in_summary


# ---------------------------------------------------------------------------
# TOC-based conversion
# ---------------------------------------------------------------------------

def sqlanywhere_to_markdown(doc: fitz.Document, toc_entries: list) -> str:
    """
    Build Markdown from embedded TOC + dict-mode page extraction.
    """
    if not toc_entries:
        return '\n'.join(page.get_text() for page in doc)

    # Filter TOC: remove Contents/TOC pages and title page
    filtered_toc = []
    for level, title, page_num in toc_entries:
        title_lower = title.strip().lower()
        if title_lower in ('contents', 'content', 'table of contents', 'sommaire'):
            continue
        if level == 1 and page_num <= 1:
            continue
        filtered_toc.append((level, title, page_num))

    if not filtered_toc:
        return ''

    first_content_page = min(p for _, _, p in filtered_toc)

    # Build TOC lookup by page index (0-based)
    toc_by_page: dict[int, list[tuple[int, str]]] = {}
    for level, title, page_num in filtered_toc:
        toc_by_page.setdefault(page_num - 1, []).append((level, title))

    lines: list[str] = []
    body_buf: list[str] = []
    in_summary_block = False  # Track across pages

    def flush_body() -> None:
        nonlocal body_buf
        if body_buf:
            body_text = '\n'.join(body_buf).strip()
            if body_text:
                lines.append(body_text)
                lines.append("")
            body_buf = []

    for page_idx in range(doc.page_count):
        if page_idx < first_content_page - 1:
            continue

        page = doc[page_idx]
        page_lines = _extract_page_lines(page)

        if not page_lines:
            continue
        if _is_contents_page(page_lines):
            continue

        page_lines.sort(key=lambda x: x[0])

        toc_on_page = toc_by_page.get(page_idx, [])
        if not toc_on_page:
            # Still detect summary blocks on pages without TOC headings
            body_items: list[tuple[float, str, str, int]] = [
                (y, 'body', text, 0) for y, _, text in page_lines
            ]
            summary_indices, in_summary_block = _detect_summary_blocks(
                body_items, in_summary_block
            )
            for idx, (y, item_type, content, level) in enumerate(body_items):
                if idx not in summary_indices:
                    body_buf.append(content)
            flush_body()
            continue

        # Match TOC headings against page lines
        heading_line_indices: set[int] = set()
        heading_map: dict[int, tuple[int, str]] = {}

        for level, title in toc_on_page:
            found = False
            # Single-line match
            for i, (_, _, text) in enumerate(page_lines):
                if i in heading_line_indices:
                    continue
                if _texts_match(text, title):
                    heading_line_indices.add(i)
                    heading_map[i] = (level, title)
                    found = True
                    break

            # Multi-line match (2-4 consecutive lines)
            # For multi-line matches, require exact match to avoid partial
            # matches like "1 SQL Anywhere Server - Database" matching
            # "1 SQL Anywhere Server - Database Administration and Security"
            if not found:
                for window_size in range(2, 5):
                    for start in range(len(page_lines) - window_size + 1):
                        if any(j in heading_line_indices for j in range(start, start + window_size)):
                            continue
                        combined = ' '.join(
                            page_lines[j][2] for j in range(start, start + window_size)
                        )
                        combined_norm = _normalize(combined)
                        title_norm = _normalize(title)
                        # Require exact match for multi-line windows
                        if combined_norm == title_norm:
                            for j in range(start, start + window_size):
                                heading_line_indices.add(j)
                                heading_map[j] = (level, title)
                            found = True
                            break
                    if found:
                        break

        # Build interleaved list: headings and body in y-order
        items: list[tuple[float, str, str, int]] = []
        for i, (y, font, text) in enumerate(page_lines):
            if i in heading_line_indices:
                lvl, ttl = heading_map[i]
                items.append((y, 'heading', ttl, lvl))
            else:
                items.append((y, 'body', text, 0))

        # Detect summary blocks (cross-page state)
        summary_indices, in_summary_block = _detect_summary_blocks(
            items, in_summary_block
        )

        # Emit in y-order, skipping summary block lines
        last_heading: str | None = None
        for idx, (y, item_type, content, level) in enumerate(items):
            if idx in summary_indices:
                continue
            if item_type == 'heading':
                # Deduplicate consecutive heading lines from multi-line matches
                if content == last_heading:
                    continue
                last_heading = content
                flush_body()
                capped = min(level, 4)
                lines.append(f"{'#' * capped} {content}")
                lines.append("")
            else:
                body_buf.append(content)
                last_heading = None

        flush_body()

    return '\n'.join(lines)


# ---------------------------------------------------------------------------
# Post-processing
# ---------------------------------------------------------------------------

def _clean_markdown(text: str) -> str:
    """Post-process markdown to remove artifacts."""
    lines = text.split('\n')
    cleaned_lines = []
    standalone_num_re = re.compile(r'^\d+$')
    # PDF icon characters used before Note/Caution/Tip blocks
    pdf_icons_re = re.compile(
        r'[\uE800-\uE8FF\uF000-\uFFFF]',
    )
    # Pattern for [page N] that may span two lines (e.g., "text [page\n861]")
    page_ref_re = re.compile(r'\s*\[page\s+\d+\]')
    trailing_page_re = re.compile(r'\s*\[page\s*$')
    standalone_page_ref = re.compile(r'^\d+\]\s*$')

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Check for trailing [page that continues on next line
        if trailing_page_re.search(line) and i + 1 < len(lines):
            next_line = lines[i + 1]
            if standalone_page_ref.match(next_line.strip()):
                # Merge: remove the [page from current line and skip next line
                line = trailing_page_re.sub('', line)
                i += 2
                stripped = line.strip()

        if not stripped:
            cleaned_lines.append('')
        elif standalone_num_re.match(stripped):
            i += 1
            continue
        else:
            # Strip inline [page N] cross-references
            line = page_ref_re.sub('', line)
            # Strip PDF icon characters
            line = pdf_icons_re.sub('', line)
            cleaned_lines.append(line)

        i += 1

    result = '\n'.join(cleaned_lines)
    result = re.sub(r'\n{4,}', '\n\n\n', result)
    result = '\n'.join(line.rstrip() for line in result.split('\n'))
    return result.strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def convert_pdf(pdf_path: Path, output_dir: Path) -> Path:
    """Convert a single SQL Anywhere PDF to Markdown."""
    rel = pdf_path.relative_to(INPUT_DIR)
    md_path = output_dir / rel.with_suffix('.md')
    md_path.parent.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(str(pdf_path))
    toc_entries = doc.get_toc()

    md_content = sqlanywhere_to_markdown(doc, toc_entries)
    doc.close()

    md_content = _clean_markdown(md_content)
    md_path.write_text(md_content, encoding='utf-8')
    return md_path


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    sqlanywhere_dir = INPUT_DIR / "SybaseSQLAnywhere"
    pdfs = sorted(sqlanywhere_dir.rglob("*.pdf"))

    errors_pdf = INPUT_DIR / "PowerBuilder" / "PowerBuilder_2019_Errors-en.pdf"
    if errors_pdf.exists():
        pdfs.append(errors_pdf)
    pdfs = sorted(set(pdfs))

    if not pdfs:
        print("No PDFs found.")
        return

    print(f"Found {len(pdfs)} SQL Anywhere PDF(s):")
    for pdf_path in pdfs:
        print(f"\nProcessing: {pdf_path.name}")
        convert_pdf(pdf_path, OUTPUT_DIR)
        print(f"  Done.")

    print("\nAll done.")


if __name__ == "__main__":
    main()
