"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      const yOffset = -90; // Passe diesen Wert ggf. an die Höhe deines Headers an
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleScrollToTestimonials = () => {
    const section = document.getElementById("testimonials");
    if (section) {
      const yOffset = -90;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-[#0f1819] z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-1 flex items-center min-h-[48px] relative">
        {/* Logo - Left */}
        <div className="flex-shrink-0 z-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_white_gold_transparent.png"
              alt="Michael Trüssel Performance"
              width={120}
              height={36}
              className="max-h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - Center absolut mittig */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="flex items-center gap-8">
            <button
              type="button"
              onClick={handleScrollToAbout}
              className="text-white hover:text-gray-300 font-medium transition-colors text-base bg-transparent border-none outline-none cursor-pointer"
            >
              Über mich
            </button>
            <button
              type="button"
              onClick={handleScrollToTestimonials}
              className="text-white hover:text-gray-300 font-medium transition-colors text-base bg-transparent border-none outline-none cursor-pointer"
            >
              Kundenstimmen
            </button>
            <Link
              href="/so-arbeiten-wir"
              className="text-white hover:text-gray-300 font-medium transition-colors text-base"
            >
              So arbeiten wir
            </Link>
          </nav>
        </div>

        {/* Button - Right */}
        <div className="hidden lg:block flex-shrink-0 ml-auto z-10">
          <Link
            href="/kontakt#termin"
            className="font-bold transition-colors text-black bg-white px-5 py-2 rounded-full text-base shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 whitespace-nowrap text-center"
          >
            Erstgespräch buchen
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0f1819] shadow-lg px-4 transition-all duration-500 ease-in-out overflow-hidden z-40
          ${
            isMenuOpen
              ? "py-8 max-h-[500px] opacity-100"
              : "py-0 max-h-0 opacity-0 pointer-events-none"
          }`}
        style={{
          // Optional: für noch weichere Animationen
          transitionProperty: "max-height, opacity, padding",
        }}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col space-y-6">
          <button
            type="button"
            onClick={handleScrollToAbout}
            className="text-white hover:text-gray-300 w-full block py-2 text-center text-lg font-medium bg-transparent border-none outline-none cursor-pointer"
          >
            Über mich
          </button>
          <button
            type="button"
            onClick={handleScrollToTestimonials}
            className="text-white hover:text-gray-300 w-full block py-2 text-center text-lg font-medium bg-transparent border-none outline-none cursor-pointer"
          >
            Kundenstimmen
          </button>
          <Link
            href="/so-arbeiten-wir"
            className="text-white hover:text-gray-300 w-full block py-2 text-center text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            So arbeiten wir
          </Link>
          <Link
            href="/kontakt#termin"
            className="font-bold transition-colors text-black bg-white px-5 py-2 rounded-full text-base shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 whitespace-nowrap text-center mt-4 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Erstgespräch buchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
