import Link from "next/link";
import { products } from "@/data/products";
import { ProductDetail } from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Producto no encontrado</h1>
        <Link href="/#catalogo">Volver al catálogo</Link>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}