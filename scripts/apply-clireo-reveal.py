"""Swaps the statically-rendered headings for the per-word RevealText effect.

Blur radii are per-role and were read straight off the source site's initial
inline styles: h1 -> 5px, h2/h3 -> 8px, h4 card titles -> 3px, card body -> 1px.
"""

import re
import sys

ROOT = "src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/"
IMPORT = 'import { RevealText } from "../shared/RevealText";\n'

# (file, tag, verbatim text, blur)
TARGETS = [
    ("HeroSection.tsx", "h1", "Where every health matter", 5),
    ("ServicesSection.tsx", "h2", "Expert Care For Every Health Need", 8),
    ("ValuesSection.tsx", "h2", "Values That Guide Every Patient&rsquo;s Experience", 8),
    ("TestimonialsSection.tsx", "h2", "Real Results From Before &amp; After Treatment", 8),
    ("WhyUsSection.tsx", "h2", "The Difference Behind Exceptional Patient Care", 8),
    ("ApproachSection.tsx", "h2", "Personalized Journey To A Better Health", 8),
    ("DoctorsSection.tsx", "h2", "Meet The Doctors Behind Expert Care", 8),
    ("StatsSection.tsx", "h2", "Trusted Clinic Backed By Meaningful Results", 8),
    ("BlogSection.tsx", "h2", "Latest Health Tips &amp; Insights", 8),
    ("FaqsSection.tsx", "h2", "Frequently Questions", 8),
    ("SiteFooter.tsx", "h2", "Prioritize Your Health Today", 8),
]

ENTITIES = {"&rsquo;": "’", "&amp;": "&"}


def plain(text: str) -> str:
    for k, v in ENTITIES.items():
        text = text.replace(k, v)
    return text


def patch_heading(src: str, tag: str, text: str, blur: int) -> tuple[str, bool]:
    # match <tag className="...">\n  text\n</tag>
    pattern = re.compile(
        r'<' + tag + r'\s+className=\{?"([^"]+)"\}?\s*>\s*'
        + re.escape(text)
        + r'\s*</' + tag + r'>',
        re.S,
    )
    match = pattern.search(src)
    if not match:
        return src, False
    classes = match.group(1)
    replacement = (
        '<RevealText\n'
        '            as="' + tag + '"\n'
        '            text="' + plain(text).replace('"', '\\"') + '"\n'
        '            blur={' + str(blur) + '}\n'
        '            className="' + classes + '"\n'
        '          />'
    )
    return src[: match.start()] + replacement + src[match.end():], True


def ensure_import(src: str) -> str:
    if "RevealText" in src and "shared/RevealText" in src:
        return src
    lines = src.split("\n")
    last = max(i for i, l in enumerate(lines) if l.startswith("import "))
    lines.insert(last + 1, IMPORT.rstrip("\n"))
    return "\n".join(lines)


def main() -> None:
    failures = []
    for filename, tag, text, blur in TARGETS:
        path = ROOT + filename
        with open(path, encoding="utf-8") as handle:
            src = handle.read()
        src, ok = patch_heading(src, tag, text, blur)
        if not ok:
            failures.append(filename + " :: " + text)
            continue
        src = ensure_import(src)
        with open(path, "w", encoding="utf-8") as handle:
            handle.write(src)
        print("patched", filename)
    if failures:
        print("\nNOT MATCHED:")
        for f in failures:
            print("  ", f)
        sys.exit(1)


if __name__ == "__main__":
    main()
