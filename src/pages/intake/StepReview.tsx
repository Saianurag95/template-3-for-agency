import { Send, CheckCircle } from "lucide-react";
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; onSubmit: () => void; }

const PACKAGES_MAP: Record<string, string> = {
  starter: "Starter Website — ₹6,000",
  business: "Business Website — ₹8,000",
  premium: "Premium Growth Website — ₹12,000",
};

function ReviewSection({ title, rows }: { title: string; rows: { label: string; value: string }[] }) {
  const filtered = rows.filter((r) => r.value);
  if (filtered.length === 0) return null;
  return (
    <div className="glass-card rounded-2xl p-6">
      <p className="text-zinc-600 text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">{title}</p>
      <div className="flex flex-col">
        {filtered.map((row) => (
          <div key={row.label} className="flex justify-between gap-4 py-3 border-b border-surface-border last:border-0">
            <span className="text-zinc-600 text-[13px] flex-shrink-0">{row.label}</span>
            <span className="text-white text-[13px] text-right font-light">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StepReview({ data, onSubmit }: Props) {
  const sections = [
    {
      title: "Business",
      rows: [
        { label: "Business", value: data.businessName },
        { label: "Contact", value: data.contactName },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone },
        { label: "Industry", value: data.industry },
        { label: "Location", value: data.location },
      ],
    },
    {
      title: "Project",
      rows: [
        { label: "Goal", value: data.websiteGoal },
        { label: "Pages", value: data.pagesNeeded },
        { label: "Audience", value: data.targetAudience },
      ],
    },
    {
      title: "Template",
      rows: [
        { label: "Template ID", value: data.selectedTemplateId },
        { label: "Template Name", value: data.selectedTemplateName },
        { label: "Notes", value: data.templateNotes },
      ],
    },
    {
      title: "Brand",
      rows: [
        { label: "Colours", value: data.brandColors },
        { label: "Personality", value: data.brandPersonality },
        { label: "Logo Status", value: data.logoStatus },
      ],
    },
    {
      title: "SEO",
      rows: [
        { label: "Keywords", value: data.primaryKeywords },
        { label: "Meta Title", value: data.metaTitle },
      ],
    },
    {
      title: "Package & Payment",
      rows: [
        { label: "Package", value: PACKAGES_MAP[data.selectedPackage] || data.selectedPackage },
        { label: "Payment Method", value: data.paymentMethod },
        { label: "Payment Confirmed", value: data.paymentConfirmed ? "Yes" : "No" },
        { label: "Domain", value: data.domainName },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Final Review</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">
          Review your submission before sending. Our team will be in touch within one business day.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {sections.map((section) => (
          <ReviewSection key={section.title} title={section.title} rows={section.rows} />
        ))}

        {/* Media */}
        <div className="glass-card rounded-2xl p-6">
          <p className="text-zinc-600 text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">Media Upload Status</p>
          <div className="flex flex-col">
            {[
              { label: "Logo", val: data.hasLogo },
              { label: "Images", val: data.hasImages },
              { label: "Videos", val: data.hasVideos },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-3 border-b border-surface-border last:border-0">
                <span className="text-zinc-600 text-[13px]">{item.label}</span>
                <span className={`text-[13px] font-medium ${item.val ? "text-brand-400" : "text-zinc-600"}`}>
                  {item.val === null ? "Not specified" : item.val ? "Available" : "Not available"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation */}
      <div className="bg-brand-400/5 border border-brand-400/15 rounded-2xl p-5 mb-8 flex gap-3.5">
        <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
        <p className="text-zinc-400 text-[13.5px] leading-relaxed font-light">
          By continuing, you confirm that all information is accurate and you are ready to complete
          the full package payment through Razorpay.
        </p>
      </div>

      <button
        onClick={onSubmit}
        className="group w-full inline-flex items-center justify-center gap-3 bg-brand-400 text-zinc-950 font-bold py-4.5 rounded-xl text-[15px] hover:bg-brand-300 transition-all hover:shadow-lime-glow"
      >
        Pay with Razorpay
        <Send className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}
