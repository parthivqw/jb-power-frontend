// src/constants/content.ts

export const SITE = {
  brandName: "JB Power",
  tagline: "End-to-end solar solutions for residential and commercial properties. Powering a sustainable future with precision engineering.",
  founderName: "Jobison Manual",
  phone: "+91 81293 75234",
  email: "jobisanmj07@gmail.com",
  operatingAreas: [
    "Alappuzha, Kerala",
    "Kochi, Kerala",
    "Across Kerala, India"
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
  secondaryCta: "Subsidy Info",
  trustIndicators: [
    { label: "30-Year Panel Performance Warranty" },
    { label: "10-Year Inverter Warranty" },
    { label: "5 Years Free Service" }
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
  // Authentic Customer Experience
  testimonials: [
    { 
      id: 1, 
      name: "Jio Johnson", 
      text: "Unfortunately my earlier on-grid solar system had rejection, and due to lack of proper support and guidance, I was almost ready to drop the entire plan. That's when JB Powerline's pre-installation support team stepped in and provided the required support to ease my solar plan. Now my plan is back ON. I didn't just recommend JB Powerline's; I actually converted my known leads as their sales. Simplify your solar dreams with JB Powerline's." 
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
  badge: "Government Support",
  title: "PM Surya Ghar Subsidy",
  amount: "Up to ₹78,000",
  eligibility: "For eligible residential solar systems (subject to applicable scheme requirements).",
  assistanceHeading: "JB Power Helps With the Process",
  assistanceList: [
    "Subsidy paperwork & process support",
    "Loan / financing paperwork support",
    "Guidance through the required steps"
  ],
  nextStepTitle: "Ready to explore your solar options?",
  nextStepDescription: "Start with a free consultation. We will assess your requirement and guide you through the process.",
  cta: "Get Free Consultation"
};

export const PROCESS = {
  title: "How It Works",
  steps: [
    { title: "Consultation", description: "Start with a conversation about your property, energy needs, and what you want your solar system to achieve." },
    { title: "Site Assessment & Design", description: "We assess the site and roof requirements to design a solar system suited to your property." },
    { title: "Installation", description: "Our team carries out the installation and system setup with a focus on a smooth, professional process." },
    { title: "Commissioning & Support", description: "Once the system is ready, we help get it up and running and continue supporting you after installation." }
  ],
  cta: "Get Free Consultation"
};

export const FAQ = {
  title: "Frequently Asked Questions",
  description: "Answers to the questions homeowners often have before making the switch to solar.",
  questions: [
    { q: "How much subsidy can I get for rooftop solar?", a: "The PM Surya Ghar scheme provides government financial assistance for eligible residential rooftop solar systems, subject to the applicable scheme requirements. The maximum central assistance for eligible systems is up to ₹78,000. JB Power can help you understand the process and paperwork involved." },
    { q: "Will solar work during monsoon or cloudy weather?", a: "Yes. Solar panels can still generate electricity when the weather is cloudy, although generation is lower when sunlight is reduced. Your actual output depends on weather conditions, system design, and available sunlight." },
    { q: "Will installing solar damage or cause leakage on my roof?", a: "A proper installation begins with assessing the roof and the system's mounting requirements. JB Power's team can evaluate the site and plan the installation around the property's structure and rooftop requirements." },
    { q: "How much maintenance does a solar system need?", a: "Rooftop solar systems generally require low routine maintenance. Keeping the panels clean and having the system checked periodically can help maintain reliable performance. JB Power also provides five years of free service as part of its offering." },
    { q: "How long does a solar installation take?", a: "The overall timeline depends on the property, system requirements, approvals, and installation process. JB Power will explain the expected steps for your project during the consultation rather than giving a one-size-fits-all timeline." },
    { q: "Do I need a battery with rooftop solar?", a: "Not necessarily. The right setup depends on your electricity usage, property, grid connection, and whether backup power is an important requirement for you. JB Power can help determine whether an on-grid, hybrid, or off-grid system is better suited to your needs." },
    { q: "Does JB Power help with subsidy and loan paperwork?", a: "Yes. JB Power assists customers with the paperwork and process involved in subsidy applications and loan or financing support. The team can help guide you through the required steps." },
    { q: "Which solar system is right for my home?", a: "The right system depends on factors such as your electricity usage, available roof space, property requirements, and whether you need backup power. JB Power can assess your requirements and help you choose between suitable on-grid, hybrid, or off-grid options." }
  ],
  ctaMessage: "Still have questions?",
  cta: "Get Free Consultation"
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
  phoneNumber: "918129375234",
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
