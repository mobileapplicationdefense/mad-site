"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhoneScreens() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full">
      {/* Phone screen 1 (leftmost) */}
      <div className="absolute left-0top-0 w-[160px] h-[384px]">
        <Image
          src="/phone-screen.svg"
          alt="Phone screen"
          width={160}
          height={384}
          className="phone-screen"
          style={{
            filter: "hue-rotate(-10deg) brightness(1.05)",
          }}
        />
      </div>

      {/* Phone screen 2 */}
      <div className="absolute left-[30px] top-[20px] w-[160px] h-[384px]">
        <Image
          src="/phone-screen.svg"
          alt="Phone screen"
          width={160}
          height={384}
          className="phone-screen"
          style={{
            filter: "hue-rotate(-5deg) brightness(1)",
          }}
        />
      </div>

      {/* Phone screen 3 */}
      <div className="absolute left-[60px] top-[40px] w-[160px] h-[384px]">
        <Image
          src="/phone-screen.svg"
          alt="Phone screen"
          width={160}
          height={384}
          className="phone-screen"
          style={{
            filter: "hue-rotate(0deg) brightness(0.95)",
          }}
        />
      </div>

      {/* Phone screen 4 (rightmost) */}
      <div className="absolute left-[90px] top-[60px] w-[160px] h-[384px]">
        <Image
          src="/phone-screen.svg"
          alt="Phone screen"
          width={160}
          height={384}
          className="phone-screen"
          style={{
            filter: "hue-rotate(5deg) brightness(0.9)",
          }}
        />
      </div>

      <style jsx global>{`
        .phone-screen {
          transition: transform 0.5s ease-out;
        }

        @media (prefers-reduced-motion: no-preference) {
          .phone-screen:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}
