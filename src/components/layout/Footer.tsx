import { SITE, FOOTER, WHATSAPP } from '../../constants/content';

export default function Footer() {
  return (
    <footer className="bg-jb-navy text-jb-white-warm/80 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-jb-gold flex items-center justify-center text-white font-bold text-lg">JB</div>
              <span className="text-2xl font-bold tracking-tight text-jb-white-warm">
                {SITE.brandName}
              </span>
            </div>
            <p className="text-sm text-jb-white-warm/60 leading-relaxed max-w-xs">
              {FOOTER.description}
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-sm font-semibold tracking-wider text-jb-white-warm uppercase">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-jb-white-warm/80">
              <div>
                <p className="font-semibold">{SITE.founderName}</p>
                <p className="text-jb-white-warm/60 text-xs">Founder & Owner</p>
              </div>
              <ul className="space-y-3">
                <li>
                  <span className="block text-jb-white-warm/60 text-xs mb-1">Phone:</span>
                  <a href={`tel:${SITE.phone.replace(/\\s/g, '')}`} className="hover:text-jb-gold transition-colors">{SITE.phone}</a>
                </li>
                <li>
                  <span className="block text-jb-white-warm/60 text-xs mb-1">Email:</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-jb-gold transition-colors">{SITE.email}</a>
                </li>
                <li>
                  <span className="block text-jb-white-warm/60 text-xs mb-1">WhatsApp:</span>
                  <a href={`https://wa.me/${WHATSAPP.phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-jb-gold transition-colors">+{SITE.phone.split(' ')[0].replace('+', '')} {SITE.phone.split(' ').slice(1).join(' ')}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Operating Areas */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-sm font-semibold tracking-wider text-jb-white-warm uppercase">
              Operating Areas
            </h3>
            <ul className="space-y-3 text-sm text-jb-white-warm/60">
              {SITE.operatingAreas.map((area, idx) => (
                <li key={idx}>{area}</li>
              ))}
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-16 border-t border-jb-white-warm/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-jb-white-warm/40">
            &copy; {new Date().getFullYear()} {SITE.brandName}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-jb-white-warm/40">
            {FOOTER.legal.map((item, idx) => (
              <a key={idx} href={item.href} className="hover:text-jb-gold transition-colors">{item.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
