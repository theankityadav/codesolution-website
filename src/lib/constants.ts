export const COMPANY_NAME = "CodeSolution";
export const COMPANY_TAGLINE = "End-to-End Digital Solutions";
export const COMPANY_DESCRIPTION =
  "We deliver cutting-edge technology solutions that transform businesses and drive growth.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/technologies", label: "Technologies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Create stunning, user-centric designs that convert.",
    description:
      "Our design team crafts intuitive interfaces and seamless user experiences that delight users and drive engagement. From wireframes to high-fidelity prototypes, we ensure every pixel serves a purpose.",
    icon: "Palette",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Responsive Design",
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    shortDescription: "Build fast, responsive, and interactive web interfaces.",
    description:
      "We build modern, performant frontend applications using the latest technologies. Our code is clean, maintainable, and optimized for speed and SEO.",
    icon: "Monitor",
    features: [
      "React & Next.js Development",
      "Angular Applications",
      "Vue.js Solutions",
      "Progressive Web Apps",
      "Performance Optimization",
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    shortDescription: "Robust server-side solutions that scale.",
    description:
      "Our backend engineers build secure, scalable APIs and server infrastructure. We handle complex business logic, data processing, and third-party integrations with ease.",
    icon: "Server",
    features: [
      "Python & Django",
      "Node.js & Express",
      "RESTful API Design",
      "Database Architecture",
      "Microservices",
    ],
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    shortDescription: "Complete end-to-end application development.",
    description:
      "Get the best of both worlds with our full-stack development services. We handle everything from database design to user interface, delivering complete solutions.",
    icon: "Layers",
    features: [
      "End-to-End Solutions",
      "MERN/MEAN Stack",
      "Django + React",
      "Next.js Applications",
      "Database Integration",
    ],
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    shortDescription: "Ensure quality with comprehensive testing.",
    description:
      "Our QA team ensures your software is bug-free and performs flawlessly. We implement automated testing pipelines and manual testing strategies for complete coverage.",
    icon: "CheckCircle",
    features: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Testing",
      "CI/CD Integration",
    ],
  },
  {
    id: "devops-deployment",
    title: "DevOps & Deployment",
    shortDescription: "Streamline your development and deployment pipeline.",
    description:
      "We set up robust CI/CD pipelines, containerization, and cloud infrastructure. Your applications will be deployed securely and scale automatically.",
    icon: "Cloud",
    features: [
      "AWS/GCP/Azure Setup",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
    ],
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    shortDescription: "Connect systems with powerful APIs.",
    description:
      "We design and build APIs that power your applications and connect with third-party services. Our APIs are secure, well-documented, and easy to integrate.",
    icon: "Link",
    features: [
      "REST API Development",
      "GraphQL APIs",
      "Third-Party Integrations",
      "API Documentation",
      "Webhook Implementation",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription: "Tailored solutions for unique business needs.",
    description:
      "When off-the-shelf solutions don't fit, we build custom software tailored to your specific requirements. From concept to deployment, we bring your vision to life.",
    icon: "Code",
    features: [
      "Requirements Analysis",
      "Custom Architecture",
      "Scalable Solutions",
      "Legacy Modernization",
      "Ongoing Support",
    ],
  },
];

