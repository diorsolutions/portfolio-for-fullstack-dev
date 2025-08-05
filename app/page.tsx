"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { translations } from "@/lib/translations";

export default function Portfolio() {
  // isDark va language holatlarini boshlang'ich qiymat sifatida undefined qilib belgilaymiz.
  // Bu serverda render qilinganda ularning qiymati aniq bo'lmasligini ta'minlaydi.
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);
  const [language, setLanguage] = useState<"en" | "ru" | "uz" | undefined>(
    undefined
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = translations[language || "en"]; // Til hali yuklanmagan bo'lsa, 'en' ni default qilib ishlatamiz

  // Theme toggle
  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  // Scroll to section function
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Komponent birinchi marta yuklanganda (hydration tugagandan so'ng) localStorage'dan tema va tilni yuklash
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Temani yuklash
      const savedTheme = localStorage.getItem("theme");
      setIsDark(savedTheme === "dark"); // isDark endi true yoki false bo'ladi

      // Tilni yuklash
      const savedLanguage = localStorage.getItem("language");
      setLanguage((savedLanguage as "en" | "ru" | "uz") || "en"); // language endi 'en', 'ru' yoki 'uz' bo'ladi
    }
  }, []); // Bu useEffect faqat bir marta ishga tushadi (komponent mount bo'lganda)

  // isDark holati o'zgarganda localStorage'ga saqlash va HTML klassini yangilash
  useEffect(() => {
    if (typeof window !== "undefined" && isDark !== undefined) {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDark]); // Bu useEffect isDark o'zgarganda ishga tushadi

  // language holati o'zgarganda localStorage'ga saqlash
  useEffect(() => {
    if (typeof window !== "undefined" && language !== undefined) {
      localStorage.setItem("language", language);
    }
  }, [language]); // Bu useEffect language o'zgarganda ishga tushadi

  // Agar isDark yoki language hali yuklanmagan bo'lsa, loading holatini ko'rsatamiz
  // Bu hydration errorni oldini oladi, chunki serverda ham, clientda ham bir xil "loading" UI ko'rsatiladi
  if (isDark === undefined || language === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B132B] text-white text-2xl">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-[#0B132B]" : "bg-white"
      }`}
    >
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
  );
}
