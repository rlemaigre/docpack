"""
Convert PowerBuilder (Appeon) PDFs to Markdown.

These PDFs share a common layout:
- Helvetica-Bold 20.0 for H2 chapter headings
- Helvetica-Bold 14.0 for H3 headings
- Helvetica-Bold 12.0 for H4 headings
- Helvetica-Bold 10.0 for H5+ headings
- Running header at y≈34: "Chapter Title" + "Appeon PowerBuilder® 2019"
- Running footer at y≈793: "Users Guide" + "Page N"
- Single-line headings (number and title on same line)
- "In this section:" summary blocks with [page N] references

Strategy:
1. Use embedded TOC for heading levels.
2. Extract page text with dict mode, skip headers/footers by y-position.
3. Match TOC headings against page text using normalized comparison.
4. Interleave headings and body in y-order.
5. Detect and skip "In this section:" summary blocks.
"""

import fitz
import re
from pathlib import Path

INPUT_DIR = Path("scratch/docs")
OUTPUT_DIR = Path("scratch/docs-md")

# ---------------------------------------------------------------------------
# Header / footer detection
# ---------------------------------------------------------------------------

PB_HEADER_KEYWORDS = frozenset((
    'appeon powerbuilder',
))

PB_FOOTER_KEYWORDS = frozenset((
    'users guide',
    'powerscript reference',
    'datawindow reference',
    'datawindow programmers guide',
    'objects and controls',
    'connection reference',
))


def _is_header_footer_line(text: str, y: float, page_height: float) -> bool:
    """Detect running headers and footers by y-position and content."""
    text_lower = text.lower().strip()

    # Position-based: top 45px or bottom 55px
    if y < 45 or y > page_height - 55:
        return True

    if any(kw in text_lower for kw in PB_HEADER_KEYWORDS):
        return True
    if any(kw in text_lower for kw in PB_FOOTER_KEYWORDS):
        return True

    # "Page N" footer lines (standalone page numbers)
    if re.match(r'^page\s+\d+$', text_lower):
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
    Uses exact match or startswith with a minimum length guard.
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
    """Extract text lines as (y, font_size, text), skipping headers/footers."""
    page_height = page.rect.height
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
            if text and not _is_header_footer_line(text, y, page_height):
                result.append((y, max_font, text))
    return result


def _is_contents_page(page_lines: list[tuple[float, float, str]]) -> bool:
    """
    Detect table-of-contents pages.
    TOC pages have dot leaders or [page N] on most lines (>50%).
    Summary blocks have these patterns on only a few lines.
    """
    dot_leader_re = re.compile(r'\.{3,}')
    page_ref_re = re.compile(r'\[page\s+\d+\]')
    total = 0
    ref_count = 0
    for _, _, text in page_lines:
        total += 1
        if dot_leader_re.search(text) or page_ref_re.search(text):
            ref_count += 1
    if total < 5:
        return False
    return ref_count / total > 0.5


# ---------------------------------------------------------------------------
# Section summary detection
# ---------------------------------------------------------------------------

_IN_THIS_SECTION_RE = re.compile(
    r'^(in this section|in this chapter|in this part)\s*:?\s*$',
    re.IGNORECASE,
)
_PAGE_REF_RE = re.compile(r'\[page\s+\d+\]')


def _is_summary_entry(text: str) -> bool:
    """Check if a line is a summary entry with [page N] reference."""
    return bool(_PAGE_REF_RE.search(text))


def _detect_summary_blocks(
    items: list[tuple[float, str, str, int]],
    in_summary_block: bool = False,
) -> tuple[set[int], bool]:
    """
    Detect 'In this section:' summary blocks and return the set of
    body line indices that belong to them, plus whether we're still
    in a summary block at the end of this page.
    """
    summary_indices: set[int] = set()
    in_summary = in_summary_block

    for i, (y, item_type, content, level) in enumerate(items):
        if item_type == 'heading':
            in_summary = False
            continue

        if _IN_THIS_SECTION_RE.match(content):
            in_summary = True
            summary_indices.add(i)
            continue

        # Detect summary continuation from previous page
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

