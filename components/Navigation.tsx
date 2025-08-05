"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TranslationType } from "@/lib/translations";
import Image from "next/image";
import logo from "/public/logo.png";

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

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isDark ? "bg-[#0B132B]/90" : "bg-white/90"
      } backdrop-blur-md border-b ${
        isDark ? "border-[#1C2541]" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 py-10 cursor-pointer">
          {/* Logo */}
          <div
            className={`font-bold text-xl ${
              isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
            }`}
          >
            <Image
              src={logo}
              alt="logo portfolio-logo developer-portfolio "
              width={160}
              height={160}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-colors duration-200 ${
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
          <div className="flex items-center space-x-4">
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

            <label htmlFor="themeSelect" className="sr-only">
              Select language
            </label>
            <select
              id="themeSelect"
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "en" | "ru" | "uz")
              }
              className={`px-3 py-1 rounded border ${
                isDark
                  ? "bg-[#1C2541] border-[#3A506B] text-[#6FFFE9]"
                  : "bg-white border-gray-300 text-[#0B132B]"
              } text-sm`}
            >
              <option value="en">English</option>
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
            </select>

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
            }`}
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-2 px-4 transition-colors duration-200 ${
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
        )}
      </div>
    </nav>
  );
}
