# Take Um

Landing page de vendas da Take Um, produtora de vídeos verticais 9:16.
Feita com Next.js 16, Tailwind CSS 4 e Phosphor Icons.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## O que editar

Tudo o que muda com frequência está em [src/config/site.ts](src/config/site.ts):

1. `WHATSAPP_NUMBER`: número usado por todos os botões (55 + DDD + número).
2. `CHECKOUT`: link de pagamento de cada plano. Vazio, o botão abre o WhatsApp.
3. `HERO_VIDEO`: o loop sem som do topo (`public/hero/`). O título do site
   aparece por cima dele como legenda, então use um vídeo sem legenda própria.
4. `PORTFOLIO`: lista de vídeos. Cada item aceita `youtubeId` (YouTube Shorts)
   ou `arquivo` (um `.mp4` dentro de `public/`). Sem nenhum dos dois, o card
   aparece como "Em breve". O campo `tipo` define em qual formato (linha) o
   vídeo aparece.
5. `DEPOIMENTOS`: nome, foto, empresa e texto de cada cliente.
6. `PLANOS`: nome, quantidade de vídeos, preço por vídeo e itens de cada
   pacote. O menor preço também aparece no topo do site.
7. `CONTATO`: e-mail e Instagram do rodapé.

As perguntas ficam em [src/components/faq-list.tsx](src/components/faq-list.tsx).

## Visual

As cores e a fonte ficam em [src/app/globals.css](src/app/globals.css). A
página é preta e branca, como o logotipo; a cor vem dos vídeos. O vermelho
fica só no ponto e no botão principal, e o amarelo só na legenda do topo e no
marcador dos depoimentos.

## Vídeos pesados

Arquivos de câmera (`.mov`, 4K, HEVC) não devem ir direto para `public/`: são
grandes demais e não tocam em todos os navegadores. Os originais ficam em
`originais/` (fora do site e do git) e a versão para a web é gerada assim:

```bash
# vídeo do portfólio (720x1280, com som)
ffmpeg -i originais/MEU-VIDEO.mov -map_metadata -1 -vf "scale=720:1280,fps=30,format=yuv420p"   -c:v libx264 -crf 27 -c:a aac -b:a 96k -movflags +faststart public/MEU-VIDEO.mp4

# loop do topo (540x960, 12 s, sem som)
ffmpeg -t 12 -i originais/MEU-VIDEO.mov -an -map_metadata -1 -vf "scale=540:960,fps=30,format=yuv420p"   -c:v libx264 -crf 28 -movflags +faststart public/hero/MEU-VIDEO.mp4
```

## Capa de um vídeo novo

Para vídeos em arquivo, a capa é opcional. Para gerar uma a partir do vídeo:

```bash
ffmpeg -ss 2 -i public/MEU-VIDEO.mp4 -frames:v 1 -q:v 4 public/capas/MEU-VIDEO.jpg
```

Depois aponte o campo `capa` do item para `/capas/MEU-VIDEO.jpg`.
