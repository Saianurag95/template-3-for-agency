import { Upload, CheckCircle } from "lucide-react";
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const MEDIA_ITEMS = [
  { label: "Logo file (PNG, SVG or AI)", key: "hasLogo" as const },
  { label: "Business photos / team images", key: "hasImages" as const },
  { label: "Product or service videos", key: "hasVideos" as const },
];

export default function StepMedia({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Media Uploads</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Let us know what media assets you have ready to share.</p>
      </div>

      <div className="flex flex-col gap-3.5 mb-8">
        {MEDIA_ITEMS.map((item) => (
          <div key={item.key} className="glass-card rounded-2xl p-5">
            <p className="text-white font-semibold text-[14px] mb-4">{item.label}</p>
            <div className="grid grid-cols-2 gap-3">
              {[true, false].map((val) => (
                <button key={String(val)} type="button" onClick={() => update({ [item.key]: val })}
                  className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                    data[item.key] === val
                      ? val
                        ? "bg-brand-400/10 border-brand-400/30 text-brand-400"
                        : "bg-surface-elevated border-surface-border text-zinc-300"
                      : "glass-card text-zinc-600 hover:border-white/10 hover:text-zinc-400"
                  }`}>
                  {val ? "Yes — I have this" : "No — not available"}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card border-dashed rounded-2xl p-10 text-center mb-6">
        <div className="w-12 h-12 bg-surface-muted rounded-xl flex items-center justify-center mx-auto mb-4">
          <Upload className="w-5 h-5 text-zinc-600" strokeWidth={1.75} />
        </div>
        <p className="text-zinc-500 text-[14px] font-medium mb-1">Files shared after submission</p>
        <p className="text-zinc-700 text-[12.5px] font-light">
          Our team will follow up via WhatsApp or email to collect your media files securely.
        </p>
      </div>

      <div
        className={`rounded-2xl p-5 cursor-pointer transition-all border ${
          data.mediaConfirmed
            ? "bg-brand-400/5 border-brand-400/25 shadow-[0_0_20px_rgba(163,230,53,0.04)]"
            : "glass-card hover:border-white/10"
        }`}
        onClick={() => update({ mediaConfirmed: !data.mediaConfirmed })}
      >
        <div className="flex items-center gap-3.5">
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
            data.mediaConfirmed ? "bg-brand-400 border-brand-400" : "border-zinc-700"
          }`}>
            {data.mediaConfirmed && <CheckCircle className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />}
          </div>
          <p className={`text-[13.5px] font-medium leading-snug ${data.mediaConfirmed ? "text-brand-400" : "text-zinc-400"}`}>
            I confirm my media selections and will share files with the team after submission. *
          </p>
        </div>
      </div>
    </div>
  );
}
