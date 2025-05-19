import React from 'react';

export default function ComparisonTableSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-xl font-bold mb-6 text-center">Leistungsvergleich: Einzelne Anbieter vs. Festangestellte vs. Michael Trüssel Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white border border-white rounded-lg">
            <thead>
              <tr className="bg-[#151e1f]">
                <th className="p-2 border">Leistung / Vorteil</th>
                <th className="p-2 border">Einzelne Anbieter</th>
                <th className="p-2 border">Fest-angestellte</th>
                <th className="p-2 border">Michael Trüssel Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Einheitliches System statt Einzellösungen</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✗</td>
                <td className="p-2 border text-center">✔️</td>
              </tr>
              <tr>
                <td className="p-2 border">Hohe Qualität in allen 5 Bereichen</td>
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