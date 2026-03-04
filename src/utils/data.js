// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services',     href: '#services'     },
  { label: 'Process',      href: '#process'      },
  { label: 'Work',         href: '#work'         },
  { label: 'Clients',      href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

// ─── Hero Stats ─────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '98%',  label: 'Client Retention'   },
  { number: '12+',  label: 'Years Excellence'   },
]

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'strategy',
    icon: '🧠',
    name: 'Strategy & Consulting',
    blurb: 'Digital roadmaps and technology strategy aligned with your business objectives.',
    items: [
      'Digital Transformation Roadmap',
      'Technology Assessment & Audit',
      'Architecture Advisory',
      'Innovation Workshops',
      'Vendor Selection & Management',
    ],
  },
  {
    id: 'software',
    icon: '💻',
    name: 'Software Development',
    blurb: 'Custom enterprise software engineered for performance, security, and scale.',
    items: [
      'Custom Enterprise Applications',
      'Microservices Architecture',
      'Backend Systems & APIs',
      'Database Design & Optimization',
      'Legacy System Modernization',
    ],
  },
  {
    id: 'web',
    icon: '🌐',
    name: 'Web Development',
    blurb: 'High-performance web platforms that convert visitors into loyal customers.',
    items: [
      'Enterprise Web Applications',
      'SaaS Platform Development',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'Performance Optimization',
    ],
  },
  {
    id: 'mobile',
    icon: '📱',
    name: 'Mobile App Development',
    blurb: 'Native and cross-platform mobile experiences built for modern users.',
    items: [
      'iOS & Android Development',
      'React Native & Flutter',
      'Mobile Commerce Apps',
      'Enterprise Mobility Solutions',
      'App Store Optimization',
    ],
  },
  {
    id: 'cloud',
    icon: '☁️',
    name: 'Cloud & DevOps',
    blurb: 'Scalable cloud infrastructure with automated pipelines and zero-downtime deployments.',
    items: [
      'AWS / Azure / GCP Migration',
      'CI/CD Pipeline Engineering',
      'Infrastructure as Code (IaC)',
      'Kubernetes Orchestration',
      'Cost Optimization & Monitoring',
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    name: 'AI & Automation',
    blurb: 'Intelligent automation and AI integration driving measurable operational efficiency.',
    items: [
      'Machine Learning Solutions',
      'LLM & GenAI Integration',
      'Workflow Automation (RPA)',
      'Predictive Analytics',
      'Chatbots & Intelligent Agents',
    ],
  },
  {
    id: 'design',
    icon: '🎨',
    name: 'UI/UX & Product Design',
    blurb: 'Human-centered design turning complex problems into elegant, intuitive experiences.',
    items: [
      'Product Strategy & Research',
      'UX Architecture & Wireframing',
      'Visual Design & Prototyping',
      'Design Systems',
      'Usability Testing',
    ],
  },
  {
    id: 'security',
    icon: '🔐',
    name: 'Cybersecurity',
    blurb: 'Enterprise-grade security framework protecting your critical digital assets.',
    items: [
      'Security Audits & Pen Testing',
      'Zero-Trust Architecture',
      'Compliance (ISO, SOC2, GDPR)',
      'Vulnerability Management',
      'Security Operations Center',
    ],
  },
  {
    id: 'maintenance',
    icon: '🔄',
    name: 'Maintenance & Support',
    blurb: '24/7 dedicated support ensuring your systems run at peak performance always.',
    items: [
      '24/7 System Monitoring',
      'Proactive Maintenance',
      'Performance Optimization',
      'Incident Response',
      'SLA-backed Support Plans',
    ],
  },
  {
    id: 'api',
    icon: '🔗',
    name: 'API & Integrations',
    blurb: 'Seamless system integrations that unify your entire technology ecosystem.',
    items: [
      'RESTful & GraphQL API Design',
      'Third-Party Integrations',
      'ERP / CRM Integrations',
      'Payment Gateway Integration',
      'Webhook & Event Architecture',
    ],
  },
  {
    id: 'startup',
    icon: '🚀',
    name: 'Startup & SaaS Support',
    blurb: 'From MVP to market — we accelerate startups with proven technical execution.',
    items: [
      'MVP Development & Launch',
      'SaaS Architecture Design',
      'Product-Market Fit Engineering',
      'Investor-Ready Tech Decks',
      'Scaling & Growth Engineering',
    ],
  },
  {
    id: 'data',
    icon: '📊',
    name: 'Data & Analytics',
    blurb: 'Turning raw data into strategic intelligence that powers smarter decisions.',
    items: [
      'Data Warehouse & Lake Design',
      'Business Intelligence Dashboards',
      'Real-Time Analytics Pipelines',
      'Data Governance Framework',
      'Reporting & Visualization',
    ],
  },
]

// ─── Process Steps ────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    phase: '01',
    name: 'Discover',
    desc: 'Deep-dive into your business goals, current systems, and technical landscape to uncover real opportunities.',
  },
  {
    phase: '02',
    name: 'Strategize',
    desc: 'We craft a precise technology roadmap with timelines, resource plans, and measurable success metrics.',
  },
  {
    phase: '03',
    name: 'Architect',
    desc: 'System design with security, scalability, and long-term maintainability at its core from day one.',
  },
  {
    phase: '04',
    name: 'Build',
    desc: 'Agile development sprints with full transparency, rigorous QA, and continuous stakeholder alignment.',
  },
  {
    phase: '05',
    name: 'Launch',
    desc: 'Staged deployment with zero-downtime strategies, full monitoring setup, and comprehensive team training.',
  },
  {
    phase: '06',
    name: 'Scale',
    desc: 'Ongoing optimization, feature evolution, and infrastructure scaling as your business accelerates.',
  },
]

