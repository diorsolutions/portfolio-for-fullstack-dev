interface ScrollProgressProps {
  scrollProgress: number
}

export default function ScrollProgress({ scrollProgress }: ScrollProgressProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-gradient-to-r from-[#5BC0BE] to-[#6FFFE9] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
