'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#0f1819] z-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center">
        {/* Logo - Left */}
        <div className="flex-shrink-0 mr-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Logo white_gold_transparent.png" 
              alt="Michael Trüssel Performance" 
              width={160} 
              height={55}
              className="h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex justify-center mx-auto">
          <nav className="flex items-center">
            <Link href="/ueber-mich" className="mx-8 text-white hover:text-gray-300 font-medium transition-colors">
              Über mich
            </Link>
            <Link href="/kundenstimmen" className="mx-8 text-white hover:text-gray-300 font-medium transition-colors">
              Kundenstimmen
            </Link>
            <Link href="/so-arbeiten-wir" className="mx-8 text-white hover:text-gray-300 font-medium transition-colors">
              So arbeiten wir
            </Link>
          </nav>
        </div>

        {/* Button - Right */}
        <div className="hidden lg:block flex-shrink-0 ml-auto">
          <Link 
            href="/kontakt#termin" 
            className="font-medium transition-colors text-white border border-white px-5 py-2 whitespace-nowrap"
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
            className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
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
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0f1819] shadow-lg py-8 px-4 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/ueber-mich" 
              className="text-white hover:text-gray-300 w-full block py-2 text-center text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Über mich
            </Link>
            <Link 
              href="/kundenstimmen" 
              className="text-white hover:text-gray-300 w-full block py-2 text-center text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Kundenstimmen
            </Link>
            <Link 
              href="/so-arbeiten-wir" 
              className="text-white hover:text-gray-300 w-full block py-2 text-center text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              So arbeiten wir
            </Link>
            <Link 
              href="/kontakt#termin" 
              className="text-white border border-white px-5 py-2 w-full text-center mt-4 block font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Erstgespräch buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 