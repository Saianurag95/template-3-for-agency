import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const PERSONALITIES = ["Professional / Corporate", "Friendly / Approachable", "Bold / Energetic", "Minimalist / Clean", "Luxury / Premium", "Technical / Expert"];
const LOGO_OPTIONS = [
  "Yes — I will provide a logo file",
  "I have a logo but need it refined",
  "No logo — please use text only",
  "I need a logo designed first",
];

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

export default function StepBrand({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Brand Information</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Help us match your site to your brand identity.</p>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Brand Colours *</label>
          <input value={data.brandColors} onChange={(e) => update({ brandColors: e.target.value })}
            placeholder="e.g. Deep navy #1B2A4A, white, and orange accent" className={inputCls} />
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Brand Personality *</label>
          <div className="flex flex-wrap gap-2">
            {PERSONALITIES.map((p) => (
              <button key={p} type="button" onClick={() => update({ brandPersonality: p })}
                className={`px-4 py-2 rounded-xl text-[13px] font-medium border transition-all ${
                  data.brandPersonality === p
                    ? "bg-brand-400 text-zinc-950 border-brand-400 font-semibold shadow-lime-glow"
                    : "glass-card text-zinc-400 hover:border-white/15 hover:text-zinc-200"
                }`}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Font Preference (optional)</label>
          <input value={data.fontStyle} onChange={(e) => update({ fontStyle: e.target.value })}
            placeholder="e.g. Modern sans-serif, a specific Google Font..." className={inputCls} />
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Logo Status *</label>
          <div className="flex flex-col gap-2">
            {LOGO_OPTIONS.map((opt) => (
              <button key={opt} type="button" onClick={() => update({ logoStatus: opt })}
                className={`w-full text-left px-4 py-3.5 rounded-xl border text-[13.5px] transition-all ${
                  data.logoStatus === opt
                    ? "bg-brand-400/8 border-brand-400/30 text-brand-400"
                    : "glass-card text-zinc-400 hover:border-white/10 hover:text-zinc-200"
                }`}>{opt}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Additional Design Notes (optional)</label>
          <textarea rows={3} value={data.designNotes} onChange={(e) => update({ designNotes: e.target.value })}
            placeholder="Visual inspiration, sites you like, things to avoid..."
            className={`${inputCls} resize-none`} />
        </div>
      </div>
    </div>
  );
}
