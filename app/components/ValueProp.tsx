"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// Row 1 only: dark · light · dark
const DARK = {
  bg: "#0a0a0a",
  title: "#ffffff",
  desc: "rgba(255,255,255,0.45)",
  cta: "#ffffff",
  ctaArrow: "rgba(255,255,255,0.5)",
  num: "rgba(255,255,255,0.12)",
  border: "rgba(255,255,255,0.06)",
  hoverBg: "#141414",
};
const LIGHT = {
  bg: "#f0eeeb",
  title: "#0a0a0a",
  desc: "rgba(10,10,10,0.55)",
  cta: "#0a0a0a",
  ctaArrow: "rgba(10,10,10,0.4)",
  num: "rgba(10,10,10,0.1)",
  border: "rgba(0,0,0,0.07)",
  hoverBg: "#e8e5e1",
};

const PATTERN = [DARK, LIGHT, DARK];

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

  // Only first 3 pillars
  const pillars = [
    { titleKey: "value.p1.title", descKey: "value.p1.desc", ctaKey: "value.p1.cta", delay: "0s" },
    { titleKey: "value.p2.title", descKey: "value.p2.desc", ctaKey: "value.p2.cta", delay: "0.1s" },
    { titleKey: "value.p3.title", descKey: "value.p3.desc", ctaKey: "value.p3.cta", delay: "0.2s" },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0 0",
        background: "#050505",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(203,10,118,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "100px", left: "-200px", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(203,10,118,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>
            {t("value.label")}
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 4.5vw, 68px)",
              fontWeight: "700",
              lineHeight: "1.05",
              color: "var(--white)",
              letterSpacing: "-0.5px",
              margin: "20px auto 24px",
              maxWidth: "860px",
              transitionDelay: "0.1s",
            }}
          >
            {t("value.title")}
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "18px",
              lineHeight: "1.75",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "580px",
              margin: "0 auto",
              transitionDelay: "0.2s",
            }}
          >
            {t("value.subtitle")}
          </p>
        </div>

        {/* Grid 1×3 */}
        <div
          className="value-pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {pillars.map((p, i) => {
            const theme = PATTERN[i];
            return (
              <div
                key={i}
                className="reveal value-card"
                data-index={i}
                style={{
                  padding: "52px 44px",
                  background: theme.bg,
                  position: "relative",
                  transitionDelay: p.delay,
                  cursor: "default",
                }}
              >
                {/* Top accent line */}
                <div
                  className="card-top-line"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: "100%",
                    height: "2px",
                    background: "var(--pink)",
                    transition: "right 0.4s ease",
                  }}
                />

                {/* Large number */}
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "72px",
                    lineHeight: "1",
                    color: theme.num,
                    marginBottom: "28px",
                    letterSpacing: "-2px",
                    userSelect: "none",
                  }}
                >
                  0{i + 1}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "26px",
                    fontWeight: "700",
                    color: theme.title,
                    lineHeight: "1.2",
                    marginBottom: "14px",
                    letterSpacing: "0.2px",
                  }}
                >
                  {t(p.titleKey)}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    color: theme.desc,
                    marginBottom: "24px",
                  }}
                >
                  {t(p.descKey)}
                </p>

                {/* Insight row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    paddingTop: "18px",
                    borderTop: `1px solid ${theme.border}`,
                  }}
                >
                  <span
                    style={{
                      color: theme.ctaArrow,
                      fontSize: "14px",
                      fontWeight: "700",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    →
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: theme.cta,
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    {t(p.ctaKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing impact banner */}
      <div
        className="reveal"
        style={{
          marginTop: "80px",
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
              textTransform: "uppercase",
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
        .value-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          z-index: 2;
        }
        .value-card[data-index="0"]:hover,
        .value-card[data-index="2"]:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .value-card[data-index="1"]:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .value-card:hover .card-top-line {
          right: 0 !important;
        }
        @media (max-width: 768px) {
          .value-pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
