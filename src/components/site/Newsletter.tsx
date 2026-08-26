"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { EVENTOS, track } from "@/lib/analytics";

/**
 * Newsletter capture. UI is complete; no provider is connected yet (plan §8.4),
 * so the address is only tracked and the user gets an honest confirmation.
 */
export function Newsletter() {
  const id = useId();
  const [suscripto, setSuscripto] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(
      new FormData(event.currentTarget).get("email") ?? "",
    ).trim();
    track(EVENTOS.newsletterSuscripcion, { email });
    setSuscripto(true);
  }

  if (suscripto) {
    return (
      <p className="max-w-[340px] text-[16px] leading-[23.2px] tracking-[-0.24px] text-white">
        Gracias. Te vamos a escribir cuando publiquemos algo que valga la pena
        leer.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-start gap-[9px]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[340px] items-center gap-1 overflow-hidden rounded-[4px]"
      >
        <label className="sr-only" htmlFor={id}>
          Correo electrónico
        </label>
        <input
          id={id}
          name="email"
          type="email"
          required
          placeholder="Tu email"
          className="h-11 flex-1 rounded-[4px] border border-white/80 bg-transparent px-4 text-[16px] text-white outline-none placeholder:text-white/80"
        />
        <button
          type="submit"
          className="h-11 rounded-[4px] bg-button-dark-bg px-4 text-[16px] text-button-dark-foreground transition-colors duration-200 hover:bg-button-dark-arrow-hover hover:text-button-dark-arrow-hover-foreground"
        >
          Suscribirme
        </button>
      </form>
      <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-white/70">
        Novedades del consultorio. Sin spam y podés darte de baja cuando
        quieras.
      </p>
    </div>
  );
}
