"use client";

import { useState } from "react";
import Link from "next/link";
import type { Combo } from "@/data/combos";
import { formatPrice } from "@/lib/discounts";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "51907134693";

export function ComboDetail({ combo }: { combo: Combo }) {
  const [slide, setSlide] = useState(0);
  const total = combo.images.length;
  const go = (n: number) => setSlide((n + total) % total);

  return (
    <div className="product-detail-page">
      <div className="detail-header">
        <Link href="/#combos" className="back-link">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver a combos
        </Link>
      </div>

      <div className="detail-main">
        <div className="detail-gallery">
          {combo.images.map((src, i) => (
            <div key={i} className={`detail-slide ${slide === i ? "active" : ""}`}>
              <img src={src} alt={`${combo.name} - foto ${i + 1}`} />
            </div>
          ))}
          <button type="button" className="combo-arrow combo-arrow-left" aria-label="Foto anterior" onClick={() => go(slide - 1)}>‹</button>
          <button type="button" className="combo-arrow combo-arrow-right" aria-label="Foto siguiente" onClick={() => go(slide + 1)}>›</button>
          <div className="detail-dots">
            {combo.images.map((_, i) => (
              <button
                key={i}
                className={`detail-dot ${slide === i ? "active" : ""}`}
                aria-label={`Foto ${i + 1}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-category">Combo</div>
          <h1 className="detail-name">{combo.name}</h1>
          <div className="detail-price">{formatPrice(combo.price)}</div>
          <p className="detail-description">
            {combo.description.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <p className="detail-description">Incluye: {combo.includes.join(" + ")}</p>

          <a
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! estoy interesad@ en el ${combo.name}`)}`}
          >
            <WhatsAppIcon /> Pedir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
