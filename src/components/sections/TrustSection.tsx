import Card from '../ui/Card';
import { TRUST } from '../../constants/content';

// Import generated trust images
import imgPanel from '../../assets/images/installations-real/rooftop-solar-array.webp';
import imgInverter from '../../assets/images/installations-real/inverter-installation-grey.webp';
import imgPaperwork from '../../assets/images/generated-v2/consultation.webp';
import imgService from '../../assets/images/generated-v2/installation.webp';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const trustImages = [imgPanel, imgInverter, imgPaperwork, imgService];

export default function TrustSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-16 md:py-20">
      <div ref={revealRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal-hidden">
        
        {/* Section Intro */}
        <div className="text-center mb-12">
          <p className="text-jb-gold-deep font-bold tracking-wider uppercase text-sm mb-2">{TRUST.intro}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-jb-navy">Quality You Can Trust</h2>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {TRUST.cards.map((card, idx) => (
            <Card key={idx} className="flex flex-col h-full border-none bg-jb-white-warm stagger-item reveal-hidden">
              {/* Image Header (breaking out of padding) */}
              <div className="-mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl aspect-[4/3]">
                <img 
                  src={trustImages[idx]} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-jb-navy mb-3">{card.title}</h3>
                <p className="text-jb-charcoal/80 text-sm leading-relaxed">{card.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery & Testimonials */}
        {/* Temporarily disabling the grid layout until gallery assets are ready */}
        {/* <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start"> */}
        <div className="max-w-3xl mx-auto">
          
          {/* Gallery Placeholder (HIDDEN PENDING ASSETS)
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-jb-navy mb-8">Trusted Installations</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-[4/3] bg-jb-sand rounded-xl flex items-center justify-center border border-black/5">
                  <span className="text-sm font-semibold text-jb-charcoal/40 text-center px-4">[PLACEHOLDER: Installation Photo {num}]</span>
                </div>
              ))}
            </div>
          </div>
          */}

          {/* Testimonials */}
          <div className="w-full">
            <h2 className="text-3xl font-extrabold text-jb-navy mb-8 text-center">What Our Clients Say</h2>
            <div className="space-y-6">
              {TRUST.testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-jb-white-warm border-none stagger-item reveal-hidden">
                  <p className="text-jb-charcoal/80 italic mb-4">"{testimonial.text}"</p>
                  <p className="text-jb-navy font-semibold text-sm tracking-wide uppercase">- {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
          
        </div>

        {/* Brands We Use (HIDDEN PENDING ASSETS)
        <div className="mt-16 pt-16 border-t border-black/5">
          <p className="text-center text-sm font-semibold text-jb-charcoal tracking-wide uppercase mb-8">Brands We Use</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {TRUST.brands.map((brand, idx) => (
              <div key={idx} className="h-12 px-6 bg-jb-sand rounded flex items-center justify-center">
                <span className="text-sm font-semibold text-jb-charcoal/60">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
}
