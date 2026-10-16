import { PortfolioGallery } from "@/components/portfolio-gallery";
import { SectionTitle, container } from "@/components/ui/section";

// Formatos e portfólio juntos: cada formato é uma linha com os próprios
// vídeos, e a linha termina num espaço vazio para o vídeo do cliente.
export function Portfolio() {
  return (
    <section id="formatos" className="relative bg-ink text-paper">
      {/* âncora antiga, para links que ainda apontam para #portfolio */}
      <span id="portfolio" aria-hidden className="absolute top-0" />
      <div className={`${container} py-20 sm:py-24 lg:py-32`}>
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
          <SectionTitle className="max-w-[14ch]">
            Escolha o rosto da sua marca
          </SectionTitle>
          <p className="max-w-[40ch] text-[1.0625rem] leading-relaxed text-paper/70 lg:justify-self-end">
            Três formatos, com roteiro de vendas e edição em todos eles. Toque
            em um vídeo para assistir.
          </p>
        </div>

        <PortfolioGallery />
      </div>
    </section>
  );
}
