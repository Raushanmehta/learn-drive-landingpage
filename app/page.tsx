import AboutSection from "@/sections/home/AboutSection";
import HeroSection from "@/sections/home/HeroSection";
import ServiceSection from "@/sections/home/ServiceSection";
import StatsSection from "@/sections/home/StatsSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import FaqSection from "@/sections/home/FaqSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
