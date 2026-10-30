import React from 'react';
import { trainersData } from '../data/trainersData';
import { Award, Dumbbell, Calendar, ChevronRight } from 'lucide-react';

export default function Trainers({ onOpenEnquiry }) {
  return (
    <section id="trainers" className="py-24 bg-[#0A0C10] border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Coaching Staff</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            Elite <span className="text-amber-400">Coaches</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Our multidisciplinary coaching staff brings Olympic weightlifting mastery, Doctor of Physical Therapy credentials, and collegiate athletic conditioning to your training plan.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-2xl bg-[#12161F] border border-gray-800/80 hover:border-amber-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div>
                {/* Trainer Photo */}
                <div className="relative h-72 overflow-hidden bg-gray-900">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161F] via-[#12161F]/30 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 text-[11px] font-bold">
                    {trainer.experience}
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {trainer.role}
                  </p>

                  <p className="mt-3 text-gray-400 text-xs leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Credentials Tags */}
                  <div className="mt-4 pt-3 border-t border-gray-800/80">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Credentials</p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.credentials.map((cred, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-800 text-[10px] font-medium"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mt-3">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Focus Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Coaching Consultation with ${trainer.name}`)}
                  className="w-full py-2.5 rounded-lg bg-gray-900 hover:bg-amber-500 hover:text-black text-gray-300 hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-gray-800"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
