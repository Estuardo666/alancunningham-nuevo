"""Emits one auditable component spec per built component for the Clireo clone.

Every CSS value here is exact getComputedStyle() output captured from
https://clireo.framer.website/ at desktop during extraction.
"""

import os

D = "docs/research/clireo-framer-website-a1614289/root-8a5edab2/components"
BASE = "/sites/clireo-framer-website-a1614289/root-8a5edab2/images"

COMMON = """
## Shared primitives used
- `PrimaryButton` (`shared/PrimaryButton.tsx`) - h48, padding `5px 5px 5px 32px`, gap 22, radius 16, `var(--clireo-shadow)`; body `#FFF` (or `#EDF4FA` / `#F5F9FC` variants); duplicated label sliding on hover; arrow tile 38x38 radius 12 on `#1B2978` with white `ArrowUpRightIcon`.
- `SectionEyebrow` (`shared/SectionEyebrow.tsx`) - 7x7 radius-2 square bullet + gap 10 + label `14px / 18.2px`, letterSpacing **+1.26px**, uppercase.
- Icons come from `shared/icons.tsx`, extracted verbatim from the site's SVG sprite (Framer CSS-var strokes normalised to `currentColor`).

## Breakpoints
Desktop `>=1200px` - Tablet `810-1199.98px` - Mobile `<=809.98px`. Container maxWidth `1300px`.
"""

specs = {}

specs["AboutSection"] = """
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
"""

specs["TickerSection"] = """
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
"""

specs["ServicesSection"] = """
## Overview
- **Interaction model:** time-driven marquee of treatment cards
- Section: `bg #1B2978`, padding `120px 32px`, `overflow: hidden`, height 984px (clone 962px)

## Computed Styles
- Container: flex-col, align center, gap 40, maxWidth 1300
- Heading: eyebrow (light tone) + `h2 46px / 49.68px` ls `-2.53px`, white, maxWidth 550
- Card: 407x446, `bg #1B2978`, radius 15, padding 24, `overflow: hidden`, flex-row align-end
- Card image: absolutely positioned, `object-fit: cover`, full bleed
- Scrim: bottom 161px, `linear-gradient(rgba(0,0,0,0) 1.57%, rgba(1,5,23,0.2) 69.46%)`
- Icon tile: 52x52, `bg rgba(255,255,255,0.07)`, radius 3; icon 30x39
- Title `26px / 31.2px` ls `-0.91px` white; body `17px / 23.46px` ls `-0.34px` white
- Bottom row: gap 60 - caption + `PrimaryButton "View all treatments"`

## Cards (image + icon)
| Title | Image | Icon |
|---|---|---|
| Dentistry | BqocAOOuI80JOBG7O7tbaeZUw.webp | pJSdUV9FevHoktES8cyLiFSD8jM.svg |
| Pediatrics | Tt3aPFPt7DrBRtEkqeQbk0sRI.webp | 0U0qZF8m25gT9NcRC3H63SGwo.svg |
| Cosmetic Care | siuwzbV8DYOrdSvEUFV4CXZAZY.webp | 5jWBbSjEFIHfAYKeD5tZGxvBGZ0.svg |
| Primary Care | 1hIaY1IIxNgvQ6kgwdaw6yBAVhc.webp | KUlEux6SUGltrbOun5GlhZaydtQ.svg |
| Diagnostics | TYm6jpZh5sVjmGQaH331qF5IupQ.webp | qdBNVG8bwfV08i3g2bfy2XAc.svg |
"""

specs["ValuesSection"] = """
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
"""

specs["TestimonialsSection"] = """
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
"""

specs["WhyUsSection"] = """
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
"""

specs["ApproachSection"] = """
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
"""

