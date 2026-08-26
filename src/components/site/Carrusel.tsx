"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Imagen } from "@/content/types";

/**
 * Horizontal photo rail with the system's 38×38 arrow controls.
 *
 * Scroll-snap does the work, so dragging, trackpads and keyboard all behave
 * natively; the arrows only nudge the scroll container. Matches the Services
 * slideshow: manual, never auto-advancing.
 */
export function Carrusel({
  imagenes,
  etiqueta,
}: {
  imagenes: Imagen[];
  /** Accessible name for the region. */
  etiqueta: string;
}) {
  const pista = useRef<HTMLUListElement>(null);
  const [alInicio, setAlInicio] = useState(true);
  const [alFinal, setAlFinal] = useState(false);

  const medir = useCallback(() => {
    const node = pista.current;
    if (!node) return;
    setAlInicio(node.scrollLeft <= 4);
    setAlFinal(node.scrollLeft + node.clientWidth >= node.scrollWidth - 4);
  }, []);

  useEffect(() => {
    medir();
    const node = pista.current;
    if (!node) return;
    node.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      node.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [medir]);

  const mover = (direccion: 1 | -1) => {
    const node = pista.current;
    if (!node) return;
    node.scrollBy({
      left: direccion * Math.max(320, node.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section aria-label={etiqueta} className="flex w-full flex-col gap-6">
      <ul
        ref={pista}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {imagenes.map((imagen) => (
          <li
            key={imagen.src}
            className="relative h-[260px] w-[300px] shrink-0 snap-start overflow-hidden rounded-[15px] bg-hero lg:h-[360px] lg:w-[440px]"
          >
            <Image
              src={imagen.src}
              alt={imagen.alt}
              fill
              sizes="(min-width: 1024px) 440px, 300px"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-[22px]">
        <Flecha
          label="Anterior"
          direccion="izquierda"
          onClick={() => mover(-1)}
          disabled={alInicio}
        />
        <Flecha
          label="Siguiente"
          direccion="derecha"
          onClick={() => mover(1)}
          disabled={alFinal}
        />
      </div>
    </section>
  );
}

function Flecha({
  label,
  direccion,
  onClick,
  disabled,
}: {
  label: string;
  direccion: "izquierda" | "derecha";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 w-11 items-center justify-center rounded-[20px] bg-secondary text-secondary-foreground transition-colors duration-300 hover:bg-button-tinted-hover disabled:pointer-events-none disabled:opacity-50"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none">
        <path
          d={direccion === "izquierda" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
