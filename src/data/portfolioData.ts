import { Project, SkillPower, OriginStep, ServiceMission, GitHubRepo } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Maaz',
  role: 'Web Developer & MERN Stack Developer',
  email: 'vhoramaaz606@gmail.com',
  github: 'https://github.com/vhoramaaz',
  linkedin: 'https://linkedin.com/in/vhoramaaz',
  bioShort: 'I build modern, responsive and interactive web experiences using modern frontend technologies.',
  bioExtended: 'Passionate web developer specializing in React.js, the MERN ecosystem, and responsive UI engineering. Drawing inspiration from dimensional design, I combine clean architecture, fluid animations, and accessibility to deliver production-grade applications that make an impact.',
  location: 'Earth-616 // Dimension Web',
  stats: [
    { label: 'Core Projects Built', value: '15+' },
    { label: 'GitHub Commits', value: '750+' },
    { label: 'Frontend Stack', value: 'React / MERN' },
    { label: 'Responsive Fidelity', value: '100%' },
  ]
};

export const SKILL_POWERS: SkillPower[] = [
  {
    id: 'html',
    name: 'HTML5',
    powerName: 'Structure Power',
    category: 'frontend',
    level: 95,
    description: 'Semantic DOM architecture, strict accessibility standards (a11y), clean microdata, and SEO-first markup.',
    comicSound: 'SNAP!',
    accent: 'red',
  },
  {
    id: 'css',
    name: 'CSS3 / Tailwind',
    powerName: 'Visual Power',
    category: 'frontend',
    level: 92,
    description: 'Modern styling systems, responsive Flexbox/Grid, CSS custom properties, and fluid typography.',
    comicSound: 'SWISH!',
    accent: 'blue',
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    powerName: 'Logic Power',
    category: 'frontend',
    level: 90,
    description: 'Asynchronous event loops, Promises, closures, DOM manipulation, functional patterns, and clean algorithms.',
    comicSound: 'ZAP!',
    accent: 'purple',
  },
  {
    id: 'react',
    name: 'React.js',
    powerName: 'Component Power',
    category: 'frontend',
    level: 92,
    description: 'Modular component architecture, React Hooks, context state management, lazy loading, and optimized re-renders.',
    comicSound: 'THWIP!',
    accent: 'blue',
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    powerName: 'Backend Power',
    category: 'backend',
    level: 85,
    description: 'RESTful API construction, Express middleware pipelines, JSON Web Tokens (JWT), and server-side request routing.',
    comicSound: 'BOOM!',
    accent: 'red',
  },
  {
    id: 'mongodb',
    name: 'MongoDB & Mongoose',
    powerName: 'Data Power',
    category: 'backend',
    level: 82,
    description: 'NoSQL document data modeling, schema indexing, aggregation pipelines, and secure CRUD operations.',
    comicSound: 'CRUNCH!',
    accent: 'purple',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    powerName: 'Version Control',
    category: 'tools',
    level: 88,
    description: 'Branching workflows, semantic commit histories, pull requests, merge conflict resolution, and repository management.',
    comicSound: 'SYNC!',
    accent: 'red',
  },
  {
    id: 'webpack',
    name: 'Webpack & Vite',
    powerName: 'Build Power',
    category: 'tools',
    level: 85,
    description: 'Modern bundler configurations, code splitting, asset optimization, tree shaking, and hot module replacement.',
    comicSound: 'WARP!',
    accent: 'blue',
  },
  {
    id: 'vercel',
    name: 'Vercel Deployment',
    powerName: 'Dimension Deploy',
    category: 'tools',
    level: 90,
    description: 'Edge deployments, production build pipelines, environment secrets management, and automated previews.',
    comicSound: 'SURGE!',
    accent: 'purple',
  },
  {
    id: 'responsive',
    name: 'Responsive Web Design',
    powerName: 'Adaptive Power',
    category: 'frontend',
    level: 96,
    description: 'Fluid viewports, touch-first gesture support, dynamic break-points, and pixel-precise cross-device rendering.',
    comicSound: 'SHIFT!',
    accent: 'blue',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'news-monkey',
    title: 'NewsMonkey',
    tagline: 'Real-Time Dynamic News Hub with Pagination',
    category: 'React & Frontend',
    description: 'React-based live news portal featuring API integration, categorized news feeds, dynamic search, and seamless pagination.',
    longDescription: 'NewsMonkey is an interactive React single-page application built to consume live global news feeds. It features real-time category filtering (Technology, Business, Entertainment, Science, Sports, Health), top headline carousels, responsive article cards with fallback thumbnails, and custom pagination with infinite scrolling capability.',
    technologies: ['React.js', 'NewsAPI', 'JavaScript (ES6+)', 'Bootstrap 5', 'Custom CSS'],
    features: [
      'Multi-category live news switching with zero reload latency',
      'Dynamic pagination and infinite scroll feed options',
      'Live loading spinners and error handling with offline resilience',
      'Custom category badge styling and publish date formatting',
      'Keyword search filter for targeted headlines'
    ],
    challenges: 'Handling API rate limits, inconsistent third-party article image formats, and preventing state race conditions when switching categories rapidly.',
    learnings: 'Mastered component lifecycle methods, state lifting, useEffect dependency arrays, and asynchronous data fetching patterns in React.',
    metrics: '99.4% Mobile Accessibility score and sub-1.2s page load speed.',
    liveDemoUrl: 'https://newsmonkey-maaz.vercel.app',
    githubUrl: 'https://github.com/vhoramaaz/newsmonkey-react',
    bannerColor: 'from-[#ff2a55]/20 via-[#170c2e]/40 to-[#00e5ff]/20',
    accentColor: 'red',
    previewType: 'news'
  },
  {
    id: 'text-utils',
    title: 'TextUtils',
    tagline: 'Rapid Text Manipulation & Analysis Utility Suite',
    category: 'React & Frontend',
    description: 'A React text utility application with word counting, character counting, copy to clipboard, regex whitespace cleaners, and text manipulation.',
    longDescription: 'TextUtils provides a clean, distraction-free environment for writers and programmers to transform, inspect, and format text content instantly. Features include uppercase/lowercase transformation, sentence casing, whitespace removal, speech synthesis narration, estimated read-time calculation, and single-click clipboard synchronization.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Web Speech API', 'Regex'],
    features: [
      'Live character, word, sentence, and paragraph counters',
      'Case transformation: UPPERCASE, lowercase, Title Case, CamelCase',
      'Whitespace stripping and excess space normalizer',
      'Text-to-speech voice preview with Web Speech API',
      'One-tap clipboard copy with visual feedback toast',
      'Instant reading time estimation based on 200 WPM baseline'
    ],
    challenges: 'Designing accurate word count regex algorithms that correctly ignore continuous whitespaces, tabs, newlines, and unicode symbols.',
    learnings: 'Deepened practical knowledge of React state synchronization, input control, clipboard API security permissions, and lightweight browser audio synthesis.',
    metrics: 'Over 5,000 words processed per second with zero UI lag.',
    liveDemoUrl: 'https://textutils-maaz.vercel.app',
    githubUrl: 'https://github.com/vhoramaaz/textutils-react',
    bannerColor: 'from-[#00e5ff]/20 via-[#170c2e]/40 to-[#a855f7]/20',
    accentColor: 'blue',
    previewType: 'textutils'
  },
  {
    id: 'apple-store-clone',
    title: 'Apple Store Clone',
    tagline: 'Pixel-Precise Modern Storefront Interface',
    category: 'UI/UX & Clone',
    description: 'A responsive Apple-inspired storefront interface built using HTML, CSS and JavaScript with cinematic device showcase layouts.',
    longDescription: 'An ultra-sleek, pixel-perfect reproduction of Apple’s iconic storefront. Features smooth navigation overlays with glassmorphism, fluid responsive device grids, interactive trade-in calculation sliders, dynamic storage/color variant toggles, and sticky secondary category bars.',
    technologies: ['HTML5', 'Modern CSS', 'Vanilla JavaScript', 'SVG Animation', 'Flexbox & Grid'],
    features: [
      'Authentic Apple-style glassmorphic header and sticky sub-navigation',
      'Interactive color variant selector with dynamic hardware previews',
      'Responsive product grid with high-resolution responsive imagery',
      'Smooth scroll anchor navigation between product ecosystems',
      'Custom accordion specs drawer for iPhone, Mac, and iPad devices'
    ],
    challenges: 'Replicating Apple’s subtle typography scale and meticulous micro-padding transitions across all mobile screen widths without layout shift.',
    learnings: 'Mastered vanilla JS DOM manipulation, CSS custom properties, performance-conscious backdrop-filters, and responsive asset sizing.',
    metrics: 'Exact 1:1 visual fidelity with 100% fluid mobile responsiveness.',
    liveDemoUrl: 'https://apple-store-clone-maaz.vercel.app',
    githubUrl: 'https://github.com/vhoramaaz/apple-store-clone',
    bannerColor: 'from-[#a855f7]/20 via-[#0a0a12] to-[#00e5ff]/20',
    accentColor: 'purple',
    previewType: 'apple'
  },
  {
    id: 'ecommerce-storefront',
    title: 'E-Commerce Storefront',
    tagline: 'Interactive Full-Featured Product Marketplace',
    category: 'Full-Stack',
    description: 'Interactive product storefront with product exploration, live customization, spec comparison, cart management, and seamless checkout flow.',
    longDescription: 'A comprehensive modern e-commerce storefront designed for high-conversion retail. Includes instant live search, faceted multi-attribute filters (price range, brand, category, rating), interactive cart drawer with quantity adjustments, wishlist management, and simulated Stripe checkout validation.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Context API'],
    features: [
      'Interactive shopping cart drawer with local storage synchronization',
      'Dynamic multi-filter system (Price range, Category, Stock status)',
      'Product comparison matrix highlighting tech specifications',
      'Interactive customer review submission with star ratings',
      'Order summary calculation with coupon code discount logic'
    ],
    challenges: 'Coordinating complex cart state across nested components and ensuring instant UI updates while maintaining local storage consistency.',
    learnings: 'Structured robust client-side state architecture using useReducer and Context, alongside REST API contract design.',
    metrics: 'Sub-100ms instant filter response time with zero layout thrashing.',
    liveDemoUrl: 'https://ecommerce-store-maaz.vercel.app',
    githubUrl: 'https://github.com/vhoramaaz/ecommerce-mern-store',
    bannerColor: 'from-[#ff2a55]/20 via-[#170c2e]/40 to-[#00e5ff]/20',
    accentColor: 'red',
    previewType: 'ecommerce'
  },
  {
    id: 'airpods-experience',
    title: 'AirPods Product Showcase',
    tagline: 'Cinematic Apple-Style Interactive Experience',
    category: 'UI/UX & Clone',
    description: 'A cinematic product showcase featuring interactive video cards, spatial audio visualizer simulation, and immersive storytelling UI.',
    longDescription: 'An immersive digital product experience inspired by premium hardware launch sites. Highlights include interactive 360-degree rotation view scrubbers, sound-wave frequency visualizer canvas, dynamic feature breakdown tabs, and rich micro-interactions that trigger as you interact.',
    technologies: ['React.js', 'HTML5 Canvas', 'Tailwind CSS', 'Framer Motion', 'Web Audio API'],
    features: [
      'Interactive spatial audio visualizer with animated frequency bands',
      'Cinematic full-bleed hardware feature presentation sections',
      'Active Noise Cancellation (ANC) interactive simulation slider',
      'Smooth micro-interactions and magnetic cursor affordances',
      'Battery life and charging case interactive specs drawer'
    ],
    challenges: 'Synchronizing canvas frame animations with high refresh rates without spiking CPU usage on mobile devices.',
    learnings: 'Advanced canvas rendering optimization, requestAnimationFrame loops, and modern web audio frequency data visualization.',
    metrics: 'Fluid 60 FPS animations across modern desktop and mobile browsers.',
    liveDemoUrl: 'https://airpods-experience-maaz.vercel.app',
    githubUrl: 'https://github.com/vhoramaaz/airpods-product-experience',
    bannerColor: 'from-[#00e5ff]/20 via-[#170c2e]/40 to-[#ff2a55]/20',
    accentColor: 'blue',
    previewType: 'airpods'
  }
];

