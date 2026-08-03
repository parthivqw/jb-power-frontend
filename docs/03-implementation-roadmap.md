# JB Power V1: Implementation Roadmap

## 1. V1 Scope Boundaries
*   **IN SCOPE:** Single responsive landing page. Hero, Subsidy info, Trust/Gallery, Process, Services list, FAQ, Footer. Direct WhatsApp routing for all CTAs. Mobile responsiveness.
*   **OUT OF SCOPE:** E-commerce functionality. Dynamic cost/ROI calculators (use static tables). User login/dashboard. CRM integrations. Admin panels. Multi-page routing (About Us, Blog).

## 2. Technical Build Order
Development must follow this linear, top-to-bottom sequence to ensure layout stability:
1.  **Global Scaffolding:** Initialize Vite + Tailwind, setup `index.css`, create folder structure.
2.  **Base UI Components:** Scaffold `Button.tsx`, `Card.tsx`.
3.  **Layout Elements:** Build `Navbar.tsx` and `Footer.tsx`. Implement `WhatsAppFab.tsx`.
4.  **Hero Section:** High priority visual hook.
5.  **Subsidy Section:** Key financial driver.
6.  **Trust Section:** Warranties, brands, and gallery placeholders.
7.  **Process Section:** 4-step done-for-you flow.
8.  **Services Section:** On-grid, off-grid, hybrid, 3-phase.
9.  **FAQ Section:** Objection handling.
10. **Final Polish:** Accessibility audit, mobile testing, asset replacement.

## 3. Acceptance Criteria & Definition of Done
V1 is confidently complete when:
*   **Product:** The page matches the emotional progression (Hope -> Opportunity -> Trust -> Relief -> Confidence -> Action).
*   **UX/Design:** The site is fully mobile-responsive. Typography is clear. Whitespace is generous.
*   **Performance:** Achieves >90 on Google Lighthouse (Performance, Accessibility, Best Practices).
*   **Functionality:** Every CTA accurately formats a predefined message and routes to the WhatsApp API.
*   **Asset Integration:** All founder placeholders (`[X]`) have been replaced with real, verified data or hidden until available.
*   **Review:** The founder has reviewed the live staging link and signed off.
