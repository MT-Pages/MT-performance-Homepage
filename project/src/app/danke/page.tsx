"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DankePage() {
  useEffect(() => {
    // Meta Pixel Event für Conversion Tracking (falls noch nicht gefeuert)
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fbq = (window as any).fbq;
      if (fbq) {
        fbq("track", "CompleteRegistration", {
          content_name: "Erstgespräch Bestätigung",
          content_category: "Thank You Page",
          value: 1,
          currency: "EUR",
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#101415]">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
              <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Hauptinhalt */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            🎉 Perfekt! Deine Anfrage ist bei uns angekommen
          </h1>
          
          <p className="text-white/80 text-lg mb-8">
            Vielen Dank für dein Interesse! Wir haben deine Anfrage erhalten und 
            werden uns innerhalb der nächsten 24 Stunden bei dir melden.
          </p>

          {/* Was passiert als Nächstes */}
          <div className="bg-[#0f1819] bg-opacity-90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Was passiert als Nächstes?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0f1819] font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-white mb-2">Kontaktaufnahme</h3>
                <p className="text-white/70 text-sm">
                  Wir melden uns innerhalb von 24 Stunden per E-Mail oder Telefon bei dir
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0f1819] font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-white mb-2">Terminvereinbarung</h3>
                <p className="text-white/70 text-sm">
                  Gemeinsam finden wir einen passenden Termin für unser 30-minütiges Gespräch
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0f1819] font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-white mb-2">Strategiegespräch</h3>
                <p className="text-white/70 text-sm">
                  Im kostenlosen Erstgespräch besprechen wir deine Ziele und erste Lösungsansätze
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 p-6 rounded-2xl border border-[#d4af37]/20 mb-12">
            <p className="text-white/90 text-lg font-medium mb-4">
              &quot;Durch die Zusammenarbeit mit MT Performance haben wir unsere Lead-Generierung 
              um 300% gesteigert und endlich planbare Kundenanfragen.&quot;
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white/70 ml-2">— Ein zufriedener Kunde</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-[#0f1819] font-bold rounded-xl px-8 py-3 shadow-lg hover:scale-105 hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95"
            >
              Zur Startseite
            </Link>
            <a
              href="mailto:info@mt-performance.de"
              className="bg-[#d4af37] text-[#0f1819] font-bold rounded-xl px-8 py-3 shadow-lg hover:bg-[#c9a633] hover:scale-105 hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-[#d4af37]/50 active:scale-95"
            >
              Direkt E-Mail schreiben
            </a>
          </div>

          {/* Zusätzliche Information */}
          <div className="mt-12 text-white/60 text-sm">
            <p className="mb-2">
              <strong>Noch Fragen?</strong> Ruf uns gerne direkt an: 
              <a href="tel:+4915112345678" className="text-[#d4af37] hover:underline ml-1">
                +49 151 1234 5678
              </a>
            </p>
            <p>
              Oder schreib uns eine E-Mail an: 
              <a href="mailto:info@mt-performance.de" className="text-[#d4af37] hover:underline ml-1">
                info@mt-performance.de
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 