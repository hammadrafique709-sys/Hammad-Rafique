import React from 'react';
import { Crown, Star, Sparkles, CheckCircle2, MapPin, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { SectionTab } from '../types';
import { BRAND_INFO } from '../data/hospitalityData';

interface FooterProps {
  onSelectTab: (tab: SectionTab) => void;
  brandMode: 'hammad' | 'nafees';
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, brandMode }) => {
  const brandTitle = brandMode === 'hammad' ? 'HAMMAD' : 'NAFEES';

  return (
    <footer className="bg-[#02050B] border-t border-amber-500/30 text-slate-300">
      {/* Top Brand Banner matching the poster's exact bottom bar */}
      <div className="py-8 px-4 border-b border-white/5 bg-gradient-to-b from-[#060D19] to-[#02050B]">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          {/* Quality • Taste • Tradition */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-xs sm:text-sm font-semibold text-amber-400">
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1.5 text-amber-400 fill-amber-400" />
              Quality
            </span>
            <span className="text-amber-500/40">•</span>
            <span className="flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5 text-amber-400" />
              Taste
            </span>
            <span className="text-amber-500/40">•</span>
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-amber-400" />
              Tradition
            </span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-slate-100 uppercase">
            <span className="gold-gradient-text">{brandTitle}</span> – MORE THAN A BAKERY, IT’S AN EXPERIENCE
          </h3>

          <p className="font-outfit text-xs sm:text-sm tracking-wider text-amber-200/90 font-medium">
            120 Mian Mohammad Road & Allama Iqbal Road, Mirpur AJK
          </p>
        </div>
      </div>

      {/* Main Footer Links & Branch Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-cinzel text-xl font-bold gold-gradient-text">
                {brandTitle}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mirpur Azad Kashmir's premier multi-story hospitality landmark. Delivering culinary perfection, royal sweets, five-star hotel suites, serviced residences, and panoramic rooftop experiences.
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Authentic Heritage Since 1995</span>
            </div>
          </div>

          {/* Col 2: Sections Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
              Sections & Facilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('restaurant')}
                  className="hover:text-amber-400 transition-colors"
                >
                  1. Restaurant Dining & Live Charcoal BBQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('rooms')}
                  className="hover:text-amber-400 transition-colors"
                >
                  2. 5-Star Hotel Rooms & Royal Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('apartments')}
                  className="hover:text-amber-400 transition-colors"
                >
                  3. Serviced Luxury Apartments & Extended Stay
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('pool')}
                  className="hover:text-amber-400 transition-colors"
                >
                  4. Rooftop Sky Infinity Pool & Sun Deck
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('bakery')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Artisan Cakes & Royal Desi Ghee Mithai
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('poster')}
                  className="hover:text-amber-400 transition-colors flex items-center"
                >
                  <Sparkles className="w-3 h-3 mr-1 text-amber-400" />
                  Tower Showcase Poster
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Branches in Mirpur */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
              Mirpur Branches
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                <span className="font-bold text-slate-100 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  Flagship Hospitality Tower
                </span>
                <p className="text-slate-400">120 Mian Mohammad Road, Mirpur AJK</p>
                <p className="text-amber-300 text-[11px]">Tel: 0320 7203215 • Open 24/7</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                <span className="font-bold text-slate-100 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  Allama Iqbal Road Branch
                </span>
                <p className="text-slate-400">Near Chungi No. 4, Mirpur AJK</p>
                <p className="text-amber-300 text-[11px]">Tel: 0320 7203215 • 8 AM - Midnight</p>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Concierge & Delivery */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
              Concierge & Contact
            </h4>
            <p className="text-xs text-slate-400">
              For dining reservations, hotel suite bookings, wedding sweet orders, or apartment leases:
            </p>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/923207203215"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 0320 7203215</span>
              </a>

              <a
                href="tel:+923207203215"
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900 border border-amber-500/20 text-amber-300 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Phone: 0320 7203215</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© 2026 {brandTitle} Bakers & Restaurants. Mirpur Azad Jammu & Kashmir. All Rights Reserved.</p>
          <p className="text-amber-400/70">A Taste of Happiness • Luxury Hospitality Architecture</p>
        </div>
      </div>
    </footer>
  );
};
