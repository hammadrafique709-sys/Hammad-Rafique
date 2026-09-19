/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { PosterView } from './components/PosterView';
import { RestaurantSection } from './components/RestaurantSection';
import { RoomsSection } from './components/RoomsSection';
import { ApartmentsSection } from './components/ApartmentsSection';
import { SwimmingPoolSection } from './components/SwimmingPoolSection';
import { BakerySection } from './components/BakerySection';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { SectionTab, MenuItem, CartItem } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<SectionTab>('poster');
  const [brandMode, setBrandMode] = useState<'hammad' | 'nafees'>('hammad');
  
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Unified Reservation Modal State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'table' | 'room' | 'apartment' | 'pool'>('table');
  const [bookingItemId, setBookingItemId] = useState<string>('');

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(i => {
          if (i.item.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(i => i.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const openBookingFor = (type: 'table' | 'room' | 'apartment' | 'pool', itemId: string = '') => {
    setBookingType(type);
    setBookingItemId(itemId);
    setIsBookingOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Top Fixed / Sticky Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => openBookingFor('table')}
        brandMode={brandMode}
        setBrandMode={setBrandMode}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentTab === 'poster' && (
          <PosterView
            onSelectTab={setCurrentTab}
            onOpenBooking={() => openBookingFor('table')}
            brandMode={brandMode}
          />
        )}

        {currentTab === 'restaurant' && (
          <RestaurantSection
            onAddToCart={handleAddToCart}
            onOpenBooking={() => openBookingFor('table')}
            brandMode={brandMode}
          />
        )}

        {currentTab === 'rooms' && (
          <RoomsSection
            onSelectRoomForBooking={(roomId) => openBookingFor('room', roomId)}
            brandMode={brandMode}
          />
        )}

        {currentTab === 'apartments' && (
          <ApartmentsSection
            onSelectApartmentForBooking={(aptId) => openBookingFor('apartment', aptId)}
            brandMode={brandMode}
          />
        )}

        {currentTab === 'pool' && (
          <SwimmingPoolSection
            onOpenBooking={() => openBookingFor('pool')}
            brandMode={brandMode}
          />
        )}

        {currentTab === 'bakery' && (
          <BakerySection
            onAddToCart={handleAddToCart}
            brandMode={brandMode}
          />
        )}
      </main>

      {/* Shared Footer with exact slogan and location details */}
      <Footer onSelectTab={setCurrentTab} brandMode={brandMode} />

      {/* Unified Digital Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
        initialItemId={bookingItemId}
        brandMode={brandMode}
      />

      {/* Takeaway & Mirpur Delivery Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        brandMode={brandMode}
      />
    </div>
  );
}
