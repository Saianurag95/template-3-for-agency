# Template 3 Complete Code Snapshot

Template ID: `AG-LEAD-03`

Generated from the live local repo:

```text
C:\Users\reddy\Documents\New project\template-3-for-agency
```

Use this snapshot when an agent or team member needs to understand or recreate Template 3 quickly.

For fast client customization, edit `src/data/index.ts` first. Only edit component files or intake step files when layout, behavior, or field changes are required.

## Fast Edit Priority

1. `src/data/index.ts` - brand, services, demos, packages, testimonials, stats, industries, intake template options.
2. `src/pages/IntakePage.tsx` - intake shell, validation, step order.
3. `src/pages/intake/*.tsx` - individual intake field screens.
4. `src/components/Hero.tsx` - hero layout/copy if needed.
5. `src/components/ProblemSection.tsx` - conversion problem messaging if needed.

## Build Verification

```text
npm.cmd run typecheck
npm.cmd run build
```

## File Tree Snapshot

```text
package.json
vercel.json
src/main.tsx
src/App.tsx
src/data/index.ts
src/pages/HomePage.tsx
src/pages/IntakePage.tsx
src/pages/intake/StepBusiness.tsx
src/pages/intake/StepRequirements.tsx
src/pages/intake/StepTemplate.tsx
src/pages/intake/StepBrand.tsx
src/pages/intake/StepContent.tsx
src/pages/intake/StepMedia.tsx
src/pages/intake/StepCredentials.tsx
src/pages/intake/StepSEO.tsx
src/pages/intake/StepPackage.tsx
src/pages/intake/StepPayment.tsx
src/pages/intake/StepReview.tsx
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/TrustBand.tsx
src/components/ProblemSection.tsx
src/components/Services.tsx
src/components/DemoShowcase.tsx
src/components/Packages.tsx
src/components/Process.tsx
src/components/Testimonials.tsx
src/components/BookingCTA.tsx
src/components/ContactForm.tsx
src/components/Footer.tsx
src/index.css
tailwind.config.js
vite.config.ts
docs/agency-template-qa-checklist.md
```

## package.json

Dependencies and scripts.

`$(System.Collections.Hashtable.Lang)
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.15.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

```

## vercel.json

Vercel rewrite so /intake works on deployment.

`$(System.Collections.Hashtable.Lang)
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

```

## src/main.tsx

React entry file.

`$(System.Collections.Hashtable.Lang)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

## src/App.tsx

React Router route handling for / and /intake.

`$(System.Collections.Hashtable.Lang)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intake" element={<IntakePage />} />
      </Routes>
    </BrowserRouter>
  );
}

```

## src/data/index.ts

Main editable content/data file for fast customization.

`$(System.Collections.Hashtable.Lang)
// {{agency_name}} â€” replace all placeholder values before launch

export const AGENCY = {
  name: "ConvertEdge",
  tagline: "Turn visitors into booked calls",
  location: "Hyderabad, Telangana",
  city: "Hyderabad",
  country: "India",
  email: "hello@convertedge.in",
  phone: "+91 98490 00000", // {{phone}}
  whatsapp: "919849000000", // {{whatsapp_number}}
  bookingUrl: "/intake",
  address: "Banjara Hills, Hyderabad, Telangana 500034",
};

export const SERVICES = [
  {
    id: 1,
    title: "High-Converting Landing Pages",
    description:
      "Single-focus pages engineered to capture leads and drive enquiries from paid traffic and organic search.",
    icon: "Target",
  },
  {
    id: 2,
    title: "Full Funnel Websites",
    description:
      "Multi-page websites built around your sales process â€” from first touch to booked consultation.",
    icon: "TrendingUp",
  },
  {
    id: 3,
    title: "Ads-Ready Pages",
    description:
      "Fast-loading, mobile-first pages built specifically for Google and Meta ad campaigns.",
    icon: "Zap",
  },
  {
    id: 4,
    title: "Quote & Booking Forms",
    description:
      "Integrated forms and booking widgets that qualify leads before they reach your inbox.",
    icon: "ClipboardList",
  },
  {
    id: 5,
    title: "Local SEO Pages",
    description:
      "Location-optimised pages that rank in Hyderabad search and convert nearby customers.",
    icon: "MapPin",
  },
  {
    id: 6,
    title: "Follow-Up Ready Setup",
    description:
      "Pages wired for email capture and CRM hand-off so no lead slips through the cracks.",
    icon: "Bell",
  },
];

