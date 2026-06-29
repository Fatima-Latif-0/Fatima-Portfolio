/* ============================================================
   FATIMA PORTFOLIO — main.js  v3
   · Three.js galaxy (fixed z-index + alpha)
   · Unique canvas-drawn cursor (orbital scanner)
   · SVG icons everywhere, zero emoji
   · Contact page only — no form-submit module
   · Projects: no GitHub / Live Demo buttons
   ============================================================ */
'use strict';

/* ──────────────────────────────────────────────────────────
   SVG ICON LIBRARY
────────────────────────────────────────────────────────── */
const I = {
  code:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  css:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>`,
  js:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17c.5 1 1.5 1.5 2.5 1.5 1.5 0 2.5-1 2.5-2.5V11"/><path d="M14 11h4"/></svg>`,
  python:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 11.5 2 13.5S3 17 5 17h1v-2.5C6 12.5 7.5 11 9.5 11h5C16 11 17 10 17 8.5V7C17 4 15 2 12 2z"/><path d="M12 22c4 0 6-2 6-5v-2h-6v-1h7c2 0 3-1.5 3-3.5S21 7 19 7h-1v2.5C18 11.5 16.5 13 14.5 13h-5C8 13 7 14 7 15.5V19c0 3 2 3 5 3z"/><circle cx="9.5" cy="5.5" r="1" fill="currentColor"/><circle cx="14.5" cy="18.5" r="1" fill="currentColor"/></svg>`,
  sql:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v4c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4"/><path d="M4 14v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4"/></svg>`,
  arduino: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><line x1="10" y1="12" x2="14" y2="12"/><line x1="6" y1="4" x2="6" y2="7"/><line x1="10" y1="4" x2="10" y2="7"/><line x1="14" y1="4" x2="14" y2="7"/><line x1="18" y1="4" x2="18" y2="7"/></svg>`,
  canva:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>`,
  word:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13l1.5 5L12 14l1.5 4L15 13"/></svg>`,
  excel:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="21"/><line x1="16" y1="13" x2="8" y2="21"/></svg>`,
  ppt:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 8h3a2 2 0 010 4H9V8z"/></svg>`,
  comm:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  solve:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>`,
  team:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  sensor:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h2M20 12h2M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>`,
  robot:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M9 11V7a3 3 0 016 0v4"/><rect x="9" y="14" width="2" height="2" rx="1"/><rect x="13" y="14" width="2" height="2" rx="1"/><path d="M12 3v2M3 17h2M19 17h2"/></svg>`,
  atom:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
  web:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  chart:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  trophy:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 21h8M12 21v-4M7 4H4a2 2 0 00-2 2v1a5 5 0 005 5h1M17 4h3a2 2 0 012 2v1a5 5 0 01-5 5h-1"/><path d="M7 4h10v7a5 5 0 01-10 0V4z"/></svg>`,
  medal:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="14" r="7"/><path d="M8.21 3.61a2 2 0 011.58-.77h4.42a2 2 0 011.58.77l1.41 1.84A2 2 0 0119 7v0H5v0a2 2 0 01.8-1.59z"/><line x1="12" y1="11" x2="12" y2="14"/><line x1="12" y1="14" x2="14" y2="16"/></svg>`,
  star:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  arrow:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
};

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const SKILLS = [
  { name: 'HTML',          icon: 'code',    level: 85, cat: 'web',       label: 'Proficient' },
  { name: 'CSS',           icon: 'css',     level: 80, cat: 'web',       label: 'Proficient' },
  { name: 'JavaScript',    icon: 'js',      level: 60, cat: 'languages', label: 'Learning'   },
  { name: 'Python',        icon: 'python',  level: 50, cat: 'languages', label: 'Learning'   },
  { name: 'SQL',           icon: 'sql',     level: 40, cat: 'languages', label: 'Beginner'   },
  { name: 'Arduino IDE',   icon: 'arduino', level: 75, cat: 'hardware',  label: 'Solid'      },
  { name: 'Canva',         icon: 'canva',   level: 90, cat: 'tools',     label: 'Expert'     },
  { name: 'MS Word',       icon: 'word',    level: 95, cat: 'tools',     label: 'Expert'     },
  { name: 'MS Excel',      icon: 'excel',   level: 80, cat: 'tools',     label: 'Proficient' },
  { name: 'PowerPoint',    icon: 'ppt',     level: 88, cat: 'tools',     label: 'Expert'     },
  { name: 'Communication', icon: 'comm',    level: 95, cat: 'soft',      label: 'Expert'     },
  { name: 'Problem Solving',icon: 'solve',  level: 90, cat: 'soft',      label: 'Expert'     },
  { name: 'Teamwork',      icon: 'team',    level: 92, cat: 'soft',      label: 'Expert'     },
  { name: 'Sensors & GPIO',icon: 'sensor',  level: 70, cat: 'hardware',  label: 'Solid'      },
];

const PROJECTS = [
  {
    title: 'Gesture-Controlled Robotic Car',
    icon: 'robot',
    tags: ['Arduino', 'C++', 'Sensors', 'Robotics'],
    desc: 'Built a robotic car controlled by hand gestures using an Arduino microcontroller and accelerometer sensors. Presented at Science Expo 2025, explaining the design, coding logic, and real-time sensor feedback.',
  },
  {
    title: 'Physics Olympiad Toolkit',
    icon: 'atom',
    tags: ['Python', 'Physics', 'Problem Solving'],
    desc: 'A personal collection of simulation scripts and problem-solving frameworks used to prepare for the International Physics & Astronomy Olympiad. Covers mechanics, optics, and analytical methods.',
  },
  {
    title: 'Personal Portfolio v1',
    icon: 'web',
    tags: ['HTML', 'CSS', 'JavaScript'],
    desc: 'First iteration of my personal portfolio — hosted on GitHub Pages. Focused on clean layout, responsive design, and presenting academic and project work in a minimal aesthetic.',
  },
  {
    title: 'CEATS Assessment Prep System',
    icon: 'chart',
    tags: ['Excel', 'Problem Solving', 'Data'],
    desc: 'Designed a structured Excel-based study and tracking system to prepare for CEATS competitions — covering reasoning, quantitative analysis, and time management simulations.',
  },
];

const TIMELINE = [
  { date: '2026 — Upcoming', title: 'A-Levels at Beaconhouse', desc: 'Enrolling in Beaconhouse College Program, Wah Cantt — pursuing A-Levels toward a career in AI and Robotics engineering.' },
  { date: '2025', title: 'Science Expo — Robotics 1st Place', desc: 'Designed and presented a gesture-controlled robotic car. Secured 1st position, demonstrating hardware-software integration with Arduino.' },
  { date: '2025', title: 'International Physics & Astronomy Olympiad', desc: 'Competed in the preliminary round of an international-level Olympiad, applying advanced analytical physics frameworks.' },
  { date: '2025', title: 'Talent Hunt — 1st Position', desc: 'Won 1st position at the school Talent Hunt Competition for creativity, presentation skills, and performance under pressure.' },
  { date: '2024–2026', title: 'Matriculation (SSC-1) — Sir Syed School', desc: '98% score in the first phase. Served as Class Representative (CR) and elected Councillor.' },
  { date: '2024', title: 'CEATS Competition Participant', desc: 'Competed in a national academic assessment focused on critical thinking, reasoning, and problem-solving under timed conditions.' },
];

const ACHIEVEMENTS = [
  { icon: 'trophy', title: 'Science Exhibition Winner', desc: '1st Position at Science Expo 2025 — gesture-controlled robotic car, recognized for technical precision and presentation quality.', year: '2025' },
  { icon: 'medal',  title: 'Olympiad Medalist', desc: 'Medal for outstanding performance in the International Physics & Astronomy Olympiad.', year: '2025' },
  { icon: 'star',   title: 'High Achiever Award', desc: 'Recognized for consistently outstanding academic results, maintaining top scores across all subjects for multiple years.', year: 'Multiple Years' },
  { icon: 'trophy', title: 'Talent Hunt Champion', desc: '1st Position at the school Talent Hunt — praised for exceptional creativity, confidence, and stage presence.', year: '2025' },
];

const DEVLOGS = [
  {
    date: 'Jun 2025',
    title: 'Building the Gesture Car: Week 3 — Getting Sensors to Talk',
    preview: 'After two weeks of wiring headaches, the MPU-6050 finally communicates reliably over I2C. Here\'s what I learned about signal noise and pull-up resistors...',
    full: `After two full weeks of debugging wiring diagrams and re-soldering connections, the MPU-6050 accelerometer is finally transmitting stable data over I2C to the Arduino.\n\nThe main issue was electrical noise from the motor driver circuit coupling back into the sensor lines. The fix was simple: adding 4.7kΩ pull-up resistors on the SDA and SCL lines and routing sensor wiring away from motor power traces.\n\nI also learned that the raw gyroscope data needs a complementary filter to get smooth gesture recognition. The math involves blending two noisy signals into one stable estimate. Next week: writing the gesture classifier.`,
  },
  {
    date: 'May 2025',
    title: 'Olympiad Prep: My System for Solving Unfamiliar Physics Problems',
    preview: 'I developed a 4-step framework for attacking olympiad problems I\'ve never seen before. It\'s saved me more times than any formula sheet...',
    full: `Preparing for the Physics Olympiad taught me that memorizing formulas is the least effective strategy. Here is the 4-step framework I built:\n\n1. Identify the domain — mechanics, optics, thermodynamics, or electromagnetism? Even hybrid problems have a home domain.\n\n2. Draw the system — always. The diagram reveals constraints you would miss otherwise.\n\n3. List conserved quantities — energy, momentum, charge. Conservation laws eliminate variables faster than substitution.\n\n4. Non-dimensionalize — check units before evaluating numbers. Dimensional analysis catches 80% of algebraic errors.\n\nThis system got me through several problems I had never encountered before during the preliminary round.`,
  },
  {
    date: 'Apr 2025',
    title: 'CEATS Post-Mortem: What I Got Wrong and Why It Was Worth It',
    preview: 'I underestimated the time pressure. A brutally honest breakdown of where I lost points and what I\'d do differently...',
    full: `The CEATS Competition was genuinely challenging. The honest breakdown:\n\nWhat went wrong: I spent too long on the quantitative reasoning section's hardest problems and didn't leave enough buffer for the logic puzzles at the end. Classic exam strategy error.\n\nWhat I got right: The critical thinking section — identifying flaws in arguments — was actually my strongest area.\n\nWhat I would change: Practice full timed mock exams with zero interruptions. The cognitive load of the timer is a separate skill to train.\n\nWould I do it again? Absolutely. The experience was worth more than any preparation.`,
  },
  {
    date: 'Mar 2025',
    title: 'Why I Started Learning Python After Falling in Love With Arduino',
    preview: 'C++ on Arduino is fast and fun. But the moment I wanted to analyze sensor data on my laptop, I hit a wall...',
    full: `Arduino's C++ dialect is wonderful for real-time hardware control — fast, deterministic, close to the metal. But it is deliberately constrained: no standard library for data science, no easy plotting, no machine learning.\n\nThe moment I wanted to visualize gesture-recognition training data from my Science Expo project, I hit that wall. So I started learning Python.\n\nWhat surprised me: the two languages are not opposites. They are collaborators. Arduino collects and actuates; Python analyses and decides. The dream pipeline is: Arduino sensor feeds serial port, which feeds Python analysis, which sends commands back to Arduino.\n\nI am currently working through NumPy and Matplotlib. Next milestone: get a live sensor feed plotting in real-time on my laptop.`,
  },
];

