import { SitePage } from "@/components/site/SiteLayout";
import Image from "next/image";
import {
  CtaConMicrocopy,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { PilarCard } from "@/components/site/Cards";
import { Carrusel } from "@/components/site/Carrusel";
import { TimelineSteps } from "@/components/site/TimelineSteps";
import { ConsultaForm } from "@/components/site/ConsultaForm";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import {
  MediosDePago,
  StayTimeTable,
} from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  ID,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { PILARES, pilarPorSlug } from "@/content/tratamientos";
import { urlAbsoluta } from "@/content/clinica";
import {
  COMO_FUNCIONA,
  FAQS_TURISMO,
  FOTOS_BUENOS_AIRES,
  FOTO_HERO_TURISMO,
  RAZONES,
  SERVICIOS,
  TRATAMIENTOS_DESTACADOS,
  TURISMO_META,
} from "@/content/turismo";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";
import { ScrollReveal, ScrollRevealItem } from "@/components/site/ScrollReveal";
import {
  BusFront,
  CarFront,
  Hotel,
  MapPinned,
  UtensilsCrossed,
} from "lucide-react";

const PATH = "/turismo-odontologico";
const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Turismo odontológico", href: PATH },
];

const REASON_TONES = [
  "bg-[#f8f0eb] border-[#ecd0c5]",
  "bg-[#eff8f7] border-[#c8e7e3]",
  "bg-[#f2efff] border-[#d9cff7]",
  "bg-[#f8f5e8] border-[#e8dbaf]",
];

const SERVICE_TONES = [
  "bg-[#fff1ed] border-[#f1c9bf]",
  "bg-[#f1edff] border-[#d7ccf7]",
  "bg-[#e9fbf9] border-[#bce9e5]",
  "bg-[#f4f8e2] border-[#dce8af]",
  "bg-[#edf5ff] border-[#c9def4]",
];

const SERVICE_ICON_TONES = [
  "bg-accent-coral/20 text-accent-coral-strong",
  "bg-[#d7ccf7] text-[#4d2c98]",
  "bg-[#bce9e5] text-[#147a76]",
  "bg-[#dce8af] text-[#68751f]",
  "bg-[#c9def4] text-[#2d5f8f]",
];

const SERVICE_ICONS = [CarFront, BusFront, Hotel, MapPinned, UtensilsCrossed];

export const metadata = buildMetadata({
  title: TURISMO_META.title,
  description: TURISMO_META.description,
  path: PATH,
  image: FOTO_HERO_TURISMO.src,
});

/**
 * The only page designed from scratch: it does not exist in the Clireo
 * template. Built exclusively from the system's tokens and primitives — no new
 * colours, radii, type scale or motion (plan §5).
 *
 * Blocks 04 (how it works) and 07 (stay times) are the differentiators: no
 * Argentine clinic publishes estimated stay length per treatment, and that is
 * exactly the number a travelling patient needs to book a flight.
 */
