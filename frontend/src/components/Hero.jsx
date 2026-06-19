import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Traceability Platform
          </span>

          <h1
            data-testid="hero-title"
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Secure Batch Traceability &{" "}
            <span className="text-green-600">
              Certificate Verification
            </span>
          </h1>

          <p
            data-testid="hero-description"
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Manage production batches, laboratory certificates and buyer
            records from one secure platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              data-testid="hero-get-started-btn"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/about"
              data-testid="hero-learn-more-btn"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/2 translate-x-1/2 h-72 w-72 rounded-full bg-green-100/50 blur-3xl"
      />
    </section>
  );
};

export default Hero;