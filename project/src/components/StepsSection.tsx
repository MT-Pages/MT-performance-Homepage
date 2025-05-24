"use client";

import React, { useRef, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Link from "next/link";
import "./StepsSectionTransitions.css";

export default function StepsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const steps = [
    {
      number: 1,
      title: "Kick-off",
      description:
        "BEISPIELTEXT: Beim gemeinsamen Kick-Off Termin besprechen wir deine ideale Strategie. Wir stellen sicher, dass die Positionierung authentisch ist und den Nerv deiner Zielgruppe trifft.",
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
        "BEISPIELTEXT: Wir produzieren hochwertigen Content, der deine Zielgruppe anspricht und dein Angebot optimal präsentiert.",
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
        "BEISPIELTEXT: Wir bereiten alles für dich vor, damit deiner Sichtbarkeit nichts mehr im Wege steht.",
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
        "BEISPIELTEXT: Mit bezahlter Werbung zu Neukunden- und/oder Mitarbeiteranfragen.",
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
  const cardRefMobile = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

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
  }, [steps.length, isMounted]);

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
      style={{ height: `calc(100vh * ${steps.length})` }}
      className="relative bg-[#101415]"
    >
      <div className="sticky top-0 h-screen flex items-center">
        {/* Linke Seite */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-16">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg leading-tight">
            🚀 In 4 Schritten zu mehr Reichweite, qualifizierten Leads &
            planbarem Wachstum
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Mit professionellen Kurzvideos als Einstieg in die Content-Strategie
          </p>
          <div className="flex justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-[#0f1819] font-bold rounded-full px-6 py-2.5 shadow-md hover:scale-105 hover:shadow-xl transition-all text-base font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
        {/* Rechte Seite */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
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
                      <div className="time-badge bg-neutral-800 text-white/80 rounded-full px-4 py-2 text-xs font-semibold inline-block">
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
        {/* Mobile: Progressbar unter der Karte und animierter Textwechsel */}
        <div className="w-full h-3 bg-white/10 rounded-full mt-8 overflow-hidden lg:hidden">
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
        </div>
        <div className="lg:hidden w-full mt-8">
          <div className="w-full max-w-xl mx-auto">
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={activeStep}
                timeout={350}
                classNames="fade-step"
                nodeRef={cardRefMobile}
              >
                <div
                  ref={cardRefMobile}
                  className="card bg-[#0f1819] bg-opacity-90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/10 min-h-[340px] flex flex-col justify-between"
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
                    <div className="time-badge bg-neutral-800 text-white/80 rounded-full px-4 py-2 text-xs font-semibold inline-block">
                      DEIN ZEITAUFWAND: {steps[activeStep].timeSpent}
                    </div>
                  )}
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </section>
  );
}
