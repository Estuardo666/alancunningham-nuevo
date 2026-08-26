# DoctorsSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/DoctorsSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** static
- Section: `bg #FFFFFF`, padding `120px 32px`, height 999px (clone 999px - exact)

## Computed Styles
- Container: flex-col align center gap 50, maxWidth 1300
- Heading: eyebrow "Our Doctors" + `h2 54px / 56.16px` ls `-3.24px` `#1B2978`, maxWidth 600
- Grid: 4 columns of 310px, `gap: 24px 20px`
- Card: 310x471, flex-col gap 16, `overflow: clip`
  - Portrait 310x400, radius 14, `object-fit: cover`
  - Content row: space-between, align-end, padding `0 4px`
  - Name `22px / 29.7px` ls `-0.88px` `#1B2978`; role `16px / 23.2px` ls `-0.24px` `#0E1954`
  - Social: two 40x40 tiles, `bg #EDF4FA`, radius 6, icon 20x20
- Footer CTA: `PrimaryButton "Book appointment"`

## Doctors
| Name | Role | Image |
|---|---|---|
| Dr. James Bennett | Chief Medical Officer | nehHdbGZLbGGvtzCnfwaTT4QQWk.webp |
| Dr. Michael Harris | Pediatric Specialist | NRJ7RAbIHkChosM6TZfMgLt9oc.webp |
| Dr. Marcus Hale | Cosmetic Surgeon | mm2AUcLwSXo1bprayvj24p0lDuU.webp |
| Dr. Emily Carter | Senior Dentist | d3snzdodpmHtvA8pu1tO3Nb4ac.webp |

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
