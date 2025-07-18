import { Card, CardContent } from "@/components/ui/card"
import type { TranslationType } from "@/lib/translations"

interface ExperienceProps {
  isDark: boolean
  t: TranslationType
}

export default function Experience({ isDark, t }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`min-h-screen flex items-center py-20 px-4 ${isDark ? "bg-[#1C2541]" : "bg-gray-50"}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
          {t.experience.title}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDark ? "bg-[#3A506B]" : "bg-gray-300"}`} />

          <div className="space-y-12">
            {t.experience.items.map((item, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div
                  className={`w-4 h-4 rounded-full ${isDark ? "bg-[#5BC0BE]" : "bg-[#3A506B]"} border-4 ${
                    isDark ? "border-[#1C2541]" : "border-gray-50"
                  } flex-shrink-0 mt-6`}
                />

                <Card
                  className={`flex-1 ${
                    isDark ? "bg-[#0B132B] border-[#3A506B]" : "bg-white border-gray-200"
                  } hover:scale-105 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                          {item.title}
                        </h3>
                        <p className={`${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"} font-medium`}>{item.company}</p>
                      </div>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          isDark ? "bg-[#3A506B] text-[#6FFFE9]" : "bg-[#5BC0BE] text-[#0B132B]"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
