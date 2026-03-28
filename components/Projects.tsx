"use client";

import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsProps {
  isDark: boolean;
  t: any;
}

export default function Projects({ isDark, t }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    setShowAllTech(false);
  }, [currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div className="h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className={`text-2xl md:mt-12 md:text-3xl lg:text-5xl font-black text-center mb-6 md:mb-8 ${
            isDark ? "text-[#6FFFE9] tracking-tighter" : "text-[#0B132B]"
          }`}
        >
          {t.projects.title}
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Controls - Left */}
          <div className="absolute left-0 lg:-left-4 z-30 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className={`rounded-full h-14 w-14 border-2 transition-all duration-500 hover:scale-110 active:scale-95 ${
                isDark 
                  ? "bg-[#1C2541]/80 border-[#3A506B]/50 text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B]" 
                  : "bg-white/80 border-gray-200 hover:bg-[#3A506B] hover:text-white"
              } backdrop-blur-md shadow-2xl`}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-6xl"
              >
                <Card
                  className={`flex flex-col lg:flex-row h-auto lg:h-[500px] overflow-hidden border-0 shadow-[0_50px_100px_rgba(0,0,0,0.3)] rounded-[3rem] ${
                    isDark ? "bg-[#1C2541]/60" : "bg-white"
                  } backdrop-blur-xl transition-all duration-500`}
                >
                  {/* Immersive Image Section */}
                  <div className="relative w-full lg:w-[60%] h-[350px] lg:h-full group overflow-hidden bg-black/5">
                    {/* Immersive Blurred Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <Image
                        src={projectsData[currentIndex].image || "/placeholder.svg"}
                        alt="bg"
                        fill
                        className="object-cover scale-150 blur-3xl opacity-20 transition-all duration-1000 group-hover:opacity-30"
                      />
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="absolute inset-0 z-10 p-4 md:p-8 flex flex-col gap-4">
                       {/* Top Main Image */}
                       <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setSelectedImage(projectsData[currentIndex].image)}
                        className="relative w-full h-[65%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 cursor-pointer group/img"
                       >
                         <Image
                          src={projectsData[currentIndex].image || "/placeholder.svg"}
                          alt={projectsData[currentIndex].title}
                          fill
                          className="object-contain p-2 transition-all duration-700 group-hover/img:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-500 flex items-center justify-center">
                            <ExternalLink className="text-white opacity-0 group-hover/img:opacity-100 scale-50 group-hover/img:scale-100 transition-all duration-500 h-10 w-10" />
                        </div>
                       </motion.div>

                       {/* Bottom 1x3 Grid */}
                       <div className="grid grid-cols-3 gap-3 h-[30%]">
                          {[...Array(3)].map((_, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * (i + 1) }}
                              onClick={() => setSelectedImage(projectsData[currentIndex].image)}
                              className="relative h-full rounded-xl overflow-hidden shadow-lg border border-white/5 cursor-pointer group/thumb"
                            >
                              <Image
                                src={projectsData[currentIndex].image || "/placeholder.svg"}
                                alt={`preview-${i}`}
                                fill
                                className="object-contain p-1 opacity-80 group-hover/thumb:opacity-100 group-hover/thumb:scale-110 transition-all duration-500 bg-black/10"
                              />
                            </motion.div>
                          ))}
                       </div>
                    </div>

                    {projectsData[currentIndex].featured && (
                      <span className="absolute top-8 left-8 bg-[#6FFFE9] text-[#0B132B] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest z-20 shadow-xl border border-white/20">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Details Section */}
                  <CardContent className={`p-6 md:p-10 flex flex-col justify-center flex-1 relative ${isDark ? "bg-gradient-to-br from-[#1C2541]/40 to-[#0B132B]/60" : "bg-gray-50/50"}`}>
                    <div className="space-y-6">
                       <div>
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-4"
                          >
                            <div className="h-0.5 w-12 bg-[#6FFFE9]" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#5BC0BE]">Case Study</span>
                          </motion.div>
                          <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black leading-tight ${isDark ? "text-white" : "text-[#0B132B]"}`}>
                            {projectsData[currentIndex].title}
                          </h3>
                       </div>

                      <p className={`text-lg md:text-xl leading-relaxed ${isDark ? "text-gray-300/90" : "text-gray-600"} font-medium`}>
                        {projectsData[currentIndex].description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {(showAllTech ? projectsData[currentIndex].tech : projectsData[currentIndex].tech.slice(0, 4)).map((tech) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                              isDark 
                                ? "bg-white/5 text-[#6FFFE9] border border-white/10 hover:bg-[#6FFFE9]/10" 
                                : "bg-white text-[#3A506B] border border-gray-100 shadow-sm"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {!showAllTech && projectsData[currentIndex].tech.length > 4 && (
                           <button
                             onClick={() => setShowAllTech(true)}
                             className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                              isDark 
                                ? "bg-white/5 text-[#6FFFE9] border border-white/10 hover:bg-[#6FFFE9]/20" 
                                : "bg-white text-[#3A506B] border border-gray-100 shadow-sm hover:bg-gray-100"
                            }`}
                           >
                              ...
                           </button>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-5 pt-8">
                        <Button
                          size="lg"
                          className="h-16 px-10 bg-[#5BC0BE] text-[#0B132B] hover:bg-[#6FFFE9] rounded-2xl font-black text-lg flex-1 shadow-[0_15px_30px_#5BC0BE30] transition-all duration-500 hover:-translate-y-1 active:translate-y-0"
                          onClick={() => window.open(projectsData[currentIndex].liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-6 w-6 mr-3" />
                          {t.projects.viewProject}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className={`h-16 px-10 border-2 rounded-2xl font-black text-lg flex-1 transition-all duration-500 hover:-translate-y-1 active:translate-y-0 ${
                            isDark 
                              ? "border-[#6FFFE9]/50 text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B]" 
                              : "border-gray-200 hover:bg-[#3A506B] hover:text-white"
                          }`}
                          onClick={() => window.open(projectsData[currentIndex].codeUrl, "_blank")}
                        >
                          <Github className="h-6 w-6 mr-3" />
                          {t.projects.viewCode}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Right */}
          <div className="absolute right-0 lg:-right-4 z-30 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className={`rounded-full h-14 w-14 border-2 transition-all duration-500 hover:scale-110 active:scale-95 ${
                isDark 
                  ? "bg-[#1C2541]/80 border-[#3A506B]/50 text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B]" 
                  : "bg-white/80 border-gray-200 hover:bg-[#3A506B] hover:text-white"
              } backdrop-blur-md shadow-2xl`}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex gap-4 mt-12 mb-4">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                currentIndex === i 
                  ? isDark ? "w-12 bg-[#6FFFE9] shadow-[0_0_15px_#6FFFE9]" : "w-12 bg-[#3A506B]"
                  : isDark ? "w-3 bg-white/10" : "w-3 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Media View Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
             <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white z-[110] bg-white/10 p-4 rounded-full"
              onClick={() => setSelectedImage(null)}
             >
                <div className="w-8 h-8 relative">
                   <div className="absolute top-1/2 left-0 w-full h-1 bg-white rotate-45 rounded-full" />
                   <div className="absolute top-1/2 left-0 w-full h-1 bg-white -rotate-45 rounded-full" />
                </div>
             </motion.button>

             <motion.div 
               initial={{ scale: 0.8, opacity: 0, y: 50 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.8, opacity: 0, y: 50 }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center"
               onClick={(e) => e.stopPropagation()}
             >
               <Image
                 src={selectedImage}
                 alt="preview"
                 fill
                 className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
                 priority
               />
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
