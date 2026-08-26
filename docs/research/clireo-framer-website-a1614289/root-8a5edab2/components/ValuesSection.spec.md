# ValuesSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/ValuesSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** static
- Section: `bg #FFFFFF`, padding `120px 32px`, `overflow: clip`, height 1113px (clone 1101px)

## Layout - the important part
`Values` is a **3-column x 3-row grid**, each row 200px, `gap: 0`, container radius 21px.
The portrait occupies the **middle column and spans all three rows**; the six cards fall into the
left and right columns by auto-placement. DOM order on the live site is
`card1, IMAGE(row-span 3), card2, card3, card4, card5, card6`, producing:

| | col 1 | col 2 | col 3 |
|---|---|---|---|
| row 1 | Compassionate Care | (image) | Medical Excellence |
| row 2 | Patient Safety | (image) | Trusted Professionals |
| row 3 | Personalized Treatment | (image) | Lifelong Wellness |

## Computed Styles
- Header: eyebrow + `h2 46px / 49.68px` ls `-2.53px` maxWidth 600, + `p 18px / 24.3px` ls `-0.54px` maxWidth 550
- Card: 433x200, `bg #FFF`, radius 2, padding 32, flex-row, gap 40. **No borders, no shadow, no
  dividers** - verified directly; the cards are white-on-white.
- Icon 44x44, stroke `#FA84E0` (resolved from Framer var `--21h8s6`)
- Title `26px / 31.2px` ls `-0.91px` `#1B2978`; body `17px / 23.46px` ls `-0.34px` `#0E1954`
- Portrait: `wRcbXoDc5Kye6JPiHat2o3ftH6A.webp`, 433x600, `object-fit: cover`

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
