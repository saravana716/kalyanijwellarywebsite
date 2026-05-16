import m1 from '../assets/m1.jpeg';
import m2 from '../assets/m2.jpeg';
import m3 from '../assets/m3.jpeg';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import l1 from '../assets/l1.jpeg';
import my1 from '../assets/my1.jpeg';
import image1 from '../assets/image1.jpeg';

export const products = [
  // Traditional Collection (Category 1)
  { id: 101, name: 'Temple Gold Necklace', category: 'Traditional Collection', image: m1, featured: true, price: 125000, weight: '45.250 g', making: 12500, gst: 3750 },
  { id: 102, name: 'Antique Gold Bangles', category: 'Traditional Collection', image: g1, featured: false, price: 85000, weight: '28.000 g', making: 8500, gst: 2550 },
  { id: 103, name: 'Bridal Maang Tikka', category: 'Traditional Collection', image: g2, featured: false, price: 35000, weight: '12.500 g', making: 4500, gst: 1050 },
  { id: 104, name: 'Vaddanam Gold Belt', category: 'Traditional Collection', image: g3, featured: true, price: 450000, weight: '150.000 g', making: 35000, gst: 13500 },
  { id: 105, name: 'Gold Jhumka Earrings', category: 'Traditional Collection', image: g4, featured: false, price: 55000, weight: '18.400 g', making: 5500, gst: 1650 },
  { id: 106, name: 'Manga Malai Necklace', category: 'Traditional Collection', image: g5, featured: false, price: 210000, weight: '72.000 g', making: 18000, gst: 6300 },
  { id: 107, name: 'Nakshi Work Choker', category: 'Traditional Collection', image: g6, featured: true, price: 320000, weight: '95.000 g', making: 28000, gst: 9600 },
  { id: 108, name: 'Traditional Coin Mala', category: 'Traditional Collection', image: l1, featured: false, price: 185000, weight: '64.000 g', making: 15000, gst: 5550 },
  { id: 109, name: 'Kemp Stone Bangles', category: 'Traditional Collection', image: my1, featured: false, price: 95000, weight: '32.000 g', making: 8000, gst: 2850 },
  { id: 110, name: 'Ruby Studded Haram', category: 'Traditional Collection', image: image1, featured: false, price: 550000, weight: '185.000 g', making: 45000, gst: 16500 },

  // Royal Collection (Category 2)
  { id: 201, name: 'Royal Diamond Choker', category: 'Royal Collection', image: m2, featured: true, price: 850000, weight: '55.000 g', making: 85000, gst: 25500 },
  { id: 202, name: 'Emerald Polki Set', category: 'Royal Collection', image: g1, featured: false, price: 650000, weight: '48.000 g', making: 65000, gst: 19500 },
  { id: 203, name: 'Platinum Diamond Ring', category: 'Royal Collection', image: g2, featured: true, price: 120000, weight: '8.500 g', making: 15000, gst: 3600 },
  { id: 204, name: 'Solitaire Studs', category: 'Royal Collection', image: g3, featured: false, price: 250000, weight: '4.200 g', making: 25000, gst: 7500 },
  { id: 205, name: 'Rose Gold Diamond Bangle', category: 'Royal Collection', image: g4, featured: true, price: 380000, weight: '35.000 g', making: 38000, gst: 11400 },
  { id: 206, name: 'Kundan Meena Haram', category: 'Royal Collection', image: g5, featured: false, price: 1200000, weight: '250.000 g', making: 120000, gst: 36000 },
  { id: 207, name: 'Victorian Style Pendant', category: 'Royal Collection', image: g6, featured: false, price: 150000, weight: '18.000 g', making: 20000, gst: 4500 },
  { id: 208, name: 'Designer Diamond Kada', category: 'Royal Collection', image: l1, featured: true, price: 950000, weight: '85.000 g', making: 95000, gst: 28500 },
  { id: 209, name: 'Blue Sapphire Bracelet', category: 'Royal Collection', image: my1, featured: false, price: 420000, weight: '42.000 g', making: 45000, gst: 12600 },
  { id: 210, name: 'Marquise Cut Earrings', category: 'Royal Collection', image: image1, featured: false, price: 310000, weight: '15.000 g', making: 35000, gst: 9300 },

  // Elegant Collection (Category 3)
  { id: 301, name: 'Sleek Gold Chain', category: 'Elegant Collection', image: m3, featured: true, price: 25000, weight: '6.200 g', making: 2500, gst: 750 },
  { id: 302, name: 'Minimalist Gold Ring', category: 'Elegant Collection', image: g1, featured: false, price: 15000, weight: '3.500 g', making: 1500, gst: 450 },
  { id: 303, name: 'Daily Wear Studs', category: 'Elegant Collection', image: g2, featured: false, price: 12000, weight: '2.800 g', making: 1200, gst: 360 },
  { id: 304, name: 'Lightweight Gold Kada', category: 'Elegant Collection', image: g3, featured: true, price: 85000, weight: '22.000 g', making: 8000, gst: 2550 },
  { id: 305, name: 'Gold Heart Pendant', category: 'Elegant Collection', image: g4, featured: false, price: 18000, weight: '4.200 g', making: 2000, gst: 540 },
  { id: 306, name: 'Pearl Gold Necklace', category: 'Elegant Collection', image: g5, featured: false, price: 45000, weight: '12.500 g', making: 4500, gst: 1350 },
  { id: 307, name: 'Modern Gold Drop Earrings', category: 'Elegant Collection', image: g6, featured: true, price: 32000, weight: '8.400 g', making: 3500, gst: 960 },
  { id: 308, name: 'Flexible Gold Bracelet', category: 'Elegant Collection', image: l1, featured: false, price: 65000, weight: '18.000 g', making: 6000, gst: 1950 },
  { id: 309, name: 'Infinity Gold Ring', category: 'Elegant Collection', image: my1, featured: false, price: 14000, weight: '3.200 g', making: 1500, gst: 420 },
  { id: 310, name: 'Simple Gold Nosepin', category: 'Elegant Collection', image: image1, featured: false, price: 5500, weight: '0.800 g', making: 500, gst: 165 },

  // Heritage Collection (Category 4)
  { id: 401, name: 'Grand Heritage Haram', category: 'Heritage Collection', image: m1, featured: true, price: 650000, weight: '185.000 g', making: 65000, gst: 19500 },
  { id: 402, name: 'Classic Gold Oddiyanam', category: 'Heritage Collection', image: g1, featured: false, price: 850000, weight: '250.000 g', making: 85000, gst: 25500 },
  { id: 403, name: 'Antique Lakshmi Kada', category: 'Heritage Collection', image: g2, featured: true, price: 180000, weight: '55.000 g', making: 18000, gst: 5400 },
  { id: 404, name: 'Heritage Jhumka Set', category: 'Heritage Collection', image: g3, featured: false, price: 125000, weight: '38.000 g', making: 12500, gst: 3750 },
  { id: 405, name: 'Royal Heritage Choker', category: 'Heritage Collection', image: g4, featured: true, price: 420000, weight: '120.000 g', making: 42000, gst: 12600 },
  { id: 406, name: 'Traditional Mango Haram', category: 'Heritage Collection', image: g5, featured: false, price: 310000, weight: '95.000 g', making: 31000, gst: 9300 },
  { id: 407, name: 'Classic Gold Nath', category: 'Heritage Collection', image: g6, featured: false, price: 25000, weight: '6.500 g', making: 3000, gst: 750 },
  { id: 408, name: 'Heritage Gold Anklets', category: 'Heritage Collection', image: l1, featured: false, price: 150000, weight: '45.000 g', making: 15000, gst: 4500 },
  { id: 409, name: 'Antique Gold Finger Ring', category: 'Heritage Collection', image: my1, featured: false, price: 45000, weight: '12.000 g', making: 5000, gst: 1350 },
  { id: 410, name: 'Grand Heritage Bangles', category: 'Heritage Collection', image: image1, featured: true, price: 550000, weight: '160.000 g', making: 55000, gst: 16500 },

  // Bespoke Collection (Category 5)
  { id: 501, name: 'Custom Name Necklace', category: 'Bespoke Collection', image: m2, featured: true, price: 45000, weight: '12.500 g', making: 15000, gst: 1350 },
  { id: 502, name: 'Handcrafted Peacock Ring', category: 'Bespoke Collection', image: g1, featured: false, price: 75000, weight: '22.000 g', making: 25000, gst: 2250 },
  { id: 503, name: 'Bespoke Diamond Pendant', category: 'Bespoke Collection', image: g2, featured: true, price: 150000, weight: '15.000 g', making: 45000, gst: 4500 },
  { id: 504, name: 'Unique Filigree Kada', category: 'Bespoke Collection', image: g3, featured: false, price: 280000, weight: '75.000 g', making: 65000, gst: 8400 },
  { id: 505, name: 'Artisan Gold Choker', category: 'Bespoke Collection', image: g4, featured: true, price: 350000, weight: '95.000 g', making: 85000, gst: 10500 },
  { id: 506, name: 'Custom Zodiac Coin', category: 'Bespoke Collection', image: g5, featured: false, price: 65000, weight: '10.000 g', making: 12000, gst: 1950 },
  { id: 507, name: 'Bespoke Floral Bangles', category: 'Bespoke Collection', image: g6, featured: true, price: 420000, weight: '115.000 g', making: 95000, gst: 12600 },
  { id: 508, name: 'Personalized Gold Band', category: 'Bespoke Collection', image: l1, featured: false, price: 35000, weight: '8.500 g', making: 8000, gst: 1050 },
  { id: 509, name: 'Designer Gold Waistband', category: 'Bespoke Collection', image: my1, featured: false, price: 580000, weight: '165.000 g', making: 120000, gst: 17400 },
  { id: 510, name: 'Exclusive Bespoke Set', category: 'Bespoke Collection', image: image1, featured: true, price: 1500000, weight: '350.000 g', making: 250000, gst: 45000 },

  // Signature Collection (Category 6)
  { id: 601, name: 'Signature Gold Haram', category: 'Signature Collection', image: m3, featured: true, price: 450000, weight: '135.000 g', making: 45000, gst: 13500 },
  { id: 602, name: 'Kalyani Special Choker', category: 'Signature Collection', image: g1, featured: true, price: 320000, weight: '92.000 g', making: 32000, gst: 9600 },
  { id: 603, name: 'Signature Diamond Ring', category: 'Signature Collection', image: g2, featured: false, price: 95000, weight: '6.500 g', making: 15000, gst: 2850 },
  { id: 604, name: 'Classic Signature Kada', category: 'Signature Collection', image: g3, featured: true, price: 210000, weight: '65.000 g', making: 21000, gst: 6300 },
  { id: 605, name: 'Signature Bridal Set', category: 'Signature Collection', image: g4, featured: true, price: 2500000, weight: '650.000 g', making: 350000, gst: 75000 },
  { id: 606, name: 'Daily Signature Chain', category: 'Signature Collection', image: g5, featured: false, price: 45000, weight: '12.000 g', making: 4500, gst: 1350 },
  { id: 607, name: 'Signature Gold Studs', category: 'Signature Collection', image: g6, featured: false, price: 28000, weight: '7.500 g', making: 3000, gst: 840 },
  { id: 608, name: 'Premium Signature Bangle', category: 'Signature Collection', image: l1, featured: true, price: 185000, weight: '52.000 g', making: 18000, gst: 5550 },
  { id: 609, name: 'Signature Gold Pendant', category: 'Signature Collection', image: my1, featured: false, price: 32000, weight: '8.200 g', padding: '1rem', background: '#fff' },
  { id: 610, name: 'Elite Signature Collection', category: 'Signature Collection', image: image1, featured: true, price: 1200000, weight: '280.000 g', making: 120000, gst: 36000 },
];
