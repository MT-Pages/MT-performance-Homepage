"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Plyr from "@/components/PlyrWrapper";
import { motion } from "framer-motion";
import { HiVolumeUp } from "react-icons/hi";

export default function DankePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);

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

  // Unmute-Handler
  const handleUnmute = () => {
    setIsMuted(false);
    setShowUnmuteOverlay(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101415]">
      <Header />
      <main className="flex-grow pt-32 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              🎉 Perfekt! Dein Termin wurde gebucht
            </motion.h1>
          </motion.div>

          {/* Video */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="overflow-hidden rounded-2xl w-80 md:w-96 lg:w-[28rem] aspect-[16/9] bg-neutral-700 relative shadow-lg">
              {/* Overlay-Button */}
              {showUnmuteOverlay && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  onClick={handleUnmute}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 backdrop-blur-[2px] rounded-2xl group"
                  aria-label="Ton aktivieren"
                  tabIndex={0}
                >
                  <span className="flex flex-col items-center">
                    <span
                      className="rounded-full bg-[#d4af37] border-2 border-white shadow-lg shadow-[#d4af37]/30 ring-2 ring-[#d4af37]/20 group-hover:scale-105 group-active:scale-95 transition-all duration-200 flex items-center justify-center"
                      style={{ width: 64, height: 64, boxShadow: '0 0 16px 4px #d4af3788, 0 2px 16px 0 #0006' }}
                    >
                      <HiVolumeUp size={28} color="white" />
                    </span>
                    <span className="text-white text-base font-semibold mt-2">
                      Ton aktivieren
                    </span>
                  </span>
                </motion.button>
              )}
              <Plyr
                source={{
                  type: 'video',
                  sources: [
                    {
                      src: '/videos/danke.mov',
                      type: 'video/mp4',
                    },
                  ],
                }}
                options={{
                  autoplay: true,
                  muted: isMuted,
                  controls: [
                    'play-large',
                    'play',
                    'progress',
                    'current-time',
                    'fullscreen',
                  ],
                  volume: 0.5,
                  ratio: '16:9',
                }}
                style={{ 
                  borderRadius: '1rem',
                  aspectRatio: '16/9',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </motion.div>

          {/* Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-full font-bold text-white text-lg bg-[#d4af37] shadow-md hover:scale-105 hover:shadow-xl transition-all text-center focus:outline-none focus:ring-4 focus:ring-[#d4af37]/50 active:scale-95"
            >
              Zurück zur Startseite
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 