export const DEMOS = [
  {
    id: "AG-LEAD-03",
    niche: "Clinic Lead Funnel",
    description: "Appointment booking pages for medical clinics and specialists.",
    category: "Healthcare",
    packageFit: "Business",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-REAL-07",
    niche: "Real Estate Inquiry Page",
    description: "Property listing pages that convert browsers into qualified buyers.",
    category: "Real Estate",
    packageFit: "Premium",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-MOD-01",
    niche: "Coaching Call Funnel",
    description: "Authority-building pages for coaches that fill their calendar.",
    category: "Coaching",
    packageFit: "Business",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-LOCAL-02",
    niche: "Home Service Quote Page",
    description: "Fast quote capture pages for plumbers, electricians and contractors.",
    category: "Home Services",
    packageFit: "Starter",
    image: "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-CREATIVE-05",
    niche: "Gym Trial Page",
    description: "High-energy membership pages designed for fitness businesses.",
    category: "Fitness",
    packageFit: "Starter",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-SEO-04",
    niche: "Consultant Booking Page",
    description: "Professional pages for consultants and advisors to drive discovery calls.",
    category: "Consulting",
    packageFit: "Premium",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Website",
    price: "â‚¹6,000",
    delivery: "1 business day",
    pages: "1â€“3 pages",
    revisions: "2 revisions",
    highlight: false,
    features: [
      "Mobile-responsive design",
      "Lead capture form",
      "1 landing or service page",
      "Basic SEO setup",
      "Google Analytics connection",
      "WhatsApp CTA button",
    ],
    cta: "Start Starter Project",
  },
  {
    id: "business",
    name: "Business Website",
    price: "â‚¹8,000",
    delivery: "2 business days",
    pages: "4â€“6 pages",
    revisions: "3 revisions",
    highlight: true,
    features: [
      "Everything in Starter",
      "4â€“6 page full website",
      "Custom inquiry funnel",
      "On-page SEO optimised",
      "Booking/quote form integration",
      "Social proof section",
      "1 campaign landing page",
    ],
    cta: "Start Business Project",
  },
  {
    id: "premium",
    name: "Premium Growth Website",
    price: "â‚¹12,000",
    delivery: "3 business days",
    pages: "7â€“10 pages",
    revisions: "5 revisions",
    highlight: false,
    features: [
      "Everything in Business",
      "Up to 10 pages",
      "Full lead funnel setup",
      "Advanced SEO structure",
      "Blog or resources section",
      "CRM form hand-off ready",
      "2 campaign landing pages",
      "Priority support",
    ],
    cta: "Start Premium Project",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Submit Your Intake",
    description:
      "Fill out our structured intake form with your business details, goals and brand assets.",
  },
  {
    step: "02",
    title: "Template Match",
    description:
      "We match your project to the right template and confirm scope and delivery timeline.",
  },
  {
    step: "03",
    title: "Build & Customise",
    description:
      "Our Hyderabad team builds your site with your content, colours and calls-to-action in place.",
  },
  {
    step: "04",
    title: "Review & Revise",
    description:
      "You review the live preview and submit revision notes. We apply changes fast.",
  },
  {
    step: "05",
    title: "Launch Ready",
    description:
      "Final files are handed over. Your site goes live and starts capturing leads.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ravi Kumar",
    role: "Owner, SwiftFix Electrical, Hyderabad",
    quote:
      "Within the first week of launching my new quote page I had 14 enquiry form submissions. The team moved fast and the page looked far better than I expected for the price.",
    result: "14 enquiries in week 1",
    avatar: "RK",
  },
  {
    name: "Dr. Priya Reddy",
    role: "Director, Vitality Clinic, Banjara Hills",
    quote:
      "Our old website wasn't converting at all. The new appointment funnel has completely changed how we get new patients. Clean design, fast load, and incredibly easy to manage.",
    result: "Appointment funnel live in 2 days",
    avatar: "PR",
  },
  {
    name: "Aditya Sharma",
    role: "Founder, Skyline Property Advisors",
    quote:
      "I needed something professional that would qualify buyers before they called me. The inquiry page does exactly that. The template fit our brand perfectly with minimal changes.",
    result: "Qualified leads only",
    avatar: "AS",
  },
];

export const STATS = [
  { value: "120+", label: "Websites Delivered" },
  { value: "3", label: "Max Business Days" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "6", label: "Active Niches" },
];

export const INDUSTRIES_SERVED = [
  "Healthcare", "Real Estate", "Legal", "Finance", "Home Services",
  "Fitness", "Coaching", "Education", "Restaurants", "E-commerce",
];

export const INTAKE_TEMPLATES = [
  { id: "AG-MOD-01", name: "Modern Authority", category: "Coaching / Consulting", description: "Clean editorial layout for coaches and knowledge businesses.", fit: "Coaching, Consulting, Education" },
  { id: "AG-LOCAL-02", name: "Local Pro", category: "Home Services", description: "Quote-capture optimised for local trades and home service businesses.", fit: "Plumbing, Electrical, Cleaning, HVAC" },
  { id: "AG-LEAD-03", name: "Lead Flow", category: "Healthcare / Clinic", description: "Appointment and enquiry funnel for medical and wellness clinics.", fit: "Clinics, Dentists, Physiotherapy" },
  { id: "AG-SEO-04", name: "SEO Boost", category: "Professional Services", description: "Content-rich pages built for organic ranking and long-term traffic.", fit: "Law, Accounting, Finance" },
  { id: "AG-CREATIVE-05", name: "Bold Studio", category: "Fitness / Events", description: "High-energy layout for gyms, studios, and experiential brands.", fit: "Gyms, CrossFit, Yoga, Events" },
  { id: "AG-SOCIAL-06", name: "Social Commerce", category: "E-commerce / Retail", description: "Social-proof heavy layout built to convert warm social media traffic.", fit: "Boutique, Fashion, Beauty, Food" },
];

```

## src/pages/HomePage.tsx

Main website composition.

`$(System.Collections.Hashtable.Lang)
import Hero from "../components/Hero";
import TrustBand from "../components/TrustBand";
import ProblemSection from "../components/ProblemSection";
import Services from "../components/Services";
import DemoShowcase from "../components/DemoShowcase";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <ProblemSection />
      <Services />
      <DemoShowcase />
      <Packages />
      <Process />
      <Testimonials />
      <BookingCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}

```

## src/pages/IntakePage.tsx

Information retrieval page shell and validation.

`$(System.Collections.Hashtable.Lang)
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

```

## src/pages/intake/StepBusiness.tsx

Intake business step.

`$(System.Collections.Hashtable.Lang)
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

```

## src/pages/intake/StepRequirements.tsx

Intake requirements step.

`$(System.Collections.Hashtable.Lang)
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const GOALS = [
  "Capture leads / enquiries", "Book consultations / calls", "Sell products online",
  "Drive quote requests", "Build brand authority", "Rank in local search", "Other",
];
const PAGE_OPTIONS = ["1 page (landing only)", "2â€“3 pages", "4â€“6 pages", "7â€“10 pages", "Not sure"];

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
            placeholder="Describe your ideal customer â€” age, location, needs, pain points..."
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

