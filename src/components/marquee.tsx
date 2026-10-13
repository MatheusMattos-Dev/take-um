const ITEMS = [
  "Roteiro persuasivo",
  "Atores reais",
  "Avatar IA",
  "Animação 3D",
  "Legendas dinâmicas",
  "Pronto para anúncio",
];

// Quatro cópias: a faixa anda -50%, então as duas metades precisam ser iguais
// e cada metade mais larga que a maior tela.
const COPIES = [0, 1, 2, 3];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-flash py-4 text-ink">
      <div className="flex w-max animate-marquee">
        {COPIES.map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center"
          >
            {ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-7 pr-7 font-display text-2xl font-extrabold uppercase leading-none tracking-[0.03em] sm:text-[1.7rem]"
              >
                {item}
                <span aria-hidden className="size-2.5 rounded-full bg-ink" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
