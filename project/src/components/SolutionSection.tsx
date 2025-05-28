import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlinePhone,
  HiOutlineSpeakerphone,
  HiOutlineDesktopComputer,
  HiOutlineHashtag,
  HiOutlineCamera,
} from "react-icons/hi";

const steps = [
  {
    id: 1,
    title: "Terminvereinbarung",
    icon: <HiOutlineCalendar className="w-9 h-9" />,
    position: "right",
  },
  {
    id: 2,
    title: "Leads abtelefonieren / qualifizieren",
    icon: <HiOutlinePhone className="w-9 h-9" />,
    position: "left",
  },
  {
    id: 3,
    title: "Bezahlte Werbeanzeigen",
    icon: <HiOutlineSpeakerphone className="w-9 h-9" />,
    position: "right",
  },
  {
    id: 4,
    title: "Website / Landingpage",
    icon: <HiOutlineDesktopComputer className="w-9 h-9" />,
    position: "left",
  },
  {
    id: 5,
    title: "Social Media Management",
    icon: <HiOutlineHashtag className="w-9 h-9" />,
    position: "right",
  },
  {
    id: 6,
    title: "Medienproduktion",
    icon: <HiOutlineCamera className="w-9 h-9" />,
    position: "left",
  },
];

export default function SolutionSection() {
  return (
    <section className="pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-lg font-sans text-center">
          Meine Lösung um Sichtbarkeit messbar zu machen
        </h2>

        <div className="mt-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10" />

          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex items-center ${
                    step.position === "left" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`w-1/2 ${
                      step.position === "left" ? "pr-0 text-right" : "pl-0"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Icon Circle + Arrow */}
                  <div className="relative flex items-center justify-center">
                    {/* Pfeil (nur auf Desktop sichtbar) */}
                    <span
                      className={`hidden md:block absolute ${
                        step.position === "left"
                          ? "right-[-110px]"
                          : "left-[-110px]"
                      } top-1/2 transform -translate-y-1/2 pointer-events-none select-none`}
                      aria-hidden="true"
                    >
                      {step.position === "left" ? (
                        // Pfeil nach rechts (länger)
                        <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
                          <line x1="0" y1="12" x2="85" y2="12" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" />
                          <polygon points="85,6 100,12 85,18" fill="#d4af37" />
                        </svg>
                      ) : (
                        // Pfeil nach links (länger)
                        <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
                          <line x1="100" y1="12" x2="15" y2="12" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" />
                          <polygon points="15,6 0,12 15,18" fill="#d4af37" />
                        </svg>
                      )}
                    </span>
                    <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center text-white z-10 relative shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty Side */}
                  <div className="w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
