"use client";
import { navbarData } from "@/lib/data";
import { MoreVertical, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { useCart } from "@/hooks/use-cart";

type Props = {
  products: any[];
};

const ProductGrid = ({ products }: Props) => {
  const [toggle, setToggle] = useState(false);
  
  const {isOpen, setIsOpen, items: cartItems } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="p-2" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <X className="h-6 w-6 font-bold" />
            ) : (
              <MoreVertical className="h-6 w-6" />
            )}
            <span className="sr-only">Menu</span>
          </button>
          {toggle && (
            <div className="w-full flex gap-x-15 items-center justify-center">
              {navbarData.map((item) => (
                <Link
                  href={item.link}
                  key={item.idx}
                  className="relative text-lg font-medium text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

        <Sheet
          open={isOpen}
          onOpenChange={setIsOpen}
        >
            <SheetTrigger asChild>
                <button className="text-lg font-medium flex items-center gap-2">
                    <span>Cart</span>
                </button>
            </SheetTrigger>
        </Sheet>
        </div>
      </header>
    </div>
  );
};

export default ProductGrid;
