"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Facebook Pixel type declaration
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global {
  interface Window {
    fbq?: (action: string, event: string, parameters?: Record<string, any>) => void;
  }
}

export default function KontaktPage() {
  useEffect(() => {
    // Meta Pixel Event für Seitenbesuch (Lead Interest)
    if (typeof window !== "undefined") {
      const fbq = window.fbq;
      if (fbq) {
        fbq("track", "ViewContent", {
          content_name: "Kontaktformular Seite",
          content_category: "Contact Form Page",
        });
      }
    }

    // Calendly Script laden
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#101415]">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              🚀 Lass uns dein Wachstum planen
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Buche jetzt dein kostenloses Erstgespräch und erfahre, wie du mit
              professionellen Kurzvideos mehr Reichweite und qualifizierte Leads
              generierst.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="bg-[#0f1819] bg-opacity-90 backdrop-blur-lg p-4 md:p-8 rounded-3xl shadow-xl border border-white/10 mb-12">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/michaelbusinessch/erstgespraech?primary_color=d4af37&embed_domain=localhost&embed_type=Inline"
              style={{ minWidth: "320px", height: "1200px" }}
            ></div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">Kostenlos</h3>
              <p className="text-white/70 text-sm">
                Das Erstgespräch ist für dich völlig unverbindlich und kostenlos
              </p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-bold mb-2">30 Minuten</h3>
              <p className="text-white/70 text-sm">
                In nur 30 Minuten analysieren wir deine aktuelle Situation
              </p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-bold mb-2">Sofortige Insights</h3>
              <p className="text-white/70 text-sm">
                Du erhältst direkt erste wertvolle Tipps für dein Marketing
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* CSS um interne Scrollbar zu entfernen */}
      <style jsx global>{`
        .calendly-inline-widget iframe {
          overflow: hidden !important;
        }
        
        .calendly-popup-content {
          overflow: visible !important;
        }
        
        /* Versteckt Scrollbars im Widget */
        .calendly-inline-widget {
          overflow: hidden !important;
        }
        
        .calendly-inline-widget iframe body {
          overflow: visible !important;
        }
      `}</style>
    </div>
  );
} 