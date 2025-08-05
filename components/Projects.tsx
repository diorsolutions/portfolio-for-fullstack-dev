"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { projectsData } from "@/lib/data";

interface ProjectsProps {
  isDark: boolean;
  t: any;
}

export default function Projects({ isDark, t }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="flex items-center py-20 px-4 sm:px-6 lg:px-8"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${
            isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
          }`}
        >
          {t.projects.title}
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className={`group flex flex-col overflow-hidden border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1C2541] border-[#3A506B] hover:border-[#5BC0BE]"
                  : "bg-white border-gray-200 hover:border-[#3A506B]"
              } ${project.featured ? "ring-2 ring-[#5BC0BE]/20" : ""}`}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-[#5BC0BE] text-[#0B132B] hover:bg-[#6FFFE9] flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      aria-label={`View ${project.title} live project`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.projects.viewProject}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#6FFFE9] text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B] bg-transparent flex-1"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.viewCode}
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-[#5BC0BE] text-[#0B132B] px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } line-clamp-2`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`cursor-pointer px-3 py-1 text-xs rounded-full transition-all duration-200 hover:scale-105 ${
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
  );
}
