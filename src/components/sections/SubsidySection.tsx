import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { SUBSIDY } from '../../constants/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SubsidySection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="subsidy" className="py-20 md:py-28 bg-jb-white-warm scroll-mt-20">
      <div ref={revealRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-hidden">
        
        <Card className="bg-white border-none shadow-sm p-8 md:p-12 stagger-item reveal-hidden">
          {/* Layer 1: Government Support */}
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-6 uppercase tracking-wider">
              {SUBSIDY.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-jb-navy mb-4">
              {SUBSIDY.title}
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-jb-gold-deep mb-4">
              {SUBSIDY.amount}
            </h3>
            <p className="text-lg text-jb-charcoal/80 max-w-xl mx-auto">
              {SUBSIDY.eligibility}
            </p>
          </div>

          <div className="border-t border-gray-100 my-10"></div>

          {/* Layer 2: How JB Power Helps */}
          <div className="mb-12">
            <h4 className="text-lg font-bold text-jb-navy text-center mb-6 uppercase tracking-wide">
              {SUBSIDY.assistanceHeading}
            </h4>
            <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 sm:gap-8 flex-wrap mx-auto w-fit">
              {SUBSIDY.assistanceList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-jb-charcoal font-medium">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-jb-gold/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-jb-gold-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 my-10"></div>

          {/* Layer 3: What Happens Next */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-jb-navy mb-3">
              {SUBSIDY.nextStepTitle}
            </h4>
            <p className="text-jb-charcoal/80 mb-8 max-w-lg mx-auto">
              {SUBSIDY.nextStepDescription}
            </p>
            <a href="#contact" className="inline-block">
              <Button size="lg" variant="primary">
                {SUBSIDY.cta}
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
