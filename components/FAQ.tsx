"use client";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "🌸¿De qué material están hechas nuestras joyas?",
      answer:
        "Todas nuestras joyas son 100% acero inoxidable 316L enchapado en oro de 18k. Cada pieza cuenta con una calidad premium y un sello especial que garantiza el brillo y la duración de la joya en el tiempo.",
    },
    {
      question: "🌸¿Qué características especiales tienen?",
      answer:
        "Ofrecemos joyería de nivel A1 con tecnología resistente al agua, alcohol y cremas. Además, no causan alergia en la piel, ya que son hipoalergénicas. Son piezas pensadas para durar y acompañarte en cada momento.",
    },
    {
      question: "🌸¿Cuáles son los beneficios de la tecnología resistente al agua?",
      answer:
        "La tecnología waterproof evita la oxidación y que el color cambie con el tiempo. El acero inoxidable enchapado en oro es uno de los metales más preciosos e hipoalergénicos, perfecto para pieles sensibles.",
    },
    {
      question: "🌸¿Son originales nuestras fragancias?",
      answer:
        "Sí, todas nuestras fragancias Victoria's Secret son 100% originales, traídas directamente desde Estados Unidos. Cada botella viene verificada para garantizar su autenticidad.",
    },
    {
      question: "🌸¿Qué métodos de pago aceptamos?",
      answer:
        "Aceptamos pagos a través de Yape, Plin y transferencias bancarias BCP. Te enviamos los datos de pago una vez que confirmes tu pedido.",
    },
    {
      question: "🌸¿Ofrecen servicio de envío a domicilio?",
      answer:
        "Sí, hacemos delivery a todo Lima y provincia a través de Shalom. El costo por envío es de S/ 5.00 adicionales. Coordinamos contigo los detalles de la entrega.",
    },
  ];

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="faq-section" id="preguntas-frecuentes">
      <div className="faq-container">
        <div className="faq-header">
          <span>The Lizeth Store</span>
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos tus dudas sobre nuestros productos y servicio</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {open === i && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}