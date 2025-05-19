import React from 'react';
import SectionTitle from './SectionTitle';

export default function TestimonialSection() {
  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle>Erfahrung meiner Kunden</SectionTitle>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[160px] md:max-w-[220px] aspect-[9/16] bg-neutral-700 rounded-2xl mb-4 overflow-hidden shadow-lg">
            <video
              src="/videos/Testimonial.mp4"
              className="w-full h-full object-cover rounded-2xl"
              controls
            />
          </div>
          <p className="text-white">Martin Schär, Solarmaa GmbH, Biel</p>
        </div>
      </div>
    </section>
  );
} 