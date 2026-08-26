# Plan de implementación — Web nueva Alan Cunningham / Smile Design Center

**Proyecto destino:** `Alan/alancunningham-nuevo`
**Fecha:** 21 de agosto de 2026
**Fuentes cruzadas:**
- [analisis-web-nueva-design-system.md](analisis-web-nueva-design-system.md) — sistema de diseño, **intocable**
- [inventario-contenido-web-vieja.md](inventario-contenido-web-vieja.md) — contenido real disponible
- [auditoria-home-am-estetica-dental.md](auditoria-home-am-estetica-dental.md) — playbook de arquitectura y persuasión
- [auditoria-home-doho.md](auditoria-home-doho.md) — playbook de datos estructurados y conversión local

---

## Regla de oro del proyecto

> **No se toca el look and feel.** Ni colores, ni tokens, ni tipografía, ni radios, ni sombras, ni animaciones, ni la anatomía de los componentes existentes.
>
> Lo que se cambia es **qué dice cada componente, en qué orden aparece, a dónde enlaza y qué declara en el HTML**.

| Se puede | No se puede |
|---|---|
| Reordenar secciones de la home | Cambiar el orden de bandas de fondo sin recalcular la alternancia |
| Rellenar componentes con contenido nuevo | Redefinir tokens de `globals.css` |
| Duplicar un componente existente para una sección nueva | Inventar un componente con otro lenguaje visual |
| Crear páginas nuevas usando los patrones ya existentes | Introducir tipografías, colores o radios fuera del sistema |
| Añadir JSON-LD, metadatos, enlaces internos | Alterar `PrimaryButton`, `SectionEyebrow`, escala tipográfica |
| Diseñar UI nueva **solo** para turismo odontológico | Que esa UI nueva se salga de los tokens |

**La única excepción de diseño nuevo:** la página de turismo odontológico, que no existe en el template. Se diseña nueva **usando exclusivamente los tokens y componentes del sistema Clireo**.

---

# 0 · Decisiones bloqueantes

Cuatro decisiones que hay que tomar antes de escribir una línea de contenido definitivo. Se puede implementar todo con la recomendación por defecto y cambiarlo después con un find & replace, pero conviene cerrarlas ya.

| # | Decisión | Recomendación | Por qué |
|---|---|---|---|
| **D1** | Nombre de marca | **Smile Design Center** como clínica + **Dr. Alan Cunningham** como entidad-persona | Es el modelo AM: la marca es la clínica, la autoridad es la persona. Hoy conviven tres nombres distintos en el código |
| **D2** | Idioma de las rutas | **Todo en español** (`/tratamientos`, `/contacto`, `/blog`) | Hoy son inglesas (`/treatments`, `/contact`, `/blogs`) en un sitio 100% en español para Argentina. Se agregan redirects 301 |
| **D3** | Formulario del hero | **Mostrarlo** (quitar `hidden`) | Está construido y funciona. Es el segundo carril de conversión que las tres clínicas auditadas no tienen |
| **D4** | Precio visible | **Sí, rangos "desde"** en la página de precios y en cada tratamiento | Es el hallazgo compartido de AM y DOHO: el precio no aparece cuando el paciente lo necesita |

> **Nota sobre el nombre de dominio:** el proyecto se llama `alancunningham`. Si el dominio final es `alancunningham.com.ar`, la persona es la marca dominante y conviene invertir D1 (persona primero, clínica como submarca). Decisión del cliente.

---

# 1 · Skills obligatorias de UI/UX

**Regla:** cualquier tarea que cree, mueva, rellene o ajuste interfaz debe invocar las skills. No se escribe UI "a mano" sin pasar por ellas.

## 1.1 Estado actual

Ya instaladas globalmente en `~/.claude/skills/`:

- ✅ `design-taste-frontend`
- ✅ `emil-design-eng`
- ✅ `frontend-design`

Faltan por instalar en el proyecto:

- ❌ `taste-skill` (leonxlnx)
- ❌ `impeccable` (pbakaus)
- ❌ `frontend-design` de Ilm-Alan (variante para Codex)

## 1.2 Instalación

```bash
mkdir -p .claude/skills
```

```bash
git clone https://github.com/leonxlnx/taste-skill .claude/skills/taste-skill
```

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/anthropics/skills .claude/skills/_anthropic && cd .claude/skills/_anthropic && git sparse-checkout set skills/frontend-design
```

```bash
git clone https://github.com/emilkowalski/skills .claude/skills/_emil
```

```bash
git clone https://github.com/pbakaus/impeccable .claude/skills/impeccable
```

```bash
git clone https://github.com/Ilm-Alan/frontend-design .claude/skills/frontend-design-codex
```

## 1.3 Cuándo usar cada una

| Skill | Se invoca en | Rol en este proyecto |
|---|---|---|
| **taste-skill** (leonxlnx) | Antes de cualquier decisión visual nueva | Filtro anti-templated. Evita que la página de turismo salga con look de plantilla genérica |
| **frontend-design** (anthropics) | Al crear cualquier sección o página nueva | Dirección visual intencional, tipografía, jerarquía. Referencia obligada para turismo odontológico |
| **emil-design-eng** (Emil Kowalski) | Al tocar micro-interacciones, hover, estados, formularios | Pulido de detalle: el sistema Clireo tiene animaciones muy trabajadas (label deslizante, doble flecha). Todo lo nuevo debe estar al mismo nivel |
| **impeccable** (pbakaus) | Auditoría antes de cerrar cada fase | Detector de anti-patrones, contraste, cascada CSS, accesibilidad. Es el QA visual automático del plan |
| **frontend-design-codex** (Ilm-Alan) | Cuando la tarea se delega a Codex | Variante equivalente para el agente Codex, para que el criterio no se degrade al cambiar de modelo |

## 1.4 Protocolo de invocación

```
Toda tarea de UI del plan se ejecuta así:

