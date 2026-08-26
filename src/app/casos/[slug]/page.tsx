import { notFound } from "next/navigation";
import { CalendarDays, Clock3, Stethoscope } from "lucide-react";
import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  CtaConMicrocopy,
  PageHeaderCompacto,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { AntesDespues } from "@/components/site/AntesDespues";
import { Relacionados } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import {
  autoriaClinica,
  breadcrumbSchema,
  grafo,
  ID,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CASOS, casoPorSlug } from "@/content/casos";
import { pilarPorSlug, rutaPilar } from "@/content/tratamientos";
import { urlAbsoluta } from "@/content/clinica";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

export function generateStaticParams() {
  return CASOS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = casoPorSlug(slug);
  if (!caso) return {};
  return buildMetadata({
    title: caso.title,
    description: caso.description,
    path: `/casos/${caso.slug}`,
    image: caso.despues.src,
    type: "article",
  });
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = casoPorSlug(slug);
  if (!caso) notFound();

  const pilar = pilarPorSlug(caso.pilar);
  const path = `/casos/${caso.slug}`;
  const migas = [
    { label: "Inicio", href: "/" },
    { label: "Casos clínicos", href: "/casos" },
    { label: caso.etiqueta, href: path },
  ];

  return (
    <SitePage contexto={caso.etiqueta.toLowerCase()} navOverLight>
      <JsonLd
        data={grafo([
          webPageSchema({
            path,
            title: caso.title,
            description: caso.description,
          }),
          {
            "@type": "Article",
            "@id": `${urlAbsoluta(path)}#article`,
            headline: caso.titulo,
            description: caso.description,
            image: [urlAbsoluta(caso.antes.src), urlAbsoluta(caso.despues.src)],
            publisher: { "@id": ID.organizacion },
            mainEntityOfPage: { "@id": `${urlAbsoluta(path)}#webpage` },
            ...autoriaClinica(),
          },
          breadcrumbSchema(migas),
        ])}
      />

      {/* No full-bleed hero here: on a clinical case the before/after is the
          argument, so the header stays compact and the slider starts at once. */}
      <PageHeaderCompacto
        eyebrow={`Caso clínico · ${caso.etiqueta}`}
        h1={caso.h1}
        migas={migas}
        datos={[
          { etiqueta: "Tratamiento", valor: caso.tratamiento, icon: Stethoscope },
          { etiqueta: "Duración", valor: caso.duracion, icon: Clock3 },
          { etiqueta: "Sesiones", valor: caso.sesiones, icon: CalendarDays },
        ]}
      />

      <section className="flex justify-center bg-background px-5 pb-20 lg:px-8 lg:pb-[120px]">
        <div className="grid w-full max-w-[1300px] gap-10 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-[88px] lg:self-start">
            <AntesDespues
              antes={caso.antes}
              despues={caso.despues}
              etiqueta={caso.etiqueta}
              duracion={caso.duracion}
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionHeading titulo="Diagnóstico" compact />
              <Prose parrafos={[caso.diagnostico]} />
            </div>

            <div className="flex flex-col gap-4">
              <SectionHeading titulo="Tratamiento realizado" compact />
              <Checklist items={caso.realizado} columnas={1} />
            </div>

            <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <SectionHeading titulo="Técnica" compact />
                <Prose parrafos={[caso.tecnica]} compact />
              </div>
              <div className="flex flex-col gap-4">
                <SectionHeading titulo="Seguimiento" compact />
                <Prose parrafos={[caso.seguimiento]} compact />
              </div>
            </div>

            {pilar ? (
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2 lg:flex-nowrap">
                <TextArrowCTA href={rutaPilar(pilar.slug)}>
                  Ver tratamiento completo
                </TextArrowCTA>
                <CtaConMicrocopy
                  contexto={`un turno por ${caso.etiqueta.toLowerCase()}`}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <Section banda="background">
        <SectionHeading
          eyebrow="Seguí explorando"
          titulo="Tratamientos relacionados"
        />
        <Relacionados slugs={caso.relacionados} />
      </Section>
    </SitePage>
  );
}
