# FaqsSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/FaqsSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** click-driven accordion, first row open on load
- Section: `bg #F5F9FC`, padding `100px 32px 130px`, height 770px (clone 767px)

## Computed Styles
- Container: flex-row gap 16, maxWidth 1300 - `Left` 590px, `Right` 694px
- Left: flex-col space-between
  - Heading: eyebrow "FAQs" + `h2 54px / 56.16px` ls `-3.24px` `#1B2978`, maxWidth 440
  - CTA block: 90x90 image radius 16, caption `17px / 23.46px` ls `-0.34px` `#0E1954`,
    `PrimaryButton "Get in touch"`
- Accordion: flex-col, gap 12
- Item: `bg #FFFFFF`, radius 12, `var(--clireo-shadow)`; open item 694x180, closed 694x60
- Question row: height 60, padding `20px 22px`; label `20px / 27px` ls `-0.8px` `#1B2978`
- Toggle: 37x37 circle, `bg #1B2978`, white glyph (rotates 45 degrees when open)
- Answer: padding `0 30px 20px 22px`, text maxWidth 90%, `18px / 24.3px` ls `-0.54px` `#0E1954`

## Content note - verified gap in the source
Only the **first** question ships an answer. Questions 2-6 have no answer content in the rendered
DOM *or* in the server-rendered HTML - the source template left them empty. The clone matches this
rather than inventing copy: those rows expand to an empty panel.

## Questions
1. What services does Clireo provide? - *answered*
2. How can I schedule an appointment?
3. Do I need a referral to see a specialist?
4. What should I bring to my first appointment?
5. Do you offer care for children and families?
6. Why choose Clireo for your healthcare needs?

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
