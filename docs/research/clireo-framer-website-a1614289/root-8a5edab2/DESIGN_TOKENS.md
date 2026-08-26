# Clireo — Design Tokens

All values are exact `getComputedStyle()` output from https://clireo.framer.website/ at desktop.

## Colors

| Token | Value | Usage (occurrences) |
|---|---|---|
| `--clireo-navy` | `rgb(27,41,120)` `#1B2978` | Services/Stats section bg, headings (96 text uses, 66 bg uses) |
| `--clireo-navy-deep` | `rgb(14,25,84)` `#0E1954` | Navbar bg, body copy (87 text uses) |
| `--clireo-navy-hero` | `rgb(5,11,41)` `#050B29` | Hero section bg |
| `--clireo-ice` | `rgb(245,249,252)` `#F5F9FC` | Alternating section bg |
| `--clireo-ice-alt` | `rgb(237,244,250)` `#EDF4FA` | Form input fills |
| `--clireo-mist` | `rgb(235,244,245)` `#EBF4F5` | Accent surface |
| `--clireo-pink` | `rgb(250,132,224)` `#FA84E0` | Primary CTA button |
| `--clireo-whatsapp` | `rgb(37,211,102)` `#25D366` | Floating action button |
| `--clireo-hairline` | `rgba(26,40,120,0.15)` | Dividers, muted text |
| white | `rgb(255,255,255)` | Cards, section bg (203 text uses) |
| white/7% | `rgba(255,255,255,0.07)` | Card fills on navy sections |

## Typography

Families: **Golos Text** (variable, primary) · **Fragment Mono** (accents/eyebrows).
**Every weight on the page is 400.** The design's character comes from *tight negative letter-spacing*, not weight.

| Role | Size / Line-height | Letter-spacing | Count |
|---|---|---|---|
| Display (hero h1) | `90px / 88.2px` | `-5.76px` | 5 |
| Section heading XL (h3) | `74px / 74.74px` | `-4.588px` | 15 |
| Section heading (h1) | `54px / 56.16px` | `-3.24px` | 24 |
| Section heading (h2) | `46px / 49.68px` | `-2.53px` | 24 |
| Heading md | `40px / 44.8px` | `-2.72px` | 20 |
| Heading md alt | `40px / 44px` | `-1.8px` | 6 |
| Card title (h4) | `26px / 31.2px` | `-0.91px` | 44 |
| Subheading | `22px / 29.7px` | `-0.88px` | 4 |
| Lead | `20px / 27px` | `-0.8px` | 7 |
| Body lg | `18px / 24.3px` | `-0.54px` | 24 |
| **Body (default)** | `17px / 23.46px` | `-0.34px` | **137** |
| Body alt | `16px / 23.2px` | `-0.24px` | 73 |
| Small | `15px / 21px` | `-0.15px` | 5 |
| **Eyebrow / label** | `14px / 18.2px` | `+1.26px` | 12 |

Eyebrow labels are the only **positive** tracking on the page — uppercase, preceded by a small square bullet (e.g. `■ ABOUT CLIREO`).

## Border radius
`8px` (54×) · `3px` (32×) · `14px` (29×) · `100px`/pill (24×) · `15px` (23×) · `12px` (19×) · `16px` (19×) · `13px` (16×) · `2px` (15×) · `20px` (9×)

## Elevation
Framer's 3-stop soft shadow at three intensities — see `--clireo-shadow-sm/-shadow/-shadow-md` in `globals.css`.
Base (29 uses): `rgba(26,40,120,0.04) 0 0.602187px 0.602187px -1.25px, rgba(26,40,120,0.04) 0 2.28853px 2.28853px -2.5px, rgba(26,40,120,0.02) 0 10px 10px -3.75px`

## Layout
- Content container: **max-width 1300px**, centered.
- Navbar: full-bleed, `height 63px`, `padding 0 32px`; inner container 1300px, `padding 12px 0`, `justify-content: space-between`.

## Breakpoints (Framer media queries — authoritative)
- Desktop `≥1200px` · Tablet `810–1199.98px` · Mobile `≤809.98px`
