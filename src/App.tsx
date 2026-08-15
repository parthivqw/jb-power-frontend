import { useEffect } from 'react';
import Lenis from 'lenis';

import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import TrustSection from './components/sections/TrustSection';
import ServicesSection from './components/sections/ServicesSection';
import SubsidySection from './components/sections/SubsidySection';
import WhatsAppFab from './components/sections/WhatsAppFab';

export default function App() {
  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Initialize Lenis for a premium scroll glide
    const lenis = new Lenis({
      lerp: 0.07, // Gentle wheel scroll smoothing
      wheelMultiplier: 1,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Intercept anchor clicks to use Lenis scrollTo
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          if (href === '#') {
            lenis.scrollTo(0, { duration: 0.8 });
          } else {
            const targetEl = document.querySelector(href) as HTMLElement | null;
            if (targetEl) {
              // Calculate dynamic duration: short jumps are faster, long jumps approach ~1000ms
              const distance = Math.abs(targetEl.getBoundingClientRect().top);
              const duration = Math.min(Math.max(distance / 2500, 0.6), 1.1);
              
              // Offset by -80px to accommodate the sticky Navbar (h-20)
              lenis.scrollTo(targetEl, { offset: -80, duration });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
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
      {/* Subsequent sections will be added here in future phases */}
      
      <WhatsAppFab />
    </Layout>
  );
}
