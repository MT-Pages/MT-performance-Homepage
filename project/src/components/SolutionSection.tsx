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
    description: "Hier vereinbaren wir einen Termin, um deine Ziele und Wünsche zu besprechen.",
  },
  {
    id: 2,
    title: "Leads abtelefonieren / qualifizieren",
    icon: <HiOutlinePhone className="w-9 h-9" />,
    position: "left",
    description: "Wir kontaktieren und qualifizieren die eingegangenen Leads für dich.",
  },
  {
    id: 3,
    title: "Bezahlte Werbeanzeigen",
    icon: <HiOutlineSpeakerphone className="w-9 h-9" />,
    position: "right",
    description: "Gezielte Werbeanzeigen sorgen für mehr Sichtbarkeit und Reichweite.",
  },
  {
    id: 4,
    title: "Website / Landingpage",
    icon: <HiOutlineDesktopComputer className="w-9 h-9" />,
    position: "left",
    description: "Deine Website oder Landingpage wird optimiert und auf Conversions ausgerichtet.",
  },
  {
    id: 5,
    title: "Social Media Management",
    icon: <HiOutlineHashtag className="w-9 h-9" />,
    position: "right",
    description: "Wir übernehmen das Social Media Management für eine starke Online-Präsenz.",
  },
  {
    id: 6,
    title: "Medienproduktion",
    icon: <HiOutlineCamera className="w-9 h-9" />,
    position: "left",
    description: "Professionelle Medienproduktion für einen überzeugenden Auftritt.",
  },
];

export default function SolutionSection() {
  return (
    <section className="pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-lg font-sans text-center">
          Meine Lösung um Sichtbarkeit messbar zu machen
        </h2>

        <div className="mt-12 relative glasmorphism rounded-3xl shadow-2xl p-6 md:p-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10 pointer-events-none" />

          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
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

                  {/* Icon Circle + Arrow + Tooltip */}
                  <div className="relative flex items-center justify-center group">
                    {/* Pfeil (animiert, nur auf Desktop sichtbar) */}
                    <motion.span
                      className={`hidden md:block absolute ${
                        step.position === "left"
                          ? "right-[-110px]"
                          : "left-[-110px]"
                      } top-1/2 transform -translate-y-1/2 pointer-events-none select-none`}
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                      style={{ originX: step.position === "left" ? 0 : 1 }}
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
                    </motion.span>
                    {/* Icon mit Tooltip/Popover */}
                    <motion.div
                      className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center text-white z-10 relative shadow-lg cursor-pointer group"
                      whileHover={{ scale: 1.08, boxShadow: "0 0 0 8px #d4af3740" }}
                      whileTap={{ scale: 0.97 }}
                      tabIndex={0}
                    >
                      {step.icon}
                      {/* Tooltip/Popover - jetzt invertiert seitlich */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-300
                          ${step.position === "left"
                            ? "right-full mr-6 text-right"
                            : "left-full ml-6 text-left"}
                        `}
                        style={{ minWidth: 220, maxWidth: 280 }}
                      >
                        <div className="bg-white/90 text-[#0f1819] rounded-2xl shadow-xl p-4 text-sm font-semibold border border-white/30 backdrop-blur-md glasmorphism relative">
                          {step.description}
                          {/* Tooltip-Ecke seitlich invertiert */}
                          <div
                            className={`w-4 h-4 bg-white/90 absolute top-1/2 -translate-y-1/2 rotate-45 border-white/30
                              ${step.position === "left"
                                ? "-right-2 border-r border-t"
                                : "-left-2 border-l border-b"}
                            `}
                          />
                        </div>
                      </div>
                    </motion.div>
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
