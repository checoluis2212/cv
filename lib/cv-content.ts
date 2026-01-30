export type CvLang = "es" | "en"

export interface CvJob {
  company: string
  role: string
  description?: string
  bullets?: string[]
  impact?: string
}

export interface CvContent {
  subtitle: string
  contact: string
  sections: {
    executiveSummary: { title: string; paragraphs: string[] }
    experience: { title: string; jobs: CvJob[] }
    competencies: { title: string; items: string[] }
    tools: { title: string; lines: { label: string; text: string }[] }
    education: { title: string; degree: string; school: string }
    languages: { title: string; text: string }
  }
}

const cvContent: Record<CvLang, CvContent> = {
  en: {
    subtitle: "Growth Marketing Specialist | B2C, B2B & Marketplaces",
    contact: "Mexico City · +52 55 3274 3764 · luissergio.mkt@gmail.com · 37 years",
    sections: {
      executiveSummary: {
        title: "Executive Summary",
        paragraphs: [
          "Growth marketing specialist with solid experience driving user acquisition, activation, and revenue growth in B2B and marketplace environments. Proven ability to manage performance budgets, optimize full-funnel conversion, and collaborate closely with Product, Analytics, and Engineering teams. Strong background in data-driven decision making, executive reporting, and scalable growth frameworks.",
          "Profile particularly aligned to high-growth, tech-enabled organizations with complex funnels and multiple acquisition channels.",
        ],
      },
      experience: {
        title: "Professional Experience",
        jobs: [
          {
            company: "Broxel",
            role: "Growth Marketing Manager (B2B) | Sep 2025",
            description: "Own and execute the B2C growth strategy, covering acquisition, activation, and pipeline acceleration.",
            bullets: [
              "Manage and optimize the paid media budget across LinkedIn Ads and Google Ads, with focus on CAC efficiency and lead quality.",
              "Design and continuously improve end-to-end funnels using GA4, aligning media performance with business outcomes.",
              "Partner with Product and Engineering teams to define tracking requirements, events, and internal analytics frameworks.",
              "Build executive dashboards in Looker Studio, translating performance data into clear insights for leadership and stakeholders.",
            ],
            impact: "Key impact: Improved visibility of the B2B funnel, enabling better budget allocation and faster decision-making at the leadership level.",
          },
          {
            company: "OCCMundial",
            role: "Growth Marketing Specialist | Jun 2023 – August 2025",
            bullets: [
              "Led the growth media strategy for a large-scale employment marketplace (Google Ads, LinkedIn Ads, Microsoft Ads, TikTok, Programmatic).",
              "Designed scalable media plans focused on user acquisition, activation, and retention.",
              "Analyzed GA4 conversion funnels and enhanced ecommerce, identifying drop-offs and growth opportunities.",
              "Owned tracking governance with Product teams (events, DataLayers, GTM implementations).",
              "Delivered C-level performance reporting via Looker Studio.",
            ],
            impact: "Key impact: Strengthened measurement maturity and cross-team alignment, enabling faster experimentation and clearer ROI attribution.",
          },
          {
            company: "Philips (ecommerce)",
            role: "SEM Manager | Dec 2021 – Jul 2023",
            description: "SEM Manager Senior for 3 LATAM markets, managing quarterly budgets, ecommerce funnels, Merchant Center feeds, and full-funnel performance for informational and transactional sites.",
          },
          {
            company: "London Betting Shop (Online Gaming)",
            role: "Marketing & Affiliates Manager | Apr 2021 – Nov 2021",
            description: "Owned acquisition channels (Paid, SEO, Affiliates), ROI reporting, tracking via Google Analytics/UTMs, and coordination of digital assets and landing pages.",
          },
          {
            company: "Más Nómina (Financial Services)",
            role: "Digital Marketing Coordinator | Mar 2020 – Jun 2020",
            description: "Executed digital acquisition initiatives, performance tracking, KPI reporting, and creative production for financial products.",
          },
          {
            company: "Freelance",
            role: "Digital Marketing Consultant | Jul 2018 – Dec 2020",
            description: "Delivered digital marketing, analytics, and campaign execution in Meta and Google Ads, building a strong foundation in performance marketing.",
          },
        ],
      },
      competencies: {
        title: "Core Growth Competencies",
        items: [
          "Growth Strategy (Acquisition, Activation, Monetization, Retention)",
          "B2B, B2C & Marketplace Funnels",
          "Performance Media & Budget Ownership",
          "ROAS, CAC, LTV, LTV:CAC Ratio, Funnel Optimization",
          "Product & Marketing Alignment",
          "Analytics & Measurement (GA4, GTM)",
          "HTML, CSS, Javascript",
        ],
      },
      tools: {
        title: "Tools & Platforms",
        lines: [
          { label: "Analytics & Tracking:", text: "GA4, Google Tag Manager, Apps Flyer, Semrush, Amplitude, Mix Panel." },
          { label: "Media Platforms:", text: "Google Ads, LinkedIn Ads, Microsoft Ads, TikTok Ads, Programmatic." },
          { label: "Reporting:", text: "Looker Studio, Power BI." },
          { label: "CRM & Marketing Ops:", text: "HubSpot, Salesforce, Cursor." },
          { label: "IA Tools:", text: "Cursor, ChatGPT, Gemini, Lovable, N8N." },
        ],
      },
      education: {
        title: "Education",
        degree: "Bachelor's Degree in Marketing",
        school: "Universidad Latinoamericana",
      },
      languages: {
        title: "Languages",
        text: "English: Advanced (Professional working proficiency)",
      },
    },
  },
  es: {
    subtitle: "Especialista en Growth Marketing | B2C, B2B y Marketplaces",
    contact: "Ciudad de México · +52 55 3274 3764 · luissergio.mkt@gmail.com · 37 años",
    sections: {
      executiveSummary: {
        title: "Resumen Ejecutivo",
        paragraphs: [
          "Especialista en growth marketing con experiencia sólida en adquisición de usuarios, activación y crecimiento de ingresos en entornos B2B y marketplaces. Capacidad demostrada para gestionar presupuestos de performance, optimizar la conversión de funnel completo y colaborar con equipos de Producto, Analytics e Ingeniería. Fuerte base en toma de decisiones basada en datos, reportes ejecutivos y marcos de crecimiento escalables.",
          "Perfil alineado con organizaciones de alto crecimiento y habilitadas por tecnología, con embudos complejos y múltiples canales de adquisición.",
        ],
      },
      experience: {
        title: "Experiencia Profesional",
        jobs: [
          {
            company: "Broxel",
            role: "Growth Marketing Manager (B2B) | Sep 2025",
            description: "Liderar y ejecutar la estrategia de growth B2C: adquisición, activación y aceleración del pipeline.",
            bullets: [
              "Gestionar y optimizar el presupuesto de medios pagados en LinkedIn Ads y Google Ads, con foco en eficiencia de CAC y calidad de leads.",
              "Diseñar y mejorar continuamente embudos end-to-end con GA4, alineando el desempeño de medios con resultados de negocio.",
              "Trabajar con Producto e Ingeniería en requisitos de tracking, eventos y marcos de analytics internos.",
              "Construir dashboards ejecutivos en Looker Studio para comunicar desempeño a liderazgo y stakeholders.",
            ],
            impact: "Impacto clave: Mayor visibilidad del funnel B2B, mejor asignación de presupuesto y decisiones más rápidas a nivel liderazgo.",
          },
          {
            company: "OCCMundial",
            role: "Especialista en Growth Marketing | Jun 2023 – Ago 2025",
            bullets: [
              "Lideré la estrategia de medios de growth para un marketplace de empleo a gran escala (Google Ads, LinkedIn Ads, Microsoft Ads, TikTok, Programático).",
              "Diseñé planes de medios escalables centrados en adquisición, activación y retención.",
              "Analicé embudos de conversión en GA4 y ecommerce mejorado, identificando caídas y oportunidades de crecimiento.",
              "Gestioné el gobierno de tracking con Producto (eventos, DataLayers, implementaciones GTM).",
              "Entregué reportes de desempeño a nivel C-level vía Looker Studio.",
            ],
            impact: "Impacto clave: Madurez de medición y alineación entre equipos, permitiendo experimentación más rápida y atribución de ROI más clara.",
          },
          {
            company: "Philips (ecommerce)",
            role: "SEM Manager | Dic 2021 – Jul 2023",
            description: "SEM Manager Senior para 3 mercados LATAM: presupuestos trimestrales, embudos de ecommerce, feeds de Merchant Center y desempeño de funnel completo en sitios informativos y transaccionales.",
          },
          {
            company: "London Betting Shop (Gaming online)",
            role: "Marketing & Affiliates Manager | Abr 2021 – Nov 2021",
            description: "Responsable de canales de adquisición (Paid, SEO, Affiliates), reportes de ROI, tracking con Google Analytics/UTMs y coordinación de activos digitales y landings.",
          },
          {
            company: "Más Nómina (Servicios financieros)",
            role: "Coordinador de Marketing Digital | Mar 2020 – Jun 2020",
            description: "Ejecución de iniciativas de adquisición digital, seguimiento de performance, reportes de KPIs y producción creativa para productos financieros.",
          },
          {
            company: "Freelance",
            role: "Consultor de Marketing Digital | Jul 2018 – Dic 2020",
            description: "Marketing digital, analytics y ejecución de campañas en Meta y Google Ads, construyendo una base sólida en performance marketing.",
          },
        ],
      },
      competencies: {
        title: "Competencias en Growth",
        items: [
          "Estrategia de Growth (Adquisición, Activación, Monetización, Retención)",
          "Embudos B2B, B2C y Marketplaces",
          "Medios de performance y gestión de presupuesto",
          "ROAS, CAC, LTV, ratio LTV:CAC, optimización de funnel",
          "Alineación Producto y Marketing",
          "Analytics y medición (GA4, GTM)",
          "HTML, CSS, Javascript",
        ],
      },
      tools: {
        title: "Herramientas y Plataformas",
        lines: [
          { label: "Analytics y Tracking:", text: "GA4, Google Tag Manager, Apps Flyer, Semrush, Amplitude, Mix Panel." },
          { label: "Plataformas de medios:", text: "Google Ads, LinkedIn Ads, Microsoft Ads, TikTok Ads, Programático." },
          { label: "Reporting:", text: "Looker Studio, Power BI." },
          { label: "CRM y Marketing Ops:", text: "HubSpot, Salesforce, Cursor." },
          { label: "Herramientas IA:", text: "Cursor, ChatGPT, Gemini, Lovable, N8N." },
        ],
      },
      education: {
        title: "Formación",
        degree: "Licenciatura en Marketing",
        school: "Universidad Latinoamericana",
      },
      languages: {
        title: "Idiomas",
        text: "Inglés: Avanzado (competencia profesional)",
      },
    },
  },
}

export function getCvContent(lang: CvLang): CvContent {
  return cvContent[lang]
}
