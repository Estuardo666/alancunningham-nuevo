"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";
import { COMO_TRABAJAMOS } from "@/content/clinica-contenido";

import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import {
  ApproachConsultationIcon,
  ApproachRecoveryIcon,
  ApproachTreatmentIcon,
} from "../shared/icons";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

interface Step {
  /** Short label shown in the sticky indicator. */
  label: string;
  /** Full heading shown on the panel — deliberately different from the label. */
  title: string;
  description: string;
  image: { src: string; alt: string };
  Icon: IconComponent;
}

const ICONOS: IconComponent[] = [
  ApproachConsultationIcon,
  ApproachTreatmentIcon,
  ApproachRecoveryIcon,
  ApproachConsultationIcon,
];

const STEPS: Step[] = COMO_TRABAJAMOS.map((paso, index) => ({
  label: paso.titulo.split(" ").slice(0, 2).join(" "),
  title: paso.titulo,
  description: paso.descripcion,
  image: paso.imagen,
  Icon: ICONOS[index % ICONOS.length],
}));

const TAB_TONES = [
  {
    activeBg: "#30005b",
    activeFg: "#ffffff",
    idleBg: "rgba(48, 0, 91, 0.12)",
    idleFg: "#30005b",
    marker: "#b4e843",
  },
  {
    activeBg: "#ff6852",
    activeFg: "#30005b",
    idleBg: "rgba(255, 104, 82, 0.18)",
    idleFg: "#30005b",
    marker: "#30005b",
  },
  {
    activeBg: "#01e2d8",
    activeFg: "#000000",
    idleBg: "rgba(1, 226, 216, 0.18)",
    idleFg: "#30005b",
    marker: "#30005b",
  },
  {
    activeBg: "#b4e843",
    activeFg: "#30005b",
    idleBg: "rgba(180, 232, 67, 0.24)",
    idleFg: "#30005b",
    marker: "#30005b",
  },
] as const;

const CARD_TONES = [
  {
    surface: "bg-surface-strong",
    ink: "text-on-strong",
    muted: "text-on-strong/75",
    icon: "text-accent-yellow",
  },
  {
    surface: "bg-accent-coral",
    ink: "text-accent-coral-foreground",
    muted: "text-accent-coral-foreground/75",
    icon: "text-foreground",
  },
  {
    surface: "bg-secondary",
    ink: "text-secondary-foreground",
    muted: "text-secondary-foreground/75",
    icon: "text-foreground",
  },
  {
    surface: "bg-accent-yellow",
    ink: "text-accent-yellow-strong",
    muted: "text-accent-yellow-strong/75",
    icon: "text-foreground",
  },
] as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/**
 * Sticky step indicator on the left, panels scrolling on the right. The active
 * step is driven by which panel is currently crossing the indicator — scroll,
 * not clicks. The pills are not buttons on the live site either.
 */
export function ApproachSection() {
  const { active, register } = useActiveStep(STEPS.length);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="approach"
        className="flex flex-col items-center overflow-x-clip bg-surface-secondary px-5 py-20 lg:px-8 lg:py-[120px]"
      >
        <div className="flex w-full max-w-[1300px] flex-col items-center gap-10 lg:gap-[60px]">
          <div className="grid w-full gap-6 lg:grid-cols-[608px_minmax(0,676px)] lg:gap-0">
            <div className="flex flex-col items-start gap-4">
              <SectionEyebrow>Nuestro enfoque</SectionEyebrow>
              <RevealText
                as="h2"
                text="Cómo trabajamos, paso por paso"
                blur={8}
                className="max-w-[700px] text-[34px] leading-[38px] tracking-[-1.8px] text-foreground lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]"
              />
              <p className="max-w-[600px] text-[18px] leading-[24.3px] tracking-[-0.54px] text-muted-foreground">
                De la consulta inicial sin cargo al control de mantenimiento:
                qué pasa en cada etapa y qué te llevás de cada una.
              </p>
            </div>
            <TextArrowCTA
              href="/nosotros"
              className="self-end text-[18px] leading-[24.3px] tracking-[-0.54px] lg:justify-self-end"
            >
              Conocé el consultorio
            </TextArrowCTA>
          </div>

          <div className="flex w-full flex-col items-start gap-4 lg:flex-row">
            {/* Left column matches the header grid exactly; the pills stay
                flush with the heading instead of inheriting a white gutter. */}
            <div className="sticky top-[90px] z-10 hidden w-[230px] shrink-0 flex-col items-start gap-2 lg:flex lg:w-[608px] lg:max-w-[608px] [&>*]:w-[230px]">
              {STEPS.map((step, index) => (
                <StepPill
                  key={step.label}
                  label={step.label}
                  active={index === active}
                  tone={TAB_TONES[index]}
                />
              ))}
            </div>

            <div className="flex min-w-0 w-full max-w-full flex-col items-start gap-8 lg:w-[676px] lg:shrink-0">
              {STEPS.map((step, index) => {
                const tone = CARD_TONES[index % CARD_TONES.length];

                return (
                  <motion.article
                    key={step.label}
                    ref={register(index)}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={CARD_VARIANTS}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className={`flex min-w-0 max-w-full w-full flex-col items-center justify-center gap-2 overflow-clip rounded-[18px] p-4 shadow-[var(--clireo-shadow-md)] ${tone.surface} ${tone.ink}`}
                  >
                    <div className="relative h-[180px] w-full overflow-hidden rounded-[14px] lg:h-[200px]">
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        fill
                        sizes="(min-width: 1024px) 644px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[11px] overflow-clip px-2 py-3">
                      <div className="flex flex-col items-start gap-[10px]">
                        <step.Icon
                          className={`h-[30px] w-[30px] ${tone.icon}`}
                        />
                        <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px]">
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className={`text-[17px] leading-[23.46px] tracking-[-0.34px] ${tone.muted}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function StepPill({
  label,
  active,
  tone,
}: {
  label: string;
  active: boolean;
  tone: (typeof TAB_TONES)[number];
}) {
  return (
    <motion.div
      aria-current={active ? "step" : undefined}
      animate={{
        backgroundColor: active ? tone.activeBg : tone.idleBg,
        color: active ? tone.activeFg : tone.idleFg,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full items-center gap-3 rounded-[14px] px-5 py-[10px] shadow-[var(--clireo-shadow)]"
    >
      <span
        aria-hidden
        className="block h-[7px] w-[7px] rounded-[1px]"
        style={{ backgroundColor: tone.marker }}
      />
      <span className="text-[18px] leading-[24.3px] tracking-[-0.54px]">
        {label}
      </span>
    </motion.div>
  );
}

/**
 * Marks a panel active once it crosses the band where the sticky indicator sits.
 */
function useActiveStep(count: number) {
  const nodes = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = nodes.current.indexOf(entry.target as HTMLElement);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: 0 },
    );

    nodes.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [count]);

  const register = (index: number) => (node: HTMLElement | null) => {
    nodes.current[index] = node;
  };

  return { active, register };
}
