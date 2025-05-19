import React from 'react';

export default function SolutionSection() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-xl font-bold mb-6">Meine Lösung um Sichtbarkeit messbar zu machen</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-400 rounded-lg mb-2"></div>
            <span className="text-white text-xs">Social Media Management</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-400 rounded-lg mb-2"></div>
            <span className="text-white text-xs">Bezahlte Werbeanzeigen</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-400 rounded-lg mb-2"></div>
            <span className="text-white text-xs">Terminvereinbarung</span>
          </div>
        </div>
        <button className="bg-white text-[#0f1819] font-bold rounded-full px-8 py-3 shadow-md hover:opacity-90 transition-all">Erstgespräch buchen</button>
      </div>
    </section>
  );
} 