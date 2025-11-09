"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";

const Checkout = () => {
  const { items = [] } = useCart(); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onCheckout = async () => {
    setLoading(true);
    setMessage("");

    try {
      console.log("Checkout");
      // simulate async
      await new Promise((res) => setTimeout(res, 1000));

      setMessage("Items are added to cart");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during checkout simulation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-2 grid gap-4">
      <Button
        size="lg"
        className="w-full"
        disabled={loading || items.length === 0}
        onClick={onCheckout}
      >
        {loading ? "Processing..." : "Checkout"}
      </Button>

      {message && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {message}
        </p>
      )}
    </div>
  );
};

export default Checkout;
