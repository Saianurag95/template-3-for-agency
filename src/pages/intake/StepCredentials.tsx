import { ShieldAlert } from "lucide-react";
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

export default function StepCredentials({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Credentials & Hosting</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Domain and hosting details to prepare for deployment.</p>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Domain Name *</label>
          <input value={data.domainName} onChange={(e) => update({ domainName: e.target.value })}
            placeholder="e.g. yourbusiness.in or 'not purchased yet'" className={inputCls} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Hosting Notes (optional)</label>
          <input value={data.hostingNotes} onChange={(e) => update({ hostingNotes: e.target.value })}
            placeholder="e.g. GoDaddy cPanel, Cloudflare Pages, Vercel, 'not set up yet'..." className={inputCls} />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Additional Notes (optional)</label>
          <textarea rows={3} value={data.credentialNotes} onChange={(e) => update({ credentialNotes: e.target.value })}
            placeholder="Any other deployment or access notes..."
            className={`${inputCls} resize-none`} />
        </div>
        <div className="bg-amber-500/5 border border-amber-500/15 rounded-2xl p-4 flex gap-3">
          <ShieldAlert className="w-4.5 h-4.5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
          <p className="text-amber-400/80 text-[13px] font-light leading-relaxed">
            Never share passwords in this form. Share credentials securely via WhatsApp only after submission.
          </p>
        </div>
      </div>
    </div>
  );
}
