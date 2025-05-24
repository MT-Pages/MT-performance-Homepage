import React from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function WhySection() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto text-center px-4">
        <SectionTitle>
          Warum „Online sein" heute nicht mehr reicht – und Sichtbarkeit ohne
          System dein Wachstum ausbremst
        </SectionTitle>
        <p className="text-white mb-2">
          Viele KMU investieren in hübsche Webseiten oder posten gelegentlich
          etwas auf Social Media – in der Hoffnung, sichtbar zu sein.
        </p>
        <p className="text-white mb-2">
          Doch Sichtbarkeit allein bringt keine qualifizierten Anfragen oder
          passenden Mitarbeitenden.
        </p>
        <p className="text-white mb-2">
          In einem Markt voller Austauschbarkeit entscheiden Vertrauen,
          Auftreten und strategische Präsenz darüber, wem Kunden und Bewerber
          ihr Interesse schenken.
        </p>
        <p className="text-white mb-6">
          Nur Unternehmen mit einer klaren Positionierung, einem professionellen
          Auftritt und einem durchdachten System zur Kundengewinnung setzen sich
          langfristig durch.
        </p>
        <Link
          href="/kontakt"
          className="bg-white text-[#0f1819] font-bold rounded-full px-8 py-3 shadow-md hover:scale-105 hover:shadow-xl transition-all text-lg font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95 inline-block"
        >
          Erstgespräch buchen
        </Link>
      </div>
    </section>
  );
}
