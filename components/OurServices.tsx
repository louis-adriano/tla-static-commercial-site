"use client"

import { useEffect, useRef } from "react"
import { Cloud, Shield, Network, Monitor, Server, Laptop, ChevronRight } from "lucide-react"

// Updated service data with titles only
const services = [
  {
    id: 1,
    title: "Complete Technology Management",
    icon: Shield,
  },
  {
    id: 2,
    title: "Microsoft Office 365 and Google GSuite",
    icon: Cloud,
  },
  {
    id: 3,
    title: "Networking",
    icon: Network,
  },
  {
    id: 4,
    title: "Hardware Sales and Setup",
    icon: Laptop,
  },
  {
    id: 5,
    title: "Cloud computing",
    icon: Server,
  },
  {
    id: 6,
    title: "General IT",
    icon: Monitor,
  },
]

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceItems = document.querySelectorAll(".service-item")
            serviceItems.forEach((item, index) => {
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
      id="our-services"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-orange mb-6 md:mb-8 text-center">
          Our Services
        </h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-16 md:mb-20 max-w-3xl mx-auto font-light">
          TLA is your one-stop IT service company providing comprehensive solutions to meet all your technology needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="service-item opacity-0 flex flex-col items-center group">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 border-custom-orange relative overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="absolute inset-3 rounded-full bg-custom-orange bg-opacity-10 flex items-center justify-center">
                  <service.icon className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 text-custom-orange" />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-full"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center bg-custom-orange hover:bg-custom-orange/90 text-white px-8 py-3 rounded-full transition-colors font-medium text-lg group"
          >
            <span>Learn More</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

