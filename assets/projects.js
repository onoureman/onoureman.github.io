// Project data.
// cat: odoo | fullstack | web | mobile
// media: { img: "file" } screenshot in assets/img, { logo: "qast" } QAST logo, { github: true } GitHub mark
// featured: shown as a large row at the top
window.PROJECTS = [
  {
    title: "Hospital Information System ERP", where: "Odoo 19 Enterprise", date: "Aug 2026",
    cat: "odoo", media: { img: "his" }, featured: true,
    desc: "A suite of connected modules, each installable on its own: Patients, Appointments, Clinical Encounters, In-patient & Beds, Pharmacy, Laboratory, Radiology and Billing. The full patient journey runs end to end, from registration to one consolidated, VAT-ready invoice, reusing Odoo Accounting, Inventory, Calendar and HR.",
    points: ["ZATCA e-invoicing, NPHIES insurance (FHIR), ICD-10-AM and SFDA drug coding", "HL7 device integration and clinical scoring (NEWS2, APGAR, Braden)", "Bilingual Arabic (RTL) and English; 11 core modules"],
    tech: ["Odoo 19", "Python", "PostgreSQL", "OWL / JavaScript", "XML / QWeb"],
    note: "Demo on request"
  },
  {
    title: "AI Sales Agent for Odoo CRM", where: "Published on the Odoo Apps Store", date: "Oct 2026",
    cat: "odoo", media: { img: "ai_sales_agent" }, featured: true,
    desc: "An Odoo 19 CRM app that finds and researches sales prospects with AI. Type a few words (\"growing logistics firms\") and it searches the web for real companies matching your ideal customer, then adds them to the pipeline in one click with duplicate detection.",
    points: ["Results table with size, why they'd buy, website and LinkedIn", "Every prospect on a map; research cards with sources and a next step", "Works with Claude or Gemini, with a monthly AI budget"],
    tech: ["Odoo 19", "Python", "JavaScript / OWL", "Claude API", "Gemini API"]
  },
  {
    title: "PMO Portfolio Dashboard", where: "QAST", date: "Oct 2026",
    cat: "fullstack", media: { logo: "qast" }, featured: true,
    desc: "A management dashboard that brings project status, milestones and KPIs from the project-management system into one view, so leadership sees the health of the whole portfolio instead of opening projects one by one.",
    points: ["Portfolio health, risk, governance and audit-trail pages", "Role-based access per portfolio, division or project", "Scheduled division and GM reports by e-mail; runs on Docker Compose"],
    tech: ["React", "Vite", "Recharts", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    note: "Internal system, company data is confidential"
  },
  {
    title: "Local Content Module", where: "Odoo 19", date: "Aug 2026",
    cat: "odoo", media: { img: "local_content" }, featured: true,
    desc: "Calculates a company's Saudi local-content score (how much of every riyal spent stays in the Saudi economy) following the LCGPA methodology. Built for manufacturers, it replaces yearly manual Excel work and shows which decisions move the score before a tender closes.",
    points: ["Per-period statements with approved supplier weightings", "Draft → computed → locked → review → approved workflow", "Evidence tracking and what-if scenarios"],
    tech: ["Odoo 19", "Python", "PostgreSQL"]
  },

  {
    title: "Hospital Analytics Dashboards", where: "Odoo 19", date: "Aug 2026",
    cat: "odoo", media: { img: "his_dashboards" },
    desc: "The dashboard layer of the hospital system: every department in one panel with 134 charts and 44 KPI cards, using combo, funnel, treemap, sunburst, radar and waterfall charts.",
    tech: ["Odoo 19 Dashboards", "Python", "PostgreSQL"]
  },
  {
    title: "Tours & Activities Booking Platform", where: "Odoo 19",
    cat: "odoo", media: { img: "travel" },
    desc: "Marketplace-style booking for destinations across Saudi Arabia and the Gulf: search places and activities, wishlists, a booking cart and \"My bookings\", with SAR pricing and a branded theme.",
    tech: ["Odoo 19", "Python", "OWL", "QWeb", "PostgreSQL"], note: "In development"
  },
  {
    title: "MyCase: Knowledge Management & Case Workflow", where: "QAST",
    cat: "fullstack", media: { img: "mycase" },
    desc: "Employees submit cases and knowledge articles that go through role-based approval chains and multi-tier reviews by managers and directors.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    links: [{ label: "Live demo", href: "https://km-system.vercel.app" }]
  },
  {
    title: "Payment Tracker", where: "QAST",
    cat: "fullstack", media: { img: "payment_tracker" },
    desc: "Tracks company payment flows, verification flags and operational progress, with sign-in and role-based approvals for staff, team leaders, managers and directors.",
    tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    links: [{ label: "Live", href: "https://payment-tracker-3.vercel.app" }]
  },
  {
    title: "Smart Vending Tool", where: "QAST",
    cat: "fullstack", media: { logo: "qast" },
    desc: "One of QAST's internal business systems used by staff every day, with a React and TypeScript frontend backed by Node.js REST APIs.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"], note: "Internal system"
  },
  {
    title: "SaaS Subscription Manager", date: "Oct 2026",
    cat: "fullstack", media: { img: "saas_dashboard" },
    desc: "Shows where software money goes, flags unused seats and overlapping tools, and warns before renewal deadlines. On the sample data it finds about $41k a year in savings.",
    tech: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "AI Expense Tracker", date: "2025",
    cat: "fullstack", media: { github: true },
    desc: "Full-stack expense tracker with AI spending analysis, real-time insights and a responsive dashboard.",
    tech: ["Next.js 15", "Tailwind CSS", "Prisma", "Neon", "Clerk", "OpenRouter"],
    links: [{ label: "Code", href: "https://github.com/onoureman/expense-tracker-ai" }]
  },
  {
    title: "MeetAI",
    cat: "fullstack", media: { github: true },
    desc: "AI meeting app built with Next.js, with Better Auth sign-in and a Drizzle ORM data layer on Neon Postgres.",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "Neon", "Better Auth"],
    links: [{ label: "Code", href: "https://github.com/onoureman/meetai" }]
  },
  {
    title: "AI Fusion Lab",
    cat: "fullstack", media: { github: true },
    desc: "Multi-model AI chat playground with Clerk authentication, Firebase storage and Arcjet rate limiting.",
    tech: ["Next.js", "Clerk", "Firebase", "Arcjet"],
    links: [{ label: "Code", href: "https://github.com/onoureman/ai-fusion-lab" }]
  },
  {
    title: "AI Resume Analyzer",
    cat: "fullstack", media: { github: true },
    desc: "Résumé analyser built on React Router with server-side rendering, TypeScript and a Docker setup.",
    tech: ["React Router", "TypeScript", "Tailwind CSS", "Docker"],
    links: [{ label: "Code", href: "https://github.com/onoureman/ai-resume-analyzer" }]
  },
  {
    title: "Classroom Management Admin",
    cat: "fullstack", media: { github: true },
    desc: "Admin panel for managing classes, built with Refine, React Hook Form and TanStack Table.",
    tech: ["React", "Refine", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Code", href: "https://github.com/onoureman/classroom-frontend" }]
  },
  {
    title: "Global Finance Data Dashboard",
    cat: "fullstack", media: { github: true },
    desc: "Interactive Streamlit dashboard for global financial indicators: country filters, time series, correlation analysis and a GDP growth prediction model.",
    tech: ["Python", "Streamlit", "Data analysis"],
    links: [{ label: "Code", href: "https://github.com/onoureman/global-finance-data" }]
  },
  {
    title: "Car Dealership App", where: "IBM capstone",
    cat: "fullstack", media: { github: true },
    desc: "Full-stack developer capstone project from the IBM Software Engineering programme.",
    tech: ["Full-stack", "JavaScript"],
    links: [{ label: "Code", href: "https://github.com/onoureman/Full-stack-car-Dealership-project" }]
  },
  {
    title: "Odoo 18 Sample Modules",
    cat: "odoo", media: { github: true },
    desc: "Sample custom modules written while learning Odoo 18 module development.",
    tech: ["Odoo 18", "Python", "XML"],
    links: [{ label: "Code", href: "https://github.com/onoureman/odoo-18-samples-projects" }]
  },

  {
    title: "PowerFlx Corporate Website", where: "Odoo Website",
    cat: "web", media: { img: "powerflx" },
    desc: "Arabic/English website for a Saudi EPC contractor in fuel-station and MEP works: RTL with a language switcher, company figures, client logos, services and case studies.",
    tech: ["Odoo Website", "HTML", "CSS"]
  },
  {
    title: "Al Maha Fuel Stations Website",
    cat: "web", media: { img: "almaha" },
    desc: "Bilingual site for a Saudi fuel and lubricants company: live fuel-price ticker, products, stations, sustainability, careers and news.",
    tech: ["HTML", "CSS", "Responsive design"]
  },
  {
    title: "Noor Living Online Store", where: "WordPress",
    cat: "web", media: { img: "noor_living" },
    desc: "Demo furniture and decor store for Saudi homes: home, shop, about, shipping & returns and contact pages.",
    tech: ["WordPress", "E-commerce"],
    links: [{ label: "Live", href: "https://ecommerce7919.wordpress.com" }]
  },
  {
    title: "Enjaz Digital Planner Landing Page",
    cat: "web", media: { img: "enjaz" },
    desc: "Arabic (RTL) landing page for a digital planner product with animated hero typography.",
    tech: ["TypeScript", "Tailwind CSS"],
    links: [{ label: "Live", href: "https://enjaz-gamma.vercel.app" }]
  },
  {
    title: "Security Systems Company Website",
    cat: "web", media: { img: "ark_security" },
    desc: "Arabic (RTL) website for a security and CCTV company: hero slider, services and quote requests.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://ark-security-website.vercel.app" }]
  },
  {
    title: "AI Product Studio Landing Page", date: "May 2026",
    cat: "web", media: { img: "ai_studio" },
    desc: "Cinematic single-page site: full-screen video hero, word-by-word blur-in headline, \"liquid glass\" feature cards and a seamless looping video component.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    links: [{ label: "Live", href: "https://cinematic-ai-product-studio-landing.vercel.app" }]
  },
  {
    title: "Scroll-Driven Parallax Landscape", date: "Aug 2026",
    cat: "web", media: { img: "parallax" },
    desc: "Day → dusk → night from a single inline SVG: nine hill layers at different speeds and a sky gradient tweened on scroll. No video, canvas or WebGL.",
    tech: ["SVG", "GSAP 3", "ScrollTrigger", "JavaScript"]
  },
  {
    title: "Smooth-Scroll Animation Experiment", date: "Jan 2026",
    cat: "web", media: { img: "gsap_scroll" },
    desc: "Scroll-based interactions with GSAP ScrollTrigger, Lenis smooth scrolling and SplitText reveals.",
    tech: ["React", "Vite", "GSAP", "Lenis"],
    links: [{ label: "Live", href: "https://gsap-lenis-scroll.vercel.app" }, { label: "Code", href: "https://github.com/onoureman/gsap-lenis-scroll" }]
  },
  {
    title: "Laptop Product Page (GSAP practice)",
    cat: "web", media: { img: "macbook_page" },
    desc: "Practice build of an animated laptop product page with GSAP scroll animations and a 3D model.",
    tech: ["React", "GSAP", "Three.js"],
    links: [{ label: "Live", href: "https://macbook-gasp-app.vercel.app" }, { label: "Code", href: "https://github.com/onoureman/macbook_gasp_app" }]
  },
  {
    title: "Marketing Website (animation course)",
    cat: "web", media: { github: true },
    desc: "Marketing site with GSAP and Three.js animations, built while following the Frontend Masters \"Award-Winning Marketing Site\" course.",
    tech: ["Next.js", "GSAP", "Three.js", "TypeScript"],
    links: [{ label: "Code", href: "https://github.com/onoureman/marketing-website" }]
  },
  {
    title: "Movie App",
    cat: "web", media: { github: true },
    desc: "Movie browsing app built with React, Vite and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind CSS"],
    links: [{ label: "Code", href: "https://github.com/onoureman/movie-app-react" }]
  },

  {
    title: "Kidney Care Patient App", where: "iOS",
    cat: "mobile", media: { img: "kidney_app" },
    desc: "Arabic iOS app for kidney patients: next dialysis session on Apple Maps, weight and blood pressure, medication reminders and a water-intake tracker.",
    tech: ["Swift", "SwiftUI", "MapKit"]
  },
  {
    title: "Smart Invite Event App", where: "iOS",
    cat: "mobile", media: { img: "smart_invite" },
    desc: "Arabic/English event invitations: card designs, MapKit locations, WhatsApp invites from contacts, RSVP tracking and check-in codes.",
    tech: ["Swift", "SwiftUI", "MapKit", "Supabase"]
  },
  {
    title: "SuperValu Grocery Delivery App", where: "iOS", date: "Sep 2026",
    cat: "mobile", media: { img: "supervalu" },
    desc: "Grocery onboarding localised for Saudi Arabia (SAR prices, Riyadh addresses, local retailers): animated welcome, sign-up with OTP, location and store pickers, storefront and home feed.",
    tech: ["Swift", "SwiftUI", "iOS 26"]
  }
];
