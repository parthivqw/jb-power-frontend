import { useState } from 'react';
import Button from '../ui/Button';
import { SITE, NAV_LINKS } from '../../constants/content';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Placeholder */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-jb-gold shadow-sm flex items-center justify-center text-white font-bold text-lg">JB</div>
            <span className="text-2xl font-bold tracking-tight text-jb-navy">
              {SITE.brandName}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-jb-charcoal hover:text-jb-gold-deep transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="md">Get Free Consultation</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-jb-navy hover:bg-jb-sand focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jb-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            {!isMobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-3 text-base font-semibold text-jb-charcoal hover:bg-jb-sand hover:text-jb-navy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-6 px-3">
              <a href="#contact" className="block">
                <Button fullWidth size="lg">
                  Get Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
