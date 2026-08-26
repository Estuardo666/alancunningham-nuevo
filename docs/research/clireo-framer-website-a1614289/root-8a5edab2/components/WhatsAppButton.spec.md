# WhatsAppButton Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/WhatsAppButton.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** static fixed launcher, visible at every scroll position

## Computed Styles
- Wrapper: `position: fixed; bottom: 63px; right: 21px; z-index: 10`
- Button: 56x56, `bg #25D366` (`--clireo-whatsapp`), `border-radius: 30px`
- `box-shadow: rgba(0,0,0,0.1) 0px 2px 8px 0px`
- Glyph: the standard WhatsApp mark, 24x24 viewBox, white fill, transcribed verbatim from the page

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
