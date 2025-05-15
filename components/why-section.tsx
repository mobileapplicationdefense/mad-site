"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="h-screen w-full relative overflow-hidden bg-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Map background */}
        <div className="absolute right-0 top-[100px] w-[60%] h-full">
          <Image
            src="/map.png"
            alt="World map"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Spider background */}
        <div className="absolute right-[15%] top-0 w-[300px] h-[300px] opacity-50">
          <Image
            src="/spider.png"
            alt="Spider illustration"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Blue shapes left */}
        <div className="absolute left-0 -bottom-[100px] h-full max-h-[400px] md:max-h-[500px] md:bottom-[100px]">
          <Image
            src="/blue-shapes-left.png"
            alt="Blue shapes"
            width={200}
            height={600}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-full relative z-10 flex items-center">
        <div
          className={cn(
            "flex flex-col md:flex-row w-full",
            "h-full md:h-auto",
            "justify-center md:justify-normal",
            "px-8 md:px-0"
          )}
        >
          {/* Left column - Heading and illustration */}
          <div className="w-full flex flex-col justify-center items-center flex-0 md:flex-1">
            <div className="animate-on-scroll opacity-0 transition-opacity duration-700">
              <h2 className="text-3xl md:text-5xl font-medium mb-6 text-[#111418]">
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
            <div
              className={cn(
                "relative mt-8 md:mt-12 animate-on-scroll opacity-0 transition-opacity duration-700 delay-300",
                "hidden md:block"
              )}
            >
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/blue-character.png"
                  alt="Character"
                  fill
                  className="object-contain opacity-90"
                />

                {/* Glow effect */}
                <div className="absolute inset-0">
                  <Image
                    src="/glow-character.png"
                    alt="Glow effect"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="flex-1 flex justify-center md:space-y-14 max-h-[500px]">
            {/* Mobile Attacks */}
            <div className="flex flex-col justify-start text-center animate-on-scroll opacity-0 transition-opacity duration-700 delay-150">
              <h3 className="text-center text-2xl font-bold mb-1">
                Mobile
                <br />
                <span className="text-[#0066FF]">Attacks</span>
              </h3>
              <div className="mt-6 text-center">
                <div className="text-xl font-bold">+70%</div>
                <div className="text-md text-gray-600">growth since 2020</div>
              </div>
              <div className="mt-6 max-w-[200px] mx-auto">
                <div className="text-xl font-bold">3.9M</div>
                <div className="text-md text-gray-600">
                  cyberattacks in Latin America(2024)
                </div>
              </div>
            </div>

            {/* Global Threats */}
            <div className=" flex flex-col justify-end text-center animate-on-scroll opacity-0 transition-opacity duration-700 delay-300">
              <h3 className="text-2xl font-bold mb-1">
                Global
                <br />
                <span className="text-[#0066FF]">Threats</span>
              </h3>

              <div className="mt-6">
                <div className="text-xl font-bold">161B</div>
                <div className="text-md text-gray-600">
                  cyberattacks in 2024
                </div>
              </div>
              <div className=" mt-6 animate-on-scroll opacity-0 transition-opacity duration-700 delay-450">
                <h3 className="text-2xl font-bold mb-1">Brazil</h3>
                <div className="mt-2">
                  <div className="text-md text-gray-600">
                    Lead in mobile threats
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
