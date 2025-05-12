"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RaspSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("root");
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

      <div className="container mx-auto py-14 px-4 md:px-6 h-auto md:h-screen flex flex-col justify-center relative z-10">
        <div className="flex flex-col justify-around md:flex-row md:items-center">
          <div className="flex flex-col md:items-center gap-4">
            <div className="flex justify-center md:flex-[0_0_25%] my-4 md:my-0 animate-on-scroll opacity-0">
              <div className="relative w-[320px] h-[420px] md:w-[470px] md:h-[520px]">
                <span className="text-white text-4xl font-regular md:hidden w-full text-center justify-center flex py-10">
                  RASP
                </span>
                <Image
                  src="/rasp-img.png"
                  alt="Mobile app security"
                  width={470}
                  height={520}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right column - Text and accordions */}
          <div className="text-white md:flex-[0_0_42%] flex flex-col items-center animate-on-scroll opacity-0 mb-8 md:mb-0 px-8 md:px-0 mt-8 md:mt-0">
            <span className="block font-medium text-2xl md:text-4xl leading-relaxed mb-8 max-w-[220px] md:max-w-[520px] mt-10 md:mt-0">
              Rasp(Runtime Application Self Protection)
            </span>

            {/* Accordions */}
            <div className="w-full space-y-4 mt-6">
              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "root" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("root")}
                >
                  <span className="text-gray-100">
                    Root and Jailbreak defense
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "root" ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {openAccordion === "root" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Detect and respond to rooted or jailbroken devices,
                    protecting your app from unauthorized access and potential
                    security vulnerabilities.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "anti-reverse" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("anti-reverse")}
                >
                  <span className="text-gray-100">
                    Anti-reverse engineering at runtime
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "anti-reverse"
                        ? "transform rotate-180"
                        : ""
                    )}
                  />
                </button>
                {openAccordion === "anti-reverse" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Implement dynamic protections that prevent reverse
                    engineering attempts during runtime, safeguarding your app's
                    intellectual property.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "integrity" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("integrity")}
                >
                  <span className="text-gray-100">
                    Integrity checks in real time
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "integrity"
                        ? "transform rotate-180"
                        : ""
                    )}
                  />
                </button>
                {openAccordion === "integrity" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Continuously verify the integrity of your app during
                    execution, detecting and preventing tampering attempts in
                    real-time.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "os-security" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("os-security")}
                >
                  <span className="text-gray-100">
                    OS security status verification
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "os-security"
                        ? "transform rotate-180"
                        : ""
                    )}
                  />
                </button>
                {openAccordion === "os-security" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Assess the security posture of the underlying operating
                    system, ensuring your app operates in a secure environment.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "ui-protection" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("ui-protection")}
                >
                  <span className="text-gray-100">UI layer protection</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "ui-protection"
                        ? "transform rotate-180"
                        : ""
                    )}
                  />
                </button>
                {openAccordion === "ui-protection" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Safeguard your app's user interface from overlay attacks and
                    screen capture attempts, protecting sensitive information
                    displayed on screen.
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "border border-gray-700/50 rounded-md overflow-hidden bg-[#111418]/30 backdrop-blur-sm",
                  openAccordion === "remote-sdk" ? "border-[#0066FF]/50" : ""
                )}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion("remote-sdk")}
                >
                  <span className="text-gray-100">
                    Remote SDK setup and control
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-gray-300",
                      openAccordion === "remote-sdk"
                        ? "transform rotate-180"
                        : ""
                    )}
                  />
                </button>
                {openAccordion === "remote-sdk" && (
                  <div className="p-4 pt-0 text-sm text-gray-400">
                    Configure and manage security features remotely, enabling
                    dynamic updates to protection measures without requiring app
                    updates.
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
