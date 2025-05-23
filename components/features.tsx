"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Features() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("malware");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="flex items-centers min-h-[100vh] w-full relative overflow-hidden bg-white mt-[40px] md:mt-[80px] mb-[80px]">
      {/* Content container with gradient background and rounded corners */}
      <div className="absolute inset-x-4 md:inset-x-8 lg:inset-x-12 top-0 bottom-0 bg-gradient-to-br from-[#111418] to-[#0a0e14] rounded-[40px] overflow-hidden">
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

      <div className="container mx-auto px-4 md:px-6 py-8 h-auto flex flex-col justify-center relative z-10">
        <div className="flex flex-col justify-around md:flex-row md:items-center">
          <div className="flex flex-col md:items-center gap-4">
            {/* Left column - Heading */}
            <div className="flex justify-center md:flex-[0_0_33%] mt-8 md:mt-0">
              <h2 className="text-3xl lg:text-4xl font-regular text-white mb-4">
                Complete <br />
                <span className="text-[#0066FF]">Security</span> for Your <br />
                App
              </h2>
            </div>

            {/* Middle column - Phone mockup */}
            <div className="flex justify-center md:flex-[0_0_25%] my-4 md:my-0">
              <div className="relative w-[188px] h-[348px] md:w-[248px] md:h-[489px]">
                <Image
                  src="/mobile-screen-features.svg"
                  alt="Mobile app security"
                  width={570}
                  height={635}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 188px, 248px"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Right column - Text and accordions */}
          <div className="text-white md:flex-[0_0_42%] mb-8 md:mb-0 px-8 md:px-0 mt-8 md:mt-0">
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
