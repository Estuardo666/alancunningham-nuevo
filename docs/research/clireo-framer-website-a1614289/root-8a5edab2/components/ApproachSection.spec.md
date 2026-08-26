# ApproachSection Specification

- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/ApproachSection.tsx`
- **Source:** https://clireo.framer.website/
- All CSS values below are exact `getComputedStyle()` output at desktop.

## Overview
- **Interaction model:** scroll-driven auto-switching step indicator - **NOT** a click-driven tab set
- Section: `bg #F5F9FC`, padding `120px 32px`, height 2282px (clone 2222px)

## Structure
- `Top`: flex-row align-end gap 40 - heading column (1051px) + `PrimaryButton "More about us"`
- `Approaches`: flex-row gap 16 - **`Left bar` 608px** and **`Right bar` 676px**
  - The left bar contains a **230px** `position: sticky; top: 90px` pill stack; the column itself is
    608px wide.
  - The right bar holds the three panels.

> Sizing the right column as "whatever is left" makes the panels ~1050px instead of 676px, because
> the left column is 608px wide even though its sticky content is only 230px.

## Computed Styles
- Heading: eyebrow + `h2 46px / 49.68px` ls `-2.53px` + `p 18px / 24.3px` ls `-0.54px`
- Step pill: 230x44, padding `10px 20px`, radius 14, gap 12, `var(--clireo-shadow)`; 7x7 radius-1 dot
  - **Active:** `bg #1B2978`, dot white, text white
  - **Inactive:** `bg #FFFFFF`, dot `#1B2978`, text `#1B2978`
  - Label `18px / 24.3px` ls `-0.54px`
- Panel: 676x577, `bg #FFF`, radius 18, padding 16, gap 8, `var(--clireo-shadow)`, `overflow: clip`
  - Image 644x360 radius 14
  - Heading block: padding `12px 8px`, gap 11 - icon 30x30, `h4 26px / 31.2px` ls `-0.91px`
    `#1B2978`, `p 17px / 23.46px` ls `-0.34px` `#0E1954`

## Behavior
An `IntersectionObserver` with `rootMargin: "-20% 0px -60% 0px"` marks a panel active as it crosses
the band where the sticky indicator sits. The pills are presentational, matching the live site.

## Steps
| Pill label | Panel title | Image | Icon |
|---|---|---|---|
| Consultation | Consultation | C8dunOfMYF9Jvnsi07RsgBh78.webp | ApproachConsultationIcon |
| Treatment | Personalized Treatment | AERyzXVYeSkqwWF9eBPGEoP5Ck.webp | ApproachTreatmentIcon |
| Recovery | Recovery & Follow-Up | dANsf6ioPNeYnwz49LXt7gZI7UE.webp | ApproachRecoveryIcon |

## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
