# /treatments — Topología

Fuente: https://clireo.framer.website/treatments · viewport 1440 (page 1425) · alto total 2661px

| # | Sección | Rango Y | Modelo de interacción |
|---|---------|---------|-----------------------|
| 1 | SiteNav (fixed, 63px) | 0 | scroll (fondo navy tras sentinel 1px) — componente existente |
| 2 | TreatmentsHero | 0–472 | estática + imagen de fondo con scale(1.2) y overlay |
| 3 | TreatmentsGrid (5 cards) | 472–1553 | estática; hover en card |
| 4 | SiteFooter (CTA + footer) | 1553–2661 | existente |

## Layout
- Contenedor: max-width 1300px, página 1425 → margen 62.5px.
- Hero section: padding 300px 16px 40px, align-items center, alto 472.5px, fondo navy rgb(14,25,84).
  - Imagen de fondo 1hIaY1IIxNgvQ6kgwdaw6yBAVhc.webp, background-size cover, position 49.6% 64.4%, capa con transform scale(1.2).
  - Overlay: linear-gradient(rgb(14,25,84) 0%, rgba(12,14,18,0) 100%) → en el clon: var(--hero) → transparente.
  - h1 en x=62 (izquierda), 90px/88.2px, ls -5.76px, blanco. Párrafo debajo (gap ~50px), ancho 1300, 18px/24.3px, ls -0.54px.
- Grid section: fondo claro rgb(245,247,247) → var(--background), padding 110px 32px 140px, grid repeat(3, 420px), gap 36px 20px, cards 420x397.

## Nota de paleta
Ningún color de Clireo se copia. Mapeo: navy #0e1954→var(--hero), texto navy→--foreground, fondo #f5f7f7→--background, badge rgba(255,255,255,.07)→bg-white/10.
