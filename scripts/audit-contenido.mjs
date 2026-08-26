#!/usr/bin/env node
/**
 * Lists every content record still flagged `ia` or `pendiente-validacion`.
 *
 * Hard rule from the plan (§6.3): no clinical, price or coverage content ships
 * to production with an `ia` flag. Run with `--strict` in CI to fail the build
 * when the sensitive files still carry unvalidated content.
 *
 *   node scripts/audit-contenido.mjs
 *   node scripts/audit-contenido.mjs --strict
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const CONTENIDO = join(RAIZ, "src", "content");

/** Files whose unvalidated content blocks a production deploy. */
const BLOQUEANTES = ["precios.ts", "obras-sociales.ts"];

function archivos(dir) {
  return readdirSync(dir).flatMap((nombre) => {
    const ruta = join(dir, nombre);
    return statSync(ruta).isDirectory() ? archivos(ruta) : [ruta];
  });
}

const hallazgos = [];

for (const ruta of archivos(CONTENIDO).filter((f) => f.endsWith(".ts"))) {
  const lineas = readFileSync(ruta, "utf8").split("\n");
  lineas.forEach((linea, i) => {
    const match = linea.match(/_fuente:\s*"(ia|pendiente-validacion)"/);
    if (!match) return;
    // Grab the nearest identifying label above or below the flag.
    const contexto =
      lineas
        .slice(Math.max(0, i - 2), i + 6)
        .map((l) => l.match(/(?:slug|nombre|pregunta|etiqueta|tratamiento|texto):\s*"([^"]{4,70})/)?.[1])
        .find(Boolean) ?? "";
    hallazgos.push({
      archivo: relative(RAIZ, ruta).replace(/\\/g, "/"),
      linea: i + 1,
      fuente: match[1],
      contexto,
    });
  });
}

const porArchivo = new Map();
for (const h of hallazgos) {
  if (!porArchivo.has(h.archivo)) porArchivo.set(h.archivo, []);
  porArchivo.get(h.archivo).push(h);
}

console.log("\nAuditoría de contenido — banderas pendientes\n");

for (const [archivo, items] of [...porArchivo].sort()) {
  const ia = items.filter((i) => i.fuente === "ia").length;
  const pend = items.length - ia;
  console.log(`${archivo}  —  ${ia} ia · ${pend} pendiente-validacion`);
  for (const item of items) {
    console.log(`   L${String(item.linea).padStart(4)}  ${item.fuente.padEnd(21)} ${item.contexto}`);
  }
  console.log("");
}

const totalIa = hallazgos.filter((h) => h.fuente === "ia").length;
const totalPend = hallazgos.length - totalIa;
console.log(`Total: ${hallazgos.length} registros — ${totalIa} generados por IA · ${totalPend} pendientes de validación del cliente\n`);

if (process.argv.includes("--strict")) {
  const criticos = hallazgos.filter((h) =>
    BLOQUEANTES.some((b) => h.archivo.endsWith(b)),
  );
  if (criticos.length) {
    console.error(
      `Deploy bloqueado: ${criticos.length} registros sin validar en ${BLOQUEANTES.join(", ")}.`,
    );
    process.exit(1);
  }
}
