import './index.css';

// Project Database for Cinematic Modal & Simulators
const PROJECTS_DATA = {
  'news-monkey': {
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
    bannerGradient: 'from-[#ff2a55]/20 via-[#170c2e]/40 to-[#00e5ff]/20',
    type: 'news'
  },
  'text-utils': {
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
    bannerGradient: 'from-[#00e5ff]/20 via-[#170c2e]/40 to-[#a855f7]/20',
    type: 'textutils'
  },
  'apple-store-clone': {
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
    bannerGradient: 'from-[#a855f7]/20 via-[#0a0a12] to-[#00e5ff]/20',
    type: 'apple'
  },
  'ecommerce-storefront': {
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
    bannerGradient: 'from-[#ff2a55]/20 via-[#170c2e]/40 to-[#00e5ff]/20',
    type: 'ecommerce'
  },
  'airpods-experience': {
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
    bannerGradient: 'from-[#00e5ff]/20 via-[#170c2e]/40 to-[#ff2a55]/20',
    type: 'airpods'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initSpiderWebCanvas();
  initNavbar();
  initSkillsFilter();
  initProjectsFilter();
  initProjectModal();
  initGitHubHeatmap();
  initContactForm();
  initCopyEmail();
  initServicesRequest();
  initBackToTop();
});

