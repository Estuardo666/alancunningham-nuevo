import { SitePage } from "@/components/site/SiteLayout";
import { PageHero, Section, SectionHeading } from "@/components/site/PageShell";
import { BlogArticleGrid } from "@/components/site/BlogArticleGrid";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, grafo, ID, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { POSTS } from "@/content/posts";
import { urlAbsoluta } from "@/content/clinica";

const TITLE = "Blog de odontología | Estudio Odontológico Cunningham, Núñez";
const DESCRIPTION =
  "Artículos sobre tratamientos, planificación digital y prevención escritos desde el consultorio: qué mirar antes de decidir y qué preguntar en la consulta.";
const PATH = "/blog";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Blog", href: PATH },
];

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: POSTS[0].imagen.src,
});

export default function BlogPage() {
  return (
    <SitePage contexto="una consulta inicial">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
          {
            "@type": "Blog",
            "@id": `${urlAbsoluta(PATH)}#blog`,
            name: TITLE,
            publisher: { "@id": ID.organizacion },
            blogPost: POSTS.map((p) => ({
              "@type": "BlogPosting",
              headline: p.titulo,
              url: urlAbsoluta(`/blog/${p.slug}`),
              datePublished: p.fecha,
              author: { "@id": ID.titular },
            })),
          },
        ])}
      />

      <PageHero
        eyebrow="Odontología, sin vueltas"
        h1="Información odontológica clara en Núñez"
        bajada="Ideas prácticas para entender tratamientos, planificación y cuidados antes de tomar una decisión."
        migas={MIGAS}
        imagen={{ src: "/images/thumbnail_image1-jpg-1440x800.webp" }}
      />

      <Section banda="background">
        <SectionHeading eyebrow="Lecturas del consultorio" titulo="Elegí por dónde empezar" />
        <BlogArticleGrid posts={POSTS} />
      </Section>
    </SitePage>
  );
}
