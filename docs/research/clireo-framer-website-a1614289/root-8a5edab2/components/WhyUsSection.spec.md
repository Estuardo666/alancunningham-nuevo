# WhyUsSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/WhyUsSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** scroll-driven pinned heading
- Section: `bg #FFFFFF`, padding `120px 32px`, height 3612px (clone 3409px - the delta is purely
  viewport height, since two of the three blocks are one viewport tall)

## Structure - the important part
Three children:
1. `Container` - `position: sticky; top: 0`, height = one viewport (912px live). Holds eyebrow, h2,
   lead paragraph and CTA.
2. `Process Spacer` - `position: relative`, 1548px, a **2-column grid, gap 64**, holding 4 cards and
   4 empty cells so the cards zig-zag: card1 left, card2 right, card3 left, card4 right, **one card
   per row**.
3. A trailing empty `Container` of one viewport height.

Because the grid is a later `position: relative` sibling, the navy cards paint **over** the sticky
heading as they scroll past. That occlusion is the intended effect.

> Implementation note: without an explicit `grid-row-start` per card, auto-placement pairs two cards
> into a single row and the section collapses to roughly half its height.

## Computed Styles
- Heading: eyebrow + `h2 46px / 49.68px` ls `-2.53px` maxWidth 700 + `p 18px / 24.3px` ls `-0.54px` maxWidth 600
- CTA: `PrimaryButton "Book Consultation"` with the **`#EDF4FA`** body variant
- Card: 370x339, `bg #1B2978`, radius 16, padding 40, gap 56, `var(--clireo-shadow)`, `overflow: clip`
- Icon tile: 62x62, `bg #FFF`, radius 10; icon 36x36 in `#1B2978`
- Title `26px / 31.2px` ls `-0.91px` white; body `17px / 23.46px` ls `-0.34px` white

## Cards
Experienced Specialists - Personalized Care - Modern Technology - Patient-First Care
(the fourth reuses the `ValuePersonalizedIcon` sprite symbol)

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
