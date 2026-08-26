"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import { CtaConMicrocopy } from "@/components/site/PageShell";
import { EQUIPO, EQUIPO_CARRUSEL } from "@/content/equipo";
import { TeamCarousel } from "@/components/site/TeamCarousel";
import { T } from "@/i18n/LanguageProvider";

const FORMACION_ICONS = [GraduationCap, BadgeCheck, Wrench, BookOpen] as const;
const FORMACION_TONES = [
  "bg-accent-coral/18 text-accent-coral-strong",
  "bg-secondary/18 text-secondary-foreground",
  "bg-accent-yellow/30 text-accent-yellow-strong",
  "bg-surface-strong/10 text-foreground",
] as const;

/**
 * 04 · The professional. Moved up from position 9 (plan §3.2): the person and
 * the credentials are the authority signal and they were arriving too late.
 *
 * The grid already supports four professionals; adding one is a data edit in
 * `src/content/equipo.ts` plus a page, with no change to this component.
 */
export function DoctorsSection() {
  const unico = EQUIPO.length === 1;

  return (
    <section
      id="equipo"
      className="flex justify-center overflow-hidden bg-surface-secondary px-5 py-20 lg:px-8 lg:py-[120px]"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-10 lg:gap-[50px]">
        <div className="flex flex-col items-center gap-[10px]">
          <SectionEyebrow>Quién te va a atender</SectionEyebrow>
          <RevealText
            as="h2"
            text="El profesional detrás de cada tratamiento"
            blur={8}
            className="max-w-[600px] text-center text-[36px] leading-[40px] tracking-[-2px] text-foreground lg:text-[54px] lg:leading-[56.16px] lg:tracking-[-3.24px]"
          />
        </div>

        {unico ? (
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
            {EQUIPO.map((profesional) => (
              <article
                key={profesional.slug}
                className="flex flex-col items-start gap-4 overflow-clip"
              >
                <Link
                  href={`/equipo/${profesional.slug}`}
                  className="group relative h-[400px] w-full overflow-clip rounded-[14px] lg:h-[520px]"
                >
                  <Image
                    src={profesional.foto.src}
                    alt={profesional.foto.alt}
                    fill
                    sizes="(min-width: 1024px) 620px, 100vw"
                    className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/90 via-black/45 to-transparent"
                  />
                  <div
                    aria-hidden
                    className="team-card__blur pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-black/20"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 p-6 text-white">
                    <h3 className="text-[26px] font-semibold leading-[31.2px] tracking-[-0.91px]">
                      {profesional.nombre}
                    </h3>
                    <p className="text-[17px] leading-[23.46px] tracking-[-0.34px] text-white/90">
                      <T>{profesional.especialidad}</T> ·{" "}
                      {profesional.matricula}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
            <div className="flex flex-col items-start gap-6">
              {EQUIPO[0].bio.slice(0, 2).map((parrafo, index) => (
                index === 1 ? (
                  <ExpandableBioParagraph key={parrafo.slice(0, 40)}>
                    <T>{parrafo}</T>
                  </ExpandableBioParagraph>
                ) : (
                  <p
                    key={parrafo.slice(0, 40)}
                    className="text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground"
                  >
                    <T>{parrafo}</T>
                  </p>
                )
              ))}
              <ul className="grid w-full grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-4">
                {EQUIPO[0].formacion.map((item, index) => {
                  const Icon = FORMACION_ICONS[index % FORMACION_ICONS.length];
                  const tone = FORMACION_TONES[index % FORMACION_TONES.length];

                  return (
                    <li
                      key={item}
                      className={`group flex min-h-[118px] flex-col gap-3 rounded-[15px] p-4 shadow-[var(--clireo-shadow)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--clireo-shadow-md)] ${tone}`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-background/75">
                        <Icon
                          className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={1.7}
                          aria-hidden
                        />
                      </span>
                      <span className="text-[14px] leading-[19px] tracking-[-0.14px] text-foreground">
                        <T>{item}</T>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <TeamCarousel miembros={EQUIPO_CARRUSEL} />
        )}

        <CtaConMicrocopy contexto="una consulta inicial" align="center" />
      </div>
    </section>
  );
}

function ExpandableBioParagraph({ children }: { children: ReactNode }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="w-full">
      <div className="lg:hidden">
        <motion.div
          id="bio-tecnico"
          initial={false}
          animate={{ height: abierto ? "auto" : "5.9rem" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground"
        >
          <p>{children}</p>
          {!abierto ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-surface-secondary to-transparent"
            />
          ) : null}
        </motion.div>
        <motion.button
          type="button"
          aria-expanded={abierto}
          aria-controls="bio-tecnico"
          onClick={() => setAbierto((actual) => !actual)}
          className="mt-2 inline-flex items-center gap-1 text-[15px] font-medium text-foreground underline decoration-foreground/35 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {abierto ? "Ver menos" : "Ver más"}
          <motion.span
            animate={{ rotate: abierto ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-hidden
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </div>

      <p className="hidden text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground lg:block">
        {children}
      </p>
    </div>
  );
}
