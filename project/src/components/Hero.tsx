'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [imageError, setImageError] = useState(true);

  return (
    <div className="bg-[#0f1819] min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto">
          {/* First row - KMU text centered */}
          <div className="text-center mb-3">
            <p className="text-base text-white">
              Für ambitionierte KMU mit 10–100 Mitarbeitenden
            </p>
          </div>
          
          {/* Second row - Main headline centered */}
          <div className="text-center mb-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
              Die 5 strategischen Bereiche, die dir aktuell fehlen, um hochwertige Kunden- & Mitarbeiteranfragen zu gewinnen...
            </h1>
          </div>
          
          {/* Third row - Subheadline centered */}
          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-white">
              ...und dein Unternehmen in 12 Monaten zum regionalen Marktführer zu machen.
            </p>
          </div>
          
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* Left column - Image */}
            <div className="lg:w-[38%] mb-6 lg:mb-0 mx-auto lg:mx-0">
              <div className="bg-slate-600 rounded-lg w-full aspect-[4/5] flex items-center justify-center text-white">
                <div className="text-center p-4">
                  <div className="text-6xl mb-2 font-light">MT</div>
                  <div className="text-xl">Michael Trüssel</div>
                </div>
              </div>
            </div>
            
            {/* Right column - Checkpoints */}
            <div className="lg:w-[62%] text-white">
              {/* Checkpoints */}
              <div className="space-y-5 mb-8">
                <CheckpointItem>
                  Verstehe, wie du durch gezielte Sichtbarkeit eine starke Marke aufbaust, die Vertrauen schafft
                </CheckpointItem>
                
                <CheckpointItem>
                  Erfahre, wie du mit einem durchdachten System konstant die richtigen Kunden anziehst
                </CheckpointItem>
                
                <CheckpointItem>
                  Entdecke, wie du dich als attraktiver Arbeitgeber positionierst und passende Mitarbeitenden anziehst
                </CheckpointItem>
                
                <CheckpointItem>
                  Nutze unsere erprobten Qualifizierungsprozesse, um nur noch Gespräche mit Interessenten zu führen, die bereit sind zu kaufen
                </CheckpointItem>
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <Link 
                  href="/kontakt#termin" 
                  className="block w-full max-w-md py-3 text-base font-medium text-center text-[#0f1819] bg-gradient-to-r from-[#D4AF37] to-[#FFC832] rounded-full hover:opacity-90 transition-opacity"
                >
                  Jetzt Erstgespräch buchen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckpointItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <div className="w-5 h-5 bg-[#D4AF37] rounded-sm flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <p className="text-sm leading-tight">{children}</p>
    </div>
  );
} 