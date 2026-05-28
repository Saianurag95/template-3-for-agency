import { STATS, INDUSTRIES_SERVED } from "../data";

export default function TrustBand() {
  return (
    <section className="relative bg-brand-400 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />

      {/* Stats row */}
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-zinc-900/70 text-[13px] font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee industries */}
      <div className="border-t border-zinc-950/10 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED].map((industry, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-zinc-900/60 text-xs font-semibold uppercase tracking-widest">
              {industry}
              <span className="w-1 h-1 rounded-full bg-zinc-900/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
