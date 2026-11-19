# Plan de reemplazo y uso — multimedia nueva del estudio (nov 2026)

Fuente: `public/Nueva multimedia/ESTUDIO ODONTOLOGICO/` (60 fotos `FOTOS-web`, 5 reels `VIDEOS-web`).
Copias con nombre: `public/images/estudio/` (15 fotos) y `public/videos/estudio/` (5 reels).

## Decisiones confirmadas

- Todas las fotos actuales del sitio son del local actual (no hay fotos de otro local).
- Se reemplazan **todas** las fotos de `INSTALACIONES` (11 fotos de celular).
- Formato: fotos 2:3 vertical (1333×2000), reels 9:16 (1080×1920). Ninguno sirve tal cual para hero.

## Material

**Fotos** — verticales, profesionales, luz blanca pareja.

| Grupo | Archivos | Mejores |
|---|---|---|
| Sala de espera | DSC08092–08102, 08109, 08110, 08115, 08116, 08120, 08122 | 08092, 08120, 08122, 08098, 08115 |
| Consultorio (sillón + microscopio) | DSC08063–08066, 08074, 08075, 08077, 08079, 08080 | 08063, 08074, 08075 |
| Microscopio Newton | DSC08046, 08047, 08067–08069, 08078, 08083, 08090 | 08047, 08068, 08069 |
| Mobiliario / mesadas | DSC08057–08062, 08076, 08084, 08086 | 08084, 08059 |
| Bar de agua | DSC08111–08114 | 08111, 08113 |
| Instrumental y materiales | DSC08043–08045, 08048, 08051–08056, 08070–08072, 08081, 08082, 08088, 08089, 08091 | 08053, 08054, 08052, 08088 |

Descartables: duplicados (08043/08044, 08093/08100, 08109/08110) y foco muy corto (08070–08072).

**Reels** (1080×1920, 14–23 s, gradación oscura): 1 instrumental en mano · 2 odontólogo con lupas · 3 consultorio con microscopio · 4 odontóloga con escáner intraoral · 5 panel del equipo B/N.

## 1. Hero home — 2 columnas

`HeroSection.tsx` hoy: video Pexels a pantalla completa con overlays y texto encima.

Nuevo layout (desktop `lg:grid-cols-2`):
- **Col. 1 — video vertical** del estudio dentro de un marco 9:16 o 4:5 redondeado (`object-cover`), autoplay muted loop, póster = primer frame.
  - Opción A: reel 3 solo (consultorio). Opción B: montaje corto 3 → 4 → 2 (~15 s) con ffmpeg.
  - Versión web: 720×1280, H.264, sin audio, ~1,5 MB + póster `.webp`.
- **Col. 2 — texto actual** (eyebrow, h1, bajada, CTAs, rating), sin cambios de copy. Fondo `bg-hero` liso; se quitan los overlays.
- **Mobile:** texto primero, video debajo (o video 4:5 arriba con altura limitada) — decidir en diseño.
- Se elimina el uso de `hero-consulta-pexels.*` (los archivos quedan en `public/`).

## 2. Imágenes 16:9 generadas con OpenAI (Batch, calidad low)

Objetivo: convertir fotos verticales a apaisadas para slots horizontales.

**Método:** endpoint de edición de imagen (`gpt-image-1`) con la foto como entrada y prompt de *outpainting* ("extender la escena a los lados manteniendo el contenido original intacto"). El modelo devuelve 1536×1024 (3:2); se recorta a 16:9 (1536×864) con Pillow/ffmpeg.

**Batch API:** archivo `.jsonl` con una línea por imagen → `POST /v1/batches` → resultados en ≤24 h con 50 % de descuento. Verificar al implementar que el endpoint de edición de imágenes esté habilitado en Batch; si no, correr las mismas llamadas en un script secuencial (son pocas).

**Costo estimado:** ~15–20 imágenes en calidad low ≈ menos de USD 1 (confirmar precios vigentes). Requiere `OPENAI_API_KEY` en `.env.local`.

**Riesgos a tener en cuenta:**
- El outpainting **inventa** lo que no está en la foto (paredes, muebles, ventanas). Como es una clínica real, cada imagen debe revisarse para que no muestre instalaciones que no existen.
- Calidad low puede dar bordes blandos o texto/logos deformados (p. ej. "NEWTON"): elegir fotos con laterales simples (paredes blancas, piso) y sin texto cerca del borde.
- Alternativa sin IA para fondos detrás de overlay: ampliar con desenfoque espejado (la foto nítida al centro, laterales blur). Sirve para heros internos donde la imagen va tapada por el tinte.

**Candidatas a generar** (laterales simples):

| Uso | Foto base |
|---|---|
| Heros internos (reemplazan los 6 de `public/images/bg heros/`, que son de stock) | 08092, 08120, 08063, 08074, 08075, 08084 |
| Hero de /nosotros e imagen OG | 08092 o 08120 |
| Cómo trabajamos (4 pasos) | 08063, 08084, 08075, 08098 |
| Tecnología: microscopio (nuevo ítem) | 08068 |
| CTA final del sitio | ver punto 3 |

## 3. Foto para el CTA que se repite

El CTA del footer (`SiteFooter.tsx`, `conCta`) usa hoy un asset del template (`PnpAr08n1JUeJxXkKediO8U3i0.webp`).

Propuesta: **DSC08122** o **DSC08120** (sala de espera completa, cálida, transmite "venir al estudio"). Alternativa: DSC08063 (consultorio). Revisar el recorte que pide ese slot antes de decidir si va vertical directa o la versión 16:9 generada.

## 4. Galería de instalaciones — reemplazo total

`INSTALACIONES` en `src/content/clinica-contenido.ts` (usada en /nosotros, /nosotros/instalaciones, hero y OG de /nosotros): reemplazar las 11 fotos por ~15 nuevas en orden:

08092, 08120, 08098, 08115, 08111, 08113, 08063, 08074, 08075, 08047, 08068, 08084, 08053, 08054, 08052

La galería es masonry, las verticales funcionan sin recorte. `INSTALACIONES[0]` (hero/OG) debe apuntar a la versión 16:9 generada.

## 5. Videos del consultorio

`ConsultorioVideoCarousel` (6 videos de WhatsApp en /nosotros): reemplazar por los 5 reels — son 9:16, igual que el formato actual del carrusel. Comprimir a ~720p.

## 6. Otros usos menores

- Tecnología: agregar el microscopio Newton (hoy no figura) con 08047/08068.
- Endodoncia / microcirugía apical: 08068/08069 como apoyo.
- Mantener las fotos de la modelo (DSC_0110, 0123, 0135, 0136): no hay equivalente en el material nuevo.

## Orden de trabajo sugerido

1. Comprimir reels + pósters (ffmpeg).
2. Hero home 2 columnas con video.
3. Reemplazar `INSTALACIONES` y carrusel de videos.
4. Script de generación 16:9 (Batch low) → revisión manual de cada imagen.
5. Aplicar 16:9 en heros internos, OG, Cómo trabajamos y CTA.
6. Excluir `public/Nueva multimedia/` (~35 MB) del deploy.
