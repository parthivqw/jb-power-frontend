B Power V1 — Frontend Implementation Roadmap

1. V1 Product Definition

Objective

Build a production-quality single-page responsive frontend for JB Power that communicates the company's solar offering, builds trust, explains financial/government support, removes customer objections, and drives qualified enquiries through WhatsApp.

Frontend V1 → Founder Review → Content/Asset Finalization → Production

In Scope

Single responsive landing page

Hero, Trust, Services, Subsidy & Financial Support, How It Works, FAQ, Contact, Footer

Persistent WhatsApp FAB

Smooth-scroll navigation

WhatsApp-based V1 lead submission

Mobile-first responsive design

Basic SEO

Static, centralized content

Founder-provided asset integration during finalization

Out of Scope

Backend API, lead database, CRM

Authentication or dashboard/admin panel

CMS or e-commerce

Dynamic solar/subsidy calculators

Multi-page routing

Email/database form submission

Animation libraries such as Framer Motion

Backend implementation

2. Page Architecture

The page architecture is locked:

HERO
  ↓
TRUST
  ↓
SERVICES
  ↓
SUBSIDY & FINANCIAL SUPPORT
  ↓
HOW IT WORKS
  ↓
FAQ
  ↓
CONTACT / LEAD FORM
  ↓
FOOTER

Navigation

Navigation item

Destination

Home

#hero / top

Services

#services

Subsidy

#subsidy

How It Works

#process

FAQ

#faq

Get Free Consultation

#contact

CTA rules

All primary conversion CTAs use Get Free Consultation and smoothly scroll to #contact.

The Hero secondary CTA Check Your Subsidy scrolls to #subsidy. It does not imply that V1 contains an eligibility calculator.

3. Implementation Status

Phase 0 — Foundation ✅ COMPLETE

Vite + React + TypeScript

Tailwind CSS

ESLint

Prettier

Repository structure

.gitignore

GitHub repository

Phase 1 — Shell & Visual Identity ✅ COMPLETE

Layout.tsx

Navbar.tsx

Footer.tsx

WhatsAppFab.tsx

Button.tsx

HeroSection.tsx

Design tokens

Responsive shell

Production build verification

Visual direction

Deep navy

JB gold

Warm white/sand backgrounds

Large typography

Full-bleed imagery

Image and typography treated as one composition

Clean, premium residential aesthetic

Phase 2 — Infrastructure Hardening ⚠️ FOUNDATION / VERIFY

This phase introduces no new visual sections.

Deliverables

Verify SEO metadata: title, description, OG tags

Verify package identity: jb-power-frontend

Verify Inter font integration

Verify all user-facing copy is centralized in constants/content.ts

Verify WhatsApp configuration is centralized

Verify WhatsApp FAB destination

Verify navbar anchors

Verify consistent primary CTA copy

Remove obsolete Vite scaffold files

Verify npm run build

Verify TypeScript/lint

Important: Phase 2 is an infrastructure verification gate, not a reason to rebuild completed sections.

Phase 3 — Homepage Conversion Funnel

3a — Trust & Credibility ✅ IMPLEMENTED — REFINEMENT LATER

Purpose

Answer: “Why should I trust JB Power?”

Current implementation

Warranty/value card structure

Installation gallery structure

Testimonials structure

Brands section structure

Card.tsx

Integrated into App.tsx

Production build verified

Founder-provided information

30-year solar panel warranty

10-year inverter warranty

5 years free service

Pending founder confirmation

Installation warranty, if applicable

Exact warranty wording/conditions

Exact scope of “5 years free service”

Real installation photographs

Real testimonials

Actual brands/manufacturers

Additional trust claims

Production rule

Do not invent missing claims. Unverified items are either temporary development placeholders or removed before production.

3b — Services ✅ IMPLEMENTED

Purpose

Answer: “What does JB Power actually provide?”

Implemented service cards

Residential Rooftop Solar

Commercial Solar Solutions

Hybrid & Off-Grid Systems

End-to-End Installation

Current implementation

Four service cards

Image-led card composition

Descriptions

Key features

CTA

#services

Card.tsx

Production build verified

Cards use imagery + text as a unified composition, following the visual principle established by the Hero.

3c — Subsidy & Financial Support ✅ BASE IMPLEMENTATION / REFINEMENT LATER

Purpose

Answer: “How does going solar become financially easier, and what does JB Power help me with?”

Government benefit

PM Surya Ghar subsidy — up to ₹78,000 for eligible 3kW+ systems.

JB Power support communicated by founder

Subsidy paperwork/process support

Loan/financing paperwork support

Founder-provided customer benefits

These are distinct from the government subsidy:

5 years free service

30-year panel warranty

10-year inverter warranty

Current implementation

SubsidySection.tsx

Badge.tsx

₹78,000 highlight

Government Support badge

JB Power paperwork/support statement

CTA → #contact

#subsidy

Production build verified

Planned refinement

Before production, evaluate whether this section should become a broader Subsidy & Financial Support story:

Government Support
       ↓
Up to ₹78,000 subsidy

       +

JB Power Assistance
       ↓
Subsidy paperwork
Loan/financing support

       +

JB Power Value
       ↓
5 years free service
30-year panel warranty
10-year inverter warranty

Avoid duplicating warranty information unnecessarily.

3d — How It Works ⏳ NEXT

Purpose

Answer: “What actually happens after I contact JB Power?”

Required flow

01 Consultation
       ↓
02 Site Assessment / Design
       ↓
03 Installation
       ↓
04 Commissioning & Support

Deliverables

Add process content to content.ts

Implement numbered process cards/timeline

