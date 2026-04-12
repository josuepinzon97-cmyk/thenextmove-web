"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const servicesEs = [
  {
    id: "contenido",
    piece: "♝",
    color: "#cb0a76",
    category: "Contenido",
    title: "Contenido & Video Marketing",
    subtitle: "Contenido que vende, no solo que gusta.",
    description:
      "Publicar por publicar no sirve. Cada pieza de contenido que creamos tiene un objetivo: educar a tu audiencia, posicionarte como referente y llevar a tus prospectos un paso más cerca de comprarte. Diseñamos una estrategia editorial completa adaptada a tu industria, tu voz y tu cliente ideal.",
    whatWeDo: [
      "Estrategia de contenido mensual alineada a tus objetivos de venta",
      "Guiones para videos cortos (Reels, TikToks, YouTube Shorts)",
      "Producción de contenido educativo y de autoridad",
      "Copywriting para captions, stories y posts",
      "Calendario editorial con temas, formatos y frecuencia",
      "Análisis de métricas y ajuste continuo de la estrategia",
    ],
    idealFor: ["Médicos", "Abogados", "Coaches", "Infoproductores", "Consultores"],
    result: "Más visibilidad, más autoridad y una comunidad que te ve como la primera opción cuando necesita lo que tú ofreces.",
    tags: ["Reels", "TikTok", "YouTube", "Copy", "Estrategia Editorial", "Video"],
    stats: [
      { value: "+340%", label: "Alcance promedio" },
      { value: "3x", label: "Más engagement" },
      { value: "60 días", label: "Primeros resultados" },
    ],
  },
  {
    id: "campanas",
    piece: "♜",
    color: "#cb0a76",
    category: "Publicidad",
    title: "Campañas Publicitarias",
    subtitle: "Cada peso invertido debe regresar multiplicado.",
    description:
      "Manejamos campañas en Meta Ads y TikTok Ads con una sola obsesión: el retorno. No buscamos likes ni impresiones bonitas. Buscamos leads calificados, agendamientos y ventas reales. Cada campaña es construida con una segmentación precisa, creativos que detienen el scroll y una optimización constante para escalar lo que funciona.",
    whatWeDo: [
      "Auditoría y diagnóstico de campañas actuales",
      "Estrategia de segmentación por audiencias frías, tibias y calientes",
      "Creación de creativos (imágenes y videos) para ads",
      "Configuración de pixel, eventos de conversión y seguimiento",
      "Campañas de reconocimiento, consideración y conversión",
      "Retargeting y lookalike audiences",
      "Reportes semanales con métricas clave y decisiones tomadas",
      "Optimización continua y escalamiento de presupuesto",
    ],
    idealFor: ["Clínicas", "Bufetes", "Servicios High Ticket", "E-commerce", "Lanzamientos"],
    result: "ROAS consistente por encima de 4x y un flujo predecible de prospectos calificados entrando a tu negocio todos los días.",
    tags: ["Meta Ads", "TikTok Ads", "ROAS", "Retargeting", "Lookalike", "Conversión"],
    stats: [
      { value: "4.8x", label: "ROAS promedio" },
      { value: "-52%", label: "Costo por lead" },
      { value: "30 días", label: "Para optimizar" },
    ],
  },
  {
    id: "automatizacion",
    piece: "♟",
    color: "#cb0a76",
    category: "Automatización",
    title: "Automatización con IA",
    subtitle: "Tu negocio trabajando solo, 24 horas al día.",
    description:
      "La diferencia entre un negocio que escala y uno que se estanca es la automatización. Construimos sistemas inteligentes que captan leads, los nutren, los califican y los llevan hasta la venta, sin que tengas que estar pendiente de cada mensaje. Usamos IA y las mejores herramientas del mercado para crear flujos que trabajan mientras tú duermes.",
    whatWeDo: [
      "Chatbots inteligentes para WhatsApp, Instagram y web",
      "Flujos de nurturing automatizados por email y WhatsApp",
      "Calificación automática de leads según criterios de tu negocio",
      "Automatización de agendamientos y confirmaciones",
      "Seguimiento post-consulta o post-venta automatizado",
      "Integración con tu CRM, calendario y herramientas actuales",
      "Bots de ventas con respuestas personalizadas por IA",
      "Alertas y notificaciones automáticas para tu equipo",
    ],
    idealFor: ["Negocios con alto volumen de consultas", "Servicios que necesitan agendar", "E-commerce", "Coaches con programas"],
    result: "Un sistema que responde en segundos, califica prospectos automáticamente y llena tu agenda sin que tú tengas que intervenir en cada conversación.",
    tags: ["Chatbots", "WhatsApp Bot", "IA", "Lead Nurturing", "Automatización", "CRM"],
    stats: [
      { value: "24/7", label: "Disponibilidad" },
      { value: "-70%", label: "Tiempo de respuesta" },
      { value: "3x", label: "Más leads procesados" },
    ],
  },
  {
    id: "analitica",
    piece: "♛",
    color: "#cb0a76",
    category: "Analytics",
    title: "Análisis de Datos & Optimización",
    subtitle: "Decisiones basadas en datos, no en intuiciones.",
    description:
      "La mayoría de los negocios toman decisiones de marketing a ciegas. Nosotros construimos el sistema de medición que te permite saber exactamente qué está funcionando, qué no y dónde está el dinero que se está perdiendo. Con dashboards en tiempo real y análisis constante, optimizamos cada variable para escalar lo que da resultados.",
    whatWeDo: [
      "Auditoría completa de métricas actuales y puntos ciegos",
      "Configuración de Google Analytics 4, Meta Pixel y eventos",
      "Dashboard personalizado con KPIs de tu negocio",
      "Análisis de embudo de ventas y puntos de fuga",
      "Pruebas A/B en creativos, copies y landing pages",
      "Reportes mensuales con insights accionables",
      "Tracking de ROI por canal y por campaña",
      "Recomendaciones de optimización y escalamiento",
    ],
    idealFor: ["Negocios con inversión publicitaria activa", "E-commerce", "Agencias", "Servicios con múltiples canales"],
    result: "Claridad total sobre qué genera dinero en tu negocio y un sistema de mejora continua que maximiza cada peso invertido en marketing.",
    tags: ["Analytics", "KPIs", "A/B Testing", "Dashboard", "ROI", "Optimización"],
    stats: [
      { value: "+40%", label: "Eficiencia en ads" },
      { value: "100%", label: "Visibilidad del negocio" },
      { value: "Real-time", label: "Reportes en vivo" },
    ],
  },
  {
    id: "marca",
    piece: "♞",
    color: "#cb0a76",
    category: "Marca Personal",
    title: "Marca Personal",
    subtitle: "Tu conocimiento es tu activo más valioso. Posicionémoslo.",
    description:
      "Una marca personal sólida te permite cobrar más, elegir a tus clientes y generar ingresos incluso mientras duermes. Construimos tu presencia digital desde cero o la potenciamos si ya tienes algo, asegurándonos de que cada publicación, cada aparición y cada pieza de contenido refuerce el mismo mensaje: eres la mejor opción en tu industria.",
    whatWeDo: [
      "Definición de posicionamiento, nicho y propuesta de valor única",
      "Estrategia de contenido de autoridad para LinkedIn e Instagram",
      "Construcción y optimización de perfil profesional",
      "Storytelling personal que conecta y convierte",
      "Estrategia de medios y apariciones en podcasts o medios",
      "Contenido de thought leadership para tu industria",
      "Sistema de generación de referidos y testimonios",
      "Estrategia de monetización de la audiencia",
    ],
    idealFor: ["Médicos especialistas", "Abogados", "Consultores", "Coaches", "Infoproductores", "Conferencistas"],
    result: "Una presencia digital que genera confianza antes de la primera llamada, justifica precios premium y convierte seguidores en clientes de alto valor.",
    tags: ["LinkedIn", "Instagram", "Storytelling", "Autoridad", "Thought Leadership", "Personal Branding"],
    stats: [
      { value: "+5x", label: "Valor percibido" },
      { value: "90 días", label: "Para posicionarse" },
      { value: "+200%", label: "Ingresos promedio" },
    ],
  },
  {
    id: "desarrollo",
    piece: "♚",
    color: "#cb0a76",
    category: "Tecnología",
    title: "Desarrollo & CRM Personalizado",
    subtitle: "Sistemas que se adaptan a tu negocio, no al revés.",
    description:
      "Las herramientas genéricas tienen límites. Cuando tu negocio necesita algo específico, construimos la solución exacta: un CRM a tu medida, una aplicación interna, un sistema de automatización personalizado o una plataforma para entregar tu servicio. Todo desarrollado para que tu equipo trabaje más rápido y sin fricciones.",
    whatWeDo: [
      "Desarrollo de CRM personalizado con tus flujos de venta",
      "Aplicaciones web internas para gestión de clientes",
      "Sistemas de agendamiento y gestión de citas",
      "Plataformas de membresía y entrega de cursos",
      "Integraciones entre herramientas (Zapier, Make, APIs)",
      "Automatizaciones avanzadas con flujos complejos",
      "Paneles de control y reportes personalizados",
      "Soporte, mantenimiento y evolución continua",
    ],
    idealFor: ["Clínicas con múltiples sedes", "Firmas con equipos grandes", "Negocios con procesos complejos", "Infoproductores"],
    result: "Un sistema hecho a tu medida que elimina tareas repetitivas, centraliza la información y le da a tu equipo el poder de vender y operar sin depender de herramientas limitadas.",
    tags: ["CRM", "Apps", "Automatización", "APIs", "Make", "Zapier", "Desarrollo Web"],
    stats: [
      { value: "-60%", label: "Tiempo operativo" },
      { value: "100%", label: "A tu medida" },
      { value: "0", label: "Límites externos" },
    ],
  },
  {
    id: "disenoweb",
    piece: "♔",
    color: "#cb0a76",
    category: "Diseño Web",
    title: "Diseño Web",
    subtitle: "Tu primera impresión digital debe convertir, no solo impresionar.",
    description:
      "Un sitio web bonito que no convierte es solo un gasto. Diseñamos y desarrollamos sitios que transmiten autoridad desde el primer scroll, cargan en segundos y guían a cada visitante hacia la acción que hace crecer tu negocio: una llamada, un formulario, una venta. Todo con estrategia de conversión integrada desde el diseño.",
    whatWeDo: [
      "Diseño estratégico centrado en conversión y experiencia de usuario",
      "Landing pages de alto impacto para campañas y servicios",
      "Sitios institucionales y portafolios profesionales",
      "Optimización de velocidad y rendimiento técnico",
      "SEO técnico on-page desde la estructura",
      "Diseño responsive adaptado a todos los dispositivos",
      "Integración con CRM, formularios y herramientas de automatización",
      "Revisiones y ajustes continuos basados en datos de comportamiento",
    ],
    idealFor: ["Profesionales independientes", "Clínicas y consultorios", "Coaches y consultores", "Negocios de servicios high ticket"],
    result: "Un sitio que trabaja como tu mejor vendedor: genera confianza, capta leads y convierte visitantes en clientes desde el primer día.",
    tags: ["Landing Pages", "UX/UI", "Conversión", "Responsive", "SEO Técnico", "Next.js"],
    stats: [
      { value: "+3x", label: "Tasa de conversión" },
      { value: "<2s", label: "Velocidad de carga" },
      { value: "100%", label: "Diseño a medida" },
    ],
  },
];

