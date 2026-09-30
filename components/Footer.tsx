export default function Footer() {
  const sections = [
    {
      title: "Tienda",
      links: [
        { href: "#joyas", label: "Joyería", external: false },
        { href: "#fragancias", label: "Fragancias", external: false },
      ],
    },
    {
      title: "Ayuda",
      links: [
        { href: "#como-comprar", label: "Envíos", external: false },
        { href: "#preguntas-frecuentes", label: "Preguntas Frecuentes", external: false },
      ],
    },
    {
      title: "Síguenos",
      links: [
        { href: "https://www.instagram.com/the.lizeth.store/", label: "Instagram", external: true },
        { href: "https://www.tiktok.com/@the.lizeth.store", label: "TikTok", external: true },
        { href: "https://www.facebook.com/profile.php?id=61593919891451", label: "Facebook", external: true },
      ],
    },
  ];

  return (
    <footer>
      <div className="footer-content">
        {/* Logo y descripción */}
        <div className="footer-brand">
          <div className="footer-info">
            <h3>The Lizeth Store</h3>
            <p>Joyería y fragancias para brillar cada día.</p>
          </div>
        </div>

        {/* Columnas de enlaces */}
        <div className="footer-sections">
          {sections.map((section) => (
            <div key={section.title} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2026 The Lizeth Store · Todos los derechos reservados</p>
      </div>
    </footer>
  );
}