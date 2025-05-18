'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

const services = [
  {
    title: 'Performance Coaching',
    description: 'Entfalte dein volles Potenzial mit individuell auf dich zugeschnittenen Coaching-Sessions. Wir arbeiten an deiner Zielsetzung, Motivation und den Strategien, die du brauchst, um deine Ziele zu erreichen.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/leistungen/performance-coaching'
  },
  {
    title: 'Persönlichkeitsentwicklung',
    description: 'Entdecke und entwickle deine Stärken, arbeite an deinen Schwächen und werde zur besten Version deiner selbst. Mit bewährten Methoden begleite ich dich auf deinem Weg zur persönlichen Transformation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: '/leistungen/persoenlichkeitsentwicklung'
  },
  {
    title: 'Business Mentoring',
    description: 'Profitiere von meiner Erfahrung und Expertise, um dein Business auf das nächste Level zu bringen. Ich unterstütze dich bei der Entwicklung deiner Strategien, Prozesse und Führungsqualitäten.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/leistungen/business-mentoring'
  },
  {
    title: 'Workshops & Seminare',
    description: 'Erlebe intensive Gruppenerfahrungen, die dich inspirieren und dir praktische Tools an die Hand geben. Meine Workshops und Seminare sind darauf ausgerichtet, tiefgreifende und nachhaltige Veränderungen zu bewirken.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: '/leistungen/workshops-seminare'
  }
];

export default function ServiceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meine Leistungen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecke, wie ich dir helfen kann, dein volles Potenzial zu entfalten und deine Ziele zu erreichen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/leistungen" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#D4AF37] hover:bg-[#B8860B] transition-colors"
          >
            Alle Leistungen entdecken
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-16 w-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        href={href}
        className="inline-flex items-center text-[#D4AF37] hover:text-[#B8860B] font-medium transition-colors"
      >
        Mehr erfahren
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
} 