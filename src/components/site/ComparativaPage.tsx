import { SitePage } from "./SiteLayout";
import {
  Checklist,
  CtaConMicrocopy,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "./PageShell";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema, grafo, webPageSchema } from "@/lib/schema";
import type { Comparativa } from "@/content/intenciones";
import {
  rutaPorSlug,
  nombrePorSlug,
  tratamientoPorSlug,
} from "@/content/tratamientos";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

/** Shared body for the three comparison pages (plan §2.1, layer 3). */
export function ComparativaPage({ comparativa }: { comparativa: Comparativa }) {
  const path = `/${comparativa.slug}`;
  const migas = [
    { label: "Inicio", href: "/" },
    { label: "Tratamientos", href: "/tratamientos" },
    { label: comparativa.h1, href: path },
  ];
  const [a, b] = comparativa.opciones;
  const imagenHero = tratamientoPorSlug(a.tratamiento)?.imagen;

  return (
    <SitePage contexto={comparativa.h1.toLowerCase()}>
      <JsonLd
        data={grafo([
          webPageSchema({
            path,
            title: comparativa.title,
            description: comparativa.description,
            tipo: "MedicalWebPage",
          }),
          breadcrumbSchema(migas),
        ])}
      />

      <PageHero
        eyebrow={comparativa.eyebrow}
        h1={comparativa.h1}
        bajada={comparativa.resumen}
        migas={migas}
        imagen={imagenHero}
      >
        <div className="pt-2">
          <CtaConMicrocopy
            contexto={comparativa.h1.toLowerCase()}
            variant="dark"
          />
        </div>
      </PageHero>

      <Section banda="background">
        <SectionHeading titulo="La pregunta detrás de la pregunta" />
        <Prose parrafos={comparativa.intro} />
      </Section>

      <Section banda="secondary">
        <SectionHeading eyebrow="Las dos opciones" titulo="Qué es cada una" />
        <div className="grid w-full gap-6 lg:grid-cols-2">
          {[a, b].map((opcion) => (
            <article
              key={opcion.nombre}
              className="flex flex-col gap-6 rounded-[16px] bg-card p-8 shadow-[var(--clireo-shadow)]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
                  {opcion.nombre}
                </h3>
                <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
                  {opcion.resumen}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-[14px] leading-[18.2px] tracking-[1.26px] text-success uppercase">
                  A favor
                </h4>
                <Checklist items={opcion.aFavor} columnas={1} />
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-[14px] leading-[18.2px] tracking-[1.26px] text-muted-foreground uppercase">
                  A tener en cuenta
                </h4>
                <Checklist items={opcion.enContra} columnas={1} />
              </div>

              <TextArrowCTA href={rutaPorSlug(opcion.tratamiento)}>
                Ver {nombrePorSlug(opcion.tratamiento)}
              </TextArrowCTA>
            </article>
          ))}
        </div>
      </Section>

      <Section banda="background">
        <SectionHeading eyebrow="Comparación" titulo="Punto por punto" />
        <div className="w-full overflow-x-auto rounded-[16px] bg-card shadow-[var(--clireo-shadow)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-[14px] leading-[18.2px] tracking-[1.26px] text-muted-foreground uppercase"
                >
                  Criterio
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-[14px] leading-[18.2px] tracking-[1.26px] text-muted-foreground uppercase"
                >
                  {a.nombre}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-[14px] leading-[18.2px] tracking-[1.26px] text-muted-foreground uppercase"
                >
                  {b.nombre}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparativa.tabla.map((fila) => (
                <tr
                  key={fila.criterio}
                  className="border-b border-border last:border-0"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-left text-[17px] leading-[23.46px] tracking-[-0.34px] font-normal text-foreground"
                  >
                    {fila.criterio}
                  </th>
                  <td className="px-6 py-4 text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
                    {fila.a}
                  </td>
                  <td className="px-6 py-4 text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
                    {fila.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section banda="secondary">
        <SectionHeading eyebrow="Cómo decidir" titulo="Cuál te conviene" />
        <div className="grid w-full gap-6 lg:grid-cols-3">
          {comparativa.cuandoElegir.map((bloque) => (
            <div
              key={bloque.titulo}
              className="flex flex-col gap-3 rounded-[16px] bg-card p-8 shadow-[var(--clireo-shadow)]"
            >
              <h3 className="text-[22px] leading-[29.7px] tracking-[-0.88px] text-foreground">
                {bloque.titulo}
              </h3>
              <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
                {bloque.texto}
              </p>
            </div>
          ))}
        </div>
        <Prose parrafos={comparativa.cierre} />
      </Section>
    </SitePage>
  );
}
