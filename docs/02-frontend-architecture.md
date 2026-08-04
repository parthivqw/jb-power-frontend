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
│   └── sections/    # Homepage specific sections (HeroSection.tsx, ContactSection.tsx, etc.)
├── constants/
│   └── content.ts   # Copywriting, FAQs, WhatsApp config, and site configuration
├── styles/
│   └── index.css    # Tailwind entry and base styles
├── App.tsx          # Main entry and section orchestrator
└── main.tsx         # React DOM rendering
```

## 4. Component Mapping Table

Components listed in page flow order (top to bottom):

| Homepage Section | React Component | Required Assets | Dependencies | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar** | `Navbar.tsx` | Logo SVG | `Button.tsx` | 1 |
| **Hero** | `HeroSection.tsx` | Hero BG Image | `Button.tsx` | 2 |
| **Trust & Warranty** | `TrustSection.tsx` | Gallery Photos, Brand Logos, Testimonials | `Card.tsx` | 3 |
| **Services** | `ServicesSection.tsx` | Icons / Mini-images | `Card.tsx` | 4 |
| **Subsidy Banner** | `SubsidySection.tsx` | None | `Card.tsx`, `Badge.tsx` | 5 |
| **Process** | `ProcessSection.tsx` | Icons | `Card.tsx` | 6 |
| **FAQ** | `FaqSection.tsx` | None | `Accordion.tsx` (UI) | 7 |
| **Contact Form** | `ContactSection.tsx` | None | `Button.tsx` | 8 |
| **Footer** | `Footer.tsx` | Logo SVG, Address | `Button.tsx` | 9 |
| **FAB** | `WhatsAppFab.tsx` | WhatsApp Icon | None | 1 |

## 5. Design System

### Color Tokens
All colors are defined in `tailwind.config.js` under `theme.extend.colors.jb`. Components must reference these tokens exclusively. No arbitrary Tailwind color utilities (e.g., `text-gray-700`, `bg-blue-600`).

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `jb-navy` | `#102A43` | Headings, primary buttons, footer background |
| `jb-white-warm` | `#FAFAF8` | Hero background, light section backgrounds |
| `jb-sand` | `#F5F5F0` | Alternate section backgrounds, secondary buttons |
| `jb-gold` | `#FBBF24` | Logo accent, footer link hover, decorative accents |
| `jb-gold-deep` | `#F59E0B` | Primary button hover, accent text (Hero tagline) |
| `jb-charcoal` | `#334155` | Body text, paragraph copy |
| `jb-success` | `#25D366` | WhatsApp FAB (official WhatsApp brand green) |

**Intended ratio:** ~80% navy + warm-white surfaces, ~15% charcoal text, ~5% gold accents. Gold should feel like sunlight touching the interface — never dominating it.

### Section Background Rhythm
Sections alternate backgrounds to create distinct visual chapters. No two adjacent sections share a background.

| Section | Background |
| :--- | :--- |
| Navbar | `white` |
| Hero | `jb-white-warm` |
| Trust | `white` |
| Services | `jb-sand` |
| Subsidy | `jb-white-warm` |
| Process | `white` |
| FAQ | `jb-sand` |
| Contact | `jb-white-warm` |
| Footer | `jb-navy` |

### Typography
*   **Font:** Inter (via Google Fonts). Clean, professional, excellent legibility.
*   **Headings:** `font-extrabold` or `font-bold`. Color: `jb-navy`.
*   **Body:** `font-normal`. Color: `jb-charcoal` or `jb-charcoal/80`.
*   **Captions/Labels:** `font-semibold`, `text-sm`, `uppercase`, `tracking-wide`.
*   **No decorative fonts.** Typography and spacing carry the premium feel.

### Spacing Philosophy
Generous whitespace creates a premium feel. Sections use `py-16 md:py-20` minimum. The Hero uses `pt-20 md:pt-28 lg:pt-36`. Content never feels cramped.

