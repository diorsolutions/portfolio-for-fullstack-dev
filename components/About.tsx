import { Code } from "lucide-react"

interface AboutProps {
  isDark: boolean
  t: any
}

export default function About({ isDark, t }: AboutProps) {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center py-20 px-4 ${isDark ? "bg-[#1C2541]" : "bg-gray-50"}`}
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t.about.bio}</p>
            </div>

            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                {t.about.education}
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{t.about.educationText}</p>
            </div>

            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                {t.about.experience}
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{t.about.experienceText}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className={`w-80 h-80 rounded-full ${
                isDark
                  ? "bg-gradient-to-br from-[#3A506B] to-[#5BC0BE]"
                  : "bg-gradient-to-br from-[#5BC0BE] to-[#6FFFE9]"
              } flex items-center justify-center relative overflow-hidden`}
            >
              <div
                className={`w-72 h-72 rounded-full ${
                  isDark ? "bg-[#1C2541]" : "bg-white"
                } flex items-center justify-center relative`}
              >
                {/* Animated Code Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 animate-pulse">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded ${
                          i === 4
                            ? `w-12 h-12 rounded-full ${
                                isDark
                                  ? "bg-gradient-to-r from-[#5BC0BE] to-[#6FFFE9]"
                                  : "bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
                              } flex items-center justify-center animate-spin-slow`
                            : isDark
                              ? i % 2 === 0
                                ? "bg-[#5BC0BE]"
                                : "bg-[#6FFFE9]"
                              : i % 2 === 0
                                ? "bg-[#3A506B]"
                                : "bg-[#5BC0BE]"
                        } animate-bounce`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {i === 4 && <Code className={`h-6 w-6 ${isDark ? "text-[#0B132B]" : "text-white"}`} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
