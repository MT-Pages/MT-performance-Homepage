import React from "react";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    title: "Medienproduktion",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#2196F3" />
        <g stroke="#fff" strokeWidth="2">
          <rect x="12" y="16" width="24" height="16" rx="2" />
          <rect x="16" y="20" width="6" height="8" rx="1" />
          <rect x="26" y="20" width="6" height="8" rx="1" />
          <path d="M12 24h24" />
        </g>
      </svg>
    ),
    color: "bg-[#2196F3]",
    titlePosition: "bottom",
  },
  {
    title: "Social Media Management",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#38BDF8" />
        <g stroke="#fff" strokeWidth="2">
          <circle cx="24" cy="24" r="8" />
          <circle cx="24" cy="24" r="3" />
          <path d="M24 16v-2M24 34v-2M16 24h-2M34 24h-2" />
        </g>
      </svg>
    ),
    color: "bg-[#38BDF8]",
    titlePosition: "top",
  },
  {
    title: "Webseite / Landingpage",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#06B6D4" />
        <g stroke="#fff" strokeWidth="2">
          <rect x="14" y="18" width="20" height="12" rx="2" />
          <path d="M18 22h12" />
        </g>
      </svg>
    ),
    color: "bg-[#06B6D4]",
    titlePosition: "bottom",
  },
  {
    title: "Bezahlte Werbeanzeigen",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#67E8F9" />
        <g stroke="#fff" strokeWidth="2">
          <rect x="16" y="20" width="16" height="8" rx="2" />
          <path d="M24 20v8" />
        </g>
      </svg>
    ),
    color: "bg-[#67E8F9]",
    titlePosition: "top",
  },
  {
    title: "Leads abtelefonieren\n/ qualifizieren",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#22D3EE" />
        <g stroke="#fff" strokeWidth="2">
          <path d="M24 18v12" />
          <circle cx="24" cy="24" r="8" />
        </g>
      </svg>
    ),
    color: "bg-[#22D3EE]",
    titlePosition: "bottom",
  },
  {
    title: "Terminvereinbarung",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#A5F3FC" />
        <g stroke="#fff" strokeWidth="2">
          <rect x="16" y="20" width="16" height="12" rx="2" />
          <path d="M20 24h8" />
        </g>
      </svg>
    ),
    color: "bg-[#A5F3FC]",
    titlePosition: "top",
  },
];

function Arrow({ up, className }: { up?: boolean; className?: string }) {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      className={className || ""}
    >
      <path
        d={up ? "M12 20V4M12 4l-6 6M12 4l6 6" : "M12 0v16M12 16l-6-6M12 16l6-6"}
        stroke="#38BDF8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SolutionSection() {
  return (
    <section className="pt-8 pb-12">
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle>
          Meine Lösung um Sichtbarkeit messbar zu machen
        </SectionTitle>
        <div className="w-full">
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4 mx-auto mt-20 mb-20 px-2">
            {steps.map((step) => (
              <div
                className="relative flex flex-col items-center w-[90px] md:w-[100px] flex-shrink-0"
                key={step.title}
              >
                {step.titlePosition === "top" && (
                  <>
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max text-white text-base md:text-lg font-extrabold font-sans text-center leading-tight min-h-[32px] drop-shadow-lg">
                      {step.title.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx < step.title.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <Arrow up={false} className="w-5 h-4 static-arrow" />
                    </div>
                  </>
                )}
                <div
                  className={`glasmorphism ${step.color} flex items-center justify-center w-[72px] h-[72px] md:w-[88px] md:h-[88px] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:scale-110 focus:shadow-2xl cursor-pointer group outline-none ring-0 focus-visible:ring-4 focus-visible:ring-cyan-300`}
                  tabIndex={0}
                  aria-label={step.title}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110">
                    {step.icon}
                  </div>
                </div>
                {step.titlePosition === "bottom" && (
                  <>
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                      <Arrow up className="w-5 h-4 static-arrow" />
                    </div>
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max text-white text-base md:text-lg font-extrabold font-sans text-center leading-tight min-h-[32px] drop-shadow-lg">
                      {step.title.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx < step.title.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="bg-white text-[#0f1819] font-bold rounded-full px-8 py-3 shadow-md hover:scale-105 hover:shadow-xl transition-all text-lg font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95">
          Erstgespräch buchen
        </button>
      </div>
    </section>
  );
}

// Tailwind/CSS für Animationen ergänzen:
// @keyframes bounce-arrow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(8px);} }
// .animate-bounce-arrow { animation: bounce-arrow 1.2s infinite; }
