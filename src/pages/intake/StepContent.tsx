import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const READINESS = [
  "I have all copy ready to send",
  "I have partial content — can fill in gaps",
  "I need guidance on what to write",
  "Please use placeholder text for now",
];

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

export default function StepContent({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Content Submission</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Provide the core text content for your website.</p>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Main Headline / Tagline</label>
          <input value={data.headlineText} onChange={(e) => update({ headlineText: e.target.value })}
            placeholder="e.g. Hyderabad's Fastest Emergency Electrician — Available 24/7" className={inputCls} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Body Text / About Description</label>
          <textarea rows={4} value={data.bodyText} onChange={(e) => update({ bodyText: e.target.value })}
            placeholder="Describe what you do, who you serve, and why clients should choose you..."
            className={`${inputCls} resize-none`} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Call-to-Action Text</label>
          <input value={data.ctaText} onChange={(e) => update({ ctaText: e.target.value })}
            placeholder="e.g. Book a Free Consultation, Get a Quote Now, Call Us Today" className={inputCls} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Content Readiness *</label>
          <div className="flex flex-col gap-2">
            {READINESS.map((opt) => (
              <button key={opt} type="button" onClick={() => update({ contentReady: opt })}
                className={`w-full text-left px-4 py-3.5 rounded-xl border text-[13.5px] transition-all ${
                  data.contentReady === opt
                    ? "bg-brand-400/8 border-brand-400/30 text-brand-400"
                    : "glass-card text-zinc-400 hover:border-white/10 hover:text-zinc-200"
                }`}>{opt}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
