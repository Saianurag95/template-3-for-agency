import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const GOALS = [
  "Capture leads / enquiries", "Book consultations / calls", "Sell products online",
  "Drive quote requests", "Build brand authority", "Rank in local search", "Other",
];
const PAGE_OPTIONS = ["1 page (landing only)", "2–3 pages", "4–6 pages", "7–10 pages", "Not sure"];

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

function PillGroup({ options, selected, onSelect }: {
  options: string[]; selected: string; onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button key={opt} type="button" onClick={() => onSelect(opt)}
          className={`px-4 py-2 rounded-xl text-[13px] font-medium border transition-all ${
            selected === opt
              ? "bg-brand-400 text-zinc-950 border-brand-400 font-semibold shadow-lime-glow"
              : "glass-card text-zinc-400 hover:border-white/15 hover:text-zinc-200"
          }`}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function StepRequirements({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Website Requirements</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">What do you need this website to achieve?</p>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Primary Goal *</label>
          <PillGroup options={GOALS} selected={data.websiteGoal} onSelect={(v) => update({ websiteGoal: v })} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Pages Needed *</label>
          <PillGroup options={PAGE_OPTIONS} selected={data.pagesNeeded} onSelect={(v) => update({ pagesNeeded: v })} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Target Audience *</label>
          <textarea rows={3} value={data.targetAudience}
            onChange={(e) => update({ targetAudience: e.target.value })}
            placeholder="Describe your ideal customer — age, location, needs, pain points..."
            className={`${inputCls} resize-none`} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Competitor Websites (optional)</label>
          <input value={data.competitors} onChange={(e) => update({ competitors: e.target.value })}
            placeholder="List competitor URLs or sites you admire..." className={inputCls} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Must-Have Features (optional)</label>
          <textarea rows={3} value={data.mustHaveFeatures}
            onChange={(e) => update({ mustHaveFeatures: e.target.value })}
            placeholder="e.g. booking form, WhatsApp button, photo gallery, team section..."
            className={`${inputCls} resize-none`} />
        </div>
      </div>
    </div>
  );
}
