"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { MiembroCarrusel } from "@/content/equipo";
import { cn } from "@/lib/utils";

/**
 * Team member carousel. Moving the carousel only highlights a card; the meta
 * panel opens on click, so reading someone's details is always a deliberate
 * act and the strip never flickers while it travels.
 *
 * Motion notes:
 * - The track is the only element that moves, and it moves through a single
 *   `transform`. No CSS variable is written on the parent during a drag: that
 *   would recalculate styles for every card on every pointer event.
 * - The card opens through a `clip-path` inset on the portrait instead of a
 *   height animation, so nothing triggers layout mid-transition.
 * - Opening is slow and deliberate (650ms); closing and stepping are quicker.
 */

/** Long, unhurried deceleration - almost all of the travel happens up front. */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const MOVE_MS = 780;
/** px/ms - a quick flick counts even when the finger barely moved. */
const FLICK_VELOCITY = 0.11;
/** px a press may wander before it counts as a drag instead of a tap. */
const SLOP = 6;

/** Palette tints. The owner is the only solid, dark card. */
const TONOS: Record<MiembroCarrusel["tono"], string> = {
  titular: "bg-hero text-on-strong",
  coral: "bg-accent-coral/20 text-foreground",
  cyan: "bg-secondary/20 text-foreground",
  lima: "bg-accent-yellow/30 text-foreground",
  violeta: "bg-primary/15 text-foreground",
  // Plain white: the lavender band already owns `--surface-secondary`, so a
  // lavender card would vanish into the section behind it.
  blanca: "bg-card text-foreground",
};

