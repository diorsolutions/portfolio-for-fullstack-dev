"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { projectsData } from "@/lib/data"

interface ProjectsProps {
  isDark: boolean
  t: any
}

export default function Projects({ isDark, t }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="flex items-center py-20 px-4"
      style={{
        scrollSnapAlign: "start",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1C2541] border-[#3A506B] hover:border-[#5BC0BE]"
                  : "bg-white border-gray-200 hover:border-[#3A506B]"
              } ${project.featured ? "ring-2 ring-[#5BC0BE]/20" : ""}`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-[#5BC0BE] text-[#0B132B] hover:bg-[#6FFFE9] flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.projects.viewProject}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#6FFFE9] text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B] bg-transparent flex-1"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.viewCode}
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#5BC0BE] text-[#0B132B] px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full transition-all duration-200 hover:scale-105 ${
                        isDark
                          ? "bg-[#3A506B] text-[#6FFFE9] hover:bg-[#5BC0BE] hover:text-[#0B132B]"
                          : "bg-[#5BC0BE] text-[#0B132B] hover:bg-[#3A506B] hover:text-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
