import React, { useContext, useState } from 'react';
import { IProduct } from '../types';
import { AuthContext } from './AuthContext';

export const CartContext = React.createContext<{
  carts: string[];
  addToCart: (product: IProduct) => Promise<void>;
}>({
  carts: [],
  addToCart: (product: IProduct) => Promise.resolve(),
});

export const useAuth = () => useContext(CartContext);

export const CartProvider: React.FC = (props) => {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState<string[]>([]);

  const addToCart = async (product: IProduct) => {
    if (user) {
      setCarts((prev) => [...prev, product.uid]);
    }
  };

  // const initiateCart = async () => {

  // }

  return (
    <CartContext.Provider value={{ carts, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
