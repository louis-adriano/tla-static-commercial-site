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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-custom-orange to-custom-orange/90 pt-16 md:pt-0"
    >
      <div className="text-center w-full max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div ref={titleRef} className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 opacity-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-03-05_at_11.14.39_f11c1836-removebg-preview-fZHOAJSoilQso5IJ0m3a8YyEfKA79m.png"
            alt="TLA Logo"
            fill
            className="object-contain logo-cream-filter"
            priority
          />
        </div>
        <p ref={subtitleRef} className="text-xl md:text-3xl text-white mb-4 md:mb-6 opacity-0 font-light tracking-wide">
          Your Trusted Partner in Innovation
        </p>

        <p
          ref={descriptionRef}
          className="text-base md:text-lg lg:text-xl text-white opacity-0 font-light mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          We specialize in delivering cutting-edge technology solutions that transform businesses and drive growth. Our
          team of experts is dedicated to helping you navigate the digital landscape with confidence.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 opacity-0"
        >
          <button className="animated-button bg-white text-custom-orange px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium text-base md:text-lg w-full md:w-auto">
            <span>Get Started</span>
          </button>
          <button className="animated-button bg-transparent text-white px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-white hover:bg-white/10 transition-colors duration-300 font-medium text-base md:text-lg w-full md:w-auto mt-4 md:mt-0">
            <span>Learn More</span>
          </button>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">10+</div>
            <div className="text-xs md:text-sm font-light">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">200+</div>
            <div className="text-xs md:text-sm font-light">Projects Completed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
            <div className="text-xs md:text-sm font-light">Team Members</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">98%</div>
            <div className="text-xs md:text-sm font-light">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

