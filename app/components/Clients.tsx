"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Sparkles } from "@/components/ui/sparkles";
import { useLanguage } from "../context/LanguageContext";

/* ─── Company Logos ──────────────────────────────────────────────────── */

const AuroraLogo = () => (
  <svg viewBox="0 0 160 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <circle cx="16" cy="24" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="16" cy="24" r="4" fill="currentColor" opacity="0.9"/>
    <text x="34" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">AURORA</text>
    <text x="34" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">CLÍNICA ESTÉTICA</text>
  </svg>
);

const MoraLogo = () => (
  <svg viewBox="0 0 160 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <rect x="4" y="10" width="20" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <line x1="14" y1="10" x2="14" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
    <text x="34" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">MORA</text>
    <text x="34" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">ABOGADOS</text>
  </svg>
);

const SmileLogo = () => (
  <svg viewBox="0 0 170 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <path d="M6 16 Q16 30 26 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85"/>
    <circle cx="9" cy="13" r="2" fill="currentColor" opacity="0.7"/>
    <circle cx="23" cy="13" r="2" fill="currentColor" opacity="0.7"/>
    <text x="36" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">SMILECENTER</text>
    <text x="36" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">ODONTOLOGÍA</text>
  </svg>
);

const NutriLogo = () => (
  <svg viewBox="0 0 150 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <path d="M16 6 C6 14 6 34 16 42 C26 34 26 14 16 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <line x1="16" y1="6" x2="16" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <text x="34" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">NUTRIVIDA</text>
    <text x="34" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">NUTRICIÓN</text>
  </svg>
);

const HerreraLogo = () => (
  <svg viewBox="0 0 175 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <polygon points="16,6 24,6 24,22 16,22" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75"/>
    <polygon points="8,22 24,22 24,42 8,42" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.55"/>
    <text x="34" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">HERRERA</text>
    <text x="34" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">CONSULTORES</text>
  </svg>
);

const MenteClaraLogo = () => (
  <svg viewBox="0 0 165 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <path d="M16 34 C16 22 26 16 26 24 C26 16 36 22 36 34" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.8"/>
    <circle cx="26" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75"/>
    <text x="46" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">MENTE CLARA</text>
    <text x="46" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">PSICOLOGÍA</text>
  </svg>
);

const DiazLogo = () => (
  <svg viewBox="0 0 155 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <polygon points="16,6 28,42 4,42" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <line x1="7" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
    <text x="38" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">DÍAZ</text>
    <text x="38" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">ARQUITECTOS</text>
  </svg>
);

const SkinLabLogo = () => (
  <svg viewBox="0 0 145 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <rect x="6" y="10" width="20" height="28" rx="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <rect x="12" y="18" width="8" height="12" rx="4" fill="currentColor" opacity="0.45"/>
    <text x="36" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">SKIN LAB</text>
    <text x="36" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">DERMATOLOGÍA</text>
  </svg>
);

const EscalaLogo = () => (
  <svg viewBox="0 0 165 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <path d="M4 40 L10 10 L18 28 L26 18 L34 40" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
    <text x="44" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">ESCALA</text>
    <text x="44" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">ACADEMY</text>
  </svg>
);

const FuentesLogo = () => (
  <svg viewBox="0 0 165 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <circle cx="18" cy="24" r="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.65"/>
    <path d="M12 24 L18 16 L24 24 L18 32 Z" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.9"/>
    <text x="38" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">FUENTES</text>
    <text x="38" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">CAPITAL</text>
  </svg>
);

const VidaMedicalLogo = () => (
  <svg viewBox="0 0 170 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <path d="M10 18 L16 18 L16 12 L22 12 L22 18 L28 18 L28 24 L22 24 L22 30 L16 30 L16 24 L10 24 Z" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.8"/>
    <text x="38" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">VIDA MÉDICA</text>
    <text x="38" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">ORTOPEDIA</text>
  </svg>
);

