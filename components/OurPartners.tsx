"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

// Partner data with placeholder logos
const partners = [
  {
    id: 1,
    name: "Partner One",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    id: 2,
    name: "Partner Two",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    id: 3,
    name: "Partner Three",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    id: 4,
    name: "Partner Four",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    id: 5,
    name: "Partner Five",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    id: 6,
    name: "Partner Six",
    logo: "/placeholder.svg?height=80&width=200",
  },
]

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "TLA transformed our digital presence completely. Their team delivered beyond our expectations and were a pleasure to work with.",
    author: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
  },
  {
    id: 2,
    text: "The cybersecurity solutions provided by TLA have given us peace of mind. Their expertise in the field is unmatched.",
    author: "Michael Chen",
    title: "CTO, SecureNet Solutions",
  },
  {
    id: 3,
    text: "Working with TLA has streamlined our IT infrastructure significantly. Their support team is responsive and highly knowledgeable.",
    author: "Emily Rodriguez",
    title: "IT Director, Global Systems",
  },
  {
    id: 4,
    text: "The cloud migration project handled by TLA was seamless. They managed everything professionally from start to finish.",
    author: "David Kim",
    title: "Operations Manager, CloudFirst",
  },
  {
    id: 5,
    text: "TLA's software development team created exactly what we needed. Their attention to detail and communication was outstanding.",
    author: "Lisa Thompson",
    title: "Product Manager, Tech Innovations",
  },
  {
    id: 6,
    text: "We've seen remarkable improvements in our systems' performance since partnering with TLA. They're truly experts in their field.",
    author: "James Wilson",
    title: "Director, Digital Solutions",
  },
]

export default function OurPartners() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const partnerItems = document.querySelectorAll(".partner-item")
            partnerItems.forEach((item, index) => {
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
      id="our-partners"
      ref={sectionRef}
      className="py-16 md:py-20 bg-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-orange mb-12 md:mb-16 text-center">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-24">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item opacity-0 flex items-center justify-center group">
              <div className="relative w-full h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-orange mb-8 md:mb-12 text-center">
          What Our Clients Say
        </h3>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-none w-[85vw] sm:w-[70vw] md:w-[350px] snap-center">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-custom-orange mb-4" />
                <p className="text-base md:text-lg text-gray-800 mb-6 font-light leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm md:text-base text-gray-500 font-light">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

