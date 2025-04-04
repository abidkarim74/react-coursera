export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onSale: boolean,
  quantity?: number
}

export interface CartItem extends Product {
  quantity: number;
}

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  cartTotal: number;
};