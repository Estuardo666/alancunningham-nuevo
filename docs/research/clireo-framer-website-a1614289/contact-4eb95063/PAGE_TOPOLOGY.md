# /contact — Topología
Fuente: https://clireo.framer.website/contact · 1440 · alto 1738px

| # | Sección | Rango Y | Interacción |
|---|---|---|---|
| 1 | SiteNav fixed | 0 | existente |
| 2 | ContactSection (columna izq + form + tarjeta de llamada) | 0–1008 | formulario controlado |
| 3 | MapSection (iframe Google Maps) | 1008–1738 | iframe |
| — | Footer | NO existe en esta página del original |

## Layout
- Sección: padding 128px 32px 110px; bg rgb(245,249,252) → var(--secondary).
- Contenedor 1300px: columna izquierda 455px (eyebrow + h2 + párrafo), columna derecha 725px.
- Form: bg blanco, radius 15px, padding 30px 24px, gap 16px, sombra --clireo-shadow. Campos Nombre/Teléfono en 2 columnas (333px c/u), el resto full width (677px). Botón alto 47px, full width.
- Tarjeta "Llamanos": debajo del form, bg blanco, radius 12px, padding 30px, gap 20px; título 22/29.7/-0.88; botón pill radius 11px, padding 8px 30px, alto 39px.
- Map: alto 730px, iframe embed, radius 8px.

## Tipografía
- eyebrow 14/18.2/+1.26 uppercase · h2 46/49.68/-2.53 · p 17/23.46/-0.34

## Paleta
Sin colores de Clireo: --secondary (fondo), --card (tarjetas), --foreground, --brand (botón), --accent-coral (asteriscos), --clireo-shadow.