1. taste-skill        → definir dirección antes de codear
2. frontend-design    → estructura, tipografía, jerarquía
3. [implementación]   → siempre con tokens existentes
4. emil-design-eng    → pulir interacción, estados, transiciones
5. impeccable         → auditar antes de dar por cerrada la fase
```

Si la tarea se delega a **Codex**, sustituir el paso 2 por `frontend-design-codex` y mantener el resto igual.

---

# 2 · Arquitectura de información completa

## 2.1 Mapa de rutas

Hoy hay **6 rutas**. El objetivo son **~45 rutas** organizadas en cinco capas, siguiendo el modelo hub–spoke de AM (26 rutas) y corrigiendo el error de DOHO (tarjetas sin enlace).

### Capa 1 · Navegación principal (6 destinos)

| Ruta | Reemplaza a | Estado |
|---|---|---|
| `/` | `/` | Existe — se reordena |
| `/tratamientos` | `/treatments` | Existe — se amplía |
| `/casos` | — | **Nueva** |
| `/nosotros` | — | **Nueva** |
| `/turismo-odontologico` | — | **Nueva, diseño nuevo** |
| `/contacto` | `/contact` | Existe — se corrige |

> Máximo 6 ítems en el nav. Es la corrección del error de AM (doble navegación de 9+9 ítems con vocabulario distinto).

### Capa 2 · Tratamientos — 7 pilares + 19 hijos

Los 18 tratamientos sueltos de `/galeria` se agrupan en 7 pilares. Cada pilar es una página con contenido propio; cada hijo tiene su URL.

| Pilar | Ruta | Hijos |
|---|---|---|
| Estética dental y diseño de sonrisa | `/tratamientos/estetica-dental` | `/diseno-de-sonrisa`, `/carillas-de-porcelana`, `/blanqueamiento-dental` |
| Rehabilitación oral y prótesis | `/tratamientos/rehabilitacion-oral` | `/coronas-dentales`, `/incrustaciones-ceramicas`, `/incrustaciones-de-resina`, `/cambio-de-amalgamas` |
| Implantes dentales | `/tratamientos/implantes-dentales` | `/implantes-unitarios`, `/rehabilitacion-sobre-implantes` |
| Ortodoncia | `/tratamientos/ortodoncia` | `/alineadores-invisibles`, `/brackets` |
| Endodoncia | `/tratamientos/endodoncia` | `/tratamiento-de-conducto`, `/postes-y-reconstruccion` |
| Cirugía y periodoncia láser | `/tratamientos/cirugia-y-periodoncia` | `/extracciones-dentales`, `/frenectomia-laser`, `/gingivectomia-laser`, `/retracciones-gingivales` |
| Odontología general y prevención | `/tratamientos/odontologia-general` | `/limpieza-profunda`, `/restauraciones-caries` |

**Regla de enlazado:** cada tarjeta de tratamiento en la home enlaza a su pilar. Cada pilar enlaza a sus hijos. Cada hijo enlaza a su pilar y a 3 tratamientos relacionados. **Ninguna tarjeta sin enlace** — es la corrección P1 de DOHO.

### Capa 3 · Intención comercial (5 rutas)

Aplicación directa del hub "Explorá por intención" de AM, que la auditoría marcó como la mejor decisión de arquitectura del sitio.

| Ruta | Intención que captura |
|---|---|
| `/precios` | "cuánto cuesta" — rangos, medios de pago, recargos |
| `/obras-sociales` | "trabajan con mi prepaga" — la objeción P1 de DOHO |
| `/carillas-vs-coronas` | "qué me conviene" |
| `/alineadores-vs-brackets` | "qué me conviene" |
| `/implantes-vs-protesis` | "qué me conviene" |

### Capa 4 · Autoridad y local (6 rutas)

| Ruta | Contenido |
|---|---|
| `/nosotros` | Historia, misión, visión, equipo resumido |
| `/nosotros/instalaciones` | Las 7 fotos reales de la clínica |
| `/nosotros/tecnologia` | Láser, escáner 3Shape, planificación digital |
| `/equipo/alan-cunningham` | Ficha completa del titular |
| `/equipo/[slug]` | Una por profesional que se sume |
| `/dentista-en-nunez` | Landing local |

> **Advertencia de SEO local:** una sola landing de barrio. Replicarla para 13 barrios genera páginas puerta y penalización. La cobertura de zona se declara con `areaServed` en el JSON-LD, como hace DOHO — que es la forma correcta.

### Capa 5 · Contenido (2 + N rutas)

| Ruta | Contenido |
|---|---|
| `/casos` | Hub de casos clínicos |
| `/casos/[slug]` | 3 casos reales al inicio, ampliable |
| `/blog` | Listado |
| `/blog/[slug]` | Artículos |
| `/faq` | 25 preguntas — el modelo DOHO |

### Redirecciones 301 obligatorias

```
/treatments                 → /tratamientos
/treatments/cosmetic-care   → /tratamientos/estetica-dental
/contact                    → /contacto
/blogs                      → /blog
/blogs/[slug]               → /blog/[slug]
```

Y desde el sitio viejo, si comparte dominio:

```
/galeria                    → /tratamientos
/quienes-somos              → /nosotros
```

---

# 3 · Home — secuencia definitiva

## 3.1 Criterio del reordenamiento

Los tres diagnósticos coinciden en lo mismo: **la evidencia y el precio llegan tarde**. En AM el simulador está en la posición 14 de 16. En DOHO las obras sociales y el precio están colapsados en la posición 8 de 8. En la web nueva actual, el antes/después está en la 6 y el profesional en la 9, detrás de tres secciones abstractas que suman 6.577px.

Secuencia correctiva: **deseo → prueba → persona → viabilidad → captura → catálogo → detalle**.

## 3.2 Secuencia

| # | Sección | Componente | Fondo | Contenido | Origen |
|---|---|---|---|---|---|
| 01 | **Hero** | `HeroSection` | `hero` | H1 con geomodificador + bajada + **formulario visible** + ancla de precio + prueba condensada | Existe |
| 02 | **Ticker** | `TickerSection` | `secondary` | 7 pilares de tratamiento | Existe |
| 03 | **Antes y después** | `TestimonialsSection` (split) | `secondary` | Los 3 casos reales, con nombre de tratamiento y duración | **Sube de la 6** |
| 04 | **El profesional** | `DoctorsSection` | `background` | Dr. Alan Cunningham, M.N. 42463, docente UBA | **Sube de la 9** |
| 05 | **Precio y cobertura** | `StatsSection` (reusado) | `strong` | Rangos "desde", medios de pago, obras sociales, enlace a `/precios` | **Nueva posición** |
| 06 | **Tratamientos** | `ServicesSection` | `background` | 7 pilares, cada tarjeta **enlazada** y con 2 líneas de descripción | Existe |
| 07 | **Explorá por intención** | `ValuesSection` (reusado) | `secondary` | 5 tarjetas a las páginas de intención | **Nueva** |
| 08 | **Por qué elegirnos** | `WhyUsSection` | `background` | Values + Why us **fusionados** — hoy dicen lo mismo | **Fusión** |
| 09 | **Cómo trabajamos** | `ApproachSection` | `secondary` | 3–4 pasos del proceso clínico | Existe |
| 10 | **Testimonios** | `TestimonialsSection` | `background` | Reseñas + badge de Google | Existe (se separa de 03) |
| 11 | **Instalaciones y tecnología** | `ServicesSection` (variante) | `strong` | 7 fotos reales + escáner 3Shape + láser | **Nueva** |
| 12 | **Turismo odontológico** | `ApproachSection` (variante) | `background` | Bloque de derivación a la página propia | **Nueva** |
| 13 | **FAQ** | `FaqsSection` | `secondary` | 6 preguntas **con precio y obras sociales visibles** | Existe |
| 14 | **Blog** | `BlogSection` | `background` | 3 artículos | Existe |
| 15 | **Cierre** | Footer CTA | `secondary` | CTA único + microcopy de expectativa | Existe |

**Alternancia de bandas verificada:** `hero → secondary → secondary → background → strong → background → secondary → background → secondary → background → strong → background → secondary → background → secondary`. Se respeta la regla de no repetir banda salvo el par 02/03, que funciona como bloque único igual que hoy hace about/ticker.

## 3.3 Qué se elimina

| Sección actual | Motivo |
|---|---|
| `AboutSection` como sección propia | Se absorbe en 08. Hoy repite lo que dice Values |
| Duplicación de testimonios en el DOM | Es el error P3 de AM: el bucle promete volumen y entrega escasez |

## 3.4 Correcciones de copy en la home

Aplicación directa de los hallazgos de las auditorías:

| Hallazgo | Origen | Aplicación |
|---|---|---|
| H1 sin geomodificador | DOHO P2 | H1 debe contener el tratamiento principal + Núñez o Buenos Aires |
| CTA indiferenciado | AM P2 | **Un solo verbo primario** en toda la home |
| Sin microcopy de expectativa | AM P2 | Bajo cada CTA: *"Consulta inicial · 40 min · sin cargo · sin compromiso"* |
| Sin ancla de precio | AM P2 | En el hero: *"Tratamientos desde $X · Consulta inicial sin cargo"* |
| Repetición de activos de prueba | AM P2 | Cada dato aparece **una vez dominante + una vez cerca de la conversión** |
| Escasez artificial | AM P2 | **No usar** contadores falsos. Si hace falta, escasez estructural honesta |
| Diferenciales genéricos | DOHO P2 | Nada de "tecnología de última generación" sin nombrar el equipo. Se nombra: escáner 3Shape, láser |

---

# 4 · Páginas internas — especificación

Patrón común para todas: **hero interno** (`bg-hero`, `pt-[200px] lg:pt-[300px]`, `pb-10`) + secciones alternando bandas + CTA de cierre. Todas con **H1 único** y **breadcrumb**.

## 4.1 `/tratamientos` — hub

```
Hero interno         H1: "Tratamientos odontológicos en Núñez, Buenos Aires"
                     Bajada + 2 CTA

