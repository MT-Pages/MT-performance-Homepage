import React from 'react';

export default function StepsSection() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-xl font-bold mb-6">In 4 Schritten zu mehr Reichweite, qualifizierten Leads & planbarem Wachstum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#151e1f] rounded-xl p-4 text-white">
            <div className="font-bold text-2xl mb-2">1</div>
            <div>Kick-off: Definition der Positionierung, Zielgruppe und strategisches Vorgehen</div>
          </div>
          <div className="bg-[#151e1f] rounded-xl p-4 text-white">
            <div className="font-bold text-2xl mb-2">2</div>
            <div>Medienproduktion mit Plan: Wir produzieren hochwertigen Content.</div>
          </div>
          <div className="bg-[#151e1f] rounded-xl p-4 text-white">
            <div className="font-bold text-2xl mb-2">3</div>
            <div>Set-up: Wir bereiten alles vor, damit deiner Sichtbarkeit nichts mehr im Wege steht.</div>
          </div>
          <div className="bg-[#151e1f] rounded-xl p-4 text-white">
            <div className="font-bold text-2xl mb-2">4</div>
            <div>Go-Live: Mit bezahlter Werbung zu Neukunden- und Mitarbeitendenanfragen.</div>
          </div>
        </div>
        <button className="bg-white text-[#0f1819] font-bold rounded-full px-8 py-3 shadow-md hover:opacity-90 transition-all">Erstgespräch buchen</button>
      </div>
    </section>
  );
} 