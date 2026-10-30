import React from 'react';
import { ShieldCheck, Flame, ArrowRight, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-gray-800">
      {/* Dynamic Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="IronCore Fitness Gym Floor"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 scale-105 transform animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left flex flex-col items-center sm:items-start">
        {/* Elite Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Premier Athletic & Recovery Facility</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white uppercase max-w-4xl leading-[1.08]">
          UNCOMPROMISING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500">STRENGTH.</span>
          <br />
          SCIENCE-BACKED <span className="text-gray-200">RECOVERY.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
          Engineered for dedicated athletes and ambitious individuals. Experience Olympic-grade power racks, calibrated plates, high-density turf, and state-of-the-art infrared contrast therapy.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onOpenEnquiry('Hero CTA - Day Pass')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Claim Your 1-Day Trial</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('#facilities')}
            className="px-8 py-4 rounded-xl bg-gray-900/80 hover:bg-gray-800 text-white font-semibold text-base border border-gray-700/80 hover:border-amber-500/50 flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-md"
          >
            <span>Explore Facilities</span>
          </button>
        </div>

        {/* Key Feature Highlights */}
        <div className="mt-14 pt-8 border-t border-gray-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">Eleiko & Rogue</p>
              <p className="text-gray-400 text-xs">Competition-Grade Rigs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">Contrast Therapy</p>
              <p className="text-gray-400 text-xs">Infrared Sauna & Cryo</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">Cap-Limited</p>
              <p className="text-gray-400 text-xs">Zero Equipment Waiting</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">Transparent Terms</p>
              <p className="text-gray-400 text-xs">No Long-Term Lock-in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
