import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-48 h-56 bg-neutral-700 rounded-2xl mb-4 md:mb-0 overflow-hidden relative shadow-lg">
          <Image
            src="/images/Michael-Truessel-Portrait.png"
            alt="Michael Trüssel Portrait"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 192px, 256px"
            className="rounded-2xl"
            priority
          />
        </div>
        <div>
          <SectionTitle>Über Michael Trüssel</SectionTitle>
          <p className="text-white mb-2">Verkaufen beginnt mit Verstehen. Und Vertrauen beginnt mit Sichtbarkeit.</p>
          <p className="text-white mb-2">Schon früh hatte ich eine Leidenschaft für Zahlen – und den Antrieb, immer besser zu werden. Durch den Sport habe ich gelernt, was es heißt, fokussiert auf ein Ziel hinzuarbeiten. Im Verkauf fand ich meine nächste Leidenschaft: Menschen verstehen, Vertrauen aufbauen und echten Mehrwert bieten. In sechs Jahren Erfahrung habe ich gelernt, worauf es wirklich ankommt – nicht auf laute Versprechen, sondern auf wahren Mehrwert.</p>
          <p className="text-white mb-2">Die Welt digitalisiert sich zunehmend, die logische Konsequenz daraus: Wer online nicht sichtbar ist, gewinnt langfristig keine Kunden – selbst mit dem besten Angebot.</p>
          <p className="text-white">Heute verbinde ich meine Stärken in Verkauf und Strategie mit digitalem Marketing, um Unternehmen gezielt an die Spitze der Marktführerschaft in ihrer Region zu führen.</p>
        </div>
      </div>
    </section>
  );
} 