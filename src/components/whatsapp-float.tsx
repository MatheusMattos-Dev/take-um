"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappLink } from "@/config/site";

// Fica escondido enquanto o botão principal do topo está na tela, para não
// cobrir justamente o botão que leva ao mesmo lugar.
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("[data-hero-cta]");
    if (!heroCta) return;

    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Take Um no WhatsApp"
      inert={!visible}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 grid size-14 place-items-center rounded-full bg-whats text-ink shadow-[0_14px_30px_-12px_rgba(13,13,15,0.75)] transition-[transform,opacity] duration-300 ease-out-expo hover:scale-110 active:scale-95 sm:right-6 sm:size-16 ${
        visible ? "" : "pointer-events-none translate-y-3 scale-75 opacity-0"
      }`}
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ring rounded-full border-2 border-whats"
      />
      <WhatsappLogo aria-hidden weight="fill" className="size-8 sm:size-9" />
    </a>
  );
}
