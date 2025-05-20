"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function StepsSection() {
  const steps = [
    {
      number: 1,
      title: 'Kick-off - Der Startschuss',
      description: 'Beim gemeinsamen Kick-Off Termin besprechen wir deine ideale Strategie. Wir stellen sicher, dass die Positionierung authentisch ist und den Nerv deiner Zielgruppe trifft.',
      timeSpent: '60 Minuten (einmalig)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Medienproduktion mit Plan',
      description: 'Wir produzieren hochwertigen Content, der deine Zielgruppe anspricht und dein Angebot optimal präsentiert.',
      timeSpent: '> 30 Minuten (pro Woche)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Das Editing',
      description: 'Unser erfahrenes Team aus professionellen Video Cuttern verwandelt dein Rohmaterial in Premium Reel Content. Dein Zeitaufwand: 0 Minuten.',
      timeSpent: '0 Minuten',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Upload Service',
      description: 'Wir maximieren die Sichtbarkeit deiner Inhalte und sparen dir eine Menge Zeit, indem unser Social Media Management deine Reels auf Instagram und TikTok hochlädt.',
      timeSpent: '0 Minuten',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .22.53v5.5a.75.75 0 0 1-1.5 0V7.949l-7.859 7.86a.75.75 0 0 1-1.06-1.06l7.86-7.86H8.25a.75.75 0 0 1 0-1.5h6.44a.75.75 0 0 1 .53.219Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This function calculates which step should be active based on scroll position
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const viewportHeight = window.innerHeight;
      
      // If section is not yet in view, reset active step
      if (sectionTop >= viewportHeight) {
        setActiveStep(-1);
        return;
      }
      
      // If section top is above viewport
      if (sectionTop <= 0) {
        // Calculate progress through the section (0-1)
        // We want each step to take up approximately 1/5 of the scroll distance
        // This gives each step enough time to be read before moving to the next
        const totalScrollDistance = window.innerHeight * 5; // 5x viewport height for 4 steps
        const scrolled = Math.abs(sectionTop);
        const progress = Math.min(1, scrolled / totalScrollDistance);
        
        // Calculate the active step - spread steps evenly across the scroll range
        const stepProgress = progress * (steps.length + 0.5);
        const newActiveStep = Math.min(steps.length - 1, Math.floor(stepProgress));
        
        if (newActiveStep !== activeStep) {
          setActiveStep(newActiveStep);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll(); // Run once on mount
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [activeStep, steps.length]);

  // Determine CSS class for each step based on active step
  const getStepClass = (idx: number) => {
    if (idx === activeStep) return 'step-card active';
    
    // Previous steps
    if (activeStep > idx) {
      return 'step-card prev-' + Math.min(3, activeStep - idx);
    }
    
    // Upcoming steps
    const distance = idx - activeStep;
    if (distance === 1) return 'step-card next-1';
    if (distance === 2) return 'step-card next-2';
    return 'step-card next-3';
  };

  return (
    <div className="steps-section">
      <div className="steps-container" ref={sectionRef}>
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center">
          
          {/* Left side - Text and Button */}
          <div className="lg:w-1/2 steps-heading-container">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg leading-tight">
              In 4 Schritten zu mehr Reichweite, qualifizierten Leads & planbarem Wachstum
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Dein Zeitaufwand: Nach dem Onboarding, minimal
            </p>
            
            <button className="bg-white text-[#0f1819] font-bold rounded-full px-8 py-3 shadow-md hover:scale-105 hover:shadow-xl transition-all text-lg font-sans focus:outline-none focus:ring-4 focus:ring-cyan-300 active:scale-95">
              Erstgespräch buchen
            </button>
          </div>
          
          {/* Right side - Steps */}
          <div className="lg:w-1/2 steps-content-container">
            <div className="steps-cards-container">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className={getStepClass(idx)}
                >
                  <div className="step-inner w-full">
                    <div className="step-icon">
                      {step.icon}
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">
                        Schritt {step.number} - {step.title}
                      </h3>
                      <p className="text-white/80 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {step.timeSpent && (
                      <div className="time-badge">
                        DEIN ZEITAUFWAND: {step.timeSpent}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress indicator */}
            <div className="steps-progress hidden lg:flex">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`progress-dot ${idx <= activeStep ? 'active' : ''}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 