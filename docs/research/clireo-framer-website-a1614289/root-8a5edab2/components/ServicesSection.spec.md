# ServicesSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/ServicesSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** **manual carousel** (`framer-slideshow framer-slideshow-axis-x`) with Previous / Next controls. It does **not** auto-advance — the track transform is static over time.
- Section: `bg #1B2978`, padding `120px 32px`, `overflow: hidden`, height 984px (clone 962px)

## Computed Styles
- Container: flex-col, align center, gap 40, maxWidth 1300
- Heading: eyebrow (light tone) + `h2 46px / 49.68px` ls `-2.53px`, white, maxWidth 550
- Card: 407x446, `bg #1B2978`, radius 15, padding 24, `overflow: hidden`, flex-row align-end
- Card image: absolutely positioned, `object-fit: cover`, full bleed
- Scrim: bottom 161px, `linear-gradient(rgba(0,0,0,0) 1.57%, rgba(1,5,23,0.2) 69.46%)`
- Icon tile: 52x52, `bg rgba(255,255,255,0.07)`, radius 3; icon 30x39
- Title `26px / 31.2px` ls `-0.91px` white; body `17px / 23.46px` ls `-0.34px` white
- **Controls:** two 38x38 buttons, `background #EBF4F5`, `border-radius: 20px`, centred together below the track with ~22px between them (their wrapper is `position: absolute`, 1300px wide, `justify-content: center`). Icons `t5y8ihAWr04e5rh1e5YfzpGgPA.svg` (prev) and `HW8DeQ9Yx95dpwt6ZgaCPOV1MRw.svg` (next).
- The DOM carries 20 slides — the 5 unique cards repeated four times — so the carousel wraps rather than dead-ending.

### Bottom row ("View All"), 1300x47, flex-row, gap 10
It is **not** a pill button:
- `Subtext` 300px wide — `17px / 23.46px` ls `-0.34px` white
- `Line` — a 1px rule filling the middle, `background rgba(255,255,255,0.1)`
- Link 190x28, flex-row gap 4 — label `18px / 24.3px` ls `-0.54px` white (duplicated for the hover slide-swap) plus a 28x28 arrow holding two 26px icons for the diagonal hover slide

## Cards (image + icon)
| Title | Image | Icon |
|---|---|---|
| Dentistry | BqocAOOuI80JOBG7O7tbaeZUw.webp | pJSdUV9FevHoktES8cyLiFSD8jM.svg |
| Pediatrics | Tt3aPFPt7DrBRtEkqeQbk0sRI.webp | 0U0qZF8m25gT9NcRC3H63SGwo.svg |
| Cosmetic Care | siuwzbV8DYOrdSvEUFV4CXZAZY.webp | 5jWBbSjEFIHfAYKeD5tZGxvBGZ0.svg |
| Primary Care | 1hIaY1IIxNgvQ6kgwdaw6yBAVhc.webp | KUlEux6SUGltrbOun5GlhZaydtQ.svg |
| Diagnostics | TYm6jpZh5sVjmGQaH331qF5IupQ.webp | qdBNVG8bwfV08i3g2bfy2XAc.svg |

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
