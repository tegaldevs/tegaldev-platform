'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/_lib/cart-store';
import { SheetHeader, SheetTitle } from '../ui/sheet';
import { EmptyCartState } from './EmptyCartState';
import CartItemList from './CartItemList';
import { CartFooter } from './CartFooter';

export function CartSidebarContent() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <>
      <SheetHeader>
        <SheetTitle className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-purple-400" />
          <span className="text-xs font-semibold text-white">
            Cart ({totalItems})
          </span>
        </SheetTitle>
      </SheetHeader>
      <div className="flex-1 overflow-y-auto px-5">
        {items.length === 0 ? (
          <EmptyCartState />
        ) : (
          <CartItemList
            items={items}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        )}
      </div>
      {items.length > 0 && (
        <CartFooter totalPrice={totalPrice} onClearCart={clearCart} />
      )}
    </>
  );
}
