"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
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

  const steps = [
    {
      num: "01",
      piece: "♙",
      titleKey: "process.step1.title",
      descKey: "process.step1.desc",
      delay: "0.1s",
    },
    {
      num: "02",
      piece: "♗",
      titleKey: "process.step2.title",
      descKey: "process.step2.desc",
      delay: "0.25s",
    },
    {
      num: "03",
      piece: "♖",
      titleKey: "process.step3.title",
      descKey: "process.step3.desc",
      delay: "0.4s",
    },
    {
      num: "04",
      piece: "♛",
      titleKey: "process.step4.title",
      descKey: "process.step4.desc",
      delay: "0.55s",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "var(--gray-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background large chess piece */}
      <div
        style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "500px",
          color: "var(--white)",
          opacity: 0.02,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        ♔
      </div>

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
        <div style={{ marginBottom: "80px" }}>
          <div className="section-label reveal">{t("process.label")}</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "end",
              marginTop: "20px",
            }}
            className="process-header-grid"
          >
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(38px, 4vw, 60px)",
                fontWeight: "700",
                lineHeight: "1.1",
                color: "var(--white)",
                letterSpacing: "-0.5px",
                transitionDelay: "0.1s",
              }}
            >
              {t("process.title")}
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.5)",
                transitionDelay: "0.2s",
              }}
            >
              {t("process.subtitle")}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="process-steps-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(203,10,118,0.4), rgba(203,10,118,0.4), transparent)",
              zIndex: 0,
            }}
            className="process-connector"
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "0 32px 0",
                transitionDelay: step.delay,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Circle with piece */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--black)",
                  border: "1px solid rgba(203,10,118,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  color: "var(--pink)",
                  marginBottom: "32px",
                  position: "relative",
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                {step.piece}
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    right: "calc(10px - 1px)",
                    width: "14px",
                    height: "1px",
                    background: "rgba(203,10,118,0.4)",
                    transform: "rotate(45deg) translateX(7px) translateY(-7px)",
                  }}
                />
              </div>

              {/* Number */}
              <div
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  color: "var(--pink)",
                  marginBottom: "12px",
                  opacity: 0.7,
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "var(--white)",
                  marginBottom: "14px",
                  lineHeight: "1.2",
                }}
              >
                {t(step.titleKey)}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "80px",
            transitionDelay: "0.5s",
          }}
        >
          <button
            className="btn-primary"
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Quiero empezar mi estrategia →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .process-steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .process-connector { display: none !important; }
        }
        @media (max-width: 1024px) {
          .process-steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .process-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
