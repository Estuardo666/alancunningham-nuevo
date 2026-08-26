import Image from "next/image";
import { SitePage } from "@/components/site/SiteLayout";
import {
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, grafo, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { TECNOLOGIA } from "@/content/clinica-contenido";

const TITLE =
  "Tecnología: escáner 3Shape y láser en Núñez | Smile Design Center";
const DESCRIPTION =
  "Escáner intraoral 3Shape, láser para tejido blando y planificación digital: qué equipo usamos en el consultorio de Núñez y qué cambia para el paciente.";
const PATH = "/nosotros/tecnologia";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Tecnología", href: PATH },
];

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: TECNOLOGIA[0].imagen.src,
});

export default function TecnologiaPage() {
  return (
    <SitePage contexto="tecnología del consultorio">
      <JsonLd
        data={grafo([
          webPageSchema({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            tipo: "MedicalWebPage",
          }),
          breadcrumbSchema(MIGAS),
        ])}
      />

      <PageHero
        eyebrow="Tecnología"
        h1="Tecnología del consultorio odontológico en Núñez"
        bajada="Equipamiento con nombre propio y una explicación de qué cambia en tu tratamiento, no una lista de adjetivos."
        migas={MIGAS}
        imagen={{ src: TECNOLOGIA[0].imagen.src }}
      />

      {TECNOLOGIA.map((t, index) => (
        <Section
          key={t.nombre}
          banda={index % 2 === 0 ? "background" : "secondary"}
        >
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
            <div
              className={`relative h-[280px] w-full overflow-hidden rounded-[14px] bg-hero lg:h-[380px] ${
                index % 2 === 1 ? "lg:order-last" : ""
              }`}
            >
              <Image
                src={t.imagen.src}
                alt={t.imagen.alt}
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <SectionHeading titulo={t.nombre} />
              <Prose parrafos={[t.descripcion]} />
            </div>
          </div>
        </Section>
      ))}

    </SitePage>
  );
}
