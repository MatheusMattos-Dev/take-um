import { MENSAGENS, whatsappLink } from "@/config/site";
import { container } from "@/components/ui/section";

export function AnnouncementBar() {
  return (
    <a
      href={whatsappLink(MENSAGENS.agenda)}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-ink text-paper focus-visible:-outline-offset-4"
    >
      <span
        className={`${container} flex min-h-10 items-center justify-center gap-2.5 py-2 text-center text-[0.875rem] leading-snug`}
      >
        <span aria-hidden className="size-2 shrink-0 rounded-full bg-rec" />
        {/* versão curta no celular, para caber em uma linha */}
        <span className="sm:hidden">
          Agenda desta semana aberta.{" "}
          <span className="underline underline-offset-2">Garanta seu horário</span>
        </span>
        <span className="hidden sm:inline">
          Agenda de gravação desta semana aberta.{" "}
          <span className="underline underline-offset-2">
            Garanta seu horário no WhatsApp
          </span>
        </span>
      </span>
    </a>
  );
}
