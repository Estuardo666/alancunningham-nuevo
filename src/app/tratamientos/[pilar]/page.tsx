import { notFound } from "next/navigation";
import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  Pasos,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { TratamientoCard } from "@/components/site/Cards";
import { AntesDespues } from "@/components/site/AntesDespues";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import { ConsultaForm } from "@/components/site/ConsultaForm";
import { PrecioDesde } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  medicalProcedureSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  PILARES,
  PILAR_EYEBROWS,
  pilarPorSlug,
  rutaPilar,
  tituloVisible,
} from "@/content/tratamientos";
import { casoPorSlug } from "@/content/casos";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

const BENEFICIO_TONES = [
  "border-[#f1c9bf] bg-[#fff1ed]",
  "border-[#bce9e5] bg-[#e9fbf9]",
  "border-[#dce8af] bg-[#f4f8e2]",
];

export function generateStaticParams() {
  return PILARES.map((p) => ({ pilar: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pilar: string }>;
}) {
  const { pilar: slug } = await params;
  const pilar = pilarPorSlug(slug);
  if (!pilar) return {};
  return buildMetadata({
    title: pilar.title,
    description: pilar.description,
    path: rutaPilar(pilar.slug),
    image: pilar.imagen.src,
  });
}

export default async function PilarPage({
  params,
}: {
  params: Promise<{ pilar: string }>;
}) {
  const { pilar: slug } = await params;
  const pilar = pilarPorSlug(slug);
  if (!pilar) notFound();

  const path = rutaPilar(pilar.slug);
  const caso = pilar.caso ? casoPorSlug(pilar.caso) : undefined;
  const migas = [
    { label: "Inicio", href: "/" },
    { label: "Tratamientos", href: "/tratamientos" },
    { label: pilar.nombre, href: path },
  ];

  return (
    <SitePage contexto={pilar.nombre.toLowerCase()}>
      <JsonLd
        data={grafo([
          webPageSchema({
            path,
            title: pilar.title,
            description: pilar.description,
            tipo: "MedicalWebPage",
          }),
          medicalProcedureSchema({
            nombre: pilar.nombre,
            descripcion: pilar.resumen,
            path,
            imagen: pilar.imagen.src,
          }),
          breadcrumbSchema(migas),
          faqSchema(pilar.faqs),
        ])}
      />

      <PageHero
        eyebrow={PILAR_EYEBROWS[pilar.slug] ?? pilar.eyebrow}
        h1={tituloVisible(pilar.h1)}
        bajada={pilar.resumen}
        migas={migas}
        imagen={{ src: pilar.imagen.src }}
        fondoAleatorio={false}
      />

      <Section banda="background">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <SectionHeading titulo={`Qué es ${pilar.nombre.toLowerCase()}`} />
              <Prose parrafos={pilar.queEs} />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Para quién es" compact />
              <Checklist items={pilar.paraQuien} compact />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Cómo lo hacemos" compact />
              <Pasos pasos={pilar.proceso} compact />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Qué te llevás" compact />
              <ul className="grid w-full gap-4 lg:grid-cols-4">
                {pilar.beneficios.map((b, index) => (
                  <li
                    key={b.titulo}
                    className={`flex flex-col gap-2 rounded-[15px] border p-4 shadow-[var(--clireo-shadow)] ${BENEFICIO_TONES[index % BENEFICIO_TONES.length]}`}
                  >
                    <h3 className="text-[18px] leading-[23px] font-medium tracking-[-0.45px] text-foreground">
                      {b.titulo}
                    </h3>
                    <p className="text-[14px] leading-[19px] tracking-[-0.14px] text-muted-foreground">
                      {b.descripcion}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ConsultaForm
            titulo="Consultá por este tratamiento"
            contexto={pilar.nombre.toLowerCase()}
            tratamientos={pilar.hijos.map((h) => ({
              slug: h.slug,
              nombre: h.nombre,
            }))}
            sticky
          />
        </div>
      </Section>

      {caso ? (
        <Section banda="secondary">
          <SectionHeading
            eyebrow="Caso clínico"
            titulo="Un caso real de esta especialidad"
          />
          <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-center">
            <AntesDespues
              antes={caso.antes}
              despues={caso.despues}
              etiqueta={caso.etiqueta}
              duracion={caso.duracion}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
                {caso.titulo}
              </h3>
              <Prose parrafos={[caso.diagnostico, caso.tecnica]} />
              <TextArrowCTA href={`/casos/${caso.slug}`}>
                Ver el caso completo
              </TextArrowCTA>
            </div>
          </div>
        </Section>
      ) : null}

      <Section banda={caso ? "background" : "secondary"}>
        <SectionHeading
          eyebrow="Tratamientos incluidos"
          titulo={`Qué entra dentro de ${pilar.nombre.toLowerCase()}`}
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pilar.hijos.map((hijo, index) => (
            <TratamientoCard
              key={hijo.slug}
              tratamiento={hijo}
              indice={index}
            />
          ))}
        </div>
      </Section>

      <Section
        banda={caso ? "secondary" : "background"}
        className="items-center"
      >
        <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Precio orientativo"
            titulo="Cuánto cuesta y cómo se paga"
            align="center"
          />
          <PrecioDesde
            slug={pilar.hijos[0]?.slug ?? pilar.slug}
            centrado
          />
        </div>
      </Section>

      <Section banda={caso ? "background" : "secondary"}>
        <ContextualFaq
          titulo="Sobre este tratamiento"
          bajada="Las respuestas más importantes para saber si esta especialidad es el próximo paso para vos."
          faqs={pilar.faqs}
          contexto={pilar.nombre}
        />
      </Section>
    </SitePage>
  );
}
