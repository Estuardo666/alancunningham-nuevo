"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { EN } from "./dictionary";
import { HTML_LANG, LANG_STORAGE_KEY, normalizar, type Lang } from "./config";

/**
 * The chosen language lives in `localStorage`, which is an external store, so
 * it is read through `useSyncExternalStore` rather than an effect: the server
 * snapshot is Spanish, the client snapshot is whatever the visitor picked, and
 * React reconciles the two in one pass instead of a second render.
 */
const oyentes = new Set<() => void>();
let cache: Lang | null = null;

function leer(): Lang {
  if (cache) return cache;
  try {
    const guardado = window.localStorage.getItem(LANG_STORAGE_KEY);
    cache = guardado === "en" ? "en" : "es";
  } catch {
    cache = "es";
  }
  return cache;
}

function suscribir(oyente: () => void) {
  oyentes.add(oyente);
  // Another tab switching language keeps this one in sync.
  const alCambiar = (evento: StorageEvent) => {
    if (evento.key !== LANG_STORAGE_KEY) return;
    cache = evento.newValue === "en" ? "en" : "es";
    oyentes.forEach((f) => f());
  };
  window.addEventListener("storage", alCambiar);
  return () => {
    oyentes.delete(oyente);
    window.removeEventListener("storage", alCambiar);
  };
}

function escribir(lang: Lang) {
  cache = lang;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* private mode: the choice lasts for this page only */
  }
  oyentes.forEach((f) => f());
}

type Contexto = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Spanish string in, current-language string out. */
  tr: (es: string) => string;
};

const LanguageContext = createContext<Contexto | null>(null);

/**
 * Spanish is what the server renders, always: the static export is Spanish, and
 * the English pass happens on the client. That keeps the exported HTML — and
 * what a crawler sees — in the site's primary language while the visitor's
 * choice survives navigation.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(suscribir, leer, () => "es" as Lang);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = useCallback((siguiente: Lang) => escribir(siguiente), []);

  const tr = useCallback(
    (es: string) => {
      if (lang === "es") return es;
      return EN[normalizar(es)] ?? es;
    },
    [lang],
  );

  const valor = useMemo(() => ({ lang, setLang, tr }), [lang, setLang, tr]);

  return (
    <LanguageContext.Provider value={valor}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Contexto {
  const contexto = useContext(LanguageContext);
  if (!contexto) {
    // Rendered outside the provider (a stray tree in a test): Spanish is the
    // right answer, not a crash.
    return { lang: "es", setLang: () => {}, tr: (es: string) => es };
  }
  return contexto;
}

/** `const tr = useTr(); tr("Agendá tu consulta")` */
export function useTr() {
  return useLanguage().tr;
}

/**
 * Translated text node. A server component can render this as a leaf without
 * becoming a client component itself.
 */
export function T({ children }: { children: string }) {
  return <>{useTr()(children)}</>;
}