```

## src/pages/intake/StepTemplate.tsx

Intake template selection step.

`$(System.Collections.Hashtable.Lang)
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

```

## src/pages/intake/StepBrand.tsx

Intake brand step.

`$(System.Collections.Hashtable.Lang)
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const PERSONALITIES = ["Professional / Corporate", "Friendly / Approachable", "Bold / Energetic", "Minimalist / Clean", "Luxury / Premium", "Technical / Expert"];
const LOGO_OPTIONS = [
  "Yes â€” I will provide a logo file",
  "I have a logo but need it refined",
  "No logo â€” please use text only",
  "I need a logo designed first",
];

const inputCls = "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

export default function StepBrand({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Brand Information</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Help us match your site to your brand identity.</p>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Brand Colours *</label>
          <input value={data.brandColors} onChange={(e) => update({ brandColors: e.target.value })}
            placeholder="e.g. Deep navy #1B2A4A, white, and orange accent" className={inputCls} />
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Brand Personality *</label>
          <div className="flex flex-wrap gap-2">
            {PERSONALITIES.map((p) => (
              <button key={p} type="button" onClick={() => update({ brandPersonality: p })}
                className={`px-4 py-2 rounded-xl text-[13px] font-medium border transition-all ${
                  data.brandPersonality === p
                    ? "bg-brand-400 text-zinc-950 border-brand-400 font-semibold shadow-lime-glow"
                    : "glass-card text-zinc-400 hover:border-white/15 hover:text-zinc-200"
                }`}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Font Preference (optional)</label>
          <input value={data.fontStyle} onChange={(e) => update({ fontStyle: e.target.value })}
            placeholder="e.g. Modern sans-serif, a specific Google Font..." className={inputCls} />
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Logo Status *</label>
          <div className="flex flex-col gap-2">
            {LOGO_OPTIONS.map((opt) => (
              <button key={opt} type="button" onClick={() => update({ logoStatus: opt })}
                className={`w-full text-left px-4 py-3.5 rounded-xl border text-[13.5px] transition-all ${
                  data.logoStatus === opt
                    ? "bg-brand-400/8 border-brand-400/30 text-brand-400"
                    : "glass-card text-zinc-400 hover:border-white/10 hover:text-zinc-200"
                }`}>{opt}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Additional Design Notes (optional)</label>
          <textarea rows={3} value={data.designNotes} onChange={(e) => update({ designNotes: e.target.value })}
            placeholder="Visual inspiration, sites you like, things to avoid..."
            className={`${inputCls} resize-none`} />
        </div>
      </div>
    </div>
  );
}

```

## src/pages/intake/StepContent.tsx

Intake content step.

`$(System.Collections.Hashtable.Lang)
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const READINESS = [
  "I have all copy ready to send",
  "I have partial content â€” can fill in gaps",
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
            placeholder="e.g. Hyderabad's Fastest Emergency Electrician â€” Available 24/7" className={inputCls} />
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

```

## src/pages/intake/StepMedia.tsx

Intake media step.

`$(System.Collections.Hashtable.Lang)
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
                  {val ? "Yes â€” I have this" : "No â€” not available"}
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

```

## src/pages/intake/StepCredentials.tsx

Intake credentials step.

`$(System.Collections.Hashtable.Lang)
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

```

## src/pages/intake/StepSEO.tsx

Intake SEO step.

`$(System.Collections.Hashtable.Lang)
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
            placeholder="e.g. SwiftFix Electrical â€” 24/7 Emergency Electrician in Hyderabad" className={inputCls} />
          <p className="text-zinc-700 text-[12px] mt-2 font-light">Recommended: 50â€“60 characters</p>
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5">Meta Description (optional)</label>
          <textarea rows={3} value={data.metaDescription} onChange={(e) => update({ metaDescription: e.target.value })}
            placeholder="Brief description of your business and services for search results..."
            className={`${inputCls} resize-none`} />
          <p className="text-zinc-700 text-[12px] mt-2 font-light">Recommended: 150â€“160 characters</p>
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

```

## src/pages/intake/StepPackage.tsx

Intake package selection step.

`$(System.Collections.Hashtable.Lang)
import { CheckCircle, Clock, FileText, RefreshCw, Star } from "lucide-react";
import type { IntakeData } from "../IntakePage";
import type { PACKAGES } from "../../data";

interface Props {
  data: IntakeData;
  update: (f: Partial<IntakeData>) => void;
  packages: typeof PACKAGES;
}

export default function StepPackage({ data, update, packages }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Package Selection</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Choose the package that best fits your project scope.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {packages.map((pkg) => {
          const isSelected = data.selectedPackage === pkg.id;
          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => update({ selectedPackage: pkg.id })}
              className={`relative text-left rounded-2xl border p-6 transition-all duration-200 ${
                isSelected
                  ? "border-brand-400/40 bg-brand-400/5 shadow-[0_0_30px_rgba(163,230,53,0.08)]"
                  : "glass-card hover:border-white/10 hover:shadow-card"
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 bg-brand-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />
                </div>
              )}
              {pkg.highlight && !isSelected && (
                <div className="flex items-center gap-1 text-zinc-600 text-[10px] font-semibold uppercase tracking-wider mb-2">
                  <Star className="w-3 h-3" /> Popular
                </div>
              )}

              <h3 className={`font-semibold text-[15px] mb-1 ${isSelected ? "text-brand-400" : "text-white"}`}>
                {pkg.name}
              </h3>
              <div className={`font-display text-2xl font-bold mb-4 ${isSelected ? "text-brand-400" : "text-white"}`}>
                {pkg.price}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                {[
                  { Icon: Clock, label: pkg.delivery },
                  { Icon: FileText, label: pkg.pages },
                  { Icon: RefreshCw, label: pkg.revisions },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-zinc-500 text-[12px]">
                    <Icon className="w-3 h-3 flex-shrink-0" strokeWidth={1.75} />
                    {label}
                  </div>
                ))}
              </div>

              <ul className="flex flex-col gap-1.5">
                {pkg.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[12px] text-zinc-600 font-light">
                    <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5 text-zinc-700" strokeWidth={2} />
                    {f}
                  </li>
                ))}
                {pkg.features.length > 4 && (
                  <li className="text-[11.5px] text-zinc-700 font-light">+{pkg.features.length - 4} more features</li>
                )}
              </ul>
            </button>
          );
        })}
      </div>

      {!data.selectedPackage && (
        <p className="text-amber-400/70 text-[13px] mt-4 font-light">Please select a package to continue.</p>
      )}
      <p className="text-zinc-700 text-[12px] mt-4 font-light">
        Prices in â‚¹ (INR). Demo pricing shown â€” final quote confirmed after intake review.
      </p>
    </div>
  );
}

```

## src/pages/intake/StepPayment.tsx

Intake payment confirmation step.

`$(System.Collections.Hashtable.Lang)
import { CheckCircle, IndianRupee } from "lucide-react";
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; update: (f: Partial<IntakeData>) => void; }

const PAYMENT_METHODS = [
  "UPI (GPay, PhonePe, Paytm)",
  "Bank Transfer (NEFT / IMPS)",
  "Razorpay / Online Payment",
  "Other â€” will discuss with team",
];

const MILESTONES = [
  { amount: "50%", label: "Advance", timing: "Before build starts" },
  { amount: "25%", label: "Mid-point", timing: "After first review" },
  { amount: "25%", label: "Completion", timing: "Before file delivery" },
];

export default function StepPayment({ data, update }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Payment Section</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Confirm your payment preference. Full details shared by our team.</p>
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
          Preferred Payment Method *
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
            I understand the milestone structure and confirm I am ready to proceed with the 50% advance. *
          </p>
        </div>
      </div>
    </div>
  );
}

```

## src/pages/intake/StepReview.tsx

Intake final review step.

`$(System.Collections.Hashtable.Lang)
import { Send, CheckCircle } from "lucide-react";
import type { IntakeData } from "../IntakePage";

interface Props { data: IntakeData; onSubmit: () => void; }

const PACKAGES_MAP: Record<string, string> = {
  starter: "Starter Website â€” â‚¹6,000",
  business: "Business Website â€” â‚¹8,000",
  premium: "Premium Growth Website â€” â‚¹12,000",
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
          By submitting, you confirm that all information is accurate and you are ready to begin
          the project with the 50% advance payment.
        </p>
      </div>

      <button
        onClick={onSubmit}
        className="group w-full inline-flex items-center justify-center gap-3 bg-brand-400 text-zinc-950 font-bold py-4.5 rounded-xl text-[15px] hover:bg-brand-300 transition-all hover:shadow-lime-glow"
      >
        Submit Project Intake
        <Send className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}

```

## src/components/Navbar.tsx

Navbar and CTA routing.

`$(System.Collections.Hashtable.Lang)
import { useState, useEffect } from "react";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AGENCY } from "../data";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Templates", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isIntake = location.pathname === "/intake";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isIntake
          ? "bg-[#050507]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center shadow-lime-glow">
            <Zap className="w-4.5 h-4.5 text-zinc-950" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-white text-[17px] tracking-tight">
            {AGENCY.name}
          </span>
        </Link>

        {/* Desktop nav */}
        {!isIntake && (
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] text-zinc-500 hover:text-white transition-colors px-3.5 py-2 rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          {!isIntake && (
            <Link
              to="/intake"
              className="hidden md:inline-flex items-center gap-2 bg-brand-400 text-zinc-950 font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-brand-300 transition-all hover:shadow-lime-glow group"
            >
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
          {isIntake && (
            <Link
              to="/"
              className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
            >
              â† Back to site
            </Link>
          )}
          {!isIntake && (
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && !isIntake && (
        <div className="md:hidden bg-[#0c0c12]/98 backdrop-blur-xl border-t border-white/5 px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-zinc-400 hover:text-white text-left py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-white/5">
            <Link
              to="/intake"
              className="flex items-center justify-center gap-2 bg-brand-400 text-zinc-950 font-semibold text-sm px-5 py-3.5 rounded-lg hover:bg-brand-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

```

## src/components/Hero.tsx

Hero section.

`$(System.Collections.Hashtable.Lang)
import { ArrowRight, CheckCircle, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY } from "../data";

const FLOW_STEPS = [
  { label: "Traffic", sub: "Ads & Search", active: false },
  { label: "Landing Page", sub: "Built to convert", active: true },
  { label: "Form Submit", sub: "Lead captured", active: false },
  { label: "Follow-up", sub: "Qualified contact", active: false },
  { label: "Booked Call", sub: "Revenue ready", active: false, accent: true },
];

const PROOF_PILLS = [
  "120+ sites delivered",
  "Hyderabad-based team",
  "1â€“3 day delivery",
  "No long contracts",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050507] flex items-center overflow-hidden pt-[68px]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-radial-lime" />
      <div className="absolute inset-0 bg-radial-warm" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-400/8 border border-brand-400/20 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-brand-400 text-[11px] font-semibold tracking-[0.12em] uppercase">
              Conversion-first websites
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <MapPin className="w-3 h-3" />
            {AGENCY.location}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_440px] gap-16 xl:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-white leading-[1.0] tracking-tight mb-7">
              Turn visitors
              <br />
              <span className="text-gradient-lime">into booked</span>
              <br />
              calls.
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-[480px] mb-10 font-light">
              Conversion-ready websites and landing pages for service businesses in Hyderabad
              that need more enquiries, calls and qualified leads â€” delivered in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                to="/intake"
                className="group inline-flex items-center justify-center gap-2.5 bg-brand-400 text-zinc-950 font-bold px-8 py-4 rounded-xl hover:bg-brand-300 transition-all hover:shadow-lime-glow text-[15px]"
              >
                Start Your Project
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => {
                  document.querySelector("#demos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-zinc-300 font-semibold px-8 py-4 rounded-xl hover:border-white/20 hover:bg-white/4 transition-all text-[15px]"
              >
                View Templates
              </button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {PROOF_PILLS.map((p) => (
                <div key={p} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                  <span className="text-zinc-500 text-[13px]">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Funnel diagram */}
          <div className="flex flex-col items-stretch gap-0">
            {/* Header */}
            <div className="bg-surface-card border border-surface-border rounded-t-2xl px-5 py-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-surface-muted rounded-md h-5 flex items-center px-3">
                <span className="text-zinc-600 text-[10px] font-mono">yoursite.convertedge.in</span>
              </div>
            </div>

            {/* Funnel flow */}
            <div className="bg-surface-card border-x border-surface-border px-5 py-5 flex flex-col gap-0">
              {FLOW_STEPS.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all ${
                      step.active
                        ? "bg-brand-400/8 border-brand-400/25 shadow-[0_0_20px_rgba(163,230,53,0.06)]"
                        : step.accent
                        ? "bg-orange-500/8 border-orange-500/20"
                        : "bg-surface-elevated border-surface-border"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                        step.active
                          ? "bg-brand-400 text-zinc-950"
                          : step.accent
                          ? "bg-orange-500 text-white"
                          : "bg-surface-muted text-zinc-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold text-sm ${
                          step.active ? "text-brand-400" : step.accent ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {step.label}
                      </div>
                      <div className="text-zinc-600 text-[11px] mt-0.5">{step.sub}</div>
                    </div>
                    {(step.active || step.accent) && (
                      <div className={`w-1.5 h-1.5 rounded-full ${step.active ? "bg-brand-400" : "bg-orange-500"} animate-pulse-slow`} />
                    )}
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="w-px h-3 bg-surface-border" />
                  )}
                </div>
              ))}
            </div>

            {/* KPI cards */}
            <div className="bg-surface-card border border-surface-border rounded-b-2xl px-5 pb-5 pt-4 grid grid-cols-3 gap-3">
              {[
                { val: "14Ã—", sub: "More enquiries" },
                { val: "48h", sub: "Max delivery" },
                { val: "98%", sub: "Satisfaction" },
              ].map((k) => (
                <div key={k.sub} className="bg-surface-elevated rounded-xl p-3.5 text-center border border-surface-border">
                  <div className="text-white font-display font-bold text-lg leading-none">{k.val}</div>
                  <div className="text-zinc-600 text-[11px] mt-1.5 leading-snug">{k.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />
    </section>
  );
}

```

## src/components/TrustBand.tsx

Trust stats band.

`$(System.Collections.Hashtable.Lang)
import { STATS, INDUSTRIES_SERVED } from "../data";

export default function TrustBand() {
  return (
    <section className="relative bg-brand-400 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />

      {/* Stats row */}
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-zinc-900/70 text-[13px] font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee industries */}
      <div className="border-t border-zinc-950/10 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED].map((industry, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-zinc-900/60 text-xs font-semibold uppercase tracking-widest">
              {industry}
              <span className="w-1 h-1 rounded-full bg-zinc-900/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## src/components/ProblemSection.tsx

Lead-generation problem section.

`$(System.Collections.Hashtable.Lang)
const PROBLEMS = [
  {
    pain: "Your website looks generic",
    fix: "Every template is built for a specific niche and conversion goal.",
  },
  {
    pain: "Visitors leave without contacting you",
    fix: "We engineer each page around a single clear call-to-action.",
  },
  {
    pain: "Leads come in unqualified",
    fix: "Smart forms pre-qualify enquiries before they reach your inbox.",
  },
  {
    pain: "You waited months for the last site",
    fix: "Our template-first workflow delivers in 1â€“3 business days.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#050507] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[480px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-orange-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-400/60" />
              The Conversion Problem
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-6">
              Most service websites{" "}
              <span className="text-gradient-warm">weren't built</span>{" "}
              to win clients.
            </h2>
            <p className="text-zinc-500 leading-relaxed text-base max-w-sm font-light">
              They look fine. But "fine" doesn't capture leads. Every page we build is
              engineered around a specific outcome â€” enquiry, booking, or call.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-zinc-600 text-sm">
              <div className="w-8 h-8 rounded-full bg-surface-card border border-surface-border flex items-center justify-center text-xs font-bold text-zinc-400">
                HYD
              </div>
              Serving businesses across Hyderabad
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            {PROBLEMS.map((item, i) => (
              <div
                key={i}
                className="group glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-card"
              >
                <div className="grid grid-cols-2 divide-x divide-surface-border">
                  <div className="p-5 lg:p-6">
                    <div className="text-[10px] text-zinc-700 font-semibold uppercase tracking-[0.12em] mb-2.5">
                      Problem
                    </div>
                    <div className="text-zinc-400 text-sm leading-snug font-light">{item.pain}</div>
                  </div>
                  <div className="p-5 lg:p-6 bg-brand-400/[0.02]">
                    <div className="text-[10px] text-brand-500 font-semibold uppercase tracking-[0.12em] mb-2.5">
                      Our Fix
                    </div>
                    <div className="text-zinc-200 text-sm leading-snug">{item.fix}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

```

## src/components/Services.tsx

Service grid.

`$(System.Collections.Hashtable.Lang)
import {
  Target,
  TrendingUp,
  Zap,
  ClipboardList,
  MapPin,
  Bell,
} from "lucide-react";
import { SERVICES } from "../data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Target,
  TrendingUp,
  Zap,
  ClipboardList,
  MapPin,
  Bell,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#050507] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-start mb-16">
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              What We Build
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight">
              Every service
              <br />
              we offer converts.
            </h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-zinc-500 text-base leading-relaxed max-w-md font-light">
              From single landing pages to full multi-step funnels â€” everything is designed
              to improve enquiry rates and get Hyderabad businesses more qualified leads.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.id}
                className="group glass-card rounded-2xl p-7 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 hover:shadow-card relative overflow-hidden"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer transition-opacity" />

                <div className="relative">
                  <div className="w-11 h-11 bg-surface-muted group-hover:bg-brand-400/10 border border-surface-border rounded-xl flex items-center justify-center mb-6 transition-colors">
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-zinc-500 group-hover:text-brand-400 transition-colors"
                        strokeWidth={1.75}
                      />
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-700 font-semibold uppercase tracking-[0.12em] mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="text-white font-semibold text-[17px] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-[13.5px] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

```

## src/components/DemoShowcase.tsx

Demo/funnel showcase.

`$(System.Collections.Hashtable.Lang)
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { DEMOS } from "../data";

const PKG_STYLE: Record<string, string> = {
  Starter: "bg-zinc-800/80 text-zinc-300 border-zinc-700",
  Business: "bg-brand-400/10 text-brand-400 border-brand-400/25",
  Premium: "bg-orange-500/10 text-orange-400 border-orange-500/25",
};

export default function DemoShowcase() {
  return (
    <section id="demos" className="bg-surface-DEFAULT py-28 relative">
      <div className="absolute inset-0 bg-radial-lime opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              Funnel Templates
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight">
              Pick a funnel
              <br />
              built for your niche.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed font-light text-[15px]">
            Every template is niche-matched, conversion-tested and ready to customise
            with your brand in days.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((demo) => (
            <div
              key={demo.id}
              className="group glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.niche}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12]/80 via-[#0c0c12]/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 bg-[#0c0c12]/70 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="text-zinc-300 text-[10px] font-mono font-medium">{demo.id}</span>
                </div>
                <div className={`absolute top-3.5 right-3.5 border rounded-lg px-2.5 py-1.5 text-[10px] font-semibold backdrop-blur-md ${PKG_STYLE[demo.packageFit]}`}>
                  {demo.packageFit}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-[10px] text-zinc-600 font-semibold uppercase tracking-[0.12em] mb-1.5">
                  {demo.category}
                </div>
                <h3 className="text-white font-semibold text-[17px] mb-2 leading-snug">{demo.niche}</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mb-5 font-light">
                  {demo.description}
                </p>
                <Link
                  to="/intake"
                  className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold group/cta hover:gap-3 transition-all"
                >
                  Choose This Style
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/intake"
            className="inline-flex items-center gap-2.5 glass-card text-zinc-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-400/30 hover:text-brand-400 transition-all group text-sm"
          >
            Start a Custom Project
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

```

## src/components/Packages.tsx

Package pricing cards.

`$(System.Collections.Hashtable.Lang)
import { CheckCircle, Clock, FileText, RefreshCw, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PACKAGES } from "../data";

export default function Packages() {
  return (
    <section id="packages" className="bg-[#050507] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-lime opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-brand-400/60" />
            Pricing
            <span className="w-4 h-px bg-brand-400/60" />
          </p>
          <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-5">
            Simple packages.
            <br />
            Fast delivery.
          </h2>
          <p className="text-zinc-500 leading-relaxed font-light">
            All prices are demo pricing. Final pricing confirmed after intake review.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-start">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl flex flex-col transition-all ${
                pkg.highlight
                  ? "bg-surface-card border border-brand-400/30 shadow-[0_0_60px_rgba(163,230,53,0.08)] scale-[1.02] z-10"
                  : "glass-card hover:border-white/10 hover:shadow-card"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent rounded-full" />
              )}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-brand-400 text-zinc-950 text-[11px] font-bold px-3.5 py-1.5 rounded-full">
                  <Star className="w-3 h-3" strokeWidth={2.5} />
                  Most Popular
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-7 pb-7 border-b border-surface-border">
                  <h3 className="text-white font-semibold text-lg mb-4">{pkg.name}</h3>
                  <div className={`font-display text-[2.6rem] font-bold leading-none ${pkg.highlight ? "text-brand-400" : "text-white"}`}>
                    {pkg.price}
                  </div>
                  <p className="text-zinc-600 text-[11px] mt-2">Demo pricing â€” confirmed on intake</p>
                </div>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {[
                    { Icon: Clock, label: pkg.delivery },
                    { Icon: FileText, label: pkg.pages },
                    { Icon: RefreshCw, label: pkg.revisions },
                  ].map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 bg-surface-muted border border-surface-border rounded-lg px-3 py-1.5 text-zinc-400 text-[12px]"
                    >
                      <Icon className="w-3 h-3" strokeWidth={1.75} />
                      {label}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-brand-400" : "text-zinc-600"}`}
                        strokeWidth={2}
                      />
                      <span className="text-zinc-400 text-[13.5px] leading-snug font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/intake"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-[14px] transition-all ${
                    pkg.highlight
                      ? "bg-brand-400 text-zinc-950 hover:bg-brand-300 hover:shadow-lime-glow"
                      : "border border-surface-border text-zinc-400 hover:border-white/15 hover:text-white hover:bg-white/3"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-700 text-xs mt-8">
          All prices in Indian Rupees (â‚¹). Demo pricing shown â€” final quote provided after intake review.
        </p>
      </div>
    </section>
  );
}

```

## src/components/Process.tsx

Production process section.

`$(System.Collections.Hashtable.Lang)
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="bg-surface-DEFAULT py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-orange-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-400/60" />
              How It Works
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-6">
              From intake
              <br />
              <span className="text-gradient-warm">to live in days.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed font-light text-[15px] mb-10 max-w-xs">
              Our production workflow is built for speed without cutting corners. Every step
              is designed to keep the project moving.
            </p>
            <Link
              to="/intake"
              className="group inline-flex items-center gap-2.5 bg-orange-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-orange-400 transition-all text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
            >
              Begin Intake
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glass-card group-hover:border-brand-400/40 group-hover:bg-brand-400/5 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <span className="text-zinc-500 group-hover:text-brand-400 text-[12px] font-bold font-mono tracking-wider transition-colors">
                      {step.step}
                    </span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-10 bg-gradient-to-b from-surface-border to-transparent mt-2 mb-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 pt-2.5">
                  <h3 className="text-white font-semibold text-xl mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-[14.5px] font-light max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

```

## src/components/Testimonials.tsx

Testimonials/results section.

`$(System.Collections.Hashtable.Lang)
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#050507] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-center mb-16">
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              Client Proof
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight">
              Results that
              <br />
              speak.
            </h2>
          </div>
          <p className="text-zinc-500 text-base leading-relaxed font-light max-w-sm">
            Real feedback from real Hyderabad businesses that launched with ConvertEdge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-7 flex flex-col hover:border-white/10 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 ${
                i === 1 ? "lg:mt-6" : ""
              }`}
            >
              <Quote className="w-6 h-6 text-brand-400/25 mb-5" strokeWidth={1.5} />
              <p className="text-zinc-400 leading-relaxed text-[14.5px] flex-1 mb-7 font-light">
                "{t.quote}"
              </p>

              <div className="border-t border-surface-border pt-5 flex items-center gap-3.5">
                <div className="w-10 h-10 bg-brand-400/8 border border-brand-400/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-400 text-[11px] font-bold">{t.avatar}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-[14px] truncate">{t.name}</div>
                  <div className="text-zinc-600 text-[12px] mt-0.5 truncate">{t.role}</div>
                </div>
              </div>

              <div className="mt-4 bg-brand-400/5 border border-brand-400/12 rounded-xl px-3.5 py-2.5">
                <span className="text-brand-400 text-[12px] font-semibold">{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## src/components/BookingCTA.tsx

Final booking CTA.

`$(System.Collections.Hashtable.Lang)
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY } from "../data";

export default function BookingCTA() {
  return (
    <section className="relative bg-brand-400 overflow-hidden py-24">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-zinc-900/60 text-[12px] font-semibold uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {AGENCY.location}
            </div>
            <h2 className="font-display text-4xl lg:text-[3rem] text-zinc-950 leading-[1.08] tracking-tight mb-6">
              Ready to launch a site
              <br />
              that actually wins clients?
            </h2>
            <p className="text-zinc-800 leading-relaxed text-base max-w-md font-light">
              Fill in the project intake form and our team will confirm your scope, template
              match and delivery timeline within one business day.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <Link
              to="/intake"
              className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white font-bold px-8 py-5 rounded-xl text-[15px] hover:bg-zinc-800 transition-all"
            >
              Start Project Intake
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${AGENCY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/20 border-2 border-zinc-950/15 text-zinc-900 font-semibold px-8 py-5 rounded-xl text-[15px] hover:bg-white/30 transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
              Message on WhatsApp
            </a>
            <p className="text-zinc-900/50 text-xs text-center">
              Response within 1 business day Â· {AGENCY.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

```

## src/components/ContactForm.tsx

Contact form frontend state.

`$(System.Collections.Hashtable.Lang)
import { useState } from "react";
import { Send, CheckCircle, Mail, MessageCircle } from "lucide-react";
import { AGENCY } from "../data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full bg-surface-muted border border-surface-border rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 focus:bg-surface-elevated transition-all";

  return (
    <section id="contact" className="bg-surface-DEFAULT py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-brand-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-400/60" />
              Quick Enquiry
            </p>
            <h2 className="font-display text-4xl lg:text-[3.2rem] text-white leading-[1.08] tracking-tight mb-6">
              Have a question first?
            </h2>
            <p className="text-zinc-500 leading-relaxed font-light text-[15px] mb-10 max-w-sm">
              Use this form for quick questions. For a full project, use the intake form â€”
              it's how we collect everything needed to build your site.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${AGENCY.email}`}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center group-hover:border-brand-400/30 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" strokeWidth={1.75} />
                </div>
                <span className="text-zinc-500 hover:text-white transition-colors text-sm">{AGENCY.email}</span>
              </a>
              <a
                href={`https://wa.me/${AGENCY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center group-hover:border-brand-400/30 transition-colors">
                  <MessageCircle className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" strokeWidth={1.75} />
                </div>
                <span className="text-zinc-500 hover:text-white transition-colors text-sm">WhatsApp â€” {AGENCY.phone}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-brand-400/10 border border-brand-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-brand-400" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-white font-bold text-2xl mb-2">Message received</h3>
                <p className="text-zinc-500 text-sm font-light">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 bg-brand-400 text-zinc-950 font-bold py-4 rounded-xl hover:bg-brand-300 transition-all hover:shadow-lime-glow text-[14px]"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

```

## src/components/Footer.tsx

Footer.

`$(System.Collections.Hashtable.Lang)
import { Zap, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY } from "../data";

const FOOTER_NAV = [
  { label: "Services", href: "#services" },
  { label: "Templates", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030305] border-t border-surface-border">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-zinc-950" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-white text-[17px] tracking-tight">
                {AGENCY.name}
              </span>
            </Link>
            <p className="text-zinc-600 text-[13.5px] max-w-xs leading-relaxed font-light mb-5">
              Conversion-ready websites for service businesses in Hyderabad. Fast,
              focused, and built to win clients.
            </p>
            <div className="flex items-center gap-2 text-zinc-700 text-[12px]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.75} />
              {AGENCY.address}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.14em] mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-zinc-600 hover:text-zinc-300 text-[13.5px] text-left transition-colors font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.14em] mb-5">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${AGENCY.email}`}
                className="text-zinc-600 hover:text-zinc-300 text-[13.5px] transition-colors font-light"
              >
                {AGENCY.email}
              </a>
              <a
                href={`https://wa.me/${AGENCY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-300 text-[13.5px] transition-colors font-light"
              >
                WhatsApp
              </a>
              <Link
                to="/intake"
                className="inline-flex items-center gap-1.5 text-brand-400 text-[13.5px] font-semibold hover:text-brand-300 transition-colors group mt-1"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-surface-border/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-zinc-700 text-[12px] font-light">
            Â© {new Date().getFullYear()} {AGENCY.name}. All rights reserved. Â· Hyderabad, India
          </p>
          <p className="text-zinc-800 text-[11px] font-mono">
            template: agency-leadgen-pro-01
          </p>
        </div>
      </div>
    </footer>
  );
}

```

## src/index.css

Global styles and Tailwind imports.

`$(System.Collections.Hashtable.Lang)
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #050507;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Syne', 'Inter', sans-serif;
  }
}

@layer utilities {
  .text-gradient-lime {
    background: linear-gradient(135deg, #a3e635 0%, #84cc16 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-gradient-warm {
    background: linear-gradient(135deg, #f97316 0%, #eab308 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(12px);
  }

  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.4;
  }
}

/* Scroll reveal animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease forwards;
}

/* Marquee animation for trust band */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 24s linear infinite;
}

/* Shimmer effect */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.shimmer {
  background: linear-gradient(90deg, transparent 25%, rgba(163,230,53,0.08) 50%, transparent 75%);
  background-size: 200% 100%;
  animation: shimmer 2.5s infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0a0a0f; }
::-webkit-scrollbar-thumb { background: #27272a; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #3f3f46; }


```

## tailwind.config.js

Tailwind config.

`$(System.Collections.Hashtable.Lang)
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
        surface: {
          DEFAULT: '#0c0c12',
          card: '#111118',
          elevated: '#16161f',
          border: '#1e1e2a',
          muted: '#232330',
        },
      },
      backgroundImage: {
        'radial-lime': 'radial-gradient(ellipse at top right, rgba(163,230,53,0.10) 0%, transparent 65%)',
        'radial-warm': 'radial-gradient(ellipse at bottom left, rgba(249,115,22,0.07) 0%, transparent 65%)',
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'marquee': 'marquee 24s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'lime-glow': '0 0 40px rgba(163,230,53,0.15)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};

```

## vite.config.ts

Vite config.

`$(System.Collections.Hashtable.Lang)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

```

## docs/agency-template-qa-checklist.md

Repo-local QA checklist.

`$(System.Collections.Hashtable.Lang)
# Agency Template QA Checklist

Use this after Bolt generates each frontend.

## Business Checks

- [ ] Agency can clearly sell website services from this page.
- [ ] Website/demo showcase is visible.
- [ ] Packages are visible.
- [ ] Package prices are demo Indian pricing: Rs 6,000, Rs 8,000, Rs 12,000.
- [ ] Delivery timelines are 1, 2 and 3 business days.
- [ ] Consultation/WhatsApp CTA is visible.
- [ ] Lead/contact form exists.
- [ ] A separate `/intake` page exists.
- [ ] Main conversion CTAs route to `/intake`.
- [ ] No backend/login/CRM was created.

## Visual Difference Checks

- [ ] This template looks clearly different from the other 9.
- [ ] Hero layout is not the same as the previous template.
- [ ] Color system matches the niche.
- [ ] Section rhythm is distinct.
- [ ] Demo showcase style is niche-appropriate.
- [ ] Package section does not look identical to all others.

## Technical Checks

- [ ] Mobile responsive.
- [ ] No lorem ipsum.
- [ ] No broken internal links.
- [ ] `/` loads the main agency website.
- [ ] `/intake` loads the information retrieval page.
- [ ] Vercel rewrite exists if using a single-page app.
- [ ] Icons are imported from `lucide-react`.
- [ ] Placeholder content is easy to replace.
- [ ] Files are easy to export into the template source folder.
- [ ] Can deploy on Vercel as static frontend.

## Intake Page Checks

- [ ] Intake page has Business Information.
- [ ] Intake page has Website Requirements.
- [ ] Intake page has Template Selection.
- [ ] Intake page has Template ID.
- [ ] Intake page has Brand Information.
- [ ] Intake page has Content Submission.
- [ ] Intake page has Media Uploads.
- [ ] Intake page has Credentials.
- [ ] Intake page has SEO Information.
- [ ] Intake page has Package Selection.
- [ ] Intake page has Payment Section.
- [ ] Intake page has Final Review.
- [ ] Save and Continue is disabled until required fields are complete.
- [ ] Missing required fields are listed clearly.

## Fast-Track Scope Checks

- [ ] No custom dashboard.
- [ ] No payment system.
- [ ] No login.
- [ ] No database dependency.
- [ ] No complex animation requiring custom engineering.

## Save Location

After accepting the Bolt output, save it here:

```text
website-production-os/templates/agency/<template-id>/source
```

```

