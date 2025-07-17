import { Card, CardContent } from "@/components/ui/card"
import { skillsData } from "@/lib/data"

interface SkillsProps {
  isDark: boolean
  t: any
}

export default function Skills({ isDark, t }: SkillsProps) {
  const skillCategories = [
    { key: "core", data: skillsData.core, title: t.skills.core },
    { key: "frameworks", data: skillsData.frameworks, title: t.skills.frameworks },
    { key: "tools", data: skillsData.tools, title: t.skills.tools },
    { key: "advanced", data: skillsData.advanced, title: t.skills.advanced },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4" style={{ scrollSnapAlign: "start" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.key}
              className={`${
                isDark ? "bg-[#1C2541] border-[#3A506B]" : "bg-white border-gray-200"
              } hover:scale-105 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <h3
                  className={`text-xl font-semibold mb-6 text-center ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}
                >
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.data.map((skill, index) => (
                    <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{skill.name}</span>
                        </div>
                        <span className={`text-sm font-bold ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full h-3 rounded-full ${isDark ? "bg-[#3A506B]" : "bg-gray-200"} overflow-hidden`}
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
          ))}
        </div>
      </div>
    </section>
  )
}
