"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <header className="header">
      <Link href="/">My Shop</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <Link href="/cart">Cart({cart.length})</Link>
    </header>
  );
}
