# Clireo — Page Topology

Source: https://clireo.framer.website/ · Route: `/`
Stack detected: Framer (React), Lenis smooth scroll (`html.lenis`), Google Fonts.

## Viewport / Breakpoints (from Framer media queries — authoritative)
- **Desktop:** `min-width: 1200px`
- **Tablet:** `min-width: 810px and max-width: 1199.98px`
- **Mobile:** `max-width: 809.98px`

Content container is capped at **max-width 1300px**, centered.
Total document height at desktop: **15294px**.

## Layer stack
| z | Element | Position | Notes |
|---|---|---|---|
| top | `Nav` | `fixed` top, full width, h 63px | opacity 0 over hero, fades in |
| top | `WhatsApp FAB` | `fixed`, 56×56, bg `#25D366` | bottom-right float |
| — | `Scroll Triger` | 1px sentinel at top of Main | drives nav variant swap |
| base | `Main` (`14382px`) | flow | 12 sections |
| base | `Footer` (`912px`) | flow | |

`#template-overlay` ("Made in Framer" badge) is Framer branding — **excluded from the clone**.

## Section order (flow, top → bottom)
| # | Name | Top | Height | Background | Interaction model |
|---|------|-----|--------|-----------|-------------------|
| 1 | Hero | 0 | 912 | `#050B29` | static + inline booking form |
| 2 | About | 912 | 815 | `#F5F9FC` | **scroll-driven** word-by-word opacity reveal |
| 3 | Ticker | 1727 | 220 | `#F5F9FC` | **time-driven** infinite marquee |
| 4 | Our Services | 1947 | 984 | `#1B2978` | static/cards |
| 5 | Our Values | 2932 | 1113 | `#FFFFFF` | static/cards |
| 6 | Testimonials | 4045 | 1315 | `#F5F9FC` | static/cards |
| 7 | Why us | 5360 | 3612 | `#FFFFFF` | **scroll-driven** (tall — sticky/pinned sequence) |
| 8 | Our Approach | 8972 | 2282 | `#F5F9FC` | **scroll-driven** (tall — sticky/pinned sequence) |
| 9 | Doctors | 11254 | 999 | `#FFFFFF` | static/cards |
| 10 | Stats | 12253 | 525 | `#1B2978` | static, likely count-up |
| 11 | Blog | 12779 | 833 | `#FFFFFF` | static/cards |
| 12 | FAQs | 13612 | 770 | `#F5F9FC` | **click-driven** accordion |
| 13 | Footer | 14382 | 912 | — | static |

## Assembly notes
- Sections 7 and 8 are far taller than a viewport (3612px / 2282px) — these are pinned scroll sequences, not tall static content. Their interaction model must be confirmed by scroll before building.
- Lenis must be installed for scroll feel to match.
