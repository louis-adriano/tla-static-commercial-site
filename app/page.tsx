import Hero from "@/components/Hero"
import OurServices from "@/components/OurServices"
import OurPartners from "@/components/OurPartners"
import ContactUs from "@/components/ContactUs"

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Hero />
      <OurServices />
      <OurPartners />
      <ContactUs />
    </main>
  )
}

