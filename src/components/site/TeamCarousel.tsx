"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { MiembroCarrusel } from "@/content/equipo";
import { cn } from "@/lib/utils";
/** "Ver ficha" link on member cards — hidden for now. */
const MOSTRAR_FICHA = false;

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
  coral: "bg-[color-mix(in_srgb,var(--accent-coral)_22%,var(--card))] text-foreground",
  cyan: "bg-[color-mix(in_srgb,var(--secondary)_22%,var(--card))] text-foreground",
  lima: "bg-[color-mix(in_srgb,var(--accent-yellow)_32%,var(--card))] text-foreground",
  violeta: "bg-[color-mix(in_srgb,var(--primary)_18%,var(--card))] text-foreground",
  // Plain white: the lavender band already owns `--surface-secondary`, so a
  // lavender card would vanish into the section behind it.
  blanca: "bg-card text-foreground",
};

/** Up to this many people a carousel is pointless: show them side by side. */
const MAX_EN_GRILLA = 2;

export function TeamCarousel(props: {
  miembros: MiembroCarrusel[];
  className?: string;
}) {
  return props.miembros.length <= MAX_EN_GRILLA ? (
    <TeamGrid {...props} />
  ) : (
    <Carrusel {...props} />
  );
}

/** Static, larger cards for a small team. Tapping a card still opens its panel. */
function TeamGrid({
  miembros,
  className,
}: {
  miembros: MiembroCarrusel[];
  className?: string;
}) {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <ul
      className={cn(
        "mx-auto grid w-full max-w-[1100px] list-none grid-cols-1 gap-6 [--alto:clamp(560px,150vw,680px)] md:grid-cols-2 lg:gap-8 lg:[--alto:720px]",
        className,
      )}
      aria-label="Equipo del consultorio"
      onKeyDown={(event) => {
        if (event.key === "Escape") setAbierto(null);
      }}
    >
      {miembros.map((miembro, indice) => (
        <li key={miembro.slug}>
          <Card
            miembro={miembro}
            activo
            abierto={indice === abierto}
            onTocar={() =>
              setAbierto((previo) => (previo === indice ? null : indice))
            }
          />
        </li>
      ))}
    </ul>
  );
}

