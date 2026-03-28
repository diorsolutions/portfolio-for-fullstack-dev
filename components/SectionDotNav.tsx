"use client";

import { motion } from "framer-motion";

interface SectionDotNavProps {
  sections: string[];
  activeSection: string;
  scrollToSection: (section: string) => void;
  isDark: boolean;
}

export default function SectionDotNav({
  sections,
  activeSection,
  scrollToSection,
  isDark,
}: SectionDotNavProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${section}`}
        >
          {/* Label that appears on hover */}
          <span
            className={`mr-4 px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
              isDark ? "bg-[#1C2541] text-[#6FFFE9]" : "bg-gray-100 text-[#3A506B]"
            } shadow-lg pointer-events-none capitalize`}
          >
            {section}
          </span>
          
          {/* The Dot */}
          <div className="relative flex items-center justify-center">
            {activeSection === section && (
              <motion.div
                layoutId="activeDot"
                className={`absolute w-6 h-6 rounded-full border-2 ${
                  isDark ? "border-[#6FFFE9]/40" : "border-[#3A506B]/20"
                }`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? isDark ? "bg-[#6FFFE9] scale-125" : "bg-[#3A506B] scale-125"
                  : isDark ? "bg-[#3A506B] hover:bg-[#5BC0BE]" : "bg-gray-300 hover:bg-[#3A506B]/50"
              }`}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
