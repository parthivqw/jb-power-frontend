// src/constants/content.ts

export const SITE = {
  brandName: "JB Power",
  tagline: "End-to-end solar solutions for residential and commercial properties. Powering a sustainable future with precision engineering.",
  phone: "[PLACEHOLDER: Founder Phone Number]",
  addressLine1: "[PLACEHOLDER: Physical Address Line 1]",
  addressLine2: "[PLACEHOLDER: Physical Address Line 2]",
  operatingAreas: [
    "[PLACEHOLDER: Operating Area 1]",
    "[PLACEHOLDER: Operating Area 2]",
    "[PLACEHOLDER: Operating Area 3]"
  ]
};

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Subsidy', href: '#subsidy' },
  { name: 'How It Works', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export const HERO = {
  headlinePrefix: "Powering Your Home",
  headlineAccent: "With Solar Energy",
  subheadline: "End-to-end solar installations for residential properties. We eliminate your electricity bills while handling all government subsidies seamlessly.",
  primaryCta: "Get Free Consultation",
  secondaryCta: "Check Your Subsidy",
  trustIndicators: [
    { label: "[PLACEHOLDER: MNRE Empanelled]" },
    { label: "[PLACEHOLDER: 25-Year Warranty]" }
  ]
};

export const TRUST = {
  warranties: [
    { name: "Panel Performance Warranty", value: "[PLACEHOLDER: 25 Years]" },
    { name: "Inverter Warranty", value: "[PLACEHOLDER: X Years]" },
    { name: "Installation Warranty", value: "[PLACEHOLDER: X Years]" },
    { name: "Free Service Period", value: "[PLACEHOLDER: X Years/Months]" }
  ],
  brands: [
    { name: "[PLACEHOLDER: Brand Logo 1]" },
    { name: "[PLACEHOLDER: Brand Logo 2]" }
  ],
  testimonials: [
    { id: 1, name: "[PLACEHOLDER: Customer Name 1]", text: "[PLACEHOLDER: Testimonial Text 1]" },
    { id: 2, name: "[PLACEHOLDER: Customer Name 2]", text: "[PLACEHOLDER: Testimonial Text 2]" }
  ]
};

export const SERVICES = {
  title: "Solar Solutions Designed For Every Need",
  paragraphs: [
    "Whether you're looking to eliminate electricity bills for your home or power a commercial property, JB Power delivers complete rooftop solar solutions tailored to your requirements.",
    "From consultation and system design to installation and long-term support, we manage every step so your transition to solar is simple and stress-free."
  ],
  list: [
    {
      title: "Residential Rooftop Solar",
      description: "Efficient rooftop solar systems designed for homes to reduce electricity bills and maximize government subsidy benefits.",
      features: ["Subsidy Eligible", "Lower Electricity Bills", "Professional Installation"]
    },
    {
      title: "Commercial Solar Solutions",
      description: "Reliable solar installations for offices, shops, apartments and commercial buildings.",
      features: ["Scalable Systems", "Energy Cost Reduction", "Long-Term ROI"]
    },
    {
      title: "Hybrid & Off-Grid Systems",
      description: "Battery-backed solar systems providing uninterrupted power even during grid outages.",
      features: ["Battery Backup", "Continuous Power", "Smart Energy Management"]
    },
    {
      title: "End-to-End Installation",
      description: "Complete project execution from consultation and site survey to commissioning and after-sales support.",
      features: ["Site Inspection", "Custom System Design", "Turnkey Installation"]
    }
  ],
  ctaMessage: "Still unsure which solar system is right for your property?",
  cta: "Get Free Consultation"
};

export const SUBSIDY = {
  title: "PM Surya Ghar Subsidy",
  amount: "Up to ₹78,000",
  eligibility: "For systems 3kW and above with ALMM-listed panels.",
  description: "JB Power assists customers with the complete paperwork and support involved in the subsidy and loan process.",
  cta: "Get Free Consultation"
};

export const PROCESS = {
  title: "How It Works",
  steps: [
    { title: "Consultation", description: "We assess your site and energy needs." },
    { title: "Design", description: "Custom system design tailored to your roof." },
    { title: "Installation", description: "Expert installation by our skilled technicians." },
    { title: "Commissioning", description: "Net metering setup and subsidy assistance." }
  ],
  cta: "Get Free Consultation"
};

export const FAQ = {
  title: "Frequently Asked Questions",
  questions: [
    { q: "Will the solar panels damage my roof?", a: "No. Our installations use non-penetrating clamps for specific roof types and carefully sealed mounts to prevent any leaks or damage." },
    { q: "How does the PM Surya Ghar subsidy work?", a: "We guide you through the entire portal process. The subsidy is credited directly to your bank account via DBT after commissioning." }
  ]
};

export const CONTACT = {
  heading: "Get Your Free Consultation",
  nameLabel: "Full Name",
  namePlaceholder: "Enter your name",
  phoneLabel: "Phone Number",
  phonePlaceholder: "Enter your 10-digit number",
  submitLabel: "Get Free Consultation"
};

export const FOOTER = {
  description: SITE.tagline,
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ]
};

export const WHATSAPP = {
  phoneNumber: "910000000000", // [PLACEHOLDER: Founder WhatsApp Number]
  fabMessage: "Hi, I'd like to know more about JB Power's solar installation services."
};

// Helper for generating the Contact Form V1 structured message
export const generateContactFormMessage = (name: string, phone: string) => {
  return `New Consultation Request\nName: ${name}\nPhone: ${phone}`;
};

// Helper to construct wa.me link
export const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP.phoneNumber}?text=${encodeURIComponent(message)}`;
};
