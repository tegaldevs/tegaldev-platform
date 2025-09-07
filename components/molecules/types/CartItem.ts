export interface CartItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
