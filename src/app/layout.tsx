import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { ScrollObserver } from "@/components/ui/ScrollObserver";

// Premium fonts: Outfit (headings) + DM Sans (body) - Grade A+ Typography
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

import type { Viewport } from "next";

// Next.js 15: themeColor must be in viewport, not metadata
export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://waveia.fr"),
  title: "Waveia | Agence Web Premium Côte Basque - Biarritz, Bayonne, Anglet",
  description:
    "Agence web innovante du Pays Basque. Création de sites internet, SEO et communication digitale. Qualité premium, tarifs disruptifs grâce à l'IA.",
  keywords:
    "agence web biarritz, création site internet bayonne, agence digitale pays basque, seo anglet, développement web côte basque",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "WaveIA",
    startupImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icon-512.png",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Waveia | Agence Web Premium Côte Basque",
    description:
      "Agence web innovante du Pays Basque. Création de sites internet, SEO et communication digitale.",
    url: "https://waveia.fr",
    siteName: "Waveia",
    locale: "fr_FR",
    type: "website",
  },
};

import { MotionProvider } from "@/components/providers/MotionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fr" className={`${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {
                document.addEventListener('DOMContentLoaded', function() {
                  document.documentElement.classList.add('hydrated');
                });
                window.addEventListener('load', function() {
                  document.documentElement.classList.add('hydrated');
                });
              })();`,
            }}
          />
        </head>
        <body className="antialiased font-sans">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <MotionProvider>
              {/* Skip link for keyboard navigation */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded-lg focus:outline-none"
              >
                Aller au contenu principal
              </a>
              <SmoothScroll />
              <ScrollObserver />
              <Navigation />
              {/* tabIndex=-1 lets the skip link move *focus* (not just scroll)
                  into the main region for keyboard/SR users — WCAG 2.4.1 */}
              <main id="main-content" tabIndex={-1} className="outline-none">{children}</main>
              <StickyMobileCTA />
              <Footer />
              <Analytics />
              <SpeedInsights />
              <LocalBusinessSchema />
            </MotionProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
