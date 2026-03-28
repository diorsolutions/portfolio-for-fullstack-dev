"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import skillCategories from "../lib/skillCategories";
import type { TranslationType } from "@/lib/translations";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SkillsProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Skills({ isDark, t }: SkillsProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Memoize filtered skills to prevent jitter
  const filteredSkills = useMemo(() => {
    return skillCategories
      .flatMap(cat => cat.data.map(skill => ({ ...skill, category: cat.key })))
      .filter(skill => activeTab === "all" || skill.category === activeTab);
  }, [activeTab]);

  const tabs = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend", color: "#6FFFE9" },
    { id: "backend", label: "Backend", color: "#5BC0BE" },
    { id: "design", label: "Design", color: "#BD93F9" },
    { id: "wordpress", label: "WordPress", color: "#21759b" }
  ];

  return (
    <div className={`h-screen w-full relative overflow-hidden flex flex-col items-center justify-start pt-24 md:pt-[12vh] transition-colors duration-500 ${
      isDark ? "bg-[#0B132B]" : "bg-gray-50"
    }`}>
      {/* Immersive Tech Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className={`absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full blur-[150px] ${isDark ? "bg-purple-600" : "bg-purple-200"}`} />
        <div className={`absolute bottom-[10%] left-[5%] w-[40%] h-[40%] rounded-full blur-[150px] ${isDark ? "bg-[#6FFFE9]" : "bg-emerald-100"}`} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Header with Float Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`inline-block mb-4 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.4em] ${
              isDark ? "bg-[#6FFFE9]/10 text-[#6FFFE9]" : "bg-[#3A506B]/10 text-[#3A506B]"
            }`}
          >
            Capabilities
          </motion.div>
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black ${isDark ? "text-white tracking-tighter" : "text-[#0B132B]"}`}>
            {t.skills.title}
          </h2>
        </motion.div>

        {/* Premium Tab Control */}
        <div className={`flex flex-wrap justify-center gap-2 p-2 rounded-3xl mb-12 backdrop-blur-md border ${
          isDark ? "bg-white/5 border-white/10" : "bg-gray-100/50 border-gray-200"
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-2xl text-xs md:text-sm font-black transition-all duration-500 ${
                activeTab === tab.id 
                  ? "text-white" 
                  : isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
              }`}
            >
              <span className="relative z-10 uppercase tracking-widest">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-2xl shadow-xl ${
                    isDark ? "bg-[#3A506B]" : "bg-[#0B132B]"
                  }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tech Constellation Grid */}
        <div className="w-full max-w-5xl">
          <motion.div 
            layout
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-5 justify-items-start"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <SkillCard 
                  key={`${skill.category}-${skill.name}`}
                  skill={skill}
                  index={index}
                  isDark={isDark}
                  isHovered={hoveredSkill === skill.name}
                  onHover={() => setHoveredSkill(skill.name)}
                  onLeave={() => setHoveredSkill(null)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill, index, isDark, isHovered, onHover, onLeave }: any) {
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  function handleMouseMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    onLeave();
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-square cursor-pointer group"
    >
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isHovered 
          ? isDark ? "bg-[#6FFFE9]/20 shadow-[0_0_30px_rgba(111,255,233,0.3)]" : "bg-[#0B132B]/5 shadow-2xl"
          : isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-100 shadow-sm"
      }`} />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="relative w-8 h-8 md:w-10 md:h-10 mb-2 transition-transform duration-500 group-hover:scale-110">
          <img
            src={skill.icon}
            alt={skill.alt}
            className="w-full h-full object-contain filter drop-shadow-md group-hover:brightness-125 transition-all"
            onError={(e) => {
              (e.target as any).src = `https://ui-avatars.com/api/?name=${skill.name}&background=random`;
            }}
          />
        </div>
        <span className={`text-[8px] md:text-[10px] font-black text-center uppercase tracking-tight transition-colors duration-300 ${
          isHovered 
            ? isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
            : isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          {skill.name}
        </span>
      </div>

      {/* Glow Aura */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className={`absolute inset-0 -z-10 blur-2xl rounded-full ${
              isDark ? "bg-[#6FFFE9]/10" : "bg-blue-100"
            }`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
