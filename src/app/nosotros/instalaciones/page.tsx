import { SitePage } from "@/components/site/SiteLayout";
import {
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { Galeria } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, grafo, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { INSTALACIONES } from "@/content/clinica-contenido";
import { CLINICA } from "@/content/clinica";

const TITLE = "Instalaciones del consultorio en Núñez | Smile Design Center";
const DESCRIPTION =
  "Recorré las instalaciones del consultorio de Arribeños 2659, Núñez: recepción, sala de espera, boxes de atención y área de esterilización.";
const PATH = "/nosotros/instalaciones";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Instalaciones", href: PATH },
];

/**
 * Kept in the codebase but off the site: nothing links here, it is out of the
 * sitemap and it is marked `noindex`. Delete the `noIndex` flag and restore the
 * sitemap entry to bring it back.
 */
export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: INSTALACIONES[0].src,
  noIndex: true,
});

export default function InstalacionesPage() {
  return (
    <SitePage contexto="una consulta inicial">
      <JsonLd
        data={grafo([
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema(MIGAS),
        ])}
      />

      <PageHero
        eyebrow="Instalaciones"
        h1="Instalaciones del consultorio en Núñez, Buenos Aires"
        bajada={`${CLINICA.direccion.calle}, ${CLINICA.direccion.barrio}, ${CLINICA.direccion.ciudad}.`}
        migas={MIGAS}
        imagen={{ src: INSTALACIONES[1].src }}
      />

      <Section banda="background">
        <SectionHeading titulo="Así es el consultorio por dentro" />
        <Prose
          parrafos={[
            "Siete fotos reales del espacio donde vas a atenderte: la recepción y la sala de espera, el pasillo que conecta los consultorios, los boxes de atención con su equipamiento y el área de esterilización.",
            "Mostramos también el área de esterilización porque es la parte que nadie enseña y la que más dice sobre cómo se trabaja en un consultorio.",
          ]}
        />
        <Galeria imagenes={INSTALACIONES} />
      </Section>
    </SitePage>
  );
}
