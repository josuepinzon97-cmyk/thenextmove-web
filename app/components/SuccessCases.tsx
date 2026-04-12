"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function SuccessCases() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.06 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      industryKey: "cases.c1.industry",
      titleKey: "cases.c1.title",
      descKey: "cases.c1.desc",
      piece: "♛",
      metrics: [
        { value: "+340%", labelKey: "cases.c1.m1" },
        { value: "6.2x", labelKey: "cases.c1.m2" },
        { value: "-58%", labelKey: "cases.c1.m3" },
      ],
      delay: "0.1s",
    },
    {
      industryKey: "cases.c2.industry",
      titleKey: "cases.c2.title",
      descKey: "cases.c2.desc",
      piece: "♜",
      metrics: [
        { value: "45+", labelKey: "cases.c2.m1" },
        { value: "+890%", labelKey: "cases.c2.m2" },
        { value: "$8K", labelKey: "cases.c2.m3" },
      ],
      delay: "0.25s",
    },
    {
      industryKey: "cases.c3.industry",
      titleKey: "cases.c3.title",
      descKey: "cases.c3.desc",
      piece: "♞",
      metrics: [
        { value: "$127K", labelKey: "cases.c3.m1" },
        { value: "18%", labelKey: "cases.c3.m2" },
        { value: "64%", labelKey: "cases.c3.m3" },
      ],
      delay: "0.4s",
    },
  ];

  return (
    <section
      id="casos"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "var(--gray-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(203,10,118,0.07) 0%, transparent 70%)",
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>
            {t("cases.label")}
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(38px, 4vw, 60px)",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "var(--white)",
              letterSpacing: "-0.5px",
              marginTop: "20px",
              transitionDelay: "0.15s",
            }}
          >
            {t("cases.title")}
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "480px",
              margin: "16px auto 0",
              transitionDelay: "0.25s",
            }}
          >
            {t("cases.subtitle")}
          </p>
        </div>

        {/* Cases grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="cases-grid"
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="reveal card-dark"
              style={{
                padding: "0",
                overflow: "hidden",
                transitionDelay: c.delay,
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  height: "200px",
                  background: `linear-gradient(135deg, var(--gray-700) 0%, var(--gray-800) 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Chess piece watermark */}
                <span
                  style={{
                    fontSize: "120px",
                    color: "var(--white)",
                    opacity: 0.04,
                    position: "absolute",
                    lineHeight: 1,
                  }}
                >
                  {c.piece}
                </span>

                {/* Industry tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                  }}
                >
                  <span className="tag-pill">{t(c.industryKey)}</span>
                </div>

                {/* Placeholder label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "rgba(255,255,255,0.2)",
                    textTransform: "uppercase",
                  }}
                >
                  Imagen cliente
                </div>

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60px",
                    background:
                      "linear-gradient(transparent, var(--gray-800))",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "var(--white)",
                    marginBottom: "12px",
                    lineHeight: "1.2",
                  }}
                >
                  {t(c.titleKey)}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "28px",
                  }}
                >
                  {t(c.descKey)}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1px",
                    background: "rgba(255,255,255,0.05)",
                    marginBottom: "24px",
                  }}
                >
                  {c.metrics.map((m, j) => (
                    <div
                      key={j}
                      style={{
                        background: "var(--gray-800)",
                        padding: "16px 12px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "var(--pink)",
                          lineHeight: 1,
                          marginBottom: "6px",
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "10px",
                          letterSpacing: "1px",
                          color: "rgba(255,255,255,0.35)",
                          textTransform: "uppercase",
                        }}
                      >
                        {t(m.labelKey)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "60px", transitionDelay: "0.5s" }}
        >
          <a
            href="/casos"
            className="btn-secondary"
            style={{ textDecoration: "none", color: "var(--white)" }}
          >
            {t("cases.cta")} →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) and (min-width: 900px) {
          .cases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
