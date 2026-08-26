import Image from "next/image";

import type { Tecnologia } from "@/content/clinica-contenido";
import { cn } from "@/lib/utils";

/**
 * Equipment cards: image, name, what it is for. The tints rotate through the
 * brand palette so a row of three never reads as one flat block.
 *
 * On hover the card lifts a little and the photograph pushes in behind its
 * own frame — two properties only, both composited, and `hover:` in Tailwind
 * v4 already sits behind `@media (hover: hover)`, so touch never fakes it.
 */
const TONOS = [
  "bg-accent-coral/15",
  "bg-secondary/15",
  "bg-accent-yellow/25",
  "bg-primary/12",
] as const;

export function TecnologiaCards({
  items,
  className,
}: {
  items: Tecnologia[];
  className?: string;
}) {
  return (
    <ul className={cn("grid w-full gap-6 lg:grid-cols-3", className)}>
      {items.map((t, index) => (
        <li
          key={t.nombre}
          className={cn(
            "group flex flex-col gap-3 rounded-[16px] p-[14px]",
            "transition-[translate,box-shadow] duration-300 ease-out motion-reduce:transition-none",
            "hover:-translate-y-[3px] hover:shadow-[var(--clireo-shadow-md)]",
            TONOS[index % TONOS.length],
          )}
        >
          <div className="relative h-[180px] w-full overflow-hidden rounded-[12px] bg-hero">
            <Image
              src={t.imagen.src}
              alt={t.imagen.alt}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className={cn(
                "object-cover transition-[scale] duration-[600ms] ease-out motion-reduce:transition-none",
                t.acercar
                  ? "scale-[1.35] group-hover:scale-[1.42]"
                  : "scale-100 group-hover:scale-[1.06]",
              )}
            />
          </div>

          <div className="flex flex-col gap-2 px-1 pb-1">
            <h3 className="text-[20px] leading-[26px] font-semibold tracking-[-0.8px] text-foreground">
              {t.nombre}
            </h3>
            <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
              {t.descripcion}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