Grilla de pilares    H2: "Nuestras especialidades"
                     7 tarjetas TreatmentCard, TODAS enlazadas
                     Cada una: imagen + H3 + 2 líneas + "Ver tratamiento →"

Explorá por intención  H2 + 5 tarjetas (precios, obras sociales, 3 comparativas)

Tecnología           H2 + escáner 3Shape, láser, planificación digital

FAQ corta            4 preguntas transversales

CTA de cierre
```

## 4.2 `/tratamientos/[pilar]` — 7 páginas

```
Hero interno         H1: nombre del pilar + geomodificador
                     Breadcrumb: Inicio › Tratamientos › [Pilar]

Qué es               H2 + 2–3 párrafos de 80–120 palabras
Para quién           H2 + lista de indicaciones
Cómo lo hacemos      H2 + pasos del proceso
Antes y después      BeforeAfterSlider — si hay caso del pilar
Tratamientos incluidos  H2 + tarjetas enlazadas a los hijos
Precio orientativo   H2 + rango "desde" + medios de pago + enlace a /precios
FAQ del pilar        4–6 preguntas específicas
Tratamientos relacionados  3 tarjetas
Formulario de consulta     BookingForm (ya existe)
```

**Mínimo de contenido por pilar:** 700 palabras. Es la corrección directa de "18 tratamientos sin un solo párrafo".

## 4.3 `/tratamientos/[pilar]/[hijo]` — 19 páginas

Versión reducida del pilar: qué es · para quién · proceso · duración · precio desde · 3 FAQ · relacionados · formulario. **Mínimo 400 palabras.**

## 4.4 `/casos` y `/casos/[slug]`

El activo más fuerte de AM. Cada caso con URL propia y slug descriptivo largo.

```
/casos           Hero + grilla de casos con foto de portada, tratamiento y duración

