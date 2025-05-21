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
      <div className="max-w-4xl mx-auto">
        <SectionTitle>
          <span className="block text-3xl md:text-4xl font-extrabold text-center">
            🧩 Leistungsvergleich:
          </span>
          <span className="block text-lg md:text-xl font-semibold text-white/80 text-center">
            Einzelne Anbieter vs. Festangestellte vs. Michael Trüssel
            Performance
          </span>
        </SectionTitle>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white border border-white rounded-lg">
            <thead>
              <tr className="bg-[#0f1819]">
                <th className="p-2 border">Leistung / Vorteil</th>
                <th className="p-2 border">Einzelne Anbieter</th>
                <th className="p-2 border">Festangestellte</th>
                <th className="p-2 border">Michael Trüssel Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">
                  Einheitliches System statt Einzellösungen
                </td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CheckIcon}</td>
              </tr>
              <tr>
                <td className="p-2 border">
                  Hohe Qualität in allen 5 Bereichen
                </td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CheckIcon}</td>
              </tr>
              <tr>
                <td className="p-2 border">Flexibel & skalierbar</td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CheckIcon}</td>
              </tr>
              <tr>
                <td className="p-2 border">Geringer Koordinationsaufwand</td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CrossIcon}</td>
                <td className="p-2 border text-center">{CheckIcon}</td>
              </tr>
            </tbody>
          </table>
          <div className="mb-12" />
        </div>
      </div>
    </section>
  );
}
