import { WhatsAppIcon } from "./WhatsAppIcon";

const wa = (t: string) => `https://wa.me/51907134693?text=${encodeURIComponent(t)}`;

export function Categories() {
  return (
    <section className="categories">
      <div className="section-title">
        <small>Descubre nuestra colección</small>
        <h2>Elige tu estilo</h2>
      </div>
      <div className="category-grid">
        <a href="#joyas" className="category-card category-jewelry">
          <div className="category-content"><h3>Joyas</h3><p>Detalles delicados para cada ocasión</p></div>
        </a>
        <a href="#fragancias" className="category-card category-fragrance">
          <div className="category-content"><h3>Fragancias</h3><p>Aromas que dejan huella</p></div>
        </a>
      </div>
    </section>
  );
}

const steps = [
  ["Elige tu producto", "Explora joyas y fragancias, y elige tu favorito."],
  ["Escríbenos por WhatsApp", 'Pulsa "Pedir por WhatsApp" y cuéntanos qué te gustó.'],
  ["Paga con los datos que te enviamos", "Confirmamos stock y te enviamos los datos de pago."],
  ["Recibe tu pedido", "Coordinamos el envío y ¡listo!"],
];

export function HowToBuy() {
  return (
    <section className="how-to-buy-section" id="como-comprar">
      <div className="payment-header">
        <span>THE LIZETH STORE</span>
        <h2>¿Cómo comprar?</h2>
        <p>Así de fácil es tener tu pedido en camino</p>
      </div>
      <div className="how-to-buy-grid">
        {steps.map(([title, text], i) => (
          <div key={i} className="how-to-buy-step">
            <span className="step-number">{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="shipping-note">🚚 Envíos por Shalom: <strong>S/ 5.00 adicionales</strong>, previa coordinación.</p>
      <p className="attention-hours">🕐 Horario de atención: <strong>Lunes a Sábados de 9 AM a 10 PM</strong></p>
    </section>
  );
}

export function Payments() {
  return (
    <section className="payment-section" id="pagos">
      <div className="payment-header">
        <span>THE LIZETH STORE</span>
        <h2>Formas de pago</h2>
        <p>Te enviamos los datos al confirmar tu pedido</p>
      </div>
      <div className="payment-container payment-container-simple">
        <div className="payment-card payment-card-simple">
          <div className="payment-logos">
            <div className="payment-icon"><img src="/imagenes/redes/yape-app-logo-png_seeklogo-399697.png" alt="Logo de Yape - App de pagos Perú" /></div>
            <div className="payment-icon"><img src="/imagenes/redes/plin-logo-png_seeklogo-386806.png" alt="Logo de Plin - Billetera digital Perú" /></div>
          </div>
          <h3>Yape / Plin</h3>
          <p className="payment-note">Te enviamos los datos al confirmar tu pedido</p>
          <a className="whatsapp-btn" target="_blank" rel="noreferrer" href={wa("Hola, quiero pagar con Yape o Plin, ¿me envías los datos?")}>
            <WhatsAppIcon /> Pedir datos por WhatsApp
          </a>
        </div>

        <div className="payment-card payment-card-simple">
          <div className="payment-logos">
            <div className="payment-icon bcp"><img src="/imagenes/redes/images.png" alt="Logo de BCP - Banco de Crédito del Perú" /></div>
          </div>
          <h3>Transferencia BCP</h3>
          <p className="payment-note">Te enviamos cuenta y CCI al confirmar tu pedido</p>
          <a className="whatsapp-btn" target="_blank" rel="noreferrer" href={wa("Hola, quiero pagar por transferencia BCP, ¿me envías los datos?")}>
            <WhatsAppIcon /> Pedir datos por WhatsApp
          </a>
        </div>
      </div>
      <div className="payment-thanks"><em>¡Gracias por tu confianza!</em></div>
    </section>
  );
}

export function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about-content">
        <h2>✦ The Lizeth Store ✦</h2>
        <p>
          Bienvenida a un espacio creado para encontrar esos pequeños detalles que hacen especial cada momento. Aquí vas a encontrar productos cuidadosamente elegidos para ti.
          <br /><br />
          Creé The Lizeth Store para chicas que aman rodearse de cosas lindas y cuidadosamente elegidas: joyas de acero inoxidable 316L enchapado en oro 18K, resistentes al agua y pensadas para durar, además de fragancias y productos de cuidado personal 100% originales, traídos directamente desde Estados Unidos.
          <br /><br />
          Cada pieza que ves aquí pasa por un proceso de selección cuidadoso, porque quiero que lo que llega a tus manos sea exactamente lo que promete: calidad real, sin sorpresas.
          <br /><br />
          Hecho con cariño, para las que se atreven a brillar a su manera. 🤍✨
        </p>
      </div>
    </section>
  );
}