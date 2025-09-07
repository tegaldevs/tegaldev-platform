import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/cart-store';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}

export default function CartItem({
  item,
  updateQuantity,
  removeItem,
}: CartItemProps) {
  return (
    <div
      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
      className="bg-white/10 rounded-lg p-2 border border-white/20"
    >
      <div className="flex gap-3">
        <div
          className={cn(
            `w-10
            h-10
            bg-gradient-to-br
            from-purple-600
            to-blue-600
            rounded-lg
            flex
            items-center
            justify-center`,
          )}
        >
          <ShoppingBag className="h-8 w-8 text-white" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-white font-medium text-sm line-clamp-1">
              {item.name}
            </h3>
            {(item.selectedSize || item.selectedColor) && (
              <div className="text-xs text-gray-400">
                {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                {item.selectedSize && item.selectedColor && <span> • </span>}
                {item.selectedColor && <span>Color: {item.selectedColor}</span>}
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">
                {item.price}
              </span>
              {item.originalPrice && (
                <span className="text-gray-400 line-through text-xs">
                  {item.originalPrice}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-transparent"
              >
                <Minus />
              </Button>
              <span className="font-medium px-2 text-center">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-transparent"
              >
                <Plus />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.id)}
              className={cn(
                `text-red-400 hover:text-red-300 hover:bg-red-400/10`,
              )}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
