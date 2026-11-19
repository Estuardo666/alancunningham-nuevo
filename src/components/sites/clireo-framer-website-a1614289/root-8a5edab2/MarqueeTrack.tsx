"use client";

import { useEffect, useRef, type ReactNode } from "react";

const BASE_RATE = 1;
const HOVER_RATE = 0.25;

/**
 * Marquee track: runs the CSS animation and eases its playback rate down
 * while hovered (no jump, unlike changing animation-duration).
 */
export function MarqueeTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef(BASE_RATE);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function step() {
    const anim = ref.current?.getAnimations()[0];
    if (!anim) return;
    const next = anim.playbackRate + (target.current - anim.playbackRate) * 0.08;
    anim.playbackRate = Math.abs(next - target.current) < 0.005 ? target.current : next;
    if (anim.playbackRate !== target.current) {
      frame.current = requestAnimationFrame(step);
    }
  }

  function setTarget(rate: number) {
    target.current = rate;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(step);
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => setTarget(HOVER_RATE)}
      onMouseLeave={() => setTarget(BASE_RATE)}
      className="flex w-max animate-[clireo-marquee_70s_linear_infinite] items-center gap-[60px] motion-reduce:animate-none"
    >
      {children}
    </div>
  );
}
