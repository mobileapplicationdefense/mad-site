"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PlatformsSection from "./platforms-section";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-700 h-full z-10">
      <div className="bg-blue-50 w-32 h-48 rounded-lg flex items-center justify-center mb-6 mx-auto">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default function MadSection() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-[#FFFBFF] pt-24">
      {/* bg */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <Image
          src="/logo-bg.svg"
          alt="MAD Background"
          fill
          className="object-fill"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Why <span className="text-blue-500">MAD</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 md:mt-[130px]">
          <FeatureCard
            image="/why-1.png"
            title="Defense Against Advanced Mobile Threats"
            description="MAD delivers robust protection for mobile applications from multiple types of attacks."
          />

          <FeatureCard
            image="/why-2.png"
            title="Deep Monitoring and Security Insights"
            description="The service enables real-time access to reports and analytics."
          />

          <FeatureCard
            image="/why-3.png"
            title="Branding Protection"
            description="AppCrypt enhances API security with cryptogram-based protection."
          />

          <FeatureCard
            image="/why-4.png"
            title="Seamless Integration Across Platforms"
            description="MAD offers an SDK compatible with multiple platforms, including Android and iOS."
          />
        </div>
      </div>

      <PlatformsSection />
    </section>
  );
}
