import type { Metadata } from "next";
import { IBM_Plex_Mono, Oswald } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TechnicalBackdrop } from "@/components/TechnicalBackdrop";
import { PageAmbientScene } from "@/components/scene/PageAmbientScene";
import { SiteIntro } from "@/components/intro/SiteIntro";

const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "optional",
});

const bodyFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "James Boutros | Electrical Engineering Portfolio",
  description:
    "Electrical engineering, embedded systems, and software projects by James Boutros.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <TechnicalBackdrop />
        <PageAmbientScene />
        <SiteIntro />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ScrollProgress />
        <NavBar />
        <main id="main-content" className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
