import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-green-600"
        : "text-slate-700 hover:text-green-600"
    }`;

  return (
    <header
      data-testid="navbar"
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <Link
            to="/"
            data-testid="navbar-logo"
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 text-white shadow-sm">
              <Leaf className="h-5 w-5" />
            </span>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              CertiTrace <span className="text-green-600">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/login"
            data-testid="navbar-cta"
            className="hidden md:inline-flex items-center rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition-colors"
          >
            Sign In
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            data-testid="navbar-mobile-toggle"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {open && (
          <div
            data-testid="navbar-mobile-menu"
            className="md:hidden pb-4 pt-2 space-y-1 border-t border-slate-100"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`nav-link-mobile-${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;