// ─── Site Metadata ───────────────────────────────────────────
export const siteMetadata = {
  title: "Vetta Pro Cycling - Equipo de Ciclismo de Alto Rendimiento",
  description:
    "Equipo dedicado a desarrollar atletas de medio y alto nivel mediante entrenamientos personalizados, fundamentados en ciencia, potencia y frecuencia cardiaca.",
  locale: "es",
};

// ─── Navigation ──────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Planes", href: "#planes" },
  { label: "Staff", href: "#staff" },
  { label: "Calendario", href: "#calendario" },
];

export const navCta = {
  label: "Únete",
  href: "https://wa.me/528124188170?text=Hola%2C%20me%20interesa%20unirme%20a%20Vetta%20Pro%20Cycling",
};

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  headingLine1: "Alcanza tu",
  headingLine2: "Máximo Nivel",
  subtitle:
    "Entrenamientos completamente personalizados, fundamentados en ciencia, potencia y frecuencia cardiaca. Llevamos a cada ciclista a su máximo potencial.",
  ctaPrimary: {
    label: "Sé parte del pelotón",
    href: "https://wa.me/528124188170?text=Hola%2C%20me%20interesa%20unirme%20a%20Vetta%20Pro%20Cycling",
  },
  ctaSecondary: { label: "Conoce más", href: "#nosotros" },
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD7MDeGNQ4scW74XIdjJQohzPW4ey96tHag8AakxKlDAwgeiWWv-SAu69lPOiEz-s_8nsIBi-NG_W4RLEHbCmRAAehQtGsNT6WR79Cbmx2sEKJNVFa_Ds_bE4-Tnji92WGwKgJAumvvkleGVgsUjmwkMjfoGtkM4lWp9j0r0F_ZBMfT4-sjYVPFssB8VdmJQD2Rry0O9MOmGjXUxJu3czgCAccBf-lu1RbssdMxFo40EcbToqxL2Km7H0PSPAuuzDHwLeJENTuHCiU",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAEZznaejb_-fK0AMRyON-R6bFFWJxVCUErh2s62uFjv6vzV92dRRTlaSuOkripY-AWy-Yns_6Cqxu38WSiaeB-tiGkS_AXWRsHuccDrWiP-uW5IcbvGW6tzrGZw7xBNVzGW_CO5VUC51VUc6KkT3SPR7yI7mpwEugm-bRLhgfkN_hP_LHIwmrsg-54aAADfOUBBucvi_NkdUqYYrjFaONz5Opvy-3GFEvA3v4NOfW0IcjWuuPf7zlrx7QK__OoKsNY1BckPfwJYag",
  nextRide: {
    label: "Próximo Evento",
    name: "GF Parras 2026",
  },
};

// ─── Stats ───────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  color: "teal" | "purple";
}

export const stats: Stat[] = [
  { value: "4", label: "Staff Certificado", color: "teal" },
  { value: "3", label: "Disciplinas", color: "purple" },
  { value: "5+", label: "Rodadas Semanales", color: "teal" },
  { value: "30+", label: "Eventos 2026", color: "purple" },
];

