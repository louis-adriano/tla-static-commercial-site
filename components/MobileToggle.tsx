"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function MobileToggle() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    const sidebar = document.querySelector("aside.fixed")
    sidebar?.classList.toggle("open")

    // Toggle overlay
    const overlay = document.querySelector(".sidebar-overlay")
    overlay?.classList.toggle("active")

    // Toggle body scroll lock
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  useEffect(() => {
    // Create overlay element if it doesn't exist
    if (!document.querySelector(".sidebar-overlay")) {
      const overlay = document.createElement("div")
      overlay.className = "sidebar-overlay"
      document.body.appendChild(overlay)

      // Add click event to close sidebar when overlay is clicked
      overlay.addEventListener("click", () => {
        setIsOpen(false)
        document.querySelector("aside.fixed")?.classList.remove("open")
        overlay.classList.remove("active")
        document.body.style.overflow = ""
      })
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
        document.querySelector("aside.fixed")?.classList.remove("open")
        document.querySelector(".sidebar-overlay")?.classList.remove("active")
        document.body.style.overflow = ""
      }
    }

    // Handle escape key to close sidebar
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
        document.querySelector("aside.fixed")?.classList.remove("open")
        document.querySelector(".sidebar-overlay")?.classList.remove("active")
        document.body.style.overflow = ""
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("keydown", handleEscKey)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen])

  return (
    <button
      className="mobile-toggle-btn fixed top-4 left-4 z-50 bg-custom-orange text-white p-2 rounded-md shadow-md md:hidden"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}

