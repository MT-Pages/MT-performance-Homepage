import React from "react";

export default function CtaSection() {
  return (
    <section className="py-12">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 text-center shadow-lg">
        <h2 className="text-[#0f1819] text-xl font-bold mb-4">
          Sichere dir jetzt dein kostenloses Kennenlerngespräch
        </h2>
        <p className="text-[#0f1819] mb-4">
          Klicke auf den Button, beantworte ein paar kurze Fragen – und Michael
          Trüssel meldet sich persönlich bei dir.
        </p>
        <p className="text-[#0f1819] mb-6">
          In einem kostenlosen Beratungsgespräch zeige ich dir, wie du Online
          Marketing gezielt einsetzen kannst, um mehr Sichtbarkeit, Vertrauen
          und Anfragen zu gewinnen.
        </p>
        <button className="bg-[#0f1819] text-white font-bold rounded-full px-8 py-3 shadow-md hover:scale-105 hover:shadow-xl transition-all text-lg font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95">
          Erstgespräch buchen
        </button>
      </div>
    </section>
  );
}
