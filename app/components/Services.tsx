"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  const handleSelectService = (index: number) => {
    setActiveService(index);
    if (window.innerWidth < 768) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

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

  const services = [
    {
      piece: "♝",
      titleKey: "services.s1.title",
      descKey: "services.s1.desc",
      tags: ["Reels", "Videos", "Copy", "SEO"],
    },
    {
      piece: "♜",
      titleKey: "services.s2.title",
      descKey: "services.s2.desc",
      tags: ["Meta Ads", "TikTok Ads", "ROAS", "Retargeting"],
    },
    {
      piece: "♟",
      titleKey: "services.s3.title",
      descKey: "services.s3.desc",
      tags: ["Chatbots", "WhatsApp Bot", "Lead Nurturing", "CRM"],
    },
    {
      piece: "♛",
      titleKey: "services.s4.title",
      descKey: "services.s4.desc",
      tags: ["Dashboards", "KPIs", "A/B Testing", "Escala"],
    },
    {
      piece: "♞",
      titleKey: "services.s5.title",
      descKey: "services.s5.desc",
      tags: ["LinkedIn", "Instagram", "Storytelling", "Autoridad"],
    },
    {
      piece: "♚",
      titleKey: "services.s6.title",
      descKey: "services.s6.desc",
      tags: ["Apps", "CRM", "Automatización", "API"],
    },
    {
      piece: "♔",
      titleKey: "services.s7.title",
      descKey: "services.s7.desc",
      tags: ["Landing Pages", "UX/UI", "Conversión", "Responsive"],
    },
  ];

  return (
    <section
      id="servicios"
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
          top: "50%",
          right: "-200px",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(203,10,118,0.06) 0%, transparent 70%)",
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
        <div style={{ marginBottom: "72px" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(38px, 4vw, 60px)",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "var(--white)",
              letterSpacing: "-0.5px",
            }}
          >
            {t("services.label")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "end",
              marginTop: "20px",
            }}
            className="services-header-grid"
          >
            <div
              className="section-label reveal"
              style={{ transitionDelay: "0.1s" }}
            >
              {t("services.title")}
            </div>
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
              {t("services.subtitle")}
            </p>
          </div>
        </div>

        {/* Services: sidebar + detail */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "2px",
            minHeight: "480px",
          }}
          className="services-layout"
        >
          {/* Sidebar list */}
          <div
            style={{
              background: "var(--gray-800)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSelectService(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "24px 32px",
                  background:
                    activeService === i
                      ? "rgba(203,10,118,0.1)"
                      : "transparent",
                  border: "none",
                  borderLeft:
                    activeService === i
                      ? "3px solid var(--pink)"
                      : "3px solid transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (activeService !== i) {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeService !== i) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <span
                  style={{
                    fontSize: "28px",
                    color:
                      activeService === i
                        ? "var(--pink)"
                        : "rgba(255,255,255,0.3)",
                    transition: "color 0.25s ease",
                    lineHeight: 1,
                  }}
                >
                  {s.piece}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "18px",
                    fontWeight: "500",
                    color:
                      activeService === i
                        ? "var(--white)"
                        : "rgba(255,255,255,0.55)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {t(s.titleKey)}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            ref={detailRef}
            style={{
              background: "var(--black)",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "56px 52px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "72px",
                  color: "var(--pink)",
                  opacity: 0.15,
                  lineHeight: 1,
                  marginBottom: "24px",
                }}
              >
                {services[activeService].piece}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "var(--white)",
                  marginBottom: "20px",
                  lineHeight: "1.1",
                }}
              >
                {t(services[activeService].titleKey)}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "16px",
                  lineHeight: "1.85",
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "480px",
                }}
              >
                {t(services[activeService].descKey)}
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "32px" }}>
              {services[activeService].tags.map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              className="btn-primary"
              style={{ marginTop: "36px", alignSelf: "flex-start" }}
              onClick={() =>
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("services.cta")}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .services-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
