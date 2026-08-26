# Clireo — Behavior Bible

## Global
- **Smooth scroll: Lenis.** `<html>` carries class `lenis`. Package `lenis` is installed. Without it the scroll feel is visibly wrong.
- No dark-mode variant; the page has one fixed light/navy theme.
- `prefers-reduced-motion: reduce` media query is present — animations must be gated on it.

## Navbar — background fade (scroll-driven)
- **Element:** `<nav>` fixed at top, full width, `height 63px`, `padding 0 32px`.
- **State A (over hero, scrollY ≈ 0):** visible, **transparent background**, white wordmark / links / CTA pill.
- **State B (scrolled past hero):** same contents over `background-color: #0E1954`.

> **Correction to an earlier note in this file:** State A was first recorded as `opacity: 0`. That was measured with the tab backgrounded, before Framer's appear animation had run. The bar is visible at scroll 0.
- **Trigger:** a 1px sentinel element named `Scroll Triger` sits at the top of `Main`; the nav variant swaps when it leaves the viewport. Implement with an IntersectionObserver on a 1px sentinel — *not* a scroll-position listener.
- Framer names the two variants `Desktop Transparent` (A) and `Desktop navigation` (B).
- Confirmed visually at scroll 0 and after scrolling.

## Section 2 "About" — word-by-word reveal (scroll-driven)
- The paragraph is split per word. Each word animates `opacity` from ~`0.15` → `1` as the section scrolls through the viewport, staggered left-to-right.
- Confirmed visually: mid-scroll the first words are solid navy while later words are still faded.
- Implement with a scroll-progress mapping over the word list (IntersectionObserver + scroll progress, or `animation-timeline: view()`).

## Section 4 "Our Services" — manual carousel (NOT auto)
- Markup is `section.framer-slideshow.framer-slideshow-axis-x` with **Previous / Next** buttons; the track transform does not change over time.
- 20 slides in the DOM (5 unique × 4) so it wraps.
- Do not build this as a marquee.

## Section 3 "Ticker" — infinite marquee (time-driven)
- Content: `Dentistry ✳ Pediatrics ✳ Primary Care ✳ Aesthetics ✳ Surgery`, repeated **3×** in the DOM for seamless looping.
- Separator is an SVG sparkle/asterisk glyph between each item.
- Continuous horizontal translate; use the `clireo-marquee` keyframes in `globals.css` (`translateX(0)` → `translateX(-50%)`).

## Sections 7 "Why us" (3612px) & 8 "Our Approach" (2282px) — pinned scroll sequences
- Both are far taller than one viewport, which means a sticky/pinned element with content scrolling past it.
- "Our Approach" has three steps — `Consultation`, `Treatment`, `Recovery` — whose labels appear **twice** in the DOM: once as a tab/indicator row and once as full content panels. This is the classic **scroll-driven auto-switching sidebar**, NOT a click-driven tab set. Build with an IntersectionObserver that sets the active step as each panel scrolls past; do not attach click handlers as the primary mechanism.

