"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { asset } from "../shared/assets";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { PrimaryButton } from "../shared/PrimaryButton";
import { SOBRE_LA_CLINICA } from "@/content/clinica-contenido";
import { CASOS } from "@/content/casos";

const CARD_TONES = [
  {
    surface: "bg-accent-coral",
    ink: "text-accent-coral-foreground",
    muted: "text-accent-coral-foreground/75",
  },
  {
    surface: "bg-secondary",
    ink: "text-secondary-foreground",
    muted: "text-secondary-foreground/75",
  },
  {
    surface: "bg-accent-yellow",
    ink: "text-accent-yellow-strong",
    muted: "text-accent-yellow-strong/75",
  },
] as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * The block that sits right after the hero on the source site: an eyebrow, one
 * long headline paragraph whose words light up left-to-right as the block
 * travels through the viewport, a CTA row with a trust cluster, and three
 * cards underneath.
 *
 * Anatomy transcribed from the live site: 40px/44.8px headline at -2.72px
 * tracking, 3 up cards of 423×320 with radius 16 and 30px padding, avatars
 * 40px with a 12px overlap.
 *
 * Content is the clinic's own, and the trust cluster shows the three real
 * documented cases instead of an invented patient count.
 */
export function AboutSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        className="flex justify-center bg-surface-secondary px-5 pt-20 pb-5 lg:px-8 lg:pt-[120px] lg:pb-5"
      >
        <div className="flex w-full max-w-[1300px] flex-col items-center gap-10 lg:gap-[60px]">
          <div className="flex max-w-[720px] flex-col items-center gap-[18px]">
            <SectionEyebrow>{SOBRE_LA_CLINICA.eyebrow}</SectionEyebrow>
            <WordReveal
              text={SOBRE_LA_CLINICA.titular}
              className="text-center text-[28px] leading-[33px] tracking-[-1.4px] lg:text-[40px] lg:leading-[44.8px] lg:tracking-[-2.72px]"
            />

            <div className="flex flex-col items-center gap-6 pt-2 sm:flex-row sm:gap-11">
              <PrimaryButton
                label="Conocé el consultorio"
                href="/nosotros"
                variant="primary"
              />

              <Link href="/casos" className="flex items-center gap-3">
                <span className="flex items-center">
                  {CASOS.map((caso, index) => (
                    <Image
                      key={caso.slug}
                      src={caso.despues.src}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-surface-secondary object-cover"
                      style={{ marginLeft: index === 0 ? 0 : -12 }}
                    />
                  ))}
                </span>
                <span className="text-[15px] leading-[21px] tracking-[-0.15px] text-foreground">
                  Ver casos reales
                  <br />
                  Antes y después
                </span>
              </Link>
            </div>
          </div>

          <motion.ul
            className="grid w-full gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.14, delayChildren: 0.08 },
              },
            }}
          >
            {SOBRE_LA_CLINICA.tarjetas.map((tarjeta, index) => {
              const tone = CARD_TONES[index % CARD_TONES.length];

              return (
                <motion.li
                  key={tarjeta.titulo}
                  variants={CARD_VARIANTS}
                  whileHover={{
                    y: -9,
                    rotate: index % 2 === 0 ? -1 : 1,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className={`relative flex min-h-[340px] flex-col justify-between gap-10 overflow-hidden rounded-[18px] p-8 shadow-[var(--clireo-shadow-md)] lg:min-h-[360px] lg:p-10 ${tone.surface} ${tone.ink}`}
                >
                  <div className="relative z-10 flex w-full items-start justify-between">
                    <span className="flex h-[62px] w-[62px] items-center justify-center overflow-hidden rounded-[12px] bg-foreground">
                      <Image
                        src={asset(tarjeta.icono)}
                        alt=""
                        width={50}
                        height={55}
                        className="h-[46px] w-[42px] object-contain"
                      />
                    </span>
                    <span className="pt-1 text-[12px] leading-4 tracking-[1.1px] uppercase opacity-60">
                      0{index + 1} / 03
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px]">
                      {tarjeta.titulo}
                    </h3>
                    <p
                      className={`text-[17px] leading-[23.46px] tracking-[-0.34px] ${tone.muted}`}
                    >
                      {tarjeta.descripcion}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}

/**
 * Maps the paragraph's viewport travel onto 0–1: it starts lighting when the
 * block's top crosses 85% of the viewport height and is fully lit at 25%.
 *
 * Exported so the mapping can be checked without a browser.
 */
export function progresoDeReveal(top: number, alto: number) {
  if (alto <= 0) return 0;
  const bruto = (alto * 0.85 - top) / (alto * 0.6);
  return Math.min(1, Math.max(0, bruto));
}

/**
 * Scroll-driven word reveal. Each word is its own span; progress maps the
 * paragraph's travel from 85% to 25% of the viewport height onto the word
 * count, so the words light left-to-right as you scroll.
 *
 * Dim and lit colours are the site's own `--foreground` at 15% and at full
 * strength, so it inherits the palette in both themes.
 */
function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progreso, setProgreso] = useState(0);
  const palabras = text.split(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(() => setProgreso(1));
      return () => cancelAnimationFrame(frame);
    }

    const medir = () => {
      frame = 0;
      const alto = window.innerHeight;
      // A zero-height viewport (headless/hidden pane) would divide by zero and
      // snap the whole paragraph lit; leave the current state instead.
      if (alto <= 0) return;
      const rect = node.getBoundingClientRect();
      setProgreso(progresoDeReveal(rect.top, alto));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const encendidas = progreso * palabras.length;

  return (
    <p ref={ref} className={className}>
      {palabras.map((palabra, index) => (
        <span
          key={`${palabra}-${index}`}
          style={{
            color:
              index < encendidas
                ? "var(--foreground)"
                : "color-mix(in srgb, var(--foreground) 15%, transparent)",
            transition: "color 0.3s ease-out",
          }}
        >
          {palabra}
          {index < palabras.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
