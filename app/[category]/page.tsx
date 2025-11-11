import { getProductsByCategorySlug } from '@/actions/products';
import ProductGrid from '@/components/ProductGrid';

interface Props {
  params: { category: string }
}

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategorySlug(params.category);
  return <ProductGrid products={products} />;
}
