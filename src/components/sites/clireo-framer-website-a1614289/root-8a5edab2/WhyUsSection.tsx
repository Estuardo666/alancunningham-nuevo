"use client";

import { motion, MotionConfig } from "framer-motion";
import type { SVGProps } from "react";
import { CtaConMicrocopy } from "@/components/site/PageShell";
import { DIFERENCIALES } from "@/content/clinica-contenido";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import {
  ValuePersonalizedIcon,
  WhyUsIconOne,
  WhyUsIconThree,
  WhyUsIconTwo,
} from "../shared/icons";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

interface Reason {
  title: string;
  description: string;
  Icon: IconComponent;
}

/**
 * The written-quote argument is already its own card in AboutSection and its
 * own step in ApproachSection, so it is filtered out here rather than stated a
 * third time. `DIFERENCIALES` itself is untouched — other pages still use it
 * whole.
 */
const OMITIDOS = ["Presupuesto por escrito y sin presión"];

const REASONS: Reason[] = DIFERENCIALES.filter(
  (d) => !OMITIDOS.includes(d.titulo),
).map((d, index) => ({
  title: d.titulo,
  description: d.descripcion,
  Icon: [WhyUsIconOne, WhyUsIconTwo, WhyUsIconThree, ValuePersonalizedIcon][
    index % 4
  ],
}));

const CARD_TONES = [
  {
    surface: "bg-surface-secondary",
    ink: "text-foreground",
    muted: "text-foreground/75",
    iconSurface: "bg-white",
    iconInk: "text-brand",
  },
  {
    surface: "bg-accent-coral",
    ink: "text-accent-coral-foreground",
    muted: "text-accent-coral-foreground/75",
    iconSurface: "bg-white",
    iconInk: "text-brand",
  },
  {
    surface: "bg-secondary",
    ink: "text-secondary-foreground",
    muted: "text-secondary-foreground/75",
    iconSurface: "bg-white",
    iconInk: "text-brand",
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
 * The section keeps the heading and CTA together while the cards enter as one
 * sequenced group below it.
 */
export function WhyUsSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex flex-col items-center bg-background px-5 py-20 lg:px-8 lg:py-[120px]">
        <div className="flex w-full max-w-[1300px] flex-col items-center pb-12 lg:pb-16">
          <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
          <div className="flex flex-col items-center gap-4 px-0 pt-4 pb-8 lg:pb-12">
            <RevealText
              as="h2"
              text="Por qué elegir este consultorio"
              blur={8}
              className="max-w-[700px] text-center text-[34px] leading-[38px] tracking-[-1.8px] text-foreground lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]"
            />
            <p className="max-w-[600px] text-center text-[18px] leading-[24.3px] tracking-[-0.54px] text-muted-foreground">
              Un especialista que planifica y ejecuta tu caso, equipamiento con
              nombre propio y presupuesto por escrito antes de empezar.
            </p>
          </div>
          <CtaConMicrocopy contexto="una consulta inicial" align="center" />
        </div>

        {/* Two per row on compact screens, then one row on desktop. */}
        <motion.div
          className="grid w-full max-w-[1300px] justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
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
          {REASONS.map((reason, index) => (
            <ReasonCard
              key={reason.title}
              reason={reason}
              index={index}
              tone={CARD_TONES[index % CARD_TONES.length]}
            />
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}

function ReasonCard({
  reason,
  index,
  tone,
}: {
  reason: Reason;
  index: number;
  tone: (typeof CARD_TONES)[number];
}) {
  const { Icon, title, description } = reason;

  return (
    <motion.article
      variants={CARD_VARIANTS}
      whileHover={{
        y: -9,
        rotate: index % 2 === 0 ? -1 : 1,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`relative flex min-h-[390px] w-full max-w-[370px] flex-col items-start justify-between overflow-hidden rounded-[18px] p-8 shadow-[var(--clireo-shadow-md)] lg:min-h-[410px] lg:p-10 ${tone.surface} ${tone.ink}`}
    >
      <div className="flex w-full items-start justify-between">
        <span
          className={`flex h-[62px] w-[62px] items-center justify-center overflow-clip rounded-[12px] ${tone.iconSurface}`}
        >
          <Icon className={`h-9 w-9 ${tone.iconInk}`} />
        </span>
      </div>

      {/* The source site animates these cards per word too, at a lighter blur
          than the section heading: 3px for the title, 1px for the body. */}
      <div className="relative z-10 flex w-full flex-col gap-4">
        <RevealText
          as="h3"
          text={title}
          blur={3}
          className="max-w-[290px] text-[26px] leading-[31.2px] tracking-[-0.91px]"
        />
        <RevealText
          as="p"
          text={description}
          blur={1}
          stagger={0.018}
          className={`max-w-[310px] text-[15px] leading-[21px] tracking-[-0.15px] ${tone.muted}`}
        />
      </div>
    </motion.article>
  );
}
