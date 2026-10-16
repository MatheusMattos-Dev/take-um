"use client";

import { useEffect, useState } from "react";
import { List, WhatsappLogo, X } from "@phosphor-icons/react";
import { NAV, whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { container } from "@/components/ui/section";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper text-ink">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-[0.9375rem] font-medium text-graphite underline-offset-[0.35em] transition-colors duration-200 hover:text-ink hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={whatsappLink()}
            size="md"
            className="max-sm:hidden"
          >
            <WhatsappLogo aria-hidden weight="fill" className="size-5" />
            Pedir no WhatsApp
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-control text-ink transition-colors duration-200 hover:bg-mist active:scale-[0.96] lg:hidden"
          >
            {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper px-4 pb-6 sm:px-6 lg:hidden"
        >
          <ul className="divide-y divide-ink/10">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="type-display block py-4 text-[1.75rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={whatsappLink()} className="mt-4 w-full sm:hidden">
            <WhatsappLogo aria-hidden weight="fill" className="size-6" />
            Pedir meu vídeo no WhatsApp
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
