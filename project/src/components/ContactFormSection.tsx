import React from "react";

export default function ContactFormSection() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-lg font-sans">
          Kontakt
        </h2>
        <div className="bg-[#151e1f] rounded-2xl p-8">
          <p className="text-white mb-4">
            Hier wird das Calendly-Widget eingebettet.
          </p>
          <div className="w-full h-72 bg-neutral-700 rounded-lg flex items-center justify-center text-white">
            Calendly Widget Platzhalter
          </div>
        </div>
      </div>
    </section>
  );
}
