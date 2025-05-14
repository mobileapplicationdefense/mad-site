"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MadLogo from "./MadLogo";
export default function FooterSection() {
  return (
    <section className="h-screen w-full snap-start pt-8 relative overflow-hidden bg-gradient-to-br from-[#111418] to-[#0a0e14] flex flex-col">
      <div className="absolute inset-x-4 top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#111418] to-[#0a0e14] overflow-hidden">
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

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-6 md:px-[120px]">
        <div className="w-full mx-auto">
          <div className="bg-[#1E2530]/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-16 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stop losing users,
              <br />
              trust, and money to
              <br />
              weak app security.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#0066FF] hover:bg-[#0055DD] text-white font-medium py-3 px-6 rounded-full transition-colors mt-6"
            >
              Contact us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container pb-8 z-10 mx-0 px-6 md:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="space-y-6 w-full items-center justify-center flex flex-col md:items-start">
            <MadLogo />
            <p className="text-gray-400 text-md max-w-md px-4 md:px-0">
              MAD (Mobile Application Defense) is a RASP (Runtime Application
              Self-Protection) cybersecurity solution developed in Brazil to
              protect mobile applications and SDKs on Android and iOS against
              reverse engineering, tampering, and attacks.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <div>
              <ul className="space-y-2 text-center">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    RASP
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          &copy;2025 MAD. All Rights Reserved
        </div>
      </div>
    </section>
  );
}
