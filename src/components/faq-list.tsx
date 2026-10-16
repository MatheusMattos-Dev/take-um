"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

const QUESTIONS = [
  {
    question: "Qual é o prazo de entrega?",
    answer: "Até 48h úteis após a aprovação do roteiro.",
  },
  {
    question: "Preciso enviar o produto físico?",
    answer: "Não. Trabalhamos com fotos ou vídeos de referência do seu produto.",
  },
  {
    question: "Posso escolher o ator?",
    answer:
      "Sim. E nos pacotes de 5 ou 10 vídeos dá para misturar perfis diferentes.",
  },
  {
    question: "Posso pedir alterações?",
    answer:
      "Sim. Você aprova o roteiro antes da gravação e tem ajustes na edição.",
  },
  {
    question: "Os vídeos servem para anúncio?",
    answer:
      "Sim. São entregues em 9:16, com gancho, legendas e CTA, prontos para Reels, Stories, TikTok e Meta Ads.",
  },
  {
    question: "Como faço o pagamento?",
    answer: "Pelo WhatsApp, depois de escolher o pacote.",
  },
];

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-b border-ink/10">
      {QUESTIONS.map((item, index) => {
        const open = index === openIndex;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={`faq-pergunta-${index}`}
                aria-expanded={open}
                aria-controls={`faq-resposta-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
              >
                <span className="text-[1.1875rem] font-semibold leading-snug underline-offset-[0.2em] group-hover:underline sm:text-[1.375rem]">
                  {item.question}
                </span>
                <Plus
                  aria-hidden
                  weight="bold"
                  className={`size-6 shrink-0 transition-transform duration-300 ease-out-expo ${
                    open ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-resposta-${index}`}
              role="region"
              aria-labelledby={`faq-pergunta-${index}`}
              inert={!open}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-expo ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[58ch] pb-6 text-[1.0625rem] leading-relaxed text-graphite sm:pb-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
