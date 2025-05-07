"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Features() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("malware")

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <section className="h-screen w-full snap-start relative overflow-hidden bg-gradient-to-br from-[#111418] to-[#0a0e14]">
      {/* Gradient light effect in bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0066FF] opacity-10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Left column - Heading */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              One <span className="text-[#0066FF]">Solution</span> For
              <br />
              All Your App
              <br />
              Security Needs.
            </h2>
          </div>

          {/* Middle column - Phone mockup */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[560px] bg-white rounded-[40px] shadow-xl overflow-hidden">
              {/* Phone status bar */}
              <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-6">
                <div className="w-16 h-2 bg-black rounded-full"></div>
                <div className="text-xs">9:41</div>
              </div>

              {/* App content */}
              <div className="absolute top-16 left-0 right-0 bottom-16 px-4">
                <div className="text-black font-medium mb-4 text-lg">App</div>

                {/* App buttons */}
                <div className="space-y-4">
                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-md text-white text-left",
                      openAccordion === "malware" ? "bg-[#0066FF]" : "bg-[#0066FF]/90",
                    )}
                    onClick={() => toggleAccordion("malware")}
                  >
                    Malware detection
                  </button>

                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-md text-white text-left",
                      openAccordion === "obfuscation" ? "bg-[#0066FF]" : "bg-[#0066FF]/90",
                    )}
                    onClick={() => toggleAccordion("obfuscation")}
                  >
                    Obfuscation
                  </button>

                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-md text-white text-left",
                      openAccordion === "rasp" ? "bg-[#0066FF]" : "bg-[#0066FF]/90",
                    )}
                    onClick={() => toggleAccordion("rasp")}
                  >
                    RASP
                  </button>
                </div>
              </div>

              {/* Phone navigation bar */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-black flex justify-center items-center">
                <div className="w-1/3 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right column - Text and accordions */}
          <div className="text-white space-y-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Protect your app, your business, and your users with our all-in-one security suite for mobile and APIs.
              Using a layered defense strategy, the Full App Safety Suite safeguards against reverse engineering, app
              replication, device rooting, API misuse, Frida-based attacks, MitM threats, and more. Compatible with iOS,
              Android, and Flutter platforms.
            </p>

            {/* Accordions */}
            <div className="space-y-3 mt-6">
              <div
                className={cn(
                  "border border-gray-700 rounded-md overflow-hidden",
                  openAccordion === "malware" ? "border-[#0066FF]/50" : "",
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("malware")}
                >
                  <span>Malware Detection</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      openAccordion === "malware" ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                {openAccordion === "malware" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Advanced malware detection identifies and blocks harmful code, protecting your app from known and
                    emerging threats in real-time.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700 rounded-md overflow-hidden",
                  openAccordion === "obfuscation" ? "border-[#0066FF]/50" : "",
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("obfuscation")}
                >
                  <span>Obfuscation</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      openAccordion === "obfuscation" ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                {openAccordion === "obfuscation" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Code obfuscation techniques make your app's code difficult to reverse engineer, protecting your
                    intellectual property and preventing unauthorized access.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700 rounded-md overflow-hidden",
                  openAccordion === "rasp" ? "border-[#0066FF]/50" : "",
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("rasp")}
                >
                  <span>RASP</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      openAccordion === "rasp" ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                {openAccordion === "rasp" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Runtime Application Self-Protection (RASP) continuously monitors your app during execution,
                    detecting and preventing attacks in real-time without requiring code modifications.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
