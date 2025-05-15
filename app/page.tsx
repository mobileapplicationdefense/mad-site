import Hero from "@/components/hero";
import Features from "@/components/features";
import WhySection from "@/components/why-section";
import MadSection from "@/components/mad-section";
import FooterSection from "@/components/footer-section";
import RaspSection from "@/components/rasp-section";
import BlogSection from "@/components/blog-section";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Hero />
      <Features />
      <WhySection />
      <MadSection />
      <RaspSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
