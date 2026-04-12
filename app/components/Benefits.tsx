"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Benefits() {
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

  const benefits = [
    { icon: "♛", titleKey: "benefits.b1.title", descKey: "benefits.b1.desc", delay: "0s" },
    { icon: "♜", titleKey: "benefits.b2.title", descKey: "benefits.b2.desc", delay: "0.1s" },
    { icon: "♝", titleKey: "benefits.b3.title", descKey: "benefits.b3.desc", delay: "0.2s" },
    { icon: "♞", titleKey: "benefits.b4.title", descKey: "benefits.b4.desc", delay: "0.3s" },
    { icon: "♟", titleKey: "benefits.b5.title", descKey: "benefits.b5.desc", delay: "0.4s" },
    { icon: "♚", titleKey: "benefits.b6.title", descKey: "benefits.b6.desc", delay: "0.5s" },
  ];

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
      {/* Subtle pink glow top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(203,10,118,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>
            {t("benefits.label")}
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(38px, 4vw, 60px)",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "#111111",
              letterSpacing: "-0.5px",
              marginTop: "20px",
              transitionDelay: "0.15s",
            }}
          >
            {t("benefits.title")}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.07)",
          }}
          className="benefits-grid"
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "#ffffff",
                padding: "44px 36px",
                transitionDelay: b.delay,
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#eeece8";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#ffffff";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Pink corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  height: "40px",
                  background: "var(--pink)",
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  fontSize: "36px",
                  color: "var(--pink)",
                  marginBottom: "20px",
                  opacity: 0.75,
                  lineHeight: 1,
                }}
              >
                {b.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#111111",
                  marginBottom: "12px",
                }}
              >
                {t(b.titleKey)}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "rgba(10,10,10,0.55)",
                }}
              >
                {t(b.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
