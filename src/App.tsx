import { useEffect } from 'react';
import Lenis from 'lenis';

import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import TrustSection from './components/sections/TrustSection';
import ServicesSection from './components/sections/ServicesSection';
import SubsidySection from './components/sections/SubsidySection';
import ContactSection from './components/sections/ContactSection';
import ProcessSection from './components/sections/ProcessSection';
import WhatsAppFab from './components/sections/WhatsAppFab';

export default function App() {
  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Initialize Lenis: autoRaf prevents double-tick jitter, default lerp restores snappy feel
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Intercept anchor clicks to use Lenis scrollTo
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          if (href === '#') {
            lenis.scrollTo(0, { duration: 0.6 });
          } else {
            const targetEl = document.querySelector(href) as HTMLElement | null;
            if (targetEl) {
              // Snappy 0.6s duration with -80px offset for the sticky Navbar
              lenis.scrollTo(targetEl, { offset: -80, duration: 0.6 });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <SubsidySection />
      
      <ProcessSection />
      
      {/* Subsequent sections will be added here in future phases */}
      
      <ContactSection />
      
      <WhatsAppFab />
    </Layout>
  );
}
