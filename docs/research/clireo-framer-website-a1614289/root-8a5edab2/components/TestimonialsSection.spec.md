# TestimonialsSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/TestimonialsSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** drag-driven comparison sliders + time-driven testimonial marquee
- Section: `bg #F5F9FC`, padding `110px 32px 120px`, height 1315px (clone 1313px)

## Key finding
Despite the Framer layer name "Testimonials", the top of this section is a pair of **before/after
image comparison sliders** - not quote cards. Each is built from two stacked images, a full-bleed
`<input>` acting as the drag surface, and a 36x36 `B/A` handle on a vertical divider.

## Computed Styles
- Header: eyebrow "Treatment Results" + `h2 46px / 49.68px` ls `-2.53px` `#1B2978`
- Slider: 638x459, radius 14, `bg #FFF`; two sliders, gap 24
- Testimonial card: 350x322, `bg #FFF`, radius 13, padding `32px 28px 28px`,
  `var(--clireo-shadow)`, flex-col space-between, `overflow: clip`
  - Rating: 5 x 15px stars, gap 4, colour `#1B2978`
  - Quote `18px / 24.3px` ls `-0.54px` `#0E1954`
  - Avatar 42x41 radius 8; name `17px / 23.46px`; role `16px / 23.2px`, both `#0E1954`
- CTA row: gap 40 - Google mark 32x32 (`lTrIrSG4mvwiX5mimYjf66IFlQ.png`), `4.8` in **`#FEA500`** at
  `24px / 28.8px` ls `-0.84px`, 5 x 24px stars, underlined "See all Google reviews", then
  `PrimaryButton "Book appointment"`

## Comparison pairs
1. `mIGhhqSm244qFe4CJ5yCRmRzY.webp` / `TWo3zf3MWRGUFg4nNjN1cFkNCA.webp`
2. `z1w45xkDJPq5Am5ur4XhOSozAw.webp` / `Vfimlp2gMWsvh869HuMjPvkSbo.jpg`

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
