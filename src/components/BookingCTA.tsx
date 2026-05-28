import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY } from "../data";

export default function BookingCTA() {
  return (
    <section className="relative bg-brand-400 overflow-hidden py-24">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-zinc-900/60 text-[12px] font-semibold uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {AGENCY.location}
            </div>
            <h2 className="font-display text-4xl lg:text-[3rem] text-zinc-950 leading-[1.08] tracking-tight mb-6">
              Ready to launch a site
              <br />
              that actually wins clients?
            </h2>
            <p className="text-zinc-800 leading-relaxed text-base max-w-md font-light">
              Fill in the project intake form and our team will confirm your scope, template
              match and delivery timeline within one business day.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <Link
              to="/intake"
              className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white font-bold px-8 py-5 rounded-xl text-[15px] hover:bg-zinc-800 transition-all"
            >
              Start Project Intake
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${AGENCY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/20 border-2 border-zinc-950/15 text-zinc-900 font-semibold px-8 py-5 rounded-xl text-[15px] hover:bg-white/30 transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
              Message on WhatsApp
            </a>
            <p className="text-zinc-900/50 text-xs text-center">
              Response within 1 business day · {AGENCY.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