function Carrusel({
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
  const viewportRef = useRef<HTMLDivElement>(null);
  const pasoRef = useRef(0);
  /** Furthest the track may travel (px) without leaving empty space on the right. */
  const [tope, setTope] = useState(0);
  /** Last index the strip can start at; on desktop several cards share the view. */
  const [ultimo, setUltimo] = useState(miembros.length - 1);
  /** True when more than one card fits, so a tap opens in place instead of travelling. */
  const [variosVisibles, setVariosVisibles] = useState(false);
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
      const paso = medirPaso();
      pasoRef.current = paso;
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport || !paso) return;
      const ultimaCard = track.lastElementChild as HTMLElement | null;
      const anchoTotal = ultimaCard
        ? ultimaCard.offsetLeft + ultimaCard.offsetWidth
        : track.scrollWidth;
      const visibles = viewport.clientWidth / paso;
      const multi = visibles >= 1.5;
      const max = multi ? Math.max(0, anchoTotal - viewport.clientWidth) : Infinity;
      setVariosVisibles(multi);
      setTope(max);
      setUltimo(
        multi ? Math.min(total - 1, Math.ceil(max / paso - 0.01)) : total - 1,
      );
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [medirPaso, total]);

  /** Travelling closes whatever was open: the strip should arrive quiet. */
  const ir = useCallback(
    (indice: number) => {
      setActivo(Math.min(Math.max(indice, 0), ultimo));
      setAbierto(null);
    },
    [ultimo],
  );

  /** Clicking a side card brings it to the centre and opens it in one move. */
  function alTocarCard(indice: number) {
    if (variosVisibles) {
      setAbierto((previo) => (previo === indice ? null : indice));
      return;
    }
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
      (activo === 0 && delta > 0) || (activo === ultimo && delta < 0);
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
        className="relative w-full [--alto:clamp(460px,125vw,600px)] [--ancho:calc((100%-var(--gap))/1.15)] [--gap:16px] [--paso:calc(var(--ancho)+var(--gap))] md:[--alto:clamp(440px,58vw,560px)] md:[--ancho:calc((100%-2*var(--gap))/2.5)] md:[--gap:20px] lg:[--gap:28px]"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") ir(activo + 1);
          if (event.key === "ArrowLeft") ir(activo - 1);
          if (event.key === "Escape") setAbierto(null);
        }}
      >
        <div
          ref={viewportRef}
          className="touch-pan-y overflow-hidden py-2 select-none"
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
              transform: Number.isFinite(tope)
                ? `translate3d(max(calc(${-activo} * var(--paso) + ${drag}px), ${-tope + Math.min(0, drag) * 0.32}px), 0, 0)`
                : `translate3d(calc(${-activo} * var(--paso) + ${drag}px), 0, 0)`,
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
                  activo={variosVisibles || indice === activo}
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
              disabled={activo >= ultimo}
              onClick={() => ir(activo + 1)}
            />
          </>
        )}
      </div>

      {solo ? null : (
        <ol className="flex list-none items-center gap-2">
          {miembros.slice(0, ultimo + 1).map((miembro, indice) => (
            <li key={miembro.slug} className="flex">
              <button
                type="button"
                onClick={() => ir(indice)}
                aria-label={`Ir a ${miembro.nombre}`}
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
        "relative flex h-[var(--alto)] flex-col rounded-[24px] p-[12px]",
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

      {/* The portrait takes whatever the panel leaves, so the panel is exactly
          as tall as its content (no dead space) and the face stays in frame. */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[14px]">
        <Image
          src={miembro.foto.src}
          alt={miembro.foto.alt}
          fill
          sizes="(min-width: 1024px) 460px, (min-width: 768px) 40vw, 90vw"
          className="object-cover object-[50%_8%]"
          draggable={false}
        />
      </div>

      <div
        aria-hidden={!abierto}
        className={cn(
          "grid transition-[grid-template-rows] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          abierto
            ? "grid-rows-[1fr] duration-[650ms]"
            : "grid-rows-[0fr] duration-[420ms]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={cn(
              "flex flex-col gap-5 px-1 pt-5 pb-1",
              "transition-[opacity,transform,filter] ease-out motion-reduce:transition-opacity",
              abierto
                ? "translate-y-0 opacity-100 blur-0 delay-200 duration-[450ms]"
                : "pointer-events-none translate-y-1 opacity-0 blur-[2px] duration-200",
            )}
          >
            <div className="flex flex-col gap-[2px]">
              <h3
                className={cn(
                  "text-[21px] leading-[25px] font-semibold tracking-[-0.84px] lg:text-[26px] lg:leading-[31px] lg:tracking-[-1px]",
                  oscuro ? "text-on-strong" : "text-foreground",
                )}
              >
                {miembro.nombre}
              </h3>
              {/* The list replaces the role line: it already says the same thing. */}
              {miembro.especialidades ? null : (
                <p
                  className={cn(
                    "text-[15px] leading-[21px] tracking-[-0.3px] lg:text-[17px] lg:leading-[24px]",
                    oscuro ? "text-on-strong/70" : "text-foreground/70",
                  )}
                >
                  {miembro.bio ?? miembro.especialidad}
                </p>
              )}

              {miembro.especialidades ? (
                <ul className="mt-3 flex list-none flex-col gap-[6px]">
                  {miembro.especialidades.map((area) => (
                    <li
                      key={area}
                      className={cn(
                        "flex items-center gap-[10px] text-[14px] leading-[19px] tracking-[-0.14px] lg:text-[17px] lg:leading-[24px] lg:tracking-[-0.2px]",
                        oscuro ? "text-on-strong/80" : "text-foreground/75",
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
                  "rounded-full px-3 py-[5px] text-[12px] leading-[17px] tracking-[-0.12px] lg:px-4 lg:py-[6px] lg:text-[14px] lg:leading-[20px]",
                  oscuro
                    ? "bg-on-strong/12 text-on-strong/80"
                    : "bg-foreground/[0.07] text-foreground/70",
                )}
              >
                {miembro.etiqueta}
              </span>

              {MOSTRAR_FICHA && miembro.ficha ? (
                <Link
                  href={`/equipo/${miembro.slug}`}
                  tabIndex={abierto ? undefined : -1}
                  className={cn(
                    "relative z-20 inline-flex items-center rounded-full px-4 py-[8px] text-[13px] leading-[19px] tracking-[-0.13px] lg:px-5 lg:py-[10px] lg:text-[15px] lg:leading-[21px]",
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
