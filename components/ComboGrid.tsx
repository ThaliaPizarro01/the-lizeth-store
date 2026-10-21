import Link from "next/link";
import { combos } from "@/data/combos";
import { formatPrice } from "@/lib/discounts";

export default function ComboGrid() {
  return (
    <section className="products-section" id="combos">
      <div className="separator"><span>✦</span></div>
      <div className="category-heading">
        <h2>🎁 Combos</h2>
        <span>COMBINACIONES QUE ENCANTAN</span>
      </div>
      <div className="category-description">
        Lleva tu fragancia favorita junto a algunas piezas hermosas a un precio especial
      </div>
      <div className="products-grid">
        {combos.map((c) => (
          <Link key={c.id} href={`/combo/${c.id}`}>
            <article className="product-card">
              <img src={c.image} alt={c.name} className="product-image" />
              <div className="product-info">
                <div className="product-category">Combo</div>
                <h3 className="product-name combo-name">{c.name}</h3>
                <p className="product-description combo-text">{c.description}</p>
                <div className="product-bottom">
                  <span className="price">{formatPrice(c.price)}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
