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
  title: "Our Solar Solutions",
  list: [
    { title: "On-grid Solar", description: "Grid-tied systems ideal for lowering high electricity bills.", features: ["Net Metering", "High ROI"] },
    { title: "Off-grid Solar", description: "Independent systems with battery backup for power cuts.", features: ["24/7 Power", "Battery Storage"] },
    { title: "Hybrid Solar", description: "Combines grid tie with battery backup for the best of both.", features: ["Smart Switching", "Max Reliability"] },
    { title: "3-Phase Commercial", description: "Heavy-duty systems for commercial properties.", features: ["High Capacity", "Tax Benefits"] }
  ],
  cta: "Get Free Consultation"
};

export const SUBSIDY = {
  title: "PM Surya Ghar Subsidy",
  amount: "Up to ₹78,000",
  eligibility: "For systems 3kW and above with ALMM-listed panels.",
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
