import Button from '../ui/Button';
import { HERO } from '../../constants/content';
import heroImage from '../../assets/images/generated-v2/hero-solar.webp';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-jb-navy min-h-[85vh] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern solar panel installation on a residential rooftop" 
          className="absolute inset-0 h-full w-full object-cover object-right md:object-center"
        />
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-jb-navy/95 via-jb-navy/80 to-jb-navy/30 md:to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl lg:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] md:leading-[1.15]">
            <span className="block">{HERO.headlinePrefix}</span>
            <span className="block text-jb-gold mt-3">{HERO.headlineAccent}</span>
          </h1>
          
          <p className="mt-8 text-lg text-jb-white-warm/90 sm:text-xl leading-relaxed">
            {HERO.subheadline}
          </p>
          
          <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="block w-full sm:w-auto">
              <Button size="lg" fullWidth className="sm:w-auto shadow-lg">{HERO.primaryCta}</Button>
            </a>
            <a href="#subsidy" className="block w-full sm:w-auto">
              <Button size="lg" variant="secondary" fullWidth className="sm:w-auto shadow-lg">
                {HERO.secondaryCta}
              </Button>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 lg:mt-16 pt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10">
            {HERO.trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="h-5 w-5 text-jb-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold text-jb-white-warm tracking-wide uppercase">{indicator.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
