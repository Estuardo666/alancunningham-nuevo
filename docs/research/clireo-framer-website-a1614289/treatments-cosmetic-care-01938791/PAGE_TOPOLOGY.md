# /treatments/cosmetic-care — Topología

Fuente: https://clireo.framer.website/treatments/cosmetic-care · 1440px · alto total 6075px

| # | Sección | Rango Y | Interacción |
|---|---------|---------|-------------|
| 1 | SiteNav fixed | 0 | existente |
| 2 | TreatmentDetailHero | 0–546 | estática (imagen + overlay, h1 90px, subtítulo) |
| 3 | TreatmentArticle + BookingForm sticky | 546–4267 | sidebar sticky top 75px; FAQ accordion |
| 4 | RelatedTreatments (3 cards) | 4268–5163 | hover |
| 5 | SiteFooter (CTA + footer) | 5162–6075 | existente |

## Layout de la sección 3
- Contenedor 1300px centrado (x=62). Columna de artículo 672px; columna sticky 470px en x=858 (gap ~124px).
- Artículo: imagen 672x516 (radius 12) → párrafos → h2 "What We Treat" + ul → h2 "Our Services" + 4 bloques (h3 + p) → h2 "Why Choose" + ul → h2 "Our Approach" + p → h2 "Benefits" + ul → FAQ (h4 "Frequent Questions" + 5 items).
- Tipografía: h2 31/43.4 ls -1.24 · h3 25/35 ls -1 · p y li 18/24.3 ls -0.54 · ul list-style disc, padding-left 0 (marcador dentro).
- Form sticky: card blanca radius 15px, padding 34px, top 75px, gap 16px. Inputs envueltos en div bg #f5f9fc (clon: var(--secondary)), radius 10px, padding 13px 16px. Botón: radius 40px, alto 47px, full width.

## Nota de paleta
Colores de Clireo (navy #0e1954, rosa #fa84e0) NO se copian: se usan --hero, --brand, --accent-coral, --secondary del proyecto.
