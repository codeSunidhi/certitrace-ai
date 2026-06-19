import { Boxes, FileCheck2, ScrollText } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const cards = [
  {
    icon: Boxes,
    title: "Batch Management",
    description:
      "Track harvest dates, distillation records and production yields.",
    testId: "card-batch-management",
  },
  {
    icon: FileCheck2,
    title: "Certificate Verification",
    description: "Store and verify laboratory certificates easily.",
    testId: "card-certificate-verification",
  },
  {
    icon: ScrollText,
    title: "Audit Logs",
    description:
      "Maintain traceability and accountability for every record.",
    testId: "card-audit-logs",
  },
];

const Home = () => {
  return (
    <div
      data-testid="home-page"
      className="min-h-screen flex flex-col bg-white"
    >
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section
          data-testid="features-section"
          className="py-20 sm:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Everything You Need in One Place
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600">
                A focused toolkit for producers managing batches,
                certificates, and dispatch records.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card) => (
                <Card key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;