// 1. Interactive Spider-Web Particle Canvas
function initSpiderWebCanvas() {
  const canvas = document.getElementById('spider-web-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const nodeCount = Math.min(50, Math.floor((width * height) / 28000));
  const nodes = [];
  const colors = ['#ff2a55', '#00e5ff', '#a855f7', '#38bdf8', '#f43f5e'];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.3,
    });
  }

  const mouse = { x: -1000, y: -1000, radius: 140, isActive: false };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    mouse.isActive = false;
  });

  const rings = [];
  window.addEventListener('click', (e) => {
    rings.push({
      x: e.clientX,
      y: e.clientY,
      radius: 10,
      maxRadius: 120,
      alpha: 0.8,
      color: Math.random() > 0.5 ? '#ff2a55' : '#00e5ff',
    });
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const maxDistance = 110;

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Render shockwave rings
    for (let r = rings.length - 1; r >= 0; r--) {
      const ring = rings[r];
      ring.radius += 3.5;
      ring.alpha -= 0.025;
      if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
        rings.splice(r, 1);
        continue;
      }
      ctx.save();
      ctx.beginPath();
      ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
      ctx.strokeStyle = ring.color;
      ctx.globalAlpha = ring.alpha;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.stroke();
      ctx.restore();
    }

    // Connect nodes
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;

      if (a.x < 0 || a.x > width) a.vx *= -1;
      if (a.y < 0 || a.y > height) a.vy *= -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.16;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = i % 2 === 0 ? `rgba(0, 229, 255, ${alpha})` : `rgba(255, 42, 85, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Mouse attraction web-shooter
      if (mouse.isActive) {
        const dx = a.x - mouse.x;
        const dy = a.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.4;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 42, 85, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          a.x -= dx * 0.015;
          a.y -= dy * 0.015;
        }
      }

      // Draw node
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
      ctx.fillStyle = a.color;
      ctx.globalAlpha = a.alpha;
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    requestAnimationFrame(render);
  }

  render();
}

// 2. Navbar Scrolling & Mobile Menu
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('bg-[#07070b]/90', 'backdrop-blur-md', 'border-[#241e3a]/60', 'py-3', 'shadow-2xl');
        navbar.classList.remove('bg-transparent', 'py-5');
      } else {
        navbar.classList.remove('bg-[#07070b]/90', 'backdrop-blur-md', 'border-[#241e3a]/60', 'py-3', 'shadow-2xl');
        navbar.classList.add('bg-transparent', 'py-5');
      }

      // Active Section Spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'github', 'contact'];
      const scrollPos = window.scrollY + 200;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (el && link) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('text-[#00e5ff]', 'font-semibold'));
            link.classList.add('text-[#00e5ff]', 'font-semibold');
          }
        }
      });
    }, { passive: true });
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// 3. Skills Category Filter
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => {
        b.classList.remove('bg-gradient-to-r', 'from-[#ff2a55]', 'to-[#dc2626]', 'text-white', 'shadow-lg');
        b.classList.add('text-[#8b8b9e]');
      });
      btn.classList.add('bg-gradient-to-r', 'from-[#ff2a55]', 'to-[#dc2626]', 'text-white', 'shadow-lg');
      btn.classList.remove('text-[#8b8b9e]');

      skillCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// 4. Projects Category Filter
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => {
        b.classList.remove('bg-gradient-to-r', 'from-[#ff2a55]', 'to-[#dc2626]', 'text-white', 'shadow-lg');
        b.classList.add('text-[#8b8b9e]');
      });
      btn.classList.add('bg-gradient-to-r', 'from-[#ff2a55]', 'to-[#dc2626]', 'text-white', 'shadow-lg');
      btn.classList.remove('text-[#8b8b9e]');

      projectCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// 5. Project Detail Modal with Spider-Verse Portal and Interactive Simulators
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalSecondaryClose = document.getElementById('modal-secondary-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  const openBtns = document.querySelectorAll('.open-project-btn');

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modal) return;

    // Fill Modal Data
    const categoryEl = document.getElementById('modal-category');
    const titleEl = document.getElementById('modal-title');
    const taglineEl = document.getElementById('modal-tagline');
    const longDescEl = document.getElementById('modal-long-desc');
    const metricsEl = document.getElementById('modal-metrics');
    const liveDemoBtn = document.getElementById('modal-live-demo');
    const githubBtn = document.getElementById('modal-github');
    const techArsenalEl = document.getElementById('modal-tech-arsenal');
    const featuresEl = document.getElementById('modal-features');
    const challengesEl = document.getElementById('modal-challenges');
    const learningsEl = document.getElementById('modal-learnings');

    if (categoryEl) categoryEl.textContent = `MISSION DOSSIER // ${data.category.toUpperCase()}`;
    if (titleEl) titleEl.textContent = data.title;
    if (taglineEl) taglineEl.textContent = data.tagline;
    if (longDescEl) longDescEl.textContent = data.longDescription;
    if (metricsEl) metricsEl.textContent = data.metrics;
    if (liveDemoBtn) liveDemoBtn.href = data.liveDemoUrl;
    if (githubBtn) githubBtn.href = data.githubUrl;
    if (challengesEl) challengesEl.textContent = data.challenges;
    if (learningsEl) learningsEl.textContent = data.learnings;

    // Render Tech Arsenal
    if (techArsenalEl) {
      techArsenalEl.innerHTML = data.technologies
        .map(
          (t) =>
            `<span class="text-xs font-code px-3 py-1 rounded-md bg-[#18112a] border border-[#2f224f] text-[#c9cbdc]">${t}</span>`
        )
        .join('');
    }

    // Render Features
    if (featuresEl) {
      featuresEl.innerHTML = data.features
        .map(
          (f) => `
          <div class="p-3 rounded-xl bg-[#130d24] border border-[#261a40] flex items-start gap-2.5">
            <span class="text-[#22c55e] text-sm leading-none mt-0.5">✓</span>
            <span class="text-xs text-[#d1d2e0] leading-relaxed">${f}</span>
          </div>
        `
        )
        .join('');
    }

    // Show appropriate interactive simulator
    renderInteractiveSimulator(data.type, data.title);

    // Reset Tabs
    switchModalTab('overview');

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project');
      if (id) openModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalSecondaryClose) modalSecondaryClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Modal Tab Switching
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      if (targetTab) switchModalTab(targetTab);
    });
  });

  function switchModalTab(tabName) {
    tabBtns.forEach((b) => {
      const name = b.getAttribute('data-tab');
      if (name === tabName) {
        b.classList.add('text-[#00e5ff]', 'border-[#00e5ff]');
        b.classList.remove('text-[#84849a]', 'border-transparent');
      } else {
        b.classList.remove('text-[#00e5ff]', 'border-[#00e5ff]');
        b.classList.add('text-[#84849a]', 'border-transparent');
      }
    });

    const panes = document.querySelectorAll('.modal-tab-pane');
    panes.forEach((pane) => {
      if (pane.id === `tab-${tabName}`) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    });
  }
}

