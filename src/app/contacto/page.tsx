import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { ConsultaForm } from "@/components/site/ConsultaForm";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, grafo, ID, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CLINICA, whatsappHref } from "@/content/clinica";
import { PILARES } from "@/content/tratamientos";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";
import { AtSign, Clock3, MapPin, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TITLE =
  "Contacto — Consultorio odontológico en Núñez | Smile Design Center";
const DESCRIPTION =
  "Arribeños 2659 5c, Núñez, CABA. Turnos por WhatsApp o formulario, horarios, cómo llegar en subte y colectivo, y el mapa del consultorio.";
const PATH = "/contacto";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Contacto", href: PATH },
];

const MAP_SRC =
  "https://maps.google.com/maps?q=Arribe%C3%B1os%202659%2C%20N%C3%BA%C3%B1ez%2C%20Buenos%20Aires&z=16&output=embed";

const COMO_LLEGAR = [
  "Subte: línea D, estación Congreso de Tucumán, a pocas cuadras.",
  "Tren: línea Mitre, estación Núñez.",
  "Colectivos: líneas que circulan por Cabildo y por Av. del Libertador.",
  "Estacionamiento: hay cocheras sobre Arribeños y calles laterales.",
];

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ContactoPage() {
  return (
    <SitePage contexto="un turno" ctaFinal={false} navOverLight>
      <JsonLd
        data={grafo([
          webPageSchema({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            tipo: "ContactPage",
          }),
          breadcrumbSchema(MIGAS),
          { "@type": "LocalBusiness", "@id": ID.clinica },
        ])}
      />

      <Section banda="background" className="pt-[68px] lg:py-[120px]">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_440px] lg:items-start">
          <div className="lg:col-start-2 lg:row-start-1">
            <MapaContacto />
          </div>

          <div className="flex flex-col gap-10 lg:col-start-1 lg:row-start-1">
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Información de contacto"
                titulo="Dónde encontrarnos y cuándo atendemos"
                as="h1"
              />
              <dl className="grid gap-6 sm:grid-cols-2">
                <Dato titulo="Dirección" icon={MapPin}>
                  <address className="not-italic">
                    {CLINICA.direccion.calle}
                    <br />
                    {CLINICA.direccion.barrio}, Buenos Aires
                  </address>
                  <TextArrowCTA
                    href={CLINICA.mapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] leading-[19px]"
                  >
                    Abrir en Google Maps
                  </TextArrowCTA>
                </Dato>
                <Dato titulo="WhatsApp y teléfono" icon={MessageCircle}>
                  <a
                    href={whatsappHref()}
                    className="text-primary underline underline-offset-4"
                  >
                    {CLINICA.telefono}
                  </a>
                </Dato>
                <Dato titulo="Horarios" icon={Clock3}>{CLINICA.horariosTexto}</Dato>
                <Dato titulo="Instagram" icon={AtSign}>
                  <TextArrowCTA
                    href={CLINICA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] leading-[19px]"
                  >
                    Ir al perfil
                  </TextArrowCTA>
                </Dato>
              </dl>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Cómo llegar"
                titulo="Transporte y estacionamiento"
                compact
              />
              <Checklist items={COMO_LLEGAR} columnas={1} />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="Zonas" titulo="Barrios que atendemos" compact />
              <Checklist items={[...CLINICA.zonas]} />
            </div>
          </div>

        </div>
      </Section>

      <Section banda="secondary">
        <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-8">
          <SectionHeading
            eyebrow="Contacto directo"
            titulo="¿Preferís escribirnos por mail?"
            bajada={`Podés enviarnos tu consulta a ${CLINICA.email} y te respondemos para coordinar el próximo paso.`}
            align="center"
            compact
          />
          <ConsultaForm
            titulo="Dejanos tus datos"
            contexto="una consulta por mail"
            tratamientos={PILARES.map((p) => ({
              slug: p.slug,
              nombre: p.nombre,
            }))}
            className="max-w-[720px]"
          />
        </div>
      </Section>
    </SitePage>
  );
}

function MapaContacto() {
  return (
    <div className="w-full lg:sticky lg:top-[90px]">
      <div className="relative h-[500px] w-full overflow-hidden rounded-[16px] bg-primary/10 shadow-[var(--clireo-shadow-md)] lg:h-[620px]">
        <iframe
          title="Ubicación del consultorio en Arribeños 2659, Núñez, Buenos Aires"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0 saturate-[0.72] hue-rotate-[170deg]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-multiply"
        />
        <MapPin
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[52%] h-11 w-11 -translate-x-1/2 -translate-y-full text-accent-coral drop-shadow-[0_3px_4px_rgba(38,7,78,0.28)]"
          fill="currentColor"
          stroke="white"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}

function Dato({
  titulo,
  icon: Icon,
  children,
}: {
  titulo: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[13px] leading-[18px] tracking-[-0.13px] text-foreground">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
        {titulo}
      </dt>
      <dd className="flex flex-col gap-1 text-[17px] leading-[23.46px] tracking-[-0.34px] text-foreground">
        {children}
      </dd>
    </div>
  );
}
