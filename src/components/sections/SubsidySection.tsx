import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { SUBSIDY } from '../../constants/content';

export default function SubsidySection() {
  return (
    <section id="subsidy" className="py-20 bg-jb-white-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="accent" className="mb-6 uppercase tracking-wider">
            Government Support
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-jb-navy mb-6">
            {SUBSIDY.title}
          </h2>
          
          <Card className="bg-white text-center mt-10">
            <h3 className="text-4xl md:text-5xl font-bold text-jb-gold-deep mb-4">
              {SUBSIDY.amount}
            </h3>
            <p className="text-lg text-jb-charcoal font-medium mb-8">
              {SUBSIDY.eligibility}
            </p>
            <div className="flex justify-center mb-6">
              <a href="#contact">
                <Button size="lg" variant="primary">
                  {SUBSIDY.cta}
                </Button>
              </a>
            </div>
            <p className="text-sm text-jb-charcoal/80 max-w-xl mx-auto border-t border-gray-100 pt-6">
              {SUBSIDY.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
