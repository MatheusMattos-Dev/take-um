import Image from "next/image";

// Logotipo oficial (bolinha vermelha + TAKE UM), na versão de letras claras
// para fundo escuro: /public/logo-take-um.webp
export function Logo() {
  return (
    <a
      href="#topo"
      aria-label="Take Um, voltar ao início"
      className="flex min-h-11 items-center gap-2"
    >
      <Image
        src="/logo-take-um.webp"
        alt=""
        width={755}
        height={144}
        loading="eager"
        className="h-6 w-auto sm:h-7"
      />
      <span className="font-display text-sm font-bold leading-none text-paper/45">
        [01]
      </span>
    </a>
  );
}