export default function TurismoPage() {
  const destacados = TRATAMIENTOS_DESTACADOS.map((s) => pilarPorSlug(s)).filter(
    (p): p is (typeof PILARES)[number] => Boolean(p),
  );

  return (
    <SitePage contexto="turismo odontológico">
      <JsonLd
        data={grafo([
          webPageSchema({
            path: PATH,
            title: TURISMO_META.title,
            description: TURISMO_META.description,
          }),
          {
            "@type": "Service",
            "@id": `${urlAbsoluta(PATH)}#service`,
            name: "Turismo odontológico en Buenos Aires",
            description: TURISMO_META.description,
            serviceType: "Dental tourism",
            provider: { "@id": ID.clinica },
            areaServed: { "@type": "Country", name: "Argentina" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios incluidos",
              itemListElement: SERVICIOS.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.nombre,
                  description: s.descripcion,
                },
              })),
            },
          },
          {
            "@type": "TouristTrip",
            "@id": `${urlAbsoluta(PATH)}#trip`,
            name: "Tratamiento odontológico en Buenos Aires",
            description:
              "Viaje a Buenos Aires con tratamiento odontológico planificado antes de viajar y agenda de sesiones coordinada.",
            touristType:
              "Pacientes de odontología del exterior y del interior del país",
            provider: { "@id": ID.clinica },
          },
          breadcrumbSchema(MIGAS),
          faqSchema(FAQS_TURISMO),
        ])}
      />

      {/* 01 · hero */}
      <PageHero
        eyebrow="Atención para pacientes que viajan"
        h1={TURISMO_META.h1}
        bajada={TURISMO_META.bajada}
        migas={MIGAS}
        imagen={{ src: FOTOS_BUENOS_AIRES[8].src }}
        fondoAleatorio={false}
      >
        {/* The city photograph is the hero background now, so the inline card
            that used to sit here would just show Buenos Aires twice. */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <CtaConMicrocopy contexto="turismo odontológico" variant="dark" />
          <TextArrowCTA href="#tiempos" className="text-white">
            Ver cuántos días necesitás
          </TextArrowCTA>
        </div>
      </PageHero>

      {/* 02 · cómo funciona — the travel decision starts with a clear plan */}
      <Section banda="background" id="como-funciona">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-8 lg:sticky lg:top-[104px] lg:self-start">
            <SectionHeading
              eyebrow="Cómo funciona"
              titulo="De la primera foto por WhatsApp al control a distancia"
              bajada="Cinco pasos, con el plan y el presupuesto cerrados antes de que compres el pasaje."
            />
            <CtaConMicrocopy contexto="turismo odontológico" />
          </div>
          <TimelineSteps pasos={COMO_FUNCIONA} tone="dark" />
        </div>
      </Section>

      {/* 03 · por qué Buenos Aires */}
      <Section banda="background">
        <SectionHeading
          eyebrow="Por qué acá"
          titulo="Qué hace que el viaje valga la pena"
        />
        <ul className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RAZONES.map((razon, index) => (
            <ScrollRevealItem
              key={razon.titulo}
              delay={index * 110}
              className={`group flex flex-col gap-4 rounded-[16px] border p-3 shadow-[var(--clireo-shadow)] transition-[box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[var(--clireo-shadow-md)] ${REASON_TONES[index]}`}
            >
              <span className="px-2 pt-1 font-mono text-[14px] leading-[19px] tracking-[0.04em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative h-[142px] overflow-hidden rounded-[12px] bg-hero">
                <Image
                  src={razon.imagen.src}
                  alt={razon.imagen.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-2 pb-2">
                <h3 className="text-[20px] leading-[26px] tracking-[-0.7px] text-foreground">
                  {razon.titulo}
                </h3>
                <p className="text-[14px] leading-[19px] tracking-[-0.14px] text-muted-foreground">
                  {razon.descripcion}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ul>
      </Section>

      {/* 04 · qué incluye */}
      <Section banda="background">
        <SectionHeading
          eyebrow="Qué incluye"
          titulo="Lo que coordinamos además del tratamiento"
          bajada="El tratamiento y los servicios de viaje se presupuestan por separado; lo que hacemos es que todo encaje con la agenda de sesiones."
        />
        <ul className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICIOS.map((servicio, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
            <ScrollRevealItem
              key={servicio.nombre}
              delay={index * 100}
              className={`group flex flex-col gap-4 rounded-[16px] border p-6 shadow-[var(--clireo-shadow)] transition-[box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-card hover:shadow-[var(--clireo-shadow-md)] ${SERVICE_TONES[index]}`}
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-[12px] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 ${SERVICE_ICON_TONES[index]}`}>
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
              </span>
              <h3 className="text-[20px] leading-[27px] tracking-[-0.8px] text-foreground">
                {servicio.nombre}
              </h3>
              <p className="text-[14px] leading-[19px] tracking-[-0.14px] text-muted-foreground">
                {servicio.descripcion}
              </p>
            </ScrollRevealItem>
            );
          })}
        </ul>
      </Section>

      {/* 06 · tratamientos más solicitados */}
      <Section banda="secondary">
        <SectionHeading
          eyebrow="Tratamientos"
          titulo="Lo que más resuelven quienes viajan"
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destacados.map((pilar, index) => (
            <ScrollReveal key={pilar.slug} delay={index * 100} className="h-full">
              <PilarCard pilar={pilar} variante="blog" indice={index} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* 07 · tiempos estimados — differentiator */}
      <Section banda="background" id="tiempos">
        <SectionHeading
          eyebrow="Tiempos"
          titulo="Cuántos días necesitás quedarte"
          bajada="El dato que hace falta para comprar el pasaje y que casi ninguna clínica publica. Son estimaciones: tu caso se confirma en la evaluación online."
        />
        <StayTimeTable />
      </Section>

      {/* 08 · Buenos Aires */}
      <Section banda="strong">
        <SectionHeading
          tone="light"
          eyebrow="La ciudad"
          titulo="Buenos Aires, entre sesión y sesión"
          bajada="Las sesiones ocupan unas pocas horas. El resto del viaje es esto."
        />
        <Carrusel
          imagenes={FOTOS_BUENOS_AIRES}
          etiqueta="Fotos de Buenos Aires"
        />
      </Section>

      {/* 09 · pagos y moneda */}
      <Section banda="background">
        <SectionHeading
          eyebrow="Pagos"
          titulo="Con qué moneda y con qué medios"
        />
        <Prose
          parrafos={[
            "Aceptamos pesos y dólares en efectivo, además de transferencia bancaria, Mercado Pago y tarjetas. El presupuesto se entrega por escrito antes de que viajes, con las etapas separadas.",
          ]}
        />
        <MediosDePago conImagenes={false} layout="row" />
        <TextArrowCTA href="/precios">
          Ver todos los precios y condiciones
        </TextArrowCTA>
      </Section>

      {/* 10 · formulario internacional */}
      <Section banda="background">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16">
          <ConsultaForm
            titulo="Consulta internacional"
            contexto="turismo odontológico"
            sinPaddingMobile
            tratamientos={PILARES.map((p) => ({
              slug: p.slug,
              nombre: p.nombre,
            }))}
            internacional
          />
          <div className="flex flex-col gap-6 lg:sticky lg:top-[104px] lg:self-start">
            <SectionHeading
              eyebrow="Empezá acá"
              titulo="Evaluación online antes de viajar"
              bajada="Contanos desde dónde viajás y qué necesitás resolver. Te respondemos con la viabilidad del caso y el plan estimado."
            />
            <CtaConMicrocopy contexto="turismo odontológico" />
          </div>
        </div>
      </Section>

      {/* 11 · FAQ — the final decision-support block before the footer */}
      <Section banda="secondary">
        <ContextualFaq
          titulo="Antes de reservar el vuelo"
          bajada="Todo lo que conviene resolver antes de organizar tu viaje y tu tratamiento."
          faqs={FAQS_TURISMO}
          contexto="turismo odontológico"
        />
      </Section>
    </SitePage>
  );
}
