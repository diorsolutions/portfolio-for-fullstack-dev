"use client";

import { Moon, Sun, Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TranslationType } from "@/lib/translations";
import logo from "/public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  isDark: boolean;
  language: "en" | "ru" | "uz";
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
  setLanguage: (lang: "en" | "ru" | "uz") => void;
  scrollToSection: (section: string) => void;
  t: TranslationType;
}

export default function Navigation({
  isDark,
  language,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  toggleTheme,
  setLanguage,
  scrollToSection,
  t,
}: NavigationProps) {
  const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "testimonials",
    "contact",
  ];
  const router = useRouter();

  const [showLogo, setShowLogo] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState<boolean[]>([]);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Logo chiqishi
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);
    timers.push(logoTimer);

    // Nav itemlar birin-ketin chiqishi
    sections.forEach((_, index) => {
      const menuTimer = setTimeout(() => {
        setShowMenuItems((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, 1000 + index * 100);
      timers.push(menuTimer);
    });

    // Right panel chiqishi
    const rightTimer = setTimeout(() => {
      setShowRightPanel(true);
    }, 1000 + sections.length * 100 + 300);
    timers.push(rightTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isDark ? "bg-[#0B132B]/85" : "bg-white/90"
      } backdrop-blur-3xl border-b ${
        isDark ? "border-[#1C2541]" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 py-10 cursor-pointer">
          {/* Logo */}
          <div
            className={`font-bold text-xl transition-opacity duration-700 ${
              showLogo ? "opacity-100" : "opacity-0"
            } ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}
          >
            <Image
              onClick={handleClick}
              src={logo}
              alt="logo portfolio-logo developer-portfolio "
              width={160}
              height={160}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-opacity duration-500 ${
                  showMenuItems[index] ? "opacity-100" : "opacity-0"
                } ${
                  activeSection === section
                    ? isDark
                      ? "text-[#5BC0BE]"
                      : "text-[#3A506B]"
                    : isDark
                    ? "text-gray-300 hover:text-[#6FFFE9]"
                    : "text-gray-600 hover:text-[#0B132B]"
                }`}
              >
                {t.nav[section as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div
            className={`flex items-center space-x-4 transition-opacity duration-700 ${
              showRightPanel ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              aria-label="Toggle theme"
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`${
                isDark
                  ? "text-[#6FFFE9] hover:bg-[#1C2541]"
                  : "text-[#0B132B] hover:bg-gray-100"
              }`}
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "bg-[#1C2541]/60 border-[#3A506B] text-[#6FFFE9] hover:bg-[#1C2541]"
                    : "bg-white border-gray-200 text-[#0B132B] hover:bg-gray-50"
                } shadow-sm group`}
              >
                <div className={`p-1 rounded-md ${isDark ? "bg-[#3A506B]/30" : "bg-gray-100"}`}>
                  <Globe className="h-3 w-3" />
                </div>
                <span className="text-sm font-bold">
                  {language === "en" ? "English" : language === "uz" ? "O'zbek" : "Русский"}
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isLangMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute right-0 mt-2 w-40 rounded-2xl p-1.5 border shadow-2xl z-[100] backdrop-blur-3xl ${
                      isDark
                        ? "bg-[#0B132B]/98 border-[#1C2541]/50"
                        : "bg-white/95 border-gray-100"
                    }`}
                  >
                    {[
                      { code: "en", name: "English" },
                      { code: "uz", name: "O'zbek" },
                      { code: "ru", name: "Русский" },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                          language === lang.code
                            ? isDark ? "bg-[#5BC0BE] text-[#0B132B]" : "bg-[#3A506B] text-white"
                            : isDark ? "text-gray-300 hover:bg-[#1C2541] hover:text-[#6FFFE9]" : "text-gray-600 hover:bg-gray-50 hover:text-[#0B132B]"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${
                isDark
                  ? "text-[#6FFFE9] hover:bg-[#1C2541]"
                  : "text-[#0B132B] hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              isDark ? "border-[#1C2541]" : "border-gray-200"
            } animate-in slide-in-from-top duration-300`}
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 transition-colors duration-200 ${
                  activeSection === section
                    ? isDark
                      ? "text-[#5BC0BE] bg-[#1C2541]/50"
                      : "text-[#3A506B] bg-gray-50"
                    : isDark
                    ? "text-gray-300 hover:text-[#6FFFE9] hover:bg-[#1C2541]/30"
                    : "text-gray-600 hover:text-[#0B132B] hover:bg-gray-50"
                } rounded-md`}
              >
                {t.nav[section as keyof typeof t.nav]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