// ─── Why SAKK Tech ────────────────────────────────────────────────────────────
export const WHY_ITEMS = [
  {
    icon: '⚙️',
    number: '01',
    title: 'Enterprise-Grade Architecture',
    desc: 'We build systems designed for real-world load — fault-tolerant, highly available, and architected to handle millions of concurrent users without compromise.',
  },
  {
    icon: '🛡️',
    number: '02',
    title: 'Security-First Development',
    desc: 'Security isn\'t an afterthought — it\'s baked into every layer. From OWASP compliance to zero-trust infrastructure, we protect what matters most.',
  },
  {
    icon: '☁️',
    number: '03',
    title: 'Scalable Cloud-Ready Systems',
    desc: 'Every system we deliver is cloud-native and engineered to scale. Whether serving 100 or 100 million users, our infrastructure grows seamlessly with you.',
  },
  {
    icon: '🤝',
    number: '04',
    title: 'Long-Term Technology Partnership',
    desc: 'We don\'t just deliver and disappear. We embed as your strategic technology partner — aligned with your growth and success for the long term.',
  },
]

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const CASE_STUDIES = [
  {
    id: 'nexapay',
    label: 'FinTech',
    icon: '🏦',
    gradientFrom: '#090913',
    gradientTo: '#0c1827',
    title: 'NexaPay — Payment Infrastructure',
    desc: 'End-to-end payment processing platform handling $2B+ in annual transaction volume with sub-100ms latency across 40 countries.',
    tech: ['Node.js', 'Kafka', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'medicore',
    label: 'HealthTech',
    icon: '🏥',
    gradientFrom: '#091309',
    gradientTo: '#091f0f',
    title: 'MediCore — Clinical Data Platform',
    desc: 'HIPAA-compliant clinical data platform serving 300+ hospitals with real-time patient analytics and AI-powered diagnostic support.',
    tech: ['Python', 'TensorFlow', 'Azure', 'FHIR'],
  },
  {
    id: 'fleetiq',
    label: 'Logistics',
    icon: '🚢',
    gradientFrom: '#130909',
    gradientTo: '#1f0e0d',
    title: 'FleetIQ — Supply Chain OS',
    desc: 'Real-time supply chain orchestration managing 10,000+ fleet vehicles with predictive routing and automated dispatch intelligence.',
    tech: ['React', 'Go', 'Redis', 'GCP'],
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    initials: 'RK',
    text: 'SAKK Tech transformed our entire digital infrastructure in under six months. The level of technical sophistication and strategic clarity they brought was beyond anything we\'d experienced before.',
    name: 'Rajesh Kumar',
    role: 'CTO, NexaFinance Group',
  },
  {
    id: 2,
    initials: 'SA',
    text: 'From architecture to deployment, their team operated with military precision. We launched our SaaS platform 3 weeks ahead of schedule and it\'s been rock-solid since day one.',
    name: 'Sarah Anderson',
    role: 'CEO, CloudVertex Inc.',
  },
  {
    id: 3,
    initials: 'MH',
    text: 'Their cybersecurity audit uncovered critical vulnerabilities our internal team had missed for years. SAKK Tech doesn\'t just build — they protect your business at every single layer.',
    name: 'Mohammed Hassan',
    role: 'CISO, GlobalBank MENA',
  },
  {
    id: 4,
    initials: 'PL',
    text: 'We went from a broken MVP to a platform processing 50,000 daily active users in 4 months. The AI integration alone reduced our operational costs by 40%. Remarkable team.',
    name: 'Priya Lakshmanan',
    role: 'Founder, LogiqAI',
  },
  {
    id: 5,
    initials: 'JW',
    text: 'Exceptional technical depth combined with genuine business acumen. SAKK Tech understands technology is a means to an end — not an end in itself. That mindset changes everything.',
    name: 'James Wallace',
    role: 'VP Engineering, ScaleBridge',
  },
]

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const FOOTER_QUICK_LINKS = [
  { label: 'Home',          href: '#hero'         },
  { label: 'Services',      href: '#services'     },
  { label: 'Our Process',   href: '#process'      },
  { label: 'Portfolio',     href: '#work'         },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact'      },
]

export const FOOTER_SERVICE_LINKS = [
  { label: 'Strategy & Consulting', href: '#services' },
  { label: 'Software Development',  href: '#services' },
  { label: 'Cloud & DevOps',        href: '#services' },
  { label: 'AI & Automation',       href: '#services' },
  { label: 'Cybersecurity',         href: '#services' },
  { label: 'Data & Analytics',      href: '#services' },
]

export const FOOTER_CONTACT_LINKS = [
  { label: 'hello@sakktech.com',    href: 'mailto:hello@sakktech.com' },
  { label: '+1 (800) SAKK-TECH',    href: 'tel:+18005255832'          },
  { label: 'Book a Consultation',   href: '#contact'                  },
  { label: 'Partner With Us',       href: '#contact'                  },
  { label: 'Careers',               href: '#contact'                  },
]

export const SOCIAL_LINKS = [
  { label: 'Li', title: 'LinkedIn',  href: '#' },
  { label: '𝕏',  title: 'Twitter/X', href: '#' },
  { label: 'Gh', title: 'GitHub',    href: '#' },
  { label: 'Yt', title: 'YouTube',   href: '#' },
]

export const SERVICE_OPTIONS = [
  'Strategy & Consulting',
  'Software Development',
  'Web Development',
  'Mobile App Development',
  'Cloud & DevOps',
  'AI & Automation',
  'UI/UX & Product Design',
  'Cybersecurity',
  'Data & Analytics',
  'Startup & SaaS Support',
  'Multiple Services',
]
