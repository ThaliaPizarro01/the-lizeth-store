import Link from "next/link";
import { combos } from "@/data/combos";
import { ComboDetail } from "./ComboDetail";

export function generateStaticParams() {
  return combos.map((c) => ({ id: c.id }));
}

export default async function ComboPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const combo = combos.find((c) => c.id === id);

  if (!combo) {
    return (
      <div className="product-not-found">
        <h1>Combo no encontrado</h1>
        <Link href="/#combos">Volver a combos</Link>
      </div>
    );
  }

  return <ComboDetail combo={combo} />;
}
