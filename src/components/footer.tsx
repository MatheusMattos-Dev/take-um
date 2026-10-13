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
    <footer className="relative isolate overflow-hidden bg-ink text-paper">
      {/* As mesmas linhas do topo fecham a página, subindo de baixo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(245,242,236,0.045)_1px,transparent_1px)] bg-center bg-size-[72px_100%] mask-[linear-gradient(0deg,black_0%,black_30%,transparent_95%)] lg:bg-size-[120px_100%]"
      />

      <div
        className={`${container} grid gap-8 pb-10 pt-2 lg:grid-cols-[1.25fr_1.5fr_auto] lg:items-start lg:gap-12 lg:pb-12`}
      >
        <div>
          <Logo />
          <p className="mt-3 max-w-[38ch] text-[0.95rem] leading-relaxed text-paper/60">
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
                  className="group inline-flex min-h-11 items-center font-medium text-paper/80 transition-colors duration-300 hover:text-paper lg:min-h-9"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-bottom-left bg-no-repeat transition-[background-size] duration-300 ease-out-expo group-hover:bg-size-[100%_1px]">
                    {item.label}
                  </span>
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
                className="grid size-11 place-items-center rounded-full border border-paper/20 text-paper/85 transition-[transform,border-color,color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-paper hover:text-paper active:scale-[0.96]"
              >
                <contact.icon aria-hidden weight="bold" className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={container}>
        <div className="flex flex-col gap-4 border-t border-ink-line pb-8 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pr-24 lg:pr-28">
          <p className="font-display text-[2rem] font-black uppercase leading-none sm:order-2 sm:text-2xl">
            Um take. <span className="text-rec">Uma venda.</span>
          </p>
          <p className="text-sm text-paper/60 sm:order-1">© 2026 Take Um</p>
          <a
            href="#topo"
            className="group inline-flex min-h-11 items-center gap-3 self-start font-display text-[1.05rem] font-extrabold uppercase leading-none tracking-[0.04em] text-paper/80 transition-colors duration-300 hover:text-paper sm:order-3 sm:self-auto"
          >
            Voltar ao topo
            <span className="grid size-9 place-items-center rounded-full border border-paper/25 transition-[transform,border-color] duration-300 ease-out-expo group-hover:-translate-y-1 group-hover:border-paper">
              <ArrowUp aria-hidden weight="bold" className="size-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
