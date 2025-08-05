import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movies",
  description: "Obtenha informações sobre filmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
