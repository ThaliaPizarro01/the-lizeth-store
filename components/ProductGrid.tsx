"use client";
import { useCallback, useState } from "react";
import Link from "next/link";
import { jewelryFilters, products, type Product } from "@/data/products";
import { DiscountBadge, Price } from "./Price";
import { DISCOUNT_ACTIVE, discountedPrice } from "@/lib/discounts";

const ITEMS_PER_PAGE = 8;

function ProductCard({ p, hidden }: { p: Product; hidden?: boolean }) {
  return (
    <Link href={`/producto/${p.id}`}>
      <article className={`product-card ${hidden ? "jewelry-product-hidden" : ""}`}>
        <img src={p.image} alt={p.name} className="product-image" />
        <div className="product-info">
          <div className="product-category">{p.label}</div>
          <h3 className="product-name">{p.name}</h3>
          <p className="product-description">{p.description}</p>
          <div className="product-bottom">
            <span className="price"><Price value={p.price} /></span>
          </div>
        </div>
        <DiscountBadge />
      </article>
    </Link>
  );
}

export default function ProductGrid() {
  const [filter, setFilter] = useState("todos");
  const [sort, setSort] = useState("default");
  const [showAllJoyas, setShowAllJoyas] = useState(false);
  const [showAllFragancias, setShowAllFragancias] = useState(false);

  const sortProducts = (productsArray: Product[]): Product[] => {
    if (sort === "default") return productsArray;
    return [...productsArray].sort((a, b) => {
      const priceA = DISCOUNT_ACTIVE ? discountedPrice(a.price) : a.price;
      const priceB = DISCOUNT_ACTIVE ? discountedPrice(b.price) : b.price;
      return sort === "asc" ? priceA - priceB : priceB - priceA;
    });
  };

  const joyas = products.filter((p) => p.type === "joya");
  const sortedJoyas = sortProducts(joyas);
  const displayedJoyas = showAllJoyas ? sortedJoyas : sortedJoyas.slice(0, ITEMS_PER_PAGE);

  const fragancias = products.filter((p) => p.type === "fragancia");
  const sortedFragancias = sortProducts(fragancias);
  const displayedFragancias = showAllFragancias ? sortedFragancias : sortedFragancias.slice(0, ITEMS_PER_PAGE);

  return (
    <section className="products-section" id="catalogo">
      <div id="joyas">
        <div className="category-heading">
          <h2>✨ Joyas Premium</h2>
          <span>NUESTRA COLECCIÓN</span>
        </div>
        <div className="category-description">
          Joyas de acero inoxidable 316L enchapado en oro 18K, resistentes al agua y de gran durabilidad
        </div>

        <div className="jewelry-controls">
          <div className="jewelry-filters">
            {jewelryFilters.map((f) => (
              <button key={f.key} type="button" className={`jewelry-filter ${filter === f.key ? "active" : ""}`} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>

          <div className="sort-select">
            <label htmlFor="sort-price">Ordenar por:</label>
            <select id="sort-price" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Por defecto</option>
              <option value="asc">Precio: menor a mayor</option>
              <option value="desc">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {displayedJoyas.map((p) => (
            <ProductCard key={p.id} p={p}
              hidden={filter !== "todos" && !p.categories.includes(filter)} />
          ))}
        </div>

        {sortedJoyas.length > ITEMS_PER_PAGE && (
          <div className="pagination-center">
            <button className="btn-see-more" onClick={() => setShowAllJoyas(!showAllJoyas)}>
              {showAllJoyas ? "Mostrar menos" : `Ver todos (${sortedJoyas.length})`}
            </button>
          </div>
        )}
      </div>

      <div className="separator"><span>✦</span></div>

      <div id="fragancias">
        <div className="category-heading">
          <h2>🌸 Fragancias Victoria Secret</h2>
          <span>NUESTRA COLECCIÓN</span>
        </div>
        <div className="category-description">
          Fragancias importadas 100% originales de Victoria Secret, traídas directamente desde USA
        </div>

        <div className="sort-select sort-select-centered">
          <label htmlFor="sort-price-fragancias">Ordenar por:</label>
          <select id="sort-price-fragancias" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Por defecto</option>
            <option value="asc">Precio: menor a mayor</option>
            <option value="desc">Precio: mayor a menor</option>
          </select>
        </div>

        <div className="products-grid">
          {displayedFragancias.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>

        {sortedFragancias.length > ITEMS_PER_PAGE && (
          <div className="pagination-center">
            <button className="btn-see-more" onClick={() => setShowAllFragancias(!showAllFragancias)}>
              {showAllFragancias ? "Mostrar menos" : `Ver todos (${sortedFragancias.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}