// Render dynamic interactive simulator inside modal
function renderInteractiveSimulator(type, title) {
  const container = document.getElementById('interactive-simulator-container');
  if (!container) return;

  if (type === 'textutils') {
    container.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#110c22] border border-[#3b2a5c] space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white uppercase tracking-wider font-code">
            TextUtils Live Transformer
          </span>
          <button id="textutils-copy-btn" class="flex items-center gap-1.5 px-3 py-1 rounded bg-[#1e1438] hover:bg-[#ff2a55] text-xs text-white transition-colors cursor-pointer">
            <span>Copy Text</span>
          </button>
        </div>
        <textarea id="textutils-input" rows="4" class="w-full p-3 text-xs sm:text-sm bg-[#090613] border border-[#2b1f48] rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#00e5ff] font-code" placeholder="Enter text here to inspect...">With great code comes great responsibility. React, modern JavaScript and the MERN stack enable web developers to build ultra-fast responsive applications across multiple dimensions.</textarea>
        <div class="flex flex-wrap gap-2">
          <button id="btn-uppercase" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-[#00e5ff] hover:text-black text-white transition-colors cursor-pointer">UPPERCASE</button>
          <button id="btn-lowercase" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-[#00e5ff] hover:text-black text-white transition-colors cursor-pointer">lowercase</button>
          <button id="btn-clean-spaces" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-[#ff2a55] text-white transition-colors cursor-pointer">Remove Extra Spaces</button>
          <button id="btn-clear-text" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-red-700 text-white transition-colors cursor-pointer">Clear</button>
        </div>
        <div class="pt-3 border-t border-[#23183d] grid grid-cols-3 gap-2 text-center">
          <div class="p-2 rounded bg-[#090613]">
            <div id="stat-words" class="text-lg font-bold text-white font-code">0</div>
            <div class="text-[10px] text-[#7d7d95]">Words</div>
          </div>
          <div class="p-2 rounded bg-[#090613]">
            <div id="stat-chars" class="text-lg font-bold text-[#00e5ff] font-code">0</div>
            <div class="text-[10px] text-[#7d7d95]">Characters</div>
          </div>
          <div class="p-2 rounded bg-[#090613]">
            <div id="stat-read" class="text-lg font-bold text-[#ff2a55] font-code">0m</div>
            <div class="text-[10px] text-[#7d7d95]">Read Time</div>
          </div>
        </div>
      </div>
    `;

    // Hook up TextUtils events
    const input = document.getElementById('textutils-input');
    const statWords = document.getElementById('stat-words');
    const statChars = document.getElementById('stat-chars');
    const statRead = document.getElementById('stat-read');

    function updateStats() {
      const val = input.value;
      const words = val.trim() ? val.trim().split(/\s+/).length : 0;
      const chars = val.length;
      const read = Math.ceil(words / 200);

      if (statWords) statWords.textContent = words;
      if (statChars) statChars.textContent = chars;
      if (statRead) statRead.textContent = `${read}m`;
    }

    if (input) {
      input.addEventListener('input', updateStats);
      updateStats();
    }

    document.getElementById('btn-uppercase')?.addEventListener('click', () => {
      input.value = input.value.toUpperCase();
      updateStats();
    });
    document.getElementById('btn-lowercase')?.addEventListener('click', () => {
      input.value = input.value.toLowerCase();
      updateStats();
    });
    document.getElementById('btn-clean-spaces')?.addEventListener('click', () => {
      input.value = input.value.replace(/\s+/g, ' ').trim();
      updateStats();
    });
    document.getElementById('btn-clear-text')?.addEventListener('click', () => {
      input.value = '';
      updateStats();
    });
    document.getElementById('textutils-copy-btn')?.addEventListener('click', () => {
      navigator.clipboard.writeText(input.value);
      const btn = document.getElementById('textutils-copy-btn');
      btn.innerHTML = `<span class="text-[#22c55e]">✓ Copied!</span>`;
      setTimeout(() => {
        btn.innerHTML = `<span>Copy Text</span>`;
      }, 2000);
    });
  } else if (type === 'news') {
    container.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#110c22] border border-[#3b2a5c] space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white uppercase tracking-wider font-code">
            NewsMonkey Category Feed Stream
          </span>
          <div class="flex gap-1.5">
            <button class="news-cat-btn px-2.5 py-1 text-xs font-semibold rounded bg-[#ff2a55] text-white" data-cat="tech">Tech</button>
            <button class="news-cat-btn px-2.5 py-1 text-xs font-semibold rounded bg-[#1e153b] text-[#9393ad] hover:text-white" data-cat="biz">Business</button>
            <button class="news-cat-btn px-2.5 py-1 text-xs font-semibold rounded bg-[#1e153b] text-[#9393ad] hover:text-white" data-cat="sci">Science</button>
          </div>
        </div>
        <div id="news-feed-cards" class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
            <span class="text-[10px] font-code text-[#ff2a55] uppercase font-bold">TECH // LIVE WIRE</span>
            <h5 class="text-xs font-bold text-white mt-1">Vite 8 Released with Instant HMR & Module Pre-bundling</h5>
            <p class="text-[11px] text-[#808098] mt-1.5">Real-time news payload parsed from NewsAPI with asynchronous pagination handlers.</p>
          </div>
          <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
            <span class="text-[10px] font-code text-[#00e5ff] uppercase font-bold">TECH // TOP STORY</span>
            <h5 class="text-xs font-bold text-white mt-1">React 19 Server Components Transform Enterprise SPAs</h5>
            <p class="text-[11px] text-[#808098] mt-1.5">Filtered via React state hooks with memoized card lists to prevent layout shifts.</p>
          </div>
        </div>
      </div>
    `;

    const catBtns = document.querySelectorAll('.news-cat-btn');
    const newsCards = document.getElementById('news-feed-cards');

    catBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        catBtns.forEach((b) => {
          b.classList.remove('bg-[#ff2a55]', 'text-white');
          b.classList.add('bg-[#1e153b]', 'text-[#9393ad]');
        });
        btn.classList.add('bg-[#ff2a55]', 'text-white');
        btn.classList.remove('bg-[#1e153b]', 'text-[#9393ad]');

        const cat = btn.getAttribute('data-cat');
        if (cat === 'biz') {
          newsCards.innerHTML = `
            <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
              <span class="text-[10px] font-code text-[#ff2a55] uppercase font-bold">BUSINESS // MARKET BRIEF</span>
              <h5 class="text-xs font-bold text-white mt-1">Global Cloud Infrastructure Spending Surges 22% in 2026</h5>
              <p class="text-[11px] text-[#808098] mt-1.5">Enterprise migrations to edge networks accelerate across SaaS platforms.</p>
            </div>
            <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
              <span class="text-[10px] font-code text-[#00e5ff] uppercase font-bold">BUSINESS // COMMERCE</span>
              <h5 class="text-xs font-bold text-white mt-1">E-Commerce Platforms Adopt Edge Computing for Micro-Checkouts</h5>
              <p class="text-[11px] text-[#808098] mt-1.5">Lowering latency to sub-50ms directly converts into a 14% lift in conversions.</p>
            </div>
          `;
        } else if (cat === 'sci') {
          newsCards.innerHTML = `
            <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
              <span class="text-[10px] font-code text-[#ff2a55] uppercase font-bold">SCIENCE // ASTROPHYSICS</span>
              <h5 class="text-xs font-bold text-white mt-1">Deep Space Radio Array Detects Periodic Multiverse Echoes</h5>
              <p class="text-[11px] text-[#808098] mt-1.5">High-frequency cosmic signals confirm dimensional flux patterns.</p>
            </div>
            <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
              <span class="text-[10px] font-code text-[#00e5ff] uppercase font-bold">SCIENCE // QUANTUM</span>
              <h5 class="text-xs font-bold text-white mt-1">Quantum Coherence Breakthrough Stabilizes Room-Temp Qubits</h5>
              <p class="text-[11px] text-[#808098] mt-1.5">New atomic lattice architecture enables reliable quantum compute nodes.</p>
            </div>
          `;
        } else {
          newsCards.innerHTML = `
            <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
              <span class="text-[10px] font-code text-[#ff2a55] uppercase font-bold">TECH // LIVE WIRE</span>
              <h5 class="text-xs font-bold text-white mt-1">Vite 8 Released with Instant HMR & Module Pre-bundling</h5>
              <p class="text-[11px] text-[#808098] mt-1.5">Real-time news payload parsed from NewsAPI with asynchronous pagination handlers.</p>
            </div>
            <div class="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
              <span class="text-[10px] font-code text-[#00e5ff] uppercase font-bold">TECH // TOP STORY</span>
              <h5 class="text-xs font-bold text-white mt-1">React 19 Server Components Transform Enterprise SPAs</h5>
              <p class="text-[11px] text-[#808098] mt-1.5">Filtered via React state hooks with memoized card lists to prevent layout shifts.</p>
            </div>
          `;
        }
      });
    });
  } else {
    // Apple Store / E-commerce / AirPods Configurator
    container.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#110c22] border border-[#3b2a5c] space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white uppercase tracking-wider font-code">
            Hardware Variant Configurator
          </span>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#9d9db5]">Finish:</span>
            <div class="flex gap-1.5">
              <button class="color-dot w-6 h-6 rounded-full bg-slate-300 border-2 border-[#00e5ff] cursor-pointer" data-finish="Titanium Natural"></button>
              <button class="color-dot w-6 h-6 rounded-full bg-blue-700 border-2 border-transparent cursor-pointer" data-finish="Deep Blue"></button>
              <button class="color-dot w-6 h-6 rounded-full bg-stone-900 border-2 border-transparent cursor-pointer" data-finish="Space Black"></button>
            </div>
          </div>
        </div>
        <div class="p-6 rounded-xl bg-gradient-to-b from-[#090514] to-[#04020a] border border-[#2b1f48] flex flex-col items-center justify-center text-center">
          <div id="hardware-finish-label" class="text-xs font-code text-[#00e5ff] uppercase mb-1">
            COLOR PROFILE // TITANIUM NATURAL
          </div>
          <div class="font-display text-2xl text-white tracking-wide">
            ${title} Dynamic Frame
          </div>
          <p class="text-xs text-[#8f8fa7] max-w-md mt-2">
            Built with modern CSS variables, responsive SVG vectors, and vanilla JavaScript event listeners to switch styles instantly.
          </p>
        </div>
      </div>
    `;

    const colorDots = document.querySelectorAll('.color-dot');
    const label = document.getElementById('hardware-finish-label');

    colorDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        colorDots.forEach((d) => d.classList.replace('border-[#00e5ff]', 'border-transparent'));
        dot.classList.replace('border-transparent', 'border-[#00e5ff]');
        const finish = dot.getAttribute('data-finish');
        if (label) label.textContent = `COLOR PROFILE // ${finish.toUpperCase()}`;
      });
    });
  }
}

