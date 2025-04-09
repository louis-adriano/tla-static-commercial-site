import { Shield, Cloud, Network, Laptop, Server, Monitor, ArrowRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Complete Technology Management",
    description:
      "We can inventory your entire tech stack and identify improvements to better align with and support your business processes. Our device management platform alerts us to possible issues before they become real problems. Ensure systems are patched and applications kept up-to-date.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Microsoft Office 365 and Google GSuite",
    description:
      "Move your business email and productivity applications to the Cloud and communicate confidently on battle-tested platforms.",
    icon: Cloud,
  },
  {
    id: 3,
    title: "Networking",
    description:
      "High-performance Unifi network installations, upgrades, and expansions with security at its core. If you're not ready to upgrade, we will help you get the most from what you already have.",
    icon: Network,
  },
  {
    id: 4,
    title: "Hardware Sales and Setup",
    description:
      "We can supply and configure desktop computers, laptops, and any of the peripherals you need to maximise comfort and efficiency.",
    icon: Laptop,
  },
  {
    id: 5,
    title: "Cloud computing",
    description:
      "AWS Certified professional with 10+ years managing complex corporate environments. Ditch your dated on-premises technology and let us guide your journey to the Cloud.",
    icon: Server,
  },
  {
    id: 6,
    title: "General IT",
    description:
      "Let us plan and integrate the right solutions for your business. We want to find the right solutions at the right price. We can help you understand your applications, hardware, SaaS, networks, and CCTV.",
    icon: Monitor,
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20 md:pt-0">
      <div className="bg-[#fff8f0] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/tla-logo.png" alt="TLA Logo" fill className="object-contain" priority />
            </div>
            <div className="w-full max-w-[300px] md:max-w-[350px] mx-auto mb-6">
              <Image
                src="/images/services-title.svg"
                alt="Our Services"
                width={1200}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              TLA provides comprehensive IT solutions tailored to your business needs. Explore our range of services
              below.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-custom-orange/20"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-custom-orange/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-custom-orange" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ready to learn more? Let's talk.</h3>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-custom-orange hover:bg-custom-orange/90 text-white px-8 py-3 rounded-full transition-colors font-medium text-lg group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center text-custom-orange hover:text-custom-orange/80 text-sm font-medium transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
