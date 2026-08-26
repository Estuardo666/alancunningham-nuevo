import { SitePage } from "@/components/site/SiteLayout";
import {
  CtaConMicrocopy,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import {
  MediosDePago,
  PriceTable,
} from "@/components/site/Blocks";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  ID,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { faqsPorBloque } from "@/content/faqs";
import { PRECIOS } from "@/content/precios";
import { CLINICA, urlAbsoluta } from "@/content/clinica";
import { rutaPorSlug } from "@/content/tratamientos";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

const TITLE =
  "Precios de tratamientos odontológicos en Núñez | Smile Design Center";
const DESCRIPTION =
  "Rangos orientativos por tratamiento, medios de pago aceptados y condiciones, en una sola página. Presupuesto por escrito tras la consulta inicial.";
const PATH = "/precios";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Precios", href: PATH },
];

const FAQS_PRECIOS = faqsPorBloque("Precios y pagos");

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PreciosPage() {
  return (
    <SitePage contexto="precios y presupuesto">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
          faqSchema(FAQS_PRECIOS),
          {
            "@type": "OfferCatalog",
            "@id": `${urlAbsoluta(PATH)}#catalog`,
            name: "Tratamientos odontológicos",
            provider: { "@id": ID.clinica },
            itemListElement: PRECIOS.map((p) => ({
              "@type": "Offer",
              name: p.etiqueta,
              url: urlAbsoluta(rutaPorSlug(p.tratamiento)),
              priceCurrency: p.moneda,
              ...(p.desde !== null
                ? {
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: p.desde,
                      priceCurrency: p.moneda,
                    },
                  }
                : {}),
              availability: "https://schema.org/InStock",
            })),
          },
        ])}
      />

      <PageHero
        eyebrow="Precios y formas de pago"
        h1="Precios de tratamientos odontológicos en Núñez, Buenos Aires"
        bajada="Encontrá rangos orientativos, medios de pago y condiciones para planificar tu tratamiento con claridad."
        migas={MIGAS}
        imagen={{ src: "/images/DSC_0123-1024x683.jpg" }}
      >
        <div className="pt-2">
          <CtaConMicrocopy contexto="un presupuesto" variant="dark" />
        </div>
      </PageHero>

      <Section banda="background">
        <div className="flex w-full flex-col items-start gap-6">
          <SectionHeading
            eyebrow="Rangos orientativos"
            titulo="Cuánto cuesta cada tratamiento"
          />
          <p className="max-w-[640px] text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
            Los rangos son orientativos: el presupuesto definitivo depende de
            tu caso y se entrega por escrito después de la consulta inicial.
          </p>
          <div className="w-full max-w-[900px]">
            <PriceTable />
          </div>
        </div>
      </Section>

      <Section banda="secondary">
        <div className="flex w-full flex-col gap-10">
          <SectionHeading
            eyebrow="Medios de pago"
            titulo="Con qué podés pagar"
            bajada="Primero lo que podés usar; las condiciones de cada medio, después y una sola vez."
          />
          <MediosDePago conImagenes={false} layout="row" />
          <div className="mt-4 flex w-full max-w-[680px] flex-col items-start gap-4 border-t border-border/60 pt-8 text-left">
            <div className="flex flex-col items-start gap-2">
              <p className="text-[13px] leading-[18px] font-medium tracking-[1.1px] text-accent-coral-strong uppercase">
                Cómo se arma un presupuesto
              </p>
              <h2 className="text-[30px] leading-[34px] tracking-[-1.5px] text-foreground">
                Qué incluye y qué no
              </h2>
            </div>
            <div className="flex max-w-[680px] flex-col gap-3 text-left text-[14px] leading-[19px] tracking-[-0.14px] text-muted-foreground">
              <p>
                El presupuesto se arma por pieza y por técnica, después de la
                evaluación clínica. En tratamientos largos se separa por etapas,
                y cada etapa se abona al realizarse.
              </p>
              <p>
                El plan distingue lo urgente de lo conveniente y de lo opcional,
                así podés decidir con criterio propio en vez de aceptar un
                paquete completo. Y si hay una alternativa más conservadora y
                más económica que resuelve tu caso, se plantea.
              </p>
              <p>
                Aceptamos {CLINICA.monedas.join(" y ")}. Si tenés obra social o
                prepaga, consultá tu cobertura antes de presupuestar como
                paciente particular.
              </p>
            </div>
            <TextArrowCTA href="/obras-sociales">
              Ver obras sociales y prepagas
            </TextArrowCTA>
          </div>
        </div>
      </Section>

      <Section banda="secondary">
        <ContextualFaq
          titulo="Sobre precios y pagos"
          bajada="Condiciones claras para que puedas comparar opciones y organizar tu tratamiento."
          faqs={FAQS_PRECIOS}
          contexto="precios y medios de pago"
        />
      </Section>
    </SitePage>
  );
}
