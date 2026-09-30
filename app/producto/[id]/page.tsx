"use client";

import { use, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { DiscountBadge, Price } from "@/components/Price";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { DISCOUNT_ACTIVE, DISCOUNT_BADGE_SRC } from "@/lib/discounts";

const WHATSAPP_NUMBER = "51907134693";

// ← AGREGAR ESTO
export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

function ProductDetail({ product }: { product: Product }) {
  const [slide, setSlide] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const relatedRef = useRef<HTMLDivElement>(null);

  const related = products
    .filter((p) =>
      p.type === product.type &&
      p.id !== product.id &&
      (product.categories.length === 0 || p.categories.some((c) => product.categories.includes(c)))
    )
    .slice(0, 5);

  useEffect(() => {
    const t = setTimeout(() => setSlide((s) => (s === 0 ? 1 : 0)), 3000);
    return () => clearTimeout(t);
  }, [slide, product]);

  const updateArrows = useCallback(() => {
    const el = relatedRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 5) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }
    setCanLeft(el.scrollLeft > 5);
    setCanRight(el.scrollLeft < max - 5);
  }, []);

  useEffect(() => {
    const el = relatedRef.current;
    if (!el) return;
    const id = setTimeout(updateArrows, 50);
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      clearTimeout(id);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [product, updateArrows]);

  const scrollRelated = (dir: number) =>
    relatedRef.current?.scrollBy({ left: dir * relatedRef.current.clientWidth, behavior: "smooth" });

  const message = `Hola, quiero saber más sobre este producto: ${product.name}`;

  return (
    <div className="product-detail-page">
      <div className="detail-header">
        <Link href="/#catalogo" className="back-link">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver al catálogo
        </Link>
      </div>

      <div className="detail-main">
        <div className="detail-gallery">
          {product.images.map((src, i) => (
            <div key={i} className={`detail-slide ${slide === i ? "active" : ""}`}>
              <img src={src} alt={product.name} />
            </div>
          ))}
          <div className="detail-dots">
            {product.images.map((_, i) => (
              <button
                key={i}
                className={`detail-dot ${slide === i ? "active" : ""}`}
                aria-label={`Foto ${i + 1}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <DiscountBadge />
        </div>

        <div className="detail-info">
          <div className="detail-category">{product.label}</div>
          <h1 className="detail-name">{product.name}</h1>
          <div className="detail-price">
            <Price value={product.price} />
          </div>
          <p className="detail-description">{product.description}</p>

          <a
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
          >
            <WhatsAppIcon /> Pedir por WhatsApp
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="detail-related-section">
          <h4>También te puede interesar</h4>
          <div className="detail-carousel">
            <button
              type="button"
              className={`detail-arrow detail-arrow-left ${canLeft ? "visible" : ""}`}
              aria-label="Ver productos anteriores"
              onClick={() => scrollRelated(-1)}
            >
              ‹
            </button>

            <div className="detail-grid" ref={relatedRef}>
              {related.map((r) => (
                <Link key={r.id} href={`/producto/${r.id}`} className="detail-related-card">
                  <div className="detail-related-image">
                    <img src={r.images[0]} alt={r.name} />
                    {DISCOUNT_ACTIVE && (
                      <img className="detail-discount-badge" src={DISCOUNT_BADGE_SRC} alt="Descuento" />
                    )}
                  </div>
                  <div className="detail-related-name">{r.name}</div>
                  <div className="detail-related-price">
                    <Price value={r.price} />
                  </div>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className={`detail-arrow detail-arrow-right ${canRight ? "visible" : ""}`}
              aria-label="Ver más productos"
              onClick={() => scrollRelated(1)}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
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