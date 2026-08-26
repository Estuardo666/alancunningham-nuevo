/**
 * Single source of truth for the clinic's identity, NAP and conversion copy.
 *
 * D1 (plan §0): the clinic is the brand, Dr. Alan Cunningham is the authority
 * entity. Nothing else in the codebase should hardcode a brand name, a phone
 * number or the WhatsApp link.
 */

export const CLINICA = {
  nombre: "Smile Design Center",
  nombreLegal: "Smile Design Center",
  titular: "Od. Alan Cunningham",
  descripcionCorta:
    "Consultorio odontológico en Núñez especializado en rehabilitación oral, implantes y diseño de sonrisa.",
  direccion: {
    calle: "Arribeños 2659 5c",
    barrio: "Núñez",
    ciudad: "Ciudad Autónoma de Buenos Aires",
    provincia: "CABA",
    codigoPostal: "C1429",
    pais: "AR",
  },
  geo: { lat: -34.5449, lng: -58.4585 },
  telefono: "+54 9 11 2156 1445",
  telefonoE164: "+5491121561445",
  whatsapp: "5491121561445",
  email: "turnos@cbsaludybienestar.com",
  horarios: [
    { dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], desde: "09:00", hasta: "19:00" },
    { dias: ["Saturday"], desde: "09:00", hasta: "13:00" },
  ],
  horariosTexto: "Lunes a viernes de 9 a 19 h · Sábados de 9 a 13 h",
  instagram: "https://www.instagram.com/smiledesigncenter.ba/",
  mapa: "https://maps.google.com/?q=Arribeños+2659,+Núñez,+Buenos+Aires",
  zonas: [
    "Núñez",
    "Belgrano",
    "Saavedra",
    "Colegiales",
    "Coghlan",
    "Vicente López",
    "Olivos",
    "Ciudad Autónoma de Buenos Aires",
  ],
  monedas: ["ARS", "USD"],
  mediosDePago: [
    "Efectivo",
    "Transferencia bancaria",
    "Mercado Pago",
    "Tarjeta de débito",
    "Tarjeta de crédito",
  ],
} as const;

/** The single primary CTA verb used across the whole site (plan §8.3). */
export const CTA_PRIMARIO = "Agendá tu consulta";

/**
 * WhatsApp deep link with the message preloaded from the page context, so the
 * patient never has to write the first message (plan §8.1).
 */
export function whatsappHref(contexto?: string) {
  const texto = contexto
    ? `Hola, quisiera agendar una consulta por ${contexto}.`
    : "Hola, quisiera agendar una consulta.";
  return `https://api.whatsapp.com/send?phone=${CLINICA.whatsapp}&text=${encodeURIComponent(texto)}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alancunningham.com.ar";

export function urlAbsoluta(path: string) {
  return new URL(path, SITE_URL).toString();
}
