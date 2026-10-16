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
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 grid size-14 place-items-center rounded-full bg-whats text-ink shadow-[0_10px_24px_-10px_rgb(0_0_0/0.55)] transition-[transform,opacity] duration-300 ease-out-expo hover:scale-105 active:scale-95 sm:right-6 sm:size-16 ${
        visible ? "" : "pointer-events-none translate-y-3 scale-75 opacity-0"
      }`}
    >
      <WhatsappLogo aria-hidden weight="fill" className="size-8 sm:size-9" />
    </a>
  );
}
