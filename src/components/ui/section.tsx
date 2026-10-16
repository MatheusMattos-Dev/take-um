import type { ReactNode } from "react";

type Tone = "paper" | "mist" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  ink: "bg-ink text-paper",
};

export const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10";

export function Section({
  id,
  tone,
  className = "",
  children,
}: {
  id?: string;
  tone: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className={`${container} py-20 sm:py-24 lg:py-32`}>{children}</div>
    </section>
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
      className={`type-display text-[clamp(2.25rem,4.6vw,4rem)] ${className}`}
    >
      {children}
    </h2>
  );
}
