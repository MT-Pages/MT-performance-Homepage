import React from "react";
import SectionTitle from "./SectionTitle";

export default function ComparisonTableSection() {
  return (
    <section className="pt-8 pb-12">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>
          <span className="block text-xl md:text-2xl font-bold text-center">
            🧩 Leistungsvergleich:
          </span>
          <span className="block text-base md:text-lg font-semibold text-white/80 text-center">
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
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✔️</td>
              </tr>
              <tr>
                <td className="p-2 border">
                  Hohe Qualität in allen 5 Bereichen
                </td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✔️</td>
              </tr>
              <tr>
                <td className="p-2 border">Flexibel & skalierbar</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✔️</td>
              </tr>
              <tr>
                <td className="p-2 border">Geringer Koordinationsaufwand</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
