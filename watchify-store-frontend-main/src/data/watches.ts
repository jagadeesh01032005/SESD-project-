import watch1 from '@/assets/watch-1.jpg';
import watch2 from '@/assets/watch-2.jpg';
import watch3 from '@/assets/watch-3.jpg';
import watch4 from '@/assets/watch-4.jpg';
import watch5 from '@/assets/watch-5.jpg';
import watch6 from '@/assets/watch-6.jpg';
import { Watch } from '@/contexts/CartContext';

export const watches: Watch[] = [
  {
    id: '1',
    name: 'Chronograph Elite',
    description: 'Sophisticated chronograph with gold accents and premium leather strap',
    price: 2499,
    image: watch1,
  },
  {
    id: '2',
    name: 'Minimalist Steel',
    description: 'Modern stainless steel watch with clean, timeless design',
    price: 1299,
    image: watch2,
  },
  {
    id: '3',
    name: 'Classic Rose Gold',
    description: 'Elegant dress watch perfect for formal occasions',
    price: 1899,
    image: watch3,
  },
  {
    id: '4',
    name: 'Diver Pro',
    description: 'Professional diving watch with rotating bezel and water resistance',
    price: 3299,
    image: watch4,
  },
  {
    id: '5',
    name: 'Vintage Heritage',
    description: 'Retro-inspired timepiece with blue dial and classic charm',
    price: 1599,
    image: watch5,
  },
  {
    id: '6',
    name: 'Skeleton Automatic',
    description: 'Mechanical masterpiece showcasing intricate movement',
    price: 4299,
    image: watch6,
  },
];
