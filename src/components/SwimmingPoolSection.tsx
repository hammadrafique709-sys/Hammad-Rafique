import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Waves,
  Sun,
  Thermometer,
  ShieldCheck,
  Sparkles,
  Clock,
  Calendar,
  Coffee,
  CheckCircle2,
  Users,
  Compass,
  Heart
} from 'lucide-react';
import { POOL_FEATURES, POOL_SCHEDULE } from '../data/hospitalityData';

interface SwimmingPoolSectionProps {
  onOpenBooking: () => void;
  brandMode: 'hammad' | 'nafees';
}

export const SwimmingPoolSection: React.FC<SwimmingPoolSectionProps> = ({
  onOpenBooking,
  brandMode,
}) => {
  const [selectedPassType, setSelectedPassType] = useState<'single' | 'family' | 'cabana'>('family');

  const brandName = brandMode === 'hammad' ? 'Hammad' : 'Nafees';

  const passes = [
    {
      id: 'single',
      title: 'Individual Day Swim Pass',
      price: 'PKR 2,500',
      tag: 'Per Adult / Day',
      desc: 'Full-day access to heated infinity pool, sun lounger, towel service, locker, and complimentary iced mocktail.',
      features: ['Level 6 Sky Pool Access', 'Towel & Shower Locker', '1 Complimentary Beverage', 'Valid for All General Hours']
    },
    {
      id: 'family',
      title: 'Royal Family Pool Pass',
      price: 'PKR 7,500',
      tag: 'Up to 2 Adults + 2 Kids',
      badge: 'Most Popular',
      desc: 'Ideal for overseas families visiting Mirpur. Access to both main infinity pool and shallow children splash fountain zone.',
      features: ['Main & Kids Splash Pool Access', 'Reserved Double Sun Loungers', '4 Complimentary Fresh Juices', 'Family Splash Hours Priority']
    },
    {
      id: 'cabana',
      title: 'VIP Rooftop Cabana Day Package',
      price: 'PKR 15,000',
      tag: 'Private Luxury Daybed',
      desc: 'Exclusive curtained shaded cabana for up to 6 guests with dedicated butler, fresh fruit platter, and Hammad Bakery high tea.',
      features: ['Private Curtained VIP Cabana', 'Dedicated Pool Attendant', 'Artisan Bakery High Tea & Snacks', 'Chilled Mineral Water & Towel Service']
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* SECTION 4 HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-gradient-to-r from-slate-950 via-[#06202D] to-slate-950 p-6 sm:p-12 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span>Section 4 • Rooftop Sky Infinity Pool</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            {brandName} <span className="text-cyan-300 drop-shadow-[0_2px_12px_rgba(6,182,212,0.4)]">Rooftop Sky Pool</span> & Sun Deck
          </h2>

          <p className="font-outfit text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Perched atop Level 6 of the Hospitality Tower, our crystal azure temperature-controlled infinity pool offers an oasis of relaxation with unmatched 360-degree vistas of Mirpur city and the majestic Mangla Lake foothills.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center text-xs text-cyan-300 font-semibold">
              <Thermometer className="w-4 h-4 mr-1.5 text-cyan-400" />
              Heated to a Balmy 29°C
            </div>
            <div className="flex items-center text-xs text-cyan-300 font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-cyan-400" />
              Certified Lifeguards On Deck
            </div>
            <div className="flex items-center text-xs text-cyan-300 font-semibold">
              <Sun className="w-4 h-4 mr-1.5 text-cyan-400" />
              Dedicated Ladies-Only Privacy Hours
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Pool Day Pass or Cabana</span>
            </button>
            <div className="text-xs text-slate-400 px-3 py-2 bg-slate-900/60 rounded-xl border border-white/5">
              *Hotel Suite & Penthouse guests receive unlimited complimentary access.
            </div>
          </div>
        </div>
      </div>

      {/* POOL VISUALS SHOWCASE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-80 rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop"
            alt="Rooftop Azure Pool at Dusk"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-cyan-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">
              Twilight Atmosphere
            </span>
            <h4 className="font-cinzel text-xl font-bold text-white mt-2">
              Panoramic Skyline Swim
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Ambient fiber-optic submerged pool lighting reflecting the Mirpur sunset.
            </p>
          </div>
        </div>

        <div className="relative h-80 rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop"
            alt="VIP Sun Cabana and Deck"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">
              VIP Cabana Lounge
            </span>
            <h4 className="font-cinzel text-xl font-bold text-white mt-2">
              Private Sun Loungers & High Tea
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Plush shaded daybeds with refreshing mist coolers and artisan bakery treats.
            </p>
          </div>
        </div>
      </div>

      {/* POOL TIMINGS & CULTURE SCHEDULE */}
      <div className="bg-slate-950/80 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-cyan-400" />
              Daily Pool Hours & Privacy Schedule
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Tailored specifically to respect family values, complete privacy, and fitness needs in Mirpur.
            </p>
          </div>
          <span className="bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto">
            Open 7 Days a Week
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POOL_SCHEDULE.map((slot, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
            >
              <div>
                <span className="text-[11px] font-bold text-cyan-400 block mb-1">
                  {slot.time}
                </span>
                <h4 className="font-semibold text-slate-100 text-sm">
                  {slot.category}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-white/5">
                {slot.access}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DAY PASS PACKAGES */}
      <div className="space-y-6">
        <div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100">
            Pool Day Pass & Cabana Packages
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Reserve your entry for visitors and non-resident guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passes.map(p => {
            const isSelected = selectedPassType === p.id;
            return (
              <div
                key={p.id}
                className={`bg-slate-950 rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                  isSelected ? 'border-cyan-400 ring-2 ring-cyan-400/20 shadow-2xl' : 'border-white/10 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-bold text-slate-400">
                      {p.tag}
                    </span>
                    {p.badge && (
                      <span className="bg-cyan-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-cinzel text-xl font-bold text-white">
                    {p.title}
                  </h4>
                  <div className="font-cinzel text-2xl font-extrabold text-cyan-400 mt-2">
                    {p.price}
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    {p.desc}
                  </p>

                  <ul className="space-y-2 mt-5 text-xs text-slate-300">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  Select & Reserve Pass
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
