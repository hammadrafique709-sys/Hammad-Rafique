import { MenuItem, RoomItem, ApartmentItem } from '../types';

export const BRAND_INFO = {
  name: 'HAMMAD',
  subBrand: 'BAKERS & RESTAURANTS',
  city: 'MIRPUR • AZAD KASHMIR',
  tagline: 'A Taste of Happiness',
  motto: 'MORE THAN A BAKERY, IT’S AN EXPERIENCE',
  pillars: ['Quality', 'Taste', 'Tradition'],
  branches: [
    {
      id: 'main-tower',
      name: 'Flagship Hospitality Tower',
      address: '120 Mian Mohammad Road, Mirpur AJK',
      phone: '0320 7203215',
      whatsapp: '+92 320 7203215',
      hours: 'Open 24/7 (Bakery: 7:00 AM - 1:30 AM)',
      features: ['6-Story Tower', 'Fine Dining', 'Hotel Suites', 'Luxury Apartments', 'Sky Infinity Pool', 'Artisan Bakery'],
    },
    {
      id: 'iqbal-road',
      name: 'Allama Iqbal Road Branch',
      address: 'Allama Iqbal Road, Near Chungi No. 4, Mirpur AJK',
      phone: '+92 5827 435500',
      whatsapp: '+92 301 5567890',
      hours: '8:00 AM - Midnight',
      features: ['Artisan Bakery', 'Royal Mithai Boutique', 'Café & Fast Food', 'Takeaway Express'],
    }
  ]
};

