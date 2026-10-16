import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// Uma família só: a Archivo variável, com o eixo de largura. Os títulos usam
// a versão larga e pesada (as legendas dos vídeos); o texto, a largura normal.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const title = "Take Um | Vídeos que vendem para sua marca";
const description =
  "Vídeos verticais 9:16 para anúncios e redes sociais, com atores reais, avatar IA e animação 3D. Roteiro, gravação e edição prontos para publicar.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Take Um",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
