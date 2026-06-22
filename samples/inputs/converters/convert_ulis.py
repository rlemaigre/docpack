"""
Convert Guide ULIS PDF to Markdown using font-size heuristics.

This PDF has no embedded TOC. Headings are identified by font size:
- Font 18.0, Calibri-Bold: H1 chapter headings (e.g., "1. L'environnement ULIS")
- Font 16.0, Calibri-Bold: H2 section headings (e.g., "1.2. L'écran principal")
- Font 14.0, Calibri-Bold: H3 subsection headings (e.g., "1.2.1. Les fonctions")
- Font 12.0, Calibri: body text
- Font 11.0, Calibri: footer ("Page N de 704")

Layout specifics:
- Chapter headings (H1): single line at y≈121, font 18.0
- Section headings (H2): two lines, number on line 1 (y≈120), title on line 2 (y≈123), font 16.0
- Subsection headings (H3): two lines, number on line 1, title on line 2, font 14.0
- Page footer at y≈809, font 11.0
- Top margin has empty Calibri text at y=72, 95 (decorative, skip)
- Screenshot labels at font 10.0 (e.g., "Base de données - date") - skip
- Figure captions: font 12.0 bold, start with "Fig."
- Toolbar button descriptions have empty icon text (non-printable characters)

Strategy:
1. Extract spans with font info from each page.
2. Classify by font size: 18→H1, 16→H2, 14→H3, else body.
3. Merge multi-line headings (number + title within 5px).
4. Skip front matter until first H1.
5. Skip footer lines (y > 780) and decorative top lines (y < 100, empty text).
6. Skip screenshot labels (font 10.0).
"""

import fitz
import re
from pathlib import Path

INPUT_DIR = Path("scratch/docs")
OUTPUT_DIR = Path("scratch/docs-md")

# Font size thresholds
FONT_H1 = 17.5   # >= 17.5 → h1 (chapter headings, font 18.0)
FONT_H2 = 15.5   # >= 15.5 → h2 (section headings, font 16.0)
FONT_H3 = 13.5   # >= 13.5 → h3 (subsection headings, font 14.0)
BODY_MAX_FONT = 13.5  # < 13.5 → body (font 12.0)
SKIP_FONT = 10.5  # <= 10.5 → skip (footer at 11.0, screenshot labels at 10.0)

# Numbered heading pattern (unused now, kept for reference)
NUMBERED_RE = re.compile(r'^\d+(\.\d+)*\.?\s*$')

# Figure caption pattern
FIG_CAPTION_RE = re.compile(r'^fig\.\s*\d+', re.IGNORECASE)


def _is_numbered(text: str) -> bool:
    """Check if text starts with a section number like '1.', '1.2.', '1.2.1.'."""
    # After merging, text is like "1.   L'environnement ULIS"
    # We need to check if it starts with a number pattern
    return bool(re.match(r'^\d+(\.\d+)*\.?', text.strip()))


def _clean_heading(text: str) -> str:
    """Clean heading text: normalize whitespace."""
    return re.sub(r'[\s\xa0]+', ' ', text).strip()


def _is_index_page(page_lines: list[tuple[float, str]]) -> bool:
    """
    Detect index/TOC pages by dot-leader patterns.
    Pages like "Liste des figures" or "Liste des tableaux" have lines with
    dot leaders like "Fig. 1-1 Title .......................................... 26".
    """
    dot_leader_re = re.compile(r'\.{4,}')
    total = 0
    dot_count = 0
    for _, text in page_lines:
        total += 1
        if dot_leader_re.search(text):
            dot_count += 1
    if total < 5:
        return False
    return dot_count / total > 0.5