// ─── About (Nosotros) ───────────────────────────────────────
export const about = {
  heading: "Quiénes Somos",
  subtitle:
    "Más que un equipo — una comunidad de ciclistas apasionados que se impulsan mutuamente a ser mejores en cada rodada.",
  mission: {
    title: "Misión",
    text: "Somos un equipo dedicado a desarrollar atletas de medio y alto nivel mediante entrenamientos completamente personalizados, fundamentados en ciencia, potencia y frecuencia cardiaca. Nuestro propósito es llevar a cada ciclista a su máximo potencial sin comprometer su salud ni su motivación, creando procesos de crecimiento sostenibles, tanto presenciales como a distancia. Sostenemos una cultura de respeto, integridad, disciplina, liderazgo y servicio, construyendo un ambiente competitivo sano donde la motivación, la cooperación y el compromiso diario permiten formar atletas para toda la vida.",
  },
  vision: {
    title: "Visión",
    text: "Queremos convertirnos en un referente nacional del ciclismo competitivo: un equipo capaz de transformar atletas intermedios en avanzados y avanzados en élite, manteniendo siempre una actitud humilde y unida. Aspiramos a ganar carreras de importancia nacional y competir con solidez en el panorama internacional. Buscamos ser reconocidos por nuestro nivel, integridad y capacidad de inspirar a la comunidad. Además, queremos abrir oportunidades que impulsen el crecimiento del deporte mediante eventos propios, proyectos profesionales y formación de nuevos talentos.",
  },
  highlights: [
    {
      icon: "science",
      title: "Base Científica",
      description:
        "Planificación basada en potencia, frecuencia cardiaca y métricas fisiológicas avanzadas con TrainingPeaks y WKO5.",
    },
    {
      icon: "fitness_center",
      title: "Alto Rendimiento",
      description:
        "Macrociclos estructurados con ajustes diarios, pruebas de rendimiento mensuales y retroalimentación constante.",
    },
    {
      icon: "groups",
      title: "Comunidad Competitiva",
      description:
        "Un ambiente profesional donde la motivación, la cooperación y el compromiso diario forman atletas para toda la vida.",
    },
  ],
};

// ─── Methodology ────────────────────────────────────────────
export const methodology = {
  heading: "Metodología Vetta",
  subtitle: "Metodología creada por Headcoach Majo Soto",
  description:
    "El enfoque se basa en la planificación científica del rendimiento, combinando análisis avanzado, estructura metódica y personalización total del entrenamiento. Cada atleta pasa por un proceso de selección y entrevista, donde evaluamos su nivel actual, necesidades, actitud, compromiso y disponibilidad.",
  phases: [
    "Pretemporada",
    "Periodo base",
    "Build",
    "Periodo precompetitivo",
    "Periodo competitivo",
    "Transición",
  ],
  tools: [
    {
      icon: "analytics",
      name: "TrainingPeaks",
      description: "Planificación exhaustiva y seguimiento de entrenamientos.",
    },
    {
      icon: "insights",
      name: "WKO5",
      description: "Perfiles de potencia y métricas fisiológicas avanzadas.",
    },
    {
      icon: "monitor_heart",
      name: "Frecuencia Cardiaca",
      description: "Monitoreo obligatorio para todos los planes.",
    },
    {
      icon: "speed",
      name: "Potenciómetro",
      description: "Recomendado para planes Plata y obligatorio en Oro.",
    },
  ],
};

// ─── Training Plans ─────────────────────────────────────────
export interface TrainingPlan {
  name: string;
  level: string;
  price: string;
  color: "teal" | "purple" | "gold";
  description: string;
  idealFor: string;
  features: { label: string; value: string }[];
  highlighted?: boolean;
}

