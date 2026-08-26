/**
 * Bilingual layer (ES ↔ EN).
 *
 * Spanish is the source language: every component keeps writing its Spanish
 * copy inline, and the English version is resolved at render time from
 * `dictionary.ts`, keyed by the Spanish string itself. A missing key falls back
 * to Spanish, so an untranslated string degrades instead of breaking.
 */
export type Lang = "es" | "en";

export const LANG_STORAGE_KEY = "sdc-lang";

/** `es-AR` / `en` — what lands in <html lang>. */
export const HTML_LANG: Record<Lang, string> = {
  es: "es-AR",
  en: "en",
};

/** Collapses the whitespace JSX introduces in multi-line literals. */
export function normalizar(texto: string) {
  return texto.replace(/\s+/g, " ").trim();
}
