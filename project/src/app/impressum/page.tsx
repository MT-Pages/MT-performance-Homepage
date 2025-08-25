import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#101415] pt-28 pb-28 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-left mb-8 mt-4 max-w-4xl mx-auto">
          Impressum
        </h1>
      </main>
      <Footer />
    </>
  );
}
