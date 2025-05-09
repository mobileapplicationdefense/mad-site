import {
  AppleIcon,
  AndroidIcon,
  FlutterIcon,
  ReactIcon,
  WebIcon,
} from "@/components/platform-icons";
import Navbar from "@/components/navbar";
import PhoneScreens from "@/components/phone-screens";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen w-full snap-start relative overflow-hidden bg-[#111418]">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
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
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="flex justify-center mx-auto px-4 md:px-6 pt-20 md:pt-32">
          <div className="w-full flex flex-col md:flex-row justify-center items-center max-w-[880px]">
            <div className="md:w-1/2 text-white">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-regular mb-6 leading-normal"
                style={{ lineHeight: "1.3" }}
              >
                We Protect <br />
                Yourself. <br />
                <span className="flex items-center">
                  You{" "}
                  <span className="text-[#0066FF] border border-[#0066FF] px-4 ml-4">
                    Grow
                  </span>
                </span>
              </h1>

              <div className="flex space-x-6 mt-8 mb-6">
                <AppleIcon />
                <AndroidIcon />
                <FlutterIcon />
                <ReactIcon />
                <WebIcon />
              </div>

              <p className="text-gray-400 text-sm">
                RASP Security. Real-Time Protection.
                <br />
                Prevent Fraud.
              </p>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[500px]">
                <PhoneScreens />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