specs["DoctorsSection"] = """
## Overview
- **Interaction model:** static
- Section: `bg #FFFFFF`, padding `120px 32px`, height 999px (clone 999px - exact)

## Computed Styles
- Container: flex-col align center gap 50, maxWidth 1300
- Heading: eyebrow "Our Doctors" + `h2 54px / 56.16px` ls `-3.24px` `#1B2978`, maxWidth 600
- Grid: 4 columns of 310px, `gap: 24px 20px`
- Card: 310x471, flex-col gap 16, `overflow: clip`
  - Portrait 310x400, radius 14, `object-fit: cover`
  - Content row: space-between, align-end, padding `0 4px`
  - Name `22px / 29.7px` ls `-0.88px` `#1B2978`; role `16px / 23.2px` ls `-0.24px` `#0E1954`
  - Social: two 40x40 tiles, `bg #EDF4FA`, radius 6, icon 20x20
- Footer CTA: `PrimaryButton "Book appointment"`

## Doctors
| Name | Role | Image |
|---|---|---|
| Dr. James Bennett | Chief Medical Officer | nehHdbGZLbGGvtzCnfwaTT4QQWk.webp |
| Dr. Michael Harris | Pediatric Specialist | NRJ7RAbIHkChosM6TZfMgLt9oc.webp |
| Dr. Marcus Hale | Cosmetic Surgeon | mm2AUcLwSXo1bprayvj24p0lDuU.webp |
| Dr. Emily Carter | Senior Dentist | d3snzdodpmHtvA8pu1tO3Nb4ac.webp |
"""

specs["StatsSection"] = """
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
"""

specs["BlogSection"] = """
## Overview
- **Interaction model:** static, with a hover zoom on the thumbnails
- Section: `bg #FFFFFF`, padding `140px 32px 90px`, height 833px (clone 833px - exact)

## Computed Styles
- Wrapper: flex-col gap 40, maxWidth 1300
- Title row: flex-row align-end - heading column + `PrimaryButton "View all blog"` (`#F5F9FC` body)
- Heading: eyebrow "Blog" + `h2 46px / 49.68px` ls `-2.53px` `#1B2978`, maxWidth 480
- Grid: 3 columns of 417px, `gap: 32px 24px`
- Card: flex-col, gap 18
  - Image 417x320, radius 14, `overflow: hidden`
  - Meta row: date `16px / 23.2px` ls `-0.24px` `#0E1954`, 6px dot `#0E1954`, category (same type)
  - Title `26px / 31.2px` ls `-0.91px` `#1B2978`, maxWidth 380
  - Text block padding `0 4px 6px`, gap 8

## Posts
| Date | Category | Title | Image |
|---|---|---|---|
| Dec 8, 2026 | Wellness | Simple habits for a healthier everyday life | FmaKvHrXOJ9uBjoEUNXTOSWDpU.webp |
| Jul 7, 2026 | Primary Care | When to schedule a routine health checkup | 6jTIdV87HRtET5fapkF7vFsaIc.webp |
| Mar 4, 2026 | Dentistry | How to maintain an excellent oral health | U18uXhD7MdnQOngOXKvthb9fX6U.webp |
"""

specs["FaqsSection"] = """
## Overview
- **Interaction model:** click-driven accordion, first row open on load
- Section: `bg #F5F9FC`, padding `100px 32px 130px`, height 770px (clone 767px)

## Computed Styles
- Container: flex-row gap 16, maxWidth 1300 - `Left` 590px, `Right` 694px
- Left: flex-col space-between
  - Heading: eyebrow "FAQs" + `h2 54px / 56.16px` ls `-3.24px` `#1B2978`, maxWidth 440
  - CTA block: 90x90 image radius 16, caption `17px / 23.46px` ls `-0.34px` `#0E1954`,
    `PrimaryButton "Get in touch"`
- Accordion: flex-col, gap 12
- Item: `bg #FFFFFF`, radius 12, `var(--clireo-shadow)`; open item 694x180, closed 694x60
- Question row: height 60, padding `20px 22px`; label `20px / 27px` ls `-0.8px` `#1B2978`
- Toggle: 37x37 circle, `bg #1B2978`, white glyph (rotates 45 degrees when open)
- Answer: padding `0 30px 20px 22px`, text maxWidth 90%, `18px / 24.3px` ls `-0.54px` `#0E1954`

## Content note - verified gap in the source
Only the **first** question ships an answer. Questions 2-6 have no answer content in the rendered
DOM *or* in the server-rendered HTML - the source template left them empty. The clone matches this
rather than inventing copy: those rows expand to an empty panel.

## Questions
1. What services does Clireo provide? - *answered*
2. How can I schedule an appointment?
3. Do I need a referral to see a specialist?
4. What should I bring to my first appointment?
5. Do you offer care for children and families?
6. Why choose Clireo for your healthcare needs?
"""

