import { SitePage } from "@/components/site/SiteLayout";
import {
  CtaConMicrocopy,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { PilarCard } from "@/components/site/Cards";
import { FaqBlock } from "@/components/site/FaqBlock";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { PILARES } from "@/content/tratamientos";
import { TECNOLOGIA } from "@/content/clinica-contenido";
import { faqsPorBloque } from "@/content/faqs";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";
import { TecnologiaCards } from "@/components/site/TecnologiaCards";
import { SectionEyebrow } from "@/components/sites/clireo-framer-website-a1614289/shared/SectionEyebrow";
import { RevealText } from "@/components/sites/clireo-framer-website-a1614289/shared/RevealText";
import { PrimaryButton } from "@/components/sites/clireo-framer-website-a1614289/shared/PrimaryButton";
import { CTA_PRIMARIO, whatsappHref } from "@/content/clinica";

const TITLE =
  "Tratamientos Odontológicos en Núñez, Buenos Aires | Smile Design Center";
const DESCRIPTION =
  "Siete áreas de tratamiento con página propia: estética, rehabilitación, implantes, ortodoncia, endodoncia, cirugía láser y odontología general. Consulta sin cargo.";
const PATH = "/tratamientos";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: PATH },
];

const FAQS_HUB = faqsPorBloque("Tratamientos").slice(0, 6);

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function TratamientosPage() {
  return (
    <SitePage contexto="tratamientos">
      <JsonLd
        data={grafo([
          webPageSchema({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            tipo: "MedicalWebPage",
          }),
          breadcrumbSchema(MIGAS),
          faqSchema(FAQS_HUB),
        ])}
      />

      <PageHero
        eyebrow="Un plan para tu salud bucal"
        h1="Tratamientos para cuidar tu sonrisa"
        bajada="Explorá especialidades, procesos y tiempos para elegir con claridad. La consulta inicial te ayuda a definir el próximo paso."
        migas={MIGAS}
        imagen={{ src: "/images/DSC_0136-1024x683.jpg" }}
      >
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <CtaConMicrocopy contexto="tratamientos" variant="dark" />
          <TextArrowCTA href="/precios" className="text-white">
            Ver precios y medios de pago
          </TextArrowCTA>
        </div>
      </PageHero>

      <Section banda="background">
        <SectionHeading
          eyebrow="Áreas de atención"
          titulo="Una especialidad para cada etapa de tu sonrisa"
          bajada="Conocé cómo trabajamos cada área y encontrá el punto de partida que mejor se adapta a lo que necesitás. Cada tarjeta abre una página propia, con proceso, tiempos y próximos pasos."
        />
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((pilar, index) => (
            <PilarCard
              key={pilar.slug}
              pilar={pilar}
              variante="blog"
              indice={index}
            />
          ))}
        </div>
      </Section>

      <Section banda="background">
        <SectionHeading
          eyebrow="Tecnología"
          titulo="Con qué trabajamos y para qué sirve"
          bajada="Conocé las herramientas que usamos para diagnosticar mejor, planificar con precisión y acompañar cada etapa del tratamiento."
        />
        <TecnologiaCards items={TECNOLOGIA} />
        <TextArrowCTA href="/nosotros/tecnologia">
          Ver la tecnología en detalle
        </TextArrowCTA>
      </Section>

      <section className="flex justify-center bg-surface-secondary px-5 pt-20 pb-24 lg:px-8 lg:pt-[100px] lg:pb-[130px]">
        <div className="flex w-full max-w-[1300px] flex-col items-start gap-10 lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col items-start justify-between gap-8 lg:w-[440px] lg:shrink-0">
            <div className="flex flex-col items-start gap-2 pb-[5px]">
              <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
              <RevealText
                as="h2"
                text="Preguntas para elegir tu tratamiento"
                blur={8}
                className="max-w-[440px] text-[36px] leading-[40px] tracking-[-2px] text-foreground lg:text-[54px] lg:leading-[56.16px] lg:tracking-[-3.24px]"
              />
            </div>

            <div className="flex max-w-[280px] flex-col items-start gap-4">
              <p className="text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
                Si todavía tenés dudas, escribinos y te ayudamos a ordenar el
                próximo paso.
              </p>
              <PrimaryButton
                label={CTA_PRIMARIO}
                href={whatsappHref("tratamientos")}
                variant="primary"
              />
              <TextArrowCTA
                href="/faq"
                className="text-[16px] leading-[23.2px] tracking-[-0.24px]"
              >
                Ver todas las preguntas
              </TextArrowCTA>
            </div>
          </div>

          <FaqBlock faqs={FAQS_HUB} />
        </div>
      </section>
    </SitePage>
  );
}
