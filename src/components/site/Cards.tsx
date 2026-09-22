import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/components/sites/clireo-framer-website-a1614289/shared/icons";
import type { Tratamiento } from "@/content/tratamientos";
import { rutaTratamiento } from "@/content/tratamientos";
import type { Caso } from "@/content/casos";
import type { Post } from "@/content/posts";
import type { Intencion } from "@/content/intenciones";
import { T } from "@/i18n/LanguageProvider";

const POST_CATEGORY_TONES: Record<string, string> = {
  "Estética dental": "bg-secondary/18 text-secondary-foreground",
  Prevención: "bg-accent-yellow/30 text-secondary-foreground",
  "Primera visita": "bg-surface-strong/10 text-foreground",
};

const PILAR_CARD_TONES = [
  "bg-[#fff1ed] border-[#f1c9bf] dark:bg-[#321c1a] dark:border-[#7d4a43]",
  "bg-[#f1edff] border-[#d7ccf7] dark:bg-[#272044] dark:border-[#6253a3]",
  "bg-[#e9fbf9] border-[#bce9e5] dark:bg-[#163d3b] dark:border-[#3f8580]",
  "bg-[#f4f8e2] border-[#dce8af] dark:bg-[#343d1b] dark:border-[#6a7b32]",
  "bg-[#f5effb] border-[#ddc9ef] dark:bg-[#302040] dark:border-[#765196]",
  "bg-[#fff6df] border-[#f0dca8] dark:bg-[#413316] dark:border-[#8c6d2f]",
  "bg-[#edf5ff] border-[#c9def4] dark:bg-[#20334a] dark:border-[#4f79a1]",
];

/** The "Ver tratamiento →" affordance every card carries. Never a dead card. */
function VerMas({ label = "Ver tratamiento" }: { label?: string }) {
  return (
    <span className="flex items-center gap-1 text-[17px] leading-[23.46px] tracking-[-0.34px] text-accent-coral-strong">
      <T>{label}</T>
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden">
        <ArrowUpRightIcon className="h-[22px] w-[22px] transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
        <ArrowUpRightIcon className="absolute h-[22px] w-[22px] -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </span>
  );
}

/** Treatment card — every treatment sits at the same level, so this is the
 * only card the site uses for them. */
export function TratamientoCard({
  tratamiento,
  compacto = false,
  indice = 0,
  sinResumen = false,
}: {
  tratamiento: Tratamiento;
  compacto?: boolean;
  indice?: number;
  sinResumen?: boolean;
}) {
  const cardTone = PILAR_CARD_TONES[indice % PILAR_CARD_TONES.length];

  return (
    <Link
      href={rutaTratamiento(tratamiento)}
      className={`group flex h-full ${sinResumen ? "min-h-[250px]" : "min-h-[430px]"} flex-col gap-[10px] overflow-hidden rounded-[14px] border p-2 shadow-[var(--clireo-shadow)] transition-[background-color,box-shadow] duration-300 ease-out hover:shadow-[var(--clireo-shadow-md)] ${cardTone}`}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-[16px] bg-hero",
          compacto ? "h-[160px]" : "h-[235px] sm:h-[260px]",
        )}
      >
        <Image
          src={tratamiento.imagen.src}
          alt={tratamiento.imagen.alt}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2 px-2 pb-2">
        <h3 className="line-clamp-2 text-[20px] font-medium leading-[25px] tracking-[-0.5px] text-foreground">
          <T>{tratamiento.nombre}</T>
        </h3>
        {!sinResumen ? (
          <p className="line-clamp-3 flex-1 text-[14px] leading-[19px] tracking-[-0.14px] text-muted-foreground">
            <T>{tratamiento.resumen}</T>
          </p>
        ) : null}
        <span className="group/cta inline-flex w-fit items-center gap-2 rounded-[10px] border border-button-primary-bg bg-transparent px-3 py-2 text-[14px] leading-[18px] tracking-[-0.14px] text-button-primary-bg transition-colors duration-300 group-hover:bg-button-primary-bg group-hover:text-button-primary-foreground">
          <T>Ver tratamiento</T>
          <span className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </span>
        </span>
      </div>
    </Link>
  );
}

