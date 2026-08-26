import { SitePage } from "@/components/site/SiteLayout";
import {
  CtaConMicrocopy,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { CasoCard } from "@/components/site/Cards";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, grafo, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CASOS } from "@/content/casos";

const TITLE = "Casos Clínicos: Antes y Después en Núñez | Smile Design Center";
const DESCRIPTION =
  "Casos clínicos reales tratados en el consultorio de Núñez, con el diagnóstico, el tratamiento realizado y su duración. Antes y después comparables.";
const PATH = "/casos";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Casos clínicos", href: PATH },
];

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: CASOS[0].despues.src,
});

export default function CasosPage() {
  return (
    <SitePage contexto="un caso clínico">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
        ])}
      />

      <PageHero
        eyebrow="Casos documentados"
        h1="Resultados reales, explicados paso a paso"
        bajada="Conocé el punto de partida, el tratamiento realizado y el tiempo de cada caso. Sin retoques: con el detalle clínico a la vista."
        migas={MIGAS}
        imagen={{ src: CASOS[0].despues.src }}
      >
        <div className="pt-2">
          <CtaConMicrocopy contexto="un caso similar al mío" variant="dark" />
        </div>
      </PageHero>

      <Section banda="background">
        <SectionHeading
          eyebrow="Antes y después"
          titulo="Resultados de pacientes del consultorio"
        />
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CASOS.map((caso) => (
            <CasoCard key={caso.slug} caso={caso} />
          ))}
        </div>
      </Section>
    </SitePage>
  );
}