const TorresLogo = () => (
  <svg viewBox="0 0 160 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48">
    <path d="M6 38 L16 8 L26 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <line x1="9" y1="28" x2="23" y2="28" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <text x="36" y="22" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="1">TORRES</text>
    <text x="36" y="35" fontFamily="system-ui" fontWeight="500" fontSize="8.5" fill="currentColor" opacity="0.5" letterSpacing="2.5">COACHING</text>
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────────── */

const logos = [
  { id: "aurora",     Logo: AuroraLogo },
  { id: "mora",       Logo: MoraLogo },
  { id: "smile",      Logo: SmileLogo },
  { id: "nutri",      Logo: NutriLogo },
  { id: "herrera",    Logo: HerreraLogo },
  { id: "menteclara", Logo: MenteClaraLogo },
  { id: "diaz",       Logo: DiazLogo },
  { id: "skinlab",    Logo: SkinLabLogo },
  { id: "escala",     Logo: EscalaLogo },
  { id: "fuentes",    Logo: FuentesLogo },
  { id: "vida",       Logo: VidaMedicalLogo },
  { id: "torres",     Logo: TorresLogo },
];

const professionals = [
  { id: "p1",  name: "Dra. Laura Fuentes",   role: "Médico Estética",        org: "Clínica Aurora" },
  { id: "p2",  name: "Lic. Roberto Mora",    role: "Abogado Corporativo",    org: "Mora Abogados" },
  { id: "p3",  name: "Dr. Carlos Ríos",      role: "Odontólogo Estético",    org: "SmileCenter" },
  { id: "p4",  name: "Nut. Valeria Torres",  role: "Nutricionista",          org: "NutriVida" },
  { id: "p5",  name: "Coach Andrés Vidal",   role: "Business Coach",         org: "Torres Coaching" },
  { id: "p6",  name: "Ps. Camila Reyes",     role: "Psicóloga Clínica",      org: "Mente Clara" },
  { id: "p7",  name: "Arq. Miguel Díaz",     role: "Arquitecto",             org: "Díaz & Partners" },
  { id: "p8",  name: "Dra. Sofía Herrera",   role: "Dermatóloga",            org: "Skin Lab" },
  { id: "p9",  name: "Ing. Felipe Escala",   role: "Formador Empresarial",   org: "Escala Academy" },
  { id: "p10", name: "Lic. Paula Fuentes",   role: "Asesora Financiera",     org: "Fuentes Capital" },
];

const industries = [
  "Medicina Estética", "Odontología", "Psicología y Terapia",
  "Nutrición", "Dermatología", "Abogados y Consultores",
  "Coaching Profesional", "Arquitectura", "Finanzas y Capital",
  "Ortopedia", "Formación Empresarial", "Bienestar y Salud",
];

/* ─── Componente ─────────────────────────────────────────────────────── */

export default function Clients() {
  const { t } = useLanguage();

  return (
    <div>

      {/* ══════════════════════════════════════════════════════════════
          ZONA 1 — Título  (fondo claro)
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ background: "#f5f4f2", padding: "90px 32px 64px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "28px" }}
          >
            {t("clients.label")}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(42px, 5vw, 68px)",
              fontWeight: "700",
              lineHeight: "1.1",
              letterSpacing: "2px",
              color: "#111111",
              marginBottom: "0",
            }}
          >
            {t("clients.title1")}
            <br />
            {/* Pink text: clean, no filter — agradable a la vista */}
            <span
              style={{
                color: "var(--pink)",
                WebkitTextStroke: "0px transparent",
              }}
            >
              {t("clients.title2")}
            </span>
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ZONA 2 — Logos + Profesionales  (fondo oscuro)
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ background: "#080808", paddingTop: "56px", overflow: "hidden" }}>

        {/* Row 1: Company logos (→) */}
        <div style={{ position: "relative", height: "72px", width: "100%" }}>
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={55}
            durationOnHover={110}
            gap={72}
          >
            {logos.map(({ id, Logo }) => (
              <div
                key={id}
                style={{
                  color: "rgba(255,255,255,0.38)",
                  transition: "color 0.3s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.82)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.38)";
                }}
              >
                <Logo />
              </div>
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[180px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[180px]"
            direction="right"
            blurIntensity={1}
          />
        </div>

        {/* Separador */}
        <div
          style={{
            maxWidth: "900px",
            margin: "28px auto",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(203,10,118,0.3), transparent)",
          }}
        />

        {/* Row 2: Professional names (← reverse) */}
        <div style={{ position: "relative", height: "52px", width: "100%" }}>
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={70}
            durationOnHover={140}
            gap={56}
            reverse
          >
            {professionals.map((p) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                  flexShrink: 0,
                  cursor: "default",
                  transition: "transform 0.25s ease",
                  padding: "4px 6px",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-3px)";
                  const name = el.querySelector(".p-name") as HTMLElement | null;
                  const role = el.querySelector(".p-role") as HTMLElement | null;
                  if (name) name.style.color = "var(--pink)";
                  if (role) role.style.color = "rgba(255,255,255,0.55)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  const name = el.querySelector(".p-name") as HTMLElement | null;
                  const role = el.querySelector(".p-role") as HTMLElement | null;
                  if (name) name.style.color = "rgba(255,255,255,0.72)";
                  if (role) role.style.color = "rgba(255,255,255,0.36)";
                }}
              >
                <span
                  className="p-name"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: "700",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.72)",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.2px",
                    transition: "color 0.25s ease",
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="p-role"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "10.5px",
                    fontWeight: "500",
                    color: "rgba(255,255,255,0.36)",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.5px",
                    transition: "color 0.25s ease",
                  }}
                >
                  {p.role} · {p.org}
                </span>
              </div>
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[180px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[180px]"
            direction="right"
            blurIntensity={1}
          />
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            maxWidth: "700px",
            margin: "32px auto 0",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(203,10,118,0.25), transparent)",
          }}
        />

        {/* ~2cm bottom breathing room */}
        <div style={{ height: "36px" }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ZONA 3 — Especializados  (fondo claro)
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ background: "#f5f4f2", padding: "96px 32px 100px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>

          <div className="section-label" style={{ justifyContent: "center", marginBottom: "28px" }}>
            Nuestro enfoque
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(38px, 5vw, 68px)",
              fontWeight: "700",
              lineHeight: "1.1",
              letterSpacing: "1.5px",
              color: "#111111",
              marginBottom: "20px",
            }}
          >
            Especializados en{" "}
            <span style={{ color: "var(--pink)" }}>
              servicios profesionales.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "17px",
              lineHeight: "1.8",
              color: "rgba(10,10,10,0.55)",
              maxWidth: "600px",
              margin: "0 auto 52px",
            }}
          >
            Trabajamos con profesionales, clínicas y negocios de servicios de alto ticket.
            Conocemos tu sector, tus clientes y cómo llenar tu agenda con citas calificadas.
          </p>

          {/* Industry tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {industries.map((ind) => (
              <span
                key={ind}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "8px 18px",
                  background: "#ffffff",
                  border: "1px solid rgba(203,10,118,0.18)",
                  borderRadius: "100px",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "rgba(10,10,10,0.7)",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.background = "rgba(203,10,118,0.07)";
                  el.style.borderColor = "rgba(203,10,118,0.4)";
                  el.style.color = "var(--pink)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.background = "#ffffff";
                  el.style.borderColor = "rgba(203,10,118,0.18)";
                  el.style.color = "rgba(10,10,10,0.7)";
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
