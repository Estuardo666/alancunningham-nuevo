# QA visual — /treatments/cosmetic-care

| Métrica | Original (1440) | Clon (1280→1440) |
|---|---|---|
| Alto total | 6075px | 5939px (FAQ y textos en español algo más cortos) |
| Columna artículo | 672px | 672px |
| Sidebar | 470px, sticky top 75px | 470px, sticky top 75px |
| h2 / h3 / p | 31/43.4 · 25/35 · 18/24.3 | idénticos |
| Related cards | 3 × 419px | 3 × 419px |

Interacciones verificadas: acordeón FAQ (click cambia aria-expanded, primer item abierto por
defecto), formulario controlado con estado enviado, sticky del sidebar, nav fija.
Mobile 375: sidebar pasa a estático debajo del artículo, sin overflow horizontal.

## Paleta
Ningún color del sitio original se copió. Todo usa los tokens del proyecto:
--hero, --background, --secondary, --card, --foreground, --brand, --brand-hover, --accent-coral, --border.
