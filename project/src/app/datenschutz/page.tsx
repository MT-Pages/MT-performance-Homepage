"use client";
// import "@/privacybee-widget";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useEffect, useRef } from "react";

export default function DatenschutzPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      widgetRef.current &&
      !widgetRef.current.querySelector("privacybee-widget")
    ) {
      const el = document.createElement("privacybee-widget");
      el.setAttribute("website-id", "cma50fnt400ab7xndyml5xgit");
      el.setAttribute("type", "dsg");
      el.setAttribute("lang", "de");
      widgetRef.current.appendChild(el);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-black pt-28 pb-28 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-left mb-8 mt-4 max-w-4xl mx-auto">
          Datenschutz
        </h1>
        <div className="max-w-4xl mx-auto">
          <Script
            src="https://app.privacybee.io/widget.js"
            strategy="afterInteractive"
            defer
          />
          <div ref={widgetRef} />
        </div>
      </main>
      <Footer />
    </>
  );
}
