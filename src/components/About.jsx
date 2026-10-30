import React from 'react';
import { Target, Award, Compass, Zap, Check } from 'lucide-react';

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-24 bg-[#0D1017] border-b border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage & Badges */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
                alt="IronCore Training Environment"
                className="w-full h-[460px] object-cover filter contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0A0C10]/90 backdrop-blur-md border border-gray-700/60">
                <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Architectural Philosophy</p>
                <p className="text-white text-sm font-medium">
                  Engineered with acoustic-dampening flooring, natural airflow circulation, and competition-calibrated equipment spacing.
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-5 -right-5 z-20 hidden sm:flex items-center gap-3 p-4 rounded-xl bg-amber-500 text-black shadow-xl shadow-amber-500/20">
              <Award className="w-8 h-8 stroke-[2.2]" />
              <div>
                <p className="font-black text-lg leading-tight uppercase font-heading">15,000 SQ FT</p>
                <p className="text-xs font-bold uppercase tracking-wider text-black/80">Dedicated Floor</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Standards */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span>About IronCore</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              A Sanctum For Pure <br className="hidden sm:inline" />
              <span className="text-amber-400">Athletic Performance</span>
            </h2>

            <p className="mt-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              IronCore Fitness was created to eliminate the frustrations of typical commercial gyms: overcrowded racks, broken pulleys, and loud gimmicks. We built a no-compromise training ground designed around biomechanical efficiency, progressive overload, and rapid muscular restoration.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-gray-800/60">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Capped Member Capacity</h4>
                  <p className="text-gray-400 text-sm mt-0.5">
                    We strictly regulate our active roster to ensure you never wait for an Olympic platform or power rack during peak training hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-gray-800/60">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Integrated Recovery Modalities</h4>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Recovery is not an afterthought. Our contrast hydrotherapy suites and Finnish infrared saunas help athletes recover 40% faster between intense training cycles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-gray-800/60">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Coaching Integrity</h4>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Every trainer on our floor holds collegiate or gold-standard certifications (CSCS, USAW, DPT), ensuring evidence-based movement progressions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenEnquiry('About Section - Consultation')}
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20"
              >
                Schedule Facility Tour
              </button>
              <span className="text-gray-400 text-xs">
                Free 30-minute walkthrough with a head conditioning coach.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
