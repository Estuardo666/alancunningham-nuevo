# Respaldo del tema de colores (2026-11-25)

Estado del tema UI antes del cambio de colores (commit `ca1427b`).

## Contenido
- `globals.css.bak` — copia íntegra de `src/app/globals.css`: tokens de `@theme inline`, `:root` (claro), `.dark` y `@media (prefers-color-scheme: dark)`.
- `hardcoded-colors.txt` — colores escritos directamente en componentes (tarjetas pastel, turismo odontológico, timeline, formulario `#30005b`, `pilarColores.ts`), con archivo y línea.

## Restaurar
Tag git: `tema-original-2026-11-25`.

Solo el CSS del tema:
```powershell
git checkout tema-original-2026-11-25 -- src/app/globals.css
```

CSS + componentes con colores fijos:
```powershell
git checkout tema-original-2026-11-25 -- src/app/globals.css src/app/turismo-odontologico/page.tsx src/components/site/Cards.tsx src/components/site/PageShell.tsx src/components/site/TimelineSteps.tsx src/components/site/ConsultaForm.tsx src/components/site/Blocks.tsx src/components/sites/clireo-framer-website-a1614289/shared/pilarColores.ts src/app/contacto/page.tsx
```

Sin git: copiar `globals.css.bak` sobre `src/app/globals.css`.