const servicesEn = [
  {
    id: "contenido",
    piece: "♝",
    color: "#cb0a76",
    category: "Content",
    title: "Content & Video Marketing",
    subtitle: "Content that sells, not just that gets liked.",
    description:
      "Posting for the sake of posting doesn't work. Every piece of content we create has a goal: educate your audience, position you as a reference, and move your prospects one step closer to buying from you. We design a complete editorial strategy tailored to your industry, your voice, and your ideal client.",
    whatWeDo: [
      "Monthly content strategy aligned to your sales objectives",
      "Scripts for short videos (Reels, TikToks, YouTube Shorts)",
      "Educational and authority content production",
      "Copywriting for captions, stories, and posts",
      "Editorial calendar with topics, formats, and frequency",
      "Metrics analysis and continuous strategy adjustment",
    ],
    idealFor: ["Doctors", "Lawyers", "Coaches", "Infoproducers", "Consultants"],
    result: "More visibility, more authority, and a community that sees you as the first option when they need what you offer.",
    tags: ["Reels", "TikTok", "YouTube", "Copy", "Editorial Strategy", "Video"],
    stats: [
      { value: "+340%", label: "Average reach" },
      { value: "3x", label: "More engagement" },
      { value: "60 days", label: "First results" },
    ],
  },
  {
    id: "campanas",
    piece: "♜",
    color: "#cb0a76",
    category: "Advertising",
    title: "Advertising Campaigns",
    subtitle: "Every dollar invested must return multiplied.",
    description:
      "We manage Meta Ads and TikTok Ads campaigns with one obsession: return. We don't chase likes or pretty impressions. We chase qualified leads, bookings, and real sales. Each campaign is built with precise targeting, creatives that stop the scroll, and constant optimization to scale what works.",
    whatWeDo: [
      "Audit and diagnosis of current campaigns",
      "Targeting strategy for cold, warm, and hot audiences",
      "Creative production (images and videos) for ads",
      "Pixel setup, conversion events, and tracking",
      "Awareness, consideration, and conversion campaigns",
      "Retargeting and lookalike audiences",
      "Weekly reports with key metrics and decisions made",
      "Continuous optimization and budget scaling",
    ],
    idealFor: ["Clinics", "Law Firms", "High Ticket Services", "E-commerce", "Launches"],
    result: "Consistent ROAS above 4x and a predictable flow of qualified prospects entering your business every day.",
    tags: ["Meta Ads", "TikTok Ads", "ROAS", "Retargeting", "Lookalike", "Conversion"],
    stats: [
      { value: "4.8x", label: "Average ROAS" },
      { value: "-52%", label: "Cost per lead" },
      { value: "30 days", label: "To optimize" },
    ],
  },
  {
    id: "automatizacion",
    piece: "♟",
    color: "#cb0a76",
    category: "Automation",
    title: "AI Automation",
    subtitle: "Your business working on its own, 24 hours a day.",
    description:
      "The difference between a business that scales and one that stagnates is automation. We build intelligent systems that capture leads, nurture them, qualify them, and guide them to the sale — without you having to monitor every message. We use AI and the best tools on the market to create flows that work while you sleep.",
    whatWeDo: [
      "Smart chatbots for WhatsApp, Instagram, and web",
      "Automated nurturing flows via email and WhatsApp",
      "Automatic lead qualification based on your business criteria",
      "Appointment and confirmation automation",
      "Automated post-consultation or post-sale follow-up",
      "Integration with your CRM, calendar, and current tools",
      "AI sales bots with personalized responses",
      "Automatic alerts and notifications for your team",
    ],
    idealFor: ["Businesses with high consultation volume", "Services that need scheduling", "E-commerce", "Coaches with programs"],
    result: "A system that responds in seconds, automatically qualifies prospects, and fills your schedule without you having to intervene in every conversation.",
    tags: ["Chatbots", "WhatsApp Bot", "AI", "Lead Nurturing", "Automation", "CRM"],
    stats: [
      { value: "24/7", label: "Availability" },
      { value: "-70%", label: "Response time" },
      { value: "3x", label: "More leads processed" },
    ],
  },
  {
    id: "analitica",
    piece: "♛",
    color: "#cb0a76",
    category: "Analytics",
    title: "Data Analysis & Optimization",
    subtitle: "Decisions based on data, not intuitions.",
    description:
      "Most businesses make marketing decisions blindly. We build the measurement system that lets you know exactly what's working, what's not, and where money is being lost. With real-time dashboards and constant analysis, we optimize every variable to scale what delivers results.",
    whatWeDo: [
      "Complete audit of current metrics and blind spots",
      "Google Analytics 4, Meta Pixel, and event setup",
      "Custom dashboard with your business KPIs",
      "Sales funnel analysis and leak points",
      "A/B testing on creatives, copy, and landing pages",
      "Monthly reports with actionable insights",
      "ROI tracking by channel and campaign",
      "Optimization and scaling recommendations",
    ],
    idealFor: ["Businesses with active ad spend", "E-commerce", "Agencies", "Services with multiple channels"],
    result: "Full clarity on what generates money in your business and a continuous improvement system that maximizes every dollar invested in marketing.",
    tags: ["Analytics", "KPIs", "A/B Testing", "Dashboard", "ROI", "Optimization"],
    stats: [
      { value: "+40%", label: "Ad efficiency" },
      { value: "100%", label: "Business visibility" },
      { value: "Real-time", label: "Live reports" },
    ],
  },
  {
    id: "marca",
    piece: "♞",
    color: "#cb0a76",
    category: "Personal Brand",
    title: "Personal Brand",
    subtitle: "Your knowledge is your most valuable asset. Let's position it.",
    description:
      "A strong personal brand lets you charge more, choose your clients, and generate income even while you sleep. We build your digital presence from scratch or boost it if you already have something, ensuring that every post, every appearance, and every piece of content reinforces the same message: you are the best option in your industry.",
    whatWeDo: [
      "Positioning, niche, and unique value proposition definition",
      "Authority content strategy for LinkedIn and Instagram",
      "Professional profile building and optimization",
      "Personal storytelling that connects and converts",
      "Media strategy and podcast or media appearances",
      "Thought leadership content for your industry",
      "Referral and testimonial generation system",
      "Audience monetization strategy",
    ],
    idealFor: ["Specialist Doctors", "Lawyers", "Consultants", "Coaches", "Infoproducers", "Speakers"],
    result: "A digital presence that builds trust before the first call, justifies premium prices, and converts followers into high-value clients.",
    tags: ["LinkedIn", "Instagram", "Storytelling", "Authority", "Thought Leadership", "Personal Branding"],
    stats: [
      { value: "+5x", label: "Perceived value" },
      { value: "90 days", label: "To position yourself" },
      { value: "+200%", label: "Average income" },
    ],
  },
  {
    id: "desarrollo",
    piece: "♚",
    color: "#cb0a76",
    category: "Technology",
    title: "Custom Development & CRM",
    subtitle: "Systems that adapt to your business, not the other way around.",
    description:
      "Generic tools have limits. When your business needs something specific, we build the exact solution: a custom CRM, an internal application, a personalized automation system, or a platform to deliver your service. Everything developed so your team works faster and without friction.",
    whatWeDo: [
      "Custom CRM development with your sales flows",
      "Internal web applications for client management",
      "Scheduling and appointment management systems",
      "Membership platforms and course delivery",
      "Integrations between tools (Zapier, Make, APIs)",
      "Advanced automation with complex flows",
      "Custom dashboards and reports",
      "Support, maintenance, and continuous evolution",
    ],
    idealFor: ["Clinics with multiple locations", "Firms with large teams", "Businesses with complex processes", "Infoproducers"],
    result: "A system built for you that eliminates repetitive tasks, centralizes information, and gives your team the power to sell and operate without depending on limited tools.",
    tags: ["CRM", "Apps", "Automation", "APIs", "Make", "Zapier", "Web Development"],
    stats: [
      { value: "-60%", label: "Operational time" },
      { value: "100%", label: "Built for you" },
      { value: "0", label: "External limits" },
    ],
  },
  {
    id: "disenoweb",
    piece: "♔",
    color: "#cb0a76",
    category: "Web Design",
    title: "Web Design",
    subtitle: "Your first digital impression must convert, not just impress.",
    description:
      "A pretty website that doesn't convert is just an expense. We design and develop sites that convey authority from the first scroll, load in seconds, and guide every visitor toward the action that grows your business: a call, a form, a sale. All with conversion strategy built into the design from the start.",
    whatWeDo: [
      "Strategic design focused on conversion and user experience",
      "High-impact landing pages for campaigns and services",
      "Institutional sites and professional portfolios",
      "Speed optimization and technical performance",
      "Technical on-page SEO from the structure",
      "Responsive design adapted to all devices",
      "Integration with CRM, forms, and automation tools",
      "Continuous revisions and adjustments based on behavioral data",
    ],
    idealFor: ["Independent professionals", "Clinics and practices", "Coaches and consultants", "High-ticket service businesses"],
    result: "A site that works as your best salesperson: builds trust, captures leads, and converts visitors into clients from day one.",
    tags: ["Landing Pages", "UX/UI", "Conversion", "Responsive", "Technical SEO", "Next.js"],
    stats: [
      { value: "+3x", label: "Conversion rate" },
      { value: "<2s", label: "Load speed" },
      { value: "100%", label: "Custom design" },
    ],
  },
];

