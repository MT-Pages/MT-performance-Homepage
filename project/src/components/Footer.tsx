'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f1819] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <Image 
                src="/images/Logo white_gold_transparent.png" 
                alt="Michael Trüssel Performance" 
                width={150} 
                height={50}
                className="h-auto object-contain mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Performance und Persönlichkeitsentwicklung für Ihr volles Potenzial.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon="facebook" />
              <SocialLink href="https://instagram.com" icon="instagram" />
              <SocialLink href="https://linkedin.com" icon="linkedin" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/ueber-mich" label="Über mich" />
              <FooterLink href="/kundenstimmen" label="Kundenstimmen" />
              <FooterLink href="/so-arbeiten-wir" label="So arbeiten wir" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <FooterLink href="/impressum" label="Impressum" />
              <FooterLink href="/datenschutz" label="Datenschutz" />
              <FooterLink href="/agb" label="AGB" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-gray-300">
              <p>Michael Trüssel Performance</p>
              <p>Musterstrasse 123</p>
              <p>CH-8000 Zürich</p>
              <p className="mt-2">
                <a href="mailto:info@mt-performance.ch" className="hover:text-[#D4AF37]">
                  info@mt-performance.ch
                </a>
              </p>
              <p>
                <a href="tel:+41123456789" className="hover:text-[#D4AF37]">
                  +41 12 345 67 89
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Michael Trüssel Performance. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-[#D4AF37] transition-colors">
        {label}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#D4AF37] transition-all"
    >
      {icon === 'facebook' && (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.589 0-1.049.089-1.394.286-.346.192-.518.526-.518.989v2.705h3.154l-.518 3.667h-2.636v7.98h-5.169z"></path>
        </svg>
      )}
      {icon === 'instagram' && (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.982c2.937 0 3.285.011 4.445.064 1.072.049 1.655.228 2.042.379.514.2.88.439 1.265.824.386.385.624.751.825 1.265.15.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.049 1.072-.228 1.655-.379 2.042-.2.514-.439.88-.824 1.265a3.413 3.413 0 0 1-1.265.825c-.387.15-.97.33-2.042.379-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064-1.072-.049-1.655-.228-2.042-.379-.514-.2-.88-.439-1.265-.824a3.413 3.413 0 0 1-.825-1.265c-.15-.387-.33-.97-.379-2.042-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.072.228-1.655.379-2.042.2-.514.439-.88.824-1.265.385-.386.751-.624 1.265-.825.387-.15.97-.33 2.042-.379 1.16-.053 1.508-.064 4.445-.064M12 0C8.74 0 8.333.014 7.053.072 5.775.131 4.904.333 4.14.63a5.882 5.882 0 0 0-2.126 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.913C.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.058 1.277.261 2.148.558 2.913.307.79.717 1.459 1.384 2.126A5.882 5.882 0 0 0 4.14 23.37c.765.297 1.636.5 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.058 2.148-.261 2.913-.558a5.883 5.883 0 0 0 2.126-1.384 5.883 5.883 0 0 0 1.384-2.126c.297-.765.5-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.261-2.148-.558-2.913a5.883 5.883 0 0 0-1.384-2.126A5.882 5.882 0 0 0 19.86.63c-.765-.297-1.636-.5-2.913-.558C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.441 1.441 0 1 1-2.883 0 1.441 1.441 0 0 1 2.883 0z"></path>
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"></path>
        </svg>
      )}
    </a>
  );
} 