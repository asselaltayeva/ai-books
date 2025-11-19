"use client";

import { useCart } from "@/hooks/use-cart";
import React from "react";
import Checkout from "../Checkout";

const ProductAction = () => {
  const { items: cartItems } = useCart();

  return (
    <div className="rounded-lg p-4 sticky top-2 flex flex-col w-full bg-white space-y-3">
      <div className="grid grid-cols-2 border-b pb-2 text-gray-700 text-sm">
        <span className="text-left">Quantity</span>
        <span className="text-right">Price</span>
      </div>

      <div className="divide-y">
        {cartItems.length === 0 ? (
          <div className="py-3 text-center text-gray-400 text-sm">
            Your cart is empty
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 py-2 text-gray-800 text-sm"
            >
              <span className="text-left">{item.quantity}</span>
              <span className="text-right">
                {item.price * item.quantity} won
              </span>
            </div>
          ))
        )}
      </div>

      <div className="mt-5">
        <Checkout />
      </div>
    </div>
  );
};

export default ProductAction;
