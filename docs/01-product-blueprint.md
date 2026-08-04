# JB Power V1: Product Blueprint

## 1. Executive Summary
JB Power is a residential and commercial solar installation business providing end-to-end services. The V1 website is a highly focused, lead-generation landing page designed to educate homeowners, build trust, and convert visitors into qualified enquiries via a Contact Form.

## 2. Business Objective
*   **Success:** Homeowner understands the service, trusts the brand, and submits an enquiry.
*   **Primary KPI:** Qualified enquiries submitted through the Contact Form.
*   **V1 Conversion:** Form submissions construct a structured WhatsApp message and open `wa.me`. Future versions submit to a backend API.
*   **Out of Scope:** ERP, CRM, AI chatbot, e-commerce panel sales.

## 3. Product Philosophy & Emotional Progression
The website architecture is mapped to the customer's emotional journey:
1.  **Hope:** "Can I eliminate my electricity bill?" (Hero)
2.  **Trust:** "Is this company legitimate?" (Trust/Proof)
3.  **Confidence:** "They have the exact system I need." (Services)
4.  **Opportunity:** "The government will pay for this?" (Subsidy)
5.  **Relief:** "They handle all the paperwork for me." (Process)
6.  **Clarity:** "I have no remaining doubts." (FAQ)
7.  **Action:** "Let me get started." (Contact Form)

## 4. Target Customer & Founder Vision
*   **Target:** Property owners reacting to summer bill shock or subsidy announcements.
*   **Fears:** Scam vendors, roof leaks, complex government paperwork, failing hardware.
*   **Founder Vision:** JB Power handles everything—from consultation to installation and subsidy acquisition. A hassle-free, "done-for-you" local expert.

## 5. Competitor Research Summary
*   **Tata Power Solar:** Learn from their trust/longevity messaging (25-year warranties). Avoid their corporate jargon and heavy UX.
*   **ZunRoof (zunsolar):** Learn from their "free site assessment" CTA and end-to-end service positioning. Avoid their over-indexing on IoT/Apps.
*   **Loom Solar:** Learn from their transparent FAQ. Avoid their D2C E-commerce layout.

## 6. Homepage Information Architecture
The flow prioritizes Trust immediately after the Hero — establish legitimacy before discussing details or money.
1.  **Hero:** Purpose: Hook visitor with value proposition and primary CTA.
2.  **Trust (Gallery/Warranties/Badges):** Purpose: Establish legitimacy immediately after the hook, before the visitor evaluates services or money.
3.  **Services:** Purpose: Detail capabilities (On-grid, Off-grid, Hybrid, 3-Phase). The visitor now trusts the company enough to care about offerings.
4.  **Subsidy:** Purpose: Highlight PM Surya Ghar financial opportunity. Now the visitor knows what they're getting subsidized.
5.  **Process ("How It Works"):** Purpose: Show the frictionless 4-step done-for-you flow.
6.  **FAQ:** Purpose: Handle remaining objections (monsoon, roof damage).
7.  **Contact Form:** Purpose: Capture the conversion. Simple enquiry form (Name, Phone). V1 routes submission to WhatsApp with structured data. Future versions submit to backend API.
8.  **Footer:** Purpose: Contact info, operating areas, and legal.

## 7. Warranty Strategy
Do not rely on a generic "25-year warranty". Use specific categories (with placeholders for founder verification):
*   **Panel Performance Warranty:** `[25 Years]`
*   **Inverter Warranty:** `[X Years]`
*   **Installation / Workmanship Warranty:** `[X Years]`
*   **Free Service Period:** `[X Years/Months]`

## 8. Founder Assets Required (With Destinations)
*   **Logo (SVG):** → Navbar & Footer
*   **WhatsApp Number:** → WhatsApp FAB & Contact Form V1 submit handler
*   **Physical Address:** → Footer
*   **Operating Areas:** → Trust Section & Footer
*   **Installation Photos:** → Gallery / Trust Section
*   **Testimonials (2-3):** → Trust Section
*   **Brand Logos (e.g., Tata, Waaree):** → Trust Section (Under "Brands We Use")
*   **Certifications (MNRE/ISO):** → Trust Section & Footer

## 9. Verified Facts vs Open Questions
*   **Verified:** PM Surya Ghar offers up to ₹78,000 for 3kW+. Subsidies require ALMM-listed panels and MNRE vendors. Paid via DBT after commissioning.
*   **Open Questions (Blocking):** Is JB Power officially MNRE-empanelled? Do you assist the homeowner with the pmsuryaghar.gov.in portal? Do you facilitate loans?

**Implementation Rule:** No claim classified as an Open Question may appear on the website as verified fact. Use `[PLACEHOLDER: Pending founder verification]` notation in both documentation and implementation until confirmed. Displaying unverified claims is a compliance and trust risk.

## 10. Navigation Architecture

The navbar serves two purposes: orientation (where am I on the page?) and conversion (CTA button).

**Desktop Navigation Links:**

| Link Label | Target | Rationale |
| :--- | :--- | :--- |
| Home | `#` (scroll to top) | Standard anchor |
| Services | `#services` | Direct access to offerings |
| Subsidy | `#subsidy` | Primary traffic driver (PM Surya Ghar). Must be discoverable. |
| How It Works | `#process` | Reduces perceived complexity |
| FAQ | `#faq` | Objection handling |

**CTA Button:** "Get Free Consultation" → Smooth scroll to `#contact`

**Omitted from navigation:**
*   **Trust section:** Visual proof, not a destination users actively seek. It supports the flow passively.
*   **Contact:** Not a separate text link. The CTA button serves this purpose with greater visual prominence.

**Mobile Navigation:** Same links in a hamburger menu with full-width CTA button. The WhatsApp FAB provides persistent mobile conversion independent of the nav.

## 11. CTA Strategy & Conversion Routing

Every CTA on the page falls into one of three categories:

### Primary CTAs (Scroll to Contact Form)
Smooth scroll the user to the Contact Form section (`#contact`).

| Location | Label | Action |
| :--- | :--- | :--- |
| Navbar | Get Free Consultation | Scroll to `#contact` |
| Hero | Get Free Consultation | Scroll to `#contact` |
| Section-level prompts | Get Free Consultation | Scroll to `#contact` |
| Footer | Get Free Consultation | Scroll to `#contact` |

### Secondary CTAs (Engagement)
Keep the user on-page and drive them deeper into the conversion funnel.

| Location | Label | Action |
| :--- | :--- | :--- |
| Hero | Check Your Subsidy | Scroll to `#subsidy` |

### WhatsApp FAB (Direct WhatsApp — Only Exception)
The floating WhatsApp button is the ONLY element that opens WhatsApp directly.

| Location | Label | Action |
| :--- | :--- | :--- |
| WhatsApp FAB | (icon only) | Direct `wa.me` link → WhatsApp |

### Contact Form Submission Architecture
*   **V1 (No Backend):** Form collects Name + Phone. On submit, constructs a structured WhatsApp message from the form data and opens `wa.me`. The user does not need to know the routing mechanism.
*   **Future (Backend):** Form submits to backend API (`POST /leads`). Only the submit handler changes. The form UI, validation, CTA targets, and page flow remain identical.

### Rules
1.  **One primary CTA phrase.** All conversion CTAs use identical copy: "Get Free Consultation". No variations.
2.  **CTAs scroll to the Contact Form.** They never open WhatsApp. Only the FAB opens WhatsApp.
3.  **Conviction sections end with a conversion prompt.** After Services, Subsidy, and Process, include a lightweight CTA that scrolls to `#contact`.
4.  **Secondary CTAs never leave the page.** They scroll to a section.
