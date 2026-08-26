# SiteNav Specification

## Overview
- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/SiteNav.tsx`
- **Interaction model:** scroll-driven (visibility) + hover-driven (link label swap)

## DOM Structure
```
nav                       fixed top, full-bleed
└─ div[Container]         maxW 1300, flex-row, space-between, center
    ├─ div[Brand logo]    flex-row, gap 10 → [BrandMark svg 19×19] + h5 "Clireo"
    ├─ div[Nav items]     flex-row, gap 40 → 5 × link
    └─ div[Button]        CTA "Contact us"
```

## Computed Styles (exact)

### nav
- position: fixed; top: 0; left: 0; right: 0; zIndex: 50
- display: flex; flexDirection: row; justifyContent: center; alignItems: center
- height: 63px; padding: 0 32px
- backgroundColor: `#0E1954` in the scrolled state, transparent over the hero

### div[Container]
- display: flex; justifyContent: space-between; alignItems: center
- width: 100%; maxWidth: 1300px; padding: 12px 0

### Brand
- Wrapper: flex-row, alignItems: center, gap: 4px (outer wrapper gap 10px), width 135px
- Mark: `BrandMark` from shared `icons.tsx`, rendered 19×19, color white
- Wordmark: `h5` "Clireo" — fontSize: 24px; lineHeight: 24px; letterSpacing: -1.368px; color: `#FFFFFF`

### Nav items
- display: flex; flexDirection: row; alignItems: center; gap: 40px (total width 430px)
- Each link label: fontSize: 16px; lineHeight: 23.2px; letterSpacing: -0.24px; color: `#FFFFFF`
- Links, in order: `Home`, `Treatments`, `Reviews`, `About`, `Blog`

### CTA Button ("Contact us")
- width: 145px; height: 39px
- display: flex; justifyContent: center; alignItems: center; gap: 22px
- padding: 8px 30px; backgroundColor: `#FFFFFF`; borderRadius: 11px
- boxShadow: `var(--clireo-shadow)`
- Label: 16px / 23.2px, ls -0.24px, color `#1B2978`
- Trailing `ArrowUpRightIcon` (the sprite icon used 16× across the page)

## States & Behaviors

### Scroll visibility (scroll-driven) — PRIMARY
- **State A (over hero):** fully visible but with a **transparent background**, white wordmark, white links and a white CTA pill. Framer calls this variant `Desktop Transparent`.
- **State B (scrolled past hero):** same contents over `background-color: #0E1954`.

> **Correction.** An earlier pass recorded State A as `opacity: 0` / invisible. That reading was taken while the tab was backgrounded, so Framer's rAF-driven appear animation had not run and the bar was still sitting at its pre-animation opacity. The bar *is* visible at scroll 0.
- **Trigger:** a 1px sentinel at the top of the page content. Use an `IntersectionObserver` on that sentinel — when it leaves the viewport, switch to State B. Do **not** use a hard-coded scroll pixel threshold.
- **Transition:** `transition: background-color 0.3s ease`.

### Link hover — label slide swap
Each nav link renders its label **twice** in the live DOM inside a fixed-height (22px) clipping container. On hover the pair translates up by one line height, so the duplicate replaces the original.
- Container: `height: 22px; overflow: hidden; position: relative`
- Inner stack: two copies of the label, `transition: transform 0.3s ease`
- Hover: `transform: translateY(-23px)` (one label line-height)

The CTA button label uses the same duplicated structure and the same swap.

## Assets
- `BrandMark`, `ArrowUpRightIcon` from `src/components/sites/clireo-framer-website-a1614289/shared/icons.tsx`

## Text Content (verbatim)
`Clireo` · `Home` · `Treatments` · `Reviews` · `About` · `Blog` · `Contact us`

## Responsive Behavior
- **Desktop (≥1200px):** as specified.
- **Tablet (810–1199px):** container fluid; nav item gap reduces to ~28px.
- **Mobile (≤809px):** the link row and CTA are replaced by a hamburger (`MenuIcon` from the sprite, used 2× on the live site). Brand stays left, menu button right; `padding: 0 20px`.