export const ORIGIN_STORY: OriginStep[] = [
  {
    step: '01',
    title: 'HTML & CSS',
    comicTag: 'THE SPARK',
    period: 'FOUNDATION PHASE',
    description: 'Where the journey ignited. Learned the core building blocks of the web: semantic document layout, CSS box model, responsive layouts, Flexbox, and Grid.',
    keyUnlocks: ['Semantic markup structure', 'CSS Flexbox & CSS Grid mastery', 'Media queries & responsive layouts'],
    techStack: ['HTML5', 'CSS3', 'Modern Flexbox', 'Grid']
  },
  {
    step: '02',
    title: 'JavaScript (ES6+)',
    comicTag: 'THE QUANTUM LEAP',
    period: 'LOGIC AWAKENING',
    description: 'Gaining control over DOM manipulation, event-driven programming, asynchronous execution with Promises & Async/Await, and array methods.',
    keyUnlocks: ['DOM manipulation & Event listeners', 'Async/Await & Fetch API', 'ES6+ Destructuring & Modules'],
    techStack: ['ES6+', 'Fetch API', 'DOM APIs', 'Local Storage']
  },
  {
    step: '03',
    title: 'React.js',
    comicTag: 'THE COMPONENT MULTIVERSE',
    period: 'FRAMEWORK INTEGRATION',
    description: 'Stepping into declarative UI architecture. Embracing single-page apps (SPAs), component lifecycles, hooks (useState, useEffect, useMemo), and state lifting.',
    keyUnlocks: ['Reusable component libraries', 'Custom Hooks & State architecture', 'Single Page Application routing'],
    techStack: ['React.js', 'JSX', 'Hooks', 'Context API']
  },
  {
    step: '04',
    title: 'Git & GitHub',
    comicTag: 'MULTIVERSE BRANCHING',
    period: 'COLLABORATION & VERSIONING',
    description: 'Mastered source code versioning, commit hygiene, branch isolation, pull request reviews, and public open-source contribution patterns.',
    keyUnlocks: ['Git branching & rebasing strategies', 'Conflict resolution workflows', 'Open-source repository hygiene'],
    techStack: ['Git CLI', 'GitHub', 'Markdown', 'Git Workflow']
  },
  {
    step: '05',
    title: 'Webpack & Tooling',
    comicTag: 'DIMENSION OPTIMIZATION',
    period: 'BUILD & ASSET PIPELINES',
    description: 'Demystifying the build process. Configuring asset loaders, code splitting, bundling minification, and transitioning toward Vite for rapid development.',
    keyUnlocks: ['Module bundling & chunking', 'Hot Module Replacement (HMR)', 'Asset compression & tree shaking'],
    techStack: ['Webpack', 'Vite', 'Babel', 'NPM Scripts']
  },
  {
    step: '06',
    title: 'Vercel Deployment',
    comicTag: 'CROSSING THE VOID',
    period: 'PRODUCTION DELIVERY',
    description: 'Bridging local code to global audiences. Automated continuous deployment (CI/CD), custom domain binding, environment secrets, and edge caching.',
    keyUnlocks: ['Automated GitHub CI/CD pipelines', 'Production environment variables', 'Edge CDN global distribution'],
    techStack: ['Vercel', 'CI/CD Pipelines', 'DNS & Domains']
  },
  {
    step: '07',
    title: 'The MERN Stack',
    comicTag: 'MASTER OF BOTH DIMENSIONS',
    period: 'FULL-STACK MATURITY',
    description: 'Unifying client and server. Building end-to-end applications with MongoDB databases, Express.js middleware, React frontends, and Node.js servers.',
    keyUnlocks: ['Full REST API contract engineering', 'MongoDB schema design with Mongoose', 'Full-stack authentication & CRUD'],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
  }
];

