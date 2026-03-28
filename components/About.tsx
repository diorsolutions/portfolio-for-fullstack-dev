"use client";

import { Code } from "lucide-react"
import type { TranslationType } from "@/lib/translations"
import { motion } from "framer-motion"

interface AboutProps {
  isDark: boolean
  t: TranslationType
}

export default function About({ isDark, t }: AboutProps) {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center pt-14 pb-8 px-4 overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#0B132B]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8 md:mb-10 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}
        >
          {t.about.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className={`p-5 md:p-6 rounded-3xl border-0 shadow-lg transition-all duration-700 ${
              isDark ? "bg-[#1C2541]/40 border-l-2 border-[#5BC0BE]/30 hover:bg-[#1C2541]/60" : "bg-gray-50 border-l-2 border-[#3A506B]/20 hover:shadow-gray-200"
            }`}>
              <p className={`text-sm md:text-base leading-relaxed font-medium ${isDark ? "text-gray-300 group-hover:text-gray-200" : "text-gray-700"}`}>
                {t.about.bio}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl border-0 shadow-lg ${isDark ? "bg-[#1C2541]/30 border-t border-[#3A506B]/30" : "bg-white border-t border-gray-100"}`}
              >
                <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5BC0BE] shadow-[0_0_10px_#5BC0BE]"></span>
                  {t.about.education}
                </h3>
                <p className={`text-sm md:text-base font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {t.about.educationText}
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl border-0 shadow-lg ${isDark ? "bg-[#1C2541]/30 border-t border-[#3A506B]/30" : "bg-white border-t border-gray-100"}`}
              >
                <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                   <span className="w-2.5 h-2.5 rounded-full bg-[#5BC0BE] shadow-[0_0_10px_#5BC0BE]"></span>
                  {t.about.experience}
                </h3>
                <p className={`text-sm md:text-base font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {t.about.experienceText}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.8, rotate: 10, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 3, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div
              className={`w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] rounded-[2rem] ${
                isDark
                  ? "bg-gradient-to-br from-[#1C2541] via-[#3A506B] to-[#5BC0BE]"
                  : "bg-gradient-to-br from-gray-100 via-[#5BC0BE] to-[#6FFFE9]"
              } p-3 md:p-4 flex items-center justify-center relative overflow-hidden group shadow-xl hover:rotate-0 transition-all duration-700`}
            >
              <div
                className={`w-full h-full rounded-[1.5rem] ${
                  isDark ? "bg-[#0B132B]" : "bg-white"
                } flex items-center justify-center relative overflow-hidden shadow-inner`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                        className={`w-8 h-8 md:w-12 md:h-12 rounded-2xl shadow-md transition-all duration-500 ${
                          i === 4
                            ? `w-12 h-12 md:w-16 md:h-16 rounded-full ${
                                isDark
                                  ? "bg-gradient-to-r from-[#5BC0BE] to-[#6FFFE9] shadow-[0_0_20px_#5BC0BE50]"
                                  : "bg-gradient-to-r from-[#3A506B] to-[#5BC0BE] shadow-[0_10px_20px_#3A506B30]"
                              } flex items-center justify-center animate-spin-slow`
                            : isDark
                              ? i % 2 === 0 ? "bg-[#1C2541] border border-[#3A506B]/50" : "bg-[#3A506B]/20"
                              : i % 2 === 0 ? "bg-gray-50 border border-gray-200" : "bg-[#5BC0BE]/10"
                        } flex items-center justify-center hover:scale-110 hover:z-10`}
                      >
                        {i === 4 && <Code className={`h-6 w-6 md:h-8 md:w-8 ${isDark ? "text-[#0B132B]" : "text-white"}`} />}
                        {i !== 4 && <div className={`w-2 h-2 rounded-full opacity-40 ${isDark ? "bg-[#5BC0BE]" : "bg-[#3A506B]"}`} />}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5BC0BE]/20 to-transparent"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
