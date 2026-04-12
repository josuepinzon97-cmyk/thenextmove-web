"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const casesEs = [
  {
    id: 1,
    industry: "Salud & Estética",
    category: "salud",
    piece: "♛",
    title: "Clínica dermatológica de lujo",
    location: "Bogotá, Colombia",
    challenge:
      "Clínica con 8 años de trayectoria pero sin presencia digital estructurada. Agenda subutilizada y dependencia total de referidos.",
    solution:
      "Estrategia de contenido educativo + campañas de Meta Ads segmentadas por NSE alto + sistema de agendamiento automatizado vía WhatsApp.",
    results: [
      { value: "+340%", label: "Aumento en citas" },
      { value: "6.2x", label: "ROAS en campañas" },
      { value: "-58%", label: "Costo por lead" },
      { value: "90 días", label: "Tiempo de resultado" },
    ],
    tags: ["Meta Ads", "Contenido", "Automatización", "WhatsApp Bot"],
    testimonial:
      "En 3 meses pasé de publicar sin estrategia a tener agenda llena y lista de espera. El ROI superó mis expectativas completamente.",
    author: "Dra. Valentina Cruz",
    role: "Directora Clínica Estética",
    highlight: "$45K USD en servicios generados el primer trimestre",
  },
  {
    id: 2,
    industry: "Legal & Consultoría",
    category: "legal",
    piece: "♜",
    title: "Bufete de abogados corporativo",
    location: "Medellín, Colombia",
    challenge:
      "Firma con reputación offline sólida pero invisible en digital. Clientes potenciales no los encontraban y la competencia captaba oportunidades.",
    solution:
      "Marca personal del socio principal en LinkedIn + campañas B2B en Meta + sistema de generación de contenido de autoridad semanal.",
    results: [
      { value: "45+", label: "Leads calificados/mes" },
      { value: "+890%", label: "Crecimiento en seguidores" },
      { value: "$8K USD", label: "Ticket promedio" },
      { value: "60 días", label: "Primeros resultados" },
    ],
    tags: ["LinkedIn", "Marca Personal", "B2B", "Meta Ads"],
    testimonial:
      "Mis campañas ahora generan consultas de alto valor. Trabajo con menos clientes pero facturo más. Eso es lo que llamo estrategia.",
    author: "Dr. Alejandro Mora",
    role: "Socio Principal",
    highlight: "De 0 a referente en su nicho en 90 días",
  },
  {
    id: 3,
    industry: "Infoproductos & Coaching",
    category: "coaching",
    piece: "♞",
    title: "Lanzamiento de programa de alto ticket",
    location: "Remoto - LATAM",
    challenge:
      "Coach con audiencia pequeña queriendo lanzar su primer programa grupal de $3,000 USD. Sin lista de email ni embudo construido.",
    solution:
      "Construcción de lista desde cero + estrategia de contenido en Instagram + funnel de lanzamiento + campañas de retargeting + automatización completa.",
    results: [
      { value: "$127K", label: "En primer lanzamiento" },
      { value: "18%", label: "Tasa de conversión" },
      { value: "64%", label: "Tasa apertura emails" },
      { value: "42 alumnos", label: "Primera cohorte" },
    ],
    tags: ["Lanzamiento", "Email Marketing", "Instagram", "Automatización"],
    testimonial:
      "El sistema que construyeron cambió mi negocio para siempre. Ahora escalo sin trabajar el doble. Resultados que no creía posibles.",
    author: "Miguel Torres",
    role: "Business Coach",
    highlight: "$127K USD en la primera semana de lanzamiento",
  },
  {
    id: 4,
    industry: "Medicina & Salud",
    category: "salud",
    piece: "♝",
    title: "Ortopedista especialista en rodilla",
    location: "Cali, Colombia",
    challenge:
      "Médico especialista con agenda vacía los martes y jueves. Alta dependencia de aseguradoras con tarifas bajas vs. consulta privada.",
    solution:
      "Estrategia de contenido educativo sobre salud articular + SEO local + campañas de Google Ads + sistema de nutrición de prospectos por WhatsApp.",
    results: [
      { value: "+280%", label: "Consultas privadas" },
      { value: "3.8x", label: "ROAS Google Ads" },
      { value: "100%", label: "Agenda llena" },
      { value: "45 días", label: "Primeros resultados" },
    ],
    tags: ["Google Ads", "SEO Local", "WhatsApp", "Contenido Médico"],
    testimonial:
      "Nunca pensé que el marketing digital pudiera aplicarse tan bien a la medicina. Ahora elijo mis pacientes y cobro lo que vale mi trabajo.",
    author: "Dr. Ricardo Ospina",
    role: "Ortopedista",
    highlight: "Agenda privada 100% llena en menos de 2 meses",
  },
  {
    id: 5,
    industry: "Finanzas & Contabilidad",
    category: "finanzas",
    piece: "♟",
    title: "Firma contable boutique",
    location: "Barranquilla, Colombia",
    challenge:
      "Contador con 15 años de experiencia cobrando tarifas de mercado por no saber posicionarse como especialista premium.",
    solution:
      "Rebranding digital + estrategia de contenido sobre ahorro tributario + campañas de LinkedIn + sistema de nurturing para prospectos empresariales.",
    results: [
      { value: "+220%", label: "Incremento en tarifas" },
      { value: "30+", label: "Clientes empresariales" },
      { value: "5x", label: "Ingreso mensual" },
      { value: "6 meses", label: "Transformación total" },
    ],
    tags: ["LinkedIn", "Branding", "Contenido B2B", "Lead Nurturing"],
    testimonial:
      "Pasé de cobrar $80 la hora a $400. Mismo trabajo, diferente posicionamiento. Eso es lo que The Next Move construyó para mí.",
    author: "Carlos Herrera",
    role: "Contador & Asesor Tributario",
    highlight: "5x el ingreso mensual en 6 meses",
  },
  {
    id: 6,
    industry: "Odontología",
    category: "salud",
    piece: "♚",
    title: "Centro odontológico especializado",
    location: "Pereira, Colombia",
    challenge:
      "Clínica odontológica en ciudad intermedia compitiendo contra cadenas grandes. Dificultad para atraer casos de ortodoncia y diseño de sonrisa.",
    solution:
      "Video marketing de transformaciones (before/after) + TikTok Ads + estrategia de UGC + sistema de seguimiento automatizado post-consulta.",
    results: [
      { value: "+420%", label: "Casos de ortodoncia" },
      { value: "2.1M", label: "Alcance orgánico" },
      { value: "$12K USD", label: "Ticket promedio" },
      { value: "8 meses", label: "ROI sostenido" },
    ],
    tags: ["TikTok Ads", "Video Marketing", "UGC", "Instagram Reels"],
    testimonial:
      "El video de una transformación se volvió viral y cambió todo. Ahora pacientes llegan desde otras ciudades solo para tratarse con nosotros.",
    author: "Dra. Melissa Vargas",
    role: "Directora Centro Odontológico",
    highlight: "2.1M de personas alcanzadas con contenido orgánico",
  },
];

