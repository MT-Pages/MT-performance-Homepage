import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-[#101415] pt-28 pb-28 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-left mb-8 mt-4 max-w-4xl mx-auto">
          Impressum
        </h1>
        <div className="max-w-4xl mx-auto text-white text-base space-y-6">
          <div>
            <div className="font-semibold mb-1">
              Vertretungsberechtigte Person:
            </div>
            <div>Michael Trüssel</div>
            <div>Wiesenstrasse 83</div>
            <div>3014 Bern, Schweiz</div>
            <div>
              <a
                href="mailto:info@truessel-performance.ch"
                className="underline hover:text-[#D4AF37] transition-colors"
              >
                info@truessel-performance.ch
              </a>
            </div>
            <div>
              <a
                href="tel:+41792512022"
                className="underline hover:text-[#D4AF37] transition-colors"
              >
                +41 79 251 20 22
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 mt-6">
              Haftungsausschluss
            </h2>
            <p>
              Der Autor übernimmt keine Verantwortung für die inhaltliche
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit oder
              Vollständigkeit der bereitgestellten Informationen.
              Haftungsansprüche gegen den Autor, die sich aus Schäden
              materieller oder immaterieller Art ergeben, welche durch den
              Zugriff, die Nutzung oder Nichtnutzung der veröffentlichten
              Informationen, den Missbrauch der Verbindung oder technische
              Störungen verursacht wurden, sind ausgeschlossen.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 mt-6">Urheberrechte</h2>
            <p>
              Alle Urheberrechte sowie sonstige Rechte an den Inhalten, Bildern,
              Fotos und anderen Dateien auf dieser Website liegen
              ausschliesslich bei Michael Trüssel oder den jeweils angegebenen
              Rechteinhabern. Eine schriftliche Genehmigung der Rechteinhaber
              ist erforderlich, um jegliche Elemente zu reproduzieren.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
