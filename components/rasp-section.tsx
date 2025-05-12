"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RaspSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("malware");
  const sectionRef = useRef<HTMLElement>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[100vh] w-full snap-start relative overflow-hidden bg-white py-8 md:py-0"
    >
      {/* Content container with gradient background and rounded corners */}
      <div className="absolute inset-x-4 md:inset-x-8 lg:inset-x-12 top-4 bottom-4 md:top-8 md:bottom-8 lg:top-12 lg:bottom-12 bg-gradient-to-br from-[#111418] to-[#0a0e14] rounded-[40px] overflow-hidden">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[50%] md:w-[400px] h-[50vh] md:h-[400px] bg-[#1c7e94]/70 blur-[80px] md:blur-[120px] rounded-full"></div>
        </div>

        {/* Teal/blue glow in bottom right */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1c7e94] opacity-20 blur-[150px] rounded-full"></div>

        {/* Additional smaller glow for depth */}
        <div className="absolute bottom-[20%] right-[30%] w-[200px] h-[200px] bg-[#00C2FF] opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-auto md:h-screen flex flex-col justify-center relative z-10">
        <div className="flex flex-col justify-around md:flex-row md:items-center">
          <div className="flex flex-col md:items-center gap-4">
            <div className="flex justify-center md:flex-[0_0_25%] my-4 md:my-0 animate-on-scroll opacity-0">
              <div className="relative w-[200px] h-[380px] md:h-[489px] md:w-[248px]">
                <Image
                  src="/rasp-img.png"
                  alt="Mobile app security"
                  width={248}
                  height={489}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right column - Text and accordions */}
          <div className="text-white md:flex-[0_0_42%] animate-on-scroll opacity-0 mb-8 md:mb-0 px-8 md:px-0 mt-8 md:mt-0">
            <p className="text-gray-300 text-md leading-relaxed mb-8">
              Protect your app, your business, and your users with our
              all-in-one security suite for mobile and APIs. Using a layered
              defense strategy, the Full App Safety Suite safeguards against
              reverse engineering, app replication, device rooting, API misuse,
              Frida-based attacks, MitM threats, and more. Compatible with iOS,
              Android, and Flutter platforms.
            </p>

            {/* Accordions */}
            <div className="space-y-4 mt-6">
              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "malware" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("malware")}
                >
                  <span className="text-gray-100">Malware Detection</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "malware" ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {openAccordion === "malware" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Advanced malware detection identifies and blocks harmful
                    code, protecting your app from known and emerging threats in
                    real-time.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "obfuscation" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("obfuscation")}
                >
                  <span className="text-gray-100">Obfuscation</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "obfuscation"
                        ? "transform rotate-180"
                        : ""
                    )}
                  />
                </button>
                {openAccordion === "obfuscation" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Code obfuscation techniques make your app's code difficult
                    to reverse engineer, protecting your intellectual property
                    and preventing unauthorized access.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "rasp" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("rasp")}
                >
                  <span className="text-gray-100">RASP</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "rasp" ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {openAccordion === "rasp" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Runtime Application Self-Protection (RASP) continuously
                    monitors your app during execution, detecting and preventing
                    attacks in real-time without requiring code modifications.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
