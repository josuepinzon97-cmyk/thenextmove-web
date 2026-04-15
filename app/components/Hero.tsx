"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const floatingPieces = [
  { piece: "♔", top: "10%", left: "8%", delay: "0s", size: "100px" },
  { piece: "♕", top: "70%", left: "5%", delay: "1.5s", size: "80px" },
  { piece: "♖", top: "20%", right: "6%", delay: "0.8s", size: "90px" },
  { piece: "♗", top: "75%", right: "8%", delay: "2.2s", size: "70px" },
  { piece: "♘", top: "45%", left: "3%", delay: "3s", size: "65px" },
  { piece: "♙", top: "85%", left: "25%", delay: "1s", size: "55px" },
  { piece: "♙", top: "15%", right: "22%", delay: "2s", size: "50px" },
  { piece: "♙", top: "55%", right: "3%", delay: "0.5s", size: "60px" },
];

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const board = hero.querySelector(".hero-board") as HTMLElement;
      if (board) {
        board.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 5}deg)`;
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      {/* Radial gradient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(ellipse, rgba(203, 10, 118, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Chess board pattern */}
      <div
        className="chess-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Floating chess pieces */}
      {floatingPieces.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            right: p.right,
            fontSize: p.size,
            color: "var(--white)",
            opacity: 0.04,
            animation: `chessPieceFloat ${7 + i}s ease-in-out infinite`,
            animationDelay: p.delay,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
            lineHeight: 1,
          }}
        >
          {p.piece}
        </div>
      ))}

      {/* Horizontal line decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(203,10,118,0.15), transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 32px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left: Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Label */}
          <div
            className="section-label animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            {t("hero.label")}
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(52px, 6vw, 88px)",
              fontWeight: "700",
              lineHeight: "1.0",
              letterSpacing: "-1px",
              color: "var(--white)",
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            {t("hero.title1")}
            <br />
            <span style={{ color: "var(--pink)" }}>{t("hero.title2")}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "17px",
              lineHeight: "1.75",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "480px",
              animationDelay: "0.35s",
              opacity: 0,
            }}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              animationDelay: "0.5s",
              opacity: 0,
            }}
          >
            <button
              className="btn-primary animate-pulse-pink"
              onClick={() => {
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.cta1")}
              <span style={{ fontSize: "18px" }}>→</span>
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                document
                  .querySelector("#servicios")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.cta2")}
              <span style={{ fontSize: "16px" }}>↓</span>
            </button>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-up"
            style={{
              display: "flex",
              gap: "40px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              animationDelay: "0.65s",
              opacity: 0,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "50+", label: t("hero.stat1") },
              { num: "4.8x", label: t("hero.stat2") },
              { num: "5+", label: t("hero.stat3") },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "var(--white)",
                    lineHeight: "1",
                  }}
                >
                  {stat.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chess Board Visual */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <div
            className="hero-board animate-board-reveal"
            style={{
              width: "clamp(200px, 28vw, 340px)",
              height: "clamp(200px, 28vw, 340px)",
              position: "relative",
              transition: "transform 0.1s ease",
              animationDelay: "0.4s",
              opacity: 0,
            }}
          >
            {/* Outer glow ring */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                border: "1px solid rgba(203,10,118,0.15)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-40px",
                border: "1px solid rgba(203,10,118,0.07)",
                pointerEvents: "none",
              }}
            />

            {/* Chess board grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gridTemplateRows: "repeat(8, 1fr)",
                width: "100%",
                height: "100%",
                border: "1px solid rgba(203,10,118,0.3)",
              }}
            >
              {Array.from({ length: 64 }).map((_, idx) => {
                const row = Math.floor(idx / 8);
                const col = idx % 8;
                const isLight = (row + col) % 2 === 0;
                return (
                  <div
                    key={idx}
                    style={{
                      background: isLight
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(203,10,118,0.06)",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLDivElement).style.background = isLight
                        ? "rgba(203,10,118,0.15)"
                        : "rgba(203,10,118,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLDivElement).style.background = isLight
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(203,10,118,0.06)";
                    }}
                  />
                );
              })}
            </div>

            {/* Centered piece overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                className="animate-float"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(203,10,118,0.55)) drop-shadow(0 0 80px rgba(203,10,118,0.25))",
                  width: "clamp(160px, 22vw, 280px)",
                  height: "clamp(160px, 22vw, 280px)",
                  position: "relative",
                }}
              >
                <Image
                  src="/knight.png"
                  alt="Chess Knight"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            {/* Corner decorations */}
            {["top-left", "top-right", "bottom-left", "bottom-right"].map(
              (pos) => (
                <div
                  key={pos}
                  style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    borderColor: "var(--pink)",
                    borderStyle: "solid",
                    borderWidth: pos.includes("top")
                      ? pos.includes("left")
                        ? "2px 0 0 2px"
                        : "2px 2px 0 0"
                      : pos.includes("left")
                      ? "0 0 2px 2px"
                      : "0 2px 2px 0",
                    top: pos.includes("top") ? "-8px" : "auto",
                    bottom: pos.includes("bottom") ? "-8px" : "auto",
                    left: pos.includes("left") ? "-8px" : "auto",
                    right: pos.includes("right") ? "-8px" : "auto",
                  }}
                />
              )
            )}
          </div>

          {/* Phrase below board */}
          <div
            className="animate-fade-up"
            style={{
              textAlign: "center",
              animationDelay: "0.6s",
              opacity: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(22px, 3vw, 38px)",
                fontWeight: "800",
                letterSpacing: "-0.5px",
                lineHeight: "1.15",
                color: "rgba(255,255,255,0.9)",
                margin: 0,
              }}
            >
              {t("hero.phrase1")}{" "}
              <br />
              <span
                style={{
                  color: "var(--pink)",
                  filter: "drop-shadow(0 0 12px rgba(203,10,118,0.5))",
                }}
              >
                {t("hero.phrase2")}
              </span>
            </p>
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "var(--pink)",
                margin: "14px auto 0",
                opacity: 0.7,
              }}
            />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "60px",
            background:
              "linear-gradient(180deg, var(--pink) 0%, transparent 100%)",
            animation: "fadeIn 2s ease-in-out infinite alternate",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
