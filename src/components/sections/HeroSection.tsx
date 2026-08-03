import Button from '../ui/Button';
import heroImage from '../../assets/images/hero-solar.jpg';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-jb-white-warm pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-jb-navy sm:text-5xl md:text-6xl leading-[1.1] md:leading-[1.15]">
              <span className="block">Powering Your Home</span>
              <span className="block text-jb-gold-deep mt-3">With Solar Energy</span>
            </h1>
            
            <p className="mt-8 text-lg text-jb-charcoal/80 sm:text-xl md:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              End-to-end solar installations for residential properties. We eliminate your electricity bills while handling all government subsidies seamlessly.
            </p>
            
            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Button size="lg">Book Free Consultation</Button>
              <Button size="lg" variant="secondary">Calculate Savings</Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 lg:mt-16 border-t border-black/5 pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-jb-gold-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold text-jb-charcoal tracking-wide uppercase">MNRE Empanelled</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-jb-gold-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-semibold text-jb-charcoal tracking-wide uppercase">25-Year Warranty</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="mt-16 lg:mt-0 lg:col-span-1">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-jb-navy/10 ring-1 ring-black/5 bg-jb-sand aspect-[4/3] lg:aspect-auto lg:h-[640px]">
                <img 
                  src={heroImage} 
                  alt="Modern solar panel installation on a residential rooftop" 
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
