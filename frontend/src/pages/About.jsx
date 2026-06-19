import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div
      data-testid="about-page"
      className="min-h-screen flex flex-col bg-white"
    >
      <Navbar />

      <main className="flex-1">
        <section className="py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <Sparkles className="h-3.5 w-3.5" />
              Our Mission
            </span>

            <h1
              data-testid="about-heading"
              className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              About <span className="text-green-600">CertiTrace AI</span>
            </h1>

            <p
              data-testid="about-paragraph"
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              CertiTrace AI helps essential oil producers manage batch records,
              certificates, and dispatch information through a centralized
              platform. The system improves traceability, transparency, and
              record management for businesses in the Herbal & Aromatics sector.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                <p className="text-2xl font-bold text-green-600">Secure</p>
                <p className="mt-1 text-sm text-slate-600">
                  Records kept safe and reliable.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                <p className="text-2xl font-bold text-green-600">Simple</p>
                <p className="mt-1 text-sm text-slate-600">
                  Built to be intuitive and easy to use.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                <p className="text-2xl font-bold text-green-600">Traceable</p>
                <p className="mt-1 text-sm text-slate-600">
                  Full visibility across the supply chain.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;