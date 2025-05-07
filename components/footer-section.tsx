"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".animate-on-scroll")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full snap-start relative overflow-hidden bg-gradient-to-br from-[#111418] to-[#0a0e14] flex flex-col"
    >
      {/* Gradient light effect in bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0066FF] opacity-10 blur-[150px] rounded-full"></div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-[#1E2530]/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-16 text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stop losing users,
              <br />
              trust, and money to
              <br />
              weak app security.
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center bg-[#0066FF] hover:bg-[#0055DD] text-white font-medium py-3 px-6 rounded-full transition-colors mt-6"
            >
              Contact us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-gray-800 animate-on-scroll opacity-0">
          <div className="space-y-6">
            <Image src="/mad-logo.png" alt="MAD Logo" width={120} height={40} className="object-contain" />
            <p className="text-gray-400 text-sm max-w-md">
              MAD (Mobile Application Defense) is a RASP (Runtime Application Self-Protection) cybersecurity solution
              developed in Brazil to protect mobile applications and SDKs on Android and iOS against reverse
              engineering, tampering, and attacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    RASP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm animate-on-scroll opacity-0">
          &copy;2024 MAD. All Rights Reserved
        </div>
      </div>
    </section>
  )
}
