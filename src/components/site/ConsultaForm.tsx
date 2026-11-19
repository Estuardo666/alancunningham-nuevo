"use client";

import { CalendarCheck, Clock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { TURNOS_HREF, whatsappHref } from "@/content/clinica";
import { EVENTOS, track } from "@/lib/analytics";
import { PrimaryButton } from "@/components/sites/clireo-framer-website-a1614289/shared/PrimaryButton";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

/**
 * Booking call to action. Replaces the old lead form: sends the patient
 * straight to the online booking system, with WhatsApp as the secondary path.
 * Keeps the former props so every page that used the form keeps working.
 */
export function ConsultaForm({
  titulo = "Reservá tu turno online",
  contexto,
  sticky = false,
  sinPaddingMobile = false,
  className,
}: {
  titulo?: string;
  /** Page context, preloaded into the WhatsApp message. */
  contexto?: string;
  /** Kept for compatibility with the old form; no longer used. */
  tratamientos?: { slug: string; nombre: string }[];
  internacional?: boolean;
  sticky?: boolean;
  sinPaddingMobile?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[20px] bg-[#30005b] p-[30px] text-white ring-1 ring-white/10 shadow-[var(--clireo-shadow-md)]",
        sticky && "lg:sticky lg:top-[90px]",
        sinPaddingMobile && "rounded-[16px] p-6 lg:p-[30px]",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10"
      />
      <div className="relative flex flex-col gap-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/15">
          <CalendarCheck className="h-7 w-7" strokeWidth={1.8} aria-hidden />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px]">
            {titulo}
          </h3>
          <p className="text-[16px] leading-[23px] tracking-[-0.24px] text-white/90">
            Elegí día y horario en la agenda del consultorio. Te lleva menos de
            un minuto.
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-[15px] leading-[21px] text-white/90">
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0" aria-hidden />
            Turnos disponibles en tiempo real
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
            Confirmación inmediata
          </li>
        </ul>
        <PrimaryButton
          label="Reservar turno"
          href={TURNOS_HREF}
          variant="dark"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track(EVENTOS.turnoOnlineAbierto, { contexto })}
          className="w-full justify-between"
        />
        <TextArrowCTA
          href={whatsappHref(contexto)}
          className="self-center text-center text-[16px] leading-[23.2px] tracking-[-0.24px] !text-white"
        >
          Prefiero escribir por WhatsApp
        </TextArrowCTA>
      </div>
    </div>
  );
}
