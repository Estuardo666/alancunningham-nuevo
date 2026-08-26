import { notFound } from "next/navigation";
import { CalendarDays, Clock3 } from "lucide-react";
import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  Pasos,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { ContextualFaq } from "@/components/site/ContextualFaq";
import { ConsultaForm } from "@/components/site/ConsultaForm";
import {
  PrecioDesde,
  Relacionados,
} from "@/components/site/Blocks";
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
  rutaTratamiento,
  tratamientoPorSlug,
  tituloQueEs,
  tituloVisible,
} from "@/content/tratamientos";

export function generateStaticParams() {
  return PILARES.flatMap((p) =>
    p.hijos.map((h) => ({ pilar: p.slug, hijo: h.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pilar: string; hijo: string }>;
}) {
  const { hijo: slug } = await params;
  const tratamiento = tratamientoPorSlug(slug);
  if (!tratamiento) return {};
  return buildMetadata({
    title: tratamiento.title,
    description: tratamiento.description,
    path: rutaTratamiento(tratamiento),
    image: tratamiento.imagen.src,
  });
}

export default async function TratamientoPage({
  params,
}: {
  params: Promise<{ pilar: string; hijo: string }>;
}) {
  const { pilar: slugPilar, hijo: slugHijo } = await params;
  const tratamiento = tratamientoPorSlug(slugHijo);
  const pilar = pilarPorSlug(slugPilar);
  if (!tratamiento || !pilar || tratamiento.pilar !== pilar.slug) notFound();

  const path = rutaTratamiento(tratamiento);
  const migas = [
    { label: "Inicio", href: "/" },
    { label: "Tratamientos", href: "/tratamientos" },
    { label: pilar.nombre, href: rutaPilar(pilar.slug) },
    { label: tratamiento.nombre, href: path },
  ];

  return (
    <SitePage contexto={tratamiento.nombre.toLowerCase()}>
      <JsonLd
        data={grafo([
          webPageSchema({
            path,
            title: tratamiento.title,
            description: tratamiento.description,
            tipo: "MedicalWebPage",
          }),
          medicalProcedureSchema({
            nombre: tratamiento.nombre,
            descripcion: tratamiento.resumen,
            path,
            imagen: tratamiento.imagen.src,
            parte: rutaPilar(pilar.slug),
          }),
          breadcrumbSchema(migas),
          faqSchema(tratamiento.faqs),
        ])}
      />

      <PageHero
        eyebrow={`Tratamiento · ${PILAR_EYEBROWS[pilar.slug] ?? pilar.eyebrow}`}
        h1={tituloVisible(tratamiento.h1)}
        bajada={tratamiento.resumen}
        migas={migas}
        imagen={{ src: tratamiento.imagen.src }}
      />

      <Section banda="background">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <SectionHeading
                titulo={tituloQueEs(tratamiento)}
              />
              <Prose parrafos={tratamiento.queEs} />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Para quién es" compact />
              <Checklist items={tratamiento.paraQuien} compact />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Cómo es el procedimiento" compact />
              <Pasos pasos={tratamiento.proceso} compact />
              <dl className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <dt className="flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[13px] leading-[18px] tracking-[-0.13px] text-foreground">
                    <Clock3 className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                    Duración estimada
                  </dt>
                  <dd className="text-[17px] leading-[23px] tracking-[-0.34px] text-foreground">
                    {tratamiento.duracion}
                  </dd>
                </div>
                <div className="flex flex-col gap-2">
                  <dt className="flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[13px] leading-[18px] tracking-[-0.13px] text-foreground">
                    <CalendarDays className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                    Sesiones
                  </dt>
                  <dd className="text-[17px] leading-[23px] tracking-[-0.34px] text-foreground">
                    {tratamiento.sesiones}
                  </dd>
                </div>
              </dl>
            </div>

            {tratamiento.videos?.length ? (
              <div className="flex flex-col gap-6">
                <SectionHeading titulo="Tratamientos filmados en el consultorio" />
                <ul className="grid w-full gap-4 sm:grid-cols-3">
                  {tratamiento.videos.map((src) => (
                    <li key={src}>
                      <video
                        src={src}
                        controls
                        preload="metadata"
                        className="h-full w-full rounded-[14px] bg-hero"
                      >
                        Tu navegador no puede reproducir este video.
                      </video>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <ConsultaForm
            titulo="Consultá por este tratamiento"
            contexto={tratamiento.nombre.toLowerCase()}
            tratamientos={[
              { slug: tratamiento.slug, nombre: tratamiento.nombre },
            ]}
            sticky
          />
        </div>
      </Section>

      <Section banda="secondary" className="items-center">
        <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Precio orientativo"
            titulo="Cuánto cuesta"
            align="center"
          />
          <PrecioDesde slug={tratamiento.slug} centrado />
        </div>
      </Section>

      <Section banda="background">
        <ContextualFaq
          titulo="Sobre este tratamiento"
          bajada="Información clara sobre indicaciones, proceso y lo que podés esperar."
          faqs={tratamiento.faqs}
          contexto={tratamiento.nombre}
        />
      </Section>

      <Section banda="background" className="!bg-surface-secondary/70">
        <SectionHeading
          eyebrow="Seguí explorando"
          titulo="Tratamientos relacionados"
        />
        <Relacionados slugs={tratamiento.relacionados} />
      </Section>
    </SitePage>
  );
}
