import type { ComponentProps } from "react";

type Variant = "rec" | "ink" | "paper" | "outline";
type Size = "md" | "lg";

// Retangular, como a barra de ação dos anúncios em vídeo.
const base =
  "inline-flex items-center justify-center gap-2.5 rounded-control font-semibold leading-none transition-[background-color,border-color] duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  rec: "bg-rec text-ink hover:bg-[#ff5047]",
  ink: "bg-ink text-paper hover:bg-[#2a2a2a]",
  paper: "bg-paper text-ink hover:bg-mist",
  outline: "border-[1.5px] border-current/35 hover:border-current",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-4 text-[0.9375rem]",
  lg: "h-14 px-6 text-[1.0625rem]",
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
