import Card from '../ui/Card';
import { TRUST } from '../../constants/content';

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Warranties */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {TRUST.warranties.map((warranty, idx) => (
            <Card key={idx} className="text-center bg-jb-white-warm border-none">
              <h3 className="text-jb-navy font-bold text-lg mb-2">{warranty.name}</h3>
              <p className="text-jb-gold-deep font-semibold">{warranty.value}</p>
            </Card>
          ))}
        </div>

        {/* Gallery & Testimonials */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Gallery Placeholder */}
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

          {/* Testimonials */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-jb-navy mb-8">What Our Clients Say</h2>
            <div className="space-y-6">
              {TRUST.testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-jb-white-warm border-none">
                  <p className="text-jb-charcoal/80 italic mb-4">"{testimonial.text}"</p>
                  <p className="text-jb-navy font-semibold text-sm tracking-wide uppercase">- {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
          
        </div>

        {/* Brands We Use */}
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

      </div>
    </section>
  );
}
