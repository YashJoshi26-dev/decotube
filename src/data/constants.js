// ============================================================
//  DECOTUBE — Global Constants & Company Data
// ============================================================

export const COLORS = {
  // ── Obsidian — Zinc Black Dark Mode ───────────────────────
  bg: "#0f0f0f",        // pure zinc black
  bgDark: "#080808",        // deepest black
  surface: "#171717",        // card surface
  surfaceLight: "#1f1f1f",        // hover surface

  // ── Crisp White Text ──────────────────────────────────────
  text: "#f5f5f5",        // crisp white
  textDim: "#b8b8b8",        // visible grey — readable on black
  textMuted: "#808080",        // muted but visible

  // ── Steel Tones ───────────────────────────────────────────
  steel: "#707070",        // steel grey
  steelBright: "#f5f5f5",        // bright white
  steelDim: "#3a3a3a",        // dim steel

  // ── Obsidian Accent — White Primary + Subtle Borders ──────────────
  accent: "#ffffff",        // white accent (buttons, badges, borders)
  accentBright: "#f0f0f0",        // slightly dimmer white
  accentGold: "#c8981e",        // amber only for scrollbar/subtle

  // ── Borders & Glow ────────────────────────────────────────
  border: "#252525",        // dark charcoal border
  glow: "rgba(255,255,255,0.04)",
};



export const COMPANY = {
  name: "Decotube India Private Limited",
  tagline: "A Trust in Stainless Steel",
  shortName: "DECOTUBE",
  subName: "INDIA PVT. LTD.",
  email: "infodecotube@gmail.com",
  phone1: "+91 97555 98666",
  phone2: "+91 88814 11181",
  hq: "81, Mangal Nagar (Sukhaliya), Indore, Madhya Pradesh – 452010",
  works: "Plot I-71, MPIDC, Jetapur-Palasia, Dhar, Madhya Pradesh – 454001",
};

export const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "WHO WE ARE", path: "/company" },
  { name: "PRODUCTS", path: "/products" },
  { name: "SERVICES", path: "/services" },
  { name: "DOWNLOADS", path: "/downloads" },
  { name: "GET ENQUIRY", path: "/contact" },
];

export const SERVICES = [
  {
    title: "SS Pipe Manufacturing",
    short: "Stainless Steel Welded Round Pipes",
    desc: "Premium stainless steel welded round pipes meeting ASTM A554, A249 standards. OD 9.5–101.6mm, 200/300/400 series, TIG welding only.",
    category: "Manufacturing",
    image: "/images/SS_manufacturing.png",
  },
  {
    title: "Tube Rolling Services",
    short: "RHS & SHS Custom Tube Rolling",
    desc: "RHS & SHS custom tube rolling with TIG welding. Surface finish from 240G to 800G. Lengths 3m–10m as per requirement.",
    category: "Manufacturing",
    image: "/images/Tube_roll.png",
  },
  {
    title: "Greenfield Project Consultancy",
    short: "Complete Planning & Turnkey Execution",
    desc: "Complete planning, layout engineering, feasibility studies, and turnkey execution support for new manufacturing setups.",
    category: "Consultancy",
    image: "/images/Gemini_Generated_Image_m0kdaim0kdaim0kd.png",
  },
  {
    title: "Machine Manufacturing",
    short: "Allied & Custom Machinery",
    desc: "Manufacturing of auxiliary equipment and custom machinery for specialized operations — end-facing, hydrotesting, tube finishing lines.",
    category: "Manufacturing",
    image: "/images/Nano Banana 2 - Prompt 1Close-up of mirror-finish stainless steel round pipes exiting automated form_1.png",
  },
  {
    title: "Industrial AMC Services",
    short: "Annual Maintenance & Audits",
    desc: "Annual maintenance contracts, operational audits, and production cost control implementing lean manufacturing strategies.",
    category: "Operations",
    image: "/images/Nano Banana 2 - Prompt 1Close-up of mirror-finish stainless steel round pipes exiting automated form_2.png",
  },
  {
    title: "On-site Engineering",
    short: "Expert Technical Oversight",
    desc: "Expert technical oversight during construction and commissioning phases ensuring structural and operational integrity.",
    category: "Consultancy",
    image: "/images/worker.png",
  },
  {
    title: "Design Engineering",
    short: "Rolls, Tools & Tooling Design",
    desc: "FFx, DFT forming rolls and tooling sets tailored specifically for SS/MS pipe & tube open-section (Roll profile) industry.",
    category: "Engineering",
    image: "/images/DesignEng.png",
  },
  {
    title: "Quality & Certification",
    short: "QMS, SOP & Compliance",
    desc: "Implementation of QMS, SOP, MEx, inspection plans. BIS, API, EIL, ISO certification support for national & international standards.",
    category: "Quality",
    image: "/images/CERTIFICATION.png",
  },
  {
    title: "Automation Solutions",
    short: "Industry 4.0 Optimization",
    desc: "Customized automation, control systems, and process optimization for improved productivity and reduced downtime.",
    category: "Engineering",
    image: "/images/AUTOMATION.png",
  },
  {
    title: "Business Development",
    short: "Market Expansion Strategy",
    desc: "Strategic guidance to enhance product reach, customer acquisition, and industry positioning for sustainable growth.",
    category: "Consultancy",
    image: "/images/BUSINESS DEVELOPMENT.png",
  },
  {
    title: "Atlas Industrial Systems",
    short: "DT / DV Industrial Services",
    desc: "End-to-end Industry 4.0 technical support — DTMI (P) ltd providing retrofitting solutions for existing production lines.",
    category: "Engineering",
    image: "/images/PRODUCT & MACHINE.png",
  },
  {
    title: "Product Standardization",
    short: "Global Benchmark Alignment",
    desc: "Helping manufacturers align output with global benchmarks ensuring consistency across batches — API, ISO, BIS, ASTM compliance.",
    category: "Quality",
    image: "/images/PRODUCT STANDARDIZATION.png",
  },
];

