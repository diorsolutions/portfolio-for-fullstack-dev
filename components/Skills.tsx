"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import skillCategories from "../lib/skillCategories";
import type { TranslationType } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";

interface SkillsProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Skills({ isDark, t }: SkillsProps) {
  const myDivRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(14);

  useEffect(() => {
    const calculateItemsToShow = () => {
      if (typeof window === "undefined") return 14;
      const width = window.innerWidth;
      if (width < 640) return 6;
      if (width < 768) return 9;
      if (width < 1024) return 12;
      return 14;
    };

    setItemsToShow(calculateItemsToShow());

    const handleResize = () => {
      if (!isExpanded) {
        setItemsToShow(calculateItemsToShow());
      }
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [isExpanded]);

  const getFilteredSkills = () => {
    let globalIndex = 0;
    const allSkills = skillCategories
      .map((category) =>
        category.data
          .filter((skill) => activeTab === "all" || category.key === activeTab)
          .map((skill) => ({
            ...skill,
            categoryKey: category.key,
            globalIndex: globalIndex++,
          }))
      )
      .flat();
    return allSkills;
  };

  const filteredSkills = getFilteredSkills();
  const hasMoreSkills = filteredSkills.length > itemsToShow;
  const hiddenSkillsCount = filteredSkills.length - itemsToShow;
  const skillsToDisplay = isExpanded ? filteredSkills : filteredSkills.slice(0, itemsToShow);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9, filter: "blur(4px)" },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as any
      } 
    },
  };

  return (
    <div className="h-screen pt-16 pb-6 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 md:mb-8 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}
        >
          {t.skills.title}
        </motion.h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 w-full px-2">
          {["all", "frontend", "backend", "wordpress", "design"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab(tab);
                setIsExpanded(false);
              }}
              className={`px-4 sm:px-6 md:px-8 py-2 rounded-xl capitalize text-sm font-bold transition-all duration-300 border shadow-md relative overflow-hidden group ${
                activeTab === tab
                  ? isDark
                    ? "bg-[#6FFFE9] text-[#0B132B] border-[#6FFFE9] shadow-[#6FFFE9]/30"
                    : "bg-[#0B132B] text-white border-[#0B132B] shadow-[#0B132B]/30"
                  : isDark
                    ? "bg-[#1C2541]/40 text-gray-400 border-[#3A506B]/50 hover:text-[#6FFFE9] hover:border-[#6FFFE9]/50"
                    : "bg-white text-gray-600 border-gray-100 hover:text-[#0B132B] hover:border-gray-300 shadow-sm"
              }`}
            >
              <span className="relative z-10">{tab}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          ))}
        </div>

        <div ref={myDivRef} className="w-full">
          <Card className={`w-full overflow-hidden border-0 transition-all duration-500 rounded-3xl shadow-xl ${
            isDark ? "bg-[#1C2541]/20" : "bg-white/50 backdrop-blur-sm"
          }`}>
            <CardContent className="p-6 md:p-10 lg:p-12">
              <motion.div 
                key={activeTab + isExpanded}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4 md:gap-6 justify-items-center"
              >
                <AnimatePresence mode="popLayout">
                  {skillsToDisplay.map((skill) => (
                    <motion.div
                      key={`${skill.categoryKey}-${skill.name}`}
                      variants={itemVariants}
                      className={`group flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl w-full max-w-[100px] aspect-square transition-all duration-500 relative overflow-hidden shadow-md ${
                        isDark
                          ? "bg-[#1C2541] border border-[#3A506B]/40 hover:border-[#6FFFE9]/60"
                          : "bg-white border border-gray-100 hover:border-[#3A506B]/30 shadow-sm"
                      } hover:-translate-y-2 hover:shadow-xl`}
                    >
                      <motion.div 
                        className="relative w-8 md:w-10 h-8 md:h-10 mb-2"
                        whileHover={{ rotate: 10, scale: 1.15 }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.alt}
                          className="w-full h-full object-contain filter drop-shadow-md brightness-110"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                        <div className="hidden w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-black">
                          {skill.name.charAt(0)}
                        </div>
                      </motion.div>
                      <span className={`text-[10px] sm:text-xs font-black text-center tracking-tight transition-colors duration-300 ${isDark ? "text-gray-300 group-hover:text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                        {skill.name}
                      </span>
                      
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? "bg-gradient-to-br from-[#6FFFE9] to-[#3A506B]" : "bg-gradient-to-br from-[#3A506B] to-[#5BC0BE]"}`} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {hasMoreSkills && (
                <div className="flex justify-center mt-10 md:mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`group flex items-center gap-2 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg ${
                      isDark
                        ? "bg-[#5BC0BE] text-[#0B132B] hover:bg-[#6FFFE9]"
                        : "bg-[#3A506B] text-white hover:bg-[#1C2541]"
                    }`}
                  >
                    <span>
                      {isExpanded
                        ? t.skills.showLess || "Collapse"
                        : `${t.skills.showMore || "Explore"} (${hiddenSkillsCount}+)`}
                    </span>
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
