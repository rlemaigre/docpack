"""
Batch convert PDFs to Markdown for docpack bundling.

Delegates to specialized converters per document family:
- PowerBuilder (Appeon) PDFs → convert_powerbuilder.py
- SQL Anywhere PDFs (incl. the mislabeled Errors PDF) → convert_sqlanywhere.py
- Guide ULIS (no TOC, font-size heuristics) → convert_ulis.py
"""

import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent

def main() -> None:
    converters = [
        SCRIPT_DIR / "convert_powerbuilder.py",
        SCRIPT_DIR / "convert_sqlanywhere.py",
        SCRIPT_DIR / "convert_ulis.py",
    ]

    for converter in converters:
        if not converter.exists():
            print(f"Warning: {converter.name} not found, skipping.")
            continue
        result = subprocess.run(
            [sys.executable, str(converter)],
            capture_output=False,
        )
        if result.returncode != 0:
            print(f"Error running {converter.name} (exit {result.returncode})")
            sys.exit(result.returncode)

    print("\nAll converters finished.")


if __name__ == "__main__":
    main()
