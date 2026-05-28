import { ArrowRight, CheckCircle, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY } from "../data";

const FLOW_STEPS = [
  { label: "Traffic", sub: "Ads & Search", active: false },
  { label: "Landing Page", sub: "Built to convert", active: true },
  { label: "Form Submit", sub: "Lead captured", active: false },
  { label: "Follow-up", sub: "Qualified contact", active: false },
  { label: "Booked Call", sub: "Revenue ready", active: false, accent: true },
];

const PROOF_PILLS = [
  "120+ sites delivered",
  "Hyderabad-based team",
  "1–3 day delivery",
  "No long contracts",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050507] flex items-center overflow-hidden pt-[68px]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-radial-lime" />
      <div className="absolute inset-0 bg-radial-warm" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-400/8 border border-brand-400/20 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-brand-400 text-[11px] font-semibold tracking-[0.12em] uppercase">
              Conversion-first websites
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <MapPin className="w-3 h-3" />
            {AGENCY.location}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_440px] gap-16 xl:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-white leading-[1.0] tracking-tight mb-7">
              Turn visitors
              <br />
              <span className="text-gradient-lime">into booked</span>
              <br />
              calls.
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-[480px] mb-10 font-light">
              Conversion-ready websites and landing pages for service businesses in Hyderabad
              that need more enquiries, calls and qualified leads — delivered in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                to="/intake"
                className="group inline-flex items-center justify-center gap-2.5 bg-brand-400 text-zinc-950 font-bold px-8 py-4 rounded-xl hover:bg-brand-300 transition-all hover:shadow-lime-glow text-[15px]"
              >
                Start Your Project
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => {
                  document.querySelector("#demos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-zinc-300 font-semibold px-8 py-4 rounded-xl hover:border-white/20 hover:bg-white/4 transition-all text-[15px]"
              >
                View Templates
              </button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {PROOF_PILLS.map((p) => (
                <div key={p} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                  <span className="text-zinc-500 text-[13px]">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Funnel diagram */}
          <div className="flex flex-col items-stretch gap-0">
            {/* Header */}
            <div className="bg-surface-card border border-surface-border rounded-t-2xl px-5 py-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-surface-muted rounded-md h-5 flex items-center px-3">
                <span className="text-zinc-600 text-[10px] font-mono">yoursite.convertedge.in</span>
              </div>
            </div>

            {/* Funnel flow */}
            <div className="bg-surface-card border-x border-surface-border px-5 py-5 flex flex-col gap-0">
              {FLOW_STEPS.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all ${
                      step.active
                        ? "bg-brand-400/8 border-brand-400/25 shadow-[0_0_20px_rgba(163,230,53,0.06)]"
                        : step.accent
                        ? "bg-orange-500/8 border-orange-500/20"
                        : "bg-surface-elevated border-surface-border"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                        step.active
                          ? "bg-brand-400 text-zinc-950"
                          : step.accent
                          ? "bg-orange-500 text-white"
                          : "bg-surface-muted text-zinc-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold text-sm ${
                          step.active ? "text-brand-400" : step.accent ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {step.label}
                      </div>
                      <div className="text-zinc-600 text-[11px] mt-0.5">{step.sub}</div>
                    </div>
                    {(step.active || step.accent) && (
                      <div className={`w-1.5 h-1.5 rounded-full ${step.active ? "bg-brand-400" : "bg-orange-500"} animate-pulse-slow`} />
                    )}
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="w-px h-3 bg-surface-border" />
                  )}
                </div>
              ))}
            </div>

            {/* KPI cards */}
            <div className="bg-surface-card border border-surface-border rounded-b-2xl px-5 pb-5 pt-4 grid grid-cols-3 gap-3">
              {[
                { val: "14×", sub: "More enquiries" },
                { val: "48h", sub: "Max delivery" },
                { val: "98%", sub: "Satisfaction" },
              ].map((k) => (
                <div key={k.sub} className="bg-surface-elevated rounded-xl p-3.5 text-center border border-surface-border">
                  <div className="text-white font-display font-bold text-lg leading-none">{k.val}</div>
                  <div className="text-zinc-600 text-[11px] mt-1.5 leading-snug">{k.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />
    </section>
  );
}
