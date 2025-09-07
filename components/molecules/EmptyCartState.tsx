import { ShoppingCart } from 'lucide-react';

export function EmptyCartState() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center h-full">
      <ShoppingCart className="h-16 w-16 text-gray-600" />
      <div className="flex flex-col justify-center items-center gap-1">
        <h3 className="text-lg font-medium">Your cart is empty</h3>
        <p className="text-sm text-gray-400">Add some items to get started!</p>
      </div>
    </div>
  );
}
