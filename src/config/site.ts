// =====================================================================
// 1) WHATSAPP
// Troque só aqui. Formato: 55 + DDD + número, sem espaços nem símbolos.
// Todos os botões do site usam esta constante.
// =====================================================================
// (55) 99169-3698: código do país 55 + DDD 55 + número.
export const WHATSAPP_NUMBER = "5555991693698";

// =====================================================================
// 2) LINKS DE CHECKOUT DOS PLANOS
// Com link, o botão do plano abre o checkout. Vazio (""), o botão abre o
// WhatsApp com a mensagem do pacote já escrita.
// =====================================================================
// Checkout do Take Único, guardado para quando voltar a ser usado:
//   https://pay.wiapy.com/xzG2kHCjLwh7
export const CHECKOUT = {
  unico: "https://pay.cakto.com.br/ezscwrd_1208982",
  pro: "https://pay.cakto.com.br/3982bro_1209048",
  escala: "https://pay.cakto.com.br/34yq5yf_1209081",
};

// =====================================================================
// 3) VÍDEOS DO TOPO (os dois celulares ao lado do título)
// Loops curtos e sem som, dentro de /public/hero. Apague um item para o
// celular voltar ao visual sem vídeo.
// legenda: true mostra a legenda animada do site por cima; use false em
//   vídeos que já têm legenda própria.
// =====================================================================
export type HeroVideoItem = {
  arquivo: string;
  capa?: string;
  legenda?: boolean;
};

export const HERO_VIDEOS: HeroVideoItem[] = [
  {
    arquivo: "/hero/VIDEO-INICIAL.mp4",
    capa: "/hero/VIDEO-INICIAL.jpg",
    legenda: true,
  },
  {
    arquivo: "/hero/VIDEO-INICIAL-01.mp4",
    capa: "/hero/VIDEO-INICIAL-01.jpg",
    legenda: false,
  },
];

// =====================================================================
// 4) VÍDEOS DO PORTFÓLIO
// Cada item vira um card. Para colocar um vídeo, preencha UM dos campos:
//   youtubeId: ID do YouTube Shorts (o trecho depois de /shorts/ no link)
//   arquivo:   caminho de um .mp4 dentro da pasta /public (ex.: "/IA-01.mp4")
// Sem nenhum dos dois, o card aparece como espaço reservado ("Em breve").
// capa (opcional): imagem do card para vídeos em arquivo. Sem ela, o card
//   mostra o início do próprio vídeo.
// tipo: "atores" | "avatar" | "3d" (é o que os filtros usam)
// =====================================================================
export type VideoTipo = "atores" | "avatar" | "3d";

export type PortfolioVideo = {
  tipo: VideoTipo;
  titulo: string;
  subtitulo: string;
  youtubeId?: string;
  arquivo?: string;
  capa?: string;
};

export const PORTFOLIO: PortfolioVideo[] = [
  {
    tipo: "atores",
    titulo: "Anúncio editado com legendas",
    subtitulo: "Perfil 02 · Atriz 20–30 anos",
    arquivo: "/VIDEO-INICIAL-01.mp4",
    capa: "/capas/VIDEO-INICIAL-01.jpg",
  },
  {
    tipo: "avatar",
    titulo: "Especialista de jaleco",
    subtitulo: "Avatar 01 · Homem 30–40 anos",
    arquivo: "/IA-01.mp4",
    capa: "/capas/IA-01.jpg",
  },
  {
    tipo: "3d",
    titulo: "Tênis falante",
    subtitulo: "3D 01 · Mascote de produto",
    arquivo: "/IA-01-3D.mp4",
    capa: "/capas/IA-01-3D.jpg",
  },
  {
    tipo: "atores",
    titulo: "Apresentadora em close",
    subtitulo: "Perfil 01 · Atriz 25–35 anos",
    arquivo: "/VIDEO-REAL.mp4",
    capa: "/capas/VIDEO-REAL.jpg",
  },
  {
    tipo: "avatar",
    titulo: "Apresentador na rua",
    subtitulo: "Avatar 02 · Homem 25–35 anos",
    arquivo: "/IA-02.mp4",
    capa: "/capas/IA-02.jpg",
  },
  {
    tipo: "atores",
    titulo: "Apresentadora em casa",
    subtitulo: "Perfil 02 · Atriz 20–30 anos",
    arquivo: "/VIDEO-REAL-02.mp4",
    capa: "/capas/VIDEO-REAL-02.jpg",
  },
  {
    tipo: "3d",
    titulo: "Doutora animada",
    subtitulo: "3D 02 · Personagem apresentadora",
    arquivo: "/IA-02-3D.mp4",
    capa: "/capas/IA-02-3D.jpg",
  },
  {
    tipo: "atores",
    titulo: "Papo direto",
    subtitulo: "Perfil 03 · Ator 25–35 anos",
    arquivo: "/VIDEO-REAL-03.mp4",
    capa: "/capas/VIDEO-REAL-03.jpg",
  },
  {
    tipo: "atores",
    titulo: "Demonstração com celular",
    subtitulo: "Perfil 02 · Atriz 20–30 anos",
    arquivo: "/VIDEO-REAL-05.mp4",
    capa: "/capas/VIDEO-REAL-05.jpg",
  },
  {
    tipo: "avatar",
    titulo: "Explicação direta",
    subtitulo: "Avatar 03 · Homem 25–35 anos",
    arquivo: "/IA-03.mp4",
    capa: "/capas/IA-03.jpg",
  },
  {
    tipo: "3d",
    titulo: "Boné falante",
    subtitulo: "3D 03 · Mascote de produto",
    arquivo: "/IA-03-3D.mp4",
    capa: "/capas/IA-03-3D.jpg",
  },
  {
    tipo: "atores",
    titulo: "Conversa no sofá",
    subtitulo: "Perfil 02 · Atriz 20–30 anos",
    arquivo: "/VIDEO-REAL-04.mp4",
    capa: "/capas/VIDEO-REAL-04.jpg",
  },
];

