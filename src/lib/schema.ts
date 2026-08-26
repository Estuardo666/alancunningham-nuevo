import { CLINICA, SITE_URL, urlAbsoluta } from "@/content/clinica";
import { EQUIPO, TITULAR, FECHA_REVISION } from "@/content/equipo";
import { PILARES, TRATAMIENTOS, rutaPilar, rutaTratamiento } from "@/content/tratamientos";
import type { Faq } from "@/content/types";

/** Stable @id anchors so every graph node can reference the same entities. */
export const ID = {
  clinica: `${SITE_URL}/#dentist`,
  organizacion: `${SITE_URL}/#organization`,
  sitio: `${SITE_URL}/#website`,
  titular: `${SITE_URL}/equipo/${TITULAR.slug}#person`,
};

type Json = Record<string, unknown>;

function personaId(slug: string) {
  return `${SITE_URL}/equipo/${slug}#person`;
}

export function personSchema(slug: string): Json | null {
  const p = EQUIPO.find((e) => e.slug === slug);
  if (!p) return null;
  return {
    "@type": "Person",
    "@id": personaId(p.slug),
    name: p.nombre,
    jobTitle: p.especialidad,
    identifier: p.matricula,
    image: urlAbsoluta(p.foto.src),
    url: urlAbsoluta(`/equipo/${p.slug}`),
    alumniOf: p.alumniOf.map((n) => ({ "@type": "EducationalOrganization", name: n })),
    hasCredential: p.credenciales.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    knowsAbout: p.tratamientos.map((slugPilar) => {
      const pilar = PILARES.find((x) => x.slug === slugPilar);
      return pilar?.nombre ?? slugPilar;
    }),
    worksFor: { "@id": ID.clinica },
  };
}

/** Dentist + LocalBusiness, emitted once from the root layout (plan §7.1). */
export function dentistSchema(): Json {
  return {
    "@type": ["Dentist", "LocalBusiness"],
    "@id": ID.clinica,
    name: CLINICA.nombre,
    description: CLINICA.descripcionCorta,
    url: SITE_URL,
    telephone: CLINICA.telefonoE164,
    email: CLINICA.email,
    priceRange: "$$",
    image: urlAbsoluta("/images/thumbnail_image0-jpg-1440x800.webp"),
    logo: urlAbsoluta("/logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINICA.direccion.calle,
      addressLocality: CLINICA.direccion.barrio,
      addressRegion: CLINICA.direccion.provincia,
      postalCode: CLINICA.direccion.codigoPostal,
      addressCountry: CLINICA.direccion.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINICA.geo.lat,
      longitude: CLINICA.geo.lng,
    },
    hasMap: CLINICA.mapa,
    openingHoursSpecification: CLINICA.horarios.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...h.dias],
      opens: h.desde,
      closes: h.hasta,
    })),
    areaServed: CLINICA.zonas.map((z) => ({ "@type": "Place", name: z })),
    medicalSpecialty: PILARES.map((p) => p.nombre),
    availableService: [
      ...PILARES.map((p) => ({
        "@type": "MedicalProcedure",
        name: p.nombre,
        url: urlAbsoluta(rutaPilar(p.slug)),
      })),
      ...TRATAMIENTOS.map((t) => ({
        "@type": "MedicalProcedure",
        name: t.nombre,
        url: urlAbsoluta(rutaTratamiento(t)),
      })),
    ],
    currenciesAccepted: CLINICA.monedas.join(", "),
    paymentAccepted: CLINICA.mediosDePago.join(", "),
    founder: { "@id": ID.titular },
    employee: EQUIPO.map((p) => ({ "@id": personaId(p.slug) })),
    sameAs: [CLINICA.instagram],
  };
}

export function websiteSchema(): Json[] {
  return [
    {
      "@type": "Organization",
      "@id": ID.organizacion,
      name: CLINICA.nombre,
      url: SITE_URL,
      logo: urlAbsoluta("/logo.png"),
      sameAs: [CLINICA.instagram],
    },
    {
      "@type": "WebSite",
      "@id": ID.sitio,
      url: SITE_URL,
      name: CLINICA.nombre,
      inLanguage: "es-AR",
      publisher: { "@id": ID.organizacion },
    },
  ];
}

export function webPageSchema({
  path,
  title,
  description,
  tipo = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  tipo?: "WebPage" | "MedicalWebPage" | "ContactPage" | "AboutPage";
}): Json {
  return {
    "@type": tipo,
    "@id": `${urlAbsoluta(path)}#webpage`,
    url: urlAbsoluta(path),
    name: title,
    description,
    inLanguage: "es-AR",
    isPartOf: { "@id": ID.sitio },
    about: { "@id": ID.clinica },
    dateModified: FECHA_REVISION,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: urlAbsoluta(item.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
}

/** E-E-A-T block attached to every clinical page (plan §7.1). */
export function autoriaClinica() {
  return {
    author: { "@id": ID.titular },
    reviewedBy: { "@id": ID.titular },
    dateModified: FECHA_REVISION,
  };
}

export function medicalProcedureSchema({
  nombre,
  descripcion,
  path,
  imagen,
  parte,
}: {
  nombre: string;
  descripcion: string;
  path: string;
  imagen?: string;
  /** Path of the parent pillar, for `isPartOf`. */
  parte?: string;
}): Json {
  return {
    "@type": "MedicalProcedure",
    "@id": `${urlAbsoluta(path)}#procedure`,
    name: nombre,
    description: descripcion,
    url: urlAbsoluta(path),
    procedureType: "https://schema.org/NoninvasiveProcedure",
    ...(imagen ? { image: urlAbsoluta(imagen) } : {}),
    ...(parte ? { isPartOf: { "@id": `${urlAbsoluta(parte)}#procedure` } } : {}),
    provider: { "@id": ID.clinica },
    ...autoriaClinica(),
  };
}

/** Wraps any set of nodes in a single @graph document. */
export function grafo(nodos: (Json | null)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodos.filter(Boolean),
  };
}
