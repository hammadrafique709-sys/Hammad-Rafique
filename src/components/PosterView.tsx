import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Crown,
  Cake,
  Boxes,
  UtensilsCrossed,
  Coffee,
  PartyPopper,
  Truck,
  Sparkles,
  BedDouble,
  Building,
  Waves,
  ChevronRight,
  Flame,
  Star,
  CheckCircle2,
  Eye
} from 'lucide-react';
import { SectionTab } from '../types';
import { TOWER_LEVELS } from '../data/hospitalityData';

interface PosterViewProps {
  onSelectTab: (tab: SectionTab) => void;
  onOpenBooking: () => void;
  brandMode: 'hammad' | 'nafees';
}

export const PosterView: React.FC<PosterViewProps> = ({
  onSelectTab,
  onOpenBooking,
  brandMode,
}) => {
  const [activeFloor, setActiveFloor] = useState<number>(2);
  const [hoveredDelicacy, setHoveredDelicacy] = useState<string | null>(null);

  const brandTitle = brandMode === 'hammad' ? 'HAMMAD' : 'NAFEES';

  const posterFeatureIcons = [
    { id: 'cakes', label: 'Fresh Cakes & Bakery', icon: Cake, tab: 'bakery' as SectionTab },
    { id: 'sweets', label: 'Premium Sweets', icon: Boxes, tab: 'bakery' as SectionTab },
    { id: 'fastfood', label: 'Fast Food', icon: Flame, tab: 'restaurant' as SectionTab },
    { id: 'restaurant', label: 'Restaurant Dining', icon: UtensilsCrossed, tab: 'restaurant' as SectionTab },
    { id: 'cafe', label: 'Café & Refreshments', icon: Coffee, tab: 'restaurant' as SectionTab },
    { id: 'events', label: 'Celebrations & Events', icon: PartyPopper, tab: 'restaurant' as SectionTab },
    { id: 'takeaway', label: 'Takeaway & Delivery', icon: Truck, tab: 'restaurant' as SectionTab },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-[#030813] text-slate-100 overflow-hidden flex flex-col justify-between">
      {/* Ambient background glow & atmospheric vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-950/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-amber-500/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,8,19,0.85)_100%)]" />
      </div>

      {/* TOP HEADER SECTION OF POSTER */}
      <div className="relative z-10 pt-6 pb-3 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col items-center"
        >
          {/* Royal Golden Crown */}
          <div className="relative mb-2">
            <Crown className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 drop-shadow-[0_4px_16px_rgba(245,158,11,0.6)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -inset-2 border border-dashed border-amber-400/20 rounded-full pointer-events-none"
            />
          </div>

          {/* Majestic Title */}
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.18em] gold-gradient-text drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)] uppercase">
            {brandTitle}
          </h1>

          {/* Subheading */}
          <h2 className="font-outfit text-base sm:text-2xl font-bold tracking-[0.32em] text-amber-200 uppercase mt-1">
            BAKERS & RESTAURANTS
          </h2>

          {/* City / Location pill */}
          <div className="flex items-center space-x-2 mt-1">
            <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-amber-400/70" />
            <p className="font-outfit text-xs sm:text-sm tracking-[0.35em] text-amber-300/90 uppercase font-semibold">
              MIRPUR • AZAD KASHMIR
            </p>
            <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          {/* Tagline */}
          <p className="font-playfair italic text-lg sm:text-2xl text-amber-100/95 tracking-wide mt-2 font-normal">
            “A Taste of Happiness”
          </p>
        </motion.div>
      </div>

      {/* MAIN VISUAL SHOWCASE: TOWER + FLOATING DELICACIES + RIGHT ICON PANEL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-4 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT: Quick Interactive Floor Selector / Legend */}
          <div className="order-3 lg:order-1 lg:col-span-3 space-y-2">
            <div className="bg-slate-950/70 border border-amber-500/30 rounded-2xl p-4 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center">
                  <Building className="w-3.5 h-3.5 mr-1.5" />
                  Explore Tower Floors
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full">
                  6 Levels
                </span>
              </div>

              <div className="space-y-2">
                {TOWER_LEVELS.map((lvl) => {
                  const isSelected = activeFloor === lvl.level;
                  return (
                    <button
                      key={lvl.level}
                      onClick={() => {
                        setActiveFloor(lvl.level);
                        onSelectTab(lvl.sectionId as SectionTab);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500/25 to-slate-900 border border-amber-400/60 shadow-lg'
                          : 'bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 hover:border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                            isSelected
                              ? 'bg-amber-500 text-slate-950 shadow-md'
                              : 'bg-slate-800 text-amber-300 group-hover:bg-amber-500/20'
                          }`}
                        >
                          L{lvl.level}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                            {lvl.title}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate max-w-[150px]">
                            {lvl.badge}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-amber-400 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40 group-hover:opacity-100'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Instant Section Jumps */}
              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px]">
                <button
                  onClick={() => onSelectTab('restaurant')}
                  className="p-2 bg-slate-900 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 rounded-lg text-amber-300 font-semibold text-center transition-all"
                >
                  🍽️ 1. Restaurant
                </button>
                <button
                  onClick={() => onSelectTab('rooms')}
                  className="p-2 bg-slate-900 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 rounded-lg text-amber-300 font-semibold text-center transition-all"
                >
                  🛏️ 2. Hotel Rooms
                </button>
                <button
                  onClick={() => onSelectTab('apartments')}
                  className="p-2 bg-slate-900 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 rounded-lg text-amber-300 font-semibold text-center transition-all"
                >
                  🏢 3. Apartments
                </button>
                <button
                  onClick={() => onSelectTab('pool')}
                  className="p-2 bg-slate-900 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 rounded-lg text-amber-300 font-semibold text-center transition-all"
                >
                  🏊 4. Sky Pool
                </button>
              </div>
            </div>
          </div>

          {/* CENTER: ILLUMINATED HOSPITALITY TOWER VISUALIZATION */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex flex-col items-center">
            
            {/* Tower Frame Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.2)] bg-[#071326]">
              {/* High resolution illuminated architecture image */}
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                alt="Hammad Hospitality Tower Mirpur"
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
              />

              {/* Golden hour / blue hour ambient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040915] via-transparent to-[#051124]/70" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-amber-950/40 mix-blend-color-dodge" />

              {/* Tower Interactive Floor Indicators overlay */}
              <div className="absolute inset-x-4 inset-y-6 flex flex-col justify-between pointer-events-none">
                {/* Level 6 Rooftop Pool Hotspot */}
                <div className="pointer-events-auto flex items-center justify-between bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/50 shadow-lg text-xs">
                  <div className="flex items-center space-x-1.5 text-cyan-300 font-bold">
                    <Waves className="w-3.5 h-3.5" />
                    <span>L6 Rooftop Infinity Pool</span>
                  </div>
                  <button
                    onClick={() => onSelectTab('pool')}
                    className="bg-cyan-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] hover:bg-cyan-400 transition-colors"
                  >
                    Explore
                  </button>
                </div>

                {/* Level 5 Serviced Apartments */}
                <div className="pointer-events-auto flex items-center justify-between bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-400/50 shadow-lg text-xs">
                  <div className="flex items-center space-x-1.5 text-amber-300 font-bold">
                    <Building className="w-3.5 h-3.5" />
                    <span>L5 Serviced Apartments</span>
                  </div>
                  <button
                    onClick={() => onSelectTab('apartments')}
                    className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] hover:bg-amber-400 transition-colors"
                  >
                    View
                  </button>
                </div>

                {/* Level 4 Executive Hotel Rooms */}
                <div className="pointer-events-auto flex items-center justify-between bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/50 shadow-lg text-xs">
                  <div className="flex items-center space-x-1.5 text-emerald-300 font-bold">
                    <BedDouble className="w-3.5 h-3.5" />
                    <span>L4 5-Star Hotel Rooms</span>
                  </div>
                  <button
                    onClick={() => onSelectTab('rooms')}
                    className="bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] hover:bg-emerald-400 transition-colors"
                  >
                    Rooms
                  </button>
                </div>

                {/* Level 2 & 3 Fine Dining & BBQ Courtyard */}
                <div className="pointer-events-auto flex items-center justify-between bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-orange-400/50 shadow-lg text-xs">
                  <div className="flex items-center space-x-1.5 text-orange-300 font-bold">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>L2-3 Restaurant & Live BBQ</span>
                  </div>
                  <button
                    onClick={() => onSelectTab('restaurant')}
                    className="bg-orange-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] hover:bg-orange-400 transition-colors"
                  >
                    Menu
                  </button>
                </div>

                {/* Level 1 Grand Bakery & Sweets Boutique */}
                <div className="pointer-events-auto flex items-center justify-between bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-300/60 shadow-lg text-xs">
                  <div className="flex items-center space-x-1.5 text-amber-200 font-bold">
                    <Cake className="w-3.5 h-3.5 text-amber-400" />
                    <span>L1 Bakery & Sweets Boutique</span>
                  </div>
                  <button
                    onClick={() => onSelectTab('bakery')}
                    className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] hover:brightness-110 transition-all"
                  >
                    Sweets
                  </button>
                </div>
              </div>

              {/* Bottom Badge Over Tower */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/85 backdrop-blur-md px-4 py-1 rounded-full border border-amber-500/40 text-[11px] font-semibold text-amber-300 whitespace-nowrap shadow-lg flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>120 Mian Mohammad Road • Mirpur AJK</span>
              </div>
            </div>

            {/* FLOATING DELICACIES ROW (Mirroring the circular/plated dishes in the poster) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-[440px] mt-4">
              {/* Mithai Gift Box */}
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                onClick={() => onSelectTab('bakery')}
                className="cursor-pointer bg-slate-950/80 border border-amber-500/30 rounded-2xl p-2 text-center backdrop-blur-md group hover:border-amber-400 transition-all shadow-lg"
              >
                <div className="w-14 h-14 mx-auto rounded-xl overflow-hidden border border-amber-500/40 shadow-inner mb-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1599785209796-786432b228bc?q=80&w=300&auto=format&fit=crop"
                    alt="Royal Sweets Mithai Box"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-[10px] font-bold text-amber-200 leading-tight">Royal Mithai</p>
                <span className="text-[9px] text-slate-400">Gift Boxes</span>
              </motion.div>

              {/* Layered Celebration Cake */}
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                onClick={() => onSelectTab('bakery')}
                className="cursor-pointer bg-slate-950/80 border border-amber-500/30 rounded-2xl p-2 text-center backdrop-blur-md group hover:border-amber-400 transition-all shadow-lg"
              >
                <div className="w-14 h-14 mx-auto rounded-xl overflow-hidden border border-amber-500/40 shadow-inner mb-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=300&auto=format&fit=crop"
                    alt="Fresh Celebration Cake"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-[10px] font-bold text-amber-200 leading-tight">Artisan Cakes</p>
                <span className="text-[9px] text-slate-400">Fresh Bakes</span>
              </motion.div>

              {/* Sizzling Seekh Kebabs */}
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                onClick={() => onSelectTab('restaurant')}
                className="cursor-pointer bg-slate-950/80 border border-amber-500/30 rounded-2xl p-2 text-center backdrop-blur-md group hover:border-amber-400 transition-all shadow-lg"
              >
                <div className="w-14 h-14 mx-auto rounded-xl overflow-hidden border border-amber-500/40 shadow-inner mb-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=300&auto=format&fit=crop"
                    alt="Sizzling Seekh Kebab"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-[10px] font-bold text-amber-200 leading-tight">Charcoal BBQ</p>
                <span className="text-[9px] text-slate-400">Seekh Kebabs</span>
              </motion.div>

              {/* Coffee / Café */}
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                onClick={() => onSelectTab('restaurant')}
                className="cursor-pointer bg-slate-950/80 border border-amber-500/30 rounded-2xl p-2 text-center backdrop-blur-md group hover:border-amber-400 transition-all shadow-lg"
              >
                <div className="w-14 h-14 mx-auto rounded-xl overflow-hidden border border-amber-500/40 shadow-inner mb-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=300&auto=format&fit=crop"
                    alt="Artisan Gold Cappuccino"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-[10px] font-bold text-amber-200 leading-tight">Gourmet Café</p>
                <span className="text-[9px] text-slate-400">Coffee Bar</span>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: FLOATING LUXURY PILL / BADGE CONTAINER (Matching reference image right panel exactly) */}
          <div className="order-2 lg:order-3 lg:col-span-3">
            <div className="bg-slate-950/85 border-2 border-amber-400/40 rounded-3xl p-4 sm:p-5 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
              
              {/* Header of the Right Pillar */}
              <div className="text-center pb-3 mb-2 border-b border-amber-500/30">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-400 block">
                  Signature Offerings
                </span>
                <p className="font-cinzel text-sm font-bold text-slate-100">
                  World-Class Hospitality
                </p>
              </div>

              {/* The exact items listed on the poster's right vertical bar */}
              <div className="space-y-2.5">
                {posterFeatureIcons.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <motion.button
                      key={feat.id}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectTab(feat.tab)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-slate-900/90 to-[#0A182F] hover:from-amber-500/20 hover:to-slate-900 border border-amber-500/25 hover:border-amber-400 transition-all text-left group shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                          <Icon className="w-4 h-4 text-amber-400 group-hover:text-slate-950 transition-colors" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-200 transition-colors">
                          {feat.label}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  );
                })}
              </div>

              {/* Call to action inside the panel */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Table or Stay</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BRAND FOOTER (Matching the poster's exact bottom layout) */}
      <div className="relative z-10 bg-[#02050B] border-t border-amber-500/30 py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Quality • Taste • Tradition with icons */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-xs sm:text-sm font-semibold text-amber-300 mb-2">
            <span className="flex items-center">
              <Star className="w-3.5 h-3.5 mr-1.5 text-amber-400 fill-amber-400" />
              Quality
            </span>
            <span className="text-amber-500/40">•</span>
            <span className="flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Taste
            </span>
            <span className="text-amber-500/40">•</span>
            <span className="flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Tradition
            </span>
          </div>

          {/* Slogan */}
          <h3 className="font-cinzel text-base sm:text-xl font-bold tracking-[0.15em] text-slate-100 uppercase">
            <span className="gold-gradient-text">{brandTitle}</span> – MORE THAN A BAKERY, IT’S AN EXPERIENCE
          </h3>

          {/* Location details */}
          <p className="font-outfit text-xs sm:text-sm tracking-wider text-amber-200/90 mt-1 font-medium">
            120 Mian Mohammad Road & Allama Iqbal Road, Mirpur AJK
          </p>

          <p className="text-[10px] text-slate-500 tracking-wider mt-1">
            Azad Jammu & Kashmir's Premier Hospitality & Luxury Destination
          </p>
        </div>
      </div>
    </div>
  );
};
