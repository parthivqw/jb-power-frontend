import Accordion from '../ui/Accordion';
import Button from '../ui/Button';
import { FAQ } from '../../constants/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FaqSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-20 md:py-28 bg-jb-sand scroll-mt-20">
      <div ref={revealRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-hidden">
        
        {/* Section Heading */}
        <div className="text-center mb-16 stagger-item reveal-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold text-jb-navy mb-4">
            {FAQ.title}
          </h2>
          <p className="text-lg text-jb-charcoal/80 max-w-2xl mx-auto">
            {FAQ.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="stagger-item reveal-hidden">
          <Accordion items={FAQ.questions} />
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-10 border-t border-black/5 stagger-item reveal-hidden">
          <h4 className="text-xl font-bold text-jb-navy mb-6">
            {FAQ.ctaMessage}
          </h4>
          <a href="#contact" className="inline-block">
            <Button size="lg" variant="primary">
              {FAQ.cta}
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
