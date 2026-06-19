import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
              <Leaf className="h-4 w-4" />
            </span>

            <span className="text-sm font-semibold text-slate-900">
              CertiTrace <span className="text-green-600">AI</span>
            </span>
          </div>

          <div
            data-testid="footer-text"
            className="text-center sm:text-right text-xs sm:text-sm text-slate-600"
          >
            <p>© 2026 CertiTrace AI</p>
            <p className="mt-1">
              Built for the Herbal & Aromatics Sector
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;