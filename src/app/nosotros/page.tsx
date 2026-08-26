import Image from "next/image";
import { SitePage } from "@/components/site/SiteLayout";
import {
  CtaConMicrocopy,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/site/PageShell";
import { Galeria } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, grafo, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CLINICA } from "@/content/clinica";
import { EQUIPO_CARRUSEL } from "@/content/equipo";
import {
  HISTORIA,
  INSTALACIONES,
  MISION,
  TECNOLOGIA,
  VISION,
} from "@/content/clinica-contenido";
import { TeamCarousel } from "@/components/site/TeamCarousel";
import { TecnologiaCards } from "@/components/site/TecnologiaCards";
import { ConsultorioVideoCarousel } from "@/components/site/ConsultorioVideoCarousel";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

const TITLE =
  "Sobre el consultorio: Smile Design Center en Núñez | Buenos Aires";
const DESCRIPTION =
  "Quiénes somos, cómo trabajamos y con qué equipamiento. Consultorio odontológico en Arribeños 2659, Núñez, a cargo de Od. Alan Cunningham, M.N. 42463.";
const PATH = "/nosotros";

const MIGAS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: PATH },
];

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: INSTALACIONES[0].src,
});

export default function NosotrosPage() {
  return (
    <SitePage contexto="una consulta inicial">
      <JsonLd
        data={grafo([
          webPageSchema({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            tipo: "AboutPage",
          }),
          breadcrumbSchema(MIGAS),
        ])}
      />

      <PageHero
        eyebrow="El consultorio"
        h1="Smile Design Center, consultorio odontológico en Núñez"
        bajada={`${CLINICA.direccion.calle}, ${CLINICA.direccion.barrio}. ${CLINICA.horariosTexto}.`}
        migas={MIGAS}
        imagen={{ src: INSTALACIONES[0].src }}
      />

      {/* Nuestra historia: the image holds one half while the story, the CTA
          and the mission/vision cards scroll past it on the other. */}
      <Section banda="secondary">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="relative aspect-[713/690] w-full overflow-hidden rounded-[14px] lg:sticky lg:top-24">
            <Image
              src="/images/Asset-13.png"
              alt="Smile Design Center, identidad del consultorio"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              eyebrow={HISTORIA.eyebrow}
              titulo={HISTORIA.titulo}
            />
            <Prose parrafos={[HISTORIA.texto]} />
            <CtaConMicrocopy contexto="una consulta inicial" />

            <div className="flex w-full flex-col gap-4 pt-2">
              <PilarCard
                eyebrow="Misión"
                titulo="Por qué existe el consultorio"
                texto={MISION.texto}
                tono="bg-accent-coral/15"
              />
              <PilarCard
                eyebrow="Visión"
                titulo="Hacia dónde vamos"
                texto={VISION.texto}
                tono="bg-secondary/15"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section banda="background">
        <SectionHeading
          eyebrow="El equipo"
          titulo="Quién te va a atender"
          bajada="Tocá cada tarjeta para ver la formación y el área de trabajo de cada profesional."
        />
        <TeamCarousel miembros={EQUIPO_CARRUSEL} />
      </Section>

      <Section banda="secondary">
        <SectionHeading
          eyebrow="Instalaciones"
          titulo="Llegá sabiendo dónde te sentás"
          bajada="Un espacio limpio, luminoso y tranquilo."
        />
        <Galeria imagenes={INSTALACIONES.slice(0, 6)} />
        <TextArrowCTA href="/nosotros/instalaciones">
          Ver más imágenes
        </TextArrowCTA>
        <div className="mt-12 w-full">
          <ConsultorioVideoCarousel />
        </div>
      </Section>

      <Section banda="background">
        <SectionHeading
          eyebrow="Tecnología"
          titulo="Lo que hay detrás de un buen resultado"
          bajada="Tres equipos que definen la precisión del trabajo y tu comodidad durante la sesión."
        />
        <TecnologiaCards items={TECNOLOGIA} />
        <TextArrowCTA href="/nosotros/tecnologia">
          Ver la tecnología en detalle
        </TextArrowCTA>
      </Section>
    </SitePage>
  );
}

/** Mission / vision card: same type scale as every other card on the site. */
function PilarCard({
  eyebrow,
  titulo,
  texto,
  tono,
}: {
  eyebrow: string;
  titulo: string;
  texto: string;
  tono: string;
}) {
  return (
    <article
      className={`flex w-full flex-col gap-2 rounded-[16px] p-6 ${tono}`}
    >
      <div className="flex items-center gap-[10px]">
        <span
          aria-hidden="true"
          className="block h-[7px] w-[7px] rounded-[2px] bg-foreground"
        />
        <p className="text-[13px] leading-[17px] tracking-[1.17px] text-foreground uppercase">
          {eyebrow}
        </p>
      </div>
      <h3 className="text-[20px] leading-[26px] font-semibold tracking-[-0.8px] text-foreground">
        {titulo}
      </h3>
      <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
        {texto}
      </p>
    </article>
  );
}
