import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }
const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

export default function StepSEO({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">SEO Information</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Help us optimise your site for Hyderabad search from day one.</p>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Primary Keywords *</label>
          <input value={data.primaryKeywords} onChange={(e) => update({ primaryKeywords: e.target.value })}
            placeholder="e.g. electrician Hyderabad, emergency electrical service, Banjara Hills" className={inputCls} />
          <p className="text-zinc-700 text-[12px] mt-2 font-light">Comma-separated keywords your customers search for</p>
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Meta Title (optional)</label>
          <input value={data.metaTitle} onChange={(e) => update({ metaTitle: e.target.value })}
            placeholder="e.g. SwiftFix Electrical — 24/7 Emergency Electrician in Hyderabad" className={inputCls} />
          <p className="text-zinc-700 text-[12px] mt-2 font-light">Recommended: 50–60 characters</p>
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Meta Description (optional)</label>
          <textarea rows={3} value={data.metaDescription} onChange={(e) => update({ metaDescription: e.target.value })}
            placeholder="Brief description of your business and services for search results..."
            className={`${inputCls} resize-none`} />
          <p className="text-zinc-700 text-[12px] mt-2 font-light">Recommended: 150–160 characters</p>
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Google Analytics ID (optional)</label>
          <input value={data.googleAnalytics} onChange={(e) => update({ googleAnalytics: e.target.value })}
            placeholder="e.g. G-XXXXXXXXXX" className={inputCls} />
        </div>
      </div>
    </div>
  );
}
