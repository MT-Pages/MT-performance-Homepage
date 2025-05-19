'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#0f1819] pt-32 md:pt-40 pb-8 md:pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline & Subheadline */}
        <div className="text-center mb-6">
          <p className="text-white text-sm md:text-base mb-1">
            Für ambitionierte KMU mit 10–100 Mitarbeitenden
          </p>
          <h1 className="text-white font-bold text-lg md:text-2xl lg:text-3xl leading-snug mb-1">
            Die 5 strategischen Bereiche, die dir aktuell fehlen, um hochwertige Kunden- & Mitarbeiteranfragen zu gewinnen…
          </h1>
          <p className="text-white text-xs md:text-sm">
            …und dein Unternehmen in 12 Monaten zum regionalen Marktführer zu machen.
          </p>
        </div>
        {/* Content: Image & Checklist */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 bg-[#151e1f] rounded-2xl p-4 md:p-6 shadow-lg">
          {/* Left: Portrait */}
          <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
            <div className="overflow-hidden rounded-2xl w-40 h-48 md:w-48 md:h-56 bg-neutral-700 relative">
              <Image
                src="/portrait-placeholder.jpg"
                alt="Michael Trüssel Portrait"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 160px, 192px"
                priority
              />
            </div>
          </div>
          {/* Right: Checklist */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-3 mb-6">
              <ChecklistItem>
                Verstehe, wie du durch gezielte Sichtbarkeit eine starke Marke aufbaust, die Vertrauen schafft
              </ChecklistItem>
              <ChecklistItem>
                Erfahre, wie du mit einem durchdachten System konstant die richtigen Kunden anziehst
              </ChecklistItem>
              <ChecklistItem>
                Entdecke, wie du dich als attraktiver Arbeitgeber positionierst und passende Mitarbeitenden anziehst
              </ChecklistItem>
              <ChecklistItem>
                Nutze unsere erprobten Qualifizierungsprozesse, um nur noch Gespräche mit Interessenten zu führen, die bereit sind zu kaufen
              </ChecklistItem>
            </ul>
            <div className="w-full flex justify-center md:justify-start">
              <Link
                href="/kontakt#termin"
                className="inline-block w-full md:w-auto px-8 py-3 rounded-full font-bold text-[#0f1819] text-base bg-gradient-to-r from-[#D4AF37] to-[#FFC832] shadow-md hover:opacity-90 transition-all text-center"
              >
                Jetzt Erstgespräch buchen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-white text-sm md:text-base">
      <span className="mt-1">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#4ADE80"/>
          <path d="M7 12.5L10.5 16L17 9.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
} 