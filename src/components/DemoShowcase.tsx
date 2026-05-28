import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { DEMOS } from "../data";

const PKG_STYLE: Record<string, string> = {
  Starter: "bg-zinc-800/80 text-zinc-300 border-zinc-700",
  Business: "bg-brand-400/10 text-brand-400 border-brand-400/25",
  Premium: "bg-orange-500/10 text-orange-400 border-orange-500/25",
};

export default function DemoShowcase() {
  return (
    <section id="demos" className="bg-surface-DEFAULT py-28 relative">
      <div className="absolute inset-0 bg-radial-lime opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              Funnel Templates
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight">
              Pick a funnel
              <br />
              built for your niche.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed font-light text-[15px]">
            Every template is niche-matched, conversion-tested and ready to customise
            with your brand in days.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((demo) => (
            <div
              key={demo.id}
              className="group glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.niche}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12]/80 via-[#0c0c12]/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 bg-[#0c0c12]/70 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="text-zinc-300 text-[10px] font-mono font-medium">{demo.id}</span>
                </div>
                <div className={`absolute top-3.5 right-3.5 border rounded-lg px-2.5 py-1.5 text-[10px] font-semibold backdrop-blur-md ${PKG_STYLE[demo.packageFit]}`}>
                  {demo.packageFit}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-[10px] text-zinc-600 font-semibold uppercase tracking-[0.12em] mb-1.5">
                  {demo.category}
                </div>
                <h3 className="text-white font-semibold text-[17px] mb-2 leading-snug">{demo.niche}</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mb-5 font-light">
                  {demo.description}
                </p>
                <Link
                  to="/intake"
                  className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold group/cta hover:gap-3 transition-all"
                >
                  Choose This Style
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/intake"
            className="inline-flex items-center gap-2.5 glass-card text-zinc-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-400/30 hover:text-brand-400 transition-all group text-sm"
          >
            Start a Custom Project
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
