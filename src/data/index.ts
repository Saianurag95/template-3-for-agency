// {{agency_name}} — replace all placeholder values before launch

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
      "Multi-page websites built around your sales process — from first touch to booked consultation.",
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
    price: "₹6,000",
    delivery: "1 business day",
    pages: "1–3 pages",
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
    price: "₹8,000",
    delivery: "2 business days",
    pages: "4–6 pages",
    revisions: "3 revisions",
    highlight: true,
    features: [
      "Everything in Starter",
      "4–6 page full website",
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
    price: "₹12,000",
    delivery: "3 business days",
    pages: "7–10 pages",
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