export const TOWER_LEVELS = [
  {
    level: 6,
    title: 'Rooftop Sky Pool & Sun Deck',
    arabic: 'حمام السباحة السماوي',
    subtitle: 'Heated Infinity Pool, Sunset Loungers & Open-Air BBQ Terrace',
    sectionId: 'pool',
    badge: 'Panoramic Views',
    color: 'from-cyan-500/20 to-blue-600/20',
    border: 'border-cyan-500/40',
  },
  {
    level: 5,
    title: 'Serviced Luxury Apartments',
    arabic: 'شقق فندقية فاخرة',
    subtitle: '1, 2 & 3-Bed Panoramic Residences for Extended Stays & Diaspora Guests',
    sectionId: 'apartments',
    badge: 'Extended Living',
    color: 'from-amber-500/20 to-yellow-600/20',
    border: 'border-amber-500/40',
  },
  {
    level: 4,
    title: 'Executive Hotel Rooms & Suites',
    arabic: 'غرف وأجنحة فندقية',
    subtitle: '5-Star Luxury Accommodations with Kashmir Hills & Skyline Vistas',
    sectionId: 'rooms',
    badge: '5-Star Comfort',
    color: 'from-emerald-500/20 to-teal-600/20',
    border: 'border-emerald-500/40',
  },
  {
    level: 2,
    title: 'Fine Dining & Live BBQ Courtyard',
    arabic: 'مطعم فاخر ومشويات حية',
    subtitle: 'Traditional Shinwari, Mutton Handi, Sizzling Seekh Kebabs & Continental Buffet',
    sectionId: 'restaurant',
    badge: 'Culinary Masterpiece',
    color: 'from-orange-500/20 to-red-600/20',
    border: 'border-orange-500/40',
  },
  {
    level: 1,
    title: 'Grand Artisan Bakery & Sweets Boutique',
    arabic: 'المخبز الملكي والحلويات',
    subtitle: 'Fresh Celebration Cakes, Royal Mithai, Gourmet Café & Fast Food Express',
    sectionId: 'bakery',
    badge: 'Heritage Since 1995',
    color: 'from-amber-400/20 to-amber-600/20',
    border: 'border-amber-400/40',
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // BBQ & Restaurant
  {
    id: 'res-1',
    name: 'Royal Kashmiri Seekh Kebab Sizzler',
    urduName: 'کشمیری سیخ کباب',
    category: 'bbq',
    description: 'Charcoal grilled hand-minced tender mutton kebabs marinated in saffron, crushed cumin, green chilies, served sizzling with mint raita and butter naan.',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop',
    badge: "Chef's Signature",
    isPopular: true,
    spicyLevel: 2,
  },
  {
    id: 'res-2',
    name: 'Special Shinwari Dumba Karahi',
    urduName: 'شنواری دنبہ کڑاہی',
    category: 'restaurant',
    description: 'Fresh prime mutton cooked in organic rendered fat with vine-ripened tomatoes, fresh ginger slivers, and coarse black pepper. Authentic Pashtun tradition.',
    price: 3400,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
    badge: 'Pure Heritage',
    isPopular: true,
    spicyLevel: 1,
  },
  {
    id: 'res-3',
    name: 'Murgh Malai Boti Platter',
    urduName: 'مرغ ملائی بوٹی',
    category: 'bbq',
    description: 'Boneless chicken cubes soaked overnight in clotted cream, white pepper, garlic, and cardamom, grilled over aromatic mangrove embers.',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    badge: 'Mild & Creamy',
    isPopular: true,
    spicyLevel: 1,
  },
  {
    id: 'res-4',
    name: 'Royal Mutton Dum Biryani',
    urduName: 'شاہی مٹن دم بریانی',
    category: 'restaurant',
    description: 'Fragrant aged Basmati rice layered with slow-simmered spiced mutton, saffron milk, fried golden onions, dried plums, and kewra water.',
    price: 1550,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    spicyLevel: 2,
  },
  // Sweets / Mithai
  {
    id: 'swt-1',
    name: 'Hammad Signature Royal Sweets Gift Box (1kg)',
    urduName: 'شاہی مٹھائی باکس',
    category: 'sweets',
    description: 'An opulent royal assortment featuring Gulab Jamun, Pistachio Cham Cham, Almond Barfi, Kaju Katli, Motichoor Ladoo, and Balushahi in a gold-embossed velvet box.',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1599785209796-786432b228bc?q=80&w=800&auto=format&fit=crop',
    badge: 'Mirpur Bestseller',
    isPopular: true,
  },
  {
    id: 'swt-2',
    name: 'Warm Rosewater Gulab Jamun with Pistachio',
    urduName: 'گرما گرم گلاب جامن',
    category: 'sweets',
    description: 'Soft khoya dumplings gently fried to mahogany gold, soaked in fragrant cardamom & rose petal syrup, topped with silver leaf and sliced Iranian pistachios.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14d48?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'swt-3',
    name: 'Peshawari Sohan Halwa Special Tin',
    urduName: 'سوہن حلوہ شاہی',
    category: 'sweets',
    description: 'Traditional slow-caramelized wheat germ halwa loaded with whole walnuts, almonds, and pure desi ghee. Long-lasting favorite for overseas travelers.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop',
    badge: 'Desi Ghee',
  },
  // Bakery & Cakes
  {
    id: 'bak-1',
    name: 'Golden 24K Royal Celebration Cake (2 lbs)',
    urduName: 'گولڈن رائل کیک',
    category: 'bakery',
    description: 'Multi-layer Belgian white chocolate sponge coated in whipped vanilla bean ganache, edible 24K gold flakes, macaron crowns, and fresh berries.',
    price: 3600,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop',
    badge: 'Celebrations',
    isPopular: true,
  },
  {
    id: 'bak-2',
    name: 'Pistachio Milk Tres Leches Slice',
    urduName: 'پستہ ٹریس لیچیز',
    category: 'bakery',
    description: 'Airy sponge cake soaked in a rich saffron-cardamom three-milk infusion, topped with whipped chantilly and roasted Afghan pistachios.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bak-3',
    name: 'French Butter Croissants & Danish Box (4 pcs)',
    urduName: 'فرانسیسی مکھن کروسینٹ',
    category: 'bakery',
    description: 'Freshly baked daily at 6:30 AM using pure European butter. Flaky, golden, honeycomb crumb served with natural fruit preserves.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
  },
  // Fast Food & Café
  {
    id: 'fst-1',
    name: 'Hammad Gourmet Tower Monster Burger',
    urduName: 'ہمارا سپیشل ٹاور برگر',
    category: 'fastfood',
    description: 'Double hand-smashed beef chuck patties, melted smoked cheddar, crispy turkey bacon, caramelized sweet onions, secret house relish in toasted brioche bun with peri fries.',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    badge: 'Loaded',
    isPopular: true,
    spicyLevel: 1,
  },
  {
    id: 'fst-2',
    name: 'Artisan Hazelnut Gold Cappuccino',
    urduName: 'آرٹیسن کاپی چینو',
    category: 'cafe',
    description: 'Double shot of single-origin Colombian espresso with silky steamed microfoam, roasted hazelnut drizzle, and dusted cinnamon gold.',
    price: 590,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
  }
];

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'room-deluxe',
    name: 'Deluxe Executive King Room',
    category: 'Deluxe',
    tagline: 'Refined modern luxury tailored for discerning business and leisure visitors',
    pricePerNight: 18500,
    occupancy: '2 Adults, 1 Child',
    bed: 'King-size Pillow-top Bed',
    size: '42 sq. meters / 450 sq. ft',
    floor: 'Floor 4 (Executive Wing)',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      'Complimentary Gourmet Hammad Breakfast Buffet',
      'High-Speed Wi-Fi 6 (100 Mbps)',
      '55-inch 4K Smart IPTV with International Channels',
      'Italian Marble Rain Shower & Luxury Toiletries',
      'Nespresso Coffee Bar & Complimentary Bakery Bites',
      'Direct Elevator Access to Rooftop Pool & Gym'
    ]
  },
  {
    id: 'room-suite',
    name: 'Royal Panorama Suite with Balcony',
    category: 'Suite',
    tagline: 'Expansive master suite featuring private wraparound terrace overlooking Mirpur city',
    pricePerNight: 29500,
    occupancy: '3 Adults or 2 Adults + 2 Children',
    bed: 'Super King Bed + Plush Daybed',
    size: '68 sq. meters / 730 sq. ft',
    floor: 'Floor 4 (Corner Vantage)',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      'Private Scenic Balcony with Outdoor Seating',
      'Dedicated Living Lounge with Chesterfield Sofa',
      'Deep Soaking Freestanding Bathtub with City Views',
      '24/7 Dedicated In-Room Dining & Concierge',
      'Complimentary Airport / Mangla Dam Transfer option',
      'VIP Access to Rooftop Heated Swimming Pool'
    ]
  },
  {
    id: 'room-presidential',
    name: 'The Royal Hammad Presidential Suite',
    category: 'Presidential',
    tagline: 'The pinnacle of Mirpur hospitality — state-of-the-art opulence with private butler',
    pricePerNight: 48000,
    occupancy: '4 Adults',
    bed: 'Grand Master Suite + Adjoining Guest Room',
    size: '115 sq. meters / 1,240 sq. ft',
    floor: 'Floor 4 (Exclusive Penthouse Wing)',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      'Private Dining Room for 8 with Chandelier',
      'Dedicated 24/7 Private Butler & Chef Consultation',
      'Jacuzzi Hot Tub & Steam Shower Suite',
      'Custom Artisan Welcome Basket with Royal Mithai & Fresh Cakes',
      'Secured Keycard Private Floor Access',
      'Reserved Private Poolside Cabana on Level 6'
    ]
  }
];

