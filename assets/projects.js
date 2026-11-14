// Project data. Each project: title, cat (odoo | fullstack | web | mobile), img, desc, tech, links, note.
window.PROJECTS = [
  {
    title: "Hospital Information System on Odoo 19",
    cat: "odoo", img: "his", featured: true,
    desc: "An 11-module hospital suite on Odoo 19 Enterprise: patients, appointments, clinical encounters, in-patient and beds, pharmacy, laboratory, radiology and billing. Saudi compliance built in: ZATCA e-invoicing, NPHIES insurance over FHIR, ICD-10-AM and SFDA drug coding, with Arabic (RTL) and English interfaces.",
    tech: ["Odoo 19", "Python", "OWL", "PostgreSQL", "ZATCA", "NPHIES (FHIR)"],
    note: "Demo on request"
  },
  {
    title: "Hospital Analytics Dashboards",
    cat: "odoo", img: "his_dashboards",
    desc: "Interactive dashboards inside the HIS: visits, admissions, revenue and patient KPIs against the previous period, weekly revenue, visit types, a visit-stage funnel and a revenue treemap, with separate boards for pharmacy, lab, radiology, blood bank and billing.",
    tech: ["Odoo 19", "Python", "JavaScript", "Data visualisation"]
  },
  {
    title: "AI Sales Agent inside Odoo CRM",
    cat: "odoo", img: "ai_sales_agent", featured: true,
    desc: "A conversational sales assistant embedded in Odoo CRM. Salespeople describe the leads they want; the agent finds companies with growth signals, returns a sortable table with \"why they'd buy\", plots them on an interactive map and adds leads to the pipeline in one click, flagging companies already in the CRM.",
    tech: ["Odoo", "Python", "OWL / JavaScript", "LLM APIs", "Leaflet"]
  },
  {
    title: "Local Content (LCGPA) Compliance Module",
    cat: "odoo", img: "local_content",
    desc: "A custom Odoo module that calculates a Saudi company's local-content score using the LCGPA methodology: per-period statements, approved supplier weightings, R&D incentives, a draft → computed → locked → review → approved workflow, evidence tracking and what-if scenarios.",
    tech: ["Odoo", "Python", "PostgreSQL", "ERP workflows"]
  },
  {
    title: "Tours & Activities Booking Platform on Odoo 19",
    cat: "odoo", img: "travel",
    desc: "A marketplace-style booking platform for destinations across Saudi Arabia and the Gulf. Visitors search places and activities, save wishlists, book through a cart and manage their bookings, in English with SAR pricing. Custom website pages, booking workflows and a branded theme.",
    tech: ["Odoo 19", "Python", "OWL", "QWeb", "PostgreSQL"],
    note: "In development"
  },
  {
    title: "PMO Portfolio Dashboard",
    cat: "fullstack", img: "pmo", featured: true,
    desc: "Management dashboard at QAST that consolidates project status, milestones and KPIs from the project-management system into one view: portfolio health, risk, governance and audit-trail pages, role-based access and scheduled division and GM reports by e-mail. Runs on Docker Compose.",
    tech: ["React", "Vite", "Recharts", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    note: "Internal system · company data is confidential, so the image is an illustration"
  },
  {
    title: "MyCase: Knowledge Management & Case Workflow",
    cat: "fullstack", img: "mycase",
    desc: "Internal case management system at QAST: employees submit cases and knowledge articles, which go through role-based approval chains and multi-tier reviews (manager, director). Feed and grid views, categories, ratings and saved cases.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    links: [{ label: "Live demo", href: "https://km-system.vercel.app" }]
  },
  {
    title: "Payment Tracker",
    cat: "fullstack", img: "payment_tracker",
    desc: "Business tool at QAST for monitoring company payment flows, verification flags and operational progress, with sign-in and role-based approvals for staff, team leaders, managers and directors.",
    tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "RBAC"],
    links: [{ label: "Live", href: "https://payment-tracker-3.vercel.app" }, { label: "Code", href: "https://github.com/onoureman/Payment_Tracker" }]
  },
  {
    title: "Smart Vending Tool",
    cat: "fullstack", img: "smart_vend",
    desc: "Internal business system built at QAST as part of the company's suite of daily tools, with a React and TypeScript frontend backed by Node.js REST APIs.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    note: "Internal system · image is an illustration"
  },
  {
    title: "SaaS Subscription & Spend Dashboard",
    cat: "fullstack", img: "saas_dashboard",
    desc: "Helps finance and IT teams control software spend: monthly spend against budget, unused seats and their cost, a savings list of duplicate or under-used tools, budgets by department, a renewals calendar and a detail panel per subscription.",
    tech: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "PowerFlx: Bilingual Corporate Website on Odoo",
    cat: "web", img: "powerflx",
    desc: "Arabic/English website for a Saudi EPC contractor specialising in fuel-station projects and MEP works: full RTL support with a language switcher, company figures, client logos, and Services, About, Case Studies and Contact pages.",
    tech: ["Odoo Website", "HTML", "CSS", "RTL"]
  },
  {
    title: "Al Maha: Fuel Stations Network Website",
    cat: "web", img: "almaha",
    desc: "Bilingual corporate website for a Saudi fuel and lubricants company with 24/7 stations: live fuel-price ticker, products and services, stations, sustainability, careers and news sections.",
    tech: ["HTML", "CSS", "Responsive design"]
  },
  {
    title: "Noor Living: Online Store on WordPress",
    cat: "web", img: "noor_living",
    desc: "Demo furniture and decor store for Saudi homes on WordPress.com: home, shop, about, shipping & returns and contact pages, product grid and brand styling.",
    tech: ["WordPress", "Block theme", "E-commerce"],
    links: [{ label: "Live", href: "https://ecommerce7919.wordpress.com" }]
  },
  {
    title: "Enjaz: Digital Planner Landing Page",
    cat: "web", img: "enjaz",
    desc: "Arabic (RTL) landing page for a digital planner product, with animated hero typography and a free-template call to action.",
    tech: ["TypeScript", "Tailwind CSS", "Vercel"],
    links: [{ label: "Live", href: "https://enjaz-gamma.vercel.app" }]
  },
  {
    title: "Security Systems Company Website",
    cat: "web", img: "ark_security",
    desc: "Arabic (RTL) website for a security and CCTV systems company: hero slider, services, consultation and quote calls to action, and contact details.",
    tech: ["HTML", "CSS", "JavaScript", "RTL"],
    links: [{ label: "Live", href: "https://ark-security-website.vercel.app" }]
  },
  {
    title: "Cinematic AI Product Studio Landing Page",
    cat: "web", img: "ai_studio",
    desc: "Dark, cinematic landing page for an AI product-visuals studio: elegant display type, animated lighting, Studio / Renders / Workflows sections and clear calls to action.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://cinematic-ai-product-studio-landing.vercel.app" }]
  },
  {
    title: "Smooth-Scroll Landing Page (GSAP + Lenis)",
    cat: "web", img: "gsap_scroll",
    desc: "Landing page for an interior design studio with Lenis smooth scrolling and GSAP ScrollTrigger animations that reveal text and images as you scroll. Built with Vite.",
    tech: ["TypeScript", "GSAP", "Lenis", "Vite"],
    links: [{ label: "Live", href: "https://gsap-lenis-scroll.vercel.app" }, { label: "Code", href: "https://github.com/onoureman/gsap-lenis-scroll" }]
  },
  {
    title: "Parallax Landing Page",
    cat: "web", img: "parallax",
    desc: "Interactive landing page where layered SVG scenery (sky, mountains, trees) moves at different speeds as you scroll, creating depth. Responsive on mobile and desktop.",
    tech: ["HTML", "CSS", "JavaScript", "SVG"]
  },
  {
    title: "Kidney Care Patient App",
    cat: "mobile", img: "kidney_app",
    desc: "Native Arabic iOS app for kidney patients: next dialysis session with the centre on Apple Maps, today's weight and blood pressure, medication reminders, kidney-friendly meals and a water-intake tracker, in full right-to-left layout.",
    tech: ["Swift", "SwiftUI", "MapKit", "RTL"]
  },
  {
    title: "Smart Invite: Event Invitations App",
    cat: "mobile", img: "smart_invite",
    desc: "Bilingual (Arabic / English) iOS app for event invitations: create an event with a card design, pick the location with MapKit, invite guests from contacts over WhatsApp, track Going / Pending / Not going and check guests in with entry codes.",
    tech: ["Swift", "SwiftUI", "MapKit", "Supabase"]
  },
  {
    title: "SuperValu Grocery Store App",
    cat: "mobile", img: "supervalu",
    desc: "Native iOS grocery shopping app with an animated welcome screen (produce orbiting the store logo), onboarding that presents offers and product categories, and layouts that adapt to every iPhone size.",
    tech: ["Swift", "SwiftUI", "iOS"]
  }
];

window.REPOS = [
  { name: "expense-tracker-ai", desc: "Expense tracker with AI insights: Next.js, Tailwind CSS, Clerk and Neon.", lang: "TypeScript" },
  { name: "ai-resume-analyzer", desc: "AI résumé analyser built on React Router with TypeScript and Tailwind CSS.", lang: "TypeScript" },
  { name: "classroom-frontend", desc: "Classroom management admin panel built with Refine and React.", lang: "TypeScript" },
  { name: "meetai", desc: "AI meeting app built with Next.js.", lang: "TypeScript" },
  { name: "ai-fusion-lab", desc: "Multi-model AI chat playground built with Next.js.", lang: "TypeScript" },
  { name: "global-finance-data", desc: "Streamlit dashboard for global financial indicators, correlations and a GDP growth model.", lang: "Python" },
  { name: "odoo-18-samples-projects", desc: "Sample Odoo 18 custom modules.", lang: "Odoo" },
  { name: "Full-stack-car-Dealership-project", desc: "Full-stack car dealership app (IBM capstone).", lang: "Django · React" }
];
