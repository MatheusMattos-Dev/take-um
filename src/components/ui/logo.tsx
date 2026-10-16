import Image from "next/image";

// Logotipo oficial (bolinha vermelha + TAKE UM). Letras pretas para fundo
// claro (/logo-take-um-preto.webp) e brancas para fundo escuro
// (/logo-take-um.webp).
const FILES = {
  ink: "/logo-take-um-preto.webp",
  paper: "/logo-take-um.webp",
};

export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  return (
    <a
      href="#topo"
      aria-label="Take Um, voltar ao início"
      className="flex min-h-11 items-center"
    >
      <Image
        src={FILES[tone]}
        alt=""
        width={755}
        height={144}
        loading="eager"
        className="h-6 w-auto sm:h-[1.625rem]"
      />
    </a>
  );
}
