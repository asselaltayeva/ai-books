"use server";
import WooCommerceRestApi from "woocommerce-rest-ts-api";

const WooCommerce = new WooCommerceRestApi({
  url: "http://ai-books.local",
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

// Get all products
export const getProducts = async () => {
  const products = await WooCommerce.get("products");
  return products.data;
};

// Get single product by ID
export const getProduct = async (id: string) => {
  const product = await WooCommerce.get(`products`, {
    id: parseInt(id),
  });
  return product.data;
};

// Get category by slug
export const getCategoryBySlug = async (slug: string) => {
  const res = await WooCommerce.get("products/categories", { slug });
  return res.data[0];
};

// Get all products in a given category
export const getProductsByCategorySlug = async (categorySlug: string) => {
  const category = await getCategoryBySlug(categorySlug);
  if (!category || !category.id) return [];
  const products = await WooCommerce.get("products", { category: category.id });
  return products.data;
};
