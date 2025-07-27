'use client';

export const dynamic = 'force-dynamic';

import { AuthNavigation } from '@/app/_components/auth/AuthNavigation';
import { Footer } from '@/app/_components/ui/Footer';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart,
  Star,
  Truck,
  Shield,
  ExternalLink,
  Shirt,
  Coffee,
  Sticker,
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface MerchandiseItem {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  category: string;
  sizes?: string[];
  colors?: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  shopUrl: string;
  thumbnail: string;
}

const merchandiseItems: MerchandiseItem[] = [
  {
    id: '1',
    name: 'TegalDev Classic T-Shirt',
    description:
      'Premium cotton t-shirt with the iconic TegalDev logo. Perfect for coding sessions and tech meetups.',
    price: '$25',
    originalPrice: '$35',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'White', 'Gray'],
    rating: 4.8,
    reviews: 127,
    inStock: true,
    featured: true,
    shopUrl: 'https://shop.tegaldev.com/t-shirt-classic',
    thumbnail: '/placeholder-tshirt.jpg',
  },
  {
    id: '2',
    name: 'Developer Hoodie - Code & Coffee',
    description:
      'Cozy hoodie with "Code & Coffee" design. Made from premium fleece material for maximum comfort.',
    price: '$45',
    originalPrice: '$60',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy'],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    shopUrl: 'https://shop.tegaldev.com/hoodie-code-coffee',
    thumbnail: '/placeholder-hoodie.jpg',
  },
  {
    id: '3',
    name: 'TegalDev Sticker Pack',
    description:
      'Collection of 10 high-quality vinyl stickers featuring TegalDev logos and programming quotes.',
    price: '$8',
    category: 'Accessories',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: false,
    shopUrl: 'https://shop.tegaldev.com/sticker-pack',
    thumbnail: '/placeholder-stickers.jpg',
  },
  {
    id: '4',
    name: 'Programmer Coffee Mug',
    description:
      'Ceramic mug with funny programming quotes. Dishwasher and microwave safe. 11oz capacity.',
    price: '$15',
    category: 'Accessories',
    colors: ['White', 'Black'],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: false,
    shopUrl: 'https://shop.tegaldev.com/coffee-mug',
    thumbnail: '/placeholder-mug.jpg',
  },
  {
    id: '5',
    name: 'TegalDev Laptop Sleeve',
    description:
      'Protective laptop sleeve with TegalDev branding. Available for 13", 15", and 17" laptops.',
    price: '$30',
    category: 'Tech Accessories',
    sizes: ['13"', '15"', '17"'],
    colors: ['Black', 'Gray'],
    rating: 4.8,
    reviews: 74,
    inStock: true,
    featured: true,
    shopUrl: 'https://shop.tegaldev.com/laptop-sleeve',
    thumbnail: '/placeholder-sleeve.jpg',
  },
  {
    id: '6',
    name: 'Mechanical Keyboard Wrist Rest',
    description:
      'Ergonomic wrist rest with TegalDev logo. Memory foam padding for comfortable typing sessions.',
    price: '$20',
    category: 'Tech Accessories',
    colors: ['Black', 'Gray'],
    rating: 4.5,
    reviews: 92,
    inStock: false,
    featured: false,
    shopUrl: 'https://shop.tegaldev.com/wrist-rest',
    thumbnail: '/placeholder-wrist-rest.jpg',
  },
  {
    id: '7',
    name: 'TegalDev Baseball Cap',
    description:
      'Adjustable baseball cap with embroidered TegalDev logo. Perfect for outdoor coding sessions.',
    price: '$22',
    category: 'Apparel',
    colors: ['Black', 'Navy', 'Gray'],
    rating: 4.4,
    reviews: 68,
    inStock: true,
    featured: false,
    shopUrl: 'https://shop.tegaldev.com/baseball-cap',
    thumbnail: '/placeholder-cap.jpg',
  },
  {
    id: '8',
    name: 'Code Review Notebook',
    description:
      'Premium notebook for code reviews, algorithm sketches, and meeting notes. 200 pages, dot grid.',
    price: '$18',
    category: 'Accessories',
    rating: 4.7,
    reviews: 134,
    inStock: true,
    featured: false,
    shopUrl: 'https://shop.tegaldev.com/notebook',
    thumbnail: '/placeholder-notebook.jpg',
  },
];

