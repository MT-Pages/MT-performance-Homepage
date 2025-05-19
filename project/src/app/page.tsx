'use client';

import dynamic from 'next/dynamic';

// Dynamically import components
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'));
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const WhySection = dynamic(() => import('@/components/WhySection'));
const SolutionSection = dynamic(() => import('@/components/SolutionSection'));
const ComparisonTableSection = dynamic(() => import('@/components/ComparisonTableSection'));
const StepsSection = dynamic(() => import('@/components/StepsSection'));
const AboutSection = dynamic(() => import('@/components/AboutSection'));
const CtaSection = dynamic(() => import('@/components/CtaSection'));
const ContactFormSection = dynamic(() => import('@/components/ContactFormSection'));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1819]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TestimonialSection />
        <WhySection />
        <SolutionSection />
        <ComparisonTableSection />
        <StepsSection />
        <AboutSection />
        <CtaSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
