# /blogs — Topología
Fuente: https://clireo.framer.website/blogs · 1440 · alto 2620px

| # | Sección | Rango Y | Interacción |
|---|---|---|---|
| 1 | SiteNav fixed | 0 | existente |
| 2 | BlogsHero (mismo patrón que el hero de detalle de tratamiento) | 0–546 | estática |
| 3 | BlogGrid (5 posts) | 546–1707 | hover en card |
| 4 | SiteFooter (CTA + footer) | 1708–2620 | existente |

## Layout
- Hero: 546px, h1 90/88.2/-5.76, imagen de fondo + overlay, contenedor 1300px.
- Grid: 3 columnas de 417px, gap columna 21px, gap fila 36px; card 417x438.
- Card: imagen 417x320 radius 14px · meta (fecha + chip categoría) · h4 26/31.2/-0.91 (2 líneas, 62px).

## Paleta
Fondo var(--background), texto var(--foreground), chip var(--accent-yellow)/var(--accent-foreground), meta var(--muted-foreground).
