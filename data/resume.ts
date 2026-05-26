export const profile = {
  name: 'Anuj Kumar Srivastav',
  title: 'Senior Product Engineer',
  tagline:
    'Building scalable, performant SaaS & fintech products with React, TypeScript, and Next.js.',
  summary:
    "Senior Product Engineer with 8+ years building scalable SaaS and fintech applications. I specialize in scalable frontend architecture, real-time systems, performance optimization, and AI-assisted engineering workflows. Strong track record of reducing bundle size, optimizing API-heavy applications, and shipping intuitive product experiences across fast-moving Agile teams.",
  location: 'Bengaluru, India',
  availability: 'Open to Remote — EU / US / UK time zones',
  email: 'mailanujsri@gmail.com',
  phone: '+91 81268 80650',
  links: {
    linkedin: 'https://www.linkedin.com/in/anuj-kumar-srivastav',
    github: 'https://github.com/anuj8126',
    resume: '/resume.pdf',
  },
} as const;

export type Experience = {
  company: string;
  context: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: 'Unosecure',
    context: 'SaaS Security Platform',
    role: 'Senior Software Engineer',
    period: 'Oct 2025 — Present',
    highlights: [
      'Delivered frontend for a full SaaS platform redesign — reusable component library and dynamic, data-driven interfaces with React + Vanilla Extract.',
      'Designed configuration-driven form rendering for connector integrations, enabling rapid onboarding of new integrations with minimal frontend changes.',
      'Reduced bundle size from 16 MB to 6 MB (~62.5%) via dependency cleanup, tree-shaking, code splitting, lazy loading, and build optimization.',
      'Standardized Vite build configuration — environment handling, aliases, and chunking strategy — for faster, more consistent releases.',
      'Implemented Service Worker caching to improve repeat-visit performance and resilience on slow networks.',
      'Introduced performance regression guardrails in CI using bundle analysis and Lighthouse thresholds.',
      'Integrated Jenkins CI/CD pipelines to improve release repeatability and reliability.',
      'Used AI-assisted workflows (Cursor, Copilot) across implementation, debugging, testing, and refactoring.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vanilla Extract',
      'Vite',
      'Service Workers',
      'Jenkins',
      'Microservices',
    ],
  },
  {
    company: 'Compliance Innovation',
    context: 'Fintech + KYC Platform · Liquidity.io · Simplici.io',
    role: 'Tech Lead (Frontend) / Senior Software Engineer',
    period: 'May 2023 — Sep 2025',
    highlights: [
      'Engineered real-time trading workflows (Liquidity.io) with React Query + WebSockets + smart polling — improved data sync and cut API traffic by 40%.',
      'Shipped facial authentication for Simplici.io KYC using React + TypeScript + Recoil + MediaPipe / WebRTC — reduced manual KYC time by 50% and lifted conversion.',
      'Led and mentored a 7-engineer team — delivery velocity up 20% via review rigor and execution discipline.',
      'Spearheaded Webpack optimization — bundle size down 40%, with measurable LCP/FCP improvements.',
      'Built framework-agnostic Web Components, enabling biometric flows across Angular, Vue, and Vanilla JS consumers.',
      'Strengthened reliability with robust device/browser fallbacks and a testing discipline (Jest, RTL, ESLint, Prettier).',
    ],
    stack: [
      'React',
      'TypeScript',
      'Recoil',
      'React Query',
      'WebSockets',
      'WebRTC',
      'MediaPipe',
      'Web Components',
      'Webpack',
    ],
  },
  {
    company: '91Squarefeet',
    context: 'YC-funded PropTech startup',
    role: 'Senior Software Engineer',
    period: 'Sep 2022 — Apr 2023',
    highlights: [
      'Built a custom commenting system and rich text editor with mentions and file uploads — React, Redux, TypeScript, Material UI.',
      'Migrated complex UI modules from jQuery to React — significantly improved performance, maintainability, and code structure.',
      'Contributed frontend features to R Dash, a retail expansion platform, ensuring modular code and consistent UX.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Material UI'],
  },
  {
    company: 'PharmEasy',
    context: 'Healthcare E-commerce',
    role: 'Senior Software Engineer',
    period: 'Mar 2022 — Sep 2022',
    highlights: [
      'Contributed to the Pharmeasy.in homepage revamp — high-performance, reusable components with React, Redux, Next.js, TypeScript, Stitches UI.',
      'Optimized rendering paths, reduced visual load time, and improved UX consistency across web and mobile breakpoints.',
    ],
    stack: ['Next.js', 'React', 'Redux', 'TypeScript', 'Stitches UI'],
  },
  {
    company: 'GIEOM Labs',
    context: 'Enterprise Compliance Platform',
    role: 'Software Engineer',
    period: 'Feb 2020 — Feb 2022',
    highlights: [
      'Developed responsive dashboards and form interfaces for Risk Central — a compliance and risk management platform.',
      'Built and maintained dynamic forms using FormBuilder, DevExpress, jQuery, and custom logic to support complex business workflows.',
      'Used Ant Design and Bootstrap to deliver highly interactive, accessible UI components.',
    ],
    stack: ['JavaScript', 'jQuery', 'Ant Design', 'Bootstrap', 'DevExpress'],
  },
  {
    company: 'Incture Technologies',
    context: 'Enterprise Solutions',
    role: 'Associate Consultant (UI Developer)',
    period: 'Jan 2019 — Jan 2020',
    highlights: [
      'Contributed to frontend modules of a Talent Supply Management System — translating client specifications into functional UI.',
      'Focused on UI enhancements and bug fixes that improved system usability and efficiency.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: 'Frontend',
    items: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'HTML',
      'CSS',
      'Browser APIs',
      'DOM',
    ],
  },
  {
    label: 'State & Data',
    items: ['React Query', 'Redux', 'Recoil'],
  },
  {
    label: 'UI & Styling',
    items: [
      'Vanilla Extract',
      'Material UI',
      'Ant Design',
      'Stitches UI',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      'Node.js',
      'REST APIs',
      'API contract design',
      'Microservices',
      'Docker',
      'Kubernetes (working)',
    ],
  },
  {
    label: 'Build & Tooling',
    items: ['Vite', 'Webpack', 'Babel', 'ESLint', 'Husky', 'Git', 'GitHub', 'Jenkins'],
  },
  {
    label: 'Testing',
    items: ['Jest', 'React Testing Library', 'Playwright', 'Vite test workflows'],
  },
  {
    label: 'Performance',
    items: [
      'Code splitting',
      'Lazy loading',
      'Tree-shaking',
      'Bundle optimization',
      'Core Web Vitals',
      'LCP / FCP tuning',
    ],
  },
  {
    label: 'Web & Realtime',
    items: ['WebSockets', 'WebRTC', 'Service Workers', 'PWA', 'MediaPipe'],
  },
  {
    label: 'AI Workflows',
    items: ['Cursor', 'GitHub Copilot', 'Ollama', 'Qwen', 'AWS Bedrock', 'AI test generation'],
  },
];

