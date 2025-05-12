import Hero from "@/components/hero";
import Features from "@/components/features";
import WhySection from "@/components/why-section";
import MadSection from "@/components/mad-section";
import FooterSection from "@/components/footer-section";
import RaspSection from "@/components/rasp-section";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Features />
      <WhySection />
      <MadSection />
      <RaspSection />
      <FooterSection />
    </div>
  );
}