export const TECHNOLOGIES = {
  frontend: [
    { name: "React", icon: "/tech/react.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "Angular", icon: "/tech/angular.svg" },
    { name: "Vue.js", icon: "/tech/vue.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "Django", icon: "/tech/django.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "FastAPI", icon: "/tech/fastapi.svg" },
    { name: "GraphQL", icon: "/tech/graphql.svg" },
  ],
  database: [
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "MySQL", icon: "/tech/mysql.svg" },
    { name: "Redis", icon: "/tech/redis.svg" },
    { name: "Firebase", icon: "/tech/firebase.svg" },
  ],
  cloud: [
    { name: "AWS", icon: "/tech/aws.svg" },
    { name: "Google Cloud", icon: "/tech/gcp.svg" },
    { name: "Azure", icon: "/tech/azure.svg" },
    { name: "Vercel", icon: "/tech/vercel.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
  ],
  tools: [
    { name: "Git", icon: "/tech/git.svg" },
    { name: "GitHub", icon: "/tech/github.svg" },
    { name: "Figma", icon: "/tech/figma.svg" },
    { name: "Jira", icon: "/tech/jira.svg" },
    { name: "Slack", icon: "/tech/slack.svg" },
  ],
};

export const PORTFOLIO_PROJECTS = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "A complete e-commerce solution with inventory management, payment processing, and real-time analytics dashboard.",
    image: "/portfolio/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    results: ["200% increase in sales", "50ms average load time", "99.9% uptime"],
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management System",
    category: "Custom Software",
    description:
      "HIPAA-compliant healthcare platform for patient management, appointment scheduling, and telemedicine.",
    image: "/portfolio/healthcare.jpg",
    technologies: ["React", "Django", "PostgreSQL", "WebRTC", "Docker"],
    results: ["10,000+ active users", "40% reduction in admin time", "HIPAA certified"],
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    category: "Frontend Development",
    description:
      "Real-time financial analytics dashboard with interactive charts, portfolio tracking, and AI-powered insights.",
    image: "/portfolio/fintech.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    results: ["Real-time data updates", "50+ chart types", "Enterprise adoption"],
  },
  {
    id: "saas-platform",
    title: "SaaS Project Management Tool",
    category: "Full Stack Development",
    description:
      "Collaborative project management platform with real-time updates, file sharing, and team communication.",
    image: "/portfolio/saas.jpg",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Socket.io", "GCP"],
    results: ["5,000+ teams onboarded", "4.8/5 user rating", "99.99% uptime"],
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    category: "API Development",
    description:
      "Secure mobile banking API with biometric authentication, instant transfers, and spending analytics.",
    image: "/portfolio/banking.jpg",
    technologies: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda", "Plaid"],
    results: ["Bank-grade security", "Sub-second transactions", "PCI DSS compliant"],
  },
  {
    id: "logistics-system",
    title: "Logistics & Fleet Management",
    category: "Custom Software",
    description:
      "End-to-end logistics platform with GPS tracking, route optimization, and automated dispatch.",
    image: "/portfolio/logistics.jpg",
    technologies: ["React", "Python", "PostgreSQL", "Google Maps", "IoT"],
    results: ["30% fuel savings", "Real-time tracking", "500+ vehicles managed"],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Rajesh Sharma",
    role: "CEO & Founder",
    image: "/team/ceo.jpg",
    bio: "15+ years in tech leadership, previously at Google and Microsoft.",
  },
  {
    name: "Priya Patel",
    role: "CTO",
    image: "/team/cto.jpg",
    bio: "Former senior engineer at Amazon, expert in scalable architectures.",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Design",
    image: "/team/design-head.jpg",
    bio: "Award-winning designer with experience at Apple and Airbnb.",
  },
  {
    name: "Sneha Gupta",
    role: "Head of Engineering",
    image: "/team/engineering-head.jpg",
    bio: "10+ years building enterprise software, passionate about clean code.",
  },
];

export const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "25+", label: "Team Members" },
  { value: "5+", label: "Years Experience" },
];

export const TESTIMONIALS = [
  {
    quote:
      "CodeSolution transformed our outdated system into a modern, scalable platform. Their team's expertise and dedication exceeded our expectations.",
    author: "Amit Verma",
    role: "CTO",
    image: "/testimonials/amit.jpg",
  },
  {
    quote:
      "Working with CodeSolution was a game-changer for our startup. They delivered a beautiful, functional product on time and within budget.",
    author: "Neha Kapoor",
    role: "Founder",
    image: "/testimonials/neha.jpg",
  },
  {
    quote:
      "The team's technical knowledge and problem-solving abilities are outstanding. They're now our go-to partner for all development needs.",
    author: "Vikram Singh",
    role: "VP Engineering",
    image: "/testimonials/vikram.jpg",
  },
];

export const SERVICE_OPTIONS = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "QA & Testing",
  "DevOps & Deployment",
  "API Development & Integration",
  "Custom Software Development",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export const TIMELINE_OPTIONS = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Ongoing / Retainer",
  "Flexible",
];
