"use client";

import { useState } from "react";

const links = [
  ["/#inicio", "Inicio"],
  ["/#joyas", "Joyas"],
  ["/#fragancias", "Fragancias"],
  ["/#pagos", "Formas de pago"],
  ["/#nosotros", "Nosotros"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <a href="/#inicio" className="logo">
          <img
            src="/imagenes/marca/logo-sin-fondo.png"
            alt="The Lizeth Store - Joyas y Fragancias Importadas"
          />
        </a>

        <nav id="navMenu" className={open ? "active" : ""}>
          {links.map(([href, text]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {text}
            </a>
          ))}
        </nav>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}