// 6. 52-Week GitHub Contribution Activity Heatmap
function initGitHubHeatmap() {
  const container = document.getElementById('github-heatmap-grid');
  const tooltipBar = document.getElementById('github-tooltip-info');
  if (!container) return;

  const totalDays = 52 * 7;
  const baseDate = new Date(2025, 9, 1);
  let html = '';

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + i);
    const dayOfWeek = d.getDay();

    let count = 0;
    const seed = (Math.sin(i * 12.3) + 1) / 2;
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      if (seed > 0.3) count = Math.floor(seed * 6) + 1;
      if (seed > 0.8) count = Math.floor(seed * 11) + 4;
    } else {
      if (seed > 0.6) count = Math.floor(seed * 5) + 1;
    }

    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    let colorClass = 'bg-[#120b22] border-[#1d1334]';
    if (count > 0 && count <= 2) colorClass = 'bg-[#291740] border-[#3f1f63]';
    else if (count <= 5) colorClass = 'bg-[#ff2a55]/40 border-[#ff2a55]/60';
    else if (count <= 8) colorClass = 'bg-[#ff2a55]/70 border-[#ff2a55]';
    else if (count > 8) colorClass = 'bg-[#00e5ff] border-[#38bdf8] shadow-[0_0_8px_rgba(0,229,255,0.7)]';

    html += `<div class="commit-cell w-3 h-3 rounded-[2px] border transition-transform hover:scale-150 cursor-pointer ${colorClass}" data-date="${dateStr}" data-count="${count}"></div>`;
  }

  container.innerHTML = html;

  container.querySelectorAll('.commit-cell').forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      const date = cell.getAttribute('data-date');
      const count = cell.getAttribute('data-count');
      if (tooltipBar) {
        tooltipBar.innerHTML = `<span class="text-[#00e5ff]">🎯 ${date} — <strong class="text-white">${count} commits</strong> logged</span>`;
      }
    });
    cell.addEventListener('mouseleave', () => {
      if (tooltipBar) {
        tooltipBar.innerHTML = `<span class="text-[#6d6d84]">Hover over any web coordinate for date & commit logs</span>`;
      }
    });
  });
}

// 7. Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contact-mission-form');
  const alertBox = document.getElementById('contact-success-alert');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value;
      const email = document.getElementById('contact-email')?.value;
      const subject = document.getElementById('contact-subject')?.value || `Portfolio Mission Request from ${name}`;
      const message = document.getElementById('contact-message')?.value;

      if (!name || !email || !message) return;

      const mailtoUrl = `mailto:vhoramaaz606@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      window.location.href = mailtoUrl;

      if (alertBox) {
        alertBox.classList.remove('hidden');
        setTimeout(() => {
          alertBox.classList.add('hidden');
          form.reset();
        }, 5000);
      }
    });
  }
}

// 8. One-Tap Copy Email
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('vhoramaaz606@gmail.com');
      copyBtn.innerHTML = `<span>✓ Copied</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = `<svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      }, 2000);
    });
  }
}

// 9. Services "Request Mission" Button pre-fill
function initServicesRequest() {
  const requestBtns = document.querySelectorAll('.request-service-btn');
  const subjectInput = document.getElementById('contact-subject');
  const contactSection = document.getElementById('contact');

  requestBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-service');
      if (subjectInput && service) {
        subjectInput.value = `Inquiry regarding ${service}`;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// 10. Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
