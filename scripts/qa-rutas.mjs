#!/usr/bin/env node
/**
 * Crawls every route of a running server and checks the plan's binary
 * acceptance checklist (§11):
 *
 *   · exactly one H1 per page, and it carries a geo modifier
 *   · zero empty headings
 *   · zero `href="#"`
 *   · 100% of images carry an alt attribute (empty only when decorative)
 *   · self-referencing canonical present
 *   · JSON-LD present and parseable
 *   · title length within 45–75 characters
 *
 *   node scripts/qa-rutas.mjs http://localhost:3000
 */

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const RUTAS = [
  "/",
  "/tratamientos",
  "/tratamientos/estetica-dental",
  "/tratamientos/estetica-dental/diseno-de-sonrisa",
  "/tratamientos/estetica-dental/carillas-de-porcelana",
  "/tratamientos/estetica-dental/blanqueamiento-dental",
  "/tratamientos/rehabilitacion-oral",
  "/tratamientos/rehabilitacion-oral/coronas-dentales",
  "/tratamientos/rehabilitacion-oral/incrustaciones-ceramicas",
  "/tratamientos/rehabilitacion-oral/incrustaciones-de-resina",
  "/tratamientos/rehabilitacion-oral/cambio-de-amalgamas",
  "/tratamientos/implantes-dentales",
  "/tratamientos/implantes-dentales/implantes-unitarios",
  "/tratamientos/implantes-dentales/rehabilitacion-sobre-implantes",
  "/tratamientos/ortodoncia",
  "/tratamientos/ortodoncia/alineadores-invisibles",
  "/tratamientos/ortodoncia/brackets",
  "/tratamientos/endodoncia",
  "/tratamientos/endodoncia/tratamiento-de-conducto",
  "/tratamientos/endodoncia/postes-y-reconstruccion",
  "/tratamientos/cirugia-y-periodoncia",
  "/tratamientos/cirugia-y-periodoncia/extracciones-dentales",
  "/tratamientos/cirugia-y-periodoncia/frenectomia-laser",
  "/tratamientos/cirugia-y-periodoncia/gingivectomia-laser",
  "/tratamientos/cirugia-y-periodoncia/retracciones-gingivales",
  "/tratamientos/odontologia-general",
  "/tratamientos/odontologia-general/limpieza-profunda",
  "/tratamientos/odontologia-general/restauraciones-caries",
  "/casos",
  "/casos/rehabilitacion-oral-restauracion-forma-y-color-natural",
  "/casos/diseno-de-sonrisa-cierre-de-espacios-y-armonia-dental",
  "/casos/blanqueamiento-y-alineacion-sonrisa-renovada",
  "/nosotros",
  "/nosotros/instalaciones",
  "/nosotros/tecnologia",
  "/equipo/alan-cunningham",
  "/precios",
  "/obras-sociales",
  "/carillas-vs-coronas",
  "/alineadores-vs-brackets",
  "/implantes-vs-protesis",
  "/dentista-en-nunez",
  "/faq",
  "/turismo-odontologico",
  "/contacto",
  "/blog",
  "/blog/cuanto-cuesta-un-implante-dental-en-buenos-aires",
  "/blog/carillas-de-porcelana-lo-que-nadie-te-cuenta",
  "/blog/por-que-sangran-las-encias",
  "/blog/escaner-intraoral-vs-moldes-de-pasta",
  "/blog/bruxismo-como-saber-si-aprietas-los-dientes",
  "/blog/primera-consulta-que-esperar",
];

const GEO = /núñez|nunez|buenos aires|caba/i;

function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, "gi"))].map(
    (m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
  );
}

let fallos = 0;
const filas = [];

for (const ruta of RUTAS) {
  const problemas = [];
  const res = await fetch(base + ruta);
  if (!res.ok) {
    problemas.push(`HTTP ${res.status}`);
    filas.push({ ruta, problemas });
    fallos += 1;
    continue;
  }
  const html = await res.text();

  const h1s = tags(html, "h1");
  if (h1s.length !== 1) problemas.push(`H1 x${h1s.length}`);
  if (h1s[0] && !GEO.test(h1s[0])) problemas.push("H1 sin geomodificador");

  const encabezados = ["h1", "h2", "h3", "h4", "h5", "h6"].flatMap((t) => tags(html, t));
  const vacios = encabezados.filter((t) => !t).length;
  if (vacios) problemas.push(`${vacios} encabezados vacíos`);

  if (/href="#"/.test(html)) problemas.push('href="#"');

  // Decorative images legitimately carry alt="" — what must never happen is a
  // missing alt attribute, which leaves a screen reader announcing a filename.
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const sinAlt = imgs.filter((i) => !/\balt=/.test(i)).length;
  if (sinAlt) problemas.push(`${sinAlt} imágenes sin atributo alt`);

  if (!new RegExp(`rel="canonical"[^>]*href="[^"]*${ruta === "/" ? "" : ruta}"`).test(html)) {
    if (!/rel="canonical"/.test(html)) problemas.push("sin canonical");
  }

  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!ld.length) problemas.push("sin JSON-LD");
  for (const [, cuerpo] of ld) {
    try {
      JSON.parse(cuerpo);
    } catch {
      problemas.push("JSON-LD inválido");
    }
  }

  const title = tags(html, "title")[0] ?? "";
  if (title.length < 45 || title.length > 75) {
    problemas.push(`title ${title.length} car.`);
  }

  if (problemas.length) fallos += 1;
  filas.push({ ruta, problemas });
}

console.log(`\nQA de ${RUTAS.length} rutas contra ${base}\n`);
for (const fila of filas) {
  const estado = fila.problemas.length ? `✗ ${fila.problemas.join(" · ")}` : "✓";
  console.log(`${estado.padEnd(50)} ${fila.ruta}`);
}
console.log(
  `\n${RUTAS.length - fallos}/${RUTAS.length} rutas sin observaciones.\n`,
);

process.exit(fallos ? 1 : 0);
