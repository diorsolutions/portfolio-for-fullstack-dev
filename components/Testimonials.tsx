import { Card, CardContent } from "@/components/ui/card"

interface TestimonialsProps {
  isDark: boolean
  t: any
}

export default function Testimonials({ isDark, t }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`min-h-screen flex items-center py-20 px-4 ${isDark ? "bg-[#1C2541]" : "bg-gray-50"}`}
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
          {t.testimonials.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial: any, index: number) => (
            <Card
              key={index}
              className={`${
                isDark ? "bg-[#0B132B] border-[#3A506B]" : "bg-white border-gray-200"
              } hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      isDark
                        ? "bg-gradient-to-r from-[#5BC0BE] to-[#6FFFE9]"
                        : "bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
                    } flex items-center justify-center mr-4`}
                  >
                    <span className={`text-lg font-bold ${isDark ? "text-[#0B132B]" : "text-white"}`}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? "text-[#6FFFE9]" : "text-[#0B132B]"}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"} italic`}>"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
