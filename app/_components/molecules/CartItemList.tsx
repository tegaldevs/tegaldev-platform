import { CartItem as CartItemType } from '../providers/CartProvider';
import CartItem from './CartItem';

interface CartItemListProps {
  items: CartItemType[];
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}

export default function CartItemList({
  items,
  updateQuantity,
  removeItem,
}: CartItemListProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <CartItem
          key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}
