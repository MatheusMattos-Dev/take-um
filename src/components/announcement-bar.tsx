import { FilmSlate } from "@phosphor-icons/react/ssr";
import { MENSAGENS, whatsappLink } from "@/config/site";
import { container } from "@/components/ui/section";

export function AnnouncementBar() {
  return (
    <a
      href={whatsappLink(MENSAGENS.agenda)}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-rec text-ink focus-visible:outline-ink focus-visible:-outline-offset-4"
    >
      <span
        className={`${container} flex min-h-11 items-center justify-center gap-2 py-2 text-center text-[0.8125rem] font-semibold leading-snug sm:gap-2.5 sm:text-sm`}
      >
        <FilmSlate aria-hidden weight="fill" className="size-[1.1rem] shrink-0" />
        {/* versão curta no celular, para caber em uma linha */}
        <span className="sm:hidden">
          Agenda da semana aberta: garanta seu horário
        </span>
        <span className="hidden sm:inline">
          Agenda de gravação desta semana aberta: chame no WhatsApp e garanta
          seu horário
        </span>
      </span>
    </a>
  );
}