export const APARTMENTS_DATA: ApartmentItem[] = [
  {
    id: 'apt-1bed',
    name: 'The Executive Studio Residence',
    type: '1-Bedroom',
    tagline: 'Modern, fully furnished apartment ideal for visiting professionals and couples',
    dailyRate: 22000,
    monthlyRate: 240000,
    size: '60 sq. meters / 645 sq. ft',
    occupancy: '2 Guests',
    floor: 'Floor 5 (East Wing)',
    idealFor: 'Solo travelers, overseas couples visiting family in Mirpur',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      'Designer Italian Open-Concept Kitchenette with Induction Hob',
      'Washer & Dryer in-unit',
      'Daily Fresh Bakery Bread & Milk Delivery',
      'Weekly Full Housekeeping & Linen Change',
      'Underground Secured Valet Parking Space',
      'Dedicated 100 Mbps Fiber Optical Internet'
    ]
  },
  {
    id: 'apt-2bed',
    name: 'The Grand Kashmir Family Residence',
    type: '2-Bedroom',
    tagline: 'Spacious dual-bedroom sanctuary created for diaspora families visiting Azad Kashmir',
    dailyRate: 36000,
    monthlyRate: 380000,
    size: '105 sq. meters / 1,130 sq. ft',
    occupancy: '4-5 Guests',
    floor: 'Floor 5 (South Facing)',
    idealFor: 'Overseas Pakistani families (UK/US/Gulf) on holiday or weddings',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab32f?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab32f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      'Two King En-Suite Bedrooms with Walk-in Closets',
      'Full Gourmet Kitchen with Double Door Fridge, Oven & Microwave',
      'Large Living & Dining Area with 6-Seater Dining Table',
      'Panoramic Balcony with views of Mian Mohammad Road',
      'Child-Friendly Facilities & High Chair upon request',
      'Complimentary Daily Pool Passes for all 4 occupants'
    ]
  },
  {
    id: 'apt-3bed',
    name: 'The Royal Penthouse Residence',
    type: '3-Bedroom Penthouse',
    tagline: 'Ultra-luxurious 3-bedroom duplex residence with private rooftop terrace access',
    dailyRate: 55000,
    monthlyRate: 550000,
    size: '170 sq. meters / 1,830 sq. ft',
    occupancy: '6-8 Guests',
    floor: 'Floor 5 & Private Access to Level 6',
    idealFor: 'Large families, wedding parties, VIP delegations',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      '3 Master Suites with Private Marble En-Suites',
      'Private Direct Internal Elevator to Sky Pool Deck',
      'Sprawling Entertaining Salon with Bang & Olufsen Sound System',
      'Double Dedicated Garage Parking with EV Charger',
      'Personal Butler & Daily Customized Chef Menus Available',
      'Complimentary Hammad Bakery VIP Celebration Hamper on Arrival'
    ]
  }
];

