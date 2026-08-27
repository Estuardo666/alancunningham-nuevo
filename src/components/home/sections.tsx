import Image from "next/image";
import {
  Section,
  SectionHeading,
  CtaConMicrocopy,
  Prose,
} from "@/components/site/PageShell";
import { AntesDespues } from "@/components/site/AntesDespues";
import { IntentCard } from "@/components/site/Cards";
import {
  CoverageBadges,
  MediosDePago,
  PriceTable,
} from "@/components/site/Blocks";
import { CASOS } from "@/content/casos";
import { INTENCIONES } from "@/content/intenciones";
import { INSTALACIONES } from "@/content/clinica-contenido";
import { COMO_FUNCIONA, TIEMPOS_ESTADIA } from "@/content/turismo";
import { tratamientoPorSlug } from "@/content/tratamientos";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";
import { PrimaryButton } from "@/components/sites/clireo-framer-website-a1614289/shared/PrimaryButton";
import { CalendarDays, FileText, MessageCircle } from "lucide-react";
import type { MediaAsset } from "@/content/types";
import { T } from "@/i18n/LanguageProvider";

const TURISMO_STEP_ICONS = [MessageCircle, FileText, CalendarDays] as const;

const HOME_CONSULTORIO_VIDEOS = [
  "WhatsApp Video 2026-08-09 at 13.39.05.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.07.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.14.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.15.mp4",
].map((filename) => `/consultorio/videos/${encodeURIComponent(filename)}`);

const HOME_CONSULTORIO_MEDIA: MediaAsset[] = [
  INSTALACIONES[8],
  {
    src: HOME_CONSULTORIO_VIDEOS[0],
    poster: INSTALACIONES[2].src,
    tipo: "video",
    alt: "Video del equipamiento del consultorio odontológico",
  },
  INSTALACIONES[3],
  INSTALACIONES[10],
  {
    src: HOME_CONSULTORIO_VIDEOS[1],
    poster: INSTALACIONES[5].src,
    tipo: "video",
    alt: "Video de una sala de atención del consultorio",
  },
  INSTALACIONES[1],
  {
    src: HOME_CONSULTORIO_VIDEOS[2],
    poster: INSTALACIONES[7].src,
    tipo: "video",
    alt: "Video del espacio de trabajo del consultorio",
  },
  INSTALACIONES[6],
  INSTALACIONES[4],
  {
    src: HOME_CONSULTORIO_VIDEOS[3],
    poster: INSTALACIONES[9].src,
    tipo: "video",
    alt: "Video del consultorio odontológico",
  },
];

/** 03 · Before and after, in the first third of the page (plan §3.2). */
export function HomeCasos() {
  return (
    <Section banda="background" id="casos">
      <SectionHeading
        eyebrow="Resultados reales"
        titulo="Casos tratados en el consultorio"
        bajada="Tres casos reales con el tratamiento indicado y su duración."
      />
      <div className="grid w-full gap-8 lg:grid-cols-3">
        {CASOS.map((caso) => (
          <AntesDespues
            key={caso.slug}
            antes={caso.antes}
            despues={caso.despues}
            etiqueta={caso.etiqueta}
            duracion={caso.duracion}
          />
        ))}
      </div>
      <TextArrowCTA
        href="/casos"
        className="text-[18px] leading-[24.3px] tracking-[-0.54px]"
      >
        Ver todos los casos clínicos
      </TextArrowCTA>
    </Section>
  );
}

/**
 * 05 · Price and coverage. Reuses the Stats band anatomy (navy, centred, large
 * figures) to put the two dominant objections above the 40% scroll mark.
 */
export function HomePrecioCobertura() {
  return (
    <Section banda="background" id="precios">
      <SectionHeading
        eyebrow="Precio y cobertura"
        titulo="Cuánto cuesta y con qué se paga, sin tener que preguntar"
        bajada="Los rangos orientativos por tratamiento, los medios de pago y las coberturas, visibles acá y en detalle en su propia página."
      />

      <div className="grid w-full min-w-0 gap-10 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-6">
          <h3 className="text-[22px] leading-[29.7px] tracking-[-0.88px] text-foreground">
            <T>Rangos orientativos</T>
          </h3>
          <PriceTable
            slugs={[
              "implantes-unitarios",
              "carillas-de-porcelana",
              "coronas-dentales",
              "alineadores-invisibles",
              "limpieza-profunda",
            ]}
          />
          <PrimaryButton
            label="Ver precios y condiciones"
            href="/precios"
            variant="primary"
            className="self-start"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-6">
          <h3 className="text-[22px] leading-[29.7px] tracking-[-0.88px] text-foreground">
            <T>Medios de pago y coberturas</T>
          </h3>
          <MediosDePago conImagenes={false} />
          <CoverageBadges />
          <TextArrowCTA href="/obras-sociales">
            Consultar tu obra social
          </TextArrowCTA>
        </div>
      </div>
    </Section>
  );
}