specs["SiteFooter"] = """
## Overview
- **Interaction model:** static
- Footer: `bg #0E1954`, height 912px (clone 973px)

## Computed Styles
- Content container: padding-top 80
- **CTA card:** 1300x450, radius 20, padding `48px 40px 70px`, flex-col justify-end align-center,
  gap 24, `overflow: clip`
  - Background image `PnpAr08n1JUeJxXkKediO8U3i0.webp`
  - Gradient overlay:
    `linear-gradient(9deg, rgb(14,25,84) -10%, rgba(14,25,84,0.65) 27%, rgba(12,17,28,0.15) 93%)`
  - `h2 54px / 56.16px` ls `-3.24px` white, maxWidth 800
  - Body: maxWidth 40%, gap 28 - `p 17px / 23.46px` ls `-0.34px` white, then a row (gap 24) of
    `PrimaryButton "Book an appointment"` + rating cluster (`4.8/5`, `Trusted by 1K+ Patients`)
- **Menu row:** maxWidth 1300, flex-row gap 32, padding `56px 0 90px`; four columns -
  brand/newsletter 482px, then three 241px link columns, each flex-col gap 12
  - Column heading `14px / 18.2px` ls **`+1.26px`** uppercase white
  - Links `16px / 23.2px` ls `-0.24px` white
  - Newsletter: blurb maxWidth 340 `17px / 23.46px`; form 340x42, gap 4; note
    "Your data is handled with discretion"
- **Copyright bar:** maxWidth 1300, space-between, padding `40px 0`; text `16px` white

## Columns
- **Treatments:** Cosmetic Care, Dentistry, Pediatrics, Primary Care, Diagnostics
- **Pages:** Home, About, Treatments, Contact, Blogs
- **Socials:** Facebook, LinkedIn, Instagram, Twitter
- Copyright: "(c) 2026 Clireo. All rights reserved." / "Made by Flux"

## Excluded
Framer's trailing "Create a free website with Framer..." line and the `#template-overlay` badge.
"""

specs["WhatsAppButton"] = """
## Overview
- **Interaction model:** static fixed launcher, visible at every scroll position

## Computed Styles
- Wrapper: `position: fixed; bottom: 63px; right: 21px; z-index: 10`
- Button: 56x56, `bg #25D366` (`--clireo-whatsapp`), `border-radius: 30px`
- `box-shadow: rgba(0,0,0,0.1) 0px 2px 8px 0px`
- Glyph: the standard WhatsApp mark, 24x24 viewBox, white fill, transcribed verbatim from the page
"""

specs["BeforeAfterSlider"] = """
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
"""


def main() -> None:
    os.makedirs(D, exist_ok=True)
    for name, body in specs.items():
        header = (
            "# {0} Specification\n\n"
            "- **Target file:** `src/components/sites/clireo-framer-website-a1614289/"
            "root-8a5edab2/{0}.tsx`\n"
            "- **Source:** https://clireo.framer.website/\n"
            "- All CSS values below are exact `getComputedStyle()` output at desktop.\n"
        ).format(name)
        path = os.path.join(D, name + ".spec.md")
        with open(path, "w", encoding="utf-8") as handle:
            handle.write(header + body.rstrip() + "\n" + COMMON)
        print("wrote", name)


if __name__ == "__main__":
    main()
