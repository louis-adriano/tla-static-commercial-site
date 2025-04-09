"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

// Testimonial data - removed placeholders, keeping only real testimonials
const testimonials = [
  {
    id: 1,
    text: "As a small business with very limited IT smarts, we are fully dependent on our IT consultant to help us at short notice. Nathan has always been there for us. He always answers our inquiries swiftly. He always provides us with a timeframe and explains the proposed fix. Most importantly, Nathan has always followed through on his promises. We will continue to use Nathan's services ongoing, and I wouldn't hesitate to recommend him to any business.",
    author: "Soho Projects",
    title: "",
  },
  {
    id: 2,
    text: "Mr. Nathan Houison has been maintaining and managing my IT security and functionality for the last three years. I have always found Nathan to be reliable and willing to assist with the many day to day issues faced by my business operation. He is always courteous and returns calls and emails swiftly and has visited my premises to personally assist with set up, installation, troubleshooting and system management. I could not recommend him more highly for his courteous depth of knowledge and 'can do' attitude.",
    author: "Frank Robinson Jewellery",
    title: "",
  },
]

export default function OurClients() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = testimonials.length

  // Add function to handle navigation
  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.querySelector(".testimonial-item")?.clientWidth || 0
      const newPosition = slideWidth * index
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setCurrentSlide(index)
    }
  }

  // Add function to handle next and previous buttons
  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % totalSlides
    scrollToSlide(nextSlide)
  }

  const handlePrev = () => {
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides
    scrollToSlide(prevSlide)
  }

  // Add scroll event listener to update current slide
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const slideWidth = scrollContainerRef.current.querySelector(".testimonial-item")?.clientWidth || 0
        if (slideWidth > 0) {
          const newIndex = Math.round(scrollLeft / slideWidth)
          setCurrentSlide(newIndex)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialItems = document.querySelectorAll(".testimonial-item")
            testimonialItems.forEach((item, index) => {
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
      className="min-h-screen py-24 md:py-32 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 w-full max-w-6xl">
        <div className="bg-custom-orange rounded-2xl p-8 md:p-12 border border-white/20 shadow-lg relative overflow-hidden">
          <div className="w-full text-center mb-10 md:mb-14">
            <div className="inline-block w-auto max-w-[350px] md:max-w-[400px] mx-auto">
              <Image
                src="/images/testimonials-title.svg"
                alt="Testimonials"
                width={1600}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="relative py-4">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-item opacity-0 flex-none w-[85vw] sm:w-[70vw] md:w-[450px] snap-center"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 h-full flex flex-col">
                    <Quote className="w-10 h-10 md:w-12 md:h-12 text-custom-orange mb-4" />
                    <p className="text-base md:text-lg text-gray-800 mb-6 font-light leading-relaxed flex-grow">
                      {testimonial.text}
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                      {testimonial.title && (
                        <p className="text-sm md:text-base text-gray-500 font-light">{testimonial.title}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons and indicator dots - only show if there's more than one testimonial */}
            {testimonials.length > 1 && (
              <div className="flex justify-center items-center mt-6 gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full shadow-md transform transition-transform hover:scale-110 focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "w-10 bg-white" : "w-6 bg-white/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full shadow-md transform transition-transform hover:scale-110 focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
