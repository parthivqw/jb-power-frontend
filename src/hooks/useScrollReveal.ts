import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      // Immediate reveal for reduced motion
      if (ref.current) {
        ref.current.classList.remove('reveal-hidden');
        const items = ref.current.querySelectorAll('.stagger-item');
        items.forEach(item => item.classList.remove('reveal-hidden'));
      }
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal parent container immediately
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal-hidden');
            
            // Handle staggered children if they exist
            const items = entry.target.querySelectorAll('.stagger-item');
            items.forEach((item, index) => {
              // Very short stagger interval for a cohesive feel
              setTimeout(() => {
                item.classList.add('reveal-visible');
                item.classList.remove('reveal-hidden');
              }, index * 75);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return ref;
}