const casesEn = [
  {
    id: 1,
    industry: "Health & Aesthetics",
    category: "salud",
    piece: "♛",
    title: "Luxury dermatology clinic",
    location: "Bogotá, Colombia",
    challenge:
      "Clinic with 8 years of history but no structured digital presence. Underutilized schedule and total dependence on referrals.",
    solution:
      "Educational content strategy + high-income-targeted Meta Ads campaigns + automated scheduling system via WhatsApp.",
    results: [
      { value: "+340%", label: "Increase in appointments" },
      { value: "6.2x", label: "ROAS on campaigns" },
      { value: "-58%", label: "Cost per lead" },
      { value: "90 days", label: "Time to results" },
    ],
    tags: ["Meta Ads", "Content", "Automation", "WhatsApp Bot"],
    testimonial:
      "In 3 months I went from posting without strategy to having a full schedule and waiting list. The ROI completely exceeded my expectations.",
    author: "Dr. Valentina Cruz",
    role: "Aesthetic Clinic Director",
    highlight: "$45K USD in services generated in the first quarter",
  },
  {
    id: 2,
    industry: "Legal & Consulting",
    category: "legal",
    piece: "♜",
    title: "Corporate law firm",
    location: "Medellín, Colombia",
    challenge:
      "Firm with solid offline reputation but invisible online. Potential clients couldn't find them and competitors were capturing opportunities.",
    solution:
      "Managing partner's personal brand on LinkedIn + B2B Meta campaigns + weekly authority content generation system.",
    results: [
      { value: "45+", label: "Qualified leads/month" },
      { value: "+890%", label: "Follower growth" },
      { value: "$8K USD", label: "Average ticket" },
      { value: "60 days", label: "First results" },
    ],
    tags: ["LinkedIn", "Personal Brand", "B2B", "Meta Ads"],
    testimonial:
      "My campaigns now generate high-value consultations. I work with fewer clients but bill more. That's what I call strategy.",
    author: "Dr. Alejandro Mora",
    role: "Managing Partner",
    highlight: "From 0 to niche reference in 90 days",
  },
  {
    id: 3,
    industry: "Infoproducts & Coaching",
    category: "coaching",
    piece: "♞",
    title: "High ticket program launch",
    location: "Remote - LATAM",
    challenge:
      "Coach with a small audience wanting to launch their first $3,000 USD group program. No email list or funnel built.",
    solution:
      "List building from scratch + Instagram content strategy + launch funnel + retargeting campaigns + full automation.",
    results: [
      { value: "$127K", label: "In first launch" },
      { value: "18%", label: "Conversion rate" },
      { value: "64%", label: "Email open rate" },
      { value: "42 students", label: "First cohort" },
    ],
    tags: ["Launch", "Email Marketing", "Instagram", "Automation"],
    testimonial:
      "The system they built changed my business forever. Now I scale without working twice as hard. Results I didn't think were possible.",
    author: "Miguel Torres",
    role: "Business Coach",
    highlight: "$127K USD in the first launch week",
  },
  {
    id: 4,
    industry: "Medicine & Health",
    category: "salud",
    piece: "♝",
    title: "Knee specialist orthopedist",
    location: "Cali, Colombia",
    challenge:
      "Specialist doctor with an empty schedule on Tuesdays and Thursdays. High dependence on insurers with low rates vs. private consultation.",
    solution:
      "Educational content strategy on joint health + local SEO + Google Ads campaigns + WhatsApp prospect nurturing system.",
    results: [
      { value: "+280%", label: "Private consultations" },
      { value: "3.8x", label: "Google Ads ROAS" },
      { value: "100%", label: "Full schedule" },
      { value: "45 days", label: "First results" },
    ],
    tags: ["Google Ads", "Local SEO", "WhatsApp", "Medical Content"],
    testimonial:
      "I never thought digital marketing could apply so well to medicine. Now I choose my patients and charge what my work is worth.",
    author: "Dr. Ricardo Ospina",
    role: "Orthopedist",
    highlight: "Private schedule 100% full in less than 2 months",
  },
  {
    id: 5,
    industry: "Finance & Accounting",
    category: "finanzas",
    piece: "♟",
    title: "Boutique accounting firm",
    location: "Barranquilla, Colombia",
    challenge:
      "Accountant with 15 years of experience charging market rates because he didn't know how to position himself as a premium specialist.",
    solution:
      "Digital rebranding + tax savings content strategy + LinkedIn campaigns + nurturing system for business prospects.",
    results: [
      { value: "+220%", label: "Rate increase" },
      { value: "30+", label: "Business clients" },
      { value: "5x", label: "Monthly income" },
      { value: "6 months", label: "Full transformation" },
    ],
    tags: ["LinkedIn", "Branding", "B2B Content", "Lead Nurturing"],
    testimonial:
      "I went from charging $80/hour to $400. Same work, different positioning. That's what The Next Move built for me.",
    author: "Carlos Herrera",
    role: "Accountant & Tax Advisor",
    highlight: "5x monthly income in 6 months",
  },
  {
    id: 6,
    industry: "Dentistry",
    category: "salud",
    piece: "♚",
    title: "Specialized dental center",
    location: "Pereira, Colombia",
    challenge:
      "Dental clinic in a mid-size city competing against large chains. Difficulty attracting orthodontics and smile design cases.",
    solution:
      "Before/after transformation video marketing + TikTok Ads + UGC strategy + automated post-consultation follow-up system.",
    results: [
      { value: "+420%", label: "Orthodontics cases" },
      { value: "2.1M", label: "Organic reach" },
      { value: "$12K USD", label: "Average ticket" },
      { value: "8 months", label: "Sustained ROI" },
    ],
    tags: ["TikTok Ads", "Video Marketing", "UGC", "Instagram Reels"],
    testimonial:
      "A transformation video went viral and changed everything. Now patients come from other cities just to be treated by us.",
    author: "Dr. Melissa Vargas",
    role: "Dental Center Director",
    highlight: "2.1M people reached with organic content",
  },
];

