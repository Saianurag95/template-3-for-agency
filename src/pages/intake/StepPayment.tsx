import { CheckCircle, IndianRupee } from "lucide-react";
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const PAYMENT_METHODS = [
  "Razorpay / Online Payment",
];

const MILESTONES = [
  { amount: "100%", label: "Online payment", timing: "After intake submission" },
  { amount: "₹500-₹900", label: "Domain + hosting", timing: "Added only if we arrange it" },
  { amount: "Razorpay", label: "Confirmation", timing: "Before production starts" },
];

export default function StepPayment({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Payment Section</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Payment is online-only through Razorpay after intake submission.</p>
      </div>

      {/* Milestone structure */}
      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <IndianRupee className="w-4 h-4 text-brand-400" strokeWidth={1.75} />
          <p className="text-zinc-400 text-[10px] font-semibold uppercase tracking-[0.12em]">Milestone Structure</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {MILESTONES.map((m) => (
            <div key={m.amount} className="bg-surface-elevated rounded-xl p-4 text-center border border-surface-border">
              <div className="font-display text-brand-400 font-bold text-2xl">{m.amount}</div>
              <div className="text-white text-sm font-semibold mt-1">{m.label}</div>
              <div className="text-zinc-600 text-[11px] mt-1 font-light">{m.timing}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div className="flex flex-col gap-2.5 mb-6">
        <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-1">
          Payment Method *
        </p>
        {PAYMENT_METHODS.map((method) => (
          <button key={method} type="button" onClick={() => update({ paymentMethod: method })}
            className={`w-full text-left px-4 py-3.5 rounded-xl border text-[13.5px] transition-all ${
              data.paymentMethod === method
                ? "bg-brand-400/8 border-brand-400/30 text-brand-400"
                : "glass-card text-zinc-400 hover:border-white/10 hover:text-zinc-200"
            }`}>{method}</button>
        ))}
      </div>

      {/* Confirmation */}
      <div
        className={`rounded-2xl p-5 cursor-pointer transition-all border ${
          data.paymentConfirmed
            ? "bg-brand-400/5 border-brand-400/25"
            : "glass-card hover:border-white/10"
        }`}
        onClick={() => update({ paymentConfirmed: !data.paymentConfirmed })}
      >
        <div className="flex items-center gap-3.5">
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
            data.paymentConfirmed ? "bg-brand-400 border-brand-400" : "border-zinc-700"
          }`}>
            {data.paymentConfirmed && <CheckCircle className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />}
          </div>
          <p className={`text-[13.5px] font-medium leading-snug ${data.paymentConfirmed ? "text-brand-400" : "text-zinc-400"}`}>
            I understand payment must be completed online through Razorpay. No other payment mode is accepted. *
          </p>
        </div>
      </div>
    </div>
  );
}
