import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building,
  Home,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users,
  Maximize2,
  Coffee,
  ShieldCheck,
  Car,
  Key,
  Flame,
  Clock,
  Phone
} from 'lucide-react';
import { ApartmentItem } from '../types';
import { APARTMENTS_DATA } from '../data/hospitalityData';

interface ApartmentsSectionProps {
  onSelectApartmentForBooking: (aptId: string) => void;
  brandMode: 'hammad' | 'nafees';
}

export const ApartmentsSection: React.FC<ApartmentsSectionProps> = ({
  onSelectApartmentForBooking,
  brandMode,
}) => {
  const [stayDuration, setStayDuration] = useState<'daily' | 'monthly'>('daily');
  const [selectedApartment, setSelectedApartment] = useState<ApartmentItem>(APARTMENTS_DATA[1]);
  const [currency, setCurrency] = useState<'PKR' | 'GBP' | 'USD'>('PKR');

  const brandName = brandMode === 'hammad' ? 'Hammad' : 'Nafees';

  const formatPrice = (pkr: number) => {
    if (currency === 'GBP') {
      const gbp = Math.round(pkr / 365);
      return `£${gbp}`;
    }
    if (currency === 'USD') {
      const usd = Math.round(pkr / 278);
      return `$${usd}`;
    }
    return `PKR ${pkr.toLocaleString()}`;
  };

  const apartmentPerks = [
    {
      title: 'Daily Hammad Bakery Basket',
      desc: 'Freshly baked sourdough, butter croissants, farm milk, and preserves delivered each morning at your doorstep.',
      icon: Coffee,
    },
    {
      title: 'Full European Kitchen',
      desc: 'Equipped with induction cooktop, oven, microwave, full refrigerator, blender, and fine porcelain dinnerware.',
      icon: Flame,
    },
    {
      title: 'Underground Valet Parking',
      desc: 'Dedicated sheltered car parking stall inside the tower with 24/7 CCTV surveillance and security guards.',
      icon: Car,
    },
    {
      title: 'Diaspora-Friendly Leases',
      desc: 'Flexible weekly and monthly terms specifically designed for overseas families visiting Mirpur during wedding seasons.',
      icon: Key,
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* SECTION 3 HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-slate-950 via-[#1E1708] to-slate-950 p-6 sm:p-12 shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 3 • Serviced Luxury Residences</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            {brandName} <span className="gold-gradient-text">Serviced Apartments</span>
          </h2>

          <p className="font-outfit text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Your private home in Mirpur Azad Kashmir with five-star hotel services. Perched on Floor 5 of the Hospitality Tower, our luxury 1, 2, and 3-bedroom residences offer overseas families and executives the freedom of an expansive private home with daily housekeeping and bakery privileges.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400" />
              Private Keycard Floor Access
            </div>
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <Clock className="w-4 h-4 mr-1.5 text-amber-400" />
              Weekly & Monthly Stay Rates
            </div>
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <Sparkles className="w-4 h-4 mr-1.5 text-amber-400" />
              Complimentary Daily Pool Passes
            </div>
          </div>

          {/* Pricing Model & Currency Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center space-x-2 bg-slate-900 border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setStayDuration('daily')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  stayDuration === 'daily'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Daily Rates
              </button>
              <button
                onClick={() => setStayDuration('monthly')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  stayDuration === 'monthly'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Long-Term (Save 40%)
              </button>
            </div>

            <div className="flex items-center space-x-1 bg-slate-900 border border-white/10 rounded-xl p-1">
              {(['PKR', 'GBP', 'USD'] as const).map(cur => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === cur
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* APARTMENT PRIVILEGES BENTO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {apartmentPerks.map((perk, idx) => {
          const Icon = perk.icon;
          return (
            <div
              key={idx}
              className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-5 backdrop-blur-md shadow-lg flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm font-bold text-slate-100">
                  {perk.title}
                </h4>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAILED APARTMENT RESIDENCES */}
      <div className="space-y-6">
        <div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100">
            Available Serviced Residences (Level 5)
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Fully furnished and ready for immediate check-in for short or long-term lease.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {APARTMENTS_DATA.map(apt => {
            const isFeatured = selectedApartment.id === apt.id;
            const price = stayDuration === 'daily' ? apt.dailyRate : apt.monthlyRate;
            const priceLabel = stayDuration === 'daily' ? '/ night' : '/ month';

            return (
              <motion.div
                key={apt.id}
                whileHover={{ y: -6 }}
                className={`bg-slate-950/90 rounded-3xl overflow-hidden border transition-all flex flex-col justify-between shadow-xl ${
                  isFeatured ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-white/10 hover:border-amber-500/40'
                }`}
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={apt.image}
                      alt={apt.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs uppercase shadow-md">
                      {apt.type}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-amber-300 border border-amber-500/30">
                      {formatPrice(price)} {priceLabel}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-cinzel text-lg font-bold text-slate-100">
                        {apt.name}
                      </h4>
                      <p className="text-xs text-amber-300/90 font-medium mt-1">
                        Ideal for: {apt.idealFor}
                      </p>
                      <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                        {apt.tagline}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/10 text-xs">
                      <div className="flex items-center text-slate-300">
                        <Users className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                        <span>{apt.occupancy}</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                        <span>{apt.size}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300">
                      {apt.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectApartmentForBooking(apt.id)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Inquire / Book Residence</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
