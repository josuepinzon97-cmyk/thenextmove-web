"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const faqs = [
  {
    q_es: "¿En cuánto tiempo empiezo a ver resultados?",
    a_es: "Con campañas de pago los primeros movimientos se ven en menos de 30 días. Para estrategias de contenido y marca personal la tracción real aparece entre los 60 y 90 días. Lo que sí garantizamos: cada semana hay avance medible, no promesas.",
    q_en: "How soon will I start seeing results?",
    a_en: "With paid campaigns you'll see movement in less than 30 days. Content and personal branding strategies show real traction between 60 and 90 days. What we guarantee: measurable progress every week, not just promises.",
  },
  {
    q_es: "¿Con qué tipo de negocios trabajan?",
    a_es: "Nos especializamos en servicios profesionales de alto ticket: clínicas, consultorios médicos, despachos de abogados, terapeutas, coaches, consultores, nutricionistas, arquitectos, infoproductores y expertos en general. No trabajamos con cualquier negocio, porque entender tu sector es parte de lo que nos hace efectivos.",
    q_en: "What type of businesses do you work with?",
    a_en: "We specialize in high-ticket professional services: medical clinics, law firms, therapists, coaches, consultants, nutritionists, architects, infoproducers and experts in general. We don't work with just any business — understanding your sector is part of what makes us effective.",
  },
  {
    q_es: "¿Cómo es el proceso para empezar?",
    a_es: "Primero agendamos una sesión estratégica gratuita de 30 minutos para entender tu negocio, tu cliente ideal y tus objetivos. Si hay fit, diseñamos una propuesta personalizada y arrancamos con un plan de 90 días con metas claras y revisiones semanales.",
    q_en: "What does the process look like to get started?",
    a_en: "First we schedule a free 30-minute strategic session to understand your business, your ideal client and your goals. If there's a fit, we design a personalized proposal and kick off with a 90-day plan with clear targets and weekly check-ins.",
  },
  {
    q_es: "¿Cuánto cuesta trabajar con ustedes?",
    a_es: "Nuestros servicios están diseñados para negocios que quieren crecer en serio y tienen un ticket medio-alto. La inversión varía según el alcance de la estrategia. En la sesión gratuita te damos un panorama claro sin compromiso ni letra pequeña.",
    q_en: "How much does it cost to work with you?",
    a_en: "Our services are built for businesses serious about growth with a mid-to-high ticket. Investment varies depending on the scope of the strategy. In the free session we'll give you a clear picture — no commitment, no fine print.",
  },
];

export default function Results() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

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

  const label = lang === "es" ? "Preguntas frecuentes" : "FAQ";
  const title = lang === "es" ? "Lo que siempre nos preguntan." : "Questions we always get.";
  const subtitle =
    lang === "es"
      ? "Resolvemos las dudas más comunes antes de que empecemos a trabajar juntos."
      : "We answer the most common questions before we start working together.";

  const titleColor = "#0a0a0a";
  const subtitleColor = "rgba(10,10,10,0.5)";
  const questionColor = (isOpen: boolean) => isOpen ? "#0a0a0a" : "rgba(10,10,10,0.6)";
  const numColor = (isOpen: boolean) => isOpen ? "var(--pink)" : "rgba(10,10,10,0.2)";
  const answerColor = "rgba(10,10,10,0.55)";
  const borderColor = "rgba(0,0,0,0.08)";
  const iconColor = (isOpen: boolean) => isOpen ? "#cb0a76" : "rgba(10,10,10,0.3)";

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
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-100px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(203,10,118,0.04) 0%, transparent 65%)",
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
        <div
          className="faq-header-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "end",
            marginBottom: "72px",
          }}
        >
          <div>
            <div className="section-label reveal">{label}</div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(38px, 4vw, 62px)",
                fontWeight: "700",
                lineHeight: "1.05",
                color: titleColor,
                letterSpacing: "-0.5px",
                marginTop: "20px",
                transitionDelay: "0.1s",
              }}
            >
              {title}
            </h2>
          </div>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "17px",
              lineHeight: "1.8",
              color: subtitleColor,
              transitionDelay: "0.2s",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const question = lang === "es" ? faq.q_es : faq.q_en;
            const answer = lang === "es" ? faq.a_es : faq.a_en;

            return (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? `1px solid ${borderColor}` : "none",
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    padding: "28px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    {/* Number */}
                    <span
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "13px",
                        letterSpacing: "2px",
                        color: numColor(isOpen),
                        flexShrink: 0,
                        transition: "color 0.25s ease",
                        minWidth: "24px",
                      }}
                    >
                      0{i + 1}
                    </span>
                    {/* Question */}
                    <span
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "clamp(15px, 1.6vw, 18px)",
                        fontWeight: "600",
                        color: questionColor(isOpen),
                        lineHeight: "1.4",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {question}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      border: `1px solid ${isOpen ? "rgba(203,10,118,0.5)" : "rgba(0,0,0,0.12)"}`,
                      background: isOpen ? "rgba(203,10,118,0.1)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    >
                      <line x1="7" y1="1" x2="7" y2="13" stroke={iconColor(isOpen)} strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="1" y1="7" x2="13" y2="7" stroke={iconColor(isOpen)} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "300px" : "0px",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "15px",
                      lineHeight: "1.85",
                      color: answerColor,
                      paddingBottom: "28px",
                      paddingLeft: "44px",
                      margin: 0,
                    }}
                  >
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
