# SiteFooter Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/SiteFooter.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** static
- Footer: `bg #0E1954`, height 912px (clone 973px)

## Computed Styles
- Content container: padding-top 80
- **CTA card:** 1300x450, radius 20, padding `48px 40px 70px`, flex-col justify-end align-center,
  gap 24, `overflow: clip`
  - Background image `PnpAr08n1JUeJxXkKediO8U3i0.webp`
  - Gradient overlay:
    `linear-gradient(9deg, rgb(14,25,84) -10%, rgba(14,25,84,0.65) 27%, rgba(12,17,28,0.15) 93%)`
  - `h2 54px / 56.16px` ls `-3.24px` white, maxWidth 800
  - Body: maxWidth 40%, gap 28 - `p 17px / 23.46px` ls `-0.34px` white, then a row (gap 24) of
    `PrimaryButton "Book an appointment"` + rating cluster (`4.8/5`, `Trusted by 1K+ Patients`)
- **Menu row:** maxWidth 1300, flex-row gap 32, padding `56px 0 90px`; four columns -
  brand/newsletter 482px, then three 241px link columns, each flex-col gap 12
  - Column heading `14px / 18.2px` ls **`+1.26px`** uppercase white
  - Links `16px / 23.2px` ls `-0.24px` white
  - Newsletter: blurb maxWidth 340 `17px / 23.46px`; form 340x42, gap 4; note
    "Your data is handled with discretion"
- **Copyright bar:** maxWidth 1300, space-between, padding `40px 0`; text `16px` white

## Columns
- **Treatments:** Cosmetic Care, Dentistry, Pediatrics, Primary Care, Diagnostics
- **Pages:** Home, About, Treatments, Contact, Blogs
- **Socials:** Facebook, LinkedIn, Instagram, Twitter
- Copyright: "(c) 2026 Clireo. All rights reserved." / "Made by Flux"

## Excluded
Framer's trailing "Create a free website with Framer..." line and the `#template-overlay` badge.

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
