import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Crown,
  Phone,
  Mail,
  User,
  Sparkles,
  BedDouble,
  UtensilsCrossed,
  Building,
  Waves,
  QrCode,
  Share2,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReservationData } from '../types';
import { ROOMS_DATA, APARTMENTS_DATA, BRAND_INFO } from '../data/hospitalityData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'table' | 'room' | 'apartment' | 'pool';
  initialItemId?: string;
  brandMode: 'hammad' | 'nafees';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'table',
  initialItemId = '',
  brandMode,
}) => {
  const [type, setType] = useState<'table' | 'room' | 'apartment' | 'pool'>(initialType);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(2);
  const [selectedItemId, setSelectedItemId] = useState(initialItemId);
  const [specialRequests, setSpecialRequests] = useState('');
  const [branch, setBranch] = useState('120 Mian Mohammad Road (Flagship Tower)');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const brandTitle = brandMode === 'hammad' ? 'HAMMAD' : 'NAFEES';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'HMD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E6BA46', '#06B6D4', '#FFFFFF', '#10B981']
      });
    } catch {
      // Fallback gracefully
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#06101E] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(245,158,11,0.2)] text-slate-100 my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/40 mb-2">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text uppercase">
                {brandTitle} VIP Reservation
              </h3>
              <p className="font-outfit text-xs text-slate-400 mt-1">
                Mirpur Azad Kashmir • Quality • Taste • Tradition
              </p>
            </div>

            {/* Type Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 bg-slate-950 p-1.5 rounded-2xl border border-white/5">
              <button
                type="button"
                onClick={() => setType('table')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all ${
                  type === 'table' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>1. Restaurant</span>
              </button>

              <button
                type="button"
                onClick={() => setType('room')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all ${
                  type === 'room' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BedDouble className="w-3.5 h-3.5" />
                <span>2. Rooms</span>
              </button>

              <button
                type="button"
                onClick={() => setType('apartment')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all ${
                  type === 'apartment' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>3. Apartments</span>
              </button>

              <button
                type="button"
                onClick={() => setType('pool')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all ${
                  type === 'pool' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Waves className="w-3.5 h-3.5" />
                <span>4. Sky Pool</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chaudhry Tariq"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 ... or UK +44 7..."
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Conditional Item Selectors */}
              {type === 'room' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Suite Type
                  </label>
                  <select
                    value={selectedItemId || ROOMS_DATA[0].id}
                    onChange={e => setSelectedItemId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {ROOMS_DATA.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.name} — PKR {r.pricePerNight.toLocaleString()}/night
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {type === 'apartment' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Serviced Apartment Layout
                  </label>
                  <select
                    value={selectedItemId || APARTMENTS_DATA[0].id}
                    onChange={e => setSelectedItemId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {APARTMENTS_DATA.map(a => (
                      <option key={a.id} value={a.id}>
                        {a.name} ({a.type})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                {type === 'table' ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="13:00">1:00 PM (Lunch)</option>
                      <option value="14:30">2:30 PM (Lunch)</option>
                      <option value="18:30">6:30 PM (Early Dinner)</option>
                      <option value="19:30">7:30 PM (Peak Dinner)</option>
                      <option value="21:00">9:00 PM (Late Dinner)</option>
                      <option value="22:30">10:30 PM (BBQ Night)</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Length of Stay (Nights)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={90}
                      value={nights}
                      onChange={e => setNights(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={guests}
                      onChange={e => setGuests(parseInt(e.target.value) || 1)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Branch / Location
                </label>
                <select
                  value={branch}
                  onChange={e => setBranch(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="120 Mian Mohammad Road (Flagship Tower)">
                    120 Mian Mohammad Road (Flagship 6-Story Tower)
                  </option>
                  <option value="Allama Iqbal Road Branch">
                    Allama Iqbal Road (Bakery, Café & Dining)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Special Instructions / Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. VIP Private Cabin required, anniversary cake with candle, airport pickup from Islamabad..."
                  value={specialRequests}
                  onChange={e => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-slate-950" />
                  <span>Confirm Reservation Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE / DIGITAL PASS */
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400 block">
                VIP Pass Confirmed
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                Reservation Priority Secured!
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-amber-300">{name}</strong>. Our front desk & concierge at {branch} has received your reservation.
              </p>
            </div>

            {/* Simulated Digital Boarding Card */}
            <div className="bg-slate-950 border-2 border-dashed border-amber-500/40 rounded-2xl p-5 max-w-md mx-auto text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Booking Reference</span>
                  <span className="font-mono text-base font-bold text-amber-400">
                    {bookingRef}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">Category</span>
                  <span className="text-xs font-bold text-emerald-400 uppercase">
                    {type.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 mb-3">
                <div>
                  <span className="text-slate-500 block text-[10px]">Date</span>
                  <span className="font-semibold text-white">{date}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Guests</span>
                  <span className="font-semibold text-white">{guests} Persons</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Contact</span>
                  <span className="font-semibold text-white">{phone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Location</span>
                  <span className="font-semibold text-amber-200 truncate block">
                    Mirpur AJK
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-slate-400">
                <span className="flex items-center text-amber-300">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Show at Concierge Desk
                </span>
                <span className="font-mono text-[10px]">HAMMAD-TOWER-AJK</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/923207203215?text=Assalam-o-Alaikum%2C%20I%20have%20booked%20${type}%20reservation%20${bookingRef}%20for%20${name}%20on%20${date}.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs font-semibold transition-colors"
              >
                Close Pass
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
