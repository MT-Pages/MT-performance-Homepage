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
    <section className="pt-6 pb-8">
      <div className="max-w-4xl mx-auto px-2">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-4 tracking-tight drop-shadow-lg font-sans text-center">
          Meine Lösung um Sichtbarkeit messbar zu machen
        </h2>

        <div className="mt-8 relative glasmorphism rounded-2xl shadow-xl p-4 md:p-6">
          {/* Vertical Line - jetzt kürzer */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 h-auto w-0.5 bg-white/10 pointer-events-none" />

          <div className="relative">
            {[...steps].reverse().map((step, index) => {
              const position = index % 2 === 0 ? "left" : "right";
              return (
                <motion.div
                  key={step.id}
                  className="relative mb-10 last:mb-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="flex items-center">
                    {position === "left" ? (
                      <>
                        {/* Content + Icon + Pfeil (links) */}
                        <div className="w-1/2 flex justify-end items-center gap-4">
                          <h3 className="text-lg font-bold text-white text-right">
                            {step.title}
                          </h3>
                          <div className="relative flex items-center group">
                            {/* Icon mit Tooltip/Popover */}
                            <motion.div
                              className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center text-white z-10 relative shadow-lg cursor-pointer group"
                              whileHover={{ scale: 1.08, boxShadow: '0 0 0 8px #d4af3740' }}
                              whileTap={{ scale: 0.97 }}
                              tabIndex={0}
                            >
                              {React.cloneElement(step.icon, { className: 'w-7 h-7' })}
                              {/* Tooltip/Popover - jetzt invertiert seitlich */}
                              <div
                                className="absolute top-1/2 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-300 right-full mr-4 text-right"
                                style={{ minWidth: 160, maxWidth: 220 }}
                              >
                                <div className="bg-white/90 text-white rounded-2xl shadow-xl p-3 text-xs font-semibold border border-white/30 backdrop-blur-md glasmorphism relative">
                                  {step.description}
                                  {/* Tooltip-Ecke seitlich invertiert */}
                                  <div className="w-3 h-3 bg-white/90 absolute top-1/2 -translate-y-1/2 rotate-45 border-white/30 -right-1.5 border-r border-t" />
                                </div>
                              </div>
                            </motion.div>
                            {/* Pfeil nach rechts */}
                            <span className="hidden md:block ml-2" aria-hidden="true">
                              <svg width="70" height="18" viewBox="0 0 70 18" fill="none">
                                <line x1="0" y1="9" x2="60" y2="9" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
                                <polygon points="60,4 70,9 60,14" fill="#d4af37" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        {/* Empty Side */}
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        {/* Empty Side */}
                        <div className="w-1/2" />
                        {/* Icon + Pfeil + Content (rechts) */}
                        <div className="w-1/2 flex justify-start items-center gap-4">
                          <div className="relative flex items-center group">
                            {/* Pfeil nach links */}
                            <span className="hidden md:block mr-2" aria-hidden="true">
                              <svg width="70" height="18" viewBox="0 0 70 18" fill="none">
                                <line x1="70" y1="9" x2="10" y2="9" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
                                <polygon points="10,4 0,9 10,14" fill="#d4af37" />
                              </svg>
                            </span>
                            {/* Icon mit Tooltip/Popover */}
                            <motion.div
                              className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center text-white z-10 relative shadow-lg cursor-pointer group"
                              whileHover={{ scale: 1.08, boxShadow: '0 0 0 8px #d4af3740' }}
                              whileTap={{ scale: 0.97 }}
                              tabIndex={0}
                            >
                              {React.cloneElement(step.icon, { className: 'w-7 h-7' })}
                              {/* Tooltip/Popover - jetzt invertiert seitlich */}
                              <div
                                className="absolute top-1/2 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-300 left-full ml-4 text-left"
                                style={{ minWidth: 160, maxWidth: 220 }}
                              >
                                <div className="bg-white/90 text-white rounded-2xl shadow-xl p-3 text-xs font-semibold border border-white/30 backdrop-blur-md glasmorphism relative">
                                  {step.description}
                                  {/* Tooltip-Ecke seitlich invertiert */}
                                  <div className="w-3 h-3 bg-white/90 absolute top-1/2 -translate-y-1/2 rotate-45 border-white/30 -left-1.5 border-l border-b" />
                                </div>
                              </div>
                            </motion.div>
                          </div>
                          <h3 className="text-lg font-bold text-white text-left">
                            {step.title}
                          </h3>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
