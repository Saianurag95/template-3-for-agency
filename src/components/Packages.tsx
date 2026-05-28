import { CheckCircle, Clock, FileText, RefreshCw, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PACKAGES } from "../data";

export default function Packages() {
  return (
    <section id="packages" className="bg-[#050507] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-lime opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-brand-400/60" />
            Pricing
            <span className="w-4 h-px bg-brand-400/60" />
          </p>
          <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-5">
            Simple packages.
            <br />
            Fast delivery.
          </h2>
          <p className="text-zinc-500 leading-relaxed font-light">
            All prices are demo pricing. Final pricing confirmed after intake review.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-start">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl flex flex-col transition-all ${
                pkg.highlight
                  ? "bg-surface-card border border-brand-400/30 shadow-[0_0_60px_rgba(163,230,53,0.08)] scale-[1.02] z-10"
                  : "glass-card hover:border-white/10 hover:shadow-card"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent rounded-full" />
              )}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-brand-400 text-zinc-950 text-[11px] font-bold px-3.5 py-1.5 rounded-full">
                  <Star className="w-3 h-3" strokeWidth={2.5} />
                  Most Popular
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-7 pb-7 border-b border-surface-border">
                  <h3 className="text-white font-semibold text-lg mb-4">{pkg.name}</h3>
                  <div className={`font-display text-[2.6rem] font-bold leading-none ${pkg.highlight ? "text-brand-400" : "text-white"}`}>
                    {pkg.price}
                  </div>
                  <p className="text-zinc-600 text-[11px] mt-2">Demo pricing — confirmed on intake</p>
                </div>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {[
                    { Icon: Clock, label: pkg.delivery },
                    { Icon: FileText, label: pkg.pages },
                    { Icon: RefreshCw, label: pkg.revisions },
                  ].map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 bg-surface-muted border border-surface-border rounded-lg px-3 py-1.5 text-zinc-400 text-[12px]"
                    >
                      <Icon className="w-3 h-3" strokeWidth={1.75} />
                      {label}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-brand-400" : "text-zinc-600"}`}
                        strokeWidth={2}
                      />
                      <span className="text-zinc-400 text-[13.5px] leading-snug font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/intake"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-[14px] transition-all ${
                    pkg.highlight
                      ? "bg-brand-400 text-zinc-950 hover:bg-brand-300 hover:shadow-lime-glow"
                      : "border border-surface-border text-zinc-400 hover:border-white/15 hover:text-white hover:bg-white/3"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-700 text-xs mt-8">
          All prices in Indian Rupees (₹). Demo pricing shown — final quote provided after intake review.
        </p>
      </div>
    </section>
  );
}
