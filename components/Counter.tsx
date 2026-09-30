"use client";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { ref, get, runTransaction } = await import("firebase/database");
      const { db } = await import("@/lib/firebase");
      const visitsRef = ref(db, "visits/count");
      const show = (n: number) => !cancelled && setCount(n);

      const yaContada = sessionStorage.getItem("visitaContada");

      try {
        if (!yaContada) {
          // Se marca ANTES de la transacción para que el doble efecto
          // de React Strict Mode (en dev) no sume dos veces
          sessionStorage.setItem("visitaContada", "true");
          const result = await runTransaction(visitsRef, (v) => (v || 0) + 1);
          show(result.snapshot.val() || 0);
        } else {
          const snap = await get(visitsRef);
          show(snap.val() || 0);
        }
      } catch (error) {
        console.error("Error con el contador:", error);
        sessionStorage.removeItem("visitaContada");
        try {
          const snap = await get(visitsRef);
          show(snap.val() || 0);
        } catch {}
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <section className="visit-counter-section">
      <div className="visit-line"></div>
      <span className="visit-number" id="visitCount">{count ?? "..."}</span>
      <span className="visit-label">Visitas a nuestra tienda</span>
    </section>
  );
}