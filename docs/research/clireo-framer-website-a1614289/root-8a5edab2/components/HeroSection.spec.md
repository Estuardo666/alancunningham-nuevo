# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/clireo-framer-website-a1614289/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/clireo-framer-website-a1614289/root-8a5edab2/01-hero-desktop.jpg`
- **Interaction model:** static (form is presentational; no backend)

## DOM Structure
```
section[Hero]                       full-bleed, bg navy, overflow hidden
├─ div (absolute inset-0)           background photo layer
│   └─ img                          hero photo, object-cover, scaled 1.00779
└─ div[Container]                   maxW 1300, flex-row, justify-between, align-end
    ├─ div[Left]                    flex-col, gap 100
    │   ├─ div (maxW 600)           flex-col, gap 14
    │   │   ├─ div gap 10
    │   │   │   ├─ AvatarRow        3 × 39px round avatars + "Backed by / 8+ Specialists"
    │   │   │   └─ h1               "Where every health matter"
    │   │   └─ p (maxW 450)         lead paragraph
    │   └─ div[Bottom] (maxW 400)   flex-col, gap 20
    │       ├─ h1                   "4.8*"
    │       └─ AvatarRow            2 × 48px round avatars + "+" pill + caption
    └─ form                         booking card, white, r20, p30, w420
```

## Computed Styles (exact)

### section[Hero]
- display: flex; flexDirection: column; justifyContent: flex-start; alignItems: center; gap: 60px
- position: relative; overflow: hidden
- minHeight: 900px; padding: 0 32px
- backgroundColor: `#050B29`

### Background layer
- position: absolute; inset: 0; zIndex: 0; overflow: clip
- img: `/sites/clireo-framer-website-a1614289/root-8a5edab2/images/r7w4rUz0elpf5RTtb7zb1MZTmhQ.webp` (natural 1745×1221)
- img fills the layer, `object-fit: cover`
- The layer carries `transform: scale(1.00779)` — a subtle static overscale. Reproduce as `scale-[1.008]`.

### div[Container]
- display: flex; flexDirection: row; justifyContent: space-between; alignItems: flex-end
- position: relative; width: 100%; maxWidth: 1300px
- padding: 120px 0 60px

### div[Left]
- display: flex; flexDirection: column; justifyContent: flex-start; alignItems: flex-start; gap: 100px

### Headline block (maxWidth 600px, gap 14px) → inner gap 10px
- **h1** "Where every health matter"
  - fontSize: 90px; lineHeight: 88.2px; letterSpacing: -5.76px; fontWeight: 400; color: `#FFFFFF`
  - width 600px → wraps to 2 lines
- **Avatar row above the h1:** 3 avatars, each `39×39`, `borderRadius: 100px`, overlapped (negative margin ~-10px), followed by a two-line text block:
  - "Backed by" — 15px / 21px, ls -0.15px, `#FFFFFF`
  - "8+ Specialists" — 16px / 23.2px, ls -0.24px, `#FFFFFF`
  - Avatar files: `nehHdbGZLbGGvtzCnfwaTT4QQWk.webp`, `NRJ7RAbIHkChosM6TZfMgLt9oc.webp`, `Hu23s5yrWh9GMj9Fl9nfLLaQqOw.webp`

### Lead paragraph (maxWidth 450px)
- fontSize: 20px; lineHeight: 27px; letterSpacing: -0.8px; color: `#FFFFFF`
- Text: "A comprehensive medical, dental, pediatric, and cosmetic services focused on comfort, quality, patient wellbeing and lasting results."

### div[Bottom] (maxWidth 400px, gap 20px)
- **h1** "4.8*" — fontSize: 90px; lineHeight: 88.2px; letterSpacing: -5.76px; color: `#FFFFFF`
- Avatar row: 2 avatars `48×48` `borderRadius: 100px` (`Tq7FlazMvgvvdDdZ9uI0ahHS0gA.webp`, `9Wyco1Y04y918xfuR6Tv5ui4.webp`) + a white circular "+" badge of the same size, overlapped
- Caption: "Patients value our caring, quality care!" — 17px / 23.46px, ls -0.34px, `#FFFFFF`, wraps to 2 lines

