import {
  Target,
  TrendingUp,
  Zap,
  ClipboardList,
  MapPin,
  Bell,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "../data";

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  TrendingUp,
  Zap,
  ClipboardList,
  MapPin,
  Bell,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#050507] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-start mb-16">
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              What We Build
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight">
              Every service
              <br />
              we offer converts.
            </h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-zinc-500 text-base leading-relaxed max-w-md font-light">
              From single landing pages to full multi-step funnels — everything is designed
              to improve enquiry rates and get Hyderabad businesses more qualified leads.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.id}
                className="group glass-card rounded-2xl p-7 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 hover:shadow-card relative overflow-hidden"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer transition-opacity" />

                <div className="relative">
                  <div className="w-11 h-11 bg-surface-muted group-hover:bg-brand-400/10 border border-surface-border rounded-xl flex items-center justify-center mb-6 transition-colors">
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-zinc-500 group-hover:text-brand-400 transition-colors"
                        strokeWidth={1.75}
                      />
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-700 font-semibold uppercase tracking-[0.12em] mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="text-white font-semibold text-[17px] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-[13.5px] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
