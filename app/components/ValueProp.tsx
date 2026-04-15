"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ValueProp() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const bullets = [
    "Estrategias adaptadas a tu sector",
    'Enfoque en clientes reales, no "likes"',
    "Sistema probado paso a paso",
    "Claridad total en lo que se hace y por qué",
  ];

  return (
    <section ref={sectionRef} style={{ position: "relative", overflow: "hidden" }}>

      {/* ── Header (fondo oscuro) ── */}
      <div style={{ background: "#050505", padding: "100px 32px 72px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>
            ¿Por qué escogernos?
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 4.5vw, 68px)",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "var(--white)",
              letterSpacing: "-0.5px",
              margin: "20px auto 0",
              transitionDelay: "0.1s",
            }}
          >
            ¿Por qué elegirnos para llenar tu agenda de clientes?
          </h2>
        </div>
      </div>

      {/* ── Subtítulo (fondo claro) ── */}
      <div style={{ background: "#f5f4f2", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(26px, 3vw, 44px)",
              fontWeight: "700",
              lineHeight: "1.2",
              letterSpacing: "-0.3px",
              color: "#111111",
            }}
          >
            No somos una agencia más.{" "}
            <span style={{ color: "var(--pink)" }}>
              Somos un sistema enfocado en resultados reales
            </span>{" "}
            para servicios profesionales.
          </p>
        </div>
      </div>

      {/* ── Split: claro izquierda / oscuro derecha ── */}
      <div
        className="valueprop-split"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Lado claro — problema */}
        <div
          style={{
            background: "#f5f4f2",
            padding: "72px 64px 80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            className="reveal-left"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(28px, 3vw, 46px)",
              fontWeight: "700",
              lineHeight: "1.15",
              color: "#111111",
              letterSpacing: "-0.3px",
              marginBottom: "36px",
            }}
          >
            Muchos negocios hacen marketing,
            <br />
            pero no consiguen clientes.
          </h3>

          <div
            className="reveal-left"
            style={{ transitionDelay: "0.1s", borderLeft: "3px solid var(--pink)", paddingLeft: "24px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "17px",
                fontWeight: "600",
                lineHeight: "1.5",
                color: "#111111",
                marginBottom: "12px",
              }}
            >
              No trabajamos con cualquier negocio.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "16px",
                lineHeight: "1.75",
                color: "rgba(10,10,10,0.55)",
                margin: 0,
              }}
            >
              Los servicios profesionales necesitan un enfoque específico para
              atraer clientes de calidad.
            </p>
          </div>
        </div>

        {/* Lado oscuro — propuesta */}
        <div
          style={{
            background: "#0a0a0a",
            padding: "72px 64px 80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="reveal-right"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-jakarta)",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
              color: "var(--pink)",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: "20px", height: "1px", background: "var(--pink)", display: "inline-block" }} />
            Lo que proponemos construir
            <span style={{ width: "20px", height: "1px", background: "var(--pink)", display: "inline-block" }} />
          </div>

          <h3
            className="reveal-right"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(26px, 2.5vw, 40px)",
              fontWeight: "700",
              lineHeight: "1.2",
              color: "var(--white)",
              letterSpacing: "-0.3px",
              marginBottom: "36px",
              transitionDelay: "0.1s",
            }}
          >
            Un sistema enfocado en generar resultados,
            <br />
            <span style={{ color: "var(--pink)" }}>no métricas vacías.</span>
          </h3>

          <ul
            className="reveal-right"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transitionDelay: "0.2s",
            }}
          >
            {bullets.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "20px",
                    height: "20px",
                    background: "rgba(203,10,118,0.15)",
                    border: "1px solid rgba(203,10,118,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#cb0a76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Banner de cierre (fondo oscuro) ── */}
      <div
        className="reveal"
        style={{
          padding: "72px 32px",
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a0009 50%, #0f0f0f 100%)",
          borderTop: "1px solid rgba(203,10,118,0.2)",
          position: "relative",
          overflow: "hidden",
          transitionDelay: "0.2s",
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "900px", height: "300px", background: "radial-gradient(ellipse, rgba(203,10,118,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 20px",
              border: "1px solid rgba(203,10,118,0.4)",
              background: "rgba(203,10,118,0.08)",
              fontFamily: "var(--font-jakarta)",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
              color: "var(--pink)",
              fontWeight: "700",
              marginBottom: "28px",
            }}
          >
            Nuestro compromiso
          </div>
          <p
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(26px, 3.5vw, 52px)",
              lineHeight: "1.15",
              color: "var(--white)",
              letterSpacing: "0.3px",
              margin: 0,
            }}
          >
            {t("value.closing")}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .valueprop-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
