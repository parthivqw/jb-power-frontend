export default function Footer() {
  return (
    <footer className="bg-jb-navy text-jb-white-warm/80 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-jb-gold flex items-center justify-center text-white font-bold text-lg">JB</div>
              <span className="text-2xl font-bold tracking-tight text-jb-white-warm">
                JB Power
              </span>
            </div>
            <p className="text-sm text-jb-white-warm/60 leading-relaxed max-w-xs">
              End-to-end solar solutions for residential and commercial properties. Powering a sustainable future with precision engineering.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-sm font-semibold tracking-wider text-jb-white-warm uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-jb-white-warm/80">
              <li>Phone Placeholder</li>
              <li>WhatsApp Placeholder</li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-sm font-semibold tracking-wider text-jb-white-warm uppercase">
              Address
            </h3>
            <address className="not-italic text-sm space-y-2 text-jb-white-warm/60">
              <p>Address Placeholder Line 1</p>
              <p>Address Placeholder Line 2</p>
            </address>
          </div>

          {/* Column 4: Operating Areas */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-sm font-semibold tracking-wider text-jb-white-warm uppercase">
              Operating Areas
            </h3>
            <ul className="space-y-3 text-sm text-jb-white-warm/60">
              <li>Area Placeholder 1</li>
              <li>Area Placeholder 2</li>
              <li>Area Placeholder 3</li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-16 border-t border-jb-white-warm/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-jb-white-warm/40">
            &copy; {new Date().getFullYear()} JB Power. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-jb-white-warm/40">
            <a href="#" className="hover:text-jb-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-jb-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
