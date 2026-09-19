import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cake,
  Boxes,
  Sparkles,
  ShoppingBag,
  Check,
  Gift,
  Heart,
  ShieldCheck,
  Star,
  Clock
} from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/hospitalityData';

interface BakerySectionProps {
  onAddToCart: (item: MenuItem) => void;
  brandMode: 'hammad' | 'nafees';
}

export const BakerySection: React.FC<BakerySectionProps> = ({
  onAddToCart,
  brandMode,
}) => {
  const [filter, setFilter] = useState<'all' | 'sweets' | 'bakery'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const brandName = brandMode === 'hammad' ? 'Hammad' : 'Nafees';

  const bakeryItems = MENU_ITEMS.filter(item => {
    if (filter === 'sweets') return item.category === 'sweets';
    if (filter === 'bakery') return item.category === 'bakery';
    return item.category === 'sweets' || item.category === 'bakery';
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-400/40 bg-gradient-to-r from-slate-950 via-[#261C08] to-slate-950 p-6 sm:p-12 shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cake className="w-3.5 h-3.5 text-amber-400" />
            <span>Artisan Bakery & Royal Mithai Boutique</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            {brandName} <span className="gold-gradient-text">Cakes & Royal Sweets</span>
          </h2>

          <p className="font-outfit text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Mirpur’s beloved taste of happiness since 1995. Fresh tiered celebration cakes crafted with Belgian chocolates, traditional Desi Ghee Mithai gift hampers for overseas family gifts, and morning croissants baked warm every dawn.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <Gift className="w-4 h-4 mr-1.5 text-amber-400" />
              Special Gold Embossed Gift Packing
            </div>
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400" />
              100% Pure Desi Ghee Sweets
            </div>
            <div className="flex items-center text-xs text-amber-300 font-semibold">
              <Clock className="w-4 h-4 mr-1.5 text-amber-400" />
              Same-Day Cake Customization & Delivery
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100">
            Artisan Collection
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            Carefully packaged in temperature-safe luxury containers for takeout or local delivery.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === 'all' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setFilter('sweets')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === 'sweets' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Royal Mithai
          </button>
          <button
            onClick={() => setFilter('bakery')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === 'bakery' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Artisan Cakes
          </button>
        </div>
      </div>

      {/* BAKERY & SWEETS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bakeryItems.map(item => (
          <div
            key={item.id}
            className="bg-slate-950/80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-400/50 shadow-xl transition-all flex flex-col group"
          >
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {item.badge && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase shadow-md">
                  {item.badge}
                </div>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-cinzel text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h4>
                {item.urduName && (
                  <p className="text-amber-400/80 text-xs font-serif mt-0.5">
                    {item.urduName}
                  </p>
                )}
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Price</span>
                  <span className="font-cinzel text-lg font-bold text-amber-400">
                    PKR {item.price.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-md ${
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
                      <span>Order Now</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
