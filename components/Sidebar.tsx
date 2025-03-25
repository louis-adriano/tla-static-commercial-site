"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Home, Briefcase, MessageSquare, Users, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "our-services", "our-partners", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }

    // Close mobile sidebar after clicking
    const sidebar = document.querySelector("aside.fixed")
    sidebar?.classList.remove("open")
    document.body.style.overflow = ""
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home, disabled: false },
    { id: "our-services", label: "Our Services", icon: Briefcase, disabled: false },
    { id: "our-partners", label: "Our Clients", icon: Users, disabled: false },
    { id: "contact", label: "Contact Us", icon: MessageSquare, disabled: false },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-md z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center p-6 border-b">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-03-05_at_11.14.39_f11c1836-removebg-preview-fZHOAJSoilQso5IJ0m3a8YyEfKA79m.png"
            alt="TLA Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && !item.disabled
              return (
                <li key={item.id}>
                  <button
                    onClick={() => !item.disabled && scrollToSection(item.id)}
                    className={cn(
                      "flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium tracking-wide letter-spacing-1",
                      isActive
                        ? "bg-custom-orange text-white"
                        : item.disabled
                          ? "text-custom-orange/40 cursor-not-allowed"
                          : "text-custom-orange hover:bg-custom-orange/10",
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-6 border-t text-center text-sm text-custom-orange font-light">
          <p>© 2024 TLA. All rights reserved.</p>
        </div>
      </div>
    </aside>
  )
}

