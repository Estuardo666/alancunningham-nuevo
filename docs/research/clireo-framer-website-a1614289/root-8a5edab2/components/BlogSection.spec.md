# BlogSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/BlogSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** static, with a hover zoom on the thumbnails
- Section: `bg #FFFFFF`, padding `140px 32px 90px`, height 833px (clone 833px - exact)

## Computed Styles
- Wrapper: flex-col gap 40, maxWidth 1300
- Title row: flex-row align-end - heading column + `PrimaryButton "View all blog"` (`#F5F9FC` body)
- Heading: eyebrow "Blog" + `h2 46px / 49.68px` ls `-2.53px` `#1B2978`, maxWidth 480
- Grid: 3 columns of 417px, `gap: 32px 24px`
- Card: flex-col, gap 18
  - Image 417x320, radius 14, `overflow: hidden`
  - Meta row: date `16px / 23.2px` ls `-0.24px` `#0E1954`, 6px dot `#0E1954`, category (same type)
  - Title `26px / 31.2px` ls `-0.91px` `#1B2978`, maxWidth 380
  - Text block padding `0 4px 6px`, gap 8

## Posts
| Date | Category | Title | Image |
|---|---|---|---|
| Dec 8, 2026 | Wellness | Simple habits for a healthier everyday life | FmaKvHrXOJ9uBjoEUNXTOSWDpU.webp |
| Jul 7, 2026 | Primary Care | When to schedule a routine health checkup | 6jTIdV87HRtET5fapkF7vFsaIc.webp |
| Mar 4, 2026 | Dentistry | How to maintain an excellent oral health | U18uXhD7MdnQOngOXKvthb9fX6U.webp |

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
