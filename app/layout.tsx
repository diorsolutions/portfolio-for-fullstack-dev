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
  title: {
    default:
      "Dior Olimov | diorsolutions - Fullstack Software Engineer Portfolio",
    template: "%s | diorsolutions - Professional Web Development",
  },
  description:
    "Dior Olimov (diorsolutions) - Expert Fullstack Software Engineer specializing in React.js, Next.js, Node.js, TypeScript, and modern web development. Creating innovative digital solutions with cutting-edge frontend and backend technologies.",
  keywords: [
    // Core identity
    "diorsolutions",
    "Dior Olimov",
    "Dior Olimov portfolio",
    "diorsolutions portfolio",

    // Primary skills
    "Fullstack Developer",
    "Fullstack Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",

    // Technologies - Frontend
    "React.js Developer",
    "Next.js Expert",
    "Next.js 14",
    "React Developer",
    "Vue.js Developer",
    "Angular Developer",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SASS",
    "Bootstrap",
    "Material-UI",
    "Chakra UI",

    // Technologies - Backend
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Prisma",
    "GraphQL",
    "REST API",
    "API Development",

    // Modern Technologies
    "TypeScript Expert",
    "JavaScript ES6+",
    "PWA Development",
    "Serverless Architecture",
    "Microservices",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",

    // Specialized Skills
    "UI/UX Design",
    "Responsive Web Design",
    "Mobile-First Development",
    "Cross-Browser Compatibility",
    "Web Performance Optimization",
    "SEO Optimization",
    "Accessibility (a11y)",

    // Location & Services
    "Uzbekistan Developer",
    "Tashkent Developer",
    "Remote Developer",
    "Freelance Developer",
    "Custom Web Applications",
    "E-commerce Development",
    "SaaS Development",
    "Web Application Development",

    // Trending Keywords
    "React 18",
    "Next.js App Router",
    "Server Components",
    "AI Integration",
    "ChatGPT Integration",
    "Modern Web Development",
    "JAMstack",
    "Headless CMS",
    "Static Site Generation",
    "Server Side Rendering",
  ],
  authors: [
    {
      name: "Dior Olimov",
      url: "https://diorsolutions.site",
    },
  ],
  creator: "Dior Olimov",
  publisher: "diorsolutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dior Olimov | diorsolutions - Expert Fullstack Software Engineer",
    description:
      "Professional portfolio showcasing innovative web applications built with React, Next.js, Node.js, and modern technologies. Fullstack development expertise with 3+ years experience.",
    url: "https://diorsolutions.site",
    siteName: "diorsolutions - Professional Web Development",
    images: [
      {
        url: "https://diorsolutions.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dior Olimov - diorsolutions Fullstack Developer Portfolio Preview",
        type: "image/jpeg",
      },
      {
        url: "https://diorsolutions.site/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "diorsolutions - Modern Web Development Solutions",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["contact@diorsolutions.site"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dior Olimov | diorsolutions - Fullstack Software Engineer",
    description:
      "Expert in React.js, Next.js, Node.js & modern web technologies. Creating scalable, high-performance web applications. View my portfolio of innovative projects.",
    images: [
      {
        url: "https://diorsolutions.site/og-image.jpg",
        alt: "diorsolutions Portfolio - Professional Web Development",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@diorsolutions",
    site: "@diorsolutions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": "standard",
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  alternates: {
    canonical: "https://diorsolutions.site",
    languages: {
      "en-US": "https://diorsolutions.site",
      "uz-UZ": "https://diorsolutions.site/",
      "ru-RU": "https://diorsolutions.site/",
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://diorsolutions.site"),
  generator: "Next.js",
  applicationName: "diorsolutions Portfolio",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "diorsolutions",
    "application-name": "diorsolutions",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tooltip": "Dior Olimov - Fullstack Developer Portfolio",
    "msapplication-starturl": "/",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={` select-none ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
