import { getProducts } from "@/actions/products";


export default function Home() {
  const products = await getProducts();
  return (
    <div></div>
  );
}
