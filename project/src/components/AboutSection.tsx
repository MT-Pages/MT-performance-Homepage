import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-48 h-56 bg-neutral-700 rounded-2xl mb-4 md:mb-0"></div>
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">Über Michael Trüssel</h2>
          <p className="text-white mb-2">Verkaufen beginnt mit Verstehen. Und Vertrauen beginnt mit Sichtbarkeit.</p>
          <p className="text-white mb-2">Schon früh hatte ich eine Leidenschaft für Zahlen – und den Antrieb, immer besser zu werden. Durch den Sport habe ich gelernt, was es heißt, fokussiert auf ein Ziel hinzuarbeiten. Im Verkauf fand ich meine nächste Leidenschaft: Menschen verstehen, Vertrauen aufbauen und echten Mehrwert bieten. In sechs Jahren Erfahrung habe ich gelernt, worauf es wirklich ankommt – nicht auf laute Versprechen, sondern auf wahren Mehrwert.</p>
          <p className="text-white mb-2">Die Welt digitalisiert sich zunehmend, die logische Konsequenz daraus: Wer online nicht sichtbar ist, gewinnt langfristig keine Kunden – selbst mit dem besten Angebot.</p>
          <p className="text-white">Heute verbinde ich meine Stärken in Verkauf und Strategie mit digitalem Marketing, um Unternehmen gezielt an die Spitze der Marktführerschaft in ihrer Region zu führen.</p>
        </div>
      </div>
    </section>
  );
} 