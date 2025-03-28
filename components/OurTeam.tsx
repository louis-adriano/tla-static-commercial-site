"use client"

import { useEffect, useRef } from "react"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Nathan Houison",
    qualification: "B.IT",
    title: "Director and Lead Solutions Architect",
    description:
      "Nathan leads our technical strategy and oversees all client solutions, bringing over a decade of IT experience to every project.",
    imageUrl: "/images/team/placeholder.png", // Replace with actual image
  },
  {
    id: 2,
    name: "Marilyn Wijaya",
    qualification: "B.Arch",
    title: "Technical Engineer (and an actual Architect)",
    description:
      "Marilyn combines her architectural background with technical expertise to design elegant, functional solutions for complex problems.",
    imageUrl: "/images/team/placeholder.png", // Replace with actual image
  },
  {
    id: 3,
    name: "Louis Adriano",
    qualification: "B.IT",
    title: "Full-Stack Developer",
    description:
      "Louis specializes in creating responsive, user-friendly web applications that help businesses achieve their digital goals.",
    imageUrl: "/images/team/placeholder.png", // Replace with actual image
  },
]

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const teamItems = document.querySelectorAll(".team-item")
            teamItems.forEach((item, index) => {
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
      id="our-team"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-orange mb-8 md:mb-12 text-center">
          Our Team
        </h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-16 md:mb-20 max-w-3xl mx-auto font-light">
          Meet the experts behind TLA's success. Our team combines diverse skills and experience to deliver exceptional
          IT solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-item opacity-0 flex flex-col items-center group">
              <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 overflow-hidden relative transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg border-4 border-custom-orange/20">
                <div className="absolute inset-0 bg-gradient-to-b from-custom-orange/0 to-custom-orange/20"></div>
                <div className="w-full h-full flex items-center justify-center text-custom-orange">
                  {/* Placeholder for team member image */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                {member.name} <span className="text-custom-orange">{member.qualification}</span>
              </h3>

              <h4 className="text-lg font-medium text-gray-700 text-center mb-3">{member.title}</h4>

              <p className="text-gray-600 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

