import React, { useRef, useState, useEffect } from "react";

export default function ComparisonTableSection() {
  const CheckIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline align-middle"
    >
      <path
        d="M5 10.5L9 14.5L15 7.5"
        stroke="#d4af37"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CrossIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline align-middle"
    >
      <path
        d="M6 6L14 14M14 6L6 14"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Chevron-Visibility-Logik
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showChevron, setShowChevron] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Progressbar auch bei Resize aktualisieren
  useEffect(() => {
    const handleResize = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      if (scrollWidth <= clientWidth) {
        setScrollProgress(1);
      } else {
        setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
      }
    };
    window.addEventListener("resize", handleResize);
    // Initial berechnen
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-20 pb-20">
      <div className="w-screen max-w-none px-0 md:max-w-4xl md:mx-auto md:px-4">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-lg font-sans">
          <span className="block text-3xl md:text-4xl font-extrabold text-center">
            🧩 Leistungsvergleich:
          </span>
          <span className="block text-lg md:text-xl font-semibold text-white/80 text-center px-4 md:px-0">
            Einzelne Anbieter vs. Festangestellte vs. Michael Trüssel
            Performance
          </span>
        </h2>
        <div className="relative">
          <span
            className={`block md:hidden text-center mb-2 flex items-center justify-center animate-fade-in transition-opacity duration-500 ${
              showChevron ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span
              className="inline-block animate-arrow-bounce-left text-lg text-white/50 mr-2"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M11 4L6 9L11 14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm text-white/60 font-medium select-none">
              Wische um mehr zu sehen
            </span>
          </span>
          <div className="relative">
            <div
              className="overflow-x-auto w-full px-4 md:px-0 hide-native-scrollbar"
              ref={scrollRef}
              onScroll={() => {
                if (!scrollRef.current) return;
                const { scrollLeft, clientWidth, scrollWidth } =
                  scrollRef.current;
                setShowChevron(
                  scrollLeft + clientWidth >= scrollWidth - 2 ? false : true
                );
                // Progressbar-Logik
                if (scrollWidth <= clientWidth) {
                  setScrollProgress(1);
                } else {
                  setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
                }
              }}
            >
              <div className="bg-black/30 rounded-2xl shadow-xl overflow-hidden min-w-fit">
                <table className="min-w-[500px] md:min-w-full md:w-full text-white">
                  <thead>
                    <tr className="bg-[#0f1819]/80">
                      <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center rounded-tl-2xl">
                        Leistung / Vorteil
                      </th>
                      <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center">
                        Einzelne Anbieter
                      </th>
                      <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center">
                        Festangestellte
                      </th>
                      <th className="px-6 py-4 border-b border-white/10 text-lg md:text-xl font-extrabold tracking-wide text-center rounded-tr-2xl">
                        Michael Trüssel Performance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="transition hover:bg-white/5 group">
                      <td className="px-6 py-4 border-b border-white/10 bg-black/40 text-base md:text-lg font-medium text-white/90">
                        Einheitliches System statt Einzellösungen
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                          {CheckIcon}
                        </span>
                      </td>
                    </tr>
                    <tr className="transition hover:bg-white/5 group">
                      <td className="px-6 py-4 border-b border-white/10 bg-black/40 text-base md:text-lg font-medium text-white/90">
                        Hohe Qualität in allen 5 Bereichen
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                          {CheckIcon}
                        </span>
                      </td>
                    </tr>
                    <tr className="transition hover:bg-white/5 group">
                      <td className="px-6 py-4 border-b border-white/10 bg-black/40 text-base md:text-lg font-medium text-white/90">
                        Flexibel & skalierbar
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/10 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                          {CheckIcon}
                        </span>
                      </td>
                    </tr>
                    <tr className="transition hover:bg-white/5 group">
                      <td className="px-6 py-4 bg-black/40 text-base md:text-lg font-medium text-white/90 rounded-bl-2xl">
                        Geringer Koordinationsaufwand
                      </td>
                      <td className="px-6 py-4 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center bg-black/40">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                          {CrossIcon}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center bg-black/40 rounded-br-2xl">
                        <span className="inline-block transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                          {CheckIcon}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-12" />
              {/* Mobile: Eigene Scrollbar unter der Tabelle, immer zentriert und fixiert */}
              <div
                className="md:hidden w-full flex justify-center pointer-events-none px-4"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                }}
              >
                <div className="w-full max-w-[500px] h-2 bg-white/10 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-[#d4af37] rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        Math.max(0, Math.min(1, scrollProgress)) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
