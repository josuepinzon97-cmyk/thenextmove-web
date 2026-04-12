"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/thenextmoveagencia@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          _subject: `Nueva consulta de ${form.name} - The Next Move`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div className="chess-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(ellipse, rgba(203,10,118,0.08) 0%, transparent 70%)",
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div>
            <div className="section-label reveal">{t("contact.label")}</div>
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
                marginBottom: "24px",
                transitionDelay: "0.1s",
              }}
            >
              {t("contact.title")}
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "16px",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "48px",
                transitionDelay: "0.2s",
              }}
            >
              {t("contact.subtitle")}
            </p>

            {/* Chess piece decoration */}
            <div
              className="reveal"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "160px",
                color: "var(--pink)",
                opacity: 0.08,
                lineHeight: 1,
                userSelect: "none",
                transitionDelay: "0.3s",
              }}
            >
              ♞
            </div>

            {/* Booking CTA */}
            <div className="reveal" style={{ transitionDelay: "0.25s", marginTop: "-40px", marginBottom: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "14px",
                  letterSpacing: "0.5px",
                }}
              >
                {t("contact.booking.label")}
              </p>
              <a
                href="#agendar"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#agendar")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(203,10,118,0.1)",
                  border: "1px solid rgba(203,10,118,0.3)",
                  color: "var(--pink)",
                  padding: "14px 24px",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(203,10,118,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(203,10,118,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {t("contact.booking.cta")}
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="reveal" style={{ transitionDelay: "0.3s" }}>
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "14px",
                  letterSpacing: "0.5px",
                }}
              >
                {t("contact.whatsapp")}
              </p>
              <a
                href="https://wa.me/573113649179"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "rgba(37, 211, 102, 0.1)",
                  border: "1px solid rgba(37, 211, 102, 0.25)",
                  color: "#25D366",
                  padding: "14px 24px",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("contact.whatsapp.btn")}
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--gray-800)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Name + Email */}
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
                className="form-row"
              >
                <div>
                  <label className="form-label">{t("contact.name")}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">{t("contact.email")}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="form-label">{t("contact.phone")}</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+57 300 000 0000"
                  className="form-input"
                />
              </div>

              {/* Company */}
              <div>
                <label className="form-label">{t("contact.company")}</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Médico / Abogado / Coach..."
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label className="form-label">{t("contact.message")}</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Cuéntanos sobre tu negocio y tus objetivos..."
                  className="form-input"
                  style={{ resize: "vertical", minHeight: "120px" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                disabled={status === "sending"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {status === "sending" ? (
                  t("contact.sending")
                ) : (
                  <>
                    {t("contact.send")}
                    <span style={{ fontSize: "18px" }}>→</span>
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div
                  style={{
                    background: "rgba(37, 211, 102, 0.1)",
                    border: "1px solid rgba(37, 211, 102, 0.3)",
                    padding: "16px 20px",
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px",
                    color: "#25D366",
                    textAlign: "center",
                  }}
                >
                  ✓ {t("contact.success")}
                </div>
              )}
              {status === "error" && (
                <div
                  style={{
                    background: "rgba(255, 80, 80, 0.1)",
                    border: "1px solid rgba(255, 80, 80, 0.3)",
                    padding: "16px 20px",
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px",
                    color: "#ff6060",
                    textAlign: "center",
                  }}
                >
                  ✕ {t("contact.error")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