export const trainingPlans: TrainingPlan[] = [
  {
    name: "Básico",
    level: "Nivel Básico",
    price: "$1,200",
    color: "teal",
    description:
      "Entrenamiento general con seguimiento de acuerdo a los objetivos del atleta.",
    idealFor:
      "Atletas que quieran mejorar su ritmo, familiarizarse con planes de entrenamiento y adentrarse en el mundo de las competencias.",
    features: [
      { label: "Atención", value: "WhatsApp y llamadas lunes de 12pm a 6:30pm" },
      { label: "Ajustes", value: "Sin ajuste de cargas, solo al inicio de cada mes" },
      { label: "Seguimiento", value: "Análisis básicos de TrainingPeaks en sesiones presenciales" },
      { label: "Evaluación", value: "Junta de evaluación mensual + pruebas de rendimiento" },
      { label: "Cambios rodillo", value: "Mínimo 24 horas de anticipación" },
    ],
  },
  {
    name: "Plata",
    level: "Nivel Plata",
    price: "$1,900",
    color: "purple",
    description:
      "Entrenamiento personalizado con seguimiento moderado de acuerdo a los objetivos del atleta.",
    idealFor:
      "Atletas disciplinados con algún objetivo en específico, nivel intermedio, avanzado o élite. Se recomienda potenciómetro.",
    features: [
      { label: "Atención", value: "WhatsApp y llamadas lunes y miércoles de 12pm a 6:30pm" },
      { label: "Ajustes", value: "Ajuste de cargas y especificaciones cada inicio de semana" },
      { label: "Seguimiento", value: "Análisis exhaustivo de TrainingPeaks en sesiones presenciales" },
      { label: "Evaluación", value: "Junta virtual semanal + pruebas de rendimiento" },
      { label: "Cambios rodillo", value: "Mínimo 12 horas de anticipación" },
    ],
    highlighted: true,
  },
  {
    name: "Oro",
    level: "Nivel Oro",
    price: "$3,200",
    color: "gold",
    description:
      "Entrenamiento totalmente personalizado con seguimiento exhaustivo.",
    idealFor:
      "Atletas de alto rendimiento que necesitan atención diaria, pruebas y ajustes especializados. Potenciómetro obligatorio.",
    features: [
      { label: "Atención", value: "WhatsApp y llamadas todos los días de 12pm a 6:30pm" },
      { label: "Ajustes", value: "Plan personal mensual con especificaciones diarias" },
      { label: "Seguimiento", value: "Análisis exhaustivo con TrainingPeaks + WKO5" },
      { label: "Evaluación", value: "Junta semanal + comunicación diaria con el coach" },
      { label: "Cambios rodillo", value: "Mínimo 6 horas de anticipación" },
    ],
  },
];

// ─── Staff / Coaches ────────────────────────────────────────
export interface Coach {
  name: string;
  role: string;
  description: string;
  image: string;
  borderColor: "teal" | "purple";
}

export const coaches: Coach[] = [
  {
    name: "Majo Soto",
    role: "Headcoach y Bike Fitter",
    description:
      "CEO de VETTA, encargada de la planificación, análisis y ejecución de todos los planes de entrenamiento. Cuenta con un Gran Master en ciclismo profesional y alto rendimiento. Ex-escaladora profesional.",
    image: "/atletas/majo.jpg",
    borderColor: "teal",
  },
  {
    name: "Oliver Jabalera",
    role: "Coach y Mecánico",
    description:
      "Coach, atleta élite y mecánico. Acompaña en rodadas y entrenamientos, ayudando al grupo a pulir la técnica, aprender a competir y marcar ritmos complicados.",
    image: "/atletas/oliver.jpg",
    borderColor: "purple",
  },
  {
    name: "Javier Telechea",
    role: "Coach y Mecánico",
    description:
      "Mecánico y coach de técnica con años de experiencia como monitor y líder. Enfocado en el manejo de grupos en actividades al aire libre y cabeza de los atletas avanzados.",
    image: "/atletas/tele.jpg",
    borderColor: "teal",
  },
  {
    name: "Raul Hernandez",
    role: "Administración VPC",
    description:
      "Atleta fundador y administrador del team. Siempre presente en rodadas, ayudando con la logística, eventos, patrocinadores y funcionamiento general de VETTA.",
    image: "/atletas/raul.jpg",
    borderColor: "purple",
  },
];

// ─── Athletes ───────────────────────────────────────────────
export interface Athlete {
  name: string;
  role: string;
  achievements: string[];
  image: string;
  borderColor: "teal" | "purple";
}