export const SERVICES_DATA: ServiceMission[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    missionCode: 'MISSION // FRONT-01',
    description: 'Architecting clean, scalable, and modular client-side interfaces using React.js and modern JavaScript standards.',
    deliverables: ['Custom React Component Architecture', 'Clean Code & State Management', 'High Performance 60fps UI', 'Cross-Browser Compatibility'],
    badge: 'CORE POWER'
  },
  {
    id: 'responsive',
    title: 'Responsive Websites',
    missionCode: 'MISSION // RESP-02',
    description: 'Crafting fluid web interfaces that seamlessly adapt across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
    deliverables: ['Mobile-First CSS Architecture', 'Fluid Typography & Scaling', 'Touch-Friendly Navigation', 'Zero Layout Shifts (CLS 0)'],
    badge: 'ADAPTIVE'
  },
  {
    id: 'react-apps',
    title: 'React Applications',
    missionCode: 'MISSION // REACT-03',
    description: 'Engineering interactive Single Page Applications (SPAs) with state-driven views, dynamic routing, and fast load times.',
    deliverables: ['React Router & State Context', 'Custom Hooks & Reusable Logic', 'Optimized Re-rendering', 'Fast Bundles with Vite'],
    badge: 'INTERACTIVE'
  },
  {
    id: 'interactive-ui',
    title: 'Interactive UI & UX',
    missionCode: 'MISSION // UX-04',
    description: 'Injecting life into websites with purposeful animations, subtle micro-interactions, modal transitions, and magnetic tactile feel.',
    deliverables: ['Framer Motion & CSS Animations', 'Micro-Interactions & Hover States', 'Accessible Focus Rings & ARIA', 'Modern Glassmorphic Visuals'],
    badge: 'CINEMATIC'
  },
  {
    id: 'landing-pages',
    title: 'High-Impact Landing Pages',
    missionCode: 'MISSION // LAND-05',
    description: 'Building high-converting, visually striking landing pages that captivate visitors, communicate value, and drive action.',
    deliverables: ['Compelling Hero Section Compositions', 'Clear Call-To-Action Architecture', 'Fast Core Web Vitals', 'SEO Metadata & OpenGraph Cards'],
    badge: 'CONVERSION'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Interfaces',
    missionCode: 'MISSION // COMM-06',
    description: 'Developing high-retention shopping experiences with product filters, interactive cart drawers, and frictionless checkout flows.',
    deliverables: ['Dynamic Product Grids & Filters', 'Real-Time Cart Drawer Logic', 'Product Variant Selectors', 'Checkout & Form Validations'],
    badge: 'FULL-COMMERCE'
  },
  {
    id: 'deployment',
    title: 'Website Deployment',
    missionCode: 'MISSION // DEPL-07',
    description: 'Connecting repositories to modern deployment networks on Vercel and Netlify with automated continuous integration.',
    deliverables: ['Automated GitHub to Vercel CI/CD', 'SSL Certificate & Domain Setup', 'Environment Secrets Security', 'Preview Branches for QA'],
    badge: 'PRODUCTION'
  },
  {
    id: 'ui-implementation',
    title: 'Figma to Code Implementation',
    missionCode: 'MISSION // IMPL-08',
    description: 'Translating design mockups and Figma frames into pixel-accurate, accessible, and responsive production React code.',
    deliverables: ['1:1 Design Precision Match', 'Component Tokenization', 'Responsive Breakpoint Translation', 'Clean CSS / Tailwind Classnames'],
    badge: 'PRECISION'
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'newsmonkey-react',
    description: 'Real-time category news application consuming live APIs with dynamic pagination and category filtering.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 12,
    forks: 4,
    url: 'https://github.com/vhoramaaz/newsmonkey-react',
    topics: ['react', 'api-integration', 'bootstrap', 'news-app']
  },
  {
    name: 'textutils-react',
    description: 'React text manipulation suite with live word counter, regex formatting, and speech synthesis.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 18,
    forks: 6,
    url: 'https://github.com/vhoramaaz/textutils-react',
    topics: ['react', 'text-utility', 'tailwind', 'speech-api']
  },
  {
    name: 'apple-store-clone',
    description: 'Faithful responsive reproduction of Apple’s online storefront interface with device specs selector.',
    language: 'HTML / CSS',
    languageColor: '#e34c26',
    stars: 24,
    forks: 8,
    url: 'https://github.com/vhoramaaz/apple-store-clone',
    topics: ['ui-clone', 'responsive-design', 'vanilla-js', 'modern-css']
  },
  {
    name: 'ecommerce-mern-store',
    description: 'Full-stack MERN shopping experience with dynamic catalog filters, interactive cart, and REST APIs.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 31,
    forks: 11,
    url: 'https://github.com/vhoramaaz/ecommerce-mern-store',
    topics: ['mern', 'mongodb', 'express', 'react', 'ecommerce']
  },
  {
    name: 'airpods-product-experience',
    description: 'Cinematic Apple-inspired product launch landing page featuring spatial audio frequency visualizer.',
    language: 'React',
    languageColor: '#61dafb',
    stars: 28,
    forks: 7,
    url: 'https://github.com/vhoramaaz/airpods-product-experience',
    topics: ['canvas-animation', 'product-page', 'framer-motion']
  },
  {
    name: 'spiderverse-portfolio',
    description: 'Modern, high-performance developer portfolio inspired by the Spider-Verse dimension aesthetic.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 45,
    forks: 14,
    url: 'https://github.com/vhoramaaz/spiderverse-portfolio',
    topics: ['portfolio', 'spiderverse', 'tailwind', 'motion', 'react']
  }
];
