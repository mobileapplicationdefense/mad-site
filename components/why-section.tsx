"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function WhySection() {
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
    <section ref={sectionRef} className="h-screen w-full snap-start relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Map background */}
        <div className="absolute right-0 top-0 w-[60%] h-full">
          <Image src="/map.png" alt="World map" fill className="object-contain object-right" priority />
        </div>

        {/* Spider background */}
        <div className="absolute right-[15%] top-[15%] w-[300px] h-[300px] opacity-50">
          <Image src="/spider.png" alt="Spider illustration" width={300} height={300} className="object-contain" />
        </div>

        {/* Blue shapes left */}
        <div className="absolute left-0 top-0 h-full">
          <Image
            src="/blue-shapes-left.png"
            alt="Blue shapes"
            width={200}
            height={600}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
          {/* Left column - Heading and illustration */}
          <div className="relative">
            <div className="animate-on-scroll opacity-0 transition-opacity duration-700">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#111418]">
                Your App
                <br />
                Deserves
                <br />
                Protection.
                <br />
                <span className="text-[#0066FF] flex items-center">
                  Here's Why
                  <ArrowRight className="ml-2 h-6 w-6 inline" />
                </span>
              </h2>
            </div>

            {/* Character with shield illustration */}
            <div className="relative mt-8 md:mt-12 animate-on-scroll opacity-0 transition-opacity duration-700 delay-300">
              <div className="relative w-[300px] h-[300px]">
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Person with shield illustration */}
                  <path
                    d="M150 220C183.137 220 210 193.137 210 160C210 126.863 183.137 100 150 100C116.863 100 90 126.863 90 160C90 193.137 116.863 220 150 220Z"
                    fill="#0066FF"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M150 210C177.614 210 200 187.614 200 160C200 132.386 177.614 110 150 110C122.386 110 100 132.386 100 160C100 187.614 122.386 210 150 210Z"
                    fill="#0066FF"
                    fillOpacity="0.2"
                  />

                  {/* Head */}
                  <path
                    d="M150 140C163.807 140 175 128.807 175 115C175 101.193 163.807 90 150 90C136.193 90 125 101.193 125 115C125 128.807 136.193 140 150 140Z"
                    fill="#0066FF"
                  />

                  {/* Body */}
                  <path
                    d="M190 180C190 157.909 172.091 140 150 140C127.909 140 110 157.909 110 180V210H190V180Z"
                    fill="#0066FF"
                  />

                  {/* Shield */}
                  <path
                    d="M180 170C180 153.431 166.569 140 150 140C133.431 140 120 153.431 120 170V190H180V170Z"
                    fill="#0066FF"
                  />
                  <path
                    d="M165 165C165 156.716 158.284 150 150 150C141.716 150 135 156.716 135 165V180H165V165Z"
                    fill="white"
                  />

                  {/* Checkmark */}
                  <path
                    d="M145 165L150 170L160 160"
                    stroke="#0066FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Dots around */}
                  <circle cx="110" cy="130" r="3" fill="#0066FF" />
                  <circle cx="120" cy="110" r="3" fill="#0066FF" />
                  <circle cx="180" cy="120" r="3" fill="#0066FF" />
                  <circle cx="190" cy="150" r="3" fill="#0066FF" />
                  <circle cx="170" cy="190" r="3" fill="#0066FF" />
                  <circle cx="130" cy="200" r="3" fill="#0066FF" />
                  <circle cx="100" cy="170" r="3" fill="#0066FF" />
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 -z-10">
                  <Image src="/glow-character.png" alt="Glow effect" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="space-y-16 md:space-y-24">
            {/* Mobile Attacks */}
            <div className="animate-on-scroll opacity-0 transition-opacity duration-700 delay-150">
              <h3 className="text-xl font-bold mb-1">
                Mobile
                <br />
                <span className="text-[#0066FF]">Attacks</span>
              </h3>
              <div className="mt-4">
                <div className="text-4xl font-bold">+70%</div>
                <div className="text-sm text-gray-600">growth since 2020</div>
              </div>
            </div>

            {/* Global Threats */}
            <div className="animate-on-scroll opacity-0 transition-opacity duration-700 delay-300">
              <h3 className="text-xl font-bold mb-1">
                Global
                <br />
                <span className="text-[#0066FF]">Threats</span>
              </h3>
              <div className="mt-4">
                <div className="text-4xl font-bold">3.9M</div>
                <div className="text-sm text-gray-600">cyberattacks in Latin America(2024)</div>
              </div>
              <div className="mt-4">
                <div className="text-4xl font-bold">161B</div>
                <div className="text-sm text-gray-600">cyberattacks in 2024</div>
              </div>
            </div>

            {/* Brazil */}
            <div className="animate-on-scroll opacity-0 transition-opacity duration-700 delay-450">
              <h3 className="text-xl font-bold mb-1">Brazil</h3>
              <div className="mt-2">
                <div className="text-sm text-gray-600">Lead in mobile threats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
