'use client';

import { useCart } from '@/lib/cart-store';
import { Sheet, SheetContent } from '../ui/sheet';
import { cn } from '@/lib/utils';
import { CartSidebarContent } from './CartSidebarContent';

export function CartSidebar() {
  const { isOpen, closeCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className={cn(
          'bg-black/40 backdrop-blur-md border-white/10 text-white',
        )}
      >
        <CartSidebarContent />
      </SheetContent>
    </Sheet>
  );
}
