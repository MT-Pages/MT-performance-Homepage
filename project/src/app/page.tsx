'use client';

import dynamic from 'next/dynamic';

// Dynamically import components
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'));
const ServiceSection = dynamic(() => import('@/components/ServiceSection'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <ServiceSection />
        {/* Add more sections here */}
      </main>
      <Footer />
    </div>
  );
}
