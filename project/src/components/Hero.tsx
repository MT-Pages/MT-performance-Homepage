"use client";

import Link from "next/link";
import Plyr from "./PlyrWrapper";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-12 md:min-h-screen md:flex md:items-center md:justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Headline & Subheadline */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-white text-sm md:text-base mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Für ambitionierte KMU mit 10–100 Mitarbeitenden
          </motion.p>
          <motion.h1
            className="text-white font-bold text-lg md:text-2xl lg:text-3xl leading-snug mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Die 5 strategischen Bereiche, die dir aktuell fehlen, um hochwertige
            Kunden- & Mitarbeiteranfragen zu gewinnen…
          </motion.h1>
          <motion.p
            className="text-white text-xs md:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            …und dein Unternehmen in 12 Monaten zum regionalen Marktführer zu
            machen.
          </motion.p>
        </motion.div>
        {/* Content: Video & Checklist */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 items-center">
          {/* Left: Intro-Video */}
          <motion.div
            className="flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-2xl w-56 md:w-80 lg:w-96 aspect-[9/16] bg-neutral-700 relative shadow-lg group">
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
                  autoplay: false,
                  muted: false,
                  controls: [
                    "play-large",
                    "play",
                    "progress",
                    "current-time",
                    "fullscreen",
                  ],
                  volume: 0.5,
                }}
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </motion.div>
          {/* Right: Checklist */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          >
            <ul className="space-y-6 mb-8 w-full text-left custom-checklist-spacing">
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
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link
                href="/kontakt"
                className="inline-block w-full px-0 py-4 rounded-full font-bold text-[#0f1819] text-lg bg-[#d4af37] shadow-md hover:scale-105 hover:shadow-xl transition-all text-center focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95"
                style={{ maxWidth: "100%" }}
              >
                Jetzt Erstgespräch buchen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 767px) {
          section {
            min-height: unset !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding-top: 5rem !important;
            padding-bottom: 2rem !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .custom-checklist-spacing > li {
            margin-bottom: 0 !important;
          }
          .custom-checklist-spacing {
            gap: 0 !important;
            row-gap: 0 !important;
            --tw-space-y-reverse: 0 !important;
            --tw-space-y: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      className="flex items-center gap-4 text-white text-[0.92rem] md:text-lg min-h-[64px] py-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="flex justify-center">
        <svg
          width="22"
          height="22"
          className="flex-shrink-0 md:w-[28px] md:h-[28px] w-[22px] h-[22px]"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10.5L9 14.5L15 7.5"
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-relaxed font-medium text-white/90 flex-1">
        {children}
      </span>
    </motion.li>
  );
}
