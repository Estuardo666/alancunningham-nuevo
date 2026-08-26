# QA visual — /treatments

Comparación por geometría del DOM (el panel del navegador no compone frames en esta sesión,
así que no fue posible capturar screenshots; se midieron bounding boxes en su lugar).

| Métrica | Original (1440) | Clon (1440) |
|---|---|---|
| Alto total | 2661px | 2671px |
| Cards x | 63 / 503 / 943 | 62 / 502 / 942 |
| Card ancho | 420px | 420px |
| Card alto | 397px | 428px (títulos en español ocupan 2 líneas; filas alineadas con min-h) |
| Gap filas | 36px | 35px |
| h1 | 90/88.2/-5.76 | idéntico |

Mobile 375: sin scroll horizontal, 1 columna, h1 44px.
