import { useState, useEffect } from "react";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AGENCY } from "../data";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Templates", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isIntake = location.pathname === "/intake";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isIntake
          ? "bg-[#050507]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center shadow-lime-glow">
            <Zap className="w-4.5 h-4.5 text-zinc-950" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-white text-[17px] tracking-tight">
            {AGENCY.name}
          </span>
        </Link>

        {/* Desktop nav */}
        {!isIntake && (
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] text-zinc-500 hover:text-white transition-colors px-3.5 py-2 rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          {!isIntake && (
            <Link
              to="/intake"
              className="hidden md:inline-flex items-center gap-2 bg-brand-400 text-zinc-950 font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-brand-300 transition-all hover:shadow-lime-glow group"
            >
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
          {isIntake && (
            <Link
              to="/"
              className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
            >
              ← Back to site
            </Link>
          )}
          {!isIntake && (
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && !isIntake && (
        <div className="md:hidden bg-[#0c0c12]/98 backdrop-blur-xl border-t border-white/5 px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-zinc-400 hover:text-white text-left py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-white/5">
            <Link
              to="/intake"
              className="flex items-center justify-center gap-2 bg-brand-400 text-zinc-950 font-semibold text-sm px-5 py-3.5 rounded-lg hover:bg-brand-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
