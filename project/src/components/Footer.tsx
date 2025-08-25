"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1819] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Minimalistischer, zentrierter oberer Bereich */}
        <div className="flex flex-col md:flex-row items-center justify-center py-6 border-b border-gray-800 gap-6 md:gap-12">
          <Link href="/">
            <Image
              src="/images/logo_white_gold_transparent.png"
              alt="Michael Trüssel Performance"
              width={168}
              height={50}
              className="max-h-14 w-auto object-contain mx-auto"
              priority
            />
          </Link>
          <nav className="flex flex-row items-center gap-6 mt-4 md:mt-0">
            <FooterNavLink href="/impressum" label="Impressum" />
            <FooterNavLink href="/datenschutz" label="Datenschutz" />
          </nav>
        </div>

        {/* Copyright Bereich */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Made by Daniele Citran, Eric Huber</p>
        </div>
      </div>
    </footer>
  );
}

function FooterNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-300 text-sm md:text-base font-normal px-2 py-1 rounded transition-all duration-200 hover:text-[#D4AF37] hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0f1819]"
    >
      {label}
    </Link>
  );
}
