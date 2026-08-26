import { cn } from "@/lib/utils";
import {
  CalendarDays,
  CheckCircle2,
  FileText,
  MessageCircle,
  Video,
} from "lucide-react";
import type { Paso } from "@/content/types";
import { ScrollRevealItem } from "./ScrollReveal";

const STEP_ICONS = [
  MessageCircle,
  FileText,
  CalendarDays,
  CheckCircle2,
  Video,
] as const;

const STEP_ACCENTS = [
  "bg-accent-coral/20 text-accent-coral-strong",
  "bg-accent-yellow/45 text-accent-yellow-strong",
  "bg-secondary/30 text-secondary-foreground",
  "bg-[#e9fbf9] text-[#147a76]",
  "bg-[#f5effb] text-[#74449c]",
];

/**
 * Vertical timeline for the dental tourism flow. Built from the Approach step
 * pill anatomy — 7×7 square marker, the mono numeral used elsewhere for data,
 * and a hairline connector — so it reads as part of the same system.
 */
export function TimelineSteps({
  pasos,
  tone = "light",
}: {
  pasos: Paso[];
  /** `light` sits on the navy bands. */
  tone?: "light" | "dark";
}) {
  const claro = tone === "light";

  return (
    <ol className="flex w-full flex-col">
      {pasos.map((paso, index) => {
        const ultimo = index === pasos.length - 1;
        const Icon = STEP_ICONS[index % STEP_ICONS.length];
        return (
          <ScrollRevealItem
            key={paso.titulo}
            delay={index * 110}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center pt-[10px]">
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px]",
                  claro
                    ? "bg-accent-yellow text-accent-yellow-strong"
                    : STEP_ACCENTS[index % STEP_ACCENTS.length],
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
              </span>
              {!ultimo ? (
                <span
                  aria-hidden
                  className={cn(
                    "mt-2 w-px flex-1",
                    claro ? "bg-white/60" : "bg-hairline",
                  )}
                  style={{
                    backgroundColor: claro ? undefined : "var(--hairline)",
                  }}
                />
              ) : null}
            </div>

            <div
              className={cn("flex flex-col gap-2", ultimo ? "pb-0" : "pb-10")}
            >
              <h3
                className={cn(
                  "text-[22px] leading-[29.7px] tracking-[-0.88px]",
                  claro ? "text-white" : "text-foreground",
                )}
              >
                {paso.titulo.split(" · ")[1] ?? paso.titulo}
              </h3>
              <p
                className={cn(
                  "max-w-[620px] text-[14px] leading-[19px] tracking-[-0.14px]",
                  claro ? "text-white/80" : "text-muted-foreground",
                )}
              >
                {paso.descripcion}
              </p>
            </div>
          </ScrollRevealItem>
        );
      })}
    </ol>
  );
}