/** 07 · Explorá por intención — AM's best architectural decision, applied. */
export function HomeIntenciones() {
  return (
    <Section banda="secondary">
      <SectionHeading
        eyebrow="Explorá por intención"
        titulo="Las búsquedas que más acercan a una decisión"
        bajada="Entradas directas según lo que estés necesitando resolver ahora."
      />
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INTENCIONES.map((intencion) => (
          <IntentCard key={intencion.href} intencion={intencion} />
        ))}
      </div>
    </Section>
  );
}

/** 11 · Facilities and named equipment (the DOHO P2 correction). */
export function HomeInstalaciones() {
  const tickerImages = [...HOME_CONSULTORIO_MEDIA, ...HOME_CONSULTORIO_MEDIA];

  return (
    <Section banda="secondary" className="overflow-hidden">
      <SectionHeading
        eyebrow="El consultorio"
        titulo="Un consultorio pensado para cada detalle"
        bajada="Conocé los espacios y el equipamiento que usamos para planificar y acompañar cada tratamiento."
      />

      <div
        className="w-full overflow-hidden"
        aria-label="Instalaciones del consultorio"
      >
        <ul className="home-installations-ticker flex w-max gap-3">
          {tickerImages.map((img, index) => (
            <li
              key={`${img.src}-${index}`}
              className="group relative h-[275px] w-[194px] shrink-0 overflow-hidden rounded-[14px] bg-hero sm:h-[340px] sm:w-[240px] lg:h-[400px] lg:w-[286px]"
            >
              {img.tipo === "video" ||
              /\.(mp4|webm|ogg)(?:$|[?#])/i.test(img.src) ? (
                <video
                  src={img.src}
                  poster={img.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={img.alt}
                  className="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105"
                />
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 286px, 194px"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-6">
        <TextArrowCTA href="/nosotros/tecnologia">
          Ver la tecnología
        </TextArrowCTA>
      </div>
    </Section>
  );
}

/** 12 · Dental tourism referral block. */
export function HomeTurismo() {
  return (
    <Section banda="background">
      <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Turismo odontológico"
            titulo="¿Venís de otra provincia o del exterior?"
          />
          <Prose
            parrafos={[
              "La evaluación arranca online: nos mandás fotos y estudios, y te decimos si el caso se resuelve en los días que vas a estar en Buenos Aires. Llegás con el presupuesto por escrito y la agenda armada.",
              "Publicamos además los tiempos de estadía estimados por tratamiento, que es el dato que hace falta para planificar el viaje y que casi ninguna clínica publica.",
            ]}
          />
          <ol className="flex flex-col gap-3">
            {COMO_FUNCIONA.slice(0, 3).map((paso, index) => {
              const Icon = TURISMO_STEP_ICONS[index];

              return (
                <li
                  key={paso.titulo}
                  className="flex items-center gap-3 text-[17px] leading-[23.46px] tracking-[-0.34px] text-foreground"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-coral/15 text-accent-coral-strong">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span>
                    <T>{paso.titulo.split(" · ")[1]}</T>
                  </span>
                </li>
              );
            })}
          </ol>
          <CtaConMicrocopy contexto="turismo odontológico" />
        </div>

        <div className="flex flex-col gap-4 rounded-[20px] bg-card p-5 shadow-[var(--clireo-shadow)] lg:p-8">
          <h3 className="text-[22px] leading-[29.7px] tracking-[-0.88px] text-foreground">
            <T>Cuántos días necesitás</T>
          </h3>
          <ul className="flex flex-col gap-0 overflow-hidden rounded-[12px]">
            {TIEMPOS_ESTADIA.slice(0, 5).map((t) => (
              <li
                key={t.slug}
                className="flex items-center gap-3 border-b border-border px-3 py-3 even:bg-foreground/[0.035] last:border-0"
              >
                <Image
                  src={
                    tratamientoPorSlug(t.slug)?.imagen.src ??
                    "/images/thumbnail_image0-jpg-1440x800.webp"
                  }
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-[9px] object-cover"
                />
                <span className="min-w-0 flex-1 text-[15px] leading-[21px] tracking-[-0.15px] text-foreground">
                  <T>{t.tratamiento}</T>
                </span>
                <span className="shrink-0 text-right text-[15px] leading-[21px] tracking-[-0.15px] text-accent-coral-strong">
                  <T>{t.estadia}</T>
                </span>
              </li>
            ))}
          </ul>
          <TextArrowCTA href="/turismo-odontologico">
            Ver la tabla completa y cómo funciona
          </TextArrowCTA>
        </div>
      </div>
    </Section>
  );
}
