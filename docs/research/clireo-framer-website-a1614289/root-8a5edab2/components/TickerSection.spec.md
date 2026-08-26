# TickerSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/TickerSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** time-driven infinite marquee
- Section: `bg #F5F9FC`, padding `60px 32px 70px`, `overflow: hidden`, height 220px (clone 205px)

## Computed Styles
- Track: maxWidth 1400, flex-row, `gap: 60px`
- Item: `h3 74px / 74.74px`, letterSpacing `-4.588px`, colour `#1B2978`
- Separator: 44x44 eight-ray sparkle, `#1B2978`. On the live site it is a CSS `mask-image` over a
  solid fill; reproduced as `SparkleIcon` (24x24 viewBox, 8 rays, strokeWidth 2, round caps) with
  the paths transcribed from that mask.

## Behavior
Five items (`Dentistry, Pediatrics, Primary Care, Aesthetics, Surgery`) repeated in the DOM
(3x live, 2x in the clone) inside a track animating `translateX(0) -> translateX(-50%)` via the
`clireo-marquee` keyframes in `globals.css`. Paused under `prefers-reduced-motion`.

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
