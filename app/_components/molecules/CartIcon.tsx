'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '../providers/CartProvider';
import { Button } from '../ui/button';
import { cn } from '@/app/_lib/utils';

export function CartIcon() {
  const { totalItems, toggleCart } = useCart();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleCart}
      className="text-white hover:text-white hover:bg-white/10"
    >
      <ShoppingCart />
      {totalItems > 0 && (
        <span
          className={cn(
            `absolute
            top-4
            right-4
            bg-purple-600
            text-white
            rounded-full
            h-5
            w-5
            flex
            justify-center
            items-center`,
          )}
        >
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Button>
  );
}
