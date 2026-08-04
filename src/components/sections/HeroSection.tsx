import Button from '../ui/Button';
import { HERO } from '../../constants/content';
import heroImage from '../../assets/images/hero-solar.jpg';

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
            <a href="#contact">
              <Button size="lg" fullWidth className="sm:w-auto shadow-lg">{HERO.primaryCta}</Button>
            </a>
            <a href="#subsidy">
              <Button size="lg" variant="secondary" fullWidth className="sm:w-auto shadow-lg">
                {HERO.secondaryCta}
              </Button>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 lg:mt-16 pt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-jb-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold text-jb-white-warm tracking-wide uppercase">{HERO.trustIndicators[0].label}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-jb-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-jb-white-warm tracking-wide uppercase">{HERO.trustIndicators[1].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
