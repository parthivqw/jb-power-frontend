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
    { label: "30-Year Panel Warranty" }
  ]
};

export const TRUST = {
  intro: "Built for long-term confidence",
  cards: [
    {
      title: "30-Year Panel Warranty",
      description: "Long-term panel protection designed to give homeowners confidence in their solar investment."
    },
    {
      title: "10-Year Inverter Warranty",
      description: "Protection for the key electrical hardware powering your solar system."
    },
    {
      title: "We Handle the Paperwork",
      description: "JB Power assists with the paperwork involved in subsidy and loan processes."
    },
    {
      title: "5 Years Free Service",
      description: "Continued service support after installation to help keep your system running smoothly."
    }
  ],
  brands: [
    { name: "[PLACEHOLDER: Brand Logo 1]" },
    { name: "[PLACEHOLDER: Brand Logo 2]" }
  ],
  // DEMO CONTENT — replace with founder-verified testimonials before public launch.
  testimonials: [
    { 
      id: 1, 
      name: "Rajesh Menon — Kochi", 
      text: "The team made the entire transition to solar incredibly straightforward. I really appreciated how they managed all the paperwork and explained every step of the installation clearly." 
    },
    { 
      id: 2, 
      name: "Sneha Desai — Ahmedabad", 
      text: "We were hesitant about the initial setup, but their consultation gave us complete clarity. The installation was clean, professional, and the post-installation support has been reassuring." 
    },
    { 
      id: 3, 
      name: "Vikram Reddy — Hyderabad", 
      text: "Having someone guide us through the financial aspects and handle the technical details was a huge relief. The system looks great on the roof and the overall service was excellent." 
    }
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
  description: "Ready to transition to solar? Leave your details below and our team will get back to you shortly.",
  nameLabel: "Full Name",
  namePlaceholder: "Enter your full name",
  phoneLabel: "Phone Number",
  phonePlaceholder: "98765 43210",
  billLabel: "Average Monthly Electricity Bill",
  billPlaceholder: "₹ 5,000",
  billNote: "Optional — helps us understand your solar requirement.",
  submitLabel: "Get Free Consultation",
  whatsappNote: "We'll connect with you on WhatsApp.",
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
export const generateContactFormMessage = (name: string, phone: string, bill?: string) => {
  let message = `New Consultation Request\n\nName: ${name}\nPhone: +91 ${phone}`;
  if (bill && bill.trim() !== '') {
    message += `\n\nAverage Monthly Electricity Bill: ₹${bill}`;
  }
  return message;
};

// Helper to construct wa.me link
export const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP.phoneNumber}?text=${encodeURIComponent(message)}`;
};