def ulis_to_markdown(doc: fitz.Document) -> str:
    """
    Build Markdown from font-size heuristics for Guide ULIS.

    Process headings and body in y-order within each page to maintain
    correct document flow when content spans multiple pages.
    """
    lines: list[str] = []
    content_started = False

    for page_idx in range(doc.page_count):
        page = doc[page_idx]
        page_height = page.rect.height
        blocks = page.get_text('dict', flags=fitz.TEXT_PRESERVE_WHITESPACE)['blocks']

        heading_candidates: list[tuple[float, float, str]] = []
        body_lines: list[tuple[float, str]] = []

        for b in blocks:
            if b.get('type') != 0:
                continue
            for line in b.get('lines', []):
                y = line['bbox'][1]
                spans = line.get('spans', [])
                if not spans:
                    continue

                # Skip footer area
                if y > page_height - 30:
                    continue

                # Skip decorative top margin (empty text at y < 100)
                if y < 100:
                    full_text = ' '.join(s['text'] for s in spans).strip()
                    if not full_text:
                        continue

                max_font = max(s['size'] for s in spans)
                full_text = ' '.join(s['text'] for s in spans).strip()

                # Skip very small text (screenshot labels, footers)
                if max_font <= SKIP_FONT:
                    continue

                # Classify by font size
                if max_font >= FONT_H3:
                    heading_candidates.append((y, max_font, full_text))
                else:
                    body_lines.append((y, full_text))

        # Sort heading candidates by y position
        heading_candidates.sort(key=lambda x: x[0])

        # Merge consecutive heading lines within 5px
        # E.g., "1.2." at y=120 + "L'écran principal" at y=123
        merged: list[tuple[float, float, str]] = []
        for y, font_size, text in heading_candidates:
            if merged and abs(y - merged[-1][0]) < 5:
                prev_y, prev_font, prev_text = merged[-1]
                merged[-1] = (prev_y, max(prev_font, font_size), f"{prev_text} {text}")
            else:
                merged.append((y, font_size, text))

        # Assign heading levels (only numbered headings are valid)
        page_headings: list[tuple[float, int, str]] = []
        for y, font_size, text in merged:
            text = _clean_heading(text)
            if font_size >= FONT_H1:
                if _is_numbered(text):
                    page_headings.append((y, 1, text))
            elif font_size >= FONT_H2:
                if _is_numbered(text):
                    page_headings.append((y, 2, text))
            elif font_size >= FONT_H3:
                if _is_numbered(text):
                    page_headings.append((y, 3, text))

        # Track content start: first H1 chapter heading
        if not content_started:
            for _, level, _ in page_headings:
                if level == 1:
                    content_started = True
                    break

        if not content_started:
            continue

        # Skip index/TOC pages (List of figures, List of tables, etc.)
        if _is_index_page(body_lines):
            continue

        # Build interleaved items: headings and body in y-order
        heading_set = {(y, level, text) for y, level, text in page_headings}
        heading_ys = {y for y, _, _ in page_headings}

        # Filter body: remove page numbers, figure captions, and single-letter labels
        page_num_re = re.compile(r'^Page\s+\d+\s+de\s+\d+$', re.IGNORECASE)
        single_letter_re = re.compile(r'^[A-Za-z]$')
        filtered_body: list[tuple[float, str]] = [
            (y, text) for y, text in body_lines
            if not page_num_re.match(text.strip())
            and not FIG_CAPTION_RE.match(text.strip())
            and not single_letter_re.match(text.strip())
        ]

        # Interleave headings and body in y-order
        items: list[tuple[float, str, str, int | None]] = []
        for y, level, text in page_headings:
            items.append((y, 'heading', text, level))
        for y, text in filtered_body:
            items.append((y, 'body', text, None))
        items.sort(key=lambda x: x[0])

        # Emit in y-order, grouping consecutive body lines
        body_buf: list[str] = []

        def flush_body() -> None:
            nonlocal body_buf
            if body_buf:
                body_text = '\n'.join(body_buf).strip()
                if body_text:
                    lines.append(body_text)
                    lines.append("")
                body_buf = []

        for y, item_type, content, level in items:
            if item_type == 'heading':
                flush_body()
                lines.append(f"{'#' * level} {content}")
                lines.append("")
            else:
                body_buf.append(content)

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
    # Standalone "Fig." that got split from its number on next line
    bare_fig_re = re.compile(r'^fig\.\s*$', re.IGNORECASE)

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip bare "Fig." and the following line (which is the figure number)
        if bare_fig_re.match(stripped) and i + 1 < len(lines):
            i += 2
            continue

        if not stripped:
            cleaned_lines.append('')
        elif standalone_num_re.match(stripped):
            i += 1
            continue
        else:
            cleaned_lines.append(line)

        i += 1

    result = '\n'.join(cleaned_lines)
    result = re.sub(r'\n{4,}', '\n\n\n', result)
    result = '\n'.join(line.rstrip() for line in result.split('\n'))
    return result.strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    ulis_dir = INPUT_DIR / "UlisCS"
    pdfs = sorted(ulis_dir.rglob("*.pdf"))

    if not pdfs:
        print("No ULIS PDFs found.")
        return

    print(f"Found {len(pdfs)} ULIS PDF(s):")
    for pdf_path in pdfs:
        print(f"\nProcessing: {pdf_path.name}")

        rel = pdf_path.relative_to(INPUT_DIR)
        md_path = OUTPUT_DIR / rel.with_suffix('.md')
        md_path.parent.mkdir(parents=True, exist_ok=True)

        doc = fitz.open(str(pdf_path))
        md_content = ulis_to_markdown(doc)
        doc.close()

        md_content = _clean_markdown(md_content)
        md_path.write_text(md_content, encoding='utf-8')
        print(f"  Written to: {md_path}")

    print("\nAll done.")


if __name__ == "__main__":
    main()
