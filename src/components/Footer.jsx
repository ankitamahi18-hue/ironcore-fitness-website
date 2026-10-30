import React from 'react';
import { Dumbbell, ArrowUp, ShieldCheck, Globe, Share2, Compass } from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#07090D] border-t border-gray-800 text-gray-400">
      {/* Portfolio Showcase Disclaimer Bar */}
      <div className="bg-[#0E131C] border-b border-gray-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-semibold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Demonstration Portfolio Project for Small Business Clients</span>
          </div>
          <p className="text-gray-400 text-center sm:text-right">
            Designed to showcase modern web engineering, UX patterns, and conversion optimization for boutique gyms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/20">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-heading font-black tracking-wider text-white uppercase">
                IRON<span className="text-amber-500">CORE</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              A concept gym facility crafted for athletes who prioritize progressive heavy loading, biomechanical integrity, and scientific contrast recovery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-amber-500 hover:text-black border border-gray-800 flex items-center justify-center text-gray-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-amber-500 hover:text-black border border-gray-800 flex items-center justify-center text-gray-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter account"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-amber-500 hover:text-black border border-gray-800 flex items-center justify-center text-gray-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-amber-400 transition-colors">
                  About IronCore
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => scrollToSection(e, '#facilities')} className="hover:text-amber-400 transition-colors">
                  Facilities & Rigs
                </a>
              </li>
              <li>
                <a href="#memberships" onClick={(e) => scrollToSection(e, '#memberships')} className="hover:text-amber-400 transition-colors">
                  Membership Tiers
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => scrollToSection(e, '#trainers')} className="hover:text-amber-400 transition-colors">
                  Coaching Staff
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="hover:text-amber-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Club Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Facility</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>742 Iron Forge Blvd</li>
              <li>Metro City, MC 90210</li>
              <li>+1 (555) 019-4766</li>
              <li>concierge@ironcorefitness-demo.com</li>
              <li className="pt-2 text-emerald-400 text-xs font-semibold">
                ● Open 7 Days A Week
              </li>
            </ul>
          </div>

          {/* Quick Action */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Guest Access</h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Visiting Metro City? Claim a single-day training pass with contrast recovery access.
            </p>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Day Pass - Footer')}
              className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all"
            >
              Get 1-Day Trial
            </button>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="mt-14 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} IronCore Fitness. Fictional Showcase Website. Built with React, Vite & Tailwind CSS.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
