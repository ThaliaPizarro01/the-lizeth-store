"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Se reinicia cada vez que cambia el slide (automático o por clic en un punto)
  useEffect(() => {
    const t = setTimeout(() => setCurrent((c) => (c + 1) % 3), 3000);
    return () => clearTimeout(t);
  }, [current]);

  const show = (i: number) => ({ display: current === i ? "block" : "none" });

  return (
    <section className="hero" id="inicio">
      {[1, 2, 3].map((n, i) => (
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

        <div className="hero-discount" style={show(2)}>
          <span className="limited-offer">Oferta por tiempo limitado</span>
          <h2>10% de descuento<br /><span>en todos los productos</span></h2>
          <p>Aprovecha antes de que se acabe.</p>
          <a href="#catalogo" className="hero-button hero-button-discount">VER OFERTA</a>
        </div>

        <div className="hero-dots">
          {["Primera imagen", "Nueva colección", "Oferta 10% de descuento"].map((label, i) => (
            <button key={i} className={`hero-dot ${current === i ? "active" : ""}`} aria-label={label} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}