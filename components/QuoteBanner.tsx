"use client"

import { useEffect, useRef, useState } from "react"

export default function QuoteBanner() {
  const [displayText, setDisplayText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText =
    "TLA is tech-jargon which stands for Three Letter Acronym. Everything in the IT world is a TLA, and we want to support everything in your IT world."
  const typingSpeed = 40 // milliseconds per character
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isMounted = true
    let currentIndex = 0
    let typingTimer: NodeJS.Timeout

    const startTypingAnimation = () => {
      if (!isMounted) return

      typingTimer = setTimeout(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1))
          currentIndex++
          startTypingAnimation()
        } else {
          setIsTypingComplete(true)
        }
      }, typingSpeed)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        startTypingAnimation()
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      isMounted = false
      clearTimeout(typingTimer)
      observer.disconnect()
    }
  }, [fullText])

  return (
    <section
      ref={containerRef}
      className="h-64 md:h-72 lg:h-80 bg-custom-orange relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-32 md:h-36 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed">
              <span className="typing-text">
                {displayText.split("Three Letter Acronym").map((part, i, arr) => {
                  if (i === 0) return <span key={i}>{part}</span>
                  return (
                    <span key={i}>
                      <span className="font-bold">Three Letter Acronym</span>
                      {part}
                    </span>
                  )
                })}
              </span>
              <span className={`typing-cursor ${isTypingComplete ? "opacity-0" : "opacity-100"}`}>|</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

