'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  thumbnail: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
}

interface CartActions {
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

type CartStore = CartState & CartActions;

function calculateTotals(items: CartItem[]) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9]/g, ''));
    return sum + price * item.quantity;
  }, 0);
  return { totalItems, totalPrice };
}

export const useCartStore = create<CartStore>()(persist(
  (set, get) => ({
    // Initial state
    items: [],
    isOpen: false,
    totalItems: 0,
    totalPrice: 0,

    // Actions
    addItem: (item) => {
      const { items } = get();
      const existingItemIndex = items.findIndex(
        (existingItem) =>
          existingItem.id === item.id &&
          existingItem.selectedSize === item.selectedSize &&
          existingItem.selectedColor === item.selectedColor,
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = items.map((existingItem, index) =>
          index === existingItemIndex
            ? {
                ...existingItem,
                quantity: existingItem.quantity + (item.quantity || 1),
              }
            : existingItem,
        );
      } else {
        newItems = [
          ...items,
          { ...item, quantity: item.quantity || 1 },
        ];
      }

      const { totalItems, totalPrice } = calculateTotals(newItems);
      set({ items: newItems, totalItems, totalPrice });
    },

    removeItem: (id) => {
      const { items } = get();
      const newItems = items.filter((item) => item.id !== id);
      const { totalItems, totalPrice } = calculateTotals(newItems);
      set({ items: newItems, totalItems, totalPrice });
    },

    updateQuantity: (id, quantity) => {
      const { items } = get();
      const newItems = items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0);

      const { totalItems, totalPrice } = calculateTotals(newItems);
      set({ items: newItems, totalItems, totalPrice });
    },

    clearCart: () => {
      set({ items: [], totalItems: 0, totalPrice: 0 });
    },

    toggleCart: () => {
      const { isOpen } = get();
      set({ isOpen: !isOpen });
    },

    openCart: () => {
      set({ isOpen: true });
    },

    closeCart: () => {
      set({ isOpen: false });
    },
  }),
  {
    name: 'cart-storage', // unique name for localStorage key
    partialize: (state) => ({ items: state.items }), // only persist items
  }
));

// Custom hook for backward compatibility
export const useCart = () => {
  const store = useCartStore();
  return {
    items: store.items,
    isOpen: store.isOpen,
    totalItems: store.totalItems,
    totalPrice: store.totalPrice,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    toggleCart: store.toggleCart,
    openCart: store.openCart,
    closeCart: store.closeCart,
  };
};