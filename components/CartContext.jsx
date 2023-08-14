"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

//1) Create the context
export const CartContext = createContext();

//step2:create the provider
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products"); // Replace with your API endpoint
        const productsData = await response.json();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("Item added to cart");
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("Item removed from cart");
  };
  return (
    <CartContext.Provider
      value={{ products, loading, cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

//3 create the Use context hook
export function useCart() {
  // use the useContext hook to access the context data
  const context = useContext(CartContext);
  // return the context data
  return context;
}
//4 Integrate the CartProvider in the Upermost component
