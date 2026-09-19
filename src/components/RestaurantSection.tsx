import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  UtensilsCrossed,
  Flame,
  Coffee,
  Sparkles,
  Clock,
  Users,
  Calendar,
  ShoppingBag,
  Plus,
  Check,
  ShieldCheck,
  Star,
  MapPin
} from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/hospitalityData';

interface RestaurantSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenBooking: () => void;
  brandMode: 'hammad' | 'nafees';
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  onAddToCart,
  onOpenBooking,
  brandMode,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const brandName = brandMode === 'hammad' ? 'Hammad' : 'Nafees';

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'bbq', label: '🔥 Live Charcoal BBQ' },
    { id: 'restaurant', label: '🥘 Shinwari & Handi' },
    { id: 'fastfood', label: '🍔 Gourmet Fast Food' },
    { id: 'cafe', label: '☕ Café & Drinks' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS.filter(item => ['bbq', 'restaurant', 'fastfood', 'cafe'].includes(item.category))
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const diningHalls = [
    {
      title: 'Grand Glass Atrium Hall',
      capacity: 'Seats 160 Guests',
      desc: 'Double-height illuminated glass atrium with panoramic street views of Mian Mohammad Road. Ambient piano & acoustic background music.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop',
      badge: 'Main Dining'
    },
    {
      title: 'Executive VIP Family Cabins',
      capacity: '8 to 20 Guests per cabin',
      desc: 'Private soundproofed family suites with curtained enclosures, plush leather seating, and dedicated table-side butler service.',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop',
      badge: 'Family Privacy'
    },
    {
      title: 'Open-Air Rooftop BBQ Terrace',
      capacity: 'Seats 90 Guests',
      desc: 'Under the starlit Mirpur night sky with live open charcoal pits, sizzling tandoor, and gentle valley breezes.',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop',
      badge: 'Live Grilling'
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* SECTION 1 HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-slate-950 via-[#0A182F] to-slate-950 p-6 sm:p-12 shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 1 • Culinary Destination</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            {brandName} <span className="gold-gradient-text">Fine Dining & BBQ</span>
          </h2>

          <p className="font-outfit text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            From the fiery embers of our live charcoal barbecue pit to slow-simmered Shinwari mutton karahis, gourmet burgers, and rich hand-tossed bread. An authentic celebration of Kashmiri hospitality, heritage recipes, and international flair.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400" />
              100% Prime Halal Cuts
            </div>
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <Clock className="w-4 h-4 mr-1.5 text-amber-400" />
              Served Fresh 24/7
            </div>
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <MapPin className="w-4 h-4 mr-1.5 text-amber-400" />
              120 Mian Mohammad Rd & Allama Iqbal Rd
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Reserve a Dining Table</span>
            </button>
            <a
              href="tel:+923207203215"
              className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-amber-200 font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <span>Call For Delivery: 0320 7203215</span>
            </a>
          </div>
        </div>
      </div>

      {/* DINING SPACES / ATMOSPHERE */}
      <div className="space-y-6">
        <div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-amber-400" />
            Dining Atmospheres & Private Halls
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Designed for royal family gatherings, overseas homecoming celebrations, and executive business dinners in Mirpur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diningHalls.map((hall, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/20 shadow-xl flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/40 text-[11px] font-bold text-amber-300">
                  {hall.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-slate-200 font-medium">
                  {hall.capacity}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {hall.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {hall.desc}
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="mt-4 w-full py-2 bg-slate-900 hover:bg-amber-500/20 border border-white/10 hover:border-amber-400/40 rounded-lg text-xs font-semibold text-amber-300 transition-colors"
                >
                  Book This Area
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SIGNATURE CULINARY MENU */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100">
              Signature Menu & Specialties
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Select any dish to order for immediate table serving or doorstep takeaway delivery across Mirpur.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-slate-950/80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-400/50 shadow-xl transition-all flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase shadow-md">
                    {item.badge}
                  </div>
                )}
                {item.spicyLevel && item.spicyLevel > 0 && (
                  <div className="absolute top-3 right-3 bg-red-950/80 border border-red-500/50 text-red-300 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center space-x-1">
                    <Flame className="w-3 h-3 text-red-400" />
                    <span>Spicy</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-cinzel text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  {item.urduName && (
                    <p className="text-amber-400/80 text-xs font-serif mt-0.5">
                      {item.urduName}
                    </p>
                  )}
                  <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Price</span>
                    <span className="font-cinzel text-lg font-bold text-amber-400">
                      PKR {item.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-md ${
                      addedItemIds[item.id]
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95'
                    }`}
                  >
                    {addedItemIds[item.id] ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
