"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { TranslationType } from "@/lib/translations";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface ExperienceProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Experience({ isDark, t }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div
      className={`h-full w-full relative overflow-hidden flex flex-col items-center transition-colors duration-500 ${
        isDark ? "bg-[#0B132B]" : "bg-gray-50"
      }`}
    >
      {/* Dynamic Background Elements - Organic Forest Feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? "bg-emerald-600" : "bg-emerald-200"}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? "bg-[#6FFFE9]" : "bg-blue-200"}`}></div>
        
        {/* Floating "Seeds" */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 2
            }}
            className={`absolute w-2 h-2 rounded-full ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col pt-16 pb-8 px-4">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-8"
        >
          <span className={`text-xs font-black uppercase tracking-[0.5em] mb-2 block ${isDark ? "text-[#6FFFE9]" : "text-[#5BC0BE]"}`}>Growth History</span>
          <h2 className={`text-3xl md:text-5xl lg:text-7xl font-black mb-4 ${isDark ? "text-white tracking-tighter" : "text-[#0B132B]"}`}>
            {t.experience.title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className={`h-1 w-12 rounded-full ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`} />
            <div className={`h-2 w-2 rounded-full animate-ping ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`} />
            <div className={`h-1 w-12 rounded-full ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`} />
          </div>
        </motion.div>

        {/* Tree/Timeline Container */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto pr-2 scrollbar-hide relative custom-scroll-area"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="relative py-12 min-h-full">
            {/* The Animated Tree Trunk (SVG Path) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] transform md:-translate-x-1/2 overflow-hidden rounded-full">
               {/* Background Path */}
               <div className={`absolute inset-0 w-full h-full ${isDark ? "bg-white/5" : "bg-gray-200"}`} />
               {/* Animated Progress Path */}
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className={`absolute inset-0 w-full h-full ${isDark ? "bg-gradient-to-b from-[#6FFFE9] via-[#5BC0BE] to-transparent shadow-[0_0_20px_#6FFFE9]" : "bg-gradient-to-b from-[#3A506B] via-[#5BC0BE] to-transparent"}`}
               />
            </div>

            {/* Tree Items */}
            <div className="space-y-12 md:space-y-32 relative">
              {t.experience.items.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row items-center justify-center`}
                  >
                    {/* Node on the Tree */}
                    <div className="absolute left-8 md:left-1/2 md:translate-x-[-18px] top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        className={`w-9 h-9 rounded-2xl border-4 flex items-center justify-center transition-all duration-500 ${
                          isDark 
                            ? "bg-[#0B132B] border-[#6FFFE9] shadow-[0_0_20px_rgba(111,255,233,0.4)]" 
                            : "bg-white border-[#3A506B] shadow-xl"
                        }`}
                        style={{ borderRadius: '35% 65% 70% 30% / 30% 30% 70% 70%' }}
                      >
                         <div className={`w-2 h-2 rounded-full ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`} />
                      </motion.div>
                    </div>

                    {/* Content Card with Glassmorphism */}
                    <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${
                      isLeft ? "md:mr-auto text-left md:text-right" : "md:ml-auto text-left"
                    }`}>
                      <Card className={`group relative overflow-hidden border border-white/10 shadow-3xl transition-all duration-700 hover:-translate-y-3 ${
                        isDark
                          ? "bg-white/5 backdrop-blur-xl hover:bg-white/10"
                          : "bg-white/80 backdrop-blur-md hover:shadow-2xl border-gray-200"
                      } rounded-[2rem]`}>
                        <CardContent className="p-6 md:p-10">
                          {/* Branch indicator */}
                          <div className={`absolute top-0 h-full w-1 transition-all duration-700 ${
                             isLeft ? "right-0 group-hover:bg-[#6FFFE9]" : "left-0 group-hover:bg-[#3A506B]"
                          } ${isDark ? "bg-white/10" : "bg-gray-100"}`} />

                          <div className={`flex flex-col mb-6 ${isLeft ? "md:items-end" : "md:items-start"}`}>
                             <div className={`flex flex-wrap items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                               <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full ${
                                 isDark ? "bg-[#6FFFE9]/20 text-[#6FFFE9]" : "bg-[#3A506B]/10 text-[#3A506B]"
                               }`}>
                                 {item.period}
                               </span>
                               <h3 className={`text-2xl md:text-3xl font-black ${isDark ? "text-white" : "text-[#0B132B]"}`}>
                                 {item.title}
                               </h3>
                             </div>
                             <p className={`text-md md:text-lg font-bold ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                               {item.company}
                             </p>
                          </div>
                          
                          <p className={`text-md md:text-lg leading-relaxed ${
                            isDark ? "text-gray-400 group-hover:text-gray-200" : "text-gray-600 font-medium"
                          } transition-colors duration-500 ${isLeft ? "md:text-right" : "text-left"}`}>
                            {item.description}
                          </p>

                          {/* Interactive Background Gradient */}
                          <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-all duration-1000 opacity-0 group-hover:opacity-40 ${
                            isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"
                          }`} />
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Future Node / End of Tree */}
            <div className="flex flex-col items-center mt-24 pb-20">
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className={`w-4 h-4 rounded-full ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`}
               />
               <p className={`text-[10px] font-bold uppercase tracking-[0.4em] mt-4 ${isDark ? "text-white/30" : "text-gray-400"}`}>
                 To Be Continued
               </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .custom-scroll-area {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
