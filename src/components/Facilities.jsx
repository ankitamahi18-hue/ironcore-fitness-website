import React, { useState } from 'react';
import { facilitiesData } from '../data/facilitiesData';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function Facilities({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Strength', 'Conditioning', 'Cardio', 'Recovery', 'Amenities'];

  const filteredFacilities = selectedCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter(item => item.category === selectedCategory);

  return (
    <section id="facilities" className="py-24 bg-[#0A0C10] border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>World-Class Equipment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
              Training <span className="text-amber-400">Facilities</span>
            </h2>
            <p className="mt-3 text-gray-400 text-base max-w-xl">
              15,000 square feet divided into purpose-built performance sectors, furnished with custom steel rigs, calibrated plates, and contrast recovery amenities.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                    : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group rounded-2xl bg-[#12161F] border border-gray-800/80 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Facility Image with Tag */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161F] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md text-amber-400 text-xs font-bold uppercase tracking-wider border border-white/10">
                    {facility.category}
                  </span>
                </div>

                {/* Facility Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Bulleted Specs */}
                  <div className="mt-5 pt-4 border-t border-gray-800/80 space-y-2">
                    {facility.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Facility: ${facility.title}`)}
                  className="w-full py-2.5 rounded-lg bg-gray-900 hover:bg-amber-500 hover:text-black text-gray-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-gray-800 group-hover:border-amber-500/30"
                >
                  <span>Enquire For Access</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-[#131823] to-gray-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Want to experience our facilities in person?</h4>
            <p className="text-gray-400 text-sm mt-1">Book an obligation-free facility walkthrough and trial workout.</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Facility Walkthrough')}
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide shrink-0 transition-all shadow-lg shadow-amber-500/20"
          >
            Claim 1-Day Trial Pass
          </button>
        </div>
      </div>
    </section>
  );
}