export const athletes: Athlete[] = [
  {
    name: "Majo Soto",
    role: "Ciclista, coach y bike fitter. Ex-escaladora profesional.",
    achievements: [
      "6to lugar - GFNY Cozumel 2025",
      "3er lugar general - Pas Normal & Velo WC 2025",
      "Campeona Femenil - Gravel del Serial Regiomontano 2025",
      "Campeona Elite - Parras Bike 2025",
      "2do lugar general - GF Cadereyta 2025",
    ],
    image: "/atletas/majo.jpg",
    borderColor: "teal",
  },
  {
    name: "Javier Telechea",
    role: "Ciclista, mecánico y coach.",
    achievements: [
      "Campeón avanzado - Serial Estatal INDE 2024",
      "3er lugar élite - Copa Nacional XCM Allende",
      "3er lugar general - Vuelta NL 2024",
      "1er lugar - Etapa Nacional XCM Ica-Desert",
      "3er lugar - Serial Estatal Elite 2024",
    ],
    image: "/atletas/tele.jpg",
    borderColor: "purple",
  },
  {
    name: "Oliver Jabalera",
    role: "Ciclista, mecánico y coach.",
    achievements: [
      "Campeón - Etapa Reina Tour de Mavs 2025",
      "3er lugar - Climbing Stages Tour de Mavs 2025",
      "3er lugar expertos - Etapa 9 XCO Serial Regiomontano 2025",
      "5to lugar - Maratón Internacional Escobedo 2025",
    ],
    image: "/atletas/oliver.jpg",
    borderColor: "teal",
  },
  {
    name: "Raul Hernandez",
    role: "Triatleta y ciclista.",
    achievements: [
      "2do lugar - Epic Climbs, Tour de Mavs 2025",
      "2do lugar - Clasificación por puntos, TdM 2025",
      "IRONMAN - 2025 Cozumel Ironman Finisher",
      "Ex nadador de la selección nacional",
    ],
    image: "/atletas/raul.jpg",
    borderColor: "purple",
  },
  {
    name: "Karla de la Rosa",
    role: "Ciclista y productora.",
    achievements: [
      "6to lugar - Reto Podium 2025, cat master",
      "3er lugar femenil overall - La Joya 2025",
      "Campeona - Serial Estatal 2024, cat intermedios",
      "4to lugar - L'etape 2024, 120km",
    ],
    image: "/atletas/karla.jpg",
    borderColor: "teal",
  },
  {
    name: "Marin Ibarra",
    role: "Ciclista y crossfitter.",
    achievements: [
      "3er lugar - XCM 12hrs individual agosto 2016",
      "2do lugar - Cuatrociénegas 2018 avanzados",
      "1er lugar - Outdoor Fest 2019, cat. expertos",
      "1er lugar - Reto Titanes 2019, avanzados",
    ],
    image: "/atletas/marin.jpg",
    borderColor: "purple",
  },
];

// ─── Events ──────────────────────────────────────────────────
export type EventType = "GRAVEL" | "XCM" | "XCO" | "RUTA" | "MTB" | "TRIATLON";

export interface CalendarEvent {
  title: string;
  date: string;
  location: string;
  distance?: string;
  type: EventType;
  image?: string;
  featured: boolean;
}

export const eventsHeading = {
  title: "Calendario",
  ampersand: " ",
  titleEnd: "2026",
  subtitle:
    "Eventos para esta temporada. Desde gravel hasta ruta, XCM y XCO en todo el país.",
};

