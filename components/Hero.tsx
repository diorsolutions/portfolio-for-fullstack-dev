"use client"

import { Button } from "@/components/ui/button"
import type { TranslationType } from "@/lib/translations"

interface HeroProps {
  isDark: boolean
  t: TranslationType
  scrollToSection: (section: string) => void
}

export default function Hero({ isDark, t, scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <p className={`text-lg mb-4 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"} animate-pulse`}>
            {t.hero.greeting}
          </p>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"} animate-gradient-text`}
          >
            {t.hero.name}
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-8 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
            {t.hero.title}
          </h2>
          <p
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {t.hero.subtitle}
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isDark
                ? "bg-[#5BC0BE] text-[#0B132B] hover:bg-[#6FFFE9] shadow-[#5BC0BE]/20"
                : "bg-[#3A506B] text-white hover:bg-[#1C2541] shadow-[#3A506B]/20"
            }`}
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
