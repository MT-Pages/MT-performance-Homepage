"use client";

import React, { useRef, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Link from "next/link";
import "./StepsSectionTransitions.css";
import useEmblaCarousel from "embla-carousel-react";

export default function StepsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const steps = [
    {
      number: 1,
      title: "Kick-off",
      description:
        "Beim gemeinsamen Kick-Off Termin besprechen wir deine ideale Strategie.",
      timeSpent: "60 Minuten (einmalig)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Medienproduktion mit Plan",
      description:
        "Wir produzieren hochwertigen Content, der deine Zielgruppe anspricht und dein Angebot optimal präsentiert.",
      timeSpent: "30 Minuten (pro Woche)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className="w-6 h-6"
        >
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Set-up",
      description:
        "Wir bereiten alles für dich vor, damit deiner Sichtbarkeit nichts mehr im Wege steht.",
      timeSpent: "0 Minuten",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Go-Live",
      description:
        "Mit bezahlter Werbung zu Neukunden- und/oder Mitarbeiteranfragen.",
      timeSpent: "0 Minuten",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className="w-7 h-7"
        >
          <path
            d="M12 16V6M12 6l-5 5M12 6l5 5"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect x="5" y="18" width="14" height="2" rx="1" fill="#fff" />
        </svg>
      ),
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const cardRefDesktop = useRef(null);

  // Hilfsfunktion für Breakpoint
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
      const progress = totalHeight > 0 ? scrolled / totalHeight : 0;
      const step = Math.floor(progress * steps.length);
      setActiveStep(Math.min(steps.length - 1, Math.max(0, step)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length, isMounted, isDesktop]);

  // Section-Height: Desktop = calc(100vh * steps.length), Mobile = h-screen
  const sectionStyle =
    typeof window !== "undefined" && window.innerWidth < 1024
      ? { height: "80vh", minHeight: "80vh" }
      : { height: `calc(100vh * ${steps.length})` };

  // Einheitliche Styles für time-badge auf Mobile
  const timeBadgeClass =
    "time-badge bg-neutral-800 text-white/80 rounded-full px-4 py-2 text-xs font-semibold inline-block mx-auto min-w-[220px]";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setActiveStep(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  if (!isMounted) {
    return (
      <section className="relative bg-[#101415] min-h-screen">
        <div className="h-screen flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              🚀 In 4 Schritten zu mehr Reichweite
            </h2>
            <p className="text-white/80 text-lg">Lade...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="steps"
      ref={sectionRef}
      style={sectionStyle}
      className="relative bg-[#101415]"
    >
      {/* Mobile Ansicht: Swipe-Carousel */}
      <div
        className="lg:hidden h-screen min-h-screen w-screen flex flex-col justify-between pt-32"
        style={{ position: "relative", zIndex: 10, padding: 0, margin: 0 }}
      >
        {/* Oberer Bereich: Text + Button */}
        <div
          className="flex flex-col justify-start px-4 pt-20 pb-0 items-center"
          style={{ minHeight: "32vh" }}
        >
          <div className="w-full max-w-xl">
            <h2 className="text-white text-2xl xs:text-3xl font-extrabold mb-3 tracking-tight drop-shadow-lg leading-tight text-center md:text-left">
              🚀 In 4 Schritten zu mehr Reichweite, qualifizierten Leads &
              planbarem Wachstum
            </h2>
            <p className="text-white/80 text-base mb-4 text-center md:text-left">
              Mit professionellen Kurzvideos als Einstieg in die
              Content-Strategie
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-[#0f1819] font-bold rounded-full px-6 py-2.5 shadow-md hover:scale-105 hover:shadow-xl transition-all text-base font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95 w-full block text-center mt-0"
              style={{ minWidth: 0, marginTop: 0 }}
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
        {/* Unterer Bereich: Step-Karte + Progressbar + Swipe-Hinweis */}
        <div
          className="flex flex-col justify-start pb-0"
          style={{ minHeight: "54vh" }}
        >
          {/* Progressbar entfernt */}
          {/* <div className="w-full h-3 bg-white/10 rounded-full mt-2 mb-4 overflow-hidden">
            <div
              className="h-full"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                background: "#d4af37",
              }}
              aria-valuenow={activeStep + 1}
              aria-valuemin={1}
              aria-valuemax={steps.length}
              role="progressbar"
            ></div>
          </div> */}
          <div
            ref={emblaRef}
            className="embla overflow-hidden w-full max-w-[420px] mx-auto"
            style={{ height: 260 }}
          >
            <div className="embla__container flex" style={{ height: "100%" }}>
              {steps.map((step, idx) => (
                <div
                  className="embla__slide flex-shrink-0 w-full px-2"
                  style={{
                    height: 260,
                    minHeight: 220,
                    maxHeight: 320,
                    minWidth: 0,
                    maxWidth: 340,
                    margin: "0 6px",
                  }}
                  key={idx}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Schritt ${step.number} von ${steps.length}`}
                >
                  <div className="card bg-[#0f1819] bg-opacity-90 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/10 min-h-[220px] max-h-[320px] h-[100%] flex flex-col justify-between animate-fade-in-up">
                    <div className="step-icon mb-2 text-white bg-opacity-100 flex items-center justify-center">
                      {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                    </div>
                    <h3 className="font-bold text-base mb-1 text-white drop-shadow-lg text-left">
                      Schritt {step.number} - {step.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-2 text-left">
                      {step.description}
                    </p>
                    {step.timeSpent && (
                      <div className="bg-neutral-800 text-white/80 rounded-full px-3 py-1.5 text-xs font-semibold inline-block mx-auto min-w-[140px]">
                        DEIN ZEITAUFWAND: {step.timeSpent}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dot-Indicator für Mobile - jetzt direkt unter dem Carousel, optisch direkt unter der Karte */}
          <div className="flex items-center justify-center mt-5 gap-2 select-none" aria-label="Schritt-Navigation">
            {steps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Gehe zu Schritt ${idx + 1}`}
                aria-current={activeStep === idx ? "step" : undefined}
                tabIndex={0}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-[#101415] ${activeStep === idx ? "bg-white shadow-md scale-105" : "bg-neutral-700/70"} w-2.5 h-2.5 border-none`}
                style={{ boxShadow: activeStep === idx ? "0 0 0 2.5px rgba(255,255,255,0.10)" : undefined }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Desktop Ansicht */}
      <div className="hidden lg:flex sticky top-0 h-screen items-center">
        {/* Linke Seite */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-16 items-center">
          <div className="w-full max-w-xl">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg leading-tight text-left">
              🚀 In 4 Schritten zu mehr Reichweite, qualifizierten Leads &
              planbarem Wachstum
            </h2>
            <p className="text-white/80 text-lg mb-8 text-left">
              Mit professionellen Kurzvideos als Einstieg in die
              Content-Strategie
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-[#0f1819] font-bold rounded-full px-6 py-2.5 shadow-md hover:scale-105 hover:shadow-xl transition-all text-base font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95 w-full block text-center mt-2"
              style={{ minWidth: 0 }}
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
        {/* Rechte Seite */}
        <div className="w-1/2 items-center justify-center flex">
          <div className="w-full max-w-xl flex flex-row items-center relative">
            {/* Karte */}
            <div className="flex-1">
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={activeStep}
                  timeout={350}
                  classNames="fade-step"
                  nodeRef={cardRefDesktop}
                >
                  <div
                    ref={cardRefDesktop}
                    className="card bg-[#0f1819] bg-opacity-90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/10 relative min-h-[340px] flex flex-col justify-between"
                  >
                    <div className="step-icon mb-4 text-white bg-opacity-100">
                      {steps[activeStep].icon}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">
                      Schritt {steps[activeStep].number} -{" "}
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed mb-4">
                      {steps[activeStep].description}
                    </p>
                    {steps[activeStep].timeSpent && (
                      <div className={timeBadgeClass}>
                        DEIN ZEITAUFWAND: {steps[activeStep].timeSpent}
                      </div>
                    )}
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
            {/* Vertikale Progressbar */}
            <div className="ml-6 flex flex-col items-center justify-center h-full">
              <div className="relative h-[80%] min-h-[180px] max-h-[340px] w-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 w-full rounded-full transition-all duration-300"
                  style={{
                    height: `${((activeStep + 1) / steps.length) * 100}%`,
                    background: "#d4af37",
                  }}
                  aria-valuenow={activeStep + 1}
                  aria-valuemin={1}
                  aria-valuemax={steps.length}
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .embla__container {
          display: flex;
          height: 100%;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          transition: box-shadow 0.3s;
        }
      `}</style>
    </section>
  );
}