export const events: CalendarEvent[] = [
  // Febrero
  { title: "SRC Apodaca", date: "22 Feb", location: "NL", type: "XCM", featured: false },
  { title: "Laguna Gravel", date: "22 Feb", location: "Parras", distance: "60k - 100k", type: "GRAVEL", featured: true },
  { title: "Vuelta NL", date: "Febrero", location: "NL", type: "RUTA", featured: false },
  // Marzo
  { title: "70.3 Mty", date: "01 Mar", location: "NL", distance: "Completo y relevos", type: "TRIATLON", featured: false },
  { title: "SRC Blackbear", date: "22 Mar", location: "NL", type: "XCO", featured: false },
  {
    title: "GFNY Aguascalientes",
    date: "22 Mar",
    location: "Aguascalientes",
    distance: "78k - 146k",
    type: "RUTA",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2_F7mxJi2lpp6ZSgYS5OviYgqe534wLpfXBfDbMBgX7Jqz1ufrj5q6ibC_mHbV0UTv6PXrkowrS8BL26GHJx1MaZ1QrLtqzr8ovY6ZLONamsqOU7ie8IOl8IUkaNnehxpmFmLutczMz3sxwsmPD_1oq_oQBoN6B72tKOtTB8ydcYCpJI-PMhBlIcsGnmup8cI5i7eeMEsLczyFJXhT4JreFUXkdWK5y7Yo1lqetMtF0RXpFjBdYdA-j4J1iTeoRdQqPzwFBu5IPg",
  },
  {
    title: "GF Parras",
    date: "21 Mar",
    location: "Parras",
    distance: "100k - 160k",
    type: "RUTA",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMix4gpiT_jGKIkcVKUhf9RG0sY5RyqcCewODW9GdHLNp4Vs74yNcLNlWKH7fd3B0Eq8Ojat2BWayeyZuGC3OgunL8lD0itA62dxJsCSD8mTaff-znLyv7H-EU5IEEOdA5BH7f6kSB77amPhv3kopDZJmjNS1hMbQcawnKFAShfLeq4aHjDnah1uV0htjcQz-KYn4uLE_ljKNMDqfE5XMgkkvLMHGyd6rizddZrxN1oK8n5zlP_WqQZv2Cpva8aXZMNQROC8Ms1hg",
  },
  {
    title: "Barro Negro",
    date: "28-29 Mar",
    location: "Aguascalientes",
    distance: "66k - 120k - 200k",
    type: "GRAVEL",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANl899oUUVQwKBPcRQ_ziY10gdIbwq6aP4cy47eCnCcSfNkLEeukhxT-TGP2IjIsCUHBAOXl-fiYsiVFref8JcDy7rLPkBrlsK5U0g3YiAHOvCeaC40qMRtQx67z3dbUG1tdqOONznVYjN1f7QsFBkFtyHluEqQlwNju_jXuFXygblqC_dsBqOHe48_49zKeAQYK70JIYkh9WSj0aWnBeQSS6SL8fsa1cDuMrzzjK-r9Mjb7b5VKGfJ16Dv73yZDvwJT4jLXf89EU",
  },
  // Abril
  { title: "SRC Santiago", date: "26 Abr", location: "NL", type: "XCM", featured: false },
  { title: "La Joya", date: "PD", location: "Saltillo", type: "XCM", featured: false },
  { title: "Classicissima", date: "25 Abr", location: "San Miguel", distance: "76k - 148k - 243k", type: "RUTA", featured: true },
  // Mayo
  { title: "Gravel Centro", date: "15-17 May", location: "San Miguel", distance: "35k - 70k - 120k", type: "GRAVEL", featured: true },
  { title: "SRC FE 26", date: "17 May", location: "NL", type: "XCO", featured: false },
  // Junio
  { title: "SRC Huacanes", date: "07 Jun", location: "NL", type: "XCM", featured: false },
  { title: "GF Madero", date: "13 Jun", location: "Parras", distance: "100k - 150k", type: "RUTA", featured: true },
  {
    title: "Tour de Mavs",
    date: "22 Jun",
    location: "NL",
    distance: "5 días de carrera",
    type: "RUTA",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMix4gpiT_jGKIkcVKUhf9RG0sY5RyqcCewODW9GdHLNp4Vs74yNcLNlWKH7fd3B0Eq8Ojat2BWayeyZuGC3OgunL8lD0itA62dxJsCSD8mTaff-znLyv7H-EU5IEEOdA5BH7f6kSB77amPhv3kopDZJmjNS1hMbQcawnKFAShfLeq4aHjDnah1uV0htjcQz-KYn4uLE_ljKNMDqfE5XMgkkvLMHGyd6rizddZrxN1oK8n5zlP_WqQZv2Cpva8aXZMNQROC8Ms1hg",
  },
  // Julio
  { title: "La Tinaja", date: "05 Jul", location: "NL", type: "XCO", featured: false },
  {
    title: "Gravel México",
    date: "04 Jul",
    location: "SLP",
    distance: "250k",
    type: "GRAVEL",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2_F7mxJi2lpp6ZSgYS5OviYgqe534wLpfXBfDbMBgX7Jqz1ufrj5q6ibC_mHbV0UTv6PXrkowrS8BL26GHJx1MaZ1QrLtqzr8ovY6ZLONamsqOU7ie8IOl8IUkaNnehxpmFmLutczMz3sxwsmPD_1oq_oQBoN6B72tKOtTB8ydcYCpJI-PMhBlIcsGnmup8cI5i7eeMEsLczyFJXhT4JreFUXkdWK5y7Yo1lqetMtF0RXpFjBdYdA-j4J1iTeoRdQqPzwFBu5IPg",
  },
  // Agosto
  { title: "SRC Allende", date: "30 Ago", location: "NL", type: "XCM", featured: false },
  { title: "UCI Gravel WC", date: "30 Ago", location: "Arteaga", type: "GRAVEL", featured: true },
  { title: "Devastador", date: "Ago - Sep", location: "Real de 14", distance: "50k - 100k", type: "XCM", featured: true },
  // Septiembre
  { title: "SRC Santiago", date: "13 Sep", location: "NL", type: "RUTA", featured: false },
  // Octubre
  { title: "SRC SPGG", date: "04 Oct", location: "NL", type: "RUTA", featured: false },
  // Noviembre
  { title: "Maratón Int Escobedo", date: "PD", location: "NL", type: "XCM", featured: false },
  { title: "Montañas Mágicas", date: "PD", location: "NL", type: "XCM", featured: false },
  {
    title: "Titan Desert",
    date: "13-16 Nov",
    location: "Durango",
    distance: "4 días, 90-100k",
    type: "XCM",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANl899oUUVQwKBPcRQ_ziY10gdIbwq6aP4cy47eCnCcSfNkLEeukhxT-TGP2IjIsCUHBAOXl-fiYsiVFref8JcDy7rLPkBrlsK5U0g3YiAHOvCeaC40qMRtQx67z3dbUG1tdqOONznVYjN1f7QsFBkFtyHluEqQlwNju_jXuFXygblqC_dsBqOHe48_49zKeAQYK70JIYkh9WSj0aWnBeQSS6SL8fsa1cDuMrzzjK-r9Mjb7b5VKGfJ16Dv73yZDvwJT4jLXf89EU",
  },
  { title: "Belgian Waffle Ride", date: "Noviembre", location: "Querétaro", type: "GRAVEL", featured: true },
  { title: "GFNY Cozumel", date: "08 Nov", location: "Cozumel", distance: "80k - 160k", type: "RUTA", featured: true },
  { title: "SRC Mty", date: "PD", location: "NL", type: "RUTA", featured: false },
  // Diciembre
  { title: "Parras Bike", date: "05 Dic", location: "Parras", distance: "35k - 70k", type: "XCM", featured: true },
  { title: "GFNY San Luis", date: "06 Dic", location: "SLP", distance: "75k - 120k", type: "RUTA", featured: false },
];

