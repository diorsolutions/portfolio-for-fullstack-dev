"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject } from "react";

interface ScrollProgressProps {
  containerRef?: RefObject<HTMLDivElement>;
}

export default function ScrollProgress({ containerRef }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef || undefined,
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5BC0BE] to-[#6FFFE9] origin-left z-50 pointer-events-none"
      style={{ scaleX }}
    />
  );
}
