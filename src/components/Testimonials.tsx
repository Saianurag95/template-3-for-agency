import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#050507] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-center mb-16">
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              Client Proof
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight">
              Results that
              <br />
              speak.
            </h2>
          </div>
          <p className="text-zinc-500 text-base leading-relaxed font-light max-w-sm">
            Real feedback from real Hyderabad businesses that launched with ConvertEdge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-7 flex flex-col hover:border-white/10 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 ${
                i === 1 ? "lg:mt-6" : ""
              }`}
            >
              <Quote className="w-6 h-6 text-brand-400/25 mb-5" strokeWidth={1.5} />
              <p className="text-zinc-400 leading-relaxed text-[14.5px] flex-1 mb-7 font-light">
                "{t.quote}"
              </p>

              <div className="border-t border-surface-border pt-5 flex items-center gap-3.5">
                <div className="w-10 h-10 bg-brand-400/8 border border-brand-400/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-400 text-[11px] font-bold">{t.avatar}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-[14px] truncate">{t.name}</div>
                  <div className="text-zinc-600 text-[12px] mt-0.5 truncate">{t.role}</div>
                </div>
              </div>

              <div className="mt-4 bg-brand-400/5 border border-brand-400/12 rounded-xl px-3.5 py-2.5">
                <span className="text-brand-400 text-[12px] font-semibold">{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
