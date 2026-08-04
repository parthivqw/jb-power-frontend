# JB Power V1: Implementation Roadmap

## 1. V1 Scope

### In Scope
*   Single responsive landing page (no routing)
*   Sections: Hero, Trust, Services, Subsidy, Process, FAQ, Contact Form, Footer
*   Contact Form as sole conversion endpoint (all primary CTAs scroll to form)
*   Contact Form V1 submit handler routes to WhatsApp with structured data
*   WhatsApp FAB as persistent direct-WhatsApp channel
*   Mobile-first responsive design
*   Basic SEO (title, meta description, OG tags)
*   Static content (no CMS, no dynamic data)

### Out of Scope
*   Backend API, lead storage, CRM integrations
*   E-commerce functionality
*   Dynamic cost/savings calculators (use static content)
*   User login / dashboard
*   Admin panel
*   Multi-page routing (About Us, Blog, etc.)
*   Contact forms that submit to email or a database (V1 routes to WhatsApp)
*   Animations library (Framer Motion, etc.)

---

## 2. Phase Structure

Development follows a strict linear sequence. Each phase must be completed before the next begins.

### Phase 0: Foundation ✅ COMPLETE

**Purpose:** Initialize the project and toolchain.

*   [x] Vite + React + TypeScript initialization
*   [x] Tailwind CSS configuration
*   [x] ESLint + Prettier configuration
*   [x] Repository structure scaffolded
*   [x] `.gitignore` configured
*   [x] GitHub repository created

### Phase 1: Shell & Visual Identity ✅ COMPLETE

**Purpose:** Establish the structural layout and design language.

*   [x] `Layout.tsx` — page wrapper (Navbar + children + Footer)
*   [x] `Navbar.tsx` — sticky header, responsive, mobile hamburger menu
*   [x] `Footer.tsx` — 4-column responsive footer
*   [x] `WhatsAppFab.tsx` — floating action button (visual shell)
*   [x] `Button.tsx` — reusable component (primary, secondary, outline)
*   [x] `HeroSection.tsx` — headline, CTAs, trust indicators, hero image
*   [x] Design tokens defined in `tailwind.config.js`
*   [x] `npm run build` verified
*   [x] `npm run dev` verified

### Phase 2: Infrastructure Hardening ⚪ NOT STARTED

**Purpose:** Establish the technical infrastructure that all subsequent sections depend on. This phase produces no new visual sections but makes everything that follows correct.

**Must be completed before Phase 3.**

Deliverables:
*   [ ] **SEO setup** — Update `index.html`: title, meta description, OG tags
*   [ ] **Package identity** — Update `package.json` name from `temp-vite` to `jb-power-frontend`
*   [ ] **Font integration** — Add Inter via Google Fonts to `index.html` and Tailwind config
*   [ ] **Content centralization** — Create `constants/content.ts` with all site copy, placeholder values, and WhatsApp config. Migrate hardcoded strings from existing components.
*   [ ] **WhatsApp FAB integration** — Wire FAB to real `wa.me` link using centralized config. The FAB is the ONLY element that opens WhatsApp directly.
*   [ ] **Navigation alignment** — Update navbar links to match documented architecture: Home, Services, Subsidy, How It Works, FAQ. CTA button: "Get Free Consultation" → `#contact`.
*   [ ] **CTA compliance** — Unify all primary CTA copy to "Get Free Consultation". All primary CTAs smooth scroll to `#contact`. Change Hero secondary CTA from "Calculate Savings" to "Check Your Subsidy" (scroll to `#subsidy`). Note: the `#contact` target section is built in Phase 3f; CTAs may scroll to a non-existent anchor during Phase 3a–3e development. This is expected.
*   [ ] **Trust indicator compliance** — Replace unverified claims (MNRE, warranty) with placeholder notation or remove until founder confirms. See `01-product-blueprint.md` Section 9.
*   [ ] **Scaffold cleanup** — Remove leftover Vite files (`src/assets/hero.png`, `react.svg`, `vite.svg`)

**Acceptance Criteria:**
*   All user-facing text sourced from `content.ts`
*   WhatsApp FAB links to real `wa.me` URL
*   All primary CTAs display "Get Free Consultation" and target `#contact`
*   `index.html` has correct title, description, and OG tags
*   No unverified claims displayed as fact
*   `npm run build` passes
*   `grep -r "PLACEHOLDER" src/constants/` returns only items pending founder input

### Phase 3: Homepage Sections ⚪ NOT STARTED

**Purpose:** Build the conversion funnel, section by section, in strict top-to-bottom page order.

Each section follows the same implementation pattern:
1.  Add section content to `constants/content.ts`
2.  Build any required UI components (Card, Badge, Accordion) if not yet created
3.  Implement the section component using design tokens exclusively
4.  Apply the documented section background from `02-frontend-architecture.md` Section 5
5.  Add a section-level conversion CTA where specified (see `01-product-blueprint.md` Section 11)
6.  Add section `id` attribute matching the nav anchor
7.  Import and render the section in `App.tsx` in the correct page order

Build order (matches page flow — Hero is already built in Phase 1):

