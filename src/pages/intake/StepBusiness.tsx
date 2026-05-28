import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const INDUSTRIES = [
  "Healthcare / Clinic", "Real Estate", "Legal / Law", "Finance / Accounting",
  "Home Services", "Fitness / Wellness", "Coaching / Consulting", "Education",
  "Hospitality / Food", "E-commerce / Retail", "Technology", "Other",
];

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

function Field({ label, children, span2 }: { label: string; children: React.ReactNode; span2?: boolean }) {
  return (
    <div className={span2 ? "sm:col-span-2" : ""}>
      <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">{label}</label>
      {children}
    </div>
  );
}

export default function StepBusiness({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Business Information</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Tell us about the business we're building for.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Business Name *">
          <input value={data.businessName} onChange={(e) => update({ businessName: e.target.value })}
            placeholder="e.g. SwiftFix Electrical" className={inputCls} />
        </Field>
        <Field label="Contact Name *">
          <input value={data.contactName} onChange={(e) => update({ contactName: e.target.value })}
            placeholder="Your full name" className={inputCls} />
        </Field>
        <Field label="Email Address *">
          <input type="email" value={data.email} onChange={(e) => update({ email: e.target.value })}
            placeholder="you@example.com" className={inputCls} />
        </Field>
        <Field label="Phone Number *">
          <input type="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })}
            placeholder="+91 98490 00000" className={inputCls} />
        </Field>
        <Field label="Industry *">
          <select value={data.industry} onChange={(e) => update({ industry: e.target.value })}
            className={`${inputCls} appearance-none cursor-pointer`}>
            <option value="">Select industry...</option>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </Field>
        <Field label="City / Location *">
          <input value={data.location} onChange={(e) => update({ location: e.target.value })}
            placeholder="e.g. Banjara Hills, Hyderabad" className={inputCls} />
        </Field>
        <Field label="Current Website (optional)" span2>
          <input value={data.website} onChange={(e) => update({ website: e.target.value })}
            placeholder="https://yoursite.com" className={inputCls} />
        </Field>
      </div>
    </div>
  );
}
