# TreatmentCard Specification

## Overview
- Target: .../treatments-071de1bc/TreatmentCard.tsx
- Interaction model: link + hover (zoom de imagen)

## DOM
a > [media 300px] + [body]; media: img cover + gradiente inferior + badge de icono; body: h4 + p

## Computed styles
- a: flex column; gap 14px; overflow hidden; 420x397
- media: height 300px; border-radius 12px; overflow hidden; bg var(--hero)
- img: 100%/100%; object-fit cover
- gradiente: absolute; top 186px; height 114px; inset-x 0; linear-gradient(transparent 1.57%, color-mix(in srgb, var(--hero) 60%, transparent) 69.46%)
- badge: absolute; left 24px; bottom 24px; 50x50; radius 3px; bg rgba(255,255,255,.07) (clon bg-white/10 + backdrop-blur); flex center
- icono: 28x31, blanco
- body: padding 0 4px; flex column; gap 5px
- h4: 26px / 31.2px / ls -0.91px / weight 400 / var(--foreground)
- p: 17px / 23.46px / ls -0.34px / var(--foreground) opacity .7

## Hover
- img scale(1) → scale(1.05), transition transform 600ms cubic-bezier(.4,0,.2,1)

## Responsive
- 1440: 3 col 420px, gap 36/20 · 768: 2 col · 390: 1 col, media 240px
