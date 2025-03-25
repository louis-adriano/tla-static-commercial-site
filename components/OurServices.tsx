"use client"

import { useEffect, useRef } from "react"
import { Cloud, Shield, Database, Monitor, Code, Headphones, ChevronRight } from "lucide-react"

// Service data
const services = [
  {
    id: 1,
    title: "AWS Cloud Solutions",
    description: "Expert AWS implementation, migration, and management services to optimize your cloud infrastructure.",
    icon: Cloud,
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving digital threats.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Data Management",
    description: "Strategic data solutions that transform your information into valuable business insights.",
    icon: Database,
  },
  {
    id: 4,
    title: "IT Infrastructure",
    description: "Robust infrastructure design and management to support your business operations.",
    icon: Monitor,
  },
  {
    id: 5,
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business requirements.",
    icon: Code,
  },
  {
    id: 6,
    title: "IT Support",
    description: "Reliable technical support to keep your systems running smoothly and efficiently.",
    icon: Headphones,
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

  return (
    <section
      id="our-services"
      ref={sectionRef}
      className="py-16 md:py-20 bg-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-orange mb-4 text-center">Our Services</h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-12 md:mb-16 max-w-2xl mx-auto font-light">
          TLA is your one-stop IT service company providing comprehensive solutions to meet all your technology needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-12">
          {services.map((service) => (
            <div key={service.id} className="service-item opacity-0 flex flex-col items-center group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center mb-4 md:mb-6 border-2 border-custom-orange relative overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="absolute inset-3 rounded-full bg-custom-orange bg-opacity-10 flex items-center justify-center">
                  <service.icon className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 text-custom-orange" />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-full"></div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center font-light mb-4">{service.description}</p>

              <button className="flex items-center text-custom-orange hover:text-custom-orange/80 transition-colors font-medium group">
                <span>More</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

