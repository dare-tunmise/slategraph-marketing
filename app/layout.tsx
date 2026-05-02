import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono, Playfair_Display, Inter, Lora, Roboto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://slategraph.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060D28",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Slategraph: Topics Discovery Engine for Content Strategy",
    template: "%s | Slategraph",
  },
  description:
    "Turn one URL into a full content strategy with Slategraph's AI-powered Topics Discovery Engine. Map your industry as an interconnected topic graph, detect content gaps, and generate ready-to-publish SEO content.",
  keywords: [
    "SEO content strategy",
    "topic discovery engine",
    "content gap analysis",
    "topic graph builder",
    "AI content strategy",
    "topical authority",
    "SEO tool",
    "content marketing",
    "keyword research alternative",
    "semantic SEO",
  ],
  authors: [{ name: "Slategraph" }],
  creator: "Slategraph",
  publisher: "Slategraph",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Slategraph",
    title: "Slategraph: Topics Discovery Engine for Content Strategy",
    description:
      "Map your industry as a network of interconnected concepts. Turn one URL into a full content strategy with AI-powered topic discovery.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Slategraph Topics Discovery Engine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slategraph: Topics Discovery Engine",
    description:
      "Turn one URL into a full content strategy. Map industry topics as an interconnected graph and generate SEO content at scale.",
    images: ["/og-image.png"],
    creator: "@slategraph",
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} ${lora.variable} ${robotoSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Slategraph",
              alternateName: ["SlateGraph", "slategraph"],
              url: siteUrl,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Slategraph",
              url: siteUrl,
              logo: `${siteUrl}/icons/slategraph-logo.png`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Slategraph",
              applicationCategory: "BusinessApplication",
              description:
                "AI-powered Topics Discovery Engine that maps your industry as a network of interconnected concepts to generate a full content strategy from one URL.",
              operatingSystem: "Web",
              url: siteUrl,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start" },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
