"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.2 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "#f5f4f2",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Pink accent lines top/bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(203,10,118,0.4), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(203,10,118,0.4), transparent)",
        }}
      />

      {/* Central pink glow (subtle on light) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(203,10,118,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Background chess pieces (dark, low opacity) */}
      <div
        style={{
          position: "absolute",
          left: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "300px",
          color: "#111111",
          opacity: 0.03,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        ♔
      </div>
      <div
        style={{
          position: "absolute",
          right: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "300px",
          color: "#111111",
          opacity: 0.03,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        ♚
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label reveal" style={{ justifyContent: "center" }}>
          The Next Move
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: "700",
            lineHeight: "1.1",
            color: "#111111",
            letterSpacing: "-1px",
            marginTop: "20px",
            marginBottom: "28px",
            transitionDelay: "0.1s",
          }}
        >
          {t("finalcta.title1")}
          <br />
          <span style={{ color: "var(--pink)" }}>{t("finalcta.title2")}</span>
        </h2>

        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "17px",
            lineHeight: "1.8",
            color: "rgba(10,10,10,0.55)",
            marginBottom: "48px",
            transitionDelay: "0.2s",
          }}
        >
          {t("finalcta.subtitle")}
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            transitionDelay: "0.3s",
          }}
        >
          <button
            className="btn-primary animate-pulse-pink"
            style={{ padding: "20px 44px", fontSize: "16px" }}
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("finalcta.btn1")}
            <span style={{ fontSize: "20px" }}>→</span>
          </button>
          <a
            href="https://wa.me/573113649179"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "20px 44px",
              fontSize: "16px",
              textDecoration: "none",
              color: "#111111",
              border: "1.5px solid rgba(0,0,0,0.32)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "var(--pink)";
              el.style.border = "1.5px solid var(--pink)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "#111111";
              el.style.border = "1.5px solid rgba(0,0,0,0.32)";
              el.style.transform = "translateY(0)";
            }}
          >
            {t("finalcta.btn2")}
          </a>
        </div>
      </div>
    </section>
  );
}
