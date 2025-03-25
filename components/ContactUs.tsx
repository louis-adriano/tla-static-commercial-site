"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone } from "lucide-react"

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const contactItems = document.querySelectorAll(".contact-item")
            contactItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fadeIn", "animate-complete")
              }, 150 * index)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gray-50 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-orange mb-6 md:mb-8 text-center">
          Contact Us
        </h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-12 md:mb-16 max-w-2xl mx-auto font-light">
          Have a question or want to work with us? Reach out directly.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="contact-item opacity-0 flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-md border border-gray-100 w-full max-w-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4 md:mb-6">
              <Mail className="w-7 h-7 md:w-8 md:h-8 text-custom-orange" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <a href="mailto:info@tla-solutions.com" className="text-custom-orange hover:underline font-medium">
              info@tla-solutions.com
            </a>
          </div>

          <div className="contact-item opacity-0 flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-md border border-gray-100 w-full max-w-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4 md:mb-6">
              <Phone className="w-7 h-7 md:w-8 md:h-8 text-custom-orange" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <a href="tel:+61234567890" className="text-custom-orange hover:underline font-medium">
              +61 (2) 3456 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

