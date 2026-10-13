import type { ComponentProps } from "react";

type Variant = "rec" | "ink" | "outline-dark" | "outline-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-display font-extrabold uppercase leading-none tracking-[0.04em] transition-[transform,background-color,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  rec: "bg-rec text-ink hover:bg-[#ff5449]",
  ink: "bg-ink text-paper hover:bg-ink-line",
  "outline-dark":
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper/5",
  "outline-light":
    "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[1.05rem]",
  lg: "h-14 px-7 text-xl",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  href,
  variant = "rec",
  size = "lg",
  className = "",
  ...props
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
