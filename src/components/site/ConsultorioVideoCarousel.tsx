"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

const VIDEOS = [
  "WhatsApp Video 2026-08-09 at 13.39.05.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.06.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.07.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.08.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.14.mp4",
  "WhatsApp Video 2026-08-09 at 13.39.15.mp4",
].map((filename) => `/consultorio/videos/${encodeURIComponent(filename)}`);

const VIDEOS_POR_VISTA = 4;

export function ConsultorioVideoCarousel() {
  const [pagina, setPagina] = useState(0);
  const totalPaginas = Math.ceil(VIDEOS.length / VIDEOS_POR_VISTA);
  const inicio = pagina * VIDEOS_POR_VISTA;
  const visibles = VIDEOS.slice(inicio, inicio + VIDEOS_POR_VISTA);

  return (
    <div className="w-full" aria-label="Videos del consultorio">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {visibles.map((src, indice) => (
          <VideoTile key={src} src={src} indice={inicio + indice} />
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setPagina((actual) => Math.max(0, actual - 1))}
            disabled={pagina === 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Videos anteriores"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() =>
              setPagina((actual) => Math.min(totalPaginas - 1, actual + 1))
            }
            disabled={pagina === totalPaginas - 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Videos siguientes"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

function VideoTile({ src, indice }: { src: string; indice: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-[16px] bg-card shadow-[var(--clireo-shadow)]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[14px] bg-foreground">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          controls
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label={`Video del consultorio ${indice + 1}`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:outline-none"
          aria-label={playing ? "Pausar video" : "Reproducir video"}
          aria-pressed={playing}
        >
          {playing ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </article>
  );
}
