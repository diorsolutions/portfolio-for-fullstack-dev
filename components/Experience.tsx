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
      className={`h-screen w-full relative overflow-hidden flex flex-col items-center transition-colors duration-500 ${
        isDark ? "bg-[#0B132B]" : "bg-gray-50"
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? "bg-purple-600" : "bg-purple-200"}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? "bg-[#6FFFE9]" : "bg-blue-200"}`}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col pt-16 pb-8 px-4">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-10"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 ${isDark ? "text-white" : "text-[#0B132B]"}`}>
            {t.experience.title}
          </h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full ${isDark ? "bg-[#6FFFE9] shadow-[0_0_15px_#6FFFE9]" : "bg-[#3A506B]"}`} />
        </motion.div>

        {/* Tree/Timeline Container */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto pr-2 scrollbar-hide relative custom-scroll-area"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="relative py-10 min-h-full">
            {/* The Animated Tree Trunk (SVG Path) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] transform md:-translate-x-1/2 overflow-hidden">
               {/* Background Path */}
               <div className={`absolute inset-0 w-full h-full ${isDark ? "bg-white/5" : "bg-gray-200"}`} />
               {/* Animated Progress Path */}
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className={`absolute inset-0 w-full h-full ${isDark ? "bg-gradient-to-b from-[#6FFFE9] via-[#5BC0BE] to-transparent shadow-[0_0_15px_#6FFFE9]" : "bg-gradient-to-b from-[#3A506B] via-[#5BC0BE] to-transparent"}`}
               />
            </div>

            {/* Tree Items */}
            <div className="space-y-16 md:space-y-24 relative">
              {t.experience.items.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row items-center justify-center`}
                  >
                    {/* Node on the Tree */}
                    <div className="absolute left-8 md:left-1/2 md:translate-x-[-14px] top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className={`w-7 h-7 rounded-full border-4 flex items-center justify-center ${
                          isDark ? "bg-[#0B132B] border-[#6FFFE9] shadow-[0_0_15px_rgba(111,255,233,0.5)]" : "bg-white border-[#3A506B] shadow-lg"
                        }`}
                      >
                         <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`} />
                      </motion.div>
                    </div>

                    {/* Horizontal Branch Line (MD only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-[5%] bg-gradient-to-r ${
                      isLeft 
                        ? "right-[50%] from-transparent to-[#5BC0BE]/30" 
                        : "left-[50%] from-[#5BC0BE]/30 to-transparent"
                    }`} />

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                      isLeft ? "md:mr-auto text-left md:text-right" : "md:ml-auto text-left"
                    }`}>
                      <Card className={`group relative overflow-hidden border-0 shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                        isDark
                          ? "bg-[#1C2541]/40 border-l-4 md:border-l-0 md:border-r-0 border-[#6FFFE9]/30 hover:bg-[#1C2541]/60"
                          : "bg-white border-l-4 md:border-l-0 md:border-r-0 border-[#3A506B]/20 hover:shadow-gray-200"
                      } ${isLeft ? "md:border-r-4 border-[#6FFFE9]/30" : "md:border-l-4 border-[#3A506B]/20"}`}>
                        <CardContent className="p-5 md:p-8">
                          <div className={`flex flex-col mb-4 ${isLeft ? "md:items-end" : "md:items-start"}`}>
                             <div className={`flex flex-col md:flex-row items-start md:items-center gap-2 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                               <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                                 isDark ? "bg-[#6FFFE9]/10 text-[#6FFFE9]" : "bg-[#3A506B]/10 text-[#3A506B]"
                               }`}>
                                 {item.period}
                               </span>
                               <h3 className={`text-xl md:text-2xl font-black ${isDark ? "text-white" : "text-[#0B132B]"}`}>
                                 {item.title}
                               </h3>
                             </div>
                             <p className={`text-sm md:text-md font-bold ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                               {item.company}
                             </p>
                          </div>
                          
                          <p className={`text-sm md:text-base leading-relaxed ${
                            isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 font-medium"
                          } transition-colors duration-300 ${isLeft ? "md:text-right" : "text-left"}`}>
                            {item.description}
                          </p>

                          {/* Decorative Elements */}
                          <div className={`absolute top-0 opacity-10 group-hover:opacity-20 transition-opacity ${isLeft ? "left-4" : "right-4"}`}>
                             <div className={`w-20 h-20 rounded-full blur-2xl ${isDark ? "bg-[#6FFFE9]" : "bg-[#3A506B]"}`} />
                          </div>
                        </CardContent>

                        {/* Interactive Border Bottom */}
                        <motion.div 
                          className={`absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${
                            isDark ? "bg-[#6FFFE9] shadow-[0_0_10px_#6FFFE9]" : "bg-[#3A506B]"
                          }`}
                        />
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Legend/Future Node */}
            <div className="flex justify-center mt-12 pb-10">
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className={`w-2 h-2 rounded-full ${isDark ? "bg-[#6FFFE9]/30" : "bg-[#3A506B]/30"}`}
               />
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
