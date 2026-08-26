# BeforeAfterSlider Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/BeforeAfterSlider.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** drag-driven comparison
- Used twice inside `TestimonialsSection`

## Computed Styles
- Frame: 638x459, radius 14, `bg #FFFFFF`, `overflow: hidden`
- Two images stacked, both `object-fit: cover`, full bleed
- Divider column: 36px wide, full height; handle 36x36 circle, white, labelled `B/A`
- A full-bleed `<input type="range">` is the interaction surface on the live site

## Implementation
The "before" layer is clipped with `clip-path: inset(0 <100 - position>% 0 0)`. The range input is
kept (visually hidden, full-bleed) rather than replaced with pointer handlers, so the control stays
keyboard-operable - the live site uses an input for the same reason.

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