const categories = [
  { key: "todos" },
  { key: "salud" },
  { key: "legal" },
  { key: "coaching" },
  { key: "finanzas" },
];

export default function CasosPageClient() {
  const { lang, t } = useLanguage();
  const allCases = lang === "en" ? casesEn : casesEs;

  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
  }, [activeCategory]);

  const filtered =
    activeCategory === "todos"
      ? allCases
      : allCases.filter((c) => c.category === activeCategory);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section
          style={{
            padding: "160px 0 80px",
            background: "var(--black)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="chess-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(ellipse, rgba(203,10,118,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, var(--pink), transparent)",
            }}
          />

          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 32px",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <div
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "24px" }}
            >
              {t("cp.label")}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(56px, 8vw, 110px)",
                fontWeight: "400",
                lineHeight: "1.0",
                color: "var(--white)",
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              {t("cp.title1")}{" "}
              <span style={{ color: "var(--pink)" }}>{t("cp.title2")}</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "18px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "560px",
                margin: "0 auto 48px",
              }}
            >
              {t("cp.subtitle")}
            </p>

            {/* Stats bar */}
            <div
              style={{
                display: "inline-flex",
                gap: "0",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              className="hero-stats-bar"
            >
              {[
                { num: "50+", labelKey: "cp.stat1" },
                { num: "4.8x", labelKey: "cp.stat2" },
                { num: "$2M+", labelKey: "cp.stat3" },
                { num: "100%", labelKey: "cp.stat4" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 36px",
                    borderRight:
                      i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "32px",
                      color: "var(--white)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      marginTop: "4px",
                    }}
                  >
                    {t(s.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section
          ref={sectionRef}
          style={{
            padding: "80px 0 120px",
            background: "var(--gray-900)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            {/* Filter tabs */}
            <div
              style={{
                display: "flex",
                gap: "2px",
                marginBottom: "60px",
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    padding: "12px 28px",
                    background:
                      activeCategory === cat.key
                        ? "var(--pink)"
                        : "var(--gray-800)",
                    border: "none",
                    color:
                      activeCategory === cat.key
                        ? "var(--white)"
                        : "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat.key)
                      e.currentTarget.style.color = "var(--white)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat.key)
                      e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {t("cp.filter." + cat.key)}
                </button>
              ))}
            </div>

            {/* Cases grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
              className="casos-grid"
            >
              {filtered.map((c, i) => (
                <div
                  key={c.id}
                  className="reveal card-dark"
                  style={{
                    transitionDelay: `${(i % 2) * 0.1}s`,
                    cursor: "pointer",
                    padding: 0,
                    overflow: "hidden",
                  }}
                  onClick={() =>
                    setActiveCase(activeCase === c.id ? null : c.id)
                  }
                >
                  {/* Card header */}
                  <div
                    style={{
                      padding: "36px 40px 28px",
                      borderBottom:
                        activeCase === c.id
                          ? "1px solid rgba(203,10,118,0.2)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "20px",
                      }}
                    >
                      <div>
                        <span className="tag-pill">{c.industry}</span>
                        <div
                          style={{
                            fontFamily: "var(--font-jakarta)",
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.3)",
                            marginTop: "8px",
                          }}
                        >
                          {c.location}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "48px",
                          color: "var(--pink)",
                          opacity: 0.2,
                          lineHeight: 1,
                        }}
                      >
                        {c.piece}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "28px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                        color: "var(--white)",
                        marginBottom: "12px",
                        lineHeight: "1.1",
                      }}
                    >
                      {c.title}
                    </h2>

                    {/* Highlight pill */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(203,10,118,0.1)",
                        border: "1px solid rgba(203,10,118,0.2)",
                        padding: "6px 14px",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{ color: "var(--pink)", fontSize: "12px" }}
                      >
                        ♟
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "var(--pink)",
                        }}
                      >
                        {c.highlight}
                      </span>
                    </div>

                    {/* Metrics row */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1px",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {c.results.map((r, j) => (
                        <div
                          key={j}
                          style={{
                            background: "var(--gray-800)",
                            padding: "14px 12px",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-bebas)",
                              fontSize: "22px",
                              color: "var(--pink)",
                              lineHeight: 1,
                              letterSpacing: "1px",
                            }}
                          >
                            {r.value}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              fontSize: "10px",
                              color: "rgba(255,255,255,0.3)",
                              marginTop: "4px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expand toggle */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "12px",
                          color: "var(--pink)",
                          letterSpacing: "1px",
                        }}
                      >
                        {activeCase === c.id ? t("cp.collapse") : t("cp.expand")}
                      </span>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {activeCase === c.id && (
                    <div
                      style={{
                        padding: "32px 40px 36px",
                        background: "rgba(0,0,0,0.3)",
                        borderTop: "1px solid rgba(203,10,118,0.1)",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "32px",
                          marginBottom: "28px",
                        }}
                        className="case-detail-grid"
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              fontSize: "10px",
                              fontWeight: "700",
                              letterSpacing: "3px",
                              textTransform: "uppercase",
                              color: "var(--pink)",
                              marginBottom: "10px",
                              opacity: 0.8,
                            }}
                          >
                            {t("cp.challenge")}
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              fontSize: "14px",
                              lineHeight: "1.75",
                              color: "rgba(255,255,255,0.6)",
                            }}
                          >
                            {c.challenge}
                          </p>
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              fontSize: "10px",
                              fontWeight: "700",
                              letterSpacing: "3px",
                              textTransform: "uppercase",
                              color: "var(--pink)",
                              marginBottom: "10px",
                              opacity: 0.8,
                            }}
                          >
                            {t("cp.solution")}
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              fontSize: "14px",
                              lineHeight: "1.75",
                              color: "rgba(255,255,255,0.6)",
                            }}
                          >
                            {c.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap",
                          marginBottom: "28px",
                        }}
                      >
                        {c.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div
                        style={{
                          background: "rgba(203,10,118,0.06)",
                          border: "1px solid rgba(203,10,118,0.15)",
                          padding: "24px 28px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-jakarta)",
                            fontSize: "15px",
                            fontStyle: "italic",
                            lineHeight: "1.75",
                            color: "rgba(255,255,255,0.8)",
                            marginBottom: "16px",
                          }}
                        >
                          "{c.testimonial}"
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div
                            style={{
                              width: "36px",
                              height: "36px",
                              background: "rgba(203,10,118,0.2)",
                              border: "1px solid rgba(203,10,118,0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: "var(--font-bebas)",
                              fontSize: "14px",
                              color: "var(--pink)",
                            }}
                          >
                            {c.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                          </div>
                          <div>
                            <div
                              style={{
                                fontFamily: "var(--font-jakarta)",
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "var(--white)",
                              }}
                            >
                              {c.author}
                            </div>
                            <div
                              style={{
                                fontFamily: "var(--font-jakarta)",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.4)",
                              }}
                            >
                              {c.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                textAlign: "center",
                marginTop: "80px",
                padding: "60px",
                background: "var(--black)",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "400px",
                  height: "400px",
                  background:
                    "radial-gradient(ellipse, rgba(203,10,118,0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(36px, 4vw, 54px)",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    color: "var(--white)",
                    marginBottom: "16px",
                  }}
                >
                  {t("cp.cta.title1")}{" "}
                  <span style={{ color: "var(--pink)" }}>{t("cp.cta.title2")}</span>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "16px",
                    lineHeight: "1.75",
                    color: "rgba(255,255,255,0.55)",
                    maxWidth: "460px",
                    margin: "0 auto 36px",
                  }}
                >
                  {t("cp.cta.subtitle")}
                </p>
                <a
                  href="/#contacto"
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  {t("cp.cta.btn")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 900px) {
          .casos-grid { grid-template-columns: 1fr !important; }
          .hero-stats-bar { flex-direction: column !important; width: 100% !important; }
        }
        @media (max-width: 600px) {
          .case-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
