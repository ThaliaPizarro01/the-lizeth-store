"use client";
import { useEffect, useState } from "react";

// Cambia a true para volver a mostrar el slide de oferta/descuento
const SHOW_DISCOUNT = false;

const DOT_LABELS = ["Primera imagen", "Nueva colección", ...(SHOW_DISCOUNT ? ["Oferta 10% de descuento"] : [])];
const TOTAL_SLIDES = DOT_LABELS.length;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Se reinicia cada vez que cambia el slide (automático o por clic en un punto)
  useEffect(() => {
    const t = setTimeout(() => setCurrent((c) => (c + 1) % TOTAL_SLIDES), 3000);
    return () => clearTimeout(t);
  }, [current]);

  const show = (i: number) => ({ display: current === i ? "block" : "none" });

  return (
    <section className="hero" id="inicio">
      {DOT_LABELS.map((_, i) => i + 1).map((n, i) => (
        <div key={n} className={`hero-slide slide-${n} ${current === i ? "active" : ""}`} />
      ))}

      <div className="hero-content">
        <div className="hero-main-content" style={show(0)}>
          <div className="hero-small">The Lizeth Store</div>
          <h1>Detalles que<br /><span>hablan de ti</span></h1>
          <p>Descubre nuestra selección de joyas y fragancias pensadas para acompañarte en cada momento.</p>
          <a href="#catalogo" className="hero-button">VER CATÁLOGO</a>
        </div>

        <div className="hero-new-collection" style={show(1)}>
          <span className="coming-soon">Próximamente</span>
          <h2>Nueva Colección<br /><span>de Joyas</span></h2>
          <p>Nuevos detalles para hacerte brillar.</p>
        </div>

        {SHOW_DISCOUNT && (
          <div className="hero-discount" style={show(2)}>
            <span className="limited-offer">Oferta por tiempo limitado</span>
            <h2>10% de descuento<br /><span>en todos los productos</span></h2>
            <p>Aprovecha antes de que se acabe.</p>
            <a href="#catalogo" className="hero-button hero-button-discount">VER OFERTA</a>
          </div>
        )}

        <div className="hero-dots">
          {DOT_LABELS.map((label, i) => (
            <button key={i} className={`hero-dot ${current === i ? "active" : ""}`} aria-label={label} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}