// ─── Sponsors ────────────────────────────────────────────────
export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export const sponsors: Sponsor[] = [
  { name: "Tevian", logo: "/logo-tevian.png", url: "https://grupotevian.com/" },
];

// ─── Contact ─────────────────────────────────────────────────
export const contact = {
  heading: "Sé parte del",
  headingAccent: "Pelotón",
  subtitle:
    "Ya sea que busques competir a alto nivel o mejorar tus marcas personales, en Vetta Pro Cycling hay un lugar para ti.",
  whatsapp: {
    label: "WhatsApp",
    value: "+52 81 2418 8170",
    href: "https://wa.me/528124188170?text=Hola%2C%20me%20interesa%20unirme%20a%20Vetta%20Pro%20Cycling",
  },
  email: {
    label: "Correo",
    value: "majo@vettaprocycling.com",
    href: "mailto:majo@vettaprocycling.com",
  },
  membership: {
    label: "Inscríbete",
    value: "Contáctanos",
    href: "https://wa.me/528124188170?text=Hola%2C%20quiero%20inscribirme%20a%20Vetta%20Pro%20Cycling",
  },
};

// ─── Social Links ────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://instagram.com/vettaprocycling" },
];

// ─── Footer ──────────────────────────────────────────────────
export const footer = {
  copyright: `\u00A9 ${new Date().getFullYear()} Vetta Pro Cycling. Todos los derechos reservados.`,
};
