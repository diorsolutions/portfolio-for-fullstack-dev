"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface CustomCursorProps {
  isDark: boolean;
}

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Position of the mouse - raw values for 0 lag
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const handleMouseMove = (e: MouseEvent) => {
      // 1:1 direct mapping for zero delay
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    if (window.matchMedia("(min-width: 1024px)").matches) {
       document.body.classList.add("custom-cursor-active");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          // No animations, just direct style positioning
        }}
        className="fixed pointer-events-none"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" }}
        >
          {/* Main Pointer Shape */}
          <path 
            d="M5 2L25 15L14 17L12 28L5 2Z" 
            fill={isHovered ? (isDark ? "#6FFFE9" : "#3A506B") : "white"}
            stroke={isDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)"}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}


