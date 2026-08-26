"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { MedioGaleria } from "@/content/types";
import { cn } from "@/lib/utils";

const ENTRADA = "cubic-bezier(0.16, 1, 0.3, 1)";
const ESCALON = 70;

/**
 * Packed photo gallery for the clinic. CSS columns keep every tile attached to
 * the next one instead of leaving the empty cells produced by a fixed grid.
 */
export function Galeria({
  imagenes,
  columnas = 3,
}: {
  imagenes: MedioGaleria[];
  columnas?: 2 | 3 | 4;
}) {
  const [visible, setVisible] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLUListElement>(null);
  const activeIndex = lightboxIndex ?? 0;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const nodo = gridRef.current;
    if (!nodo) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisible(true);
        observador.disconnect();
      },
      { rootMargin: "-80px 0px" },
    );

    observador.observe(nodo);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") {
        setLightboxIndex((indice) =>
          indice === null
            ? null
            : (indice - 1 + imagenes.length) % imagenes.length,
        );
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((indice) =>
          indice === null ? null : (indice + 1) % imagenes.length,
        );
      }
    };

    document.addEventListener("keydown", cerrarConEscape);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = overflow;
    };
  }, [imagenes.length, lightboxIndex]);

  return (
    <>
      <ul
        ref={gridRef}
        className={cn(
          "w-full columns-1 gap-4 sm:columns-2",
          columnas === 2 && "lg:columns-2",
          columnas === 3 && "lg:columns-3",
          columnas === 4 && "lg:columns-4",
        )}
      >
        {imagenes.map((medio, indice) => (
          <li
            key={medio.src}
            className={cn(
              "group relative mb-4 break-inside-avoid overflow-hidden rounded-[14px] bg-hero",
              "transition-[opacity,scale,filter] duration-[700ms] motion-reduce:transition-opacity",
              visible
                ? "scale-100 opacity-100 blur-0"
                : "scale-[0.94] opacity-0 blur-[8px]",
            )}
            style={{
              transitionTimingFunction: ENTRADA,
              transitionDelay:
                reduce || !visible ? "0ms" : `${indice * ESCALON}ms`,
            }}
          >
            <button
              type="button"
              className="relative block w-full cursor-zoom-in overflow-hidden rounded-[14px] text-left focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:outline-none"
              onClick={() => setLightboxIndex(indice)}
              aria-label={`Abrir imagen ${indice + 1} de ${imagenes.length}`}
            >
              <Medio medio={medio} />
            </button>
          </li>
        ))}
      </ul>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de instalaciones"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex max-h-full w-full max-w-[1180px] flex-col gap-4 rounded-[22px] border border-white/30 bg-background/90 p-3 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-1">
              <p className="text-[13px] tracking-[1.17px] text-muted-foreground uppercase">
                {activeIndex + 1} / {imagenes.length}
              </p>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:outline-none"
                aria-label="Cerrar galería"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <Image
                src={imagenes[activeIndex].src}
                alt={imagenes[activeIndex].alt}
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 1000px, 92vw"
                className="max-h-[min(66vh,680px)] w-auto max-w-full rounded-[16px] object-contain"
                priority
              />

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (activeIndex - 1 + imagenes.length) % imagenes.length,
                  )
                }
                className="absolute top-1/2 left-2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:outline-none sm:left-4"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex((activeIndex + 1) % imagenes.length)}
                className="absolute top-1/2 right-2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:outline-none sm:right-4"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div
              className="flex gap-2 overflow-x-auto px-1 pb-1"
              aria-label="Miniaturas"
            >
              {imagenes.map((imagen, indice) => (
                <button
                  type="button"
                  key={imagen.src}
                  onClick={() => setLightboxIndex(indice)}
                  className={cn(
                    "relative h-14 w-20 shrink-0 overflow-hidden rounded-[10px] border-2 transition-opacity focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:outline-none",
                    indice === activeIndex
                      ? "border-accent-coral opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100",
                  )}
                  aria-label={`Ver imagen ${indice + 1}`}
                  aria-current={indice === activeIndex}
                >
                  <Image
                    src={imagen.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Medio({ medio }: { medio: MedioGaleria }) {
  const clases = cn(
    "h-auto w-full object-cover",
    "transition-[scale] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]",
    "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
  );

  if (medio.video) {
    return (
      <video
        src={medio.video}
        poster={medio.src}
        aria-label={medio.alt}
        className={clases}
        muted
        playsInline
        controls
        preload="metadata"
      />
    );
  }

  return (
    <Image
      src={medio.src}
      alt={medio.alt}
      width={640}
      height={480}
      sizes="(min-width: 1024px) 420px, 100vw"
      className={clases}
    />
  );
}
