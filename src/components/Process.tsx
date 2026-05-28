import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="bg-surface-DEFAULT py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-orange-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-400/60" />
              How It Works
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-6">
              From intake
              <br />
              <span className="text-gradient-warm">to live in days.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed font-light text-[15px] mb-10 max-w-xs">
              Our production workflow is built for speed without cutting corners. Every step
              is designed to keep the project moving.
            </p>
            <Link
              to="/intake"
              className="group inline-flex items-center gap-2.5 bg-orange-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-orange-400 transition-all text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
            >
              Begin Intake
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glass-card group-hover:border-brand-400/40 group-hover:bg-brand-400/5 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <span className="text-zinc-500 group-hover:text-brand-400 text-[12px] font-bold font-mono tracking-wider transition-colors">
                      {step.step}
                    </span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-10 bg-gradient-to-b from-surface-border to-transparent mt-2 mb-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 pt-2.5">
                  <h3 className="text-white font-semibold text-xl mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-[14.5px] font-light max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