export type Highlight = {
  metric: string;
  label: string;
  detail: string;
};

export const highlights: Highlight[] = [
  {
    metric: '62.5%',
    label: 'Bundle size reduction',
    detail: 'Cut SaaS app bundle from 16 MB to 6 MB at Unosecure.',
  },
  {
    metric: '40%',
    label: 'Fewer API calls',
    detail: 'Real-time trading workflows via WebSockets + smart polling.',
  },
  {
    metric: '50%',
    label: 'Faster KYC',
    detail: 'Facial auth on MediaPipe / WebRTC for Simplici.io.',
  },
  {
    metric: '7',
    label: 'Engineers mentored',
    detail: 'Led frontend team, +20% delivery velocity.',
  },
  {
    metric: '8+',
    label: 'Years of experience',
    detail: 'Across SaaS, fintech, healthcare, and PropTech.',
  },
  {
    metric: '5+',
    label: 'Production platforms',
    detail: 'Shipped to enterprise & high-traffic consumer audiences.',
  },
];

export type Project = {
  name: string;
  org: string;
  description: string;
  outcomes: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: 'SaaS Security Platform Redesign',
    org: 'Unosecure',
    description:
      'End-to-end frontend redesign of a SaaS security product — reusable component library, configuration-driven connector forms, and performance hardening for a microservice-integrated app.',
    outcomes: [
      'Bundle size: 16 MB → 6 MB (-62.5%)',
      'Service Worker caching for resilient repeat visits',
      'Bundle & Lighthouse regression gates in CI',
    ],
    stack: ['React', 'TypeScript', 'Vanilla Extract', 'Vite', 'Jenkins'],
  },
  {
    name: 'Liquidity.io — Real-time Trading',
    org: 'Compliance Innovation',
    description:
      'Real-time trading workflows powered by WebSockets, React Query, and a smart polling fallback — engineered for low-latency UX and reliable reconnection.',
    outcomes: [
      'API traffic reduced 40%',
      'Resilient reconnect & fallback strategy',
      'Async state consistency across complex flows',
    ],
    stack: ['React', 'TypeScript', 'React Query', 'WebSockets'],
  },
  {
    name: 'Simplici.io — KYC Facial Auth',
    org: 'Compliance Innovation',
    description:
      'Browser-native facial authentication for KYC using MediaPipe + WebRTC, packaged as framework-agnostic Web Components for Angular, Vue, and Vanilla JS consumers.',
    outcomes: [
      'Manual KYC time cut by 50%',
      'Higher conversion via smoother capture UX',
      'Reusable Web Components across hosts',
    ],
    stack: ['React', 'TypeScript', 'Recoil', 'MediaPipe', 'WebRTC', 'Web Components'],
  },
  {
    name: 'Pharmeasy.in — Homepage Revamp',
    org: 'PharmEasy',
    description:
      'High-traffic healthcare homepage rebuilt with Next.js + Stitches UI — focus on rendering paths, visual load time, and consistent UX across breakpoints.',
    outcomes: [
      'Reusable design-system components',
      'Improved LCP / visual load time',
      'Consistent UX across web & mobile',
    ],
    stack: ['Next.js', 'React', 'Redux', 'TypeScript', 'Stitches UI'],
  },
];

export const education = {
  degree: 'Bachelor of Engineering (B.E.), Computer Science',
  school: 'Dr. B.R. Ambedkar University, Agra',
  location: 'Uttar Pradesh, India',
};