def powerbuilder_to_markdown(doc: fitz.Document, toc_entries: list) -> str:
    """
    Build Markdown from embedded TOC + dict-mode page extraction.
    """
    if not toc_entries:
        return '\n'.join(page.get_text() for page in doc)

    # Filter TOC: remove Contents and title page entries
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

    toc_by_page: dict[int, list[tuple[int, str]]] = {}
    for level, title, page_num in filtered_toc:
        toc_by_page.setdefault(page_num - 1, []).append((level, title))

    lines: list[str] = []
    body_buf: list[str] = []
    in_summary_block = False

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
            for i, (_, _, text) in enumerate(page_lines):
                if i in heading_line_indices:
                    continue
                if _texts_match(text, title):
                    heading_line_indices.add(i)
                    heading_map[i] = (level, title)
                    found = True
                    break

            # Multi-line match (for "Part I." style headings)
            if not found:
                for window_size in range(2, 4):
                    for start in range(len(page_lines) - window_size + 1):
                        if any(j in heading_line_indices for j in range(start, start + window_size)):
                            continue
                        combined = ' '.join(
                            page_lines[j][2] for j in range(start, start + window_size)
                        )
                        combined_norm = _normalize(combined)
                        title_norm = _normalize(title)
                        if combined_norm == title_norm:
                            for j in range(start, start + window_size):
                                heading_line_indices.add(j)
                                heading_map[j] = (level, title)
                            found = True
                            break
                    if found:
                        break

        # Build interleaved list
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

        last_heading: str | None = None
        for idx, (y, item_type, content, level) in enumerate(items):
            if idx in summary_indices:
                continue
            if item_type == 'heading':
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
    cleaned_lines = []
    standalone_num_re = re.compile(r'^\d+$')
    page_num_re = re.compile(r'^page\s+\d+$', re.IGNORECASE)
    figure_ref_re = re.compile(r'^figure\s*[:\d]', re.IGNORECASE)
    for line in text.split('\n'):
        stripped = line.strip()
        if not stripped:
            cleaned_lines.append('')
        elif standalone_num_re.match(stripped):
            continue
        elif page_num_re.match(stripped):
            continue
        elif figure_ref_re.match(stripped):
            continue
        else:
            cleaned_lines.append(line)

    result = '\n'.join(cleaned_lines)
    # Normalize double spaces from PDF cross-references (e.g., "see  Working")
    # Only collapse multiple spaces within a line, not across lines
    result = '\n'.join(re.sub(r' {2,}', ' ', line) for line in result.split('\n'))
    result = re.sub(r'\n{4,}', '\n\n\n', result)
    result = '\n'.join(line.rstrip() for line in result.split('\n'))
    return result.strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def convert_pdf(pdf_path: Path, output_dir: Path) -> Path:
    """Convert a single PowerBuilder PDF to Markdown."""
    rel = pdf_path.relative_to(INPUT_DIR)
    md_path = output_dir / rel.with_suffix('.md')
    md_path.parent.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(str(pdf_path))
    toc_entries = doc.get_toc()

    md_content = powerbuilder_to_markdown(doc, toc_entries)
    doc.close()

    md_content = _clean_markdown(md_content)
    md_path.write_text(md_content, encoding='utf-8')
    return md_path


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    pb_dir = INPUT_DIR / "PowerBuilder"
    pdfs = sorted(pb_dir.rglob("*.pdf"))
    errors_pdf = pb_dir / "PowerBuilder_2019_Errors-en.pdf"
    pdfs = [p for p in pdfs if p != errors_pdf]

    if not pdfs:
        print("No PowerBuilder PDFs found.")
        return

    print(f"Found {len(pdfs)} PowerBuilder PDF(s):")
    for pdf_path in pdfs:
        print(f"\nProcessing: {pdf_path.name}")
        convert_pdf(pdf_path, OUTPUT_DIR)
        print(f"  Done.")

    print("\nAll done.")


if __name__ == "__main__":
    main()