export const PRODUCTS = [
  {
    id: "round-tube",
    title: "Round Welded Tubes",
    sub: "ASTM A554 / A249",
    image: null,
    video: "/videos/rounded_pipe.mp4",
    specs: [
      { label: "Outer Diameter", value: "9.50 mm – 101.60 mm" },
      { label: "Thickness", value: "0.6 mm – 2.5 mm" },
      { label: "Length", value: "3m – 10m (as per requirement)" },
      { label: "Specification", value: "ASTM A554, A249" },
      { label: "Steel Grade", value: "200 series, 300 series, 400 series" },
      { label: "Surface Finish", value: "240G, 320G, 400G, 600G, 800G" },
      { label: "Welding", value: "TIG Type Only" },
    ],
    application: "Construction, Furniture, Industrial Equipment",
    weightChart: [
      { size: "9.53", w060: "0.13", w070: "0.15", w080: "0.18", w090: "0.19", w100: "0.21", w120: "0.25" },
      { size: "12.70", w060: "0.18", w070: "0.21", w080: "0.24", w090: "0.27", w100: "0.29", w120: "0.35", w150: "0.42", w200: "0.54" },
      { size: "19.05", w060: "0.28", w070: "0.32", w080: "0.37", w090: "0.41", w100: "0.45", w120: "0.54", w150: "0.66", w200: "0.85" },
      { size: "25.40", w060: "0.37", w070: "0.43", w080: "0.49", w090: "0.55", w100: "0.61", w120: "0.73", w150: "0.90", w200: "1.17" },
      { size: "50.80", w100: "1.00", w120: "1.13", w150: "1.25", w200: "1.85", w250: "2.45", w300: "3.03" },
      { size: "76.20", w080: "1.32", w090: "1.51", w100: "1.70", w120: "2.26", w150: "2.81", w200: "3.72", w250: "4.62", w300: "5.51" },
      { size: "101.60", w090: "2.27", w100: "2.52", w120: "3.02", w150: "3.76", w200: "4.99", w250: "6.21", w300: "7.42" },
    ],
  },
  {
    id: "rhs",
    title: "Rectangular Hollow Section",
    sub: "ASTM A554 / A213",
    image: null,
    video: "/videos/Rectangular_pipe.mp4",
    specs: [
      { label: "Size", value: "10×20 mm – 100×50 mm" },
      { label: "Thickness", value: "0.6 mm – 2.50 mm" },
      { label: "Length", value: "3m – 10m (as per requirement)" },
      { label: "Standard", value: "ASTM A554, A213" },
      { label: "Steel Grade", value: "200 series, 300 series, 400 series" },
      { label: "Surface Finish", value: "240G, 320G, 400G, 600G, 800G" },
      { label: "Welding", value: "TIG Type Welding" },
    ],
    application: "Infrastructure, Heat Exchangers, Furniture",
    weightChart: [
      { size: "10×20", w060: "0.28", w070: "0.32", w080: "0.37", w090: "0.41", w100: "0.45", w120: "0.54" },
      { size: "20×40", w060: "0.56", w070: "0.66", w080: "0.75", w090: "0.84", w100: "0.93", w120: "1.11", w150: "1.38", w200: "1.81" },
      { size: "25×50", w070: "0.71", w080: "0.82", w090: "0.94", w100: "1.05", w120: "1.17", w150: "1.40", w200: "1.73", w250: "2.29" },
      { size: "40×80", w090: "1.70", w100: "1.89", w120: "2.26", w150: "2.81", w200: "3.72" },
      { size: "50×100", w100: "2.32", w120: "2.78", w150: "3.46", w200: "4.59", w250: "5.70" },
    ],
  },
  {
    id: "shs",
    title: "Square Hollow Section",
    sub: "ASTM A554 / A213",
    image: null,
    video: "/videos/Square_pipe.mp4",
    specs: [
      { label: "Size", value: "10×10 mm – 80×80 mm" },
      { label: "Thickness", value: "0.3 mm – 8.0 mm" },
      { label: "Length", value: "3m – 10m (as per requirement)" },
      { label: "Standard", value: "ASTM A554, A213" },
      { label: "Steel Grade", value: "200 series, 300 series, 400 series" },
      { label: "Surface Finish", value: "240G, 320G, 400G, 600G, 800G" },
      { label: "Welding", value: "TIG Type Welding" },
    ],
    application: "Infrastructure, Furniture, Engineering Industries",
    weightChart: [
      { size: "10×10", w060: "0.18", w070: "0.21", w080: "0.24", w090: "0.27", w100: "0.29", w120: "0.35" },
      { size: "20×20", w060: "0.37", w070: "0.43", w080: "0.49", w090: "0.55", w100: "0.61", w120: "0.73", w150: "0.90", w200: "1.17" },
      { size: "40×40", w070: "0.88", w080: "1.00", w090: "1.13", w100: "1.25", w120: "1.49", w150: "1.85", w200: "2.45" },
      { size: "60×60", w090: "1.70", w100: "1.89", w120: "2.26", w150: "2.81", w200: "3.72" },
      { size: "80×80", w100: "2.52", w120: "3.02", w150: "3.76", w200: "4.99", w250: "6.21" },
    ],
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Premium Tubes",
    sub: "OCTG / API Grade",
    image: null,
    video: "/videos/big_pipe.mp4",
    specs: [
      { label: "Types", value: "ERW, HFIW, TIG, CDW Cold Draw" },
      { label: "Lines", value: "Seamless LSAW Lines" },
      { label: "Grade", value: "OCTG, API Grade, Oil & Gas Premium" },
      { label: "Standards", value: "API, ISO, BIS, ASTM" },
      { label: "Properties", value: "High-precision, high-strength, corrosion-resistant" },
      { label: "Finish", value: "As per API / customer specification" },
      { label: "Welding", value: "ERW / HFIW / Seamless" },
    ],
    application: "Oil & Gas, Petrochemical, High-pressure Systems, OCTG",
    weightChart: [],
  },
];

