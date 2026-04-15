import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The Next Move | Agencia de Marketing Digital de Alto Impacto",
  description:
    "Agencia de marketing digital especializada en resultados reales para médicos, abogados, coaches e infoproductores. Estrategia, contenido, campañas y automatización con IA.",
  keywords:
    "marketing digital, agencia marketing, meta ads, tiktok ads, marca personal, automatización IA, marketing médicos, marketing abogados",
  openGraph: {
    title: "The Next Move | Marketing Digital de Alto Impacto",
    description:
      "Transformamos tu presencia digital en resultados reales. Estrategia, contenido, campañas y automatización.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${poppins.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
