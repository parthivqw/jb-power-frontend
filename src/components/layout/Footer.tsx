import { SITE, FOOTER, WHATSAPP, NAV_LINKS } from '../../constants/content';

export default function Footer() {
  return (
    <footer className="bg-jb-navy text-jb-white-warm/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col space-y-6 pr-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-jb-gold flex items-center justify-center text-white font-bold text-lg">JB</div>
              <span className="text-2xl font-bold tracking-tight text-jb-white-warm">
                {SITE.brandName}
              </span>
            </div>
            <p className="text-sm text-jb-white-warm/60 leading-relaxed">
              {FOOTER.description}
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-jb-white-warm/40 uppercase">
              Contact Us
            </h3>
            <div className="space-y-5 text-sm text-jb-white-warm/80">
              <div>
                <p className="font-semibold text-jb-white-warm text-base">{SITE.founderName}</p>
                <p className="text-jb-white-warm/50 text-xs mt-1">Founder & Owner</p>
              </div>
              <ul className="space-y-4">
                <li>
                  <span className="block text-jb-white-warm/40 text-xs mb-1 uppercase tracking-wider">Phone</span>
                  <a href={`tel:${SITE.phone.replace(/\\s/g, '')}`} className="hover:text-jb-gold transition-colors inline-block">{SITE.phone}</a>
                </li>
                <li>
                  <span className="block text-jb-white-warm/40 text-xs mb-1 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-jb-gold transition-colors inline-block">{SITE.email}</a>
                </li>
                <li>
                  <span className="block text-jb-white-warm/40 text-xs mb-1 uppercase tracking-wider">WhatsApp</span>
                  <a href={`https://wa.me/${WHATSAPP.phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-jb-gold transition-colors inline-block">+{SITE.phone.split(' ')[0].replace('+', '')} {SITE.phone.split(' ').slice(1).join(' ')}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Operating Areas */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-jb-white-warm/40 uppercase">
              Operating Areas
            </h3>
            <ul className="space-y-4 text-sm text-jb-white-warm/70">
              {SITE.operatingAreas.map((area, idx) => (
                <li key={idx} className="flex items-start">
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-jb-white-warm/40 uppercase">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-jb-white-warm/70">
              {NAV_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-jb-gold transition-colors inline-block py-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-20 border-t border-jb-white-warm/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-jb-white-warm/40">
            &copy; {new Date().getFullYear()} {SITE.brandName}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-jb-white-warm/40">
            {FOOTER.legal.map((item, idx) => (
              <a key={idx} href={item.href} className="hover:text-jb-white-warm transition-colors">{item.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
