import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  CtaConMicrocopy,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { PilarCard } from "@/components/site/Cards";
import { Galeria } from "@/components/site/Blocks";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import { ConsultaForm } from "@/components/site/ConsultaForm";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CLINICA } from "@/content/clinica";
import { PILARES } from "@/content/tratamientos";
import { INSTALACIONES } from "@/content/clinica-contenido";
import { faqsPorBloque } from "@/content/faqs";
import { TITULAR } from "@/content/equipo";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

const TITLE = "Dentista en Núñez, CABA | Smile Design Center";
const DESCRIPTION =
  "Consultorio odontológico en Núñez, Arribeños 2659. Implantes, rehabilitación, estética y odontología general. Consulta inicial sin cargo, a metros de Belgrano.";
const PATH = "/dentista-en-nunez";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Dentista en Núñez", href: PATH },
];

const FAQS_LOCAL = faqsPorBloque("Primera consulta");

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: INSTALACIONES[0].src,
});

/**
 * The single local landing (plan §2.1, layer 4). Deliberately one page and not
 * thirteen: neighbourhood coverage is declared with `areaServed` in the global
 * JSON-LD, which is the correct way to do it without building doorway pages.
 */
export default function DentistaEnNunezPage() {
  return (
    <SitePage contexto="un turno en Núñez">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
          faqSchema(FAQS_LOCAL),
        ])}
      />

      <PageHero
        eyebrow="Núñez, CABA"
        h1="Dentista en Núñez: consultorio odontológico en Arribeños 2659"
        bajada={`${TITULAR.nombre}, ${TITULAR.especialidad}, ${TITULAR.matricula}. ${CLINICA.horariosTexto}.`}
        migas={MIGAS}
        imagen={{ src: INSTALACIONES[0].src }}
      >
        <div className="pt-2">
          <CtaConMicrocopy contexto="un turno en Núñez" variant="dark" />
        </div>
      </PageHero>

      <Section banda="background">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="flex flex-col gap-8">
            <SectionHeading titulo="Odontología en el barrio, sin resolver todo por WhatsApp" />
            <Prose
              parrafos={[
                `El consultorio está en ${CLINICA.direccion.calle}, en pleno ${CLINICA.direccion.barrio}, a pocas cuadras del límite con Belgrano. Atendemos ${CLINICA.horariosTexto.toLowerCase()}.`,
                "La consulta inicial dura alrededor de 40 minutos, es sin cargo y termina con un plan de tratamiento por escrito, con lo urgente separado de lo conveniente y de lo opcional. No hay tratamientos inventados ni urgencias fabricadas para cerrar una venta.",
                "Trabajamos con escáner intraoral 3Shape para los registros —sin pasta de impresión— y con láser para los procedimientos de tejido blando, lo que acorta el postoperatorio.",
              ]}
            />

            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
                Zonas que atendemos
              </h2>
              <Checklist items={[...CLINICA.zonas]} />
            </div>
          </div>

          <ConsultaForm
            titulo="Pedí tu turno"
            contexto="un turno en Núñez"
            tratamientos={PILARES.map((p) => ({
              slug: p.slug,
              nombre: p.nombre,
            }))}
            sticky
          />
        </div>
      </Section>

      <Section banda="secondary">
        <SectionHeading
          eyebrow="Tratamientos"
          titulo="Qué resolvemos en el consultorio"
        />
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((pilar) => (
            <PilarCard key={pilar.slug} pilar={pilar} />
          ))}
        </div>
      </Section>

      <Section banda="background">
        <SectionHeading
          eyebrow="El consultorio"
          titulo="Dónde vas a atenderte"
        />
        <Galeria imagenes={INSTALACIONES.slice(0, 3)} />
        <TextArrowCTA href="/contacto">Ver el mapa y cómo llegar</TextArrowCTA>
      </Section>

      <Section banda="secondary">
        <ContextualFaq
          titulo="Antes de venir"
          bajada="Cómo prepararte para la consulta y qué podés esperar del consultorio."
          faqs={FAQS_LOCAL}
          contexto="un turno en Núñez"
        />
      </Section>
    </SitePage>
  );
}
