import { Zap, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY } from "../data";

const FOOTER_NAV = [
  { label: "Services", href: "#services" },
  { label: "Templates", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030305] border-t border-surface-border">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-zinc-950" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-white text-[17px] tracking-tight">
                {AGENCY.name}
              </span>
            </Link>
            <p className="text-zinc-600 text-[13.5px] max-w-xs leading-relaxed font-light mb-5">
              Conversion-ready websites for service businesses in Hyderabad. Fast,
              focused, and built to win clients.
            </p>
            <div className="flex items-center gap-2 text-zinc-700 text-[12px]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.75} />
              {AGENCY.address}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.14em] mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-zinc-600 hover:text-zinc-300 text-[13.5px] text-left transition-colors font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.14em] mb-5">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${AGENCY.email}`}
                className="text-zinc-600 hover:text-zinc-300 text-[13.5px] transition-colors font-light"
              >
                {AGENCY.email}
              </a>
              <a
                href={`https://wa.me/${AGENCY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-300 text-[13.5px] transition-colors font-light"
              >
                WhatsApp
              </a>
              <Link
                to="/intake"
                className="inline-flex items-center gap-1.5 text-brand-400 text-[13.5px] font-semibold hover:text-brand-300 transition-colors group mt-1"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-surface-border/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-zinc-700 text-[12px] font-light">
            © {new Date().getFullYear()} {AGENCY.name}. All rights reserved. · Hyderabad, India
          </p>
          <p className="text-zinc-800 text-[11px] font-mono">
            template: agency-leadgen-pro-01
          </p>
        </div>
      </div>
    </footer>
  );
}
