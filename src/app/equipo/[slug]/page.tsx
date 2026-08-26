import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { ConsultaForm } from "@/components/site/ConsultaForm";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  grafo,
  personSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { EQUIPO, profesionalPorSlug } from "@/content/equipo";
import { PILARES, pilarPorSlug, rutaPilar } from "@/content/tratamientos";

export function generateStaticParams() {
  return EQUIPO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = profesionalPorSlug(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.nombre}, ${p.matricula} — Odontólogo en Núñez, Buenos Aires`,
    description: `${p.nombre}, ${p.especialidad}, ${p.matricula}. Atiende en Arribeños 2659, Núñez, Buenos Aires. Consulta inicial sin cargo.`,
    path: `/equipo/${p.slug}`,
    image: p.foto.src,
  });
}

export default async function ProfesionalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profesional = profesionalPorSlug(slug);
  if (!profesional) notFound();

  const path = `/equipo/${profesional.slug}`;
  const title = `${profesional.nombre} — ${profesional.especialidad}`;
  const description = `${profesional.nombre}, ${profesional.especialidad}, ${profesional.matricula}.`;
  const migas = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: profesional.nombre, href: path },
  ];

  return (
    <SitePage contexto={`una consulta con ${profesional.nombre}`}>
      <JsonLd
        data={grafo([
          webPageSchema({ path, title, description, tipo: "AboutPage" }),
          personSchema(profesional.slug),
          breadcrumbSchema(migas),
        ])}
      />

      <PageHero
        eyebrow="Equipo"
        h1={`${profesional.nombre} — ${profesional.especialidad} en Núñez`}
        bajada={`${profesional.titulo} · ${profesional.matricula}`}
        migas={migas}
        imagen={{ src: "/images/thumbnail_image1-2-jpg-1440x800.webp" }}
      />

      <Section banda="background">
        <div className="grid w-full gap-12 lg:grid-cols-[400px_1fr] lg:items-start">
          <div className="relative h-[460px] w-full overflow-hidden rounded-[16px] bg-hero">
            <Image
              src={profesional.foto.src}
              alt={profesional.foto.alt}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Formación y trayectoria" />
              <Prose parrafos={profesional.bio} />
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading titulo="Credenciales" />
              <Checklist items={profesional.formacion} columnas={1} />
            </div>
          </div>
        </div>
      </Section>

      <Section banda="secondary">
        <SectionHeading
          eyebrow="Tratamientos"
          titulo={`Qué realiza ${profesional.nombre}`}
        />
        <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profesional.tratamientos
            .map((s) => pilarPorSlug(s))
            .filter((p): p is (typeof PILARES)[number] => Boolean(p))
            .map((pilar) => (
              <li key={pilar.slug}>
                <Link
                  href={rutaPilar(pilar.slug)}
                  className="flex h-full flex-col gap-2 rounded-[15px] bg-card p-6 shadow-[var(--clireo-shadow)] transition-opacity duration-300 hover:opacity-90"
                >
                  <span className="text-[20px] leading-[27px] tracking-[-0.8px] text-foreground">
                    {pilar.nombre}
                  </span>
                  <span className="text-[14px] leading-[20px] tracking-[-0.14px] text-accent-coral-strong">
                    Ver tratamiento →
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <Section banda="background">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Turnos"
            titulo={`Agendá con ${profesional.nombre}`}
            bajada="Consulta inicial de 40 minutos, sin cargo, con diagnóstico y plan de tratamiento por escrito."
          />
          <ConsultaForm
            titulo="Pedí tu turno"
            contexto={`una consulta con ${profesional.nombre}`}
            tratamientos={PILARES.map((p) => ({
              slug: p.slug,
              nombre: p.nombre,
            }))}
          />
        </div>
      </Section>
    </SitePage>
  );
}
