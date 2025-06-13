import type React from "react";
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import * as layoutStyles from "@/styles/layouts/layout.css";
import { defaultTheme } from "@/styles/tokens/themes/defaultTheme.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "AEGIS LLP - Professional Partnership Excellence",
  description:
    "AEGIS Limited Liability Partnership - Connecting innovation, trust, and collaboration across member companies.",
  keywords: "LLP, Limited Liability Partnership, AEGIS, Japanese business, corporate partnership",
  authors: [{ name: "AEGIS LLP" }],
  openGraph: {
    title: "AEGIS LLP - Professional Partnership Excellence",
    description:
      "AEGIS Limited Liability Partnership - Connecting innovation, trust, and collaboration across member companies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${defaultTheme}`}>
      <body className={layoutStyles.body}>
        <Header />
        <main style={{ paddingTop: '3rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
