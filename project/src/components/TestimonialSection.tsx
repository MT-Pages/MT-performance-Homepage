import React from "react";
import SectionTitle from "./SectionTitle";
import Plyr from "./PlyrWrapper";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle>Erfahrung meiner Kunden</SectionTitle>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[160px] md:max-w-[220px] aspect-[9/16] bg-neutral-700 rounded-2xl mb-4 overflow-hidden shadow-lg">
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: "/videos/Testimonial.mp4",
                    type: "video/mp4",
                  },
                ],
              }}
              options={{
                autoplay: false,
                muted: false,
                controls: [
                  "play-large",
                  "play",
                  "progress",
                  "current-time",
                  "fullscreen",
                ],
                volume: 0.6,
              }}
              style={{ borderRadius: "1.5rem" }}
            />
          </div>
          <p className="text-white">Martin Schär, Solarmaa GmbH, Biel</p>
        </div>
      </div>
    </section>
  );
}