/* ──────────────────────────────────────────────────────────
   LOADER
────────────────────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('loader');
  const lineEl = document.getElementById('loader-line');
  const texts  = ['INITIALIZING NEURAL INTERFACE...', 'LOADING PORTFOLIO SYSTEM...', 'CALIBRATING EXPERIENCE...', 'WELCOME, FATIMA'];
  let li = 0;
  const tick = () => { if (li < texts.length) { lineEl.textContent = texts[li++]; setTimeout(tick, 700); } };
  tick();
  setTimeout(() => loader.classList.add('done'), 3100);
})();

/* ──────────────────────────────────────────────────────────
   CANVAS CURSOR — Orbital Scanner
   A one-of-a-kind cursor drawn entirely on a 2D canvas:
   · Central precision cross-hair
   · Two counter-rotating arcs (orbital rings)
   · Animated sweep sector
   · Four corner bracket arms that expand on hover
   · Coordinate readout label
   · Particle trail that fades
────────────────────────────────────────────────────────── */
(function initCursor() {
  const dot = document.getElementById('cur-dot');
  const canvas = document.getElementById('cur-canvas');
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;            // ring lag position
  let hovered = false;
  let clicking = false;
  let t = 0;

  // Trail
  const trail = [];
  const TRAIL_MAX = 28;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    trail.push({ x: mx, y: my, age: 0 });
    if (trail.length > TRAIL_MAX) trail.shift();
  });

  document.querySelectorAll('a,button,.magnetic,.project-card,.devlog-item,.skill-module,.skill-cat-btn').forEach(el => {
    el.addEventListener('mouseenter', () => hovered = true);
    el.addEventListener('mouseleave', () => hovered = false);
  });
  document.addEventListener('mousedown', () => clicking = true);
  document.addEventListener('mouseup',   () => clicking = false);

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.025;

    // Smooth ring follow
    const lag = 0.11;
    rx += (mx - rx) * lag;
    ry += (my - ry) * lag;

    const CYAN   = '#00D4FF';
    const VIOLET = '#8B5CF6';
    const baseR  = hovered ? 34 : clicking ? 18 : 26;
    const outerR = baseR + 10;
    const alpha  = hovered ? 0.9 : 0.75;

    /* ── Trail ── */
    for (let i = 0; i < trail.length; i++) {
      trail[i].age++;
      const p = 1 - trail[i].age / TRAIL_MAX;
      if (p <= 0) continue;
      const r = p * 3;
      ctx.beginPath();
      ctx.arc(trail[i].x, trail[i].y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p * 0.35})`;
      ctx.fill();
    }

    /* ── Outer orbit ring (dashed, slow rotate) ── */
    ctx.save();
    ctx.translate(rx, ry);
    ctx.rotate(t * 0.4);
    ctx.beginPath();
    ctx.arc(0, 0, outerR, 0, Math.PI * 2);
    ctx.setLineDash([4, 6]);
    ctx.strokeStyle = `rgba(0,212,255,${alpha * 0.3})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    /* ── Inner ring (solid, counter-rotate) ── */
    ctx.save();
    ctx.translate(rx, ry);
    ctx.rotate(-t * 0.7);
    ctx.beginPath();
    ctx.arc(0, 0, baseR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0,212,255,${alpha * 0.55})`;
    ctx.lineWidth = 1;
    ctx.stroke();

    /* ── 4 tick marks on inner ring ── */
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2;
      const x1 = Math.cos(a) * baseR;
      const y1 = Math.sin(a) * baseR;
      const x2 = Math.cos(a) * (baseR + 6);
      const y2 = Math.sin(a) * (baseR + 6);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(0,212,255,${alpha * 0.8})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    ctx.restore();

    /* ── Sweep sector ── */
    const sweepStart = t * 1.8;
    const sweepEnd   = sweepStart + 1.2;
    ctx.save();
    ctx.translate(rx, ry);
    const grad = ctx.createConicalGradient
      ? null // fallback below
      : null;
    // Radial fade sector
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, baseR - 1, sweepStart, sweepEnd);
    ctx.closePath();
    const fillGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, baseR);
    fillGrad.addColorStop(0, `rgba(0,212,255,${hovered ? 0.22 : 0.12})`);
    fillGrad.addColorStop(1, 'rgba(0,212,255,0)');
    ctx.fillStyle = fillGrad;
    ctx.fill();
    ctx.restore();

    /* ── 4 corner bracket arms ── */
    const armLen  = hovered ? 16 : 10;
    const armGap  = outerR + 3;
    const corners = [
      [-1, -1, 1, 0, 0, 1],   // top-left: right then down
      [ 1, -1,-1, 0, 0, 1],   // top-right: left then down
      [-1,  1, 1, 0, 0,-1],   // bot-left:  right then up
      [ 1,  1,-1, 0, 0,-1],   // bot-right: left then up
    ];
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = `rgba(0,212,255,${alpha * 0.9})`;
    corners.forEach(([sx, sy, hx, hy, vx, vy]) => {
      const bx = rx + sx * armGap;
      const by = ry + sy * armGap;
      ctx.beginPath();
      ctx.moveTo(bx + hx * armLen, by);
      ctx.lineTo(bx, by);
      ctx.lineTo(bx, by + vy * armLen);
      ctx.stroke();
    });

    /* ── Center cross-hair ── */
    const chLen = clicking ? 4 : 6;
    ctx.strokeStyle = CYAN;
    ctx.lineWidth = 1;
    [-1, 1].forEach(d => {
      ctx.beginPath(); ctx.moveTo(rx + d * 2, ry); ctx.lineTo(rx + d * chLen, ry); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(rx, ry + d * 2); ctx.lineTo(rx, ry + d * chLen); ctx.stroke();
    });
    /* Center dot glow */
    ctx.beginPath();
    ctx.arc(rx, ry, clicking ? 1.5 : 2.5, 0, Math.PI * 2);
    ctx.fillStyle = CYAN;
    ctx.fill();

    /* ── Coordinate readout ── */
    if (!clicking) {
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillStyle = `rgba(0,212,255,${alpha * 0.55})`;
      ctx.fillText(`${Math.round(mx)},${Math.round(my)}`, rx + outerR + 5, ry - 4);
    }

    /* ── Violet accent dot on orbit (hovered only) ── */
    if (hovered) {
      const da = t * 2.2;
      ctx.beginPath();
      ctx.arc(rx + Math.cos(da) * outerR, ry + Math.sin(da) * outerR, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = VIOLET;
      ctx.shadowColor = VIOLET;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(drawFrame);
  }

  requestAnimationFrame(drawFrame);
})();

/* ──────────────────────────────────────────────────────────
   THREE.JS GALAXY BACKGROUND
   Key fix: renderer background is opaque (#05070A) so it
   shows up. The canvas sits at z-index:0, body bg matches.
────────────────────────────────────────────────────────── */
(function initThree() {
  // Wait until loader is gone so canvas is visible
  const bgCanvas = document.getElementById('bg-canvas');
  if (!bgCanvas || typeof THREE === 'undefined') return;

  let W = window.innerWidth, H = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas: bgCanvas, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(W, H);
  // Match body background — makes Three.js visible
  renderer.setClearColor(0x05070A, 1);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 2000);
  camera.position.z = 90;

  /* Stars */
  function makePoints(count, spread, size, c1hex, c2hex) {
    const geo  = new THREE.BufferGeometry();
    const pos  = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const c1   = new THREE.Color(c1hex);
    const c2   = new THREE.Color(c2hex);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * spread;
      pos[i*3+1] = (Math.random() - 0.5) * spread * 0.65;
      pos[i*3+2] = (Math.random() - 0.5) * spread * 0.8;
      const c = c1.clone().lerp(c2, Math.random());
      cols[i*3] = c.r; cols[i*3+1] = c.g; cols[i*3+2] = c.b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(cols, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({
      size, vertexColors: true, transparent: true,
      opacity: 0.92, sizeAttenuation: true, depthWrite: false,
    }));
  }

  const starField   = makePoints(5500, 700, 0.55, 0xffffff, 0x88BBFF);
  const cyanDust    = makePoints(1400, 450, 1.1,  0x00D4FF, 0x8B5CF6);
  const brightStars = makePoints(320,  550, 1.9,  0xffffff, 0x00D4FF);
  scene.add(starField, cyanDust, brightStars);

  /* Constellation lines */
  const lmat = new THREE.LineBasicMaterial({ color: 0x00D4FF, transparent: true, opacity: 0.06 });
  for (let c = 0; c < 22; c++) {
    const pts = [];
    const ox = (Math.random()-0.5)*340, oy = (Math.random()-0.5)*220, oz = (Math.random()-0.5)*220;
    for (let p = 0; p < 4; p++) pts.push(new THREE.Vector3(ox+(Math.random()-.5)*70, oy+(Math.random()-.5)*50, oz+(Math.random()-.5)*50));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lmat));
  }

  /* Nebula blobs */
  function nebula(x, y, z, r, col, op) {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 8, 8),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op, depthWrite: false, side: THREE.BackSide })
    );
    m.position.set(x, y, z); scene.add(m);
  }
  nebula(-90, 25, -130, 90, 0x00D4FF, 0.022);
  nebula(110, -35, -110, 70, 0x8B5CF6, 0.028);
  nebula( 20, 65, -160, 55, 0x004488, 0.018);

  /* Mouse parallax */
  let tMx = 0, tMy = 0, cMx = 0, cMy = 0;
  document.addEventListener('mousemove', e => {
    tMx = (e.clientX / W - 0.5) * 2;
    tMy = (e.clientY / H - 0.5) * 2;
  });
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.0018;
    cMx += (tMx - cMx) * 0.018;
    cMy += (tMy - cMy) * 0.018;
    starField.rotation.y   = t * 0.7  + cMx * 0.14;
    starField.rotation.x   = cMy * 0.07;
    cyanDust.rotation.y    = t * 0.45 + cMx * 0.18;
    cyanDust.rotation.x    = t * 0.25 + cMy * 0.09;
    brightStars.rotation.y = t * 1.1  + cMx * 0.1;
    camera.position.y      = -scrollY * 0.018;
    camera.lookAt(0, -scrollY * 0.018, 0);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    camera.aspect = W / H; camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
})();

/* ──────────────────────────────────────────────────────────
   NAVBAR
────────────────────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  const hamburger = document.getElementById('nav-hamburger');
  const mobile    = document.getElementById('nav-mobile');
  hamburger.addEventListener('click', () => mobile.classList.toggle('open'));
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
})();

/* ──────────────────────────────────────────────────────────
   MAGNETIC BUTTONS
────────────────────────────────────────────────────────── */
(function initMagnetic() {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.24}px,${(e.clientY-r.top-r.height/2)*0.24}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
})();

/* ──────────────────────────────────────────────────────────
   SCROLL REVEAL
────────────────────────────────────────────────────────── */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add('visible'), parseInt(e.target.dataset.delay || 0));
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
})();

/* ──────────────────────────────────────────────────────────
   HERO ROLE ROTATOR
────────────────────────────────────────────────────────── */
(function initRoles() {
  const roles = ['Computer Science Student','Robotics Enthusiast','Future AI Engineer','Physics Olympiad Competitor','Class Representative'];
  const el = document.getElementById('role-text');
  if (!el) return;
  let idx = 0, charI = 0, del = false;
  function tick() {
    const t = roles[idx];
    if (!del) {
      el.textContent = t.slice(0, ++charI);
      if (charI === t.length) { del = true; setTimeout(tick, 2200); return; }
    } else {
      el.textContent = t.slice(0, --charI);
      if (charI === 0) { del = false; idx = (idx+1) % roles.length; }
    }
    setTimeout(tick, del ? 38 : 72);
  }
  setTimeout(tick, 3300);
})();

/* ──────────────────────────────────────────────────────────
   STAT COUNTERS
────────────────────────────────────────────────────────── */
(function initCounters() {
  function easeOut(t) { return 1 - Math.pow(1-t, 3); }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = parseInt(el.dataset.target), dur = 1600, s = performance.now();
      const is98 = el.dataset.target === '98';
      (function step(now) {
        const p = Math.min((now-s)/dur, 1);
        el.textContent = Math.round(easeOut(p)*end) + (p===1 && is98 ? '%' : p===1 ? '+' : '');
        if (p < 1) requestAnimationFrame(step);
      })(s);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number').forEach(el => obs.observe(el));
})();

/* ──────────────────────────────────────────────────────────
   SKILLS
────────────────────────────────────────────────────────── */
(function initSkills() {
  const grid = document.getElementById('skills-grid');
  const btns = document.querySelectorAll('.skill-cat-btn');

  function buildGrid() {
    grid.innerHTML = '';
    SKILLS.forEach((sk, i) => {
      const m = document.createElement('div');
      m.className = 'skill-module reveal-up';
      m.dataset.cat = sk.cat;
      m.style.transitionDelay = (i * 38) + 'ms';
      m.innerHTML = `
        <div class="skill-icon">${I[sk.icon] || ''}</div>
        <span class="skill-name">${sk.name}</span>
        <div class="skill-level-bar"><div class="skill-level-fill" data-level="${sk.level}"></div></div>
        <span class="skill-level-text">${sk.label}</span>
      `;
      grid.appendChild(m);
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const bar = e.target.querySelector('.skill-level-fill');
        if (bar) bar.style.width = bar.dataset.level + '%';
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    grid.querySelectorAll('.skill-module').forEach(m => obs.observe(m));
  }

  buildGrid();

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      grid.querySelectorAll('.skill-module').forEach(m => {
        m.classList.toggle('hidden', cat !== 'all' && m.dataset.cat !== cat);
      });
    });
  });
})();

/* ──────────────────────────────────────────────────────────
   PROJECTS  (no GitHub / Live Demo buttons)
────────────────────────────────────────────────────────── */
(function initProjects() {
  const grid = document.getElementById('projects-grid');
  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal-up';
    card.style.transitionDelay = (i * 80) + 'ms';
    card.innerHTML = `
      <div class="project-thumb">
        <div class="project-thumb-icon">${I[p.icon] || ''}</div>
        <div class="project-thumb-glow"></div>
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
      </div>
    `;
    // 3D tilt
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y*7}deg) rotateY(${x*7}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    grid.appendChild(card);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.project-card').forEach(c => obs.observe(c));
})();

/* ──────────────────────────────────────────────────────────
   TIMELINE
────────────────────────────────────────────────────────── */
(function initTimeline() {
  const wrap = document.getElementById('timeline-wrap');
  TIMELINE.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal-left';
    div.style.transitionDelay = (i * 75) + 'ms';
    div.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-card">
        <div class="timeline-title">${item.title}</div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    wrap.appendChild(div);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  wrap.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
})();

/* ──────────────────────────────────────────────────────────
   ACHIEVEMENTS
────────────────────────────────────────────────────────── */
(function initAchievements() {
  const grid = document.getElementById('achievements-grid');
  ACHIEVEMENTS.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'achieve-card reveal-up';
    card.style.transitionDelay = (i * 80) + 'ms';
    card.innerHTML = `
      <div class="achieve-medal">${I[a.icon] || ''}</div>
      <div class="achieve-title">${a.title}</div>
      <p class="achieve-desc">${a.desc}</p>
      <span class="achieve-year">${a.year}</span>
    `;
    grid.appendChild(card);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.achieve-card').forEach(el => obs.observe(el));
})();

/* ──────────────────────────────────────────────────────────
   DEVLOGS + MODAL
────────────────────────────────────────────────────────── */
(function initDevlogs() {
  const list    = document.getElementById('devlogs-list');
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close');

  DEVLOGS.forEach((log, i) => {
    const item = document.createElement('div');
    item.className = 'devlog-item reveal-up';
    item.style.transitionDelay = (i * 60) + 'ms';
    item.innerHTML = `
      <span class="devlog-date">${log.date}</span>
      <div class="devlog-content">
        <div class="devlog-title">${log.title}</div>
        <p class="devlog-preview">${log.preview}</p>
      </div>
      <span class="devlog-arrow">${I.arrow}</span>
    `;
    item.addEventListener('click', () => {
      content.innerHTML = `
        <h2>${log.title}</h2>
        <span class="modal-meta">${log.date}</span>
        ${log.full.split('\n\n').map(p => `<p>${p}</p>`).join('')}
      `;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    list.appendChild(item);
  });

  function closeModal() { overlay.classList.remove('open'); document.body.style.overflow = ''; }
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  list.querySelectorAll('.devlog-item').forEach(el => obs.observe(el));
})();

/* ──────────────────────────────────────────────────────────
   CONTACT — opens mailto, no JS success state
────────────────────────────────────────────────────────── */
(function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('f-name').value;
    const email   = document.getElementById('f-email').value;
    const subject = document.getElementById('f-subject').value || 'Portfolio Inquiry';
    const message = document.getElementById('f-message').value;
    window.location.href = `mailto:fatimaalatiif@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + message)}`;
  });
})();

/* ──────────────────────────────────────────────────────────
   RESUME BUTTONS
────────────────────────────────────────────────────────── */
['download-resume','nav-resume-btn'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', e => { e.preventDefault(); alert('Replace this with your actual resume PDF URL.'); });
});

/* ──────────────────────────────────────────────────────────
   ACTIVE NAV ON SCROLL
────────────────────────────────────────────────────────── */
(function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--cyan)' : '';
      });
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
})();

/* ──────────────────────────────────────────────────────────
   HERO PARALLAX
────────────────────────────────────────────────────────── */
(function initParallax() {
  const hc   = document.querySelector('.hero-content');
  const orbs = document.querySelectorAll('.hero-orb');
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (hc) hc.style.transform = `translateY(${sy * 0.18}px)`;
    orbs.forEach((o, i) => { o.style.transform = `translateY(${sy * (0.08 + i * 0.04)}px)`; });
  }, { passive: true });
})();
