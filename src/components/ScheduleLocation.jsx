import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Navigation, Car, Train, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function ScheduleLocation({ onOpenEnquiry }) {
  const [currentStatus, setCurrentStatus] = useState({ isOpen: true, message: 'Open Today until 11:00 PM' });

  useEffect(() => {
    // Dynamic opening hours check
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();

    let openHour = 5;
    let closeHour = 23;

    if (day === 0) { // Sunday
      openHour = 7;
      closeHour = 20;
    } else if (day === 6) { // Saturday
      openHour = 6;
      closeHour = 21;
    }

    if (hour >= openHour && hour < closeHour) {
      setCurrentStatus({
        isOpen: true,
        message: `Open Now • Closes at ${closeHour > 12 ? (closeHour - 12) + ':00 PM' : closeHour + ':00 AM'}`
      });
    } else {
      setCurrentStatus({
        isOpen: false,
        message: `Currently Closed • Opens at ${openHour}:00 AM`
      });
    }
  }, []);

  const hoursSchedule = [
    { days: 'Monday – Friday', gymHours: '5:00 AM – 11:00 PM', recoveryHours: '6:00 AM – 10:30 PM' },
    { days: 'Saturday', gymHours: '6:00 AM – 9:00 PM', recoveryHours: '7:00 AM – 8:30 PM' },
    { days: 'Sunday & Public Holidays', gymHours: '7:00 AM – 8:00 PM', recoveryHours: '8:00 AM – 7:30 PM' },
  ];

  return (
    <section id="location" className="py-24 bg-[#0A0C10] border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Club Operations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            Hours & <span className="text-amber-400">Location</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Centrally positioned in the metropolitan fitness corridor. Extended operating hours engineered around executive schedules and dawn training sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours Schedule (5 cols) */}
          <div className="lg:col-span-5 bg-[#12161F] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-xl">
            {/* Live Status Pill */}
            <div className={`p-4 rounded-2xl mb-6 flex items-center justify-between border ${
              currentStatus.isOpen
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${currentStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                <span className="font-bold text-sm">{currentStatus.message}</span>
              </div>
              <span className="text-xs uppercase font-extrabold tracking-wider bg-black/40 px-2.5 py-1 rounded-md">Live Status</span>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-4">Operating Schedule</h3>

            <div className="divide-y divide-gray-800/80">
              {hoursSchedule.map((item, idx) => (
                <div key={idx} className="py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-bold text-sm">{item.days}</span>
                    <span className="text-amber-400 font-bold text-sm">{item.gymHours}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Recovery & Contrast Suite</span>
                    <span>{item.recoveryHours}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-800">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>+1 (555) 019-4766 (Desk & Concierge)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>concierge@ironcorefitness-demo.com</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Schedule Visit / Induction')}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20"
                >
                  Schedule an Induction Walkthrough
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Location Details & Interactive Mock Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Stylized Map Placeholder */}
            <div className="rounded-3xl bg-[#12161F] border border-gray-800 overflow-hidden shadow-xl">
              <div className="relative h-80 bg-gray-900 overflow-hidden">
                {/* Stylized Dark Grid Map Graphic */}
                <div className="absolute inset-0 bg-[#0E131C] opacity-90">
                  <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Simulated Map Roads */}
                    <path d="M 0 100 Q 250 80 500 160 T 1000 200" fill="none" stroke="#4B5563" strokeWidth="6" />
                    <path d="M 200 0 L 300 400" fill="none" stroke="#4B5563" strokeWidth="4" />
                    <path d="M 600 0 L 550 400" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="6,6" />
                  </svg>
                </div>

                {/* Gym Location Pin & Callout */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="px-3.5 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-amber-500/40 text-white font-bold text-xs shadow-2xl mb-2 flex items-center gap-2 animate-bounce">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>IronCore Fitness Headquarters</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/40">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-black stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Map Control Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-gray-300 border border-gray-700">
                    Demo Map Placeholder • Metro District
                  </span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Location Address Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">742 Iron Forge Boulevard</h4>
                    <p className="text-gray-400 text-sm mt-0.5">
                      Suite 100, Performance District, Metro City, MC 90210
                    </p>
                    <p className="text-xs text-amber-400/80 mt-1">
                      Located adjacent to the Financial District Skywalk and Metro Central Station.
                    </p>
                  </div>
                </div>

                {/* Transit & Parking Details */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-800">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Member Parking</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        2 hours validated underground parking with EV charging stalls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Public Transit</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        2-minute walk from Central Metro Station (Blue & Red Line Interchange).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
