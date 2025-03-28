import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import QuoteBanner from "@/components/QuoteBanner"
import OurServices from "@/components/OurServices"
import OurClients from "@/components/OurPartners"
import OurTeam from "@/components/OurTeam"
import ContactUs from "@/components/ContactUs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="bg-white">
        <AboutUs />
      </div>
      <QuoteBanner />
      <div className="bg-[#fff8f0]">
        <OurServices />
      </div>
      <div className="bg-white">
        <OurClients />
      </div>
      <div className="bg-[#fff8f0]">
        <OurTeam />
      </div>
      <ContactUs />
    </main>
  )
}