export function TeamCarousel({
  miembros,
  className,
}: {
  miembros: MiembroCarrusel[];
  className?: string;
}) {
  const [activo, setActivo] = useState(0);
  const [abierto, setAbierto] = useState<number | null>(null);
  const [drag, setDrag] = useState(0);
  const [arrastrando, setArrastrando] = useState(false);
  const [reduce, setReduce] = useState(false);

  const trackRef = useRef<HTMLUListElement>(null);
  const pasoRef = useRef(0);
  const inicio = useRef({ x: 0, t: 0 });
  const presionando = useRef(false);
  const movido = useRef(false);

  const total = miembros.length;
  const solo = total === 1;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /** Distance between two card centres, read from the DOM so CSS owns sizing. */
  const medirPaso = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;
    const a = track.children[0].getBoundingClientRect();
    const b = track.children[1].getBoundingClientRect();
    return b.left - a.left;
  }, []);

  useEffect(() => {
    const sync = () => {
      pasoRef.current = medirPaso();
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [medirPaso]);

  /** Travelling closes whatever was open: the strip should arrive quiet. */
  const ir = useCallback(
    (indice: number) => {
      setActivo(Math.min(Math.max(indice, 0), total - 1));
      setAbierto(null);
    },
    [total],
  );

  /** Clicking a side card brings it to the centre and opens it in one move. */
  function alTocarCard(indice: number) {
    if (indice !== activo) {
      setActivo(indice);
      setAbierto(indice);
      return;
    }
    setAbierto((previo) => (previo === indice ? null : indice));
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (solo || event.button !== 0) return;
    pasoRef.current = pasoRef.current || medirPaso();
    inicio.current = { x: event.clientX, t: performance.now() };
    // Capture is deliberately NOT taken here: capturing on `pointerdown`
    // retargets the click to this element, and the card would never see it.
    presionando.current = true;
    movido.current = false;
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!presionando.current) return;
    const delta = event.clientX - inicio.current.x;

    // A press only becomes a drag past the slop threshold, so a tap stays a tap.
    if (!movido.current) {
      if (Math.abs(delta) < SLOP) return;
      movido.current = true;
      setArrastrando(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    const enElBorde =
      (activo === 0 && delta > 0) || (activo === total - 1 && delta < 0);
    // Friction past the ends rather than an invisible wall.
    setDrag(enElBorde ? delta * 0.32 : delta);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (!presionando.current) return;
    presionando.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!movido.current) return;

    const delta = event.clientX - inicio.current.x;
    const velocidad = Math.abs(delta) / (performance.now() - inicio.current.t);
    const paso = pasoRef.current || 1;

    if (Math.abs(delta) > paso * 0.22 || velocidad > FLICK_VELOCITY) {
      ir(activo + (delta < 0 ? 1 : -1));
    }

    setArrastrando(false);
    setDrag(0);
  }

  /** Swallow the click that closes a drag, so releasing never opens a card. */
  function onClickCapture(event: React.MouseEvent<HTMLDivElement>) {
    if (!movido.current) return;
    event.preventDefault();
    event.stopPropagation();
    movido.current = false;
  }

  return (
    <div
      className={cn("flex w-full flex-col items-center gap-8", className)}
      role="group"
      aria-roledescription="carrusel"
      aria-label="Equipo del consultorio"
    >
      <div
        className="relative w-full [--alto:clamp(460px,125vw,600px)] [--ancho:100%] [--gap:24px] [--paso:calc(var(--ancho)+var(--gap))] [--reveal:36%] lg:[--alto:clamp(360px,92vw,500px)] lg:[--ancho:clamp(240px,72vw,340px)] lg:[--gap:36px]"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") ir(activo + 1);
          if (event.key === "ArrowLeft") ir(activo - 1);
          if (event.key === "Escape") setAbierto(null);
        }}
      >
        <div
          className="touch-pan-y overflow-hidden px-[max(0px,calc(50%-var(--ancho)/2))] py-2 select-none"
          onClickCapture={onClickCapture}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <ul
            ref={trackRef}
            className="flex list-none gap-[var(--gap)] will-change-transform"
            style={{
              transform: `translate3d(calc(${-activo} * var(--paso) + ${drag}px), 0, 0)`,
              transition:
                reduce || arrastrando
                  ? "none"
                  : `transform ${MOVE_MS}ms ${EASE}`,
            }}
          >
            {miembros.map((miembro, indice) => (
              <li key={miembro.slug} className="w-[var(--ancho)] shrink-0">
                <Card
                  miembro={miembro}
                  activo={indice === activo}
                  abierto={indice === abierto}
                  onTocar={() => alTocarCard(indice)}
                />
              </li>
            ))}
          </ul>
        </div>

        {solo ? null : (
          <>
            <Flecha
              lado="izquierda"
              disabled={activo === 0}
              onClick={() => ir(activo - 1)}
            />
            <Flecha
              lado="derecha"
              disabled={activo === total - 1}
              onClick={() => ir(activo + 1)}
            />
          </>
        )}
      </div>

      {solo ? null : (
        <ol className="flex list-none items-center gap-2">
          {miembros.map((miembro, indice) => (
            <li key={miembro.slug} className="flex">
              <button
                type="button"
                onClick={() => ir(indice)}
                aria-label={`Ver a ${miembro.nombre}`}
                aria-current={indice === activo}
                className={cn(
                  "block h-[6px] rounded-full transition-[width,background-color] duration-300 ease-out active:scale-95 motion-reduce:transition-none",
                  indice === activo
                    ? "w-6 bg-foreground/70"
                    : "w-[6px] bg-foreground/20",
                )}
              />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function Card({
  miembro,
  activo,
  abierto,
  onTocar,
}: {
  miembro: MiembroCarrusel;
  activo: boolean;
  abierto: boolean;
  onTocar: () => void;
}) {
  const oscuro = miembro.tono === "titular";

  return (
    <article
      aria-current={activo}
      className={cn(
        "relative h-[var(--alto)] rounded-[24px] p-[12px]",
        // A card with a list of areas needs a taller panel than a bare one.
        miembro.especialidades ? "[--reveal:46%]" : null,
        TONOS[miembro.tono],
        "transition-[scale,box-shadow,opacity] duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
        activo
          ? "scale-100 shadow-[var(--clireo-shadow-md)]"
          : "scale-[0.96] opacity-90 shadow-[var(--clireo-shadow-sm)]",
      )}
    >
      {/* The whole card is the toggle: click to open, click again to close. */}
      <button
        type="button"
        onClick={onTocar}
        aria-expanded={abierto}
        aria-label={
          abierto ? `Cerrar ${miembro.nombre}` : `Ver a ${miembro.nombre}`
        }
        className="absolute inset-0 z-10 cursor-pointer rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      />

      <div
        className={cn(
          // Opening is slow and deliberate; closing gets out of the way.
          "absolute inset-[12px] motion-reduce:transition-none",
          abierto
            ? "duration-[650ms] [clip-path:inset(0_0_var(--reveal)_0_round_14px)]"
            : "duration-[420ms] [clip-path:inset(0_0_0_0_round_14px)]",
          "transition-[clip-path] ease-[cubic-bezier(0.32,0.72,0,1)]",
        )}
      >
        <Image
          src={miembro.foto.src}
          alt={miembro.foto.alt}
          fill
          sizes="(min-width: 1024px) 340px, 72vw"
          className="object-cover object-top"
          draggable={false}
        />
      </div>

      <div
        aria-hidden={!abierto}
        className={cn(
          // Name block hangs under the portrait; the pill and the button stay
          // pinned to the foot of the card so every card ends on the same line.
          "absolute inset-x-[12px] top-[calc(100%-var(--reveal)+16px)] bottom-[12px] flex flex-col items-start justify-between gap-4",
          "transition-[opacity,transform,filter] ease-out motion-reduce:transition-opacity",
          abierto
            ? "translate-y-0 opacity-100 blur-0 delay-200 duration-[450ms]"
            : "pointer-events-none translate-y-1 opacity-0 blur-[2px] duration-200",
        )}
      >
        <div className="flex flex-col gap-[2px]">
          <h3
            className={cn(
              "text-[21px] leading-[25px] font-semibold tracking-[-0.84px]",
              oscuro ? "text-on-strong" : "text-foreground",
            )}
          >
            {miembro.nombre}
          </h3>
          {/* The list replaces the role line: it already says the same thing. */}
          {miembro.especialidades ? null : (
            <p
              className={cn(
                "line-clamp-2 text-[15px] leading-[20px] tracking-[-0.3px]",
                oscuro ? "text-on-strong/70" : "text-foreground/65",
              )}
            >
              {miembro.especialidad}
            </p>
          )}

          {miembro.especialidades ? (
            <ul className="mt-3 flex list-none flex-col gap-[5px]">
              {miembro.especialidades.map((area) => (
                <li
                  key={area}
                  className={cn(
                    "flex items-center gap-[9px] text-[14px] leading-[19px] tracking-[-0.14px]",
                    oscuro ? "text-on-strong/75" : "text-foreground/70",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "block h-[5px] w-[5px] shrink-0 rounded-[1.5px]",
                      oscuro ? "bg-on-strong/60" : "bg-foreground/45",
                    )}
                  />
                  {area}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <span
            className={cn(
              "rounded-full px-3 py-[5px] text-[12px] leading-[17px] tracking-[-0.12px]",
              oscuro
                ? "bg-on-strong/12 text-on-strong/80"
                : "bg-foreground/[0.07] text-foreground/70",
            )}
          >
            {miembro.etiqueta}
          </span>

          {miembro.ficha ? (
            <Link
              href={`/equipo/${miembro.slug}`}
              tabIndex={abierto ? undefined : -1}
              className={cn(
                "relative z-20 inline-flex items-center rounded-full px-4 py-[8px] text-[13px] leading-[19px] tracking-[-0.13px]",
                "transition-[scale] duration-150 ease-out active:scale-[0.97] motion-reduce:transition-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
                oscuro
                  ? "bg-on-strong text-hero"
                  : "bg-foreground text-background",
              )}
            >
              Ver ficha
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Flecha({
  lado,
  disabled,
  onClick,
}: {
  lado: "izquierda" | "derecha";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = lado === "izquierda" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={lado === "izquierda" ? "Anterior" : "Siguiente"}
      className={cn(
        "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full",
        "border border-foreground/10 bg-background/70 text-foreground shadow-[var(--clireo-shadow)] backdrop-blur-md",
        "transition-[scale,opacity] duration-150 ease-out active:scale-[0.94] motion-reduce:transition-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
        "disabled:pointer-events-none disabled:opacity-30",
        lado === "izquierda" ? "left-3 lg:left-6" : "right-3 lg:right-6",
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
    </button>
  );
}
