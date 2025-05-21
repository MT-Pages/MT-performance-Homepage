"use client";

import Link from "next/link";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline & Subheadline */}
        <div className="text-center mb-6">
          <p className="text-white text-sm md:text-base mb-1">
            Für ambitionierte KMU mit 10–100 Mitarbeitenden
          </p>
          <h1 className="text-white font-bold text-lg md:text-2xl lg:text-3xl leading-snug mb-1">
            Die 5 strategischen Bereiche, die dir aktuell fehlen, um hochwertige
            Kunden- & Mitarbeiteranfragen zu gewinnen…
          </h1>
          <p className="text-white text-xs md:text-sm">
            …und dein Unternehmen in 12 Monaten zum regionalen Marktführer zu
            machen.
          </p>
        </div>
        {/* Content: Video & Checklist */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Left: Intro-Video */}
          <div className="flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0">
            <div className="overflow-hidden rounded-2xl w-56 md:w-72 aspect-[9/16] bg-neutral-700 relative shadow-lg group">
              <Plyr
                source={{
                  type: "video",
                  sources: [
                    {
                      src: "/videos/intro-video.mp4",
                      type: "video/mp4",
                    },
                  ],
                }}
                options={{
                  autoplay: true,
                  muted: true,
                  loop: { active: true },
                  controls: [
                    "play-large",
                    "play",
                    "progress",
                    "current-time",
                    "mute",
                    "volume",
                    "settings",
                    "fullscreen",
                  ],
                }}
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </div>
          {/* Right: Checklist */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-3 mb-6">
              <ChecklistItem>
                Verstehe, wie du durch gezielte Sichtbarkeit eine starke Marke
                aufbaust, die Vertrauen schafft
              </ChecklistItem>
              <ChecklistItem>
                Erfahre, wie du mit einem durchdachten System konstant die
                richtigen Kunden anziehst und nachhaltig wächst
              </ChecklistItem>
              <ChecklistItem>
                Entdecke, wie du dich als attraktiver Arbeitgeber positionierst
                und passende Mitarbeitende anziehst
              </ChecklistItem>
              <ChecklistItem>
                Nutze unsere erprobten Qualifizierungsprozesse, um nur noch
                Gespräche mit Interessenten zu führen, die bereit sind zu kaufen
              </ChecklistItem>
            </ul>
            <div className="w-full flex justify-center md:justify-start">
              <Link
                href="/kontakt#termin"
                className="inline-block w-full md:w-auto px-8 py-3 rounded-full font-bold text-[#0f1819] text-base bg-[#d4af37] shadow-md hover:opacity-90 transition-all text-center"
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
    <li className="flex items-center gap-3 text-white text-sm md:text-base min-h-[44px]">
      <span className="flex flex-col justify-center h-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline align-middle"
        >
          <path
            d="M5 10.5L9 14.5L15 7.5"
            stroke="#d4af37"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-snug font-medium text-white/90 max-w-xs md:max-w-md">
        {children}
      </span>
    </li>
  );
}
