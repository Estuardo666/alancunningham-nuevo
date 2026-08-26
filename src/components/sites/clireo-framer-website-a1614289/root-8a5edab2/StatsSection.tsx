"use client";

import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/types/clireo";
import { RevealText } from "../shared/RevealText";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { PILARES, TRATAMIENTOS } from "@/content/tratamientos";
import { CASOS } from "@/content/casos";
import { TITULAR } from "@/content/equipo";

/**
 * The navy metrics band. The prototype figures are gone: every number here is
 * either verifiable (the licence number) or derived from the content layer, so
 * nothing on this band is invented (plan §6.3).
 */
const STATS: Stat[] = [
  {
    value: TITULAR.matricula.replace("M.N. ", ""),
    label: "Matrícula Nacional del titular",
  },
  { value: `${PILARES.length}`, label: "Áreas de tratamiento" },
  { value: `${TRATAMIENTOS.length}`, label: "Tratamientos con página propia" },
  { value: `${CASOS.length}`, label: "Casos documentados con antes y después" },
];

const CARD_TONES = [
  {
    surface: "bg-surface-secondary",
    ink: "text-foreground",
    muted: "text-foreground/70",
    accent: "bg-brand",
  },
  {
    surface: "bg-accent-coral",
    ink: "text-accent-coral-foreground",
    muted: "text-accent-coral-foreground/70",
    accent: "bg-foreground",
  },
  {
    surface: "bg-secondary",
    ink: "text-secondary-foreground",
    muted: "text-secondary-foreground/70",
    accent: "bg-foreground",
  },
  {
    surface: "bg-accent-yellow",
    ink: "text-accent-yellow-strong",
    muted: "text-accent-yellow-strong/70",
    accent: "bg-brand",
  },
] as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
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

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 }).format(
    Math.round(value),
  );
}

function AnimatedNumber({
  value,
  className,
}: {
  value: string;
  className: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const end = Number(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      const frame = requestAnimationFrame(() => setDisplay(end));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const startTime = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
      setDisplay(eased * end);

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, isInView, shouldReduceMotion]);

  return (
    <span
      ref={ref}
      aria-label={formatNumber(end)}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {formatNumber(display)}
    </span>
  );
}

export function StatsSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="flex flex-col items-center overflow-hidden bg-surface-strong px-5 py-20 lg:px-8 lg:py-[104px]">
        <div className="flex w-full max-w-[1300px] flex-col items-center gap-9 lg:gap-[52px]">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionEyebrow tone="yellow" className="justify-center">
              En números
            </SectionEyebrow>
            <RevealText
              as="h2"
              text="Un consultorio enfocado en cada detalle"
              blur={8}
              className="max-w-[700px] text-center text-[30px] leading-[34px] tracking-[-1.2px] text-white lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.8px]"
            />
          </div>

          <motion.dl
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.08 },
              },
            }}
          >
            {STATS.map((stat, index) => {
              const tone = CARD_TONES[index % CARD_TONES.length];

              return (
                <motion.div
                  key={stat.label}
                  variants={CARD_VARIANTS}
                  whileHover={{
                    y: -8,
                    rotate: index % 2 === 0 ? -1 : 1,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className={`relative flex min-h-[232px] flex-col items-start justify-between overflow-hidden rounded-[20px] p-6 shadow-[var(--clireo-shadow-md)] sm:min-h-[250px] lg:p-7 ${tone.surface} ${tone.ink}`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`h-2 w-2 rounded-[2px] ${tone.accent}`}
                      aria-hidden
                    />
                    <span className="text-[12px] leading-4 tracking-[1.1px] uppercase opacity-60">
                      0{index + 1} / 04
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <dt>
                      <AnimatedNumber
                        value={stat.value}
                        className="block text-[clamp(2.75rem,5vw,4.5rem)] leading-none tracking-[-0.07em]"
                      />
                    </dt>
                    <dd
                      className={`max-w-[220px] text-[16px] leading-[21px] tracking-[-0.32px] ${tone.muted}`}
                    >
                      {stat.label}
                    </dd>
                  </div>
                </motion.div>
              );
            })}
          </motion.dl>
        </div>
      </section>
    </MotionConfig>
  );
}
