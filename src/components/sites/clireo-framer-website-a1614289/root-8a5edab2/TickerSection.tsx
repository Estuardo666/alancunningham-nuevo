import { SparkleIcon } from "../shared/icons";

import { PILARES } from "@/content/tratamientos";

const ITEMS = PILARES.map((pilar) => pilar.nombre);
const SPARKLE_COLORS = [
  "text-accent-coral",
  "text-accent-yellow",
  "text-secondary",
  "text-brand",
] as const;

/**
 * Infinite horizontal marquee. The list is rendered twice inside a track that
 * translates by -50%, so the loop is seamless; the live site repeats the five
 * items three times for the same reason.
 */
export function TickerSection() {
  return (
    <section
      aria-label="Áreas de tratamiento"
      className="flex justify-center overflow-hidden bg-surface-secondary px-5 pt-10 pb-12 lg:px-8 lg:pt-[60px] lg:pb-[70px]"
    >
      <div className="w-full max-w-[1400px] overflow-hidden">
        <div className="flex w-max animate-[clireo-marquee_28s_linear_infinite] items-center gap-[60px] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-[60px]"
            >
              {ITEMS.map((item, index) => (
                <li key={item} className="flex items-center gap-[60px] px-2">
                  <span className="block py-2 text-[40px] leading-[1.1] tracking-[-2.4px] whitespace-nowrap text-foreground lg:text-[74px] lg:tracking-[-4.588px]">
                    {item}
                  </span>
                  <SparkleIcon
                    className={`h-8 w-8 shrink-0 lg:h-11 lg:w-11 ${SPARKLE_COLORS[index % SPARKLE_COLORS.length]}`}
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
