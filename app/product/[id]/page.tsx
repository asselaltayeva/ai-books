import { getProduct } from "@/actions/products";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ProductQuantity from "@/components/product/ProductQuantity";
import { ArrowLeft, Truck, RotateCcw, Banknote } from "lucide-react";
import ProductCartSheet from "@/components/ProductCartSheet";
import ProductAction from "@/components/product/ProductAction";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  let product;

  try {
    product = await getProduct(id);
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Return back
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Return back now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-lg font-medium">Back</span>
        </Link>
        <ProductCartSheet />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        <section className="flex justify-center mt-12">
          {product.images?.[0]?.src ? (
            <div className="relative w-168 rounded-3xl overflow-hidden">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt || "Product Image"}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          ) : (
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <span className="text-slate-400 text-lg">
                No Image Available
              </span>
            </div>
          )}
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="w-3 h-8 rounded-full"></div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-700 text-left ml-4">
              {product.name}
            </h1>

            <div className="flex flex-col gap-3 ml-4">
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <Banknote size={18} className="text-emerald-600" />
                  <span className="text-sm font-medium">{product.price} won </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Truck size={18} className="text-green-600" />
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <RotateCcw size={18} className="text-purple-600" />
                  <span className="text-sm font-medium">zyz</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <article
              className="text-slate-700 leading-relaxed text-md bg-white/50 rounded-2xl p-6 border border-slate-100"
              dangerouslySetInnerHTML={{
                __html:
                  product.description ||
                  '<p class="text-slate-500">No description available.</p>',
              }}
            />
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 ml-5">
                  Select Quantity
                </span>
                <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  In Stock
                </div>
              </div>

              <div className="scale-90 transform origin-left">
                <ProductQuantity product={product} />
              </div>

              <div className="flex gap-3">
                <ProductAction />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