/casos/[slug]    Hero + BeforeAfterSlider + Diagnóstico + Tratamiento realizado
                 + Duración + Técnica + Seguimiento + Tratamientos relacionados + CTA
```

Slugs de los 3 casos reales disponibles:

```
/casos/rehabilitacion-oral-restauracion-forma-y-color-natural
/casos/diseno-de-sonrisa-cierre-de-espacios-y-armonia-dental
/casos/blanqueamiento-y-alineacion-sonrisa-renovada
```

## 4.5 `/nosotros` + `/equipo/[slug]`

```
/nosotros                  H1 + historia + misión + visión + equipo (grilla) + instalaciones + tecnología
/nosotros/instalaciones    Galería de las 7 fotos reales
/nosotros/tecnologia       Escáner 3Shape, láser, planificación digital
/equipo/alan-cunningham    H1 + foto + credenciales + M.N. 42463 + formación + tratamientos que realiza + CTA
```

**Sobre el equipo:** la sección `DoctorsSection` de la home ya soporta 4 profesionales. Cada tarjeta enlaza a su `/equipo/[slug]`. Cuando se sumen profesionales, se agrega una entrada al archivo de datos y una página — **sin tocar el componente**.

> Recomendación de UX: **página propia, no popup**. Cada profesional es una URL indexable con su `Person` en JSON-LD. Es exactamente lo que hace DOHO bien y es su mayor fortaleza SEO.

## 4.6 `/precios` y `/obras-sociales`

El hallazgo compartido de las dos auditorías. Dos páginas que ninguna de las tres clínicas resuelve bien.

```
/precios          H1 + tabla de rangos "desde" por tratamiento
                  + medios de pago (imágenes reales pago1_1.png, pago2.png)
                  + aclaración de recargos, REDACTADA EN POSITIVO
                  + financiación si existe + CTA

/obras-sociales   H1 + listado de coberturas + qué cubre cada una + cómo consultar + CTA
```

> **Corrección de copy heredada:** hoy lo único numérico del sitio viejo son los recargos (+21% IVA, +38% tarjeta). Es el dato que más frena y el único que se comunica. Se reencuadra: primero el precio desde y los medios disponibles, después la condición.

## 4.7 `/contacto`

```
Hero interno      H1: "Contacto — Consultorio odontológico en Núñez"   ← hoy no hay H1
Formulario        6 campos, ya existe
Datos             Dirección, teléfono, horarios, WhatsApp
Mapa              iframe, ya existe
Cómo llegar       Subte, colectivos, estacionamiento
Barrios           Núñez, Belgrano, Saavedra, Colegiales, Coghlan, Vicente López, Olivos
```

## 4.8 `/faq`

25 preguntas agrupadas en 5 bloques: tratamientos · precios y pagos · obras sociales · primera consulta · turismo odontológico. Con `FAQPage` completo.

---

# 5 · `/turismo-odontologico` — único diseño nuevo

No existe en el template Clireo. Se diseña desde cero **respetando el sistema**.

## 5.1 Protocolo obligatorio

```
1. taste-skill        → dirección visual, evitar look de plantilla de agencia de viajes
2. frontend-design    → estructura, jerarquía, tipografía
3. Implementación     → SOLO tokens Clireo: --hero, --brand, --accent-coral,
                        --accent-yellow, --surface-*, Golos Text, escala existente,
                        radios 12/15/16/20px, sombras --clireo-shadow-*
