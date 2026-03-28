"use client";

import type { TranslationType } from "@/lib/translations";

interface FooterProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Footer({ isDark, t }: FooterProps) {
  return (
    <footer className={`w-full py-4 text-center transition-colors duration-500 ${isDark ? "bg-[#0B132B]/50 text-gray-400" : "bg-gray-50/50 text-gray-600"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-sm font-bold tracking-wider opacity-60">
          {t.footer?.copyright || `© ${new Date().getFullYear()} DIORSOLUTIONS. All Rights Reserved.`}
        </p>
      </div>
    </footer>
  );
}
