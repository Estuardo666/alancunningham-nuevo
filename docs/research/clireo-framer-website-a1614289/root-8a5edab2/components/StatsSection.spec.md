# StatsSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/StatsSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** static (see note)
- Section: `bg #1B2978`, padding `90px 32px`, height 525px (clone 525px - exact)

## Computed Styles
- Container: flex-col align center gap 45, maxWidth 1300
- Heading: `h3 40px / 44px` ls `-1.8px`, white, maxWidth 600
- Stat cell: 325x212, flex-col centred, gap 12, padding `50px 40px`
- Value `70px / 77px` ls `-3.85px` white
- Label `17px / 23.46px` ls `-0.34px` white

## Note on the doubled numbers
Each figure appears twice in the live DOM: a black copy in flow and a white copy absolutely
positioned over it. That is Framer's text-animation scaffolding (a measuring copy plus the visible
one), not two visible elements. The clone renders a single white figure.

## Stats
18K+ Happy Patients - 32+ Medical Specialists - 97% Patient Satisfaction - 17+ Years Experience

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
