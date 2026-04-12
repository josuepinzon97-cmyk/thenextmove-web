"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.cases": "Casos de Éxito",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",

    // Hero
    "hero.label": "Agencia de Marketing Digital",
    "hero.title1": "Tu próximo movimiento",
    "hero.title2": "define el juego.",
    "hero.subtitle":
      "Ayudamos a clínicas, abogados, terapeutas y profesionales de alto ticket a llenar su agenda con citas calificadas.",
    "hero.cta1": "Agenda tu diagnóstico",
    "hero.cta2": "Ver servicios",
    "hero.stat1": "Clientes activos",
    "hero.stat2": "ROI promedio",
    "hero.stat3": "Años de experiencia",

    // Value Prop
    "value.label": "¿Por qué escogernos?",
    "value.title": "¿Por qué elegirnos para llenar tu agenda de clientes?",
    "value.subtitle": "No somos una agencia más. Somos un sistema enfocado en resultados reales para servicios profesionales.",
    "value.p1.title": "Especialización en servicios profesionales",
    "value.p1.desc": "No trabajamos con cualquier negocio. Entendemos cómo atraer clientes para abogados, clínicas, terapeutas y expertos.",
    "value.p1.cta": "Sabemos qué funciona en tu sector y qué no.",
    "value.p2.title": "Enfoque en citas, no en métricas vacías",
    "value.p2.desc": "No nos importa darte \"likes\" o \"alcance\". Nuestro objetivo es uno: llenar tu agenda con citas calificadas.",
    "value.p2.cta": "Medimos éxito en clientes, no en números bonitos.",
    "value.p3.title": "Sistema probado paso a paso",
    "value.p3.desc": "No improvisamos. Trabajamos con un sistema optimizado que ya ha generado resultados.",
    "value.p3.cta": "Sabes exactamente qué se está haciendo y por qué.",
    "value.p4.title": "Resultados en semanas, no meses",
    "value.p4.desc": "Mientras otras agencias tardan, nosotros ejecutamos rápido.",
    "value.p4.cta": "Empezamos a generar movimiento real en menos de 30 días.",
    "value.p5.title": "Estrategia personalizada (no plantillas)",
    "value.p5.desc": "Tu negocio es único.",
    "value.p5.cta": "Creamos una estrategia adaptada a tu servicio, ciudad y tipo de cliente ideal.",
    "value.p6.title": "Acompañamiento real",
    "value.p6.desc": "No desaparecemos después de lanzar campañas.",
    "value.p6.cta": "Te guiamos, optimizamos y ajustamos constantemente.",
    "value.closing": "No somos una agencia que \"maneja publicidad\". Somos un socio estratégico enfocado en llenar tu agenda de clientes.",

    // Benefits
    "benefits.label": "Lo que obtienes con nosotros",
    "benefits.title": "Ventajas que definen la partida.",
    "benefits.b1.title": "Posicionamiento premium",
    "benefits.b1.desc":
      "Construimos una marca que justifica precios altos y atrae clientes de calidad.",
    "benefits.b2.title": "Flujo constante de leads",
    "benefits.b2.desc":
      "Sistemas de captación automatizados que trabajan 24/7 sin que lo hagas tú.",
    "benefits.b3.title": "Autoridad digital",
    "benefits.b3.desc":
      "Contenido estratégico que te posiciona como la referencia en tu industria.",
    "benefits.b4.title": "Escalabilidad real",
    "benefits.b4.desc":
      "Procesos y sistemas que crecen contigo sin aumentar linealmente tus costos.",
    "benefits.b5.title": "Automatización inteligente",
    "benefits.b5.desc":
      "IA y tecnología para que tu negocio avance incluso cuando no estás.",
    "benefits.b6.title": "Datos y decisiones",
    "benefits.b6.desc":
      "Cada decisión respaldada por datos reales, no intuiciones ni tendencias.",

    // Services
    "services.label": "Nuestros servicios",
    "services.title": "Las piezas que mueven tu negocio.",
    "services.subtitle":
      "Un ecosistema completo de servicios diseñado para que cada movimiento en tu negocio cuente.",
    "services.s1.title": "Contenido & Video Marketing",
    "services.s1.desc":
      "Convierte seguidores en compradores con contenido que posiciona tu autoridad y genera demanda real hacia tus servicios.",
    "services.s2.title": "Campañas Publicitarias",
    "services.s2.desc":
      "Atrae clientes potenciales calificados mediante anuncios estratégicos en Meta y TikTok que generan retorno real desde el primer mes.",
    "services.s3.title": "Automatización con IA",
    "services.s3.desc":
      "Cierra más ventas sin más esfuerzo: automatiza el seguimiento de leads, nutre prospectos y recupera oportunidades mientras te enfocas en tu trabajo.",
    "services.s4.title": "Análisis de Datos",
    "services.s4.desc":
      "Tomamos decisiones basadas en datos, no en suposiciones. Traducimos tus métricas en acciones concretas para que cada movimiento te acerque más a tus objetivos.",
    "services.s5.title": "Marca Personal",
    "services.s5.desc":
      "Conviértete en la referencia de tu sector: construimos tu autoridad digital para que los clientes ideales lleguen a ti antes de buscar a tu competencia.",
    "services.s6.title": "Desarrollo & CRM",
    "services.s6.desc":
      "Elimina el caos operativo con sistemas a medida que centralizan tus clientes, automatizan tareas repetitivas y hacen crecer tu negocio sin fricción.",
    "services.s7.title": "Diseño Web",
    "services.s7.desc":
      "Convierte visitas en clientes con un sitio que transmite autoridad, carga en segundos y guía a cada visitante hacia la acción que hace crecer tu negocio.",

    // Results
    "results.label": "Nuestros números",
    "results.title": "Resultados que hablan solos.",
    "results.subtitle":
      "No prometemos, demostramos. Aquí están los números que respaldan cada conversación.",
    "results.r1": "Clientes activos",
    "results.r2": "ROI promedio en campañas",
    "results.r3": "Leads generados",
    "results.r4": "Años de trayectoria",

    // Process
    "process.label": "Nuestra metodología",
    "process.title": "Cada movimiento tiene un propósito.",
    "process.subtitle":
      "Como en el ajedrez, la victoria se construye jugada a jugada. Nuestro proceso garantiza que nada quede al azar.",
    "process.step1.title": "Apertura: Diagnóstico",
    "process.step1.desc":
      "Analizamos tu negocio, tu mercado y tu posición actual. Identificamos oportunidades que otros no ven.",
    "process.step2.title": "Desarrollo: Estrategia",
    "process.step2.desc":
      "Diseñamos un plan de 90 días con objetivos claros, tácticas específicas y métricas de éxito.",
    "process.step3.title": "Medio juego: Ejecución",
    "process.step3.desc":
      "Implementamos con precisión. Contenido, campañas, automatizaciones. Cada pieza en su lugar.",
    "process.step4.title": "Final: Optimización",
    "process.step4.desc":
      "Medimos, ajustamos y escalamos. Lo que funciona, se amplifica. Lo que no, se reemplaza.",

    // Testimonials
    "testimonials.label": "Lo que dicen nuestros clientes",
    "testimonials.title": "Victorias reales, palabras reales.",
    "testimonials.t1.text":
      "En 3 meses pasé de publicar sin estrategia a tener un sistema que me trae clientes todos los días. El ROI superó mis expectativas.",
    "testimonials.t1.name": "Dr. Carlos Mendoza",
    "testimonials.t1.role": "Cirujano Estético",
    "testimonials.t2.text":
      "Mis campañas de Meta Ads ahora generan consultas de alto valor. Trabajo con menos clientes pero facturo más. Eso es estrategia.",
    "testimonials.t2.name": "Dra. Ana Rodríguez",
    "testimonials.t2.role": "Abogada Corporativa",
    "testimonials.t3.text":
      "El chatbot y los flujos de automatización que implementaron cambiaron completamente mi negocio. Ahora escalo sin trabajar el doble.",
    "testimonials.t3.name": "Miguel Torres",
    "testimonials.t3.role": "Coach de Negocios",

    // Cases
    "cases.label": "Casos de éxito",
    "cases.title": "Partidas ganadas.",
    "cases.subtitle":
      "Resultados reales de clientes reales. Cada caso, una estrategia diferente. Un objetivo común: ganar.",
    "cases.c1.industry": "Salud & Estética",
    "cases.c1.title": "Clínica dermatológica de lujo",
    "cases.c1.desc":
      "Implementamos estrategia de contenido + campañas en Meta. En 60 días, agenda completa y lista de espera.",
    "cases.c1.m1": "Aumento en citas",
    "cases.c1.m2": "ROAS en campañas",
    "cases.c1.m3": "Reducción en costo/lead",
    "cases.c2.industry": "Legal & Consultoría",
    "cases.c2.title": "Bufete de abogados corporativo",
    "cases.c2.desc":
      "Marca personal + LinkedIn + campañas B2B. De 0 presencia digital a referente en su nicho en 90 días.",
    "cases.c2.m1": "Leads calificados/mes",
    "cases.c2.m2": "Crecimiento en seguidores",
    "cases.c2.m3": "Ticket promedio",
    "cases.c3.industry": "Infoproductos & Coaching",
    "cases.c3.title": "Lanzamiento de curso online",
    "cases.c3.desc":
      "Estrategia de lanzamiento + automatización + funnel completo. Lanzamiento de $127K en la primera semana.",
    "cases.c3.m1": "En primer lanzamiento",
    "cases.c3.m2": "Tasa de conversión",
    "cases.c3.m3": "Email abiertos",
    "cases.cta": "Ver más casos",

    // Contact
    "contact.label": "Comienza aquí",
    "contact.title": "Tu próximo movimiento empieza hoy.",
    "contact.subtitle":
      "Déjanos tus datos y nosotros te contactamos. Sin compromiso. Sin ventas agresivas.",
    "contact.booking.label": "¿Prefieres elegir un horario?",
    "contact.booking.cta": "Agendar una reunión →",
    "contact.name": "Nombre completo",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono / WhatsApp",
    "contact.company": "Empresa / Profesión",
    "contact.message": "¿Cuál es tu principal objetivo de marketing?",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado! Te contactamos en menos de 24 horas.",
    "contact.error": "Error al enviar. Intenta nuevamente.",
    "contact.whatsapp": "O escríbenos directamente por WhatsApp",

    // Footer
    "footer.tagline": "Estrategia que mueve resultados.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",

    // Servicios page
    "sp.label": "Nuestros Servicios",
    "sp.title1": "Las piezas que",
    "sp.title2": "mueven tu negocio.",
    "sp.subtitle": "Cada servicio es una pieza estratégica. Puedes usarlos de forma independiente o combinarlos para construir un ecosistema digital completo que genere resultados predecibles.",
    "sp.overview.label": "Visión general",
    "sp.overview.title": "Todo lo que necesitas, en un solo lugar.",
    "sp.overview.cta": "Ver detalle →",
    "sp.faq.label": "Preguntas frecuentes",
    "sp.faq.title": "Lo que nos preguntan siempre.",
    "sp.cta.title1": "¿Cuál es tu",
    "sp.cta.title2": "próximo movimiento?",
    "sp.cta.subtitle": "Agenda una sesión estratégica gratuita de 30 minutos y te decimos exactamente qué servicios necesitas y en qué orden implementarlos.",
    "sp.cta.btn1": "Agenda tu sesión gratuita →",
    "sp.cta.btn2": "Ver casos de éxito",
    "sp.sidebar.details": "Ver detalle",
    "sp.detail.includes": "Qué incluye",
    "sp.detail.idealfor": "Ideal para",
    "sp.detail.result": "El resultado",
    "sp.detail.cta1": "Quiero este servicio →",
    "sp.detail.cta2": "Preguntar por WhatsApp",
    "sp.faq.q1": "¿Cuánto tiempo tarda en ver resultados?",
    "sp.faq.a1": "Depende del servicio. Con campañas de pago los primeros resultados se ven en 2-4 semanas. Contenido orgánico y marca personal toman entre 60-90 días para mostrar tracción real. Lo que sí garantizamos es que cada semana hay avances medibles.",
    "sp.faq.q2": "¿Trabajan con presupuestos pequeños?",
    "sp.faq.a2": "Trabajamos con profesionales y negocios que quieren crecer en serio. Nuestros servicios están diseñados para negocios con ticket medio-alto. Si estás empezando, con gusto te orientamos sobre los pasos correctos para cuando estés listo.",
    "sp.faq.q3": "¿Necesito tener presencia digital previa?",
    "sp.faq.a3": "No. Hemos construido marcas desde cero y también hemos potenciado las que ya existían. Lo que importa es tener claridad sobre tu negocio, tu cliente ideal y tus objetivos.",
    "sp.faq.q4": "¿Cómo es el proceso de trabajo?",
    "sp.faq.a4": "Primero hacemos un diagnóstico gratuito de 30 minutos. Si hay fit, diseñamos una propuesta personalizada. Arrancamos con un plan de 90 días con objetivos claros y revisiones semanales. Sin contratos eternos, con resultados que hablan.",
    "sp.faq.q5": "¿En qué se diferencian de otras agencias?",
    "sp.faq.a5": "En que no somos generalistas. Nos especializamos en profesionales de alto ticket: médicos, abogados, coaches, consultores. Entendemos tu industria, tu lenguaje y tus clientes. No te vendemos un paquete genérico, construimos una estrategia específica para ti.",

    // Casos page
    "cp.label": "Casos de éxito",
    "cp.title1": "Partidas",
    "cp.title2": "ganadas.",
    "cp.subtitle": "Resultados reales de clientes reales. Cada caso demuestra que la estrategia correcta, bien ejecutada, genera victorias predecibles.",
    "cp.filter.all": "Todos",
    "cp.filter.todos": "Todos",
    "cp.filter.salud": "Salud",
    "cp.filter.legal": "Legal",
    "cp.filter.coaching": "Coaching",
    "cp.filter.finanzas": "Finanzas",
    "cp.expand": "Ver caso completo ↓",
    "cp.collapse": "Ver menos ↑",
    "cp.challenge": "El desafío",
    "cp.solution": "La solución",
    "cp.cta.title1": "¿Tu negocio podría ser",
    "cp.cta.title2": "el próximo caso?",
    "cp.cta.subtitle": "Agenda una sesión estratégica gratuita y descubramos juntos qué movimientos necesitas hacer para ganar.",
    "cp.cta.btn": "Quiero resultados como estos →",
    "cp.stat1": "Clientes",
    "cp.stat2": "ROI Promedio",
    "cp.stat3": "Revenue generado",
    "cp.stat4": "Recomendarían",

    // Clients
    "clients.label": "Clientes",
    "clients.title1": "Más de 50 expertos ya hacen",
    "clients.title2": "crecer su negocio con nosotros.",
    "clients.subtitle": "Clínicas, despachos, consultorios y negocios de alto ticket que confían en nuestra estrategia.",

    // Hero phrase
    "hero.phrase1": "Una agencia de marketing",
    "hero.phrase2": "obsesionada con los resultados.",

    // Services home CTA
    "services.cta": "Quiero este servicio →",

    // Contact WhatsApp button
    "contact.whatsapp.btn": "Hablemos por WhatsApp →",

    // WhatsApp floating
    "wa.label": "Hablemos ahora",

    // FinalCTA
    "finalcta.title1": "El tablero está listo.",
    "finalcta.title2": "¿Cuál es tu jugada?",
    "finalcta.subtitle": "Los mejores jugadores no esperan el momento perfecto. Lo crean. Agenda tu sesión estratégica y descubre cómo transformamos tu presencia digital en un activo que genera resultados predecibles.",
    "finalcta.btn1": "Agenda tu sesión gratuita",
    "finalcta.btn2": "Escríbenos ahora",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.cases": "Success Cases",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",

    // Hero
    "hero.label": "Digital Marketing Agency",
    "hero.title1": "Your next move",
    "hero.title2": "defines the game.",
    "hero.subtitle":
      "We help clinics, lawyers, therapists and high-ticket professionals fill their calendar with qualified appointments.",
    "hero.cta1": "Book your diagnosis",
    "hero.cta2": "View services",
    "hero.stat1": "Active clients",
    "hero.stat2": "Average ROI",
    "hero.stat3": "Years of experience",

    // Value Prop
    "value.label": "Why choose us?",
    "value.title": "Why choose us to fill your client calendar?",
    "value.subtitle": "We're not just another agency. We're a results-driven system built for professional service businesses.",
    "value.p1.title": "Specialized in professional services",
    "value.p1.desc": "We don't work with just any business. We know how to attract clients for lawyers, clinics, therapists and experts.",
    "value.p1.cta": "We know what works in your sector — and what doesn't.",
    "value.p2.title": "Focused on appointments, not vanity metrics",
    "value.p2.desc": "We don't care about giving you \"likes\" or \"reach\". Our goal is one: fill your calendar with qualified appointments.",
    "value.p2.cta": "We measure success in clients, not pretty numbers.",
    "value.p3.title": "Proven step-by-step system",
    "value.p3.desc": "We don't improvise. We work with an optimized system that has already generated results.",
    "value.p3.cta": "You know exactly what's being done and why.",
    "value.p4.title": "Results in weeks, not months",
    "value.p4.desc": "While other agencies take their time, we execute fast.",
    "value.p4.cta": "We start generating real momentum in less than 30 days.",
    "value.p5.title": "Personalized strategy (no templates)",
    "value.p5.desc": "Your business is unique.",
    "value.p5.cta": "We create a strategy tailored to your service, city and ideal client type.",
    "value.p6.title": "Real ongoing support",
    "value.p6.desc": "We don't disappear after launching campaigns.",
    "value.p6.cta": "We guide, optimize and adjust constantly.",
    "value.closing": "We're not an agency that \"manages advertising\". We're a strategic partner focused on filling your client calendar.",

    // Benefits
    "benefits.label": "What you get with us",
    "benefits.title": "Advantages that define the match.",
    "benefits.b1.title": "Premium positioning",
    "benefits.b1.desc":
      "We build a brand that justifies premium prices and attracts quality clients.",
    "benefits.b2.title": "Constant lead flow",
    "benefits.b2.desc":
      "Automated capture systems that work 24/7 without you having to.",
    "benefits.b3.title": "Digital authority",
    "benefits.b3.desc":
      "Strategic content that positions you as the reference in your industry.",
    "benefits.b4.title": "Real scalability",
    "benefits.b4.desc":
      "Processes and systems that grow with you without linearly increasing your costs.",
    "benefits.b5.title": "Smart automation",
    "benefits.b5.desc":
      "AI and technology to keep your business moving even when you're not.",
    "benefits.b6.title": "Data & decisions",
    "benefits.b6.desc":
      "Every decision backed by real data, not intuitions or trends.",

    // Services
    "services.label": "Our services",
    "services.title": "The pieces that move your business.",
    "services.subtitle":
      "A complete ecosystem of services designed so every move in your business counts.",
    "services.s1.title": "Content & Video Marketing",
    "services.s1.desc":
      "Turn followers into buyers with content that builds your authority and creates real demand for your services.",
    "services.s2.title": "Advertising Campaigns",
    "services.s2.desc":
      "Attract qualified prospects through strategic Meta and TikTok ads that generate real returns from the very first month.",
    "services.s3.title": "AI Automation",
    "services.s3.desc":
      "Close more sales with less effort: automate lead follow-up, nurture prospects, and recover opportunities while you focus on your work.",
    "services.s4.title": "Data Analytics",
    "services.s4.desc":
      "We make decisions based on data, not guesswork. We translate your metrics into concrete actions so every move brings you closer to your goals.",
    "services.s5.title": "Personal Brand",
    "services.s5.desc":
      "Become the go-to authority in your field: we build your digital presence so ideal clients find you before they look at your competition.",
    "services.s6.title": "Development & CRM",
    "services.s6.desc":
      "Eliminate operational chaos with custom systems that centralize your clients, automate repetitive tasks, and let your business grow without friction.",
    "services.s7.title": "Web Design",
    "services.s7.desc":
      "Turn visits into clients with a site that conveys authority, loads in seconds, and guides every visitor toward the action that grows your business.",

    // Results
    "results.label": "Our numbers",
    "results.title": "Results that speak for themselves.",
    "results.subtitle":
      "We don't promise, we demonstrate. Here are the numbers backing every conversation.",
    "results.r1": "Active clients",
    "results.r2": "Average campaign ROI",
    "results.r3": "Leads generated",
    "results.r4": "Years of experience",

    // Process
    "process.label": "Our methodology",
    "process.title": "Every move has a purpose.",
    "process.subtitle":
      "Like in chess, victory is built move by move. Our process ensures nothing is left to chance.",
    "process.step1.title": "Opening: Diagnosis",
    "process.step1.desc":
      "We analyze your business, market, and current position. We identify opportunities others don't see.",
    "process.step2.title": "Development: Strategy",
    "process.step2.desc":
      "We design a 90-day plan with clear objectives, specific tactics, and success metrics.",
    "process.step3.title": "Middlegame: Execution",
    "process.step3.desc":
      "We implement with precision. Content, campaigns, automations. Every piece in place.",
    "process.step4.title": "Endgame: Optimization",
    "process.step4.desc":
      "We measure, adjust, and scale. What works gets amplified. What doesn't gets replaced.",

    // Testimonials
    "testimonials.label": "What our clients say",
    "testimonials.title": "Real victories, real words.",
    "testimonials.t1.text":
      "In 3 months I went from posting without strategy to having a system that brings me clients every day. The ROI exceeded my expectations.",
    "testimonials.t1.name": "Dr. Carlos Mendoza",
    "testimonials.t1.role": "Aesthetic Surgeon",
    "testimonials.t2.text":
      "My Meta Ads campaigns now generate high-value consultations. I work with fewer clients but bill more. That's strategy.",
    "testimonials.t2.name": "Attorney Ana Rodríguez",
    "testimonials.t2.role": "Corporate Lawyer",
    "testimonials.t3.text":
      "The chatbot and automation flows they implemented completely changed my business. Now I scale without working twice as hard.",
    "testimonials.t3.name": "Miguel Torres",
    "testimonials.t3.role": "Business Coach",

    // Cases
    "cases.label": "Success cases",
    "cases.title": "Won matches.",
    "cases.subtitle":
      "Real results from real clients. Each case, a different strategy. One common goal: win.",
    "cases.c1.industry": "Health & Aesthetics",
    "cases.c1.title": "Luxury dermatology clinic",
    "cases.c1.desc":
      "We implemented content strategy + Meta campaigns. In 60 days, full schedule and waiting list.",
    "cases.c1.m1": "Increase in appointments",
    "cases.c1.m2": "ROAS on campaigns",
    "cases.c1.m3": "Reduction in cost/lead",
    "cases.c2.industry": "Legal & Consulting",
    "cases.c2.title": "Corporate law firm",
    "cases.c2.desc":
      "Personal brand + LinkedIn + B2B campaigns. From 0 digital presence to niche reference in 90 days.",
    "cases.c2.m1": "Qualified leads/month",
    "cases.c2.m2": "Follower growth",
    "cases.c2.m3": "Average ticket",
    "cases.c3.industry": "Infoproducts & Coaching",
    "cases.c3.title": "Online course launch",
    "cases.c3.desc":
      "Launch strategy + automation + complete funnel. $127K launch in the first week.",
    "cases.c3.m1": "In first launch",
    "cases.c3.m2": "Conversion rate",
    "cases.c3.m3": "Email open rate",
    "cases.cta": "See more cases",

    // Contact
    "contact.label": "Start here",
    "contact.title": "Your next move starts today.",
    "contact.subtitle":
      "Leave your details and we'll reach out to you. No commitment. No aggressive sales.",
    "contact.booking.label": "Prefer to pick a time?",
    "contact.booking.cta": "Book a meeting →",
    "contact.name": "Full name",
    "contact.email": "Email address",
    "contact.phone": "Phone / WhatsApp",
    "contact.company": "Company / Profession",
    "contact.message": "What is your main marketing goal?",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent! We'll contact you within 24 hours.",
    "contact.error": "Error sending. Please try again.",
    "contact.whatsapp": "Or write to us directly on WhatsApp",

    // Footer
    "footer.tagline": "Strategy that moves results.",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    // Servicios page
    "sp.label": "Our Services",
    "sp.title1": "The pieces that",
    "sp.title2": "move your business.",
    "sp.subtitle": "Each service is a strategic piece. Use them independently or combine them to build a complete digital ecosystem that generates predictable results.",
    "sp.overview.label": "Overview",
    "sp.overview.title": "Everything you need, in one place.",
    "sp.overview.cta": "See detail →",
    "sp.faq.label": "Frequently asked questions",
    "sp.faq.title": "What we're always asked.",
    "sp.cta.title1": "What's your",
    "sp.cta.title2": "next move?",
    "sp.cta.subtitle": "Book a free 30-minute strategic session and we'll tell you exactly which services you need and in what order to implement them.",
    "sp.cta.btn1": "Book your free session →",
    "sp.cta.btn2": "See success cases",
    "sp.sidebar.details": "See detail",
    "sp.detail.includes": "What's included",
    "sp.detail.idealfor": "Ideal for",
    "sp.detail.result": "The result",
    "sp.detail.cta1": "I want this service →",
    "sp.detail.cta2": "Ask on WhatsApp",
    "sp.faq.q1": "How long does it take to see results?",
    "sp.faq.a1": "It depends on the service. With paid campaigns, first results show in 2-4 weeks. Organic content and personal branding take 60-90 days to show real traction. What we do guarantee is measurable progress every week.",
    "sp.faq.q2": "Do you work with small budgets?",
    "sp.faq.a2": "We work with professionals and businesses that are serious about growth. Our services are designed for mid-to-high ticket businesses. If you're just starting out, we're happy to guide you on the right steps for when you're ready.",
    "sp.faq.q3": "Do I need existing digital presence?",
    "sp.faq.a3": "No. We've built brands from scratch and also boosted existing ones. What matters is having clarity about your business, ideal client, and goals.",
    "sp.faq.q4": "How does the working process look?",
    "sp.faq.a4": "We start with a free 30-minute diagnosis. If there's a fit, we design a personalized proposal. We kick off with a 90-day plan with clear objectives and weekly check-ins. No endless contracts, just results that speak.",
    "sp.faq.q5": "How are you different from other agencies?",
    "sp.faq.a5": "We're not generalists. We specialize in high-ticket professionals: doctors, lawyers, coaches, consultants. We understand your industry, your language, and your clients. We don't sell generic packages — we build a specific strategy for you.",

    // Casos page
    "cp.label": "Success cases",
    "cp.title1": "Won",
    "cp.title2": "matches.",
    "cp.subtitle": "Real results from real clients. Each case proves that the right strategy, well executed, generates predictable victories.",
    "cp.filter.all": "All",
    "cp.filter.todos": "All",
    "cp.filter.salud": "Health",
    "cp.filter.legal": "Legal",
    "cp.filter.coaching": "Coaching",
    "cp.filter.finanzas": "Finance",
    "cp.expand": "See full case ↓",
    "cp.collapse": "See less ↑",
    "cp.challenge": "The challenge",
    "cp.solution": "The solution",
    "cp.cta.title1": "Could your business be",
    "cp.cta.title2": "the next case?",
    "cp.cta.subtitle": "Book a free strategic session and let's discover together what moves you need to make to win.",
    "cp.cta.btn": "I want results like these →",
    "cp.stat1": "Clients",
    "cp.stat2": "Average ROI",
    "cp.stat3": "Revenue generated",
    "cp.stat4": "Would recommend",

    // Clients
    "clients.label": "Clients",
    "clients.title1": "Over 50 experts are already",
    "clients.title2": "growing their business with us.",
    "clients.subtitle": "Clinics, law firms, practices and high-ticket businesses that trust our strategy.",

    // Hero phrase
    "hero.phrase1": "A marketing agency",
    "hero.phrase2": "obsessed with results.",

    // Services home CTA
    "services.cta": "I want this service →",

    // Contact WhatsApp button
    "contact.whatsapp.btn": "Let's talk on WhatsApp →",

    // WhatsApp floating
    "wa.label": "Let's talk now",

    // FinalCTA
    "finalcta.title1": "The board is ready.",
    "finalcta.title2": "What's your move?",
    "finalcta.subtitle": "The best players don't wait for the perfect moment. They create it. Book your strategic session and discover how we turn your digital presence into an asset that generates predictable results.",
    "finalcta.btn1": "Book your free session",
    "finalcta.btn2": "Write to us now",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  const toggle = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
