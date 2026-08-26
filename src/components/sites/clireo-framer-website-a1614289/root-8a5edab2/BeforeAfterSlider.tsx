"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { asset } from "../shared/assets";

/**
 * Drag-to-compare treatment result. Framer builds this from two stacked images
 * plus a full-bleed range input; the input stays the interaction surface so the
 * control is keyboard-accessible, and the visible handle is drawn on top.
 *
 * `before`/`after` accept either a template asset filename or an absolute path
 * under `/public`, so the same component serves the cloned imagery and the
 * clinic's own case photos.
 *
 * For the clinic's documented cases prefer `site/AntesDespues`, which adds the
 * treatment name and duration to the caption.
 */
export function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [position, setPosition] = useState(50);
  const id = useId();
  const src = (file: string) => (file.startsWith("/") ? file : asset(file));

  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[14px] bg-card lg:h-[459px]">
      <Image
        src={src(after)}
        alt={`${label} — después del tratamiento`}
        fill
        sizes="(min-width: 1024px) 638px, 100vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={src(before)}
          alt={`${label} — antes del tratamiento`}
          fill
          sizes="(min-width: 1024px) 638px, 100vw"
          className="object-cover"
        />
      </div>

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
        {`Comparar antes y después — ${label}`}
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
  );
}
