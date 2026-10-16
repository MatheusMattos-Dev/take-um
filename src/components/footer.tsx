import {
  ArrowUp,
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { CONTATO, NAV, whatsappLink } from "@/config/site";
import { Logo } from "@/components/ui/logo";
import { container } from "@/components/ui/section";

const CONTACTS = [
  {
    label: "WhatsApp",
    href: whatsappLink(),
    icon: WhatsappLogo,
    external: true,
  },
  {
    label: `Instagram @${CONTATO.instagram}`,
    href: `https://www.instagram.com/${CONTATO.instagram}`,
    icon: InstagramLogo,
    external: true,
  },
  {
    label: `E-mail ${CONTATO.email}`,
    href: `mailto:${CONTATO.email}`,
    icon: EnvelopeSimple,
    external: false,
  },
];

// Rodapé compacto, no mesmo fundo da chamada final: marca, navegação em
// linha, contatos em ícones e a barra com o slogan.
export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className={container}>
        <div className="grid gap-8 border-t border-paper/15 pb-10 pt-10 lg:grid-cols-[1.25fr_1.5fr_auto] lg:items-start lg:gap-12">
          <div>
            <Logo tone="paper" />
            <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-paper/60">
              Produtora de vídeos curtos verticais para anúncios e redes
              sociais, com atores reais, avatar IA e animação 3D.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:pt-1.5">
            <ul className="flex flex-wrap gap-x-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center font-medium text-paper/80 underline-offset-[0.3em] transition-colors duration-200 hover:text-paper hover:underline lg:min-h-9"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2.5">
            {CONTACTS.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  aria-label={contact.label}
                  title={contact.label}
                  className="grid size-11 place-items-center rounded-full bg-paper/10 text-paper transition-colors duration-200 hover:bg-paper/20 active:scale-[0.96]"
                >
                  <contact.icon aria-hidden weight="bold" className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/15 pb-8 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pr-24 lg:pr-28">
          <p className="type-display text-[1.75rem] sm:order-2 sm:text-[1.375rem]">
            Um take. Uma venda.
          </p>
          <p className="text-sm text-paper/60 sm:order-1">© 2026 Take Um</p>
          <a
            href="#topo"
            className="inline-flex min-h-11 items-center gap-2.5 self-start font-semibold text-paper/80 transition-colors duration-200 hover:text-paper sm:order-3 sm:self-auto"
          >
            Voltar ao topo
            <ArrowUp aria-hidden weight="bold" className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
