import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/lib/use-theme";

const notoSans = Noto_Sans({ variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slothcord - All the perks, none of the paywall",
  description: "Crystal-clear voice, HD streaming, custom profiles. Everything Discord locks behind Nitro, yours for free.",
  keywords: ["discord alternative", "free voice chat", "gaming chat", "hd streaming", "free discord nitro"],
  authors: [{ name: "Slothcord Team" }],
  openGraph: {
    title: "Slothcord - All the perks, none of the paywall",
    description: "Crystal-clear voice, HD streaming, custom profiles. Everything Discord locks behind Nitro, yours for free.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slothcord - All the perks, none of the paywall",
    description: "Crystal-clear voice, HD streaming, custom profiles. Everything Discord locks behind Nitro, yours for free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable} suppressHydrationWarning>
      <head>
        {/* Inline script to set theme before hydration - prevents flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
