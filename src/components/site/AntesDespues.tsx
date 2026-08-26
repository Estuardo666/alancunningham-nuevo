"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { Imagen } from "@/content/types";

/**
 * Drag-to-compare for the clinic's real cases. Same anatomy as the template's
 * slider — two stacked images, a full-bleed range input as the interaction
 * surface and the handle drawn on top — but fed with real image paths and with
 * the treatment name and duration labelled, which the old site never did.
 */
export function AntesDespues({
  antes,
  despues,
  etiqueta,
  duracion,
}: {
  antes: Imagen;
  despues: Imagen;
  etiqueta: string;
  duracion?: string;
}) {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <figure className="flex w-full flex-col gap-3">
      <div className="relative h-[280px] w-full overflow-hidden rounded-[14px] bg-card lg:h-[459px]">
        <Image
          src={despues.src}
          alt={despues.alt}
          fill
          sizes="(min-width: 1024px) 638px, 100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={antes.src}
            alt={antes.alt}
            fill
            sizes="(min-width: 1024px) 638px, 100vw"
            className="object-cover"
          />
        </div>

        <span className="absolute top-4 left-4 rounded-[8px] bg-card/90 px-3 py-1 text-[15px] leading-[21px] tracking-[-0.15px] text-foreground">
          Antes
        </span>
        <span className="absolute top-4 right-4 rounded-[8px] bg-card/90 px-3 py-1 text-[15px] leading-[21px] tracking-[-0.15px] text-foreground">
          Después
        </span>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 flex w-9 items-center justify-center"
          style={{ left: `calc(${position}% - 18px)` }}
        >
          <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-on-strong" />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-card text-[11px] tracking-[0.5px] text-foreground shadow-[var(--clireo-shadow-md)]">
            B/A
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          {`Comparar antes y después — ${etiqueta}`}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption className="flex flex-wrap items-baseline gap-x-3 px-1">
        <span className="text-[20px] leading-[27px] tracking-[-0.8px] text-foreground">
          {etiqueta}
        </span>
        {duracion ? (
          <span className="text-[16px] leading-[23.2px] tracking-[-0.24px] text-muted-foreground">
            {duracion}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
