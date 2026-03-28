"use client";

import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  MessageCirclePlus,
  Twitter,
  ExternalLink,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TranslationType } from "@/lib/translations";
import { motion, type Variants } from "framer-motion";

import Footer from "./Footer";

interface ContactProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Contact({ isDark, t }: ContactProps) {
  const contactItems = [
    {
      icon: Mail,
      title: t.contact.email,
      value: "diorsolutions@",
      url: "mailto:diorsolutions@gmail.com",
    },
    {
      icon: Instagram,
      title: t.contact.instagram,
      value: "@diorsolutions",
      url: "https://www.instagram.com/diorsolutions?igsh=MXczNWJhcmNoN2gzcQ==",
    },
    {
      icon: Facebook,
      title: t.contact.facebook,
      value: "@diorsolutions",
      url: "https://www.facebook.com/profile.php?id=61578378254899&sk=about",
    },
    {
      icon: MessageCircle,
      title: t.contact.telegram,
      value: "@diorsolutions",
      url: "https://t.me/diorsolutions",
    },
    {
      icon: MessageCirclePlus,
      title: t.contact.whatsapp,
      value: "+9989186845xx",
      url: "https://wa.me/998918684546",
    },
    {
      icon: Github,
      title: t.contact.github,
      value: "@diorsolutions",
      url: "https://github.com/diorsolutions",
    },
    {
      icon: Linkedin,
      title: t.contact.linkedin,
      value: "@diorsolutions",
      url: "https://linkedin.com/in/diorsolutions",
    },
    {
      icon: Twitter,
      title: t.contact.twitter,
      value: "@diorsolution",
      url: "https://x.com/diorsolution",
    },
    {
      icon: ExternalLink,
      title: t.contact.website,
      value: "diorsolutions.site",
      url: "https://diorsolutions.site",
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: "+9989186845xx",
      url: "tel:+998918684546",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <div className={`h-screen flex flex-col items-center justify-between pt-16 pb-2 transition-colors duration-500 ${isDark ? "bg-[#0B132B]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto w-full text-center flex-grow flex flex-col justify-center px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-2xl md:text-4xl lg:text-5xl font-black mb-4 ${
            isDark ? "text-[#6FFFE9] tracking-tighter" : "text-[#0B132B]"
          }`}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-medium ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto"
        >
          {contactItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card
                className={`group relative h-full transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 shadow-xl rounded-[2rem] ${
                  isDark
                    ? "bg-[#1C2541]/40 border-t border-t-[#3A506B]/20 hover:bg-[#1C2541]/60"
                    : "bg-white hover:shadow-gray-200"
                }`}
                onClick={() => window.open(item.url, "_blank")}
              >
                <CardContent className="p-5 md:p-8 flex flex-col items-center justify-center text-center">
                  <div className={`p-3 md:p-5 rounded-[1.5rem] mb-4 transition-all duration-300 ${
                    isDark ? "bg-[#3A506B]/30 group-hover:bg-[#5BC0BE]/20" : "bg-gray-100 group-hover:bg-[#3A506B]/10"
                  }`}>
                    <item.icon
                      className={`h-6 w-6 md:h-8 md:w-8 transition-transform duration-300 ${
                        isDark ? "text-[#6FFFE9]" : "text-[#3A506B]"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-sm md:text-lg font-black mb-1 transition-colors duration-300 ${
                      isDark ? "text-gray-200 group-hover:text-[#6FFFE9]" : "text-[#0B132B]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-[10px] md:text-xs font-bold truncate w-full ${isDark ? "text-gray-500 group-hover:text-gray-400" : "text-gray-500"}`}>
                    {item.value}
                  </p>
                  
                  <div className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full ${
                    isDark ? "bg-[#6FFFE9] shadow-[0_0_10px_#6FFFE9]" : "bg-[#3A506B]"
                  }`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 mt-4">
        <Footer isDark={isDark} t={t} />
      </div>
    </div>
  );
}
