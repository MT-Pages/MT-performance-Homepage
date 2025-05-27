"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  useEffect(() => {
    // Meta Pixel Event für Seitenbesuch (Lead Interest)
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fbq = (window as any).fbq;
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
              Werde Marktführer in deiner Region
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Buche dir jetzt dein kostenloses Erstgespräch
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="calendly-widget-wrapper mb-4">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/michaelbusinessch/erstgespraech?primary_color=d4af37&embed_domain=localhost&embed_type=Inline"
              style={{ minWidth: "320px", height: "1000px" }}
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
        .calendly-inline-widget,
        .calendly-inline-widget iframe {
          overflow: hidden !important;
          height: 100% !important;
          min-height: 1000px !important;
          max-height: 1000px !important;
        }
        .calendly-inline-widget iframe {
          pointer-events: auto;
          width: 100% !important;
          border: none !important;
        }
        @media (max-width: 600px) {
          .calendly-widget-wrapper {
            border-radius: 1.5rem !important;
            overflow: hidden !important;
          }
          .calendly-inline-widget,
          .calendly-inline-widget iframe {
            border-radius: 0 !important;
          }
          .calendly-inline-widget,
          .calendly-inline-widget iframe {
            min-height: 900px !important;
            max-height: 900px !important;
          }
        }
        .calendly-popup-content {
          overflow: visible !important;
        }
        .calendly-inline-widget * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .calendly-inline-widget *::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>
    </div>
  );
} 