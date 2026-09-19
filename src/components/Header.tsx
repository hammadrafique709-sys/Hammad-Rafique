import React from 'react';
import { Crown, Phone, MapPin, ShoppingBag, Calendar, Sparkles, Clock, MessageSquare } from 'lucide-react';
import { SectionTab } from '../types';
import { BRAND_INFO } from '../data/hospitalityData';

interface HeaderProps {
  currentTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  brandMode: 'hammad' | 'nafees';
  setBrandMode: (mode: 'hammad' | 'nafees') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onOpenBooking,
  brandMode,
  setBrandMode,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#050B14]/90 backdrop-blur-md border-b border-amber-500/20 shadow-2xl">
      {/* Top micro-bar */}
      <div className="bg-[#03070E] border-b border-white/5 py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
              120 Mian Mohammad Road & Allama Iqbal Road, Mirpur AJK
            </span>
            <span className="hidden md:inline-flex items-center text-slate-400">
              <Clock className="w-3 h-3 mr-1 text-amber-500/80" />
              24/7 Hospitality & Rooftop Services
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/923207203215"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">WhatsApp:</span> 0320 7203215
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+923207203215"
              className="flex items-center text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-amber-400" />
              0320 7203215
            </a>

            {/* Subtle Brand Switcher for user's preference */}
            <div className="flex items-center bg-slate-900 border border-amber-500/30 rounded-full px-1.5 py-0.5 ml-2 text-[10px]">
              <button
                onClick={() => setBrandMode('hammad')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  brandMode === 'hammad'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hammad
              </button>
              <button
                onClick={() => setBrandMode('nafees')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  brandMode === 'nafees'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nafees
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand & Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Regal Title */}
          <button
            onClick={() => onSelectTab('poster')}
            className="flex items-center space-x-3 text-left group transition-transform hover:scale-[1.01]"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-400/40 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-colors">
              <Crown className="w-7 h-7 text-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-widest gold-gradient-text uppercase">
                  {brandMode === 'hammad' ? 'HAMMAD' : 'NAFEES'}
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded-full">
                  Hospitality Tower
                </span>
              </div>
              <p className="font-outfit text-[10px] sm:text-xs tracking-[0.25em] text-amber-200/80 uppercase font-semibold">
                BAKERS & RESTAURANTS • MIRPUR AJK
              </p>
            </div>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => onSelectTab('poster')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all flex items-center ${
                currentTab === 'poster'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Tower Showcase
            </button>

            <button
              onClick={() => onSelectTab('restaurant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                currentTab === 'restaurant'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              1. Restaurant & BBQ
            </button>

            <button
              onClick={() => onSelectTab('rooms')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                currentTab === 'rooms'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              2. Hotel Rooms
            </button>

            <button
              onClick={() => onSelectTab('apartments')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                currentTab === 'apartments'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              3. Apartments
            </button>

            <button
              onClick={() => onSelectTab('pool')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                currentTab === 'pool'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              4. Sky Pool
            </button>

            <button
              onClick={() => onSelectTab('bakery')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                currentTab === 'bakery'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              Bakery & Sweets
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Takeaway Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 hover:border-amber-500 transition-all flex items-center justify-center shadow-md"
              title="View Takeaway Cart"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-slate-950 rounded-full font-bold text-[10px] flex items-center justify-center ring-2 ring-slate-950 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Reservation Button */}
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-1.5"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Now</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Nav Scroll Bar */}
        <div className="lg:hidden flex items-center space-x-2 py-2.5 overflow-x-auto no-scrollbar border-t border-white/5">
          <button
            onClick={() => onSelectTab('poster')}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${
              currentTab === 'poster' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-white/10'
            }`}
          >
            ⭐ Poster View
          </button>
          <button
            onClick={() => onSelectTab('restaurant')}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${
              currentTab === 'restaurant' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-white/10'
            }`}
          >
            1. Restaurant
          </button>
          <button
            onClick={() => onSelectTab('rooms')}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${
              currentTab === 'rooms' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-white/10'
            }`}
          >
            2. Rooms
          </button>
          <button
            onClick={() => onSelectTab('apartments')}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${
              currentTab === 'apartments' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-white/10'
            }`}
          >
            3. Apartments
          </button>
          <button
            onClick={() => onSelectTab('pool')}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${
              currentTab === 'pool' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-white/10'
            }`}
          >
            4. Sky Pool
          </button>
          <button
            onClick={() => onSelectTab('bakery')}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${
              currentTab === 'bakery' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-white/10'
            }`}
          >
            Bakery & Sweets
          </button>
        </div>
      </div>
    </header>
  );
};