function MerchandiseCard({ item }: { item: MerchandiseItem }) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Apparel':
        return Shirt;
      case 'Accessories':
        return Sticker;
      case 'Tech Accessories':
        return Coffee;
      default:
        return ShoppingCart;
    }
  };

  const CategoryIcon = getCategoryIcon(item.category);

  return (
    <article
      className={`bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group ${
        item.featured ? 'ring-2 ring-purple-500/50' : ''
      }`}
    >
      {item.featured && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-3 py-1 text-center">
          ⭐ Featured Item
        </div>
      )}

      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <CategoryIcon className="h-16 w-16 text-white" />
        </div>
        {!item.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-medium text-sm bg-red-600 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
        {item.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full">
            {item.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-300">
              {item.rating} ({item.reviews})
            </span>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {item.name}
        </h2>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">{item.price}</span>
            {item.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {item.originalPrice}
              </span>
            )}
          </div>
        </div>

        {(item.sizes || item.colors) && (
          <div className="mb-3 space-y-1">
            {item.sizes && (
              <div className="text-xs text-gray-400">
                Sizes: {item.sizes.join(', ')}
              </div>
            )}
            {item.colors && (
              <div className="text-xs text-gray-400">
                Colors: {item.colors.join(', ')}
              </div>
            )}
          </div>
        )}

        <Link href={item.shopUrl} target="_blank" rel="noopener noreferrer">
          <Button
            className={`w-full flex items-center gap-2 ${
              item.inStock
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                : 'bg-gray-600 text-gray-300 cursor-not-allowed'
            }`}
            disabled={!item.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            {item.inStock ? 'Buy Now' : 'Out of Stock'}
            {item.inStock && <ExternalLink className="h-3 w-3" />}
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function MerchandisePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get all unique categories
  const allCategories = Array.from(
    new Set(merchandiseItems.map((item) => item.category)),
  );

  // Filter items by selected category
  const filteredItems = selectedCategory
    ? merchandiseItems.filter((item) => item.category === selectedCategory)
    : merchandiseItems;

  // Get featured items
  const featuredItems = merchandiseItems.filter((item) => item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      {/* Fixed Navigation */}
      <nav
        className={`max-w-5xl mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/20 backdrop-blur-md mx-4 mt-4 rounded-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/Tegal.dev-AAA.png"
                  alt="TegalDev Logo"
                  width={96}
                  height={96}
                  className="transition-all duration-300 cursor-pointer"
                />
              </Link>
            </div>
            <AuthNavigation />
          </div>
        </div>
      </nav>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tegal Dev{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Store
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Show your love for the TegalDev community with our exclusive
            merchandise. High-quality items designed by developers, for
            developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://shop.tegaldev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Visit Our Store
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/70 px-8 py-3 flex items-center gap-2"
            >
              <Truck className="h-5 w-5" />
              Free Shipping Over $50
            </Button>
          </div>
        </div>

        {/* Features */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <Truck className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-300 text-sm">
                Free shipping on orders over $50 worldwide
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-300 text-sm">
                30-day return policy on all merchandise
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Community Designed
              </h3>
              <p className="text-gray-300 text-sm">
                Designs created by and for our community
              </p>
            </div>
          </div>
        </section>

        {/* Featured Items */}
        {featuredItems.length > 0 && (
          <section className="mb-12">
            <SectionHeader
              title="Featured "
              highlightedWord="Items"
              subtitle="Our most popular merchandise, loved by the community"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {featuredItems.map((item) => (
                <MerchandiseCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              className={`rounded-full ${
                selectedCategory === null
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Items
            </Button>
            {allCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className={`rounded-full ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* All Merchandise */}
        <section className="mb-16">
          <SectionHeader
            title="All "
            highlightedWord="Merchandise"
            subtitle={`${filteredItems.length} item${
              filteredItems.length !== 1 ? 's' : ''
            } ${selectedCategory ? `in "${selectedCategory}"` : 'available'}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredItems.map((item) => (
              <MerchandiseCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No items found for the selected category.
              </p>
            </div>
          )}
        </section>

        {/* Custom Orders */}
        <section className="text-center py-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Something Custom?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Looking for bulk orders, custom designs, or corporate merchandise?
              We offer custom solutions for companies and large orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:merchandise@tegaldev.com?subject=Custom Order Inquiry">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                >
                  Request Custom Order
                </Button>
              </Link>
              <Link
                href="https://shop.tegaldev.com/bulk-orders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/70 px-8 py-3 flex items-center gap-2"
                >
                  Bulk Orders
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