### Elevation
Subtle shadows create depth without excess:
*   **Navbar:** Soft drop shadow for Z-axis separation from content
*   **Hero image:** Deep shadow with navy tint
*   **Buttons:** `shadow-sm` at rest, elevated on hover
*   **Cards:** `shadow-sm` at rest, `shadow-md` on hover

Do not overuse shadows. Most surfaces remain flat.

## 6. Content Architecture

All user-facing copy and site configuration lives in `constants/content.ts`. Components import from this file and never hardcode strings.

### Purpose
*   Single source of truth for all text content
*   Enables non-technical review of copy (founder can read one file)
*   Centralizes placeholder tracking
*   Houses WhatsApp configuration

### Structure
The file exports structured objects organized by section:
*   **`SITE`**: Brand name, tagline, phone, address, operating areas
*   **`HERO`**: Headline, subheadline, CTA labels, trust indicators
*   **`TRUST`**: Warranties, brand names, testimonial placeholders
*   **`SERVICES`**: Service names, descriptions, features
*   **`SUBSIDY`**: Subsidy amounts, eligibility info
*   **`PROCESS`**: Step titles and descriptions
*   **`FAQ`**: Question-answer pairs
*   **`CONTACT`**: Form labels, placeholder text, submit button label, section heading
*   **`FOOTER`**: Column content, legal links
*   **`WHATSAPP`**: Phone number (with country code), FAB message, form submission message template

### Placeholder Convention
Any value pending founder verification uses the format:
`[PLACEHOLDER: Description of what's needed]`

This makes unresolved items searchable via grep and visually obvious in the UI during development.

## 7. WhatsApp Integration

WhatsApp serves two roles in V1: direct messaging (FAB only) and form submission transport (Contact Form).

### URL Format
`https://wa.me/91XXXXXXXXXX?text=URL_ENCODED_MESSAGE`

### Usage Scope

**WhatsApp FAB (Direct Link):**
The floating action button is the ONLY element that opens WhatsApp directly with a static message.

| Context | Message |
| :--- | :--- |
| FAB tap | "Hi, I'd like to know more about JB Power's solar installation services." |

**Contact Form V1 Submit Handler:**
When the Contact Form is submitted, the handler constructs a structured WhatsApp message from the form data and opens `wa.me`. The message is dynamic, not a static template.

Example constructed message:
```
New Consultation Request
Name: {name}
Phone: {phone}
```

**Future Backend Migration:**
When the backend is ready, only the Contact Form's submit handler changes — from `openWhatsApp(formData)` to `submitToAPI(formData)`. The FAB may continue to open WhatsApp directly or also route through the backend. The form UI, validation, and CTA architecture remain unchanged.

### Implementation Rules
*   The WhatsApp FAB must use a real `wa.me` URL, not `href="#"`.
*   All WhatsApp URLs are constructed from the centralized config in `content.ts`, never hardcoded in components.
*   `target="_blank"` and `rel="noopener noreferrer"` attributes are required on all WhatsApp links.
*   Primary CTA buttons (`<button>` elements) scroll to `#contact`. They do NOT open WhatsApp.

## 8. SEO Requirements

The website targets local search queries (e.g., "solar installation [city]", "rooftop solar near me"). Basic SEO setup is a V1 requirement, not a nice-to-have.

### index.html
*   **Title:** "JB Power — Rooftop Solar Installation | [City]"
*   **Meta Description:** "End-to-end rooftop solar installation for homes and businesses. Government subsidy assistance, 25-year warranty, free consultation. Serving [operating areas]."
*   **OG Tags:** `og:title`, `og:description`, `og:image`, `og:url`, `og:type`

### Semantic HTML
*   Single `<h1>` per page (Hero headline)
*   Proper heading hierarchy (`h2` for section titles, `h3` for subsections)
*   `<section>` elements with descriptive `id` attributes matching nav anchors
*   `<address>` for contact information (already implemented in Footer)
*   Descriptive `alt` text on all images

### Performance
*   Hero image should be optimized (WebP format when possible, compressed)
*   No render-blocking resources beyond the main bundle
*   Lazy load images below the fold
