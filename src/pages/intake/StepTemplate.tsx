import { CheckCircle } from "lucide-react";
import type { IntakeData } from "../IntakePage";
import type { INTAKE_TEMPLATES } from "../../data";

interface Props {
  data: IntakeData;
  update: (f: Partial<IntakeData>) => void;
  templates: typeof INTAKE_TEMPLATES;
}

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 transition-all";

export default function StepTemplate({ data, update, templates }: Props) {
  const select = (t: (typeof INTAKE_TEMPLATES)[0]) => {
    update({ selectedTemplateId: t.id, selectedTemplateName: t.name });
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Template Selection</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Choose the template style that best fits your business.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {templates.map((t) => {
          const isSelected = data.selectedTemplateId === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => select(t)}
              className={`relative text-left rounded-2xl border p-5 transition-all duration-200 hover:shadow-card ${
                isSelected
                  ? "border-brand-400/40 bg-brand-400/5 shadow-[0_0_30px_rgba(163,230,53,0.06)]"
                  : "glass-card hover:border-white/10"
              }`}
            >
              {isSelected && (
                <div className="absolute top-3.5 right-3.5 w-5 h-5 bg-brand-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />
                </div>
              )}
              <div className="font-mono text-[10px] text-zinc-600 mb-2.5">{t.id}</div>
              <div className={`font-semibold text-[16px] mb-1 leading-tight ${isSelected ? "text-brand-400" : "text-white"}`}>
                {t.name}
              </div>
              <div className="text-[10px] text-zinc-600 font-semibold uppercase tracking-[0.1em] mb-2.5">{t.category}</div>
              <p className="text-zinc-500 text-[12.5px] leading-snug mb-3 font-light">{t.description}</p>
              <div className="text-[11px] text-zinc-700 font-light">Best for: {t.fit}</div>
            </button>
          );
        })}
      </div>

      {data.selectedTemplateId && (
        <div className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Selected Template ID</label>
              <input value={data.selectedTemplateId} readOnly className={`${inputCls} opacity-50 cursor-default`} />
            </div>
            <div>
              <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Template Name</label>
              <input value={data.selectedTemplateName} readOnly className={`${inputCls} opacity-50 cursor-default`} />
            </div>
          </div>
          <div>
            <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Template Notes (optional)</label>
            <textarea rows={3} value={data.templateNotes}
              onChange={(e) => update({ templateNotes: e.target.value })}
              placeholder="Any specific notes about how you want this template adapted..."
              className={`${inputCls} resize-none`} />
          </div>
        </div>
      )}

      {!data.selectedTemplateId && (
        <p className="text-amber-400/70 text-[13px] mt-2 font-light">Please select a template above to continue.</p>
      )}
    </div>
  );
}
