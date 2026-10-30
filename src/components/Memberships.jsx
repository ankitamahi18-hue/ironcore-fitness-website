import React from 'react';
import { membershipData } from '../data/membershipData';
import { Check, X, Shield, Star, HelpCircle } from 'lucide-react';

export default function Memberships({ onOpenEnquiry }) {
  return (
    <section id="memberships" className="py-24 bg-[#0D1017] border-b border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Membership Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            Transparent <span className="text-amber-400">Memberships</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            No initiation fees, no hidden lock-ins. Every tier provides full access to our main strength floor and high-density sprint track.
          </p>

          {/* Explicit Portfolio Demonstration Disclaimer */}
          <div className="mt-4 inline-block px-4 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            ⚠️ Demonstration Showcase: Prices shown below are sample demonstration figures for portfolio presentation.
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {membershipData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#18202F] to-[#11151F] border-2 border-amber-500 shadow-2xl shadow-amber-500/15 lg:-translate-y-2'
                  : 'bg-[#12161F] border border-gray-800 hover:border-gray-700 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      {plan.tier}
                    </span>
                    <h3 className="text-2xl font-heading font-black text-white mt-1">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-xl bg-black/40 border border-gray-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading font-black text-white tracking-tight">{plan.price}</span>
                    <span className="text-gray-400 text-xs font-semibold">{plan.billingPeriod}</span>
                  </div>
                  <div className="mt-1 text-[11px] text-amber-400/90 font-medium tracking-wide">
                    {plan.demoLabel}
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Included Amenities:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-200">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2 border-t border-gray-800/80">
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-500">
                          <X className="w-3.5 h-3.5 text-gray-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Membership: ${plan.name} (${plan.price}/mo demo)`)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
                      : 'bg-gray-800 hover:bg-gray-700 text-white hover:text-amber-400 border border-gray-700'
                  }`}
                >
                  {plan.ctaText}
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2.5">
                  Opens enquiry form • No payment details taken
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate & Day Pass Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#12161F] border border-gray-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-bold text-base">Looking for Day Passes or Corporate Wellness Accounts?</h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              We offer single-session visitor passes ($25 demo) and tailored athletic wellness accounts for executive teams.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Day Pass & Corporate Packages')}
            className="px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all"
          >
            Enquire For Custom Rates
          </button>
        </div>
      </div>
    </section>
  );
}
