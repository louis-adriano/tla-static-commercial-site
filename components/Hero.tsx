"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-scaleIn")
      titleRef.current.addEventListener("animationend", () => {
        titleRef.current?.classList.add("animate-complete")
      })
    }
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current?.classList.add("animate-fadeInUp")
        subtitleRef.current?.addEventListener("animationend", () => {
          subtitleRef.current?.classList.add("animate-complete")
        })
      }, 300)
    }
    if (descriptionRef.current) {
      setTimeout(() => {
        descriptionRef.current?.classList.add("animate-fadeInUp")
        descriptionRef.current?.addEventListener("animationend", () => {
          descriptionRef.current?.classList.add("animate-complete")
        })
      }, 500)
    }
    if (buttonsRef.current) {
      setTimeout(() => {
        buttonsRef.current?.classList.add("animate-fadeInUp")
        buttonsRef.current?.addEventListener("animationend", () => {
          buttonsRef.current?.classList.add("animate-complete")
        })
      }, 700)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-custom-orange to-custom-orange/90 pt-16 md:pt-0"
    >
      <div className="text-center w-full max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div ref={titleRef} className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 opacity-0">
          <Image src="/images/tla-logo.png" alt="TLA Logo" fill className="object-contain logo-cream-filter" priority />
        </div>
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl text-white mb-6 md:mb-8 opacity-0 font-bold tracking-wide"
        >
          You run your business, we'll run your IT.
        </h2>

        <p
          ref={descriptionRef}
          className="text-base md:text-lg lg:text-xl text-white opacity-0 font-light mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          We handle everything from user training to developing your technology roadmap. Contact us to talk about your
          needs and what we can do to help.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 opacity-0"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="animated-button bg-white text-custom-orange px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium text-base md:text-lg w-full md:w-auto"
          >
            <span>Get Started</span>
          </button>
          <button
            onClick={() => scrollToSection("our-services")}
            className="animated-button bg-transparent text-white px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-white hover:bg-white/10 transition-colors duration-300 font-medium text-base md:text-lg w-full md:w-auto mt-4 md:mt-0"
          >
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </section>
  )
}