4. emil-design-eng    → transiciones, hover, estados del carrusel
5. impeccable         → auditoría de contraste, cascada y accesibilidad
```

**Componentes reutilizables obligatorios:** `PrimaryButton`, `SectionEyebrow`, `RevealText`, `BookingForm`, `SmoothScroll`. Todo lo nuevo debe convivir con ellos sin que se note la costura.

## 5.2 Contenido real disponible

- 10 fotos de Buenos Aires (carrusel)
- 5 servicios: traslado al consultorio, transporte, estadía, turismo, gastronomía
- Medios de pago y condiciones
- Textos base — **a reescribir**: hoy tienen tuteo inconsistente y errores ("Estadia", "planficar")

## 5.3 Estructura propuesta

| # | Sección | Contenido | Fondo |
|---|---|---|---|
| 01 | Hero | H1 "Turismo odontológico en Buenos Aires" + bajada + 2 CTA + foto de la ciudad | `hero` |
| 02 | Para quién es | 3 perfiles: argentino en el exterior · extranjero · paciente del interior | `secondary` |
| 03 | Por qué Buenos Aires | 4 razones con dato: costo comparado, nivel profesional, tiempos, ciudad | `background` |
| 04 | **Cómo funciona** | Timeline de 5 pasos: consulta online → plan y presupuesto → coordinación de viaje → tratamiento → seguimiento a distancia | `strong` |
| 05 | Qué incluye | Los 5 servicios reales con ícono | `background` |
| 06 | Tratamientos más solicitados | 4 tarjetas enlazadas a sus pilares | `secondary` |
| 07 | Tiempos estimados | Tabla: tratamiento · sesiones · días de estadía | `background` |
| 08 | Buenos Aires | Carrusel con las 10 fotos reales | `strong` |
| 09 | Pagos y moneda | Medios de pago, moneda, condiciones | `background` |
| 10 | FAQ de turismo | 6 preguntas específicas | `secondary` |
| 11 | Formulario internacional | `BookingForm` + campo de país y ciudad de origen | `background` |

**El bloque 04 y el 07 son los diferenciadores.** Ninguna clínica argentina publica tiempos estimados de estadía por tratamiento, y es exactamente el dato que necesita quien planifica un viaje. Es el equivalente al simulador de financiación de AM: el dato que desarma la objeción dominante del segmento.

---

# 6 · Sistema de contenido — real vs generado

## 6.1 Principio

**La falta de contenido real no bloquea nada.** Todo se implementa con contenido generado marcado como provisional, en archivos de datos separados de los componentes. Reemplazar después es editar un objeto, no tocar UI.

## 6.2 Estructura de datos

```
src/content/
  clinica.ts        NAP, horarios, redes, matrícula — REAL
  tratamientos.ts   7 pilares + 19 hijos — estructura real, textos IA
  equipo.ts         Alan Cunningham REAL + N generados
  casos.ts          3 casos reales + metadatos IA
  testimonios.ts    Generados hasta conectar Google
  faqs.ts           Generadas, revisión clínica pendiente
  precios.ts        Rangos — REQUIERE VALIDACIÓN DEL CLIENTE
  obras-sociales.ts Generado — REQUIERE VALIDACIÓN
  turismo.ts        Servicios reales + tiempos IA
  posts.ts          Artículos generados
