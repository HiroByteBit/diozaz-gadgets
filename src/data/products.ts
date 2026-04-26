export interface Product {
  id: string;
  name: string;
  category: 'iPhone' | 'MacBook' | 'iPad' | 'Watch' | 'AirPods';
  condition: 'New' | 'Certified Pre-owned' | 'Used - Good';
  image: string;
  gallery: string[];
  description: string;
  fullSpecs: string[];
  basePrice: number;
  rating: number;
  reviews: number;
  isFlashSale?: boolean;
  saleEndTime?: string;
  stockCount: number; // Will be set to 5 for all as requested
  variants: {
    colors: { name: string; code: string }[];
    storages: { size: string; extraPrice: number }[];
  };
}

const commonColors = [
  { name: "Pink", code: "#FFC0CB" },
  { name: "White", code: "#FFFFFF" }
];

export const products: Product[] = [
  // --- iPhones ---
  {
    id: "IP16-PRO",
    name: "iPhone 16 Pro",
    category: 'iPhone',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=1000&auto=format&fit=crop"],
    description: "The most powerful iPhone ever with the A18 Pro chip and a stunning Grade 5 Titanium design.",
    fullSpecs: ["A18 Pro chip", "6.3-inch Super Retina XDR", "Pro Camera system", "4K 120 fps Dolby Vision"],
    basePrice: 69990,
    rating: 4.9,
    reviews: 1240,
    isFlashSale: true,
    saleEndTime: "2026-04-22T23:59:59",
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "128GB", extraPrice: 0 },
        { size: "256GB", extraPrice: 7000 },
        { size: "512GB", extraPrice: 14000 }
      ]
    }
  },
  {
    id: "IP16-BASE",
    name: "iPhone 16",
    category: 'iPhone',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop"],
    description: "Built for Apple Intelligence with the new Camera Control button and ultra-vibrant colors.",
    fullSpecs: ["A18 chip", "6.1-inch Display", "New Camera Control", "Action Button"],
    basePrice: 54990,
    rating: 4.7,
    reviews: 850,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "128GB", extraPrice: 0 },
        { size: "256GB", extraPrice: 6000 }
      ]
    }
  },
  {
    id: "IP15-PRO-MAX",
    name: "iPhone 15 Pro Max",
    category: 'iPhone',
    condition: 'Certified Pre-owned',
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop"],
    description: "Pro Max performance with a massive display and the first 5x Optical Zoom on an iPhone.",
    fullSpecs: ["A17 Pro chip", "6.7-inch Display", "Titanium Frame", "USB-C Support"],
    basePrice: 58000,
    rating: 4.8,
    reviews: 2100,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "256GB", extraPrice: 0 },
        { size: "512GB", extraPrice: 8000 }
      ]
    }
  },
  {
    id: "IP14-PRO",
    name: "iPhone 14 Pro",
    category: 'iPhone',
    condition: 'Used - Good',
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1000&auto=format&fit=crop"],
    description: "The introduction of the Dynamic Island and the first 48MP main camera.",
    fullSpecs: ["A16 Bionic chip", "Dynamic Island", "Always-On display", "48MP Camera"],
    basePrice: 42000,
    rating: 4.6,
    reviews: 3400,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "128GB", extraPrice: 0 },
        { size: "256GB", extraPrice: 5000 }
      ]
    }
  },
  {
    id: "IP13-BASE",
    name: "iPhone 13",
    category: 'iPhone',
    condition: 'Used - Good',
    image: "https://images.unsplash.com/photo-1633113087654-c49c686c2cdf?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1633113087654-c49c686c2cdf?q=80&w=1000&auto=format&fit=crop"],
    description: "Great dual-camera system and incredible battery life.",
    fullSpecs: ["A15 Bionic chip", "Super Retina XDR", "Cinematic mode", "6.1-inch Display"],
    basePrice: 28000,
    rating: 4.5,
    reviews: 5200,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "128GB", extraPrice: 0 }
      ]
    }
  },

  // --- MacBooks ---
  {
    id: "MAC-M3-AIR-13",
    name: "MacBook Air 13\" (M3)",
    category: 'MacBook',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1611186871348-b1ec696e5237?q=80&w=1000&auto=format&fit=crop"],
    description: "Supercharged by M3, the world’s most popular laptop.",
    fullSpecs: ["M3 Chip", "13.6-inch Liquid Retina", "18-hour battery life", "Fanless design"],
    basePrice: 74990,
    rating: 4.9,
    reviews: 670,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "256GB SSD", extraPrice: 0 },
        { size: "512GB SSD", extraPrice: 12000 }
      ]
    }
  },
  {
    id: "MAC-M3-PRO-14",
    name: "MacBook Pro 14\" (M3 Pro)",
    category: 'MacBook',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop"],
    description: "The pro laptop without equal. Featuring the M3 Pro chip.",
    fullSpecs: ["M3 Pro chip", "14.2-inch Liquid Retina XDR", "120Hz ProMotion", "MagSafe 3 charging"],
    basePrice: 112990,
    rating: 4.8,
    reviews: 430,
    isFlashSale: true,
    saleEndTime: "2026-04-23T12:00:00",
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "512GB SSD", extraPrice: 0 },
        { size: "1TB SSD", extraPrice: 14000 }
      ]
    }
  },
  {
    id: "MAC-M2-AIR-15",
    name: "MacBook Air 15\" (M2)",
    category: 'MacBook',
    condition: 'Certified Pre-owned',
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop"],
    description: "Big display. Thinner than ever. Powered by M2.",
    fullSpecs: ["M2 Chip", "15.3-inch Liquid Retina", "1080p FaceTime HD", "Six-speaker system"],
    basePrice: 62000,
    rating: 4.7,
    reviews: 890,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "256GB SSD", extraPrice: 0 }
      ]
    }
  },

  // --- iPads ---
  {
    id: "IPAD-PRO-M4-11",
    name: "iPad Pro 11\" (M4)",
    category: 'iPad',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop"],
    description: "Thinner than ever. Powered by the M4 chip.",
    fullSpecs: ["M4 Chip", "Tandem OLED Display", "Apple Pencil Pro support", "ProRes Video"],
    basePrice: 59990,
    rating: 5.0,
    reviews: 230,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "256GB", extraPrice: 0 },
        { size: "512GB", extraPrice: 12000 }
      ]
    }
  },
  {
    id: "IPAD-AIR-M2-13",
    name: "iPad Air 13\" (M2)",
    category: 'iPad',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1000&auto=format&fit=crop"],
    description: "M2 power. 13-inch display. Incredible versatility.",
    fullSpecs: ["M2 Chip", "Liquid Retina Display", "Landscape Front Camera", "WiFi 6E"],
    basePrice: 46990,
    rating: 4.8,
    reviews: 150,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "128GB", extraPrice: 0 }
      ]
    }
  },

  // --- Watches ---
  {
    id: "WATCH-ULTRA-2",
    name: "Apple Watch Ultra 2",
    category: 'Watch',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bc78344?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1434493907317-a46b5bc78344?q=80&w=1000&auto=format&fit=crop"],
    description: "The ultimate sports watch. Rugged titanium and brightest display.",
    fullSpecs: ["S9 SiP", "3000 nits display", "Up to 36 hours battery", "Precision Dual-frequency GPS"],
    basePrice: 46990,
    rating: 4.9,
    reviews: 560,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "49mm Titanium", extraPrice: 0 }
      ]
    }
  },
  {
    id: "WATCH-S9",
    name: "Apple Watch Series 9",
    category: 'Watch',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop"],
    description: "Smarter. Brighter. Mightier.",
    fullSpecs: ["Double Tap Gesture", "S9 SiP", "Blood Oxygen app", "ECG app"],
    basePrice: 24990,
    rating: 4.7,
    reviews: 1200,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "45mm", extraPrice: 0 },
        { size: "41mm", extraPrice: -2000 }
      ]
    }
  },

  // --- AirPods ---
  {
    id: "AIRPODS-MAX",
    name: "AirPods Max",
    category: 'AirPods',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop"],
    description: "A perfect balance of exhilarating high-fidelity audio.",
    fullSpecs: ["Apple-designed driver", "Active Noise Cancellation", "Transparency mode", "Spatial audio"],
    basePrice: 32990,
    rating: 4.6,
    reviews: 3100,
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "Standard", extraPrice: 0 }
      ]
    }
  },
  {
    id: "AIRPODS-PRO-2",
    name: "AirPods Pro (2nd Gen)",
    category: 'AirPods',
    condition: 'New',
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1000&auto=format&fit=crop"],
    description: "2x more Active Noise Cancellation. Now with USB-C.",
    fullSpecs: ["H2 Apple Silicon", "Adaptive Audio", "Transparency mode", "Spatial audio"],
    basePrice: 14990,
    rating: 4.9,
    reviews: 8900,
    isFlashSale: true,
    saleEndTime: "2026-04-22T18:00:00",
    stockCount: 5,
    variants: {
      colors: commonColors,
      storages: [
        { size: "MagSafe (USB-C)", extraPrice: 0 }
      ]
    }
  }
];
