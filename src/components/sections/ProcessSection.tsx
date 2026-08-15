import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { PROCESS } from '../../constants/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import imgConsultation from '../../assets/images/process/01-consultation.jpg';
import imgAssessment from '../../assets/images/process/02-assessment-design.jpg';
import imgInstallation from '../../assets/images/process/03-installation.jpg';
import imgCommissioning from '../../assets/images/process/04-commissioning-support.jpg';

const processImages = [imgConsultation, imgAssessment, imgInstallation, imgCommissioning];

export default function ProcessSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-hidden">
        
        {/* Section Heading */}
        <div className="text-center mb-16 stagger-item reveal-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold text-jb-navy mb-4">
            {PROCESS.title}
          </h2>
        </div>

        <Card className="bg-jb-white-warm border-none shadow-sm p-4 md:p-8 stagger-item reveal-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Mobile Image Layer (Only visible on small screens, sits above the accordion) */}
            <div className="block lg:hidden rounded-2xl overflow-hidden aspect-video relative shadow-sm">
              {processImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={PROCESS.steps[idx].title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                    activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>

            {/* Left: Interaction Panel */}
            <div className="flex flex-col justify-center space-y-2 md:space-y-4">
              {PROCESS.steps.map((step, idx) => {
                const isActive = activeStep === idx;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    aria-current={isActive ? 'step' : undefined}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 motion-reduce:transition-none border-l-4 focus:outline-none focus:ring-2 focus:ring-jb-gold/50 ${
                      isActive 
                        ? 'bg-white shadow-sm border-jb-gold' 
                        : 'bg-transparent border-transparent hover:bg-white/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-xl font-bold font-mono transition-colors duration-300 motion-reduce:transition-none ${isActive ? 'text-jb-gold-deep' : 'text-jb-charcoal/40'}`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 motion-reduce:transition-none ${isActive ? 'text-jb-navy' : 'text-jb-charcoal'}`}>
                          {step.title}
                        </h3>
                        {/* Desktop always shows active text, mobile collapses inactive text */}
                        <div className={`overflow-hidden transition-all duration-500 motion-reduce:transition-none ${isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 lg:max-h-40 lg:opacity-100 lg:mt-2 hidden lg:block'}`}>
                          <p className="text-jb-charcoal/80 text-sm md:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Visual Storytelling Area (Desktop) */}
            <div className="hidden lg:block rounded-2xl overflow-hidden relative shadow-sm h-full min-h-[500px]">
              {processImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={PROCESS.steps[idx].title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                    activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>

          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12 stagger-item reveal-hidden">
          <a href="#contact" className="inline-block">
            <Button size="lg" variant="primary">
              {PROCESS.cta}
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
