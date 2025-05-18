'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('heroVideo') as HTMLVideoElement;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          id="heroVideo"
          className={`object-cover w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/Landingpage_Intro_(quer).MOV" type="video/quicktime" />
          Ihr Browser unterstützt kein Video-Tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f1819] bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            <span className="block mb-2">Entfalte dein</span>
            <span className="text-[#D4AF37] block">volles Potenzial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
            Performance Coaching und Persönlichkeitsentwicklung für Menschen, die mehr aus ihrem Leben machen wollen
          </p>
          
          <Link 
            href="/kontakt#termin" 
            className="px-10 py-4 border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-[#0f1819] transition-colors inline-block"
          >
            Erstgespräch buchen
          </Link>
        </div>
      </div>
    </div>
  );
} 