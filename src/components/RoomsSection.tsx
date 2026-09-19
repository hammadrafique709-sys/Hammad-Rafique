import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BedDouble,
  Users,
  Maximize2,
  Tv,
  Wifi,
  Coffee,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Building,
  ShieldCheck,
  Star
} from 'lucide-react';
import { RoomItem } from '../types';
import { ROOMS_DATA } from '../data/hospitalityData';

interface RoomsSectionProps {
  onSelectRoomForBooking: (roomId: string) => void;
  brandMode: 'hammad' | 'nafees';
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoomForBooking,
  brandMode,
}) => {
  const [currency, setCurrency] = useState<'PKR' | 'GBP' | 'USD'>('PKR');
  const [selectedGalleryRoom, setSelectedGalleryRoom] = useState<RoomItem>(ROOMS_DATA[0]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const brandName = brandMode === 'hammad' ? 'Hammad' : 'Nafees';

  // Currency converters based on typical exchange benchmarks
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

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* SECTION 2 HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-r from-slate-950 via-[#06241E] to-slate-950 p-6 sm:p-12 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BedDouble className="w-3.5 h-3.5 text-emerald-400" />
            <span>Section 2 • 5-Star Hotel Accommodations</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            {brandName} <span className="gold-gradient-text">Luxury Hotel Suites</span>
          </h2>

          <p className="font-outfit text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Experience world-standard five-star comfort in Mirpur Azad Kashmir. Each executive room and royal suite features acoustic soundproofing, plush hypoallergenic bedding, marble rain showers, and breathtaking vistas of Mirpur city and the Mangla foothills.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center text-xs text-emerald-300 font-semibold">
              <Star className="w-4 h-4 mr-1.5 text-amber-400 fill-amber-400" />
              Complimentary Hammad Breakfast Buffet
            </div>
            <div className="flex items-center text-xs text-emerald-300 font-semibold">
              <Wifi className="w-4 h-4 mr-1.5 text-emerald-400" />
              Dedicated 100 Mbps Wi-Fi 6
            </div>
            <div className="flex items-center text-xs text-emerald-300 font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" />
              24/7 Concierge & Armed Security
            </div>
          </div>

          {/* Currency Toggle for Diaspora convenience */}
          <div className="flex items-center space-x-3 mt-6">
            <span className="text-xs text-slate-400 font-medium">Currency Display:</span>
            <div className="bg-slate-900 border border-white/10 rounded-xl p-1 flex items-center space-x-1">
              {(['PKR', 'GBP', 'USD'] as const).map(cur => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === cur
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
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

      {/* FEATURED ROOM SUITE SPOTLIGHT */}
      <div className="bg-slate-950/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Interactive Room Showcase
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
              {selectedGalleryRoom.name}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block uppercase">Nightly Rate</span>
            <span className="font-cinzel text-xl sm:text-2xl font-bold text-amber-400">
              {formatPrice(selectedGalleryRoom.pricePerNight)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Large Photo & Mini Carousel */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl bg-slate-900">
              <img
                src={selectedGalleryRoom.gallery[activeImageIndex] || selectedGalleryRoom.image}
                alt={selectedGalleryRoom.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-300 border border-amber-500/30">
                {selectedGalleryRoom.floor}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-1">
              {selectedGalleryRoom.gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === i ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Room Specs & Amenities */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <p className="font-playfair italic text-amber-200/90 text-sm">
                “{selectedGalleryRoom.tagline}”
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Occupancy</span>
                  <span className="font-semibold text-slate-100 flex items-center mt-0.5">
                    <Users className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    {selectedGalleryRoom.occupancy}
                  </span>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Room Size</span>
                  <span className="font-semibold text-slate-100 flex items-center mt-0.5">
                    <Maximize2 className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    {selectedGalleryRoom.size}
                  </span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-300">
                Included Privileges:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedGalleryRoom.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectRoomForBooking(selectedGalleryRoom.id)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book {selectedGalleryRoom.name}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ALL ROOM OPTIONS LIST */}
      <div className="space-y-6">
        <div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100">
            Explore All Room Categories
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Choose the suite best suited for your stay in Mirpur AJK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS_DATA.map(room => {
            const isSelected = selectedGalleryRoom.id === room.id;
            return (
              <div
                key={room.id}
                className={`bg-slate-950 rounded-2xl overflow-hidden border transition-all flex flex-col justify-between ${
                  isSelected ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-2xl' : 'border-white/10 hover:border-amber-500/40'
                }`}
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">
                    {room.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-amber-300 font-semibold">
                    {formatPrice(room.pricePerNight)} / night
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-cinzel text-base font-bold text-slate-100">
                      {room.name}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1.5 line-clamp-2">
                      {room.tagline}
                    </p>
                    <div className="flex items-center space-x-4 mt-3 text-[11px] text-slate-300">
                      <span>👥 {room.occupancy}</span>
                      <span>📐 {room.size}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedGalleryRoom(room);
                        setActiveImageIndex(0);
                      }}
                      className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 rounded-xl text-xs font-semibold transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onSelectRoomForBooking(room.id)}
                      className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-md"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
