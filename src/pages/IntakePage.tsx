import { useState } from "react";
import { CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { INTAKE_TEMPLATES, PACKAGES } from "../data";
import StepBusiness from "./intake/StepBusiness";
import StepRequirements from "./intake/StepRequirements";
import StepTemplate from "./intake/StepTemplate";
import StepBrand from "./intake/StepBrand";
import StepContent from "./intake/StepContent";
import StepMedia from "./intake/StepMedia";
import StepCredentials from "./intake/StepCredentials";
import StepSEO from "./intake/StepSEO";
import StepPackage from "./intake/StepPackage";
import StepPayment from "./intake/StepPayment";
import StepReview from "./intake/StepReview";

export interface IntakeData {
  businessName: string; contactName: string; email: string; phone: string;
  industry: string; location: string; website: string;
  websiteGoal: string; targetAudience: string; competitors: string;
  mustHaveFeatures: string; pagesNeeded: string;
  selectedTemplateId: string; selectedTemplateName: string; templateNotes: string;
  brandColors: string; fontStyle: string; brandPersonality: string;
  logoStatus: string; designNotes: string;
  headlineText: string; bodyText: string; ctaText: string; contentReady: string;
  hasLogo: boolean | null; hasImages: boolean | null; hasVideos: boolean | null;
  mediaConfirmed: boolean;
  domainName: string; hostingNotes: string; credentialNotes: string;
  primaryKeywords: string; metaTitle: string; metaDescription: string;
  googleAnalytics: string;
  selectedPackage: string;
  paymentConfirmed: boolean; paymentMethod: string;
}

const INITIAL_DATA: IntakeData = {
  businessName: "", contactName: "", email: "", phone: "", industry: "", location: "", website: "",
  websiteGoal: "", targetAudience: "", competitors: "", mustHaveFeatures: "", pagesNeeded: "",
  selectedTemplateId: "", selectedTemplateName: "", templateNotes: "",
  brandColors: "", fontStyle: "", brandPersonality: "", logoStatus: "", designNotes: "",
  headlineText: "", bodyText: "", ctaText: "", contentReady: "",
  hasLogo: null, hasImages: null, hasVideos: null, mediaConfirmed: false,
  domainName: "", hostingNotes: "", credentialNotes: "",
  primaryKeywords: "", metaTitle: "", metaDescription: "", googleAnalytics: "",
  selectedPackage: "",
  paymentConfirmed: false, paymentMethod: "",
};

const STEPS = [
  { label: "Business Info", short: "01" },
  { label: "Requirements", short: "02" },
  { label: "Template", short: "03" },
  { label: "Brand", short: "04" },
  { label: "Content", short: "05" },
  { label: "Media", short: "06" },
  { label: "Credentials", short: "07" },
  { label: "SEO", short: "08" },
  { label: "Package", short: "09" },
  { label: "Payment", short: "10" },
  { label: "Review", short: "11" },
];

function getStepMissing(step: number, data: IntakeData): string[] {
  switch (step) {
    case 0: return [
      !data.businessName && "Business name",
      !data.contactName && "Contact name",
      !data.email && "Email address",
      !data.phone && "Phone number",
      !data.industry && "Industry",
    ].filter(Boolean) as string[];
    case 1: return [
      !data.websiteGoal && "Website goal",
      !data.targetAudience && "Target audience",
      !data.pagesNeeded && "Pages needed",
    ].filter(Boolean) as string[];
    case 2: return [!data.selectedTemplateId && "Template selection"].filter(Boolean) as string[];
    case 3: return [
      !data.brandColors && "Brand colours",
      !data.brandPersonality && "Brand personality",
      !data.logoStatus && "Logo status",
    ].filter(Boolean) as string[];
    case 4: return [!data.contentReady && "Content readiness"].filter(Boolean) as string[];
    case 5: return [!data.mediaConfirmed && "Media confirmation"].filter(Boolean) as string[];
    case 6: return [!data.domainName && "Domain name"].filter(Boolean) as string[];
    case 7: return [!data.primaryKeywords && "Primary keywords"].filter(Boolean) as string[];
    case 8: return [!data.selectedPackage && "Package selection"].filter(Boolean) as string[];
    case 9: return [
      !data.paymentConfirmed && "Payment confirmation",
      !data.paymentMethod && "Payment method",
    ].filter(Boolean) as string[];
    default: return [];
  }
}

export default function IntakePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<IntakeData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  const update = (fields: Partial<IntakeData>) => setData((prev) => ({ ...prev, ...fields }));
  const missing = getStepMissing(currentStep, data);
  const canContinue = missing.length === 0;
  const isReview = currentStep === STEPS.length - 1;
  const isLastDataStep = currentStep === STEPS.length - 2;
  const next = () => { if (canContinue && !isReview) setCurrentStep((s) => s + 1); };
  const back = () => { if (currentStep > 0) setCurrentStep((s) => s - 1); };

  const STEP_COMPONENTS = [
    <StepBusiness key={0} data={data} update={update} />,
    <StepRequirements key={1} data={data} update={update} />,
    <StepTemplate key={2} data={data} update={update} templates={INTAKE_TEMPLATES} />,
    <StepBrand key={3} data={data} update={update} />,
    <StepContent key={4} data={data} update={update} />,
    <StepMedia key={5} data={data} update={update} />,
    <StepCredentials key={6} data={data} update={update} />,
    <StepSEO key={7} data={data} update={update} />,
    <StepPackage key={8} data={data} update={update} packages={PACKAGES} />,
    <StepPayment key={9} data={data} update={update} />,
    <StepReview key={10} data={data} onSubmit={() => setSubmitted(true)} />,
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center p-6">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-brand-400/10 border border-brand-400/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-brand-400" strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-3">Project Submitted</h1>
          <p className="text-zinc-500 leading-relaxed mb-10 font-light">
            Your intake has been submitted. Our Hyderabad team will review your details and
            confirm your scope, template match, and delivery timeline within one business day.
          </p>

          <div className="glass-card rounded-2xl p-6 text-left mb-8">
            <div className="text-[10px] text-zinc-600 font-semibold uppercase tracking-[0.12em] mb-4">Project Summary</div>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { label: "Business", value: data.businessName },
                { label: "Template", value: data.selectedTemplateName || data.selectedTemplateId },
                { label: "Package", value: data.selectedPackage },
                { label: "Goal", value: data.websiteGoal },
              ].filter(r => r.value).map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4 py-2 border-b border-surface-border last:border-0">
                  <span className="text-zinc-600 text-[13px]">{row.label}</span>
                  <span className="text-white text-[13px] font-medium capitalize">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2.5 bg-brand-400 text-zinc-950 font-bold px-8 py-4 rounded-xl hover:bg-brand-300 transition-all hover:shadow-lime-glow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507]">
      {/* Header */}
      <div className="border-b border-surface-border bg-surface-card/50 backdrop-blur-xl px-6 py-5 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-7 h-7 bg-brand-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />
                </div>
              </Link>
              <div className="w-px h-5 bg-surface-border" />
              <div>
                <p className="text-brand-400 text-[10px] font-semibold tracking-[0.14em] uppercase">
                  Project Intake
                </p>
                <h1 className="text-white font-semibold text-[15px] mt-0.5">
                  {STEPS[currentStep].label}
                </h1>
              </div>
            </div>
            <div className="text-zinc-600 text-[12px] font-mono">
              {currentStep + 1} / {STEPS.length}
            </div>
          </div>

          {/* Progress */}
          <div className="w-full bg-surface-border rounded-full h-1">
            <div
              className="bg-brand-400 h-1 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Step pills desktop */}
          <div className="hidden lg:flex gap-1.5 mt-4 flex-wrap">
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className={`text-[11px] px-3 py-1 rounded-full font-medium transition-colors ${
                  i < currentStep
                    ? "text-brand-400 bg-brand-400/8 border border-brand-400/20"
                    : i === currentStep
                    ? "bg-brand-400 text-zinc-950 font-semibold"
                    : "text-zinc-700 bg-surface-card border border-surface-border"
                }`}
              >
                {step.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="animate-fade-up">
          {STEP_COMPONENTS[currentStep]}
        </div>

        {/* Validation warning */}
        {!canContinue && !isReview && (
          <div className="mt-8 bg-amber-500/5 border border-amber-500/15 rounded-2xl p-5 flex gap-4">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-amber-400 text-sm font-semibold mb-2">
                Complete the following to continue:
              </p>
              <ul className="flex flex-col gap-1.5">
                {missing.map((m) => (
                  <li key={m} className="text-amber-400/70 text-[13px] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-400/40 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Navigation */}
        {!isReview && (
          <div className="mt-10 flex items-center justify-between pt-8 border-t border-surface-border">
            <button
              onClick={back}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={next}
              disabled={!canContinue}
              className="inline-flex items-center gap-2.5 bg-brand-400 text-zinc-950 font-bold px-8 py-3.5 rounded-xl hover:bg-brand-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:shadow-lime-glow text-[14px]"
            >
              {isLastDataStep ? "Review & Submit" : "Save and Continue"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
