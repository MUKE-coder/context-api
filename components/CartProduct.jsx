import Image from "next/image";
import React from "react";
import { useCart } from "./CartContext";

export default function CartProduct({ data }) {
  const { removeFromCart } = useCart();
  return (
    <div className="cart-product">
      <div className="cart-image">
        <Image src={data.image} fill alt={data.title} />
      </div>
      <h4>{data.title}</h4>
      <button onClick={() => removeFromCart(data.id)}>Remove</button>
      <div className="subtotal">{data.price}</div>
    </div>
  );
}
