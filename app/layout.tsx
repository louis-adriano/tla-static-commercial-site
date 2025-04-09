import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import Sidebar from "@/components/Sidebar"
import MobileToggle from "@/components/MobileToggle"

// Use Jost font
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
})

export const metadata: Metadata = {
  title: "TLA IT",
  description: "TLA provides innovative solutions for your business needs.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jost.variable} font-sans`}>
        <div className="flex">
          <Sidebar />
          <MobileToggle />
          <div className="flex-1 md:ml-64 max-w-full md:max-w-[calc(100vw-16rem)]">{children}</div>
        </div>
      </body>
    </html>
  )
}
