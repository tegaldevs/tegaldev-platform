'use client';

import { useCart } from '@/app/_components/providers/CartProvider';
import { Button } from '@/app/_components/ui/button';
import { ShoppingCart } from 'lucide-react';

export function CartIcon() {
  const { totalItems, toggleCart } = useCart();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleCart}
      className="relative text-white hover:text-purple-300 hover:bg-white/10"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Button>
  );
}