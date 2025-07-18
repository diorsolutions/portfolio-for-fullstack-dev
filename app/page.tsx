"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import { translations } from "@/lib/translations"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true) // Default to dark mode
  const [language, setLanguage] = useState<"en" | "ru" | "uz">("en")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  const t = translations[language]

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-[#0B132B]" : "bg-white"}`}>
      <ScrollProgress scrollProgress={scrollProgress} />

      <Navigation
        isDark={isDark}
        language={language}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleTheme={toggleTheme}
        setLanguage={setLanguage}
        scrollToSection={scrollToSection}
        t={t}
      />

      <Hero isDark={isDark} t={t} scrollToSection={scrollToSection} />
      <About isDark={isDark} t={t} />
      <Skills isDark={isDark} t={t} />
      <Experience isDark={isDark} t={t} />
      <Projects isDark={isDark} t={t} />
      <Testimonials isDark={isDark} t={t} />
      <Contact isDark={isDark} t={t} />
      <Footer isDark={isDark} t={t} />
    </div>
  )
}
