"use client"

import { Mail, MessageCircle, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ContactProps {
  isDark: boolean
  t: any
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
      icon: MessageCircle,
      title: t.contact.telegram,
      value: "@diorsolutions",
      url: "https://t.me/diorsolutions",
    },
    {
      icon: Github,
      title: t.contact.github,
      value: "github.com/diorsolutions",
      url: "https://github.com/diorsolutions",
    },
    {
      icon: Linkedin,
      title: t.contact.linkedin,
      value: "linkedin.com/in/diorsolutions",
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
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4" style={{ scrollSnapAlign: "start" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-8 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>{t.contact.title}</h2>
        <p className={`text-lg mb-12 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t.contact.subtitle}</p>

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
              <item.icon className={`h-8 w-8 mx-auto mb-4 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`} />
              <h3 className={`font-semibold mb-2 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>{item.title}</h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{item.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
