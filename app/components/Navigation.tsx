"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "nav.home", href: "#inicio" },
    { key: "nav.services", href: "/servicios" },
    { key: "nav.cases", href: "/casos" },
    { key: "nav.contact", href: "#contacto" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // External page (starts with /)
    if (href.startsWith("/") && !href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    // Anchor link — if not on home, navigate to home + anchor
    const anchor = href.startsWith("#") ? href : null;
    if (!anchor) return;
    const isHome = window.location.pathname === "/";
    if (isHome) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + anchor;
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "8px 0" : "20px 0",
          background: scrolled
            ? "rgba(0,0,0,0.95)"
            : "rgba(0,0,0,0.6)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(255,255,255,0.04)",
          transition: "all 0.4s ease",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.png"
              alt="The Next Move"
              width={scrolled ? 110 : 150}
              height={scrolled ? 36 : 48}
              style={{ objectFit: "contain", transition: "all 0.4s ease" }}
              priority
            />
          </button>

          {/* Desktop Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  padding: "4px 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "var(--white)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.7)";
                }}
              >
                {t(link.key)}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggle}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--white)",
                fontFamily: "var(--font-jakarta)",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
                padding: "6px 16px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.borderColor =
                  "var(--pink)";
                (e.target as HTMLButtonElement).style.color = "var(--pink)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.12)";
                (e.target as HTMLButtonElement).style.color = "var(--white)";
              }}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick("#contacto")}
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "13px" }}
            >
              {t("nav.cta")}
              <span style={{ fontSize: "16px" }}>→</span>
            </button>
          </div>

          {/* Mobile: lang + hamburger */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
            className="show-mobile"
          >
            <button
              onClick={toggle}
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "var(--white)",
                fontFamily: "var(--font-jakarta)",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "2px",
                padding: "5px 12px",
                cursor: "pointer",
              }}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "4px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "22px",
                    height: "1.5px",
                    background: "var(--white)",
                    transition: "all 0.3s ease",
                    transformOrigin: "center",
                    transform:
                      menuOpen && i === 0
                        ? "translateY(6.5px) rotate(45deg)"
                        : menuOpen && i === 2
                        ? "translateY(-6.5px) rotate(-45deg)"
                        : menuOpen && i === 1
                        ? "scaleX(0)"
                        : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.97)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)",
        }}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.key}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "var(--font-bebas)",
              fontSize: "42px",
              fontWeight: "500",
              color: "var(--white)",
              cursor: "pointer",
              letterSpacing: "2px",
              transition: "color 0.2s ease",
              transform: menuOpen
                ? "translateY(0)"
                : `translateY(${(i + 1) * 20}px)`,
              opacity: menuOpen ? 1 : 0,
              transitionDelay: `${i * 0.07}s`,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.color = "var(--pink)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.color = "var(--white)";
            }}
          >
            {t(link.key)}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("#contacto")}
          className="btn-primary"
          style={{ marginTop: "20px" }}
        >
          {t("nav.cta")} →
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
