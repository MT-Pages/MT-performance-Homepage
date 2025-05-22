import React from "react";
import SectionTitle from "./SectionTitle";

export default function ComparisonTableSection() {
  const CheckIcon = (
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
  );

  const CrossIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline align-middle"
    >
      <path
        d="M6 6L14 14M14 6L6 14"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="pt-20 pb-20">
      <div className="w-full max-w-full px-0 md:max-w-4xl md:mx-auto md:px-4">
        <SectionTitle>
          <span className="block text-3xl md:text-4xl font-extrabold text-center">
            🧩 Leistungsvergleich:
          </span>
          <span className="block text-lg md:text-xl font-semibold text-white/80 text-center">
            Einzelne Anbieter vs. Festangestellte vs. Michael Trüssel
            Performance
          </span>
        </SectionTitle>
        <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent md:scrollbar-none mobile-table-shadow">
          <span className="block md:hidden text-xs text-white/60 text-center mb-2 animate-fade-in">
            ← Wischen für mehr
          </span>
          <div className="bg-black/30 rounded-2xl shadow-xl overflow-hidden">
            <table className="min-w-[600px] md:min-w-full text-white">
              <thead>
                <tr className="bg-[#0f1819]/80">
                  <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center rounded-tl-2xl">
                    Leistung / Vorteil
                  </th>
                  <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center">
                    Einzelne Anbieter
                  </th>
                  <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center">
                    Festangestellte
                  </th>
                  <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center rounded-tr-2xl">
                    Michael Trüssel Performance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition hover:bg-white/5 group">
                  <td className="px-6 py-4 border-b border-white/10 bg-black/40 text-base md:text-lg font-medium text-white/90">
                    Einheitliches System statt Einzellösungen
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                      {CheckIcon}
                    </span>
                  </td>
                </tr>
                <tr className="transition hover:bg-white/5 group">
                  <td className="px-6 py-4 border-b border-white/10 bg-black/40 text-base md:text-lg font-medium text-white/90">
                    Hohe Qualität in allen 5 Bereichen
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                      {CheckIcon}
                    </span>
                  </td>
                </tr>
                <tr className="transition hover:bg-white/5 group">
                  <td className="px-6 py-4 border-b border-white/10 bg-black/40 text-base md:text-lg font-medium text-white/90">
                    Flexibel & skalierbar
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                      {CheckIcon}
                    </span>
                  </td>
                </tr>
                <tr className="transition hover:bg-white/5 group">
                  <td className="px-6 py-4 bg-black/40 text-base md:text-lg font-medium text-white/90 rounded-bl-2xl">
                    Geringer Koordinationsaufwand
                  </td>
                  <td className="px-6 py-4 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center bg-black/40">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      {CrossIcon}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center bg-black/40 rounded-br-2xl">
                    <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                      {CheckIcon}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-12" />
        </div>
      </div>
    </section>
  );
}
