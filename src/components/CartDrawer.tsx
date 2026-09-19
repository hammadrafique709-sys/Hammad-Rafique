import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MapPin,
  Clock,
  CheckCircle2,
  Truck,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  brandMode: 'hammad' | 'nafees';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  brandMode,
}) => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [sector, setSector] = useState('Sector F-1, Mirpur');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  const brandTitle = brandMode === 'hammad' ? 'HAMMAD' : 'NAFEES';

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = deliveryType === 'delivery' && items.length > 0 ? 150 : 0;
  const total = subtotal + deliveryFee;

  const mirpurSectors = [
    'Sector F-1, Mirpur',
    'Sector F-2, Mirpur',
    'Sector F-3, Mirpur',
    '120 Mian Mohammad Road (Flagship)',
    'Allama Iqbal Road (Near Chungi 4)',
    'Sector C-1 / C-2, Mirpur',
    'Sector C-3 / C-4, Mirpur',
    'Sector D-4 / Housing Colony',
    'Mangla Road / Cantt Area',
    'New City Mirpur / Islamgarh Road',
  ];

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const handleWhatsAppOrder = () => {
    const itemsSummary = items
      .map(i => `• ${i.quantity}x ${i.item.name} (PKR ${i.item.price * i.quantity})`)
      .join('%0A');

    const message = `*NEW ORDER - ${brandTitle} BAKERS & RESTAURANTS*%0A%0A*Customer:* ${customerName || 'Guest'}%0A*Phone:* ${customerPhone || 'Not provided'}%0A*Mode:* ${deliveryType === 'delivery' ? 'Doorstep Delivery' : 'Tower Pickup'}%0A*Address:* ${deliveryType === 'delivery' ? sector + ' - ' + addressDetails : 'Self-Pickup at 120 Mian Mohammad Rd'}%0A%0A*Order Items:*%0A${itemsSummary}%0A%0A*Subtotal:* PKR ${subtotal.toLocaleString()}%0A*Delivery:* PKR ${deliveryFee}%0A*Total Bill:* PKR ${total.toLocaleString()}%0A%0A*Note:* ${specialNote || 'None'}`;

    window.open(`https://wa.me/923207203215?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="w-full max-w-md bg-[#050C18] border-l border-amber-500/30 h-full flex flex-col justify-between shadow-2xl text-slate-100"
      >
        {/* Top Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-white">
                Takeaway & Delivery
              </h3>
              <p className="text-[10px] text-amber-300">
                Mirpur AJK Direct Service
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {!isOrdered ? (
            <>
              {/* Delivery vs Pickup Toggle */}
              <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                    deliveryType === 'delivery'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Doorstep Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                    deliveryType === 'pickup'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Tower Pickup</span>
                </button>
              </div>

              {/* Items List */}
              {items.length === 0 ? (
                <div className="text-center py-16 text-slate-500 space-y-3">
                  <ShoppingBag className="w-12 h-12 mx-auto stroke-1 opacity-40 text-amber-400" />
                  <p className="text-xs">Your takeaway cart is currently empty.</p>
                  <p className="text-[11px] text-slate-400">
                    Explore our BBQ, Cakes, Mithai & Fast Food to add items.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(cartItem => (
                    <div
                      key={cartItem.item.id}
                      className="bg-slate-950/80 border border-white/5 rounded-2xl p-3 flex items-center justify-between gap-3"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-amber-500/20"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-100 truncate">
                          {cartItem.item.name}
                        </h4>
                        <span className="text-[11px] text-amber-400 font-semibold block mt-0.5">
                          PKR {(cartItem.item.price * cartItem.quantity).toLocaleString()}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-1 bg-slate-900 border border-white/10 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                          className="p-1 rounded hover:bg-slate-800 text-slate-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1.5">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                          className="p-1 rounded hover:bg-slate-800 text-slate-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(cartItem.item.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-950/40"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Delivery Details Form */}
              {items.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                    Contact & Delivery Location
                  </span>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Raja Usman"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {deliveryType === 'delivery' && (
                    <>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Mirpur Sector / Zone</label>
                        <select
                          value={sector}
                          onChange={e => setSector(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          {mirpurSectors.map(sec => (
                            <option key={sec} value={sec}>{sec}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">House / Street Address</label>
                        <input
                          type="text"
                          placeholder="Street 14, House 22-B..."
                          value={addressDetails}
                          onChange={e => setAddressDetails(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Special Chef Note</label>
                    <input
                      type="text"
                      placeholder="e.g. Extra raita, Happy Birthday cake writing..."
                      value={specialNote}
                      onChange={e => setSpecialNote(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            /* ORDER COMPLETE SCREEN */
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-white">
                Order Received!
              </h4>
              <p className="text-xs text-slate-300">
                Our kitchen at {brandTitle} Bakers & Restaurants is preparing your items.
              </p>
              <div className="p-4 bg-slate-950 rounded-2xl border border-white/10 text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Bill Total:</span>
                  <span className="font-bold text-amber-400">PKR {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery To:</span>
                  <span className="text-slate-200">{sector}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Time:</span>
                  <span className="text-emerald-400 font-semibold">30–45 Mins</span>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Order to WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsOrdered(false);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full py-2.5 bg-slate-900 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Total & Checkout Actions */}
        {!isOrdered && items.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-slate-950/95 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal:</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Delivery Charge:</span>
                <span>{deliveryFee > 0 ? `PKR ${deliveryFee}` : 'FREE'}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-white/5">
                <span>Total Amount:</span>
                <span className="font-cinzel text-amber-400 text-base">
                  PKR {total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </button>

              <button
                type="button"
                onClick={handleCheckout}
                className="py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Place Order</span>
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
