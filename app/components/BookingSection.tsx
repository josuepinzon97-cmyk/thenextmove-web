"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const CAL_USERNAME = "next-move-agencia"; // Reemplaza con tu usuario de Cal.com

const bullets = [
  "Atención completamente personalizada a tu caso",
  "Confirmación inmediata en tu correo",
  "Sin llamadas previas ni esperas innecesarias",
  "Sesión enfocada en resultados reales",
];

export default function BookingSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const calRef = useRef<HTMLDivElement>(null);
  const [calLoaded, setCalLoaded] = useState(false);

  // Reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Cal.com embed — using official IIFE pattern
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", { origin: "https://cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-booking-embed",
        calLink: "${CAL_USERNAME}",
        layout: "month_view"
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#cb0a76" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    `;
    document.body.appendChild(script);

    const timer = setTimeout(() => setCalLoaded(true), 1500);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  const scrollToCalendar = () => {
    document.querySelector("#agendar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Pre-CTA strip ── */}
      <div
        style={{
          background: "#111111",
          padding: "72px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Pink glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(203,10,118,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--pink)",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Agenda tu consulta
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#ffffff",
              lineHeight: "1.05",
              letterSpacing: "-1px",
              marginBottom: "28px",
            }}
          >
            ¿Listo para{" "}
            <span style={{ color: "var(--pink)" }}>llenar tu agenda</span>?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "17px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "40px",
            }}
          >
            Reserva tu sesión estratégica gratuita y descubre exactamente qué necesita tu negocio para escalar.
          </p>
          <button
            className="btn-primary animate-pulse-pink"
            style={{ padding: "18px 44px", fontSize: "16px" }}
            onClick={scrollToCalendar}
          >
            Ver disponibilidad <span style={{ fontSize: "20px" }}>↓</span>
          </button>
        </div>
      </div>

      {/* ── Main booking section ── */}
      <section
        id="agendar"
        ref={sectionRef}
        style={{
          background: "#f5f4f2",
          padding: "100px 0 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(203,10,118,0.35), transparent)",
          }}
        />

        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(203,10,118,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="booking-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* ── Left column ── */}
            <div style={{ paddingTop: "24px" }}>
              <div className="section-label reveal" style={{ marginBottom: "24px" }}>
                Agenda tu sesión
              </div>

              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(38px, 4vw, 62px)",
                  fontWeight: "700",
                  lineHeight: "1.05",
                  color: "#111111",
                  letterSpacing: "-0.5px",
                  marginBottom: "20px",
                  transitionDelay: "0.1s",
                }}
              >
                Agenda tu consulta{" "}
                <span style={{ color: "var(--pink)" }}>en minutos</span>
              </h2>

              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  color: "rgba(10,10,10,0.55)",
                  marginBottom: "44px",
                  transitionDelay: "0.15s",
                }}
              >
                Elige el horario que mejor se adapte a ti y recibe atención personalizada de nuestro equipo.
              </p>

              {/* Bullets */}
              <div
                className="reveal"
                style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", transitionDelay: "0.2s" }}
              >
                {bullets.map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(203,10,118,0.1)",
                        border: "1px solid rgba(203,10,118,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 4.5L4 7.5L10 1" stroke="#cb0a76" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        color: "rgba(10,10,10,0.70)",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="reveal" style={{ transitionDelay: "0.3s" }}>
                <button
                  className="btn-primary"
                  style={{ padding: "18px 40px", fontSize: "15px" }}
                  onClick={() =>
                    calRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  Agendar ahora <span style={{ fontSize: "18px" }}>→</span>
                </button>
              </div>

              {/* Trust note */}
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "12px",
                  color: "rgba(10,10,10,0.35)",
                  marginTop: "20px",
                  letterSpacing: "0.3px",
                  transitionDelay: "0.35s",
                }}
              >
                Sesión de 30 min · 100% gratuita · Sin compromisos
              </p>
            </div>

            {/* ── Right column: Cal.com embed ── */}
            <div
              ref={calRef}
              className="reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
                  minHeight: "660px",
                  position: "relative",
                }}
              >
                {/* Skeleton loader */}
                {!calLoaded && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      background: "#ffffff",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        border: "3px solid rgba(203,10,118,0.15)",
                        borderTopColor: "var(--pink)",
                        animation: "booking-spin 0.8s linear infinite",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "13px",
                        color: "rgba(10,10,10,0.35)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Cargando calendario...
                    </p>
                  </div>
                )}

                {/* Cal embed target */}
                <div
                  id="cal-booking-embed"
                  style={{
                    width: "100%",
                    minHeight: "660px",
                    opacity: calLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .booking-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
          @keyframes booking-spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    </>
  );
}
