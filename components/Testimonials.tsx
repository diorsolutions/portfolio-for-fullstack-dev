"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { TranslationType } from "@/lib/translations";
import { motion } from "framer-motion";

interface TestimonialsProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Testimonials({ isDark, t }: TestimonialsProps) {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center pt-16 pb-8 px-4 transition-colors duration-500 overflow-hidden ${
        isDark ? "bg-[#0B132B]" : "bg-white"
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-2xl md:text-3xl lg:text-4xl font-black text-center mb-10 md:mb-12 ${
            isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
          }`}
        >
          {t.testimonials.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.testimonials.items.map((testimonial, index) => {
            const direction = index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100;
            const yOffset = index % 3 === 1 ? 50 : 0;
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: direction, 
                  y: yOffset,
                  scale: 0.9,
                  filter: "blur(10px)"
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)"
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="h-full"
              >
                <Card
                  className={`relative h-full overflow-hidden group transition-all duration-700 hover:-translate-y-2 border-0 shadow-lg backdrop-blur-3xl ${
                    isDark
                      ? "bg-[#1C2541]/70 border-t border-t-white/10 hover:bg-[#1C2541]/85"
                      : "bg-white/95 border-t border-t-gray-100 shadow-xl"
                  } rounded-[2rem]`}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className={`absolute -top-4 -right-4 text-8xl font-serif opacity-5 transition-transform duration-700 group-hover:scale-110 italic ${
                        isDark ? "text-[#6FFFE9]" : "text-[#3A506B]"
                    }`}>
                        &ldquo;
                    </div>

                    <div className="flex items-center mb-6 relative z-10">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg ${
                        isDark ? "bg-[#3A506B]/50" : "bg-[#5BC0BE]/20"
                      }`}>
                         <span className={`text-xl font-black ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className={`text-lg font-black leading-none ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                          {testimonial.name}
                        </p>
                        <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                          {testimonial.role} <span className="opacity-40 px-1">/</span> {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <p className={`relative z-10 text-base md:text-lg italic font-medium leading-[1.6] flex-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
