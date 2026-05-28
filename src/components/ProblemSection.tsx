const PROBLEMS = [
  {
    pain: "Your website looks generic",
    fix: "Every template is built for a specific niche and conversion goal.",
  },
  {
    pain: "Visitors leave without contacting you",
    fix: "We engineer each page around a single clear call-to-action.",
  },
  {
    pain: "Leads come in unqualified",
    fix: "Smart forms pre-qualify enquiries before they reach your inbox.",
  },
  {
    pain: "You waited months for the last site",
    fix: "Our template-first workflow delivers in 1–3 business days.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#050507] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[480px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-orange-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-400/60" />
              The Conversion Problem
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-6">
              Most service websites{" "}
              <span className="text-gradient-warm">weren't built</span>{" "}
              to win clients.
            </h2>
            <p className="text-zinc-500 leading-relaxed text-base max-w-sm font-light">
              They look fine. But "fine" doesn't capture leads. Every page we build is
              engineered around a specific outcome — enquiry, booking, or call.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-zinc-600 text-sm">
              <div className="w-8 h-8 rounded-full bg-surface-card border border-surface-border flex items-center justify-center text-xs font-bold text-zinc-400">
                HYD
              </div>
              Serving businesses across Hyderabad
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            {PROBLEMS.map((item, i) => (
              <div
                key={i}
                className="group glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-card"
              >
                <div className="grid grid-cols-2 divide-x divide-surface-border">
                  <div className="p-5 lg:p-6">
                    <div className="text-[10px] text-zinc-700 font-semibold uppercase tracking-[0.12em] mb-2.5">
                      Problem
                    </div>
                    <div className="text-zinc-400 text-sm leading-snug font-light">{item.pain}</div>
                  </div>
                  <div className="p-5 lg:p-6 bg-brand-400/[0.02]">
                    <div className="text-[10px] text-brand-500 font-semibold uppercase tracking-[0.12em] mb-2.5">
                      Our Fix
                    </div>
                    <div className="text-zinc-200 text-sm leading-snug">{item.fix}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
