import type { TranslationType } from "@/lib/translations"

interface FooterProps {
  isDark: boolean
  t: TranslationType
}

export default function Footer({ isDark, t }: FooterProps) {
  return (
    <footer className={`py-8 px-4 border-t ${isDark ? "bg-[#0B132B] border-[#1C2541]" : "bg-white border-gray-200"}`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t.footer.copyright}</p>
        <p className={`text-sm ${isDark ? "text-[#5BC0BE]" : "text-[#3A506B]"}`}>{t.footer.brand}</p>
      </div>
    </footer>
  )
}
