"use client";

import { useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

const videos = [
  { src: "/videos/testimonio1.mp4", name: "Dr. Carlos Mendoza", role: "Cirujano Estético" },
  { src: "/videos/testimonio2.mp4", name: "Dra. Ana Rodríguez",  role: "Abogada Corporativa" },
  { src: "/videos/testimonio3.mp4", name: "Miguel Torres",        role: "Coach de Negocios" },
];

function VideoCard({
  src,
  name,
  role,
  delay,
}: {
  src: string;
  name: string;
  role: string;
  delay: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) videoRef.current.muted = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) videoRef.current.muted = true;
  }, []);

  return (
    <div
      className="reveal group"
      style={{
        transitionDelay: delay,
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
        aspectRatio: "9/16",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
        className="group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Sound hint */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(0,0,0,0.55)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "999px",
          padding: "6px 12px",
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
        className="opacity-60 group-hover:opacity-0"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.03em" }}>
          sin sonido
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(203,10,118,0.75)",
          border: "1px solid rgba(203,10,118,0.5)",
          borderRadius: "999px",
          padding: "6px 12px",
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
        className="opacity-0 group-hover:opacity-100"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
        <span style={{ fontSize: "11px", color: "white", fontFamily: "var(--font-jakarta)", letterSpacing: "0.03em" }}>
          con sonido
        </span>
      </div>

      {/* Author info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "15px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "2px",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.03em",
          }}
        >
          {role}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(203,10,118,0.06) 0%, transparent 65%)",
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
          <div
            className="section-label reveal"
            style={{ justifyContent: "center", color: "var(--pink)" }}
          >
            {t("testimonials.label")}
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
            {t("testimonials.title")}
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "16px",
              color: "rgba(10,10,10,0.45)",
              marginTop: "16px",
              transitionDelay: "0.25s",
            }}
          >
            Pasa el cursor sobre el video para escuchar
          </p>
        </div>

        {/* Video grid */}
        <div className="video-testimonials-grid">
          {videos.map((v, i) => (
            <VideoCard
              key={i}
              src={v.src}
              name={v.name}
              role={v.role}
              delay={`${0.1 + i * 0.15}s`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .video-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .video-testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }
        }
        @media (max-width: 1100px) and (min-width: 900px) {
          .video-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
