import React from "react";
import SectionTitle from "./SectionTitle";

export default function ContactFormSection() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle>Kontakt</SectionTitle>
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