/** Clinical case card — the strongest persuasive asset on the site. */
export function CasoCard({ caso }: { caso: Caso }) {
  return (
    <Link
      href={`/casos/${caso.slug}`}
      className="group flex h-[425px] w-full flex-col gap-[10px] overflow-hidden rounded-[12px] bg-card p-2 shadow-[var(--clireo-shadow)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-accent-coral/10 hover:shadow-[var(--clireo-shadow-md)]"
    >
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[10px] bg-hero">
        <Image
          src={caso.despues.src}
          alt={caso.despues.alt}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-[13px] leading-[18px] tracking-[-0.1px] text-foreground">
          <T>{caso.etiqueta}</T>
        </span>
      </div>
      <div className="flex w-full flex-col gap-3 px-2 pb-2">
        <div className="flex w-full flex-col gap-1.5">
          <p className="text-[13px] leading-[18px] tracking-[-0.1px] text-muted-foreground">
            <T>{caso.tratamiento}</T> · <T>{caso.duracion}</T>
          </p>
          <h3 className="line-clamp-2 text-[18px] font-medium leading-[23px] tracking-[-0.45px] text-foreground">
            {caso.titulo}
          </h3>
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <span className="rounded-full bg-accent-coral/18 px-3 py-1 text-[14px] leading-[18px] text-accent-coral-strong">
            <T>Ver el caso</T>
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-foreground text-background transition-colors duration-300 group-hover:bg-accent-coral group-hover:text-accent-coral-foreground">
            <ArrowUpRightIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Intent card — AM's "Explorá por intención" applied. The label states the
 * mental state, not the catalogue category.
 */
export function IntentCard({ intencion }: { intencion: Intencion }) {
  return (
    <Link
      href={intencion.href}
      className="group flex h-full flex-col justify-between gap-6 rounded-[16px] bg-card p-8 shadow-[var(--clireo-shadow)]"
    >
      <div className="flex flex-col gap-3">
        <p className="text-[14px] leading-[18.2px] tracking-[1.26px] text-accent-coral-strong uppercase">
          <T>{intencion.etiqueta}</T>
        </p>
        <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
          <T>{intencion.titulo}</T>
        </h3>
        <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
          <T>{intencion.descripcion}</T>
        </p>
      </div>
      <VerMas label="Entrar" />
    </Link>
  );
}

/** Blog card driven by the content layer. */
export function PostCard({ post }: { post: Post }) {
  const categoryTone =
    POST_CATEGORY_TONES[post.categoria] ??
    "bg-surface-strong/10 text-foreground";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-[425px] w-full max-w-none flex-col gap-[10px] overflow-hidden rounded-[12px] bg-card p-2 shadow-[var(--clireo-shadow)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-accent-coral/10 hover:shadow-[var(--clireo-shadow-md)] lg:max-w-[300px]"
    >
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[10px] bg-hero">
        <Image
          src={post.imagen.src}
          alt={post.imagen.alt}
          fill
          sizes="(min-width: 1024px) 300px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-110"
        />
      </div>
      <div className="flex w-full flex-col gap-3 px-2 pb-2">
        <div className="flex w-full flex-col gap-1.5">
          <p className="text-[13px] leading-[18px] tracking-[-0.1px] text-muted-foreground">
            {post.fechaTexto} · {post.lectura}
          </p>
          <h3 className="line-clamp-2 text-[18px] font-medium leading-[23px] tracking-[-0.45px] text-foreground">
            {post.titulo}
          </h3>
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1 text-[14px] leading-[18px] ${categoryTone}`}
          >
            <T>{post.categoria}</T>
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-foreground text-background transition-colors duration-300 group-hover:bg-accent-coral group-hover:text-accent-coral-foreground">
            <ArrowUpRightIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
