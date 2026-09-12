import Card from '../ui/Card';
import Button from '../ui/Button';
import { SERVICES } from '../../constants/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Import generated images
import imgResidential from '../../assets/images/generated-v2/residential-solar.webp';
import imgCommercial from '../../assets/images/generated-v2/commercial-solar.webp';
import imgHybrid from '../../assets/images/installations-real/inverter-installation-blue.webp';
import imgInstallation from '../../assets/images/generated-v2/services-installation.webp';

const serviceImages = [imgResidential, imgCommercial, imgHybrid, imgInstallation];

export default function ServicesSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-jb-sand py-20 md:py-28 scroll-mt-20">
      <div ref={revealRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal-hidden">
        
        {/* Heading & Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-jb-navy mb-6">
            {SERVICES.title}
          </h2>
          <div className="space-y-4 text-lg text-jb-charcoal/80">
            {SERVICES.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {SERVICES.list.map((service, idx) => (
            <Card key={idx} className="flex flex-col h-full border-none stagger-item reveal-hidden">
              {/* Image Header (breaking out of padding) */}
              <div className="-mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-8 overflow-hidden rounded-t-2xl aspect-[16/9]">
                <img 
                  src={serviceImages[idx]} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-jb-navy mb-3">{service.title}</h3>
                <p className="text-jb-charcoal/80 mb-6 flex-grow">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mt-auto pt-6 border-t border-black/5">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm font-semibold text-jb-charcoal">
                      <svg className="h-5 w-5 text-jb-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <p className="text-jb-charcoal/80 font-medium mb-6">
            {SERVICES.ctaMessage}
          </p>
          <a href="#contact" className="inline-block">
            <Button size="lg">{SERVICES.cta}</Button>
          </a>
        </div>

      </div>
    </section>
  );
}
