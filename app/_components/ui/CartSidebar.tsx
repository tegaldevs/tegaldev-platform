'use client';

import { useCart } from '@/app/_components/providers/CartProvider';
import { Button } from '@/app/_components/ui/button';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import * as React from 'react';

export function CartSidebar() {
  const { items, isOpen, totalItems, totalPrice, closeCart, updateQuantity, removeItem, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle visibility state for smooth transitions
  React.useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to ensure the component is mounted before starting animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      // Delay hiding to allow exit animation
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const formatPrice = (price: number) => {
    return `IDR ${price.toLocaleString()}`;
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Checkout functionality would be implemented here!');
      setIsCheckingOut(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black border-l border-white/20 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
        isAnimating ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-purple-400" />
            <h2 className="text-lg font-semibold text-white">
              Cart ({totalItems})
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={closeCart}
            className="text-gray-400"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-gray-600 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Your cart is empty</h3>
              <p className="text-gray-400 text-sm">Add some items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex gap-3">
                    {/* Product Image Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      
                      {/* Size and Color */}
                      {(item.selectedSize || item.selectedColor) && (
                        <div className="text-xs text-gray-400 mb-2">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          {item.selectedSize && item.selectedColor && <span> • </span>}
                          {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        </div>
                      )}
                      
                      {/* Price */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-semibold text-sm">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-gray-400 line-through text-xs">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 border-white/20 hover:bg-white/10"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-white text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0 border-white/20 hover:bg-white/10"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-400/10 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/20 p-4 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-lg font-bold text-purple-400">
                {formatPrice(totalPrice)}
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full border-white/20 hover:bg-white/70"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}