### form (booking card)
- display: flex; flexDirection: column; justifyContent: center; alignItems: flex-start; gap: 18px
- width: 420px; maxWidth: 420px; padding: 30px
- backgroundColor: `#FFFFFF`; borderRadius: 20px
- **Card title** "Book appointment" — h4, 26px / 31.2px, ls -0.91px, `#1B2978`
- **Field group:** flex-col, gap 16px, width 360px
- **Each label block:** flex-col, gap 7px
  - Label text: 16px / 23.2px, ls -0.24px, `#0E1954`
  - Input shell: height 45px, padding 13px 16px, backgroundColor `#F5F9FC`, borderRadius 12px, flex-row, align-center
- **Fields, in order:**
  1. `Full Name*` — text input, placeholder "Jordan Feliz"
  2. `Phone*` — tel input, placeholder "+44 501 255 001"
  3. `Date & Time*` — a 360px row, gap 12px, of two 174px controls: a native `date` input and a `Select Time` dropdown with options `10am - 12am`, `2pm - 4pm`
  4. `Message*` — textarea, shell height 110px, padding 13px 16px, placeholder "Your Message"
- **Submit button:** width 360px; height 47px; backgroundColor `#FA84E0`; borderRadius 40px; label "Send message" 16px / 23.2px, ls -0.24px, color `#FFFFFF`, centered

## States & Behaviors
- **Navbar:** rendered by a separate component; it is `opacity: 0` over this section. Hero must NOT reserve space for it — content starts at `padding-top: 120px`.
- **Hover:** apply `transition: all 0.3s ease` to the submit button and the "+" badge. No captured hover deltas — keep hovers subtle (slight opacity/brightness shift).
- Placeholder colour is a muted navy; use `#0E1954` at ~40% opacity.
- No form submission — `onSubmit` should `preventDefault()`.

## Assets (all already downloaded)
Base path: `/sites/clireo-framer-website-a1614289/root-8a5edab2/images/`
- `r7w4rUz0elpf5RTtb7zb1MZTmhQ.webp` — hero background photo
- `nehHdbGZLbGGvtzCnfwaTT4QQWk.webp`, `NRJ7RAbIHkChosM6TZfMgLt9oc.webp`, `Hu23s5yrWh9GMj9Fl9nfLLaQqOw.webp` — top avatars
- `Tq7FlazMvgvvdDdZ9uI0ahHS0gA.webp`, `9Wyco1Y04y918xfuR6Tv5ui4.webp` — bottom avatars

## Text Content (verbatim)
- "Backed by" / "8+ Specialists"
- "Where every health matter"
- "A comprehensive medical, dental, pediatric, and cosmetic services focused on comfort, quality, patient wellbeing and lasting results."
- "4.8*"
- "Patients value our caring, quality care!"
- "Book appointment", "Full Name*", "Phone*", "Date & Time*", "Select Time", "10am - 12am", "2pm - 4pm", "Message*", "Send message"

## Responsive Behavior
Breakpoints are Framer's: desktop ≥1200px · tablet 810–1199.98px · mobile ≤809.98px.
- **Desktop (≥1200px):** as specified — two columns, form pinned right and bottom-aligned.
- **Tablet (810–1199px):** container fluid below 1300px; the h1 drops to ~64px and the form narrows to ~380px while staying beside the Left column.
- **Mobile (≤809px):** Container becomes `flex-col`, `align-items: stretch`; the form moves below the text and goes full-width; h1 drops to ~46px with letterSpacing ~-2.5px; the `gap: 100px` in Left collapses to ~48px; section padding becomes `0 20px` with `padding: 100px 0 48px` on the container.
