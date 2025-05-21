import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="pt-20 pb-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-48 h-56 bg-neutral-700 rounded-2xl mb-2 overflow-hidden relative shadow-lg">
            <Image
              src="/images/Michael-Truessel-Portrait.png"
              alt="Michael Trüssel Portrait"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 192px, 256px"
              className="rounded-2xl"
              priority
            />
          </div>
          <div className="w-full text-center">
            <span className="block text-gray-400 text-sm leading-tight font-medium">
              Michael Trüssel
            </span>
            <span className="block text-gray-400 text-xs leading-tight">
              Gründer & Geschäftsführer
            </span>
          </div>
        </div>
        <div>
          <SectionTitle>
            Über{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f5f7fa] bg-clip-text text-transparent">
              Michael Trüssel
            </span>
          </SectionTitle>
          <p className="text-white mb-2">
            Verkaufen beginnt mit Verstehen. Und Vertrauen beginnt mit
            Sichtbarkeit.
          </p>
          <p className="text-white mb-2">
            Schon früh hatte ich eine Leidenschaft für Zahlen – und den Antrieb,
            immer besser zu werden. Durch den Sport habe ich gelernt, was es
            heißt, fokussiert auf ein Ziel hinzuarbeiten. Im Verkauf fand ich
            meine nächste Leidenschaft: Menschen verstehen, Vertrauen aufbauen
            und echten Mehrwert bieten. In sechs Jahren Erfahrung habe ich
            gelernt, worauf es wirklich ankommt – nicht auf laute Versprechen,
            sondern auf wahren Mehrwert.
          </p>
          <p className="text-white mb-2">
            Die Welt digitalisiert sich zunehmend, die logische Konsequenz
            daraus: Wer online nicht sichtbar ist, gewinnt langfristig keine
            Kunden – selbst mit dem besten Angebot.
          </p>
          <p className="text-white">
            Heute verbinde ich meine Stärken in Verkauf und Strategie mit
            digitalem Marketing, um Unternehmen gezielt an die Spitze der
            Marktführerschaft in ihrer Region zu führen.
          </p>
        </div>
      </div>
    </section>
  );
}
