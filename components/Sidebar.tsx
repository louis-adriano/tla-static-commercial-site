"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Home, Briefcase, MessageSquare, Users, Info, ChevronRight, UserCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-us", "our-services", "our-partners", "our-team", "contact"]

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

    // Remove the overlay
    const overlay = document.querySelector(".sidebar-overlay")
    overlay?.classList.remove("active")

    // Re-enable scrolling
    document.body.style.overflow = ""

    // Dispatch a custom event to notify the MobileToggle component
    document.dispatchEvent(new CustomEvent("sidebarClosed"))
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home, disabled: false },
    { id: "about-us", label: "About Us", icon: Info, disabled: false },
    { id: "our-services", label: "Our Services", icon: Briefcase, disabled: false },
    { id: "our-partners", label: "Our Clients", icon: Users, disabled: false },
    { id: "our-team", label: "Our Team", icon: UserCircle, disabled: false },
    { id: "contact", label: "Contact Us", icon: MessageSquare, disabled: false },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-md z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center p-6 border-b">
          <Image src="/images/tla-logo.png" alt="TLA Logo" width={80} height={80} className="object-contain" />
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
                      "flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium tracking-wide letter-spacing-1 relative",
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
                    {!item.disabled && !isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-custom-orange/0 transition-all duration-200 rounded-l-lg opacity-0 group-hover:opacity-100"></div>
                    )}
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

