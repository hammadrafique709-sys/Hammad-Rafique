export type SectionTab = 'poster' | 'restaurant' | 'rooms' | 'apartments' | 'pool' | 'bakery';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'bakery' | 'sweets' | 'fastfood' | 'restaurant' | 'bbq' | 'cafe';
  description: string;
  price: number;
  image: string;
  badge?: string;
  isPopular?: boolean;
  spicyLevel?: number;
}

export interface RoomItem {
  id: string;
  name: string;
  category: 'Deluxe' | 'Executive' | 'Suite' | 'Presidential';
  tagline: string;
  pricePerNight: number;
  occupancy: string;
  bed: string;
  size: string;
  image: string;
  gallery: string[];
  features: string[];
  floor: string;
}

export interface ApartmentItem {
  id: string;
  name: string;
  type: '1-Bedroom' | '2-Bedroom' | '3-Bedroom Penthouse';
  tagline: string;
  dailyRate: number;
  monthlyRate: number;
  size: string;
  occupancy: string;
  image: string;
  gallery: string[];
  features: string[];
  floor: string;
  idealFor: string;
}

export interface PoolAmenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  type: 'table' | 'room' | 'apartment' | 'pool';
  name: string;
  phone: string;
  email: string;
  date: string;
  time?: string;
  guests: number;
  nights?: number;
  selectedItemId?: string;
  specialRequests?: string;
  branch: string;
}
