/**
 * Progressive (layered) blur — the CSS equivalent of the Framer
 * `ProgressiveBlur` module. A single `backdrop-filter` blurs uniformly; here we
 * stack N layers, each blurring twice as much as the one below it and each
 * masked to a narrower band, so the blur ramps up smoothly toward the edge.
 *
 * Purely decorative: always `aria-hidden` and `pointer-events-none`.
 */
export function ProgressiveBlur({
  layers = 5,
  blur = 12,
  className = "",
  direction = "bottom",
}: {
  /** Number of stacked layers. More layers = smoother ramp, more compositing. */
  layers?: number;
  /** Blur radius of the strongest layer, in px. */
  blur?: number;
  /** Sizing/positioning of the wrapper (height, inset, rounding…). */
  className?: string;
  direction?: "bottom" | "top";
}) {
  const stops = Array.from({ length: layers }, (_, i) => i);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute overflow-hidden ${className}`}
    >
      {stops.map((i) => {
        // Each layer covers the band from `start` to the edge, with a soft
        // ramp so neighbouring layers cross-fade instead of banding.
        const start = (i / layers) * 100;
        const mid = ((i + 1) / layers) * 100;
        const angle = direction === "bottom" ? "to top" : "to bottom";
        const mask =
          `linear-gradient(${angle}, rgba(0,0,0,1) ${100 - mid}%, ` +
          `rgba(0,0,0,0) ${100 - start}%)`;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${(blur / 2 ** (layers - 1 - i)).toFixed(2)}px)`,
              WebkitBackdropFilter: `blur(${(blur / 2 ** (layers - 1 - i)).toFixed(2)}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
