"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTr } from "@/i18n/LanguageProvider";
import { asset } from "@/components/sites/clireo-framer-website-a1614289/shared/assets";
import { GOOGLE_REVIEWS } from "@/content/testimonios";
import type { GoogleReview, GoogleReviewsPayload } from "@/lib/google-reviews";

function ReviewStars({
  rating,
  tone = "default",
}: {
  rating: number;
  tone?: "default" | "on-dark";
}) {
  const baseColor = tone === "on-dark" ? "text-white/35" : "text-foreground/15";
  const fillColor =
    tone === "on-dark" ? "text-accent-yellow" : "text-accent-yellow-strong";

  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`${rating} de 5 estrellas`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`relative inline-block h-[18px] w-[17px] text-[17px] leading-[18px] ${baseColor}`}
        >
          ★
          <span
            className={`absolute inset-y-0 left-0 overflow-hidden ${fillColor}`}
            style={{
              width: `${Math.max(0, Math.min(1, rating - index)) * 100}%`,
            }}
          >
            ★
          </span>
        </span>
      ))}
    </span>
  );
}

function Avatar({ review }: { review: GoogleReview }) {
  const initial = review.authorName.trim().charAt(0).toUpperCase() || "G";

  if (review.authorPhotoUrl) {
    return (
      <Image
        src={review.authorPhotoUrl}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-yellow/35 text-[13px] font-medium text-foreground">
      {initial}
    </span>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="flex min-h-[236px] w-[calc(100vw-40px)] shrink-0 flex-col gap-5 rounded-[13px] border border-foreground/10 bg-card px-5 py-5 shadow-[0_2px_7px_rgb(0_0_0/0.06)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--clireo-shadow-md)] sm:w-[320px] sm:px-6 lg:w-[360px]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar review={review} />
          <p className="truncate text-[16px] leading-[22px] font-medium tracking-[-0.32px] text-foreground">
            {review.authorName}
          </p>
        </div>
        <Image
          src={asset("lTrIrSG4mvwiX5mimYjf66IFlQ.png")}
          alt="Google"
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
        />
      </div>

      <div className="flex items-center gap-2">
        <ReviewStars rating={review.rating} />
        {review.relativeTime ? (
          <span className="text-[13px] leading-[18px] text-muted-foreground">
            {review.relativeTime}
          </span>
        ) : null}
      </div>

      <blockquote className="line-clamp-4 text-[15px] leading-[22px] font-normal tracking-[-0.3px] text-muted-foreground">
        “{review.text}”
      </blockquote>
    </article>
  );
}

export function GoogleReviews() {
  const tr = useTr();
  const [data, setData] = useState<GoogleReviewsPayload | null>(null);
  const [hasError, setHasError] = useState(false);
  const [requestVersion, setRequestVersion] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("No se pudieron cargar las reseñas.");
        setData((await response.json()) as GoogleReviewsPayload);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") setHasError(true);
      }
    }

    void loadReviews();
    return () => controller.abort();
  }, [requestVersion]);

  const scroll = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-[15px] leading-[22px] text-muted-foreground">
          Las reseñas se actualizan directamente desde Google.
        </p>
        <a
          href={GOOGLE_REVIEWS.perfil}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-[16px] leading-[23px] text-muted-foreground underline decoration-primary underline-offset-4"
        >
          Ver todas las opiniones verificadas en Google
        </a>
        <button
          type="button"
          onClick={() => {
            setHasError(false);
            setRequestVersion((version) => version + 1);
          }}
          className="rounded-full border border-foreground/15 px-4 py-2 text-[14px] text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Intentar de nuevo
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className="h-[236px] w-full animate-pulse motion-reduce:animate-none rounded-[13px] bg-foreground/5"
        aria-label={tr("Cargando reseñas de Google")}
      />
    );
  }

  return (
    <div className="flex w-full flex-col gap-7">
      <div className="relative flex min-h-10 items-center justify-center px-12 sm:px-14">
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-wrap items-center justify-center gap-3 text-center transition-opacity hover:opacity-70"
          aria-label={`Ver las reseñas de ${data.placeName} en Google`}
        >
          <span className="text-[32px] leading-none tracking-[-1.28px] text-foreground">
            {data.rating.toFixed(1)}
          </span>
          <ReviewStars rating={data.rating} />
          <span className="text-[15px] leading-[20px] font-medium text-foreground">
            {data.reviewCount} {tr("reseñas")}
          </span>
          <Image
            src={asset("lTrIrSG4mvwiX5mimYjf66IFlQ.png")}
            alt="Google"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </a>

        {data.reviews.length > 1 ? (
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="pointer-events-auto rounded-full border border-transparent bg-accent-coral p-2 text-accent-coral-foreground transition-colors hover:bg-accent-yellow"
              aria-label={tr("Ver reseñas anteriores")}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="pointer-events-auto rounded-full border border-transparent bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-accent-yellow"
              aria-label={tr("Ver más reseñas")}
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-live="polite"
      >
        {data.reviews.map((review, index) => (
          <div key={`${review.authorName}-${index}`} className="snap-start">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Compact proof mark for places where the full review rail is too heavy. */
export function GoogleRatingSummary({
  className = "",
}: {
  className?: string;
}) {
  const tr = useTr();
  const [data, setData] = useState<GoogleReviewsPayload | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/google-reviews", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("No se pudieron cargar las reseñas.");
        return response.json() as Promise<GoogleReviewsPayload>;
      })
      .then(setData)
      .catch((error) => {
        if ((error as DOMException).name !== "AbortError") setData(null);
      });

    return () => controller.abort();
  }, []);

  return (
    <a
      href={data?.profileUrl ?? GOOGLE_REVIEWS.perfil}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 transition-opacity hover:opacity-70 ${className}`}
      aria-label={tr("Ver calificación y reseñas reales en Google")}
    >
      {data ? (
        <>
          <span className="text-[20px] leading-none tracking-[-0.8px] text-current">
            {data.rating.toFixed(1)}
          </span>
          <ReviewStars rating={data.rating} tone="on-dark" />
          <span className="text-[15px] leading-[20px] text-current">
            {data.reviewCount} {tr("reseñas")}
          </span>
        </>
      ) : (
        <span
          aria-hidden
          className="h-5 w-[170px] animate-pulse rounded-full bg-current/20 motion-reduce:animate-none"
        />
      )}
      <Image
        src={asset("lTrIrSG4mvwiX5mimYjf66IFlQ.png")}
        alt="Google"
        width={22}
        height={22}
        className="h-[22px] w-[22px] shrink-0 object-contain"
      />
    </a>
  );
}
