/**
 * Conversion events, defined but not yet connected to a provider (plan §8.4).
 *
 * `track` pushes to `window.dataLayer` when one exists and otherwise logs, so
 * wiring GA4, GTM or Plausible later is a single change here — the call sites
 * across the site do not move.
 */

export const EVENTOS = {
  formularioEnviado: "formulario_consulta_enviado",
  whatsappAbierto: "whatsapp_abierto",
  newsletterSuscripcion: "newsletter_suscripcion",
  precioVisto: "precio_visto",
  casoAbierto: "caso_abierto",
} as const;

export type Evento = (typeof EVENTOS)[keyof typeof EVENTOS];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(evento: Evento, datos: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload = { event: evento, ...datos };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
    return;
  }

  // No analytics account wired yet — see plan §8.4.
  console.log("[analytics]", payload);
}