export const STATS = [
  { label: "Years Active", val: 3, suffix: "+" },
  { label: "Product Variants", val: 200, suffix: "+" },
  { label: "Industries Served", val: 15, suffix: "+" },
  { label: "Standards Compliant", val: 6, suffix: "" },
];

export const WHY_CHOOSE = [
  { image: "/images/Global.png", icon: "🏆", title: "Global Standards", desc: "API, ISO, BIS, ASTM compliant products meeting international export quality benchmarks." },
  { image: "/images/Fast Turnaround.png", icon: "⚡", title: "Fast Turnaround", desc: "Optimized resources and lean manufacturing ensure faster project completion." },
  { image: "/images/PREMIUM QUALITY.png", icon: "💎", title: "Premium Quality", desc: "Surface finish 240G to 800G. TIG welding only. Zero-compromise manufacturing." },
  { image: "/images/END-TO-END SUPPORT_org.png", icon: "🤝", title: "End-to-End Support", desc: "Greenfield planning to commissioning, audits, and post-delivery technical support." },
  { image: "/images/COST.png", icon: "💰", title: "Cost Effective", desc: "Data-driven cost control and efficiency improvement to maximize plant profitability." },
  { image: "/images/CERTIFICATION.png", icon: "🔐", title: "Certified & Active", desc: "Fully registered and active industrial manufacturing entity, compliant with ISO/API standards." },
];
