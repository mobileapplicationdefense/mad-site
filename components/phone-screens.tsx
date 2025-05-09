"use client";

import { cn } from "@/lib/utils";
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
      <div
        className={cn(
          "absolute right-60 top-0 w-[55px] h-[115px]",
          "md:right-60 md:top-0 md:w-[160px] md:h-[384px]"
        )}
      >
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
      <div
        className={cn(
          "absolute left-10 top-[20px] w-[55px] h-[115px] opacity-65",
          "md:left-0 md:top-[45px] md:w-[160px] md:h-[384px]"
        )}
      >
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
      <div
        className={cn(
          "absolute left-[55px] top-[30px] w-[55px] h-[115px] opacity-35",
          "md:left-[45px] md:top-[70px] md:w-[160px] md:h-[384px]"
        )}
      >
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
      <div
        className={cn(
          "absolute left-[80px] top-[40px] w-[55px] h-[115px]",
          "md:left-[110px] md:top-[110px] md:w-[160px] md:h-[384px]"
        )}
      >
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