export default function ServiciosPageClient() {
  const { lang, t } = useLanguage();
  const services = lang === "en" ? servicesEn : servicesEs;

  const [activeService, setActiveService] = useState(services[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.06 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeService]);

  const active = services.find((s) => s.id === activeService)!;

  const faqs = [1, 2, 3, 4, 5].map((i) => ({
    q: t(`sp.faq.q${i}`),
    a: t(`sp.faq.a${i}`),
  }));

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
              transform: "translate(-50%,-50%)",
              width: "700px",
              height: "700px",
              background: "radial-gradient(ellipse, rgba(203,10,118,0.1) 0%, transparent 70%)",
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
              background: "linear-gradient(90deg, transparent, var(--pink), transparent)",
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
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "24px" }}>
              {t("sp.label")}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(52px, 8vw, 110px)",
                fontWeight: "400",
                lineHeight: "1.0",
                color: "var(--white)",
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              {t("sp.title1")}{" "}
              <span style={{ color: "var(--pink)" }}>{t("sp.title2")}</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "18px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "580px",
                margin: "0 auto 56px",
              }}
            >
              {t("sp.subtitle")}
            </p>

            {/* Quick nav pills */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveService(s.id);
                    document
                      .getElementById("detalle")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    padding: "10px 22px",
                    background:
                      activeService === s.id
                        ? "var(--pink)"
                        : "rgba(255,255,255,0.06)",
                    border: "1px solid",
                    borderColor:
                      activeService === s.id
                        ? "var(--pink)"
                        : "rgba(255,255,255,0.1)",
                    color: "var(--white)",
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    borderRadius: "0",
                  }}
                >
                  {s.piece} {s.category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service detail - sidebar + content */}
        <section
          id="detalle"
          style={{ background: "var(--gray-900)", padding: "0 0 120px" }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "280px 1fr",
                gap: "0",
                minHeight: "600px",
              }}
              className="servicios-layout"
            >
              {/* Sidebar */}
              <div
                style={{
                  background: "var(--black)",
                  borderRight: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "40px",
                  position: "sticky",
                  top: "80px",
                  alignSelf: "start",
                }}
                className="servicios-sidebar"
              >
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveService(s.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "20px 28px",
                      background:
                        activeService === s.id
                          ? "rgba(203,10,118,0.08)"
                          : "transparent",
                      border: "none",
                      borderLeft:
                        activeService === s.id
                          ? "3px solid var(--pink)"
                          : "3px solid transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      if (activeService !== s.id)
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeService !== s.id)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontSize: "22px",
                        color: activeService === s.id ? "var(--pink)" : "rgba(255,255,255,0.25)",
                        transition: "color 0.2s ease",
                        lineHeight: 1,
                      }}
                    >
                      {s.piece}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "10px",
                          fontWeight: "700",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: activeService === s.id ? "var(--pink)" : "rgba(255,255,255,0.25)",
                          marginBottom: "3px",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {s.category}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: activeService === s.id ? "var(--white)" : "rgba(255,255,255,0.5)",
                          lineHeight: "1.2",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {s.title.split("&")[0].trim()}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div
                ref={contentRef}
                style={{ padding: "56px 60px", background: "var(--gray-900)" }}
                className="servicios-content"
              >
                {/* Header */}
                <div style={{ marginBottom: "48px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "56px",
                        color: "var(--pink)",
                        opacity: 0.8,
                        lineHeight: 1,
                      }}
                    >
                      {active.piece}
                    </span>
                    <span className="tag-pill">{active.category}</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(36px, 4vw, 56px)",
                      fontWeight: "400",
                      letterSpacing: "1px",
                      color: "var(--white)",
                      lineHeight: "1.05",
                      marginBottom: "12px",
                    }}
                  >
                    {active.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "var(--pink)",
                      marginBottom: "20px",
                    }}
                  >
                    {active.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "15px",
                      lineHeight: "1.85",
                      color: "rgba(255,255,255,0.6)",
                      maxWidth: "620px",
                    }}
                  >
                    {active.description}
                  </p>
                </div>

                {/* Stats */}
                <div
                  style={{
                    display: "flex",
                    gap: "1px",
                    background: "rgba(255,255,255,0.04)",
                    marginBottom: "48px",
                  }}
                  className="servicios-stats"
                >
                  {active.stats.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        background: "var(--black)",
                        padding: "24px 28px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "40px",
                          color: "var(--pink)",
                          lineHeight: 1,
                          letterSpacing: "1px",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.35)",
                          marginTop: "6px",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* What we do + Ideal for + Result */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    marginBottom: "48px",
                  }}
                  className="servicios-two-col"
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "var(--pink)",
                        marginBottom: "20px",
                        opacity: 0.9,
                      }}
                    >
                      {t("sp.detail.includes")}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                      {active.whatWeDo.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            fontFamily: "var(--font-jakarta)",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            color: "rgba(255,255,255,0.65)",
                          }}
                        >
                          <span style={{ color: "var(--pink)", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>♟</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Ideal for */}
                    <div style={{ marginBottom: "32px" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          color: "var(--pink)",
                          marginBottom: "16px",
                          opacity: 0.9,
                        }}
                      >
                        {t("sp.detail.idealfor")}
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {active.idealFor.map((item, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "6px 14px",
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              fontFamily: "var(--font-jakarta)",
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.6)",
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    <div
                      style={{
                        background: "rgba(203,10,118,0.07)",
                        border: "1px solid rgba(203,10,118,0.2)",
                        padding: "24px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "10px",
                          fontWeight: "700",
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          color: "var(--pink)",
                          marginBottom: "12px",
                        }}
                      >
                        {t("sp.detail.result")}
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "14px",
                          lineHeight: "1.75",
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                        }}
                      >
                        {active.result}
                      </p>
                    </div>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                      {active.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    paddingTop: "32px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="btn-primary"
                    onClick={() => (window.location.href = "/#contacto")}
                  >
                    {t("sp.detail.cta1")}
                  </button>
                  <a
                    href="https://wa.me/573113649179?text=Hola%2C%20quiero%20información%20sobre%20el%20servicio%20de%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ textDecoration: "none", color: "var(--white)" }}
                  >
                    {t("sp.detail.cta2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All services overview grid */}
        <section style={{ padding: "100px 0", background: "var(--black)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div className="section-label reveal" style={{ justifyContent: "center" }}>
                {t("sp.overview.label")}
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: "400",
                  letterSpacing: "1px",
                  color: "var(--white)",
                  marginTop: "16px",
                  transitionDelay: "0.1s",
                }}
              >
                {t("sp.overview.title")}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(255,255,255,0.05)",
              }}
              className="overview-grid"
            >
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className="reveal card-dark"
                  style={{
                    padding: "36px 32px",
                    cursor: "pointer",
                    transitionDelay: `${(i % 3) * 0.1}s`,
                  }}
                  onClick={() => {
                    setActiveService(s.id);
                    document.getElementById("detalle")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div style={{ fontSize: "40px", color: "var(--pink)", opacity: 0.7, lineHeight: 1, marginBottom: "20px" }}>
                    {s.piece}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "rgba(203,10,118,0.6)",
                      marginBottom: "8px",
                    }}
                  >
                    {s.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "22px",
                      letterSpacing: "0.5px",
                      color: "var(--white)",
                      marginBottom: "12px",
                      lineHeight: "1.1",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      color: "rgba(255,255,255,0.45)",
                      marginBottom: "20px",
                    }}
                  >
                    {s.subtitle}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "var(--pink)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {t("sp.overview.cta")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "100px 0", background: "var(--gray-900)" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div className="section-label reveal" style={{ justifyContent: "center" }}>
                {t("sp.faq.label")}
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(36px, 4vw, 54px)",
                  fontWeight: "400",
                  letterSpacing: "1px",
                  color: "var(--white)",
                  marginTop: "16px",
                  transitionDelay: "0.1s",
                }}
              >
                {t("sp.faq.title")}
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: openFaq === i ? "var(--black)" : "var(--gray-800)",
                    border: "1px solid",
                    borderColor: openFaq === i ? "rgba(203,10,118,0.25)" : "rgba(255,255,255,0.05)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "24px 28px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: openFaq === i ? "var(--white)" : "rgba(255,255,255,0.8)",
                        lineHeight: "1.4",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        color: "var(--pink)",
                        fontSize: "20px",
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 28px 24px" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          color: "rgba(255,255,255,0.55)",
                          margin: 0,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          style={{
            padding: "120px 0",
            background: "var(--black)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div className="chess-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "600px",
              height: "600px",
              background: "radial-gradient(ellipse, rgba(203,10,118,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto", padding: "0 32px" }}>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(44px, 6vw, 76px)",
                fontWeight: "400",
                letterSpacing: "2px",
                color: "var(--white)",
                lineHeight: "1.05",
                marginBottom: "20px",
              }}
            >
              {t("sp.cta.title1")}{" "}
              <span style={{ color: "var(--pink)" }}>{t("sp.cta.title2")}</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "40px",
              }}
            >
              {t("sp.cta.subtitle")}
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                style={{ padding: "18px 40px", fontSize: "15px" }}
                onClick={() => (window.location.href = "/#contacto")}
              >
                {t("sp.cta.btn1")}
              </button>
              <a
                href="/casos"
                className="btn-secondary"
                style={{ padding: "18px 40px", fontSize: "15px", textDecoration: "none", color: "var(--white)" }}
              >
                {t("sp.cta.btn2")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 900px) {
          .servicios-layout { grid-template-columns: 1fr !important; }
          .servicios-sidebar { position: static !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
          .servicios-content { padding: 40px 24px !important; }
          .overview-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .servicios-two-col { grid-template-columns: 1fr !important; }
          .servicios-stats { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
