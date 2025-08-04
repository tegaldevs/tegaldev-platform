import { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/app/_lib/utils';

interface CartFooterProps {
  totalPrice: number;
  onClearCart: () => void;
}

export function CartFooter({ totalPrice, onClearCart }: CartFooterProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number) => `IDR ${price.toLocaleString()}`;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Checkout functionality would be implemented here!');
      setIsCheckingOut(false);
    }, 1000);
  };

  return (
    <div className="border-t border-white/20 p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-md font-semibold text-white">Total:</span>
        <span className="text-md font-bold text-purple-400">
          {formatPrice(totalPrice)}
        </span>
      </div>
      <div className="space-y-2">
        <Button
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className={cn(
            `w-full
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            hover:from-purple-700
            hover:to-blue-700`,
          )}
        >
          {isCheckingOut ? 'Processing...' : 'Checkout'}
        </Button>
        <Button
          variant="outline"
          onClick={onClearCart}
          className="w-full border-white/20 hover:bg-white/10 text-black"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
