# QA visual — /contact
(Sin screenshots: el panel del navegador no compone frames; se midieron bounding boxes.)

| Métrica | Original 1440 | Clon 1440 |
|---|---|---|
| Form card | 725x572 en x638 | 725x573 en x637 |
| Columna izq / h2 | 455px, 46px | 455px, 46px |
| Mapa | 1300x730 | 1300x730 |
| Footer | ausente | ausente (igual que el original) |

Nav: variante `overLight` — texto var(--foreground) sobre el fondo claro al tope, navy al hacer scroll.
Verificado en modo claro (texto #172554) y oscuro (#f8faff). Mobile 375: sin overflow.
