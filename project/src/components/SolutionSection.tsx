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
    icon: <HiOutlineCalendar className="w-6 h-6" />,
    position: "right",
  },
  {
    id: 2,
    title: "Leads abtelefonieren / qualifizieren",
    icon: <HiOutlinePhone className="w-6 h-6" />,
    position: "left",
  },
  {
    id: 3,
    title: "Bezahlte Werbeanzeigen",
    icon: <HiOutlineSpeakerphone className="w-6 h-6" />,
    position: "right",
  },
  {
    id: 4,
    title: "Website / Landingpage",
    icon: <HiOutlineDesktopComputer className="w-6 h-6" />,
    position: "left",
  },
  {
    id: 5,
    title: "Social Media Management",
    icon: <HiOutlineHashtag className="w-6 h-6" />,
    position: "right",
  },
  {
    id: 6,
    title: "Medienproduktion",
    icon: <HiOutlineCamera className="w-6 h-6" />,
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

                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center text-white z-10 relative">
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
