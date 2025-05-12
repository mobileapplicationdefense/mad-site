"use client";

import { useEffect, useRef } from "react";
import {
  AppleIcon,
  AndroidIcon,
  FlutterIcon,
  ReactIcon,
  CapacitorIcon,
  CordovaIcon,
} from "./platform-icons";

export default function PlatformsSection() {
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
      elements.forEach((el, index) => {
        // Add increasing delay based on index
        el.classList.add(`delay-${index * 150}`);
        observer.observe(el);
      });
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
      className="w-full snap-start relative overflow-hidden bg-[#ffffff] py-24"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-medium text-center mb-20 animate-on-scroll">
          Supported Platforms
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-center items-center">
          <div className="flex flex-col items-center animate-on-scroll">
            <div className="h-24 w-24 flex items-center justify-center">
              <AppleIcon size={60} className="text-[#616161]" />
            </div>
            <p className="mt-4 text-[#616161] text-md md:text-lg">iOS</p>
          </div>

          <div className="flex flex-col items-center animate-on-scroll">
            <div className="h-24 w-24 flex items-center justify-center">
              <AndroidIcon size={60} className="text-[#616161]" />
            </div>
            <p className="mt-4 text-[#616161] text-md md:text-lg">Android</p>
          </div>

          <div className="flex flex-col items-center animate-on-scroll">
            <div className="h-24 w-24 flex items-center justify-center">
              <FlutterIcon size={60} className="text-[#616161]" />
            </div>
            <p className="mt-4 text-[#616161] text-md md:text-lg">Flutter</p>
          </div>

          <div className="flex flex-col items-center animate-on-scroll">
            <div className="h-24 w-24 flex items-center justify-center">
              <ReactIcon size={60} className="text-[#616161]" />
            </div>
            <p className="mt-4 text-[#616161] text-md md:text-lg">
              React Native
            </p>
          </div>

          <div className="flex flex-col items-center animate-on-scroll">
            <div className="h-24 w-24 flex items-center justify-center">
              <CapacitorIcon size={60} className="text-[#616161]" />
            </div>
            <p className="mt-4 text-[#616161] text-md md:text-lg">Capacitor</p>
          </div>

          <div className="flex flex-col items-center animate-on-scroll">
            <div className="h-24 w-24 flex items-center justify-center">
              <CordovaIcon size={60} className="text-[#616161]" />
            </div>
            <p className="mt-4 text-[#616161] text-md md:text-lg">Cordova</p>
          </div>
        </div>
      </div>
    </section>
  );
}
