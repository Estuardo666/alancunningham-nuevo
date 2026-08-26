# AboutSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/AboutSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** scroll-driven word reveal
- Section: `bg #F5F9FC`, padding `120px 32px 20px`, height 815px (clone 815px - exact)

## Computed Styles
- Container: flex-col, align center, gap 60, maxWidth 1300
- Top block: maxWidth 720, gap 18
- Headline paragraph: `40px / 44.8px`, letterSpacing `-2.72px`
- CTA row: gap 44, centered - `PrimaryButton "More about us"` + trust cluster
- Trust avatars: 3 x 40px circles, step 28px (12px overlap); caption `15px / 21px` ls `-0.15px` `#0E1954`
- Cards row: 3 up, gap 16, card 423x320, `bg #FFF`, radius 16, padding 30, `var(--clireo-shadow)`, flex-col space-between
- Card icon 50x55; title `26px / 31.2px` ls `-0.91px` `#1B2978`; body `17px / 23.46px` ls `-0.34px` `#0E1954`

## Behavior - word-by-word reveal
Each word is its own `<span>`. Dim state colour `rgba(26, 40, 120, 0.15)`; revealed state
`rgb(27, 41, 120)`. Progress maps the paragraph's viewport travel (85% -> 25% of viewport height)
onto the word count, so words light left-to-right. Gated on `prefers-reduced-motion`.

## Assets
`SebajAOsz6a8sWPvrYcEDu50c.svg`, `xa99qvpg8IUc9n1GZ7kGFxevJ0.svg`, `QVULYcKsFklavhQU9fbshqfZw.svg`,
avatars `Tq7Flaz...`, `9Wyco1Y...`, `poFbYhd...`

## Text (verbatim)
Eyebrow "About Clireo". Headline "Clireo combines trusted specialists, advanced technology &
compassionate care to help every patient achieve better health, confidence & lifelong wellbeing."
Cards: Comprehensive Care / Experienced Specialists / Patient-First Approach.

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
