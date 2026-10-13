"use client";

import { useEffect, useRef } from "react";

const FPS = 24;

const pad = (value: number) => String(value).padStart(2, "0");

function format(seconds: number) {
  const frames = Math.floor(seconds * FPS);
  const total = Math.floor(frames / FPS);

  return [
    pad(Math.floor(total / 3600)),
    pad(Math.floor(total / 60) % 60),
    pad(total % 60),
    pad(frames % FPS),
  ].join(":");
}

// Timecode de câmera (hh:mm:ss:quadros). Escreve direto no DOM, sem
// re-renderizar, e só corre enquanto está visível na tela.
export function Timecode({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let startedAt = 0;
    let elapsed = 0;
    let last = "";

    const tick = (now: number) => {
      if (!startedAt) startedAt = now;
      const text = format(elapsed + (now - startedAt) / 1000);
      if (text !== last) {
        element.textContent = text;
        last = text;
      }
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !frame) {
        startedAt = 0;
        frame = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
        elapsed += startedAt ? (performance.now() - startedAt) / 1000 : 0;
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span ref={ref} className={className}>
      00:00:00:00
    </span>
  );
}