## Section 12 "FAQs" — accordion (click-driven)
- 6 questions; the **first is open by default** (only Q1's answer is present in the rendered text).
- Clicking a row expands its answer and collapses the previously open one.

## Section 10 "Stats" — numbers render twice
- `18K+`, `32+`, `97%`, `17+` each appear twice in the DOM, which is the signature of a count-up/roll animation (a static measuring copy plus an animating copy).

## Floating action button
- WhatsApp FAB, `56×56`, `background #25D366`, fixed bottom-right, always visible (present at every scroll position).

## Hover states
Not individually captured — apply the Framer default of a `0.3s ease` transition on colour/opacity/transform for buttons, cards and nav links, and verify in QA.

## Excluded
`#template-overlay` — the "Made in Framer" badge and the trailing "Create a free website with Framer…" line are Framer branding, not part of the design.


## Entry animation — per-word blur / fade / slide-up
Framer's text effect. Every word is its own `inline-block` span starting at:

```
opacity: 0.001;
filter: blur(Npx);
transform: translateY(20px);
```

resolving to `opacity: 1; filter: blur(0); translateY(0)`, staggered left-to-right as the block
enters the viewport. The blur radius is tiered by role:

| Role | Blur | Example |
|---|---|---|
| Hero `h1` | 5px | Where every health matter |
| Section `h2` / `h3` | 8px | Expert Care For Every Health Need |
| Card `h4` titles | 3px | Experienced Specialists |
| Card body `p` | 1px | Our team combines clinical expertise… |

19 blocks on the page use it (verified against the server-rendered HTML). The About section's
40px headline is **not** one of them — that one uses the colour reveal
(`rgba(26,40,120,0.15)` → `#1B2978`) documented above.

**Timing is an approximation.** The initial and final states are exact, but the stagger and
duration are applied by Framer's runtime and are not present in the HTML; they could not be
measured live because a backgrounded tab throttles rAF. The clone uses a 0.7s tween with a 0.045s
per-word stagger on the site's own easing curve, `cubic-bezier(0.44, 0, 0.56, 1)`, taken from its
appear-animation config.

## Page-load appear animations (hero)
From `__framer__appearAnimationsContent`:

| Target | Initial | Transition |
|---|---|---|
| hero copy | `opacity 0.001, y 20` | spring, damping 27, mass 0.3, stiffness 125, delay 1.8s |
| hero image | `scale 1.1` | spring, bounce 0.1, duration 1.8s, delay 0.1s |
| assorted blocks | `opacity 0.001, y 20/30` | spring, damping 80, stiffness 200, delays 0.1–0.6s |

## Hero background — no overlay (verified three ways)
The hero has **no** gradient scrim, filter, blend mode or overlay element.

1. **DOM scan.** All 106 hero descendants were walked including `::before` / `::after`. Exactly two
   nodes paint anything: the section itself (`background-color: #050B29`) and the booking form
   (`#FFFFFF`). Everything else is `opacity: 1`, `filter: none`, `mix-blend-mode: normal`, no
   `background-image`. Nothing outside the hero overlaps it.
2. **Pixel sampling.** The variant the live page actually displays was fetched and decoded to a
   canvas. Along the left edge at mid-height it reads `rgb(69,39,15)` → `rgb(116,76,39)` →
   `rgb(126,82,54)` — **dark warm brown** (the clinician's out-of-focus hair and shoulder), not
   navy. The local copy in this repo samples to `rgb(73,43,17)` → `rgb(120,78,42)` →
   `rgb(124,81,55)`: the same image, within re-encoding tolerance.
3. **Asset identity.** The master is 2400x1680, opaque (no alpha channel; it does carry an `ICCP`
   profile chunk). Swapping the local copy for the live CDN URL produced no visual change.

The dark left edge reads as "dark blue" because near-black brown sits against the section's navy
`#050B29` in a compression-lossy screenshot. Any remaining brightness difference between clone and
source is the `object-fit: cover` crop shifting with viewport width — the image is bottom-anchored
via `object-position: 50% 100%`, so a narrower viewport shows a lower, darker band of the photo.

**Nothing was added to the hero.** Adding a scrim would be a deliberate deviation from the source.

## Section 4 card scrim — confirmed
Each treatment card carries a `Mask` element, 407x161, pinned to the card's bottom edge:
`linear-gradient(rgba(0,0,0,0) 1.56778%, rgba(1,5,23,0.2) 69.4573%)`. The card description also
sits at `opacity: 0.8`. Both are reproduced in the clone.

## Entry-animation trigger — viewport only
The per-word reveal fires from a single `IntersectionObserver`
(`rootMargin: "0px 0px -15% 0px"`) and nothing else. There is deliberately **no** timer fallback:
a timeout would reveal below-the-fold copy that the reader has not scrolled to, which is exactly
what the effect exists to avoid. The only non-scroll path is `prefers-reduced-motion` (reveal
immediately) and browsers without `IntersectionObserver` (reveal immediately rather than strand
the text at `opacity: 0`).

Note when testing: Chrome defers IntersectionObserver callbacks in a **backgrounded tab**, so the
copy legitimately sits at its initial state until the tab is focused. The source site behaves
identically.
