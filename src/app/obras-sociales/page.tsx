import { SitePage } from "@/components/site/SiteLayout";
import { FileCheck2, MessageCircle, WalletCards } from "lucide-react";
import {
  CtaConMicrocopy,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { CoverageBadges } from "@/components/site/Blocks";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { faqsPorBloque } from "@/content/faqs";
import { COMO_CONSULTAR } from "@/content/obras-sociales";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

const ICONOS_CONSULTA = [MessageCircle, FileCheck2, WalletCards];

const TITLE = "Obras sociales y prepagas | Smile Design Center, Núñez";
const DESCRIPTION =
  "Cómo consultar tu cobertura odontológica, qué suele cubrir una prepaga y qué queda a tu cargo. Respuesta el mismo día por WhatsApp.";
const PATH = "/obras-sociales";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Obras sociales", href: PATH },
];

const FAQS_COBERTURA = faqsPorBloque("Obras sociales");

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ObrasSocialesPage() {
  return (
    <SitePage contexto="mi cobertura de obra social">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
          faqSchema(FAQS_COBERTURA),
        ])}
      />

      <PageHero
        eyebrow="Coberturas odontológicas"
        h1="Consultá tu cobertura odontológica en Núñez"
        bajada="Confirmá qué alcanza tu plan, qué queda a tu cargo y cómo seguir antes de reservar tu turno."
        migas={MIGAS}
        imagen={{ src: "/images/thumbnail_image0-jpg-1440x800.webp" }}
      >
        <div className="pt-2">
          <CtaConMicrocopy
            contexto="mi cobertura de obra social"
            variant="dark"
          />
        </div>
      </PageHero>

      <Section banda="secondary" className="!pb-20 lg:!pb-[120px]">
        <div className="grid w-full gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-[24px] bg-card/80 p-8 shadow-[var(--clireo-shadow)]">
            <SectionHeading
              eyebrow="Coberturas"
              titulo="Consultá tu obra social o prepaga"
              bajada="Estamos actualizando el listado vigente. Escribinos y te confirmamos tu caso el mismo día."
            />
            <CoverageBadges />
          </div>

          <div className="flex flex-col gap-8 rounded-[24px] bg-card/40 p-8">
            <SectionHeading
              eyebrow="Cómo consultar"
              titulo="Tres pasos, sin llamadas"
            />
            <ul className="flex w-full flex-col gap-5">
              {COMO_CONSULTAR.map((item, index) => {
                const Icon = ICONOS_CONSULTA[index];
                return (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-accent-yellow/30 text-accent-yellow-strong">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                    </span>
                    <span className="pt-1 text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
            <CtaConMicrocopy contexto="mi cobertura de obra social" />
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[760px] flex-col items-center gap-4 border-t border-border/60 pt-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[13px] leading-[18px] font-medium tracking-[1.1px] text-accent-coral-strong uppercase">
              Qué esperar
            </p>
            <h2 className="text-[30px] leading-[34px] tracking-[-1.5px] text-foreground">
              Qué suele cubrir una cobertura odontológica
            </h2>
          </div>
          <div className="flex max-w-[760px] flex-col gap-3 text-[14px] leading-[19px] tracking-[-0.14px] text-muted-foreground">
            <p>
              En términos generales, las coberturas suelen alcanzar prestaciones
              básicas —como consulta, limpieza y restauraciones simples—, pero
              pueden dejar fuera o cubrir parcialmente tratamientos estéticos,
              ortodoncia e implantes. El alcance exacto depende de tu plan.
            </p>
            <p>
              Antes de presupuestar, consultá qué parte del tratamiento cubre
              tu plan y qué diferencia queda a tu cargo. Esa combinación puede
              cambiar mucho el total final.
            </p>
            <p>
              Si tu cobertura no alcanza el tratamiento que necesitás, te
              pasamos el presupuesto particular con los medios de pago
              disponibles, sin vueltas.
            </p>
          </div>
          <TextArrowCTA href="/precios">
            Ver precios y medios de pago
          </TextArrowCTA>
        </div>
      </Section>

      <Section banda="secondary">
        <ContextualFaq
          titulo="Sobre coberturas"
          bajada="Revisá qué cubre tu plan, qué diferencia podrías abonar y cómo confirmarlo antes de empezar."
          faqs={FAQS_COBERTURA}
          contexto="mi cobertura de obra social"
        />
      </Section>
    </SitePage>
  );
}
