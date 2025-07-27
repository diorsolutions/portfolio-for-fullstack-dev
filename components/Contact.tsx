"use client";

import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { TranslationType } from "@/lib/translations";

interface ContactProps {
  isDark: boolean;
  t: TranslationType;
}

export default function Contact({ isDark, t }: ContactProps) {
  const contactItems = [
    {
      icon: Mail,
      title: t.contact.email,
      value: "diorsolutions@gmail.com",
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
      value: "+99 8 91 868 45 xx",
      url: "tel:+998918684546",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-8 ${
            isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
          }`}
        >
          {t.contact.title}
        </h2>
        <p
          className={`text-lg mb-12 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <Card
              key={index}
              className={`p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark
                  ? "bg-[#1C2541] border-[#3A506B] hover:border-[#5BC0BE] hover:shadow-lg hover:shadow-[#5BC0BE]/20"
                  : "bg-white border-gray-200 hover:border-[#3A506B] hover:shadow-lg"
              }`}
              onClick={() => window.open(item.url, "_blank")}
            >
              <item.icon
                className={`h-8 w-8 mx-auto mb-4 ${
                  isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"
                }`}
              />
              <h3
                className={`font-semibold mb-2 ${
                  isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
                }`}
              >
                {item.title}
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {item.value}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
