"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { NAV, whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { container } from "@/components/ui/section";

const CTA_MESSAGE = "Olá! Quero meu vídeo com a Take Um.";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // No topo o header é transparente e deixa o fundo do hero passar por trás;
  // ao rolar ele ganha o fundo com blur.
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  const solid = scrolled || open;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out-expo ${
        solid
          ? "border-paper/10 bg-ink/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`${container} flex h-16 items-center justify-between gap-4 lg:h-18`}
      >
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block py-2 font-medium text-paper/75 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-rec after:transition-transform after:duration-300 after:ease-out-expo hover:text-paper hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={whatsappLink(CTA_MESSAGE)} size="md">
              Quero meu vídeo
            </ButtonLink>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors duration-300 hover:border-paper/60 active:scale-[0.96] lg:hidden"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="absolute inset-x-0 top-full animate-rise border-b border-ink-line bg-ink px-4 pb-6 pt-1 [animation-duration:0.35s] sm:px-6 lg:hidden"
        >
          <ul className="divide-y divide-ink-line">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl font-extrabold uppercase leading-none text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 sm:hidden">
            <ButtonLink href={whatsappLink(CTA_MESSAGE)} className="w-full">
              Quero meu vídeo
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
