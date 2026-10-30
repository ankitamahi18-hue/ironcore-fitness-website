import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Clock, ChevronRight, Phone } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Hours & Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Banner Notice for Portfolio Demo */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black text-xs font-semibold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="bg-black/15 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Demo Showcase</span>
        <span>IronCore Fitness is a portfolio demonstration website. All memberships and schedules are illustrative.</span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0C10]/95 backdrop-blur-md border-b border-gray-800/80 shadow-2xl py-3.5'
            : 'bg-[#0A0C10]/80 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Dumbbell className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-black tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
                  IRON<span className="text-amber-500">CORE</span>
                </span>
                <span className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase -mt-1">
                  Fitness & Recovery
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Action & Status */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open Today: 5 AM - 11 PM</span>
              </div>

              <button
                type="button"
                onClick={() => onOpenEnquiry('General Enquiry')}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Visit
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenEnquiry('General Enquiry')}
                className="sm:hidden px-3 py-1.5 rounded-md bg-amber-500 text-black font-bold text-xs tracking-wide"
              >
                Enquire
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%+0px)] bg-[#0A0C10]/98 border-b border-gray-800 shadow-2xl backdrop-blur-xl px-6 py-6 transition-all duration-200">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 pb-3 mb-1 border-b border-gray-800/80 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open Today: 5:00 AM – 11:00 PM</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between py-2 text-base font-semibold text-gray-200 hover:text-amber-400 hover:translate-x-1 transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-800 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry('Day Pass Enquiry');
                  }}
                  className="w-full py-3 rounded-lg bg-amber-500 text-black font-bold text-center text-sm tracking-wide shadow-lg shadow-amber-500/20"
                >
                  Claim 1-Day Trial Pass
                </button>
                <a
                  href="https://wa.me/15550194766?text=Hi%20IronCore%20Fitness%2C%20I%20would%20like%20to%20enquire%20about%20a%20membership!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-gray-900 border border-emerald-500/30 text-emerald-400 font-medium text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Quick WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