export const POOL_FEATURES = [
  {
    title: 'Temperature-Controlled Azure Waters',
    desc: 'Maintained at a soothing 28°C-30°C year-round, ideal for sunrise swims and refreshing evening twilight dips.',
    icon: 'Thermometer'
  },
  {
    title: 'Mirpur Skyline & Mountain Panorama',
    desc: 'Perched on the 6th floor rooftop, experience 360-degree vistas stretching from Mian Mohammad Road to the foothills of Mangla.',
    icon: 'Compass'
  },
  {
    title: 'Private Luxury Sun Cabanas',
    desc: 'Curtained VIP cabanas fitted with daybeds, cooling mist fans, towel service, and dedicated poolside attendant.',
    icon: 'Sun'
  },
  {
    title: 'Rooftop Refreshment Bar & High Tea',
    desc: 'Sip on fresh mint lemonade, iced cold-brews, and fresh pastries straight from Hammad Bakery without leaving the pool deck.',
    icon: 'Coffee'
  },
  {
    title: 'Dedicated Family & Ladies Hours',
    desc: 'Respecting local culture with complete privacy: Ladies-only morning sessions with female attendants and certified lifeguards.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Kids Splash & Shallow Lounge Zone',
    desc: 'Gentle 0.4m shallow pool with water fountains designed safely for young swimmers under lifeguard surveillance.',
    icon: 'Sparkles'
  }
];

export const POOL_SCHEDULE = [
  { time: '06:30 AM - 09:30 AM', category: 'Morning Lap Swim & Sunrise Yoga', access: 'All Hotel Guests & Residents' },
  { time: '09:30 AM - 01:30 PM', category: 'Ladies-Only Exclusive Hours', access: 'Complete Privacy & Female Staff' },
  { time: '02:00 PM - 06:30 PM', category: 'Family & Children Splash Hours', access: 'Open to Families, Pass Holders' },
  { time: '07:00 PM - 11:30 PM', category: 'Twilight Sky Lounge & Evening Swim', access: 'Adults, Hotel Guests & VIP Cabanas' },
];