**3a. Trust Section**
*   [ ] Installation gallery (placeholder images until founder provides real photos)
*   [ ] Warranty breakdown (categories from `01-product-blueprint.md` Section 7, with placeholders for unverified values)
*   [ ] Brand logos ("Brands We Use" — placeholders until provided)
*   [ ] Testimonials (placeholder cards until founder provides 2–3 real testimonials)
*   [ ] Background: `white`
*   [ ] No section `id` needed (not in navigation)
*   [ ] Required UI: `Card.tsx`

**3b. Services Section**
*   [ ] Service cards: On-grid, Off-grid, Hybrid, 3-Phase
*   [ ] Each card: title, brief description, key features
*   [ ] Conversion CTA: "Get Free Consultation" → scroll to `#contact`
*   [ ] Background: `jb-sand`
*   [ ] Section id: `services`
*   [ ] Required UI: `Card.tsx`

**3c. Subsidy Section**
*   [ ] Highlight PM Surya Ghar subsidy (up to ₹78,000 for 3kW+)
*   [ ] Clear breakdown of financial benefit
*   [ ] Conversion CTA: "Get Free Consultation" → scroll to `#contact`
*   [ ] Background: `jb-white-warm`
*   [ ] Section id: `subsidy`
*   [ ] Required UI: `Card.tsx`, `Badge.tsx`

**3d. Process Section**
*   [ ] 4-step "How It Works" flow (Consultation → Design → Installation → Commissioning)
*   [ ] Visual step indicators (numbered cards or timeline)
*   [ ] Conversion CTA: "Get Free Consultation" → scroll to `#contact`
*   [ ] Background: `white`
*   [ ] Section id: `process`
*   [ ] Required UI: `Card.tsx`

**3e. FAQ Section**
*   [ ] 6–10 questions addressing common objections (monsoon durability, roof damage, maintenance, subsidy process, timeline)
*   [ ] Expandable accordion UI
*   [ ] Background: `jb-sand`
*   [ ] Section id: `faq`
*   [ ] Required UI: `Accordion.tsx`

**3f. Contact Section**
*   [ ] Section heading (e.g., "Get Your Free Consultation")
*   [ ] Simple enquiry form: Name (required), Phone (required)
*   [ ] Submit button: "Get Free Consultation"
*   [ ] V1 submit handler: construct structured WhatsApp message from form data, open `wa.me` (see `02-frontend-architecture.md` Section 7)
*   [ ] Future: swap submit handler to `POST /leads` — no UI changes required
*   [ ] Background: `jb-white-warm`
*   [ ] Section id: `contact`
*   [ ] No additional UI components needed (uses `Button.tsx` + native form inputs styled with design tokens)

**Acceptance Criteria:**
*   All sections render in `App.tsx` in correct page order: Hero → Trust → Services → Subsidy → Process → FAQ → Contact → Footer
*   All section `id` attributes match navbar anchor links
*   All section backgrounds follow the documented rhythm in `02-frontend-architecture.md` Section 5
*   All copy sourced from `content.ts`
*   All primary CTAs scroll to `#contact`
*   Contact Form submit constructs WhatsApp message and opens `wa.me`
*   `npm run build` passes
*   Page scrolls naturally from Hero through Footer

### Phase 4: Polish & Launch ⚪ NOT STARTED

**Purpose:** Production readiness and founder approval.

*   [ ] Responsive testing — mobile (375px), tablet (768px), desktop (1280px+)
*   [ ] Accessibility audit — WCAG 2.1 AA compliance (contrast, focus states, alt text, semantic HTML)
*   [ ] Google Lighthouse — target >90 on Performance, Accessibility, Best Practices
*   [ ] Image optimization — compress, convert to WebP where possible, lazy load below-fold images
*   [ ] Real asset integration — replace all placeholder images, logo, testimonials, contact info with founder-provided assets
*   [ ] Final copy review — founder reviews all text in `content.ts`
*   [ ] Founder sign-off — staging link reviewed and approved

**Acceptance Criteria (V1 Definition of Done):**
*   The page matches the documented emotional progression (Hope → Trust → Confidence → Opportunity → Relief → Clarity → Action)
*   Fully mobile-responsive with no layout breaks
*   Every primary CTA scrolls to the Contact Form
*   Contact Form submits structured data via WhatsApp
*   WhatsApp FAB opens WhatsApp with general enquiry message
*   Google Lighthouse >90 on all four categories
*   All `[PLACEHOLDER]` values replaced with real data or section hidden
*   Founder has reviewed the staging link and signed off

---

## 3. UI Component Build Strategy

UI components (`Card.tsx`, `Badge.tsx`, `Accordion.tsx`) are built **on-demand** — when the first section that needs them is implemented. Do not build abstract components before their first consumer exists.

| Component | First Needed By | Notes |
| :--- | :--- | :--- |
| `Card.tsx` | Trust Section (3a) | Reused in Services, Subsidy, Process |
| `Badge.tsx` | Subsidy Section (3c) | Used for subsidy amounts, certifications |
| `Accordion.tsx` | FAQ Section (3e) | Single-use for FAQ |
