"use client"

import { useEffect, useRef } from "react"
import { Shield, MessageSquare, Users, Lightbulb } from "lucide-react"

// Philosophy data
const philosophyPoints = [
  {
    id: 1,
    title: "Security first.",
    description:
      "As part of the discovery process we'll talk a lot about security. Seemingly simple matters can quickly turn disastrous. Security is as much a culture problem as it is a technology problem, so both angles are scrutinised.",
    icon: Shield,
  },
  {
    id: 2,
    title: "No bullsh*t.",
    description:
      "If there's something we can't do, we'll tell you why. If we can't do it within agreed timeframes, we'll tell you when. We've built our reputation around total transparency with our customers, and that's why they choose us for their technology management.",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Relationships over Contracts.",
    description:
      "We don't want you to think twice before calling, so we don't do complicated service agreements that arbitrarily limit what we can achieve together. We want you to think of us as an extension of your team; your trusted partner in technology.",
    icon: Users,
  },
  {
    id: 4,
    title: "Simplicity over Complexity.",
    description:
      "Solutions should be sensible and fit-for-purpose. We don't want to implement solutions which won't be used, or worse, that people are reluctant to use. We provide training and support throughout the process to ensure successful uptake of new initiatives.",
    icon: Lightbulb,
  },
]

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = document.querySelectorAll(".timeline-item")
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fadeIn", "animate-complete")
              }, 300 * index)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Timeline scroll animation
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineItems = document.querySelectorAll(".timeline-dot")
        timelineItems.forEach((item) => {
          const rect = item.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.8) {
            item.classList.add("active")
            const line = item.previousElementSibling
            if (line && line.classList.contains("timeline-line")) {
              line.classList.add("active")
            }
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="about-us" ref={sectionRef} className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-orange mb-16 text-center">About Us</h2>

        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <span className="text-lg md:text-xl font-bold">TLA IT (formally Your Tech Solution)</span> was formed in
            2018 to help small businesses extract maximum value from their technology. We don't believe in selling
            overkill products with unreasonable cost and complexity. Just the right product, at the right time, and none
            of the fluff with features you'll never use.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-custom-orange mb-14 text-center">Our Philosophy</h3>

        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          {philosophyPoints.map((point, index) => (
            <div
              key={point.id}
              className={`timeline-item opacity-0 relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } mb-10 md:mb-14`}
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex flex-col items-center">
                <div
                  className={`timeline-line h-full w-0.5 bg-custom-orange transform origin-top scale-y-0 transition-transform duration-1000 ${
                    index === 0 ? "h-0" : ""
                  }`}
                ></div>
                <div className="timeline-dot w-8 h-8 rounded-full bg-white border-4 border-custom-orange flex items-center justify-center z-10 transform scale-0 transition-transform duration-500">
                  <point.icon className="w-4 h-4 text-custom-orange" />
                </div>
              </div>

              {/* Content */}
              <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"}`}>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{point.title}</h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

