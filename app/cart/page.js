"use client";
import { useCart } from "@/components/CartContext";
import CartProduct from "@/components/CartProduct";
import React from "react";

export default function CartPage() {
  const { cart } = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <section>
      <h2 className="section-title">Cart Items</h2>
      <div className="cart-page">
        <div className="cart-products">
          {cart?.map((item) => {
            return <CartProduct data={item} key={item.id} />;
          })}
        </div>
        <div className="total-card">
          <h1>Cart Total</h1>
          <hr />
          <h2>${totalPrice}</h2>
        </div>
      </div>
    </section>
  );
}
