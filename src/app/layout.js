import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Yurdsoft | Ahmet Yurdal - Portfolyo",
  description: "Ahmet Yurdal - Yurdsoft bünyesinde geliştirilen modern web projeleri, tam yığın uygulamalar ve UI/UX tasarımları.",
  keywords: ["Yurdsoft", "Ahmet Yurdal", "Next.js", "Portfolio", "Web Developer", "React"],
  authors: [{ name: "Ahmet Yurdal" }],
  openGraph: {
    title: "Yurdsoft | Ahmet Yurdal - Portfolyo",
    description: "Ahmet Yurdal - Yurdsoft bünyesinde geliştirilen modern web projeleri, tam yığın uygulamalar ve UI/UX tasarımları.",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
        <div className="app-container">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
