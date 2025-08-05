import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/lib/data";
import type { TranslationType } from "@/lib/translations";

interface SkillsProps {
  isDark: boolean;
  t: TranslationType;
}

import React, { useRef } from "react";

export default function Skills({ isDark, t }: SkillsProps) {
  const myDivRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    { key: "core", data: skillsData.core, title: t.skills.core },
    {
      key: "frameworks",
      data: skillsData.frameworks,
      title: t.skills.frameworks,
    },
    { key: "tools", data: skillsData.tools, title: t.skills.tools },
    { key: "advanced", data: skillsData.advanced, title: t.skills.advanced },
  ];

  {
    /* {skillCategories.map((category) => (
    <Card
      key={category.key}
      className={`${
        isDark
          ? "bg-[#1C2541] border-[#3A506B]"
          : "bg-white border-gray-200"
      } hover:scale-105 transition-all duration-300`}
    >
      <CardContent className="p-6">
        <h3
          className={`text-xl font-semibold mb-6 text-center ${
            isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"
          }`}
        >
          {category.title}
        </h3>
        <div className="space-y-6">
          {category.data.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
                <span
                  className={`text-sm font-bold ${
                    isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
                  }`}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className={`w-full h-3 rounded-full ${
                  isDark ? "bg-[#3A506B]" : "bg-gray-200"
                } overflow-hidden`}
              >
                <div
                  className={`h-3 rounded-full transition-all duration-2000 ease-out ${
                    isDark
                      ? "bg-gradient-to-r from-[#5BC0BE] to-[#6FFFE9]"
                      : "bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
                  } skill-progress`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ))} */
  }

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-center align-center gap-10">
          <h2
            className={`text-4xl font-bold text-center mb-16 ${
              isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"
            }`}
          >
            {t.skills.title}
          </h2>
        </div>
        <div ref={myDivRef} className="w-full flex justify-center">
          <Card
            className={`w-full max-w-[1400px] mx-auto ${
              isDark
                ? "bg-gray-900 border-[#3A506B]"
                : "bg-white border-gray-200"
            } transition-all duration-300 border shadow-sm rounded-lg`}
          >
            <CardContent
              className={`py-8 ${
                isDark
                  ? "bg-slate-900"
                  : "bg-gray-50 shadow-[3px_0px_10px_2px_rgba(0,0,0,0.1),0px_0px_10px_1px_rgba(45,78,255,0.15)] rounded-lg"
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gap-y-9 xl:grid-cols-7 gap-y-7 gap-x-4 justify-items-center">
                {skillCategories.map((category) =>
                  category.data.map((skill, index) => (
                    <div
                      key={skill.name}
                      style={{ animationDelay: `${index * 1.1}s` }}
                      className={`flex flex-col-reverse items-center justify-center
                          py-6
                          rounded-md
                          w-full max-w-[130px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[170px]
                          h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px]
                          text-sm sm:text-base md:text-lg lg:text-xl
                          gap-2 sm:gap-3 md:gap-4 lg:gap-2
                          opacity-90 hover:opacity-100
                          shadow-[6px_0px_5px_10px_rgba(0,0,0,0.1),0px_0px_10px_2px_rgba(45,78,255,0.15)]
                          hover:scale-105 hover:font-semibold hover:text-black transition-all duration-200 hover:bg-[#82fceabc] hover:cursor-pointer
                          ${
                            isDark
                              ? "bg-gray-800"
                              : "bg-white ring ring-gray-900/10"
                          }`}
                    >
                      <span className="text-center">{skill.name}</span>

                      {skill.icon.startsWith("http") ? (
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.alt}
                          className="w-16 h-16"
                          width="64"
                          height="64"
                        />
                      ) : (
                        <span>{skill.icon}</span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
