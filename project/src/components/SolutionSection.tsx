import React, { useState, useEffect } from "react";
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
  // State für Mobile-Tooltip pro Step
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="pt-6 pb-8">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 md:px-2 overflow-x-hidden overflow-visible">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-4 tracking-tight drop-shadow-lg font-sans text-center">
          Meine Lösung um Sichtbarkeit messbar zu machen
        </h2>

        <div className="mt-8 relative glasmorphism rounded-2xl shadow-xl p-1.5 sm:p-2 md:p-6 overflow-x-hidden">
          {/* Vertikale Linie */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 h-auto w-0.5 bg-white/10 pointer-events-none" />

          <div className="relative overflow-visible">
            {[...steps].reverse().map((step, index) => {
              const position = step.position;
              const tooltipProps = position === "left"
                ? { sideClass: "left-full ml-2 text-left", arrowClass: "w-3 h-3 bg-white/90 absolute top-1/2 -translate-y-1/2 rotate-45 border-white/30 -left-1.5 border-l border-b" }
                : { sideClass: "right-full mr-2 text-right", arrowClass: "w-3 h-3 bg-white/90 absolute top-1/2 -translate-y-1/2 rotate-45 border-white/30 -right-1.5 border-r border-t" };
              return (
                <motion.div
                  key={step.id}
                  className="relative mb-6 md:mb-10 last:mb-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="flex items-center overflow-visible">
                    {position === "left" ? (
                      <>
                        {/* Titel (links) */}
                        <div className="w-1/2 flex justify-end items-center pr-1 sm:pr-2 md:pr-0">
                          <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white text-right mr-1 sm:mr-2 md:mr-4 break-words leading-tight max-w-[90vw]">
                            {step.title}
                          </h3>
                          {/* Pfeil nach rechts */}
                          <span className="hidden xs:inline-block mr-1 sm:mr-2 md:mr-2" aria-hidden="true">
                            <svg width="36" height="10" viewBox="0 0 70 18" fill="none" className="w-6 h-2 sm:w-10 sm:h-3 md:w-[70px] md:h-[18px]">
                              <line x1="70" y1="9" x2="10" y2="9" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
                              <polygon points="10,4 0,9 10,14" fill="#d4af37" />
                            </svg>
                          </span>
                        </div>
                        {/* Icon (immer mittig) */}
                        <div className="relative flex items-center justify-center group z-10">
                          <motion.div
                            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#d4af37] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer group"
                            whileHover={{ scale: 1.08, boxShadow: '0 0 0 8px #d4af3740' }}
                            whileTap={{ scale: 0.97 }}
                            tabIndex={0}
                            onClick={() => isMobile ? setOpenTooltip(openTooltip === step.id ? null : step.id) : undefined}
                          >
                            {React.cloneElement(step.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' })}
                            {/* Tooltip/Popover: Mobile bei Klick, Desktop bei Hover/Fokus */}
                            <div
                              className={`
                                absolute
                                ${tooltipProps.sideClass}
                                top-1/2 -translate-y-1/2
                                z-30
                                bg-white/90 text-white rounded-2xl shadow-xl border border-white/30 backdrop-blur-md glasmorphism
                                overflow-visible
                                hidden md:block md:text-xs md:p-3 md:max-w-[220px] md:min-w-[160px] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:pointer-events-auto md:transition-opacity md:duration-300
                              `}
                            >
                              {step.description}
                              {/* Tooltip-Pfeil */}
                              <div className={tooltipProps.arrowClass} />
                            </div>
                          </motion.div>
                        </div>
                        {/* Leere rechte Seite */}
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        {/* Leere linke Seite */}
                        <div className="w-1/2" />
                        {/* Icon (immer mittig) */}
                        <div className="relative flex items-center justify-center group z-10">
                          <motion.div
                            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#d4af37] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer group"
                            whileHover={{ scale: 1.08, boxShadow: '0 0 0 8px #d4af3740' }}
                            whileTap={{ scale: 0.97 }}
                            tabIndex={0}
                            onClick={() => isMobile ? setOpenTooltip(openTooltip === step.id ? null : step.id) : undefined}
                          >
                            {React.cloneElement(step.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' })}
                            {/* Tooltip/Popover: Mobile bei Klick, Desktop bei Hover/Fokus */}
                            <div
                              className={`
                                absolute
                                ${tooltipProps.sideClass}
                                top-1/2 -translate-y-1/2
                                z-30
                                bg-white/90 text-white rounded-2xl shadow-xl border border-white/30 backdrop-blur-md glasmorphism
                                overflow-visible
                                hidden md:block md:text-xs md:p-3 md:max-w-[220px] md:min-w-[160px] md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:pointer-events-auto md:transition-opacity md:duration-300
                              `}
                            >
                              {step.description}
                              {/* Tooltip-Pfeil */}
                              <div className={tooltipProps.arrowClass} />
                            </div>
                          </motion.div>
                        </div>
                        {/* Pfeil nach links */}
                        <div className="w-1/2 flex items-center">
                          <span className="hidden xs:inline-block ml-1 sm:ml-2 md:ml-2" aria-hidden="true">
                            <svg width="36" height="10" viewBox="0 0 70 18" fill="none" className="w-6 h-2 sm:w-10 sm:h-3 md:w-[70px] md:h-[18px]">
                              <line x1="0" y1="9" x2="60" y2="9" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
                              <polygon points="60,4 70,9 60,14" fill="#d4af37" />
                            </svg>
                          </span>
                          <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white text-left ml-1 sm:ml-2 md:ml-4 break-words leading-tight max-w-[90vw]">
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
