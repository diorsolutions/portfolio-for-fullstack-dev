"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDotNav from "@/components/SectionDotNav";
import { useRef } from "react";
import { translations } from "@/lib/translations";

const sectionIds = ["home", "about", "skills", "experience", "projects", "testimonials", "contact"];

export default function Portfolio() {
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);
  const [language, setLanguage] = useState<"en" | "ru" | "uz" | undefined>(
    undefined
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLocked, setIsLocked] = useState(false); // For UI debouncing
  
  const isLockedRef = useRef(false);
  const activeIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = translations[language || "en"];

  const toggleTheme = () => setIsDark((prev) => !prev);

  const scrollToSection = (section: string) => {
    if (isLockedRef.current) return;
    
    const newIdx = sectionIds.indexOf(section);
    if (newIdx === -1) return;

    const el = document.getElementById(section);
    if (!el) return;

    // Lock immediately
    isLockedRef.current = true;
    setIsLocked(true);
    setActiveSection(section);
    activeIndexRef.current = newIdx;

    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth"
    });

    // Unlocking mechanism
    let scrollTimeout: NodeJS.Timeout;
    const unlock = () => {
      isLockedRef.current = false;
      setIsLocked(false);
      window.removeEventListener("scroll", handleScrollEnd);
    };

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(unlock, 100);
    };

    window.addEventListener("scroll", handleScrollEnd);
    
    // Safety timeout
    setTimeout(unlock, 1500);
  };

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isLockedRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setActiveSection(entry.target.id);
          const newIdx = sectionIds.indexOf(entry.target.id);
          if (newIdx !== -1) activeIndexRef.current = newIdx;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Manual event listener for non-passive events (wheel and touch)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isLockedRef.current || isMenuOpen) {
        e.preventDefault();
        return;
      }

      const internalContainer = (e.target as HTMLElement).closest(".overflow-y-auto") as HTMLElement;
      if (internalContainer) {
        const { scrollTop, scrollHeight, clientHeight } = internalContainer;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        const isAtTop = scrollTop <= 0;

        if (e.deltaY > 0 && !isAtBottom) return; // scroll down internally
        if (e.deltaY < 0 && !isAtTop) return;    // scroll up internally
      }

      if (Math.abs(e.deltaY) < 1) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        if (activeIndexRef.current < sectionIds.length - 1) {
          scrollToSection(sectionIds[activeIndexRef.current + 1]);
        }
      } else {
        if (activeIndexRef.current > 0) {
          scrollToSection(sectionIds[activeIndexRef.current - 1]);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLockedRef.current || isMenuOpen) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isLockedRef.current || isMenuOpen) return;
      
      const internalContainer = (e.target as HTMLElement).closest(".overflow-y-auto") as HTMLElement;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (internalContainer) {
        const { scrollTop, scrollHeight, clientHeight } = internalContainer;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        const isAtTop = scrollTop <= 0;

        if (diff > 0 && !isAtBottom) return; // swiping up (scrolling down)
        if (diff < 0 && !isAtTop) return;    // swiping down (scrolling up)
      }

      if (Math.abs(diff) > 2) { 
        if (diff > 0) {
          if (activeIndexRef.current < sectionIds.length - 1) {
            scrollToSection(sectionIds[activeIndexRef.current + 1]);
          }
        } else {
          if (activeIndexRef.current > 0) {
            scrollToSection(sectionIds[activeIndexRef.current - 1]);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      setIsDark(savedTheme === "dark");
      const savedLang = localStorage.getItem("language");
      const lang = (savedLang as "en" | "ru" | "uz") || "en";
      setLanguage(lang);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && isDark !== undefined) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof window !== "undefined" && language !== undefined) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  // Update URL when activeSection changes (only when not locked to avoid rapid updates)
  useEffect(() => {
    if (activeSection && typeof window !== "undefined") {
      const hash = activeSection === "home" ? "" : `#${activeSection}`;
      const url = window.location.pathname + hash;
      window.history.replaceState(null, "", url);
    }
  }, [activeSection]);

  // Handle initial deep linking (scrolling to hash on refresh)
  useEffect(() => {
    const handleInitialScroll = () => {
      if (typeof window === "undefined") return;
      
      // Get hash without #
      const hash = window.location.hash.slice(1);
      
      if (hash && sectionIds.includes(hash)) {
        console.log("Deep linking to section:", hash);
        // We use a slightly longer timeout and direct scrollTo for the initial jump
        // to ensure the elements are fully rendered and layout is stable
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            // Force the scroll even if locked initially
            const topPos = el.offsetTop;
            window.scrollTo({
              top: topPos,
              behavior: "auto" // Jump immediately for the first load
            });
            
            // Sync internal state
            setActiveSection(hash);
            const newIdx = sectionIds.indexOf(hash);
            if (newIdx !== -1) activeIndexRef.current = newIdx;
          }
        }, 300); // Shorter but reliable jump
        
        // Secondary smooth scroll to ensure precision after any images load
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            window.scrollTo({
              top: el.offsetTop,
              behavior: "smooth"
            });
          }
        }, 1000);
      }
    };
    
    // Only run when theme and language are ready (avoiding layout shift)
    if (language !== undefined && isDark !== undefined) {
      handleInitialScroll();
    }
  }, [language, isDark]);

  if (isDark === undefined || language === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B132B] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#6FFFE9] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  // 🎬 Animation variants - trigger every time
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Sections configuration for cleaner code
  const sections = [
    { id: "home", component: <Hero isDark={isDark} t={t} scrollToSection={scrollToSection} /> },
    { id: "about", component: <About isDark={isDark} t={t} /> },
    { id: "skills", component: <Skills isDark={isDark} t={t} /> },
    { id: "experience", component: <Experience isDark={isDark} t={t} /> },
    { id: "projects", component: <Projects isDark={isDark} t={t} /> },
    { id: "testimonials", component: <Testimonials isDark={isDark} t={t} /> },
    { id: "contact", component: <Contact isDark={isDark} t={t} /> },
  ];

  return (
    <main
      ref={containerRef}
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-[#0B132B]" : "bg-white"
      } overflow-x-hidden relative`}
    >
      <ScrollProgress />
      
      <SectionDotNav 
        sections={sections.map(s => s.id)} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isDark={isDark}
      />

      <Navigation
        isDark={isDark}
        language={language}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleTheme={toggleTheme}
        setLanguage={setLanguage}
        scrollToSection={scrollToSection}
        t={t}
      />

      {sections.map(({ id, component }) => (
        <motion.section
          key={id}
          id={id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="snap-start snap-always h-screen w-full relative flex flex-col justify-center overflow-hidden"
        >
          {component}
        </motion.section>
      ))}
    </main>
  );
}
