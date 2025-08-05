import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SplashCursor from "../yes/SplashCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "diorsolutions | JavaScript Software Engineer Portfolio",
  description:
    "Portfolio of Dior Olimov, a frontend developer mastering React, Next.js, and creative web interfaces.",
  keywords: [
    "JavaScript",
    "React",
    "Next.js",
    "Frontend Developer",
    "diorsolutions",
  ],
  openGraph: {
    title: "diorsolutions Portfolio",
    description: "Explore the portfolio of a passionate JS software engineer.",
    url: "https://diorsolutions.site",
    siteName: "diorsolutions",
    images: [
      {
        url: "https://diorsolutions.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "diorsolutions Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "diorsolutions Portfolio",
    description: "Creative JavaScript Software Engineer’s portfolio",
    images: ["https://diorsolutions.site/og-image.jpg"],
  },
  metadataBase: new URL("https://diorsolutions.site"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <SplashCursor /> */}
        {children}
      </body>
    </html>
  );
}
