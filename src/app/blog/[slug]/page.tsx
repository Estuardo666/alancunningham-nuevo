import { notFound } from "next/navigation";
import { SitePage } from "@/components/site/SiteLayout";
import {
  Checklist,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { PostCard } from "@/components/site/Cards";
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
import { POSTS, postPorSlug } from "@/content/posts";
import { urlAbsoluta } from "@/content/clinica";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postPorSlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.imagen.src,
    type: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postPorSlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const migas = [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.titulo, href: path },
  ];
  const otros = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SitePage contexto="una consulta inicial">
      <JsonLd
        data={grafo([
          webPageSchema({
            path,
            title: post.title,
            description: post.description,
          }),
          {
            "@type": "BlogPosting",
            "@id": `${urlAbsoluta(path)}#post`,
            headline: post.titulo,
            description: post.description,
            image: urlAbsoluta(post.imagen.src),
            datePublished: post.fecha,
            articleSection: post.categoria,
            publisher: { "@id": ID.organizacion },
            mainEntityOfPage: { "@id": `${urlAbsoluta(path)}#webpage` },
            ...autoriaClinica(),
          },
          breadcrumbSchema(migas),
        ])}
      />

      <PageHero
        eyebrow={post.categoria}
        h1={post.h1}
        bajada={`${post.fechaTexto} · ${post.lectura} de lectura`}
        migas={migas}
        imagen={{ src: post.imagen.src }}
      />

      <Section banda="background">
        <article className="flex w-full max-w-[820px] flex-col gap-10">
          <p className="text-[20px] leading-[27px] tracking-[-0.8px] text-foreground">
            {post.entradilla}
          </p>

          {post.secciones.map((seccion) => (
            <div key={seccion.titulo} className="flex flex-col gap-5">
              <SectionHeading compact titulo={seccion.titulo} />
              <Prose parrafos={seccion.parrafos} />
              {seccion.lista ? (
                <Checklist items={seccion.lista} columnas={1} />
              ) : null}
            </div>
          ))}

        </article>
      </Section>

      <Section banda="secondary">
        <SectionHeading
          eyebrow="Tratamientos"
          titulo="Relacionado con este artículo"
        />
        <Relacionados slugs={post.relacionados} />
      </Section>

      <Section banda="background">
        <SectionHeading eyebrow="Seguí leyendo" titulo="Otros artículos" />
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otros.map((otro) => (
            <PostCard key={otro.slug} post={otro} />
          ))}
        </div>
      </Section>
    </SitePage>
  );
}