// =====================================================================
// 5) DEPOIMENTOS
// Um item por cliente. O primeiro da lista aparece em destaque.
// destaque: trecho do texto que ganha o marcador amarelo. Precisa ser
//   idêntico a um pedaço do texto.
// formato (opcional): "atores" | "avatar" | "3d", vira uma etiqueta no card.
// foto: imagem dentro de /public. foco: ponto da foto (horizontal vertical)
//   que fica no centro do recorte; ajuste se o rosto ficar cortado.
// =====================================================================
export type Depoimento = {
  nome: string;
  origem: string;
  texto: string;
  destaque?: string;
  formato?: VideoTipo;
  foto?: string;
  foco?: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Joana Trindade",
    origem: "Essência Boutique · Moda feminina",
    texto:
      "Eu não sabia por onde começar com os vídeos da minha empresa. A equipe me ajudou com o roteiro e cuidou de toda a produção. Ficou profissional e com a cara do meu negócio!",
    destaque: "Ficou profissional e com a cara do meu negócio!",
    foto: "/joana-trindade.jpg",
    foco: "36% 25%",
  },
  {
    nome: "Julia Perufo",
    origem: "Bella Pele Estética · Clínica de estética",
    texto:
      "Queria divulgar meus serviços, mas não me sentia à vontade para aparecer nos vídeos. Escolhi o formato com avatar e gostei muito do resultado. Consegui resolver tudo pelo WhatsApp, sem complicação.",
    destaque: "gostei muito do resultado",
    formato: "avatar",
    foto: "/julia-perufo.jpg",
    foco: "47% 21%",
  },
  {
    nome: "Marcos Augusto",
    origem: "Augusto Cafés · Cafeteria e cafés especiais",
    texto:
      "Precisava de um jeito diferente de apresentar meu produto e escolhi a animação 3D. Gostei do cuidado com os detalhes e de como a ideia ganhou vida. O vídeo ficou do jeito que eu imaginava!",
    destaque: "O vídeo ficou do jeito que eu imaginava!",
    formato: "3d",
    foto: "/marcos-augusto.jpg",
    foco: "56% 17%",
  },
];

// =====================================================================
// 6) CONTATO (rodapé)
// =====================================================================
export const CONTATO = {
  email: "takeum@gmail.com.br",
  instagram: "seuinstagram", // sem o @
};

export const TIPO_LABEL: Record<VideoTipo, string> = {
  atores: "Atores reais",
  avatar: "Avatar IA",
  "3d": "Animação 3D",
};

export const NAV = [
  { href: "#formatos", label: "Formatos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export const MENSAGENS = {
  padrao: "Olá! Quero criar um vídeo com a Take Um.",
  agenda: "Olá! Quero garantir um horário na agenda de gravação desta semana.",
  perfis: "Olá! Quero ver mais perfis do elenco da Take Um.",
  duvida: "Olá! Tenho uma dúvida sobre os vídeos da Take Um.",
};

export function whatsappLink(mensagem: string = MENSAGENS.padrao) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}
