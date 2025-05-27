"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamically import components
const Header = dynamic(() => import("@/components/Header"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"));
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection")
);
const WhySection = dynamic(() => import("@/components/WhySection"));
const SolutionSection = dynamic(() => import("@/components/SolutionSection"));
const ComparisonTableSection = dynamic(
  () => import("@/components/ComparisonTableSection")
);
const StepsSection = dynamic(() => import("@/components/StepsSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const CtaSection = dynamic(() => import("@/components/CtaSection"));

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const id = window.location.hash.replace("#", "");
    let tries = 0;
    const maxTries = 10;
    const scrollToSection = () => {
      const section = document.getElementById(id);
      const header = document.getElementById("site-header");
      const headerHeight = header ? header.offsetHeight : 0;
      if (section) {
        const y =
          section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
      if (tries < maxTries) {
        tries++;
        setTimeout(scrollToSection, 100);
      }
    };
    scrollToSection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TestimonialSection />
        <WhySection />
        <div className="space-y-0">
          <SolutionSection />
          <ComparisonTableSection />
        </div>
        <StepsSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
