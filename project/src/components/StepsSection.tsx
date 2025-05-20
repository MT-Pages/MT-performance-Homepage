"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function StepsSection() {
  const steps = [
    {
      number: 1,
      title: 'Kick-off - Der Startschuss',
      description: 'Beim gemeinsamen Kick-Off Termin besprechen wir deine ideale Strategie. Wir stellen sicher, dass die Positionierung authentisch ist und den Nerv deiner Zielgruppe trifft.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
          <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Medienproduktion mit Plan',
      description: 'Wir produzieren hochwertigen Content, der deine Zielgruppe anspricht und dein Angebot optimal präsentiert.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Set-up für Sichtbarkeit',
      description: 'Wir bereiten alles vor, damit deiner Sichtbarkeit nichts mehr im Wege steht und du die richtige Zielgruppe erreichst.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Go-Live zum Erfolg',
      description: 'Mit bezahlter Werbung zu Neukunden- und Mitarbeitendenanfragen, die perfekt zu deinem Unternehmen passen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .22.53v5.5a.75.75 0 0 1-1.5 0V7.949l-7.859 7.86a.75.75 0 0 1-1.06-1.06l7.86-7.86H8.25a.75.75 0 0 1 0-1.5h6.44a.75.75 0 0 1 .53.219Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      
      // Berechne den Fortschritt für die gesamte Section (0-1)
      const sectionProgress = Math.min(1, Math.max(0, 
        (windowHeight * 0.5 - sectionTop) / (windowHeight * 0.5)
      ));
      
      setScrollProgress(sectionProgress);
      
      // Zeige Steps basierend auf Scroll-Position an
      if (sectionProgress > 0) {
        const stepsToShow = Math.min(steps.length, Math.floor(sectionProgress * (steps.length + 1)));
        
        const newVisibleSteps = [];
        for (let i = 0; i < stepsToShow; i++) {
          newVisibleSteps.push(i);
        }
        
        if (JSON.stringify(newVisibleSteps) !== JSON.stringify(visibleSteps)) {
          setVisibleSteps(newVisibleSteps);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [steps.length, visibleSteps]);

  return (
    <div className="steps-section">
      <div className="spacer"></div> {/* Platz zum Scrollen vor der Section */}
      
      <div className="steps-container relative" ref={sectionRef}>
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row">
          
          {/* Linke Seite - Text und Button */}
          <div className="steps-heading-container">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 text-left tracking-tight drop-shadow-lg">
              In 4 Schritten zu mehr Reichweite, qualifizierten Leads & planbarem Wachstum
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Dein Zeitaufwand: Nach dem Onboarding, minimal
            </p>
            
            <button className="bg-white text-[#0f1819] font-bold rounded-full px-8 py-3 shadow-md hover:scale-105 hover:shadow-xl transition-all text-lg font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95">
              Erstgespräch buchen
            </button>
          </div>
          
          {/* Rechte Seite - Steps */}
          <div className="steps-content-container">
            <div className="flex flex-col items-start justify-center gap-8 w-full">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  ref={(el: HTMLDivElement | null) => {
                    if (el) stepRefs.current[idx] = el;
                  }}
                  className={`step-card bg-[#151e1f] rounded-2xl p-6 text-white shadow-xl flex flex-row items-start w-full ${visibleSteps.includes(idx) ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 0.3}s` }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-2xl font-bold mr-5 shadow-lg">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="font-bold text-xl mb-2 text-white drop-shadow-lg">{step.title}</div>
                    <div className="text-white/80 text-base leading-relaxed">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="spacer"></div> {/* Platz zum Scrollen nach der Section */}
    </div>
  );
} 