# JB Power V1: Frontend Architecture

## 1. Technical Scope
*   **Framework:** React + Vite
*   **Styling:** TailwindCSS
*   **Type:** Static Frontend Single Page Application (SPA) / Landing Page
*   **Out of Scope:** Backend, FastApi, Docker, Kubernetes, state management libraries (Redux), database integrations.

## 2. Design Philosophy
*   **Visual Direction:** Clean, modern, trustworthy. Inspiration drawn from Tata Power (stability) but executed with the agility of a local expert.
*   **Whitespace & Typography:** High contrast, legible sans-serif fonts. No trendy effects that sacrifice clarity.
*   **Trust:** Real photography. No generic stock without placeholders.
*   **Mobile-First:** >80% traffic is mobile. Optimize touch targets and provide a persistent WhatsApp Floating Action Button (FAB).

## 3. Repository Structure
Adhering to *Evolution over Perfection*, we scaffold only what we realistically need for V1.

```text
src/
├── assets/
│   ├── images/      # Hero backgrounds, gallery photos
│   └── icons/       # Custom SVGs not in icon libraries
├── components/
│   ├── layout/      # Navbar.tsx, Footer.tsx, Layout.tsx
│   ├── ui/          # Reusable dumb components (Button.tsx, Card.tsx, Badge.tsx)
│   └── sections/    # Homepage specific sections (HeroSection.tsx, SubsidySection.tsx)
├── constants/
│   └── content.ts   # Copywriting, FAQs, and site configuration
├── styles/
│   └── index.css    # Tailwind entry and base styles
├── App.tsx          # Main entry and section orchestrator
└── main.tsx         # React DOM rendering
```

## 4. Component Mapping Table

| Homepage Section | React Component | Required Assets | Dependencies | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar** | `Navbar.tsx` | Logo SVG, WhatsApp No. | `Button.tsx` | 1 |
| **Hero** | `HeroSection.tsx` | Hero BG Image | `Button.tsx` | 2 |
| **Subsidy Banner** | `SubsidySection.tsx`| None | `Card.tsx`, `Badge.tsx`| 3 |
| **Trust & Warranty**| `TrustSection.tsx` | Gallery Photos, Brand Logos, Testimonials | `Card.tsx` | 4 |
| **Process** | `ProcessSection.tsx`| Icons | `Card.tsx` | 5 |
| **Services** | `ServicesSection.tsx`| Icons / Mini-images | `Card.tsx` | 6 |
| **FAQ** | `FaqSection.tsx` | None | `Accordion.tsx` (UI) | 7 |
| **Footer** | `Footer.tsx` | Logo SVG, Address | None | 8 |
| **FAB (Mobile)** | `WhatsAppFab.tsx` | WhatsApp Icon | None | 1 |
