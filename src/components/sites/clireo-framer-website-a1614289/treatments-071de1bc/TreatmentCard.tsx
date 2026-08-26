import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { asset } from "../shared/assets";

export interface TreatmentCardData {
  title: string;
  description: string;
  /** Absolute path under /public, or a template asset filename. */
  image: string;
  /** Optional template icon filename shown in the translucent badge. */
  icon?: string;
  href: string;
}

/**
 * The treatment tile used both on /tratamientos and in the "related" rail of a
 * detail page: photo with a bottom scrim, a translucent icon badge, then the
 * title and one line of copy underneath the media block.
 */
export function TreatmentCard({
  card,
  mediaClassName,
}: {
  card: TreatmentCardData;
  mediaClassName?: string;
}) {
  const src = card.image.startsWith("/") ? card.image : asset(card.image);

  return (
    <Link href={card.href} className="group flex h-full flex-col gap-[14px]">
      <div
        className={cn(
          "relative h-[240px] w-full overflow-hidden rounded-[12px] bg-hero sm:h-[300px]",
          mediaClassName,
        )}
      >
        <Image
          src={src}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[114px]"
          style={{
            background:
              "linear-gradient(transparent 1.57%, color-mix(in srgb, var(--hero) 60%, transparent) 69.46%)",
          }}
        />
        {card.icon ? (
          <span className="absolute bottom-6 left-6 flex h-[50px] w-[50px] items-center justify-center rounded-[3px] bg-white/10 backdrop-blur-[2px]">
            <Image
              src={asset(card.icon)}
              alt=""
              width={28}
              height={31}
              className="h-[31px] w-[28px] brightness-0 invert"
            />
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-[5px] px-1">
        <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground sm:min-h-[62px]">
          {card.title}
        </h3>
        <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-foreground/70">
          {card.description}
        </p>
      </div>
    </Link>
  );
}
