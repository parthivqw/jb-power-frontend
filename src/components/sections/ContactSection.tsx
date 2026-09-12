import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { CONTACT } from '../../constants/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import contactImage from '../../assets/images/generated-v2/consultation.webp';

export default function ContactSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bill, setBill] = useState('');
  
  const [errors, setErrors] = useState<{name?: string; phone?: string; bill?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    // Validation
    const newErrors: {name?: string; phone?: string; bill?: string} = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    
    // Phone validation: exactly 10 digits
    const cleanPhone = phone.replace(/[^0-9]/g, ''); // Extract only digits
    
    if (cleanPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    
    // Bill validation: negative value reject
    let numericBill: number | null = null;
    if (bill.trim()) {
      numericBill = Number(bill.replace(/[^0-9.-]/g, ''));
      if (isNaN(numericBill) || numericBill < 0) {
        newErrors.bill = 'Please enter a valid positive amount.';
      }
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/v1/leads/`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          monthly_bill: numericBill
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      setSubmitStatus('success');
      setName('');
      setPhone('');
      setBill('');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Form Content */}
          <div className="stagger-item reveal-hidden">
            <h2 className="text-3xl md:text-4xl font-extrabold text-jb-navy mb-4">{CONTACT.heading}</h2>
            <p className="text-lg text-jb-charcoal/80 mb-8 max-w-lg">{CONTACT.description}</p>
            
            <Card className="bg-jb-white-warm border-none shadow-sm p-6 md:p-8">
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-jb-navy mb-2">Thank you!</h3>
                  <p className="text-jb-charcoal/80">
                    We've received your details. Our team will get back to you shortly.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="mt-8"
                    onClick={() => setSubmitStatus('idle')}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
                      Something went wrong while sending your request. Please try again or contact us on WhatsApp.
                    </div>
                  )}
                  {/* Field 1: Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-jb-navy mb-2">
                      {CONTACT.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={CONTACT.namePlaceholder}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-jb-gold focus:border-jb-gold outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  {/* Field 2: Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-jb-navy mb-2">
                      {CONTACT.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex relative">
                      <div className="flex-shrink-0 flex items-center px-4 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 text-jb-charcoal font-medium">
                        🇮🇳 +91
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={CONTACT.phonePlaceholder}
                        className={`flex-1 min-w-0 w-full px-4 py-3 rounded-r-lg border border-l-0 focus:ring-2 focus:ring-jb-gold focus:border-jb-gold outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  
                  {/* Field 3: Average Monthly Electricity Bill */}
                  <div>
                    <label htmlFor="bill" className="block text-sm font-semibold text-jb-navy mb-1">
                      {CONTACT.billLabel}
                    </label>
                    <p className="text-xs text-jb-charcoal/60 mb-2">{CONTACT.billNote}</p>
                    <input
                      type="text"
                      id="bill"
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      placeholder={CONTACT.billPlaceholder}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-jb-gold focus:border-jb-gold outline-none transition-colors ${errors.bill ? 'border-red-500' : 'border-gray-200'}`}
                      disabled={isSubmitting}
                    />
                    {errors.bill && <p className="mt-2 text-sm text-red-500">{errors.bill}</p>}
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" variant="primary" className="w-full justify-center" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : CONTACT.submitLabel}
                    </Button>
                    <p className="text-center text-sm text-jb-charcoal/70 mt-4 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      {CONTACT.whatsappNote}
                    </p>
                  </div>
                </form>
              )}
            </Card>
          </div>
          
          {/* Right: Image */}
          <div className="stagger-item reveal-hidden h-full order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden h-full min-h-[400px] shadow-sm">
              <img 
                src={contactImage} 
                alt="Professional Solar Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
