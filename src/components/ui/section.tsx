import type { ReactNode } from "react";
import { CameraHud } from "@/components/ui/camera-hud";
import { RecDot } from "@/components/ui/rec-dot";

type Tone = "dark" | "light" | "dim";

const tones: Record<Tone, string> = {
  dark: "bg-ink text-paper",
  light: "bg-paper text-ink",
  dim: "bg-paper-dim text-ink",
};

export const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10";

// Fundo de pontinhos opcional: a cor acompanha o tom da seção. Pontos claros,
// de borda macia, que se dissolvem aos poucos em direção às quatro bordas.
const dotPatterns: Record<Tone, string> = {
  dark: "bg-[radial-gradient(circle,rgba(245,242,236,0.13)_1px,transparent_2px)]",
  light: "bg-[radial-gradient(circle,rgba(13,13,15,0.11)_1px,transparent_2px)]",
  dim: "bg-[radial-gradient(circle,rgba(13,13,15,0.13)_1px,transparent_2px)]",
};

export function Section({
  id,
  tone,
  dots = false,
  hud = false,
  className = "",
  children,
}: {
  id?: string;
  tone: Tone;
  dots?: boolean;
  hud?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative ${tones[tone]} ${dots ? "isolate" : ""} ${className}`}
    >
      {hud && <CameraHud />}
      {dots && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 dot-grid-fade bg-center bg-size-[32px_32px] ${dotPatterns[tone]}`}
        />
      )}
      <div className={`${container} py-16 sm:py-20 lg:py-28`}>{children}</div>
    </section>
  );
}

export function SectionLabel({
  tone = "dark",
  children,
}: {
  tone?: "dark" | "light";
  children: ReactNode;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-display text-[0.95rem] font-bold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-paper/70" : "text-ink/70"
      }`}
    >
      <RecDot />
      {children}
    </p>
  );
}

export function SectionTitle({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={`mt-5 text-balance font-display text-[clamp(2.5rem,6.2vw,4.75rem)] font-black uppercase leading-[0.92] ${className}`}
    >
      {children}
    </h2>
  );
}
