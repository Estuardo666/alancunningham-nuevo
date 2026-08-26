"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useState } from "react";
import { asset } from "../shared/assets";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { ArrowUpRightIcon } from "../shared/icons";
import { RevealText } from "../shared/RevealText";
import { ProgressiveBlur } from "../shared/ProgressiveBlur";
import { colorPilar } from "../shared/pilarColores";
import { PILARES, rutaPilar, type Pilar } from "@/content/tratamientos";
import { T, useTr } from "@/i18n/LanguageProvider";

const CARD_WIDTH = 407;
const CARD_GAP = 12;
const STEP = CARD_WIDTH + CARD_GAP;

/**
 * A `framer-slideshow` on the source site: a manually driven carousel with
 * Previous / Next controls. It does NOT auto-advance.
 *
 * The anatomy is untouched; what changed is the content — the seven real
 * treatment pillars — and the fact that **every card is now a link** to its
 * pillar page, which is the DOHO P1 correction (plan §2.1).
 */
export function ServicesSection() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const measure = () => {
      const fit = Math.max(
        1,
        Math.floor((Math.min(window.innerWidth, 1300) + CARD_GAP) / STEP),
      );
      setPerView(fit);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, PILARES.length - perView);
  const clamped = Math.min(index, maxIndex);

  // The source slideshow wraps rather than dead-ending on either control.
  const go = (delta: number) =>
    setIndex((current) => {
      const span = maxIndex + 1;
      return (((current + delta) % span) + span) % span;
    });

  return (
    <section
      id="services"
      className="flex justify-center overflow-hidden bg-surface-strong px-5 py-20 lg:px-8 lg:py-[120px]"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-10">
        <div className="flex w-full flex-col items-start gap-[10px]">
          <SectionEyebrow tone="light">Nuestros tratamientos</SectionEyebrow>
          <RevealText
            as="h2"
            text="Tratamiento experto para cada necesidad"
            blur={8}
            className="max-w-[550px] text-[34px] leading-[38px] tracking-[-1.8px] text-white lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-[60px]">
          <div className="flex w-full flex-col items-center gap-6">
            <div className="w-full overflow-hidden">
              <ul
                className="flex items-center transition-transform duration-500 ease-out"
                style={{
                  gap: CARD_GAP,
                  transform: `translateX(-${clamped * STEP}px)`,
                }}
              >
                {PILARES.map((pilar) => (
                  <li key={pilar.slug} className="shrink-0">
                    <ServiceTile pilar={pilar} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center gap-[22px]">
              <CarouselButton
                label="Anterior"
                icon="t5y8ihAWr04e5rh1e5YfzpGgPA.svg"
                onClick={() => go(-1)}
              />
              <CarouselButton
                label="Siguiente"
                icon="HW8DeQ9Yx95dpwt6ZgaCPOV1MRw.svg"
                onClick={() => go(1)}
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-4 border-t border-white/10 pt-4">
            <Link
              href="/tratamientos"
              className="group flex shrink-0 items-center gap-1"
            >
              <span className="block h-6 overflow-hidden text-[18px] leading-[24.3px] tracking-[-0.54px] whitespace-nowrap text-accent-coral">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  <span className="block">
                    <T>Ver todos los tratamientos</T>
                  </span>
                  <span className="block">
                    <T>Ver todos los tratamientos</T>
                  </span>
                </span>
              </span>
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden text-accent-coral">
                <ArrowUpRightIcon className="h-[26px] w-[26px] transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
                <ArrowUpRightIcon className="absolute h-[26px] w-[26px] -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  onClick: () => void;
}) {
  const tr = useTr();

  return (
    <button
      type="button"
      aria-label={tr(label)}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-[20px] bg-secondary text-secondary-foreground transition-colors duration-300 hover:bg-button-tinted-hover"
    >
      <Image
        src={asset(icon)}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11"
      />
    </button>
  );
}

function ServiceTile({ pilar }: { pilar: Pilar }) {
  const color = colorPilar(pilar.slug);

  return (
    <Link
      href={rutaPilar(pilar.slug)}
      style={{ "--tile-ink": color.fg, "--tile-bg": color.bg } as CSSProperties}
      className="group relative flex h-[446px] w-[300px] items-end overflow-hidden rounded-[15px] bg-surface-strong p-6 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-strong lg:w-[407px]"
    >
      <Image
        src={pilar.imagen.src}
        alt={pilar.imagen.alt}
        fill
        sizes="407px"
        className="absolute inset-0 object-cover transition-[scale] duration-[600ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[var(--tile-bg)] opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      {/* Bottom scrim + progressive blur: the copy stays legible over any photo. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[240px]"
        style={{
          background:
            "linear-gradient(to top, rgba(1,5,23,0.85) 0%, rgba(1,5,23,0.55) 38%, rgba(1,5,23,0.18) 70%, rgba(1,5,23,0) 100%)",
        }}
      />
      <ProgressiveBlur
        className="inset-x-0 bottom-0 h-[210px]"
        layers={5}
        blur={14}
      />

      <div className="relative z-20 flex flex-col items-start gap-4">
        <div className="flex flex-col gap-[6px] transition-colors duration-300 group-hover:text-[var(--tile-ink)] group-focus-visible:text-[var(--tile-ink)]">
          <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-white transition-colors duration-300 group-hover:text-[var(--tile-ink)] group-focus-visible:text-[var(--tile-ink)]">
            <T>{pilar.nombre}</T>
          </h3>
          <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-white opacity-80 transition-[color,opacity] duration-300 group-hover:text-[var(--tile-ink)] group-hover:opacity-100 group-focus-visible:text-[var(--tile-ink)] group-focus-visible:opacity-100">
            <T>{pilar.tarjeta}</T>
          </p>
          <span className="mt-1 flex items-center gap-1 text-[16px] leading-[22px] tracking-[-0.32px] text-white opacity-0 transition-[opacity,translate] duration-300 group-hover:text-[var(--tile-ink)] group-hover:opacity-100 group-focus-visible:text-[var(--tile-ink)] group-focus-visible:opacity-100 motion-safe:translate-y-1 motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0">
            <T>Ver tratamiento</T>
            <ArrowUpRightIcon className="h-5 w-5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