Visually connect the stages

Keep interaction lightweight

CTA → #contact

Section id → process

Background → white

Reuse Card.tsx

Design principle

Communicate simplicity, not engineering complexity. The customer should leave thinking:

“These guys handle the process.”

3e — FAQ ⏳

Purpose

Answer remaining customer objections.

Target

6–10 questions covering:

Monsoon/weather durability

Roof damage

Maintenance

Subsidy process

Loan/financing process

Installation timeline

Warranty

Free service

What happens after installation

General solar concerns

Deliverables

Add FAQ content to content.ts

Build Accordion.tsx

Expand/collapse interaction

Keyboard-accessible interaction

Section id → faq

Background → jb-sand

Every FAQ should eliminate an actual customer objection.

3f — Contact / Lead Capture ⏳

Purpose

This is the primary conversion endpoint of V1.

Form

Required:

Name

Phone

Submission flow

User submits form
        ↓
Frontend validates fields
        ↓
Structured WhatsApp message generated
        ↓
WhatsApp opens
        ↓
Founder receives lead

Example message

New JB Power Consultation

Name: [Name]
Phone: [Phone]

Source: Website
Enquiry: Free Consultation

Deliverables

Contact section

Native form inputs

Validation

Submit handler

Structured WhatsApp message

#contact

CTA integration across page

Mobile testing

No backend is required for this V1 flow.

4. Founder Review & Production Polish

The frontend is not considered publicly production-final immediately after Phase 3.

Frontend Build Complete
        ↓
Internal Review
        ↓
Founder Review
        ↓
Business Validation
        ↓
Content / Asset Updates
        ↓
Final QA
        ↓
Deployment

4a — Internal Product Review

Review entire page top → bottom

Check visual rhythm

Check section transitions

Check information hierarchy

Check CTA behaviour

Check smooth scrolling

Check mobile layout

Check placeholder visibility

Check duplicate information

Check copy consistency

Emotional progression target

Hope
 ↓
Trust
 ↓
Confidence
 ↓
Opportunity
 ↓
Relief
 ↓
Clarity
 ↓
Action

4b — Founder Business Validation

Offers

₹78,000 subsidy wording

30-year panel warranty

10-year inverter warranty

5 years free service

Subsidy paperwork support

Loan/financing paperwork support

Any installation warranty

Any additional offers

Business information

Phone number

WhatsApp number

Physical address

Operating areas

Company description

Services actually provided

Assets

Real installation photographs

Logo

Panel manufacturer logos

Inverter manufacturer logos

Testimonials

Certifications/credentials

Copy approval

Founder approves claims

Founder approves wording

Founder approves offers

Founder approves imagery

Founder identifies anything to remove

4c — Content & Asset Finalization

Keep business content centralized:

constants/content.ts
        +
assets/
        ↓
UI components

Every placeholder must ultimately become:

Replace or Remove

before deployment.

4d — Production QA

Responsive

375px mobile

768px tablet

1280px+ desktop

Accessibility

Semantic HTML

Keyboard navigation

Focus states

Contrast

Alt text

Form labels

Accordion accessibility

Performance

Image optimization

WebP where appropriate

Lazy loading below-fold images

Lighthouse Performance >90 target

Quality

Lighthouse Accessibility >90

Lighthouse Best Practices >90

Lighthouse SEO >90

npm run build

No console errors

No broken anchors

WhatsApp flow verified

5. V1 Definition of Done

Product

Complete page architecture implemented

Responsive across target breakpoints

Visual language consistent

Emotional progression works

Navigation

Home → Hero

Services → Services

Subsidy → Subsidy

How It Works → Process

FAQ → FAQ

All primary CTAs → Contact

Conversion

Contact form works

Name required

Phone required

Structured WhatsApp message generated

WhatsApp opens correctly

WhatsApp FAB works

Content

Founder has reviewed business claims

Founder-approved warranties

Founder-approved offers

Founder-approved contact details

Real assets integrated where available

Unsupported claims removed

Technical

Production build passes

No critical console errors

Lighthouse targets achieved

Accessibility reviewed

Mobile QA completed

Final approval

Founder reviews staging

Founder approves final version

V1 deployed

6. UI Component Strategy

Components remain consumer-driven.

Component

Status

Consumers

Button.tsx

✅

Hero, sections, Contact

Card.tsx

✅

Trust, Services, Subsidy, Process

Badge.tsx

✅

Subsidy

Accordion.tsx

⏳

FAQ

Do not create abstractions just because they might be useful. Build them when the actual UI requires them.

7. Sprint Board

JB POWER V1
────────────────────────────────

FOUNDATION
[x] 0 — Foundation
[x] 1 — Shell & Visual Identity
[ ] 2 — Infrastructure verification

HOMEPAGE
[x] 3a — Trust
[x] 3b — Services
[x] 3c — Subsidy / Financial Support
[ ] 3d — How It Works        ← WE ARE HERE
[ ] 3e — FAQ
[ ] 3f — Contact / Lead Form

FINALIZATION
[ ] Internal UX review
[ ] Founder review
[ ] Business claim validation
[ ] Asset collection
[ ] Content finalization
[ ] Responsive QA
[ ] Accessibility QA
[ ] Lighthouse
[ ] Final build
[ ] Founder sign-off
[ ] DEPLOY V1

Working Rule

The information architecture is now considered stable:

Hero → Trust → Services → Subsidy → Process → FAQ → Contact → Footer

Ideas discovered during development can change copy, imagery, spacing, hierarchy, and visual treatment, but should not casually change the underlying page architecture.

The roadmap is the source of truth for the V1 frontend implementation.