```

**Convención obligatoria:** todo campo no verificado lleva bandera.

```ts
{
  contenido: "...",
  _fuente: "ia" | "real" | "pendiente-validacion",
}
```

Y un script de auditoría que lista todo lo marcado `ia` o `pendiente-validacion`, para saber en cualquier momento qué falta reemplazar.

## 6.3 Inventario: qué es real y qué se genera

### ✅ Real — usar tal cual

| Dato | Valor |
|---|---|
| Dirección | Arribeños 2659 5c, Núñez, CABA |
| Teléfono / WhatsApp | +54 9 11 2156 1445 |
| Titular | Alan Cunningham — Odontólogo, Esp. Rehabilitación dentobucomaxilar, M.N. 42463, docente UBA, técnico de laboratorio |
| Misión y visión | Textos de `/quienes-somos` — **corrigiendo las faltas de ortografía** |
| 3 casos antes/después | puchi · sofia · patricia |
| 7 fotos de instalaciones | Con sus alt ya escritos |
| 3 videos de retracciones | `Alan1.mp4`, `Alan2.mp4`, `Alan3.mp4` |
| 10 fotos de Buenos Aires | Para turismo |
| ~30 fotos clínicas | De `/galeria`, con alt descriptivos |
| Medios de pago | Imágenes `pago1_1.png`, `pago2.png` |
| 5 servicios de turismo | Traslado, transporte, estadía, turismo, gastronomía |
| 18 nombres de tratamiento | Taxonomía real de la clínica |

### 🤖 Generar con IA — no bloquea

| Contenido | Volumen | Prioridad |
|---|---|---|
| Descripciones de los 7 pilares | 700 palabras c/u | **P1** |
| Descripciones de los 19 hijos | 400 palabras c/u | **P1** |
| 25 FAQ | — | **P1** |
| Copy de home reordenada | — | **P1** |
| Página de turismo completa | ~1.200 palabras | **P1** |
| 3 comparativas | 800 palabras c/u | P2 |
| Fichas de equipo adicionales | — | P2 |
| 6–8 artículos de blog | 900 palabras c/u | P3 |
| Narrativa de los 3 casos | — | P2 |
| Testimonios provisionales | 6–8 | P2 |

### ⚠️ Requiere validación del cliente — no inventar

| Dato | Por qué |
|---|---|
| **Rangos de precio** | Dato comercial. Se implementa la UI con `$—` y bandera `pendiente-validacion` |
| **Obras sociales** | Afirmar una cobertura falsa es un problema legal y de reputación |
| **Tiempos de tratamiento** | Dato clínico |
| **Nuevos profesionales** | Nombre, matrícula y formación reales |
| **Reseñas de Google** | Se implementa el componente con datos provisionales y se conecta después |

> **Regla dura:** ningún dato clínico, de precio o de cobertura sale a producción con bandera `ia`. La UI se construye igual; el contenido se marca y se bloquea el deploy hasta validación.

## 6.4 Imágenes

| Situación | Solución |
|---|---|
| Fotos reales de la clínica | **Copiar** de `alancunningham/public/images` a `alancunningham-nuevo/public/images` — hoy la carpeta está vacía |
| Fotos que faltan | Assets del template Clireo ya descargados (40 imágenes) |
| Retratos de equipo | Avatares del template hasta tener fotos reales |
| Placeholders | Con `alt` descriptivo real desde el día 1 — la web vieja tenía 100% de alt y eso se conserva |

---

# 7 · SEO técnico

Lo que **ninguna** de las tres webs tiene completo. Aquí se implementa entero.

## 7.1 JSON-LD por tipo de página

### Global (en `layout.tsx`)

```
Dentist + LocalBusiness
  @id, name, description, url, telephone, email, priceRange
  address (PostalAddress completo)
  geo (GeoCoordinates)
  openingHoursSpecification
  areaServed: [Núñez, Belgrano, Saavedra, Colegiales, Coghlan,
               Vicente López, Olivos, CABA]          ← modelo DOHO
  medicalSpecialty: [7 pilares]
  availableService: [26 MedicalProcedure]            ← corrige P1 de AM y DOHO
  currenciesAccepted: ARS, USD
  paymentAccepted
  hasMap
  founder / employee → Person
  aggregateRating + review[]                          ← cuando haya reseñas
  sameAs: [Instagram real]

WebSite + WebPage + speakable                         ← modelo DOHO
Organization
```

### Por tipo de página

| Página | Esquemas |
|---|---|
| Home | `Dentist`, `WebPage`, `FAQPage`, `BreadcrumbList` |
| Pilar de tratamiento | `MedicalProcedure`, `MedicalWebPage`, `FAQPage`, `BreadcrumbList`, `author`/`reviewedBy` → Dr. Cunningham |
| Hijo de tratamiento | `MedicalProcedure`, `BreadcrumbList`, `isPartOf` → pilar |
| Caso clínico | `MedicalScholarlyArticle` o `Article` + `ImageObject` + `BreadcrumbList` |
| Equipo | `Person` con `identifier` (M.N.), `alumniOf`, `hasCredential`, `knowsAbout`, `worksFor` |
| FAQ | `FAQPage` completo |
| Blog | `BlogPosting` + `author` → Person + `datePublished` + `dateModified` |
| Precios | `Offer` / `PriceSpecification` |
| Turismo | `Service` + `TouristTrip` + `FAQPage` |
| Contacto | `ContactPage` + `LocalBusiness` |

### E-E-A-T — la corrección P2 de AM

Toda página con contenido clínico declara:

```
author      → @id del Dr. Alan Cunningham
reviewedBy  → @id del Dr. Alan Cunningham
dateModified
```

Y visible en pantalla, al pie del artículo:
*"Revisado por Od. Alan Cunningham — M.N. 42463 · Actualizado en [fecha]"*

## 7.2 Metadatos

| Elemento | Regla |
|---|---|
| Title | 55–62 caracteres · `[keyword] en [barrio/ciudad] \| [Marca]` |
| Description | 140–155 · con verbo de acción y, cuando exista, prueba social |
| H1 | **Uno por página**, con keyword + geomodificador |
| Canonical | Autorreferencial en todas |
| OG / Twitter | Imagen 1200×630 por sección |
| `lang` | `es-AR` |
| Alt | 100% de las imágenes, descriptivo |

## 7.3 Infraestructura

- `sitemap.xml` dinámico
- `robots.txt`
- Breadcrumbs visibles + `BreadcrumbList` en todas las internas
- Rutas en minúscula — corrección del `/Portal` de DOHO
- 301 desde las rutas inglesas
- `next/image` en todas las imágenes

---

# 8 · Conversión — doble carril

El error compartido por las tres webs: **todo termina en WhatsApp**. AM tiene 17 enlaces, DOHO 15, la web vieja el 100%.

## 8.1 Los dos carriles

| Carril | Implementación | Estado |
|---|---|---|
| **WhatsApp** — inmediato | Mensaje **precargado y contextual** por tratamiento y por profesional | Parcialmente hecho. Es lo que DOHO hace mejor que nadie: *"quisiera reservar un turno con Diego"* |
| **Formulario** — asíncrono | Hero + cada pilar + contacto + turismo. Captura nombre, teléfono, tratamiento de interés, preferencia horaria | El componente existe. **Falta mostrarlo y conectarlo** |

## 8.2 Puntos de conversión por página

| Página | Puntos |
|---|---|
| Home | Hero (formulario) · tras antes/después · tras precio · cierre |
| Pilar | Hero · tras precio · formulario final |
| Caso | Tras el slider · cierre |
| Turismo | Hero · tras "cómo funciona" · formulario internacional |
| Contacto | Formulario principal |

## 8.3 Reglas de copy de CTA

Aplicación literal del hallazgo P2 de AM:

- **Un verbo primario único** en todo el sitio
- Microcopy de expectativa siempre debajo: *"Consulta inicial · 40 min · sin cargo · sin compromiso"*
- CTA secundarios como enlaces de texto, no como botones
- El mensaje de WhatsApp se precarga con el contexto de la página de origen

## 8.4 Pendiente de conexión — no bloquea

| Sistema | Qué se hace ahora |
|---|---|
| Reseñas de Google | Componente con datos provisionales + `_fuente: "pendiente-validacion"` |
| Formulario → email/CRM | `console.log` + fallback a WhatsApp. Se conecta después |
| Newsletter | UI lista, sin proveedor |
| Analytics | Eventos definidos, sin cuenta |
| Reserva con calendario | Fuera de alcance de la fase 1 |

---

# 9 · Componentes a crear

Ninguno inventa lenguaje visual. Todos son duplicación o variante de los existentes.

| Componente | Base | Uso |
|---|---|---|
| `Breadcrumbs` | Tipografía 15px + `--muted-foreground` | Todas las internas |
| `PriceTable` | `TreatmentCard` + tabla | `/precios`, pilares |
| `TreatmentPillarCard` | `TreatmentCard` **+ enlace** | Home, `/tratamientos` |
| `IntentCard` | `ValuesSection` | Bloque "Explorá por intención" |
| `CaseCard` | `BlogCard` | `/casos` |
| `CaseDetail` | `BeforeAfterSlider` + artículo | `/casos/[slug]` |
| `DoctorProfile` | `DoctorsSection` expandido | `/equipo/[slug]` |
| `FacilitiesGallery` | Carrusel de `ServicesSection` | Instalaciones |
| `CoverageBadges` | `SectionEyebrow` + grilla | Obras sociales |
| `TimelineSteps` | `ApproachSection` | Turismo — "cómo funciona" |
| `StayTimeTable` | Tabla + tokens | Turismo — tiempos |
| `JsonLd` | — | Utilidad, sin UI |
| `ReviewsWidget` | `TestimonialsSection` | Google, cuando se conecte |

**Cada uno pasa por el protocolo de skills de la sección 1.4.**

---

# 10 · Fases de implementación

## Fase 0 · Preparación — 1 día

- [ ] Instalar las 5 skills (sección 1.2)
- [ ] Cerrar las decisiones D1–D4
- [ ] Copiar assets reales de `alancunningham/public/` a `alancunningham-nuevo/public/` — hoy `images/` y `videos/` están **vacías**
- [ ] Crear `src/content/` con la estructura de datos
- [ ] Unificar el nombre de marca en todo el código
- [ ] Corregir las 7 faltas de ortografía heredadas
- [ ] Script de auditoría de banderas `_fuente`

## Fase 1 · Fundaciones SEO — 2 días

- [ ] Componente `JsonLd` + esquema global `Dentist`
- [ ] Metadatos por página, con generador
- [ ] `sitemap.xml` + `robots.txt`
- [ ] `Breadcrumbs` + `BreadcrumbList`
- [ ] Rutas en español + redirects 301
- [ ] H1 único en todas — **empezando por `/contacto`, que hoy no tiene**

## Fase 2 · Home — 3 días

- [ ] Reordenar a la secuencia de 15 bloques
- [ ] **Mostrar el formulario del hero**
- [ ] Fusionar Values + Why us
- [ ] Enlazar las 7 tarjetas de tratamiento
- [ ] Bloque de precio y cobertura
- [ ] Bloque "Explorá por intención"
- [ ] Bloque de instalaciones
- [ ] Bloque de turismo
- [ ] Copy completo con las correcciones de la sección 3.4
- [ ] `FAQPage` en la home
- [ ] **Auditoría `impeccable`**

## Fase 3 · Tratamientos — 5 días

- [ ] `/tratamientos` como hub
- [ ] 7 páginas de pilar, 700 palabras cada una
- [ ] 19 páginas hijas, 400 palabras cada una
- [ ] `MedicalProcedure` en las 26
- [ ] Enlazado cruzado completo
- [ ] Rangos de precio con bandera de validación
- [ ] **Auditoría `impeccable`**

## Fase 4 · Autoridad y prueba — 3 días

- [ ] `/casos` + 3 casos con URL propia
- [ ] `/nosotros`, `/nosotros/instalaciones`, `/nosotros/tecnologia`
- [ ] `/equipo/alan-cunningham` con `Person` completo
- [ ] Plantilla de equipo lista para sumar profesionales
- [ ] `author` / `reviewedBy` en todo contenido clínico
- [ ] **Auditoría `impeccable`**

## Fase 5 · Intención comercial — 3 días

- [ ] `/precios` con medios de pago reales
- [ ] `/obras-sociales`
- [ ] 3 comparativas
- [ ] `/dentista-en-nunez`
- [ ] `/faq` con 25 preguntas
- [ ] **Auditoría `impeccable`**

## Fase 6 · Turismo odontológico — 4 días

- [ ] `taste-skill` + `frontend-design` **antes de codear**
- [ ] 11 secciones de la sección 5.3
- [ ] Timeline de 5 pasos
- [ ] Tabla de tiempos de estadía
- [ ] Carrusel con las 10 fotos reales
- [ ] Formulario internacional
- [ ] `emil-design-eng` para pulido
- [ ] **Auditoría `impeccable`**

## Fase 7 · Contenido y cierre — 3 días

- [ ] `/contacto` completo
- [ ] `/blog` + 6–8 artículos
- [ ] Testimonios y widget de reseñas
- [ ] Newsletter
- [ ] Eventos de analítica

## Fase 8 · QA final — 2 días

- [ ] `impeccable` sobre el sitio completo
- [ ] Validación de todos los JSON-LD
- [ ] Verificación de H1 único por página
- [ ] Ningún enlace roto ni `href="#"`
- [ ] 100% de imágenes con alt
- [ ] Modo claro y oscuro en las ~45 rutas
- [ ] Móvil en todas
- [ ] **Listado final de contenido con bandera `ia` para el cliente**

**Total estimado: 26 días de trabajo.**

---

# 11 · Criterios de aceptación

Auditoría final del sitio nuevo contra los mismos criterios con que se auditó a AM y DOHO. Objetivo: superar a ambas en cada dimensión.

| Dimensión | AM | DOHO | **Objetivo** |
|---|---|---|---|
| SEO on-page | 8,0 | 7,5 | **9,0** |
| Estructura de la información | 6,5 | 8,5 | **9,0** |
| Arquitectura de la información | 8,5 | 5,5 | **9,0** |
| Persuasión | 9,0 | 6,5 | **8,5** |
| Fricción de conversión | 5,5 | 6,5 | **8,5** |

## Checklist binaria

- [ ] H1 único con geomodificador en las ~45 rutas
- [ ] Cero encabezados vacíos — error P1 de AM
- [ ] Cero tarjetas sin enlace — error P1 de DOHO
- [ ] Cero `href="#"` — error de la web vieja
- [ ] `FAQPage`, `availableService`, `Review`, `BreadcrumbList`, `areaServed` presentes
- [ ] Precio visible antes del 40% del scroll en home y en cada pilar
- [ ] Obras sociales visibles sin interacción
- [ ] Antes y después en el primer tercio de la home
- [ ] Formulario + WhatsApp en toda página de conversión
- [ ] Matrícula profesional visible y en el marcado
- [ ] Un verbo primario único de CTA en todo el sitio
- [ ] Microcopy de expectativa bajo cada CTA
- [ ] Cero contenido `_fuente: "ia"` en datos clínicos, precios y coberturas
- [ ] **Cero cambios en `globals.css`** más allá de los tokens ya definidos

---

# 12 · Resumen de qué toma de dónde

| De AM Estética Dental | De DOHO | De la web vieja | Del template Clireo |
|---|---|---|---|
| Hub–spoke de 26+ rutas | `areaServed` con barrios | Dirección y teléfono reales | Todo el sistema visual |
| Casos con URL propia y slug largo | `Person` con matrícula y credenciales | Credenciales del titular | 15 componentes de sección |
| "Explorá por intención" | `Review` individuales | 3 casos antes/después | `PrimaryButton`, `SectionEyebrow` |
| Prueba visual en primer tercio | `speakable` | 7 fotos de instalaciones | Formulario de 6 campos |
| Transparencia de precio temprana | WhatsApp con mensaje precargado | 3 videos clínicos | `BeforeAfterSlider` |
| Reducción de miedo explícita | Equipo con cara y especialidad | 10 fotos de Buenos Aires | Mapa embebido |
| Autoridad de persona nombrada | Meta description con prueba social | Turismo odontológico | Modo claro/oscuro |
| Casos con duración indicada | Descripciones clínicas concretas | Taxonomía de 18 tratamientos | Lenis, `RevealText`, ticker |

**Y lo que ninguna de las tres tiene, y este sitio sí va a tener:**

1. Precio y cobertura visibles antes del primer tercio
2. Doble carril de conversión desde el día 1
3. Tiempos de estadía por tratamiento para turismo odontológico
4. JSON-LD completo con `author` / `reviewedBy` en contenido clínico
5. 26 páginas de tratamiento con contenido real, no una galería muda

---

*Plan de implementación cruzado · 21 de agosto de 2026. Basado en la auditoría de dos competidores directos, el inventario de contenido de la web vigente y el análisis del sistema de diseño del proyecto destino.*
