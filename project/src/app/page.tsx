'use client';

import dynamic from 'next/dynamic';

// Dynamically import components
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'));
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1819]">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* Add more sections here */}
      </main>
      <Footer />
    </div>
  );
}
