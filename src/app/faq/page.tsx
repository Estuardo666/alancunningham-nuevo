import { SitePage } from "@/components/site/SiteLayout";
import {
  CtaConMicrocopy,
  PageHero,
  Section,
} from "@/components/site/PageShell";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { BLOQUES_FAQ, FAQS, faqsPorBloque } from "@/content/faqs";

const TITLE = "Preguntas frecuentes | Smile Design Center, Núñez";
const DESCRIPTION =
  "25 preguntas sobre tratamientos, precios, obras sociales, primera consulta y turismo odontológico, respondidas sin vueltas. Consultorio en Núñez.";
const PATH = "/faq";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Preguntas frecuentes", href: PATH },
];

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function FaqPage() {
  return (
    <SitePage contexto="una consulta inicial">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
          faqSchema(FAQS),
        ])}
      />

      <PageHero
        eyebrow="Preguntas frecuentes"
        h1="Preguntas frecuentes sobre odontología en Núñez"
        bajada={`${FAQS.length} preguntas agrupadas por tema: tratamientos, precios, coberturas, primera consulta y turismo odontológico.`}
        migas={MIGAS}
        imagen={{ src: "/images/thumbnail_image0-5-jpg-1440x800.webp" }}
      >
        <div className="pt-2">
          <CtaConMicrocopy contexto="una consulta inicial" variant="dark" />
        </div>
      </PageHero>

      {BLOQUES_FAQ.map((bloque, index) => (
        <Section
          key={bloque}
          banda={index % 2 === 0 ? "background" : "secondary"}
        >
          <ContextualFaq
            eyebrow={`0${index + 1}`}
            titulo={bloque}
            bajada="Respuestas directas para que puedas avanzar con la información necesaria."
            faqs={faqsPorBloque(bloque)}
          />
        </Section>
      ))}

    </SitePage>
  );
}
