import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { PERSONA_DATA } from "../data/persona";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PERSONA_DATA.brand} (${PERSONA_DATA.name}) — Product Designer & Design Engineer`,
  description: PERSONA_DATA.oneLiner,
  keywords: [
    "Ajeet Singh",
    "CreativSingh",
    "Product Designer",
    "UX Designer",
    "Design Engineer",
    "PixelPeps",
    "Delhi Product Designer",
    "Figma Design Systems",
    "Next.js Tailwind Portfolio",
  ],
  authors: [{ name: PERSONA_DATA.name, url: PERSONA_DATA.website }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: `${PERSONA_DATA.brand} — Product Designer & Design Engineer`,
    description: PERSONA_DATA.oneLiner,
    url: "https://creativsingh.com",
    siteName: PERSONA_DATA.brand,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://creativsingh.com/OG.png",
        width: 1200,
        height: 630,
        alt: "CreativSingh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONA_DATA.brand} — Product Designer & Design Engineer`,
    description: PERSONA_DATA.oneLiner,
    creator: "@creativsingh",
    images: ["/OG.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col selection:bg-zinc-800 selection:text-zinc-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
