import { cn } from "@/lib/utils"

interface SectionDividerProps {
  variant?: "default" | "reverse"
  className?: string
}

export default function SectionDivider({ variant = "default", className }: SectionDividerProps) {
  return (
    <div className={cn("relative h-16 md:h-24", className)}>
      {variant === "default" ? (
        // Default wave divider (point down)
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path fill="#FFBF76" d="M0,64 C320,100 420,0 740,0 C1060,0 1120,100 1440,64 L1440,120 L0,120 Z"></path>
        </svg>
      ) : (
        // Reverse wave divider (point up)
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path fill="#FFBF76" d="M0,56 C320,20 420,120 740,120 C1060,120 1120,20 1440,56 L1440,0 L0,0 Z"></path>
        </svg>
      )}
    </div>
  )
}

