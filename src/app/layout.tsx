import "@/styles/reset.scss";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navigation from "@/components/server/navigation";
import { Provider } from "@/context/Provider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
      <body className={notoSans.className}>
        <Provider>
          <Navigation />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
