"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Plyr from "@/components/PlyrWrapper";
import { motion } from "framer-motion";

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
              🎉 Perfekt! Dein Termin ist gebucht
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
                  autoplay: false,
                  muted: false,
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