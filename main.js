/* ============================================================
   FATIMA PORTFOLIO — main.js  v5
   · Three.js: Deep Space Debris Field — DNA double helix +
     orbiting asteroid ring + wormhole tunnel + data streams
   · Devlogs section removed
   · Contact: info cards only, no form
   · Portrait initial: F only
   · Resume download: real href
   · Floating AI Assistant widget (ARIA)
   · All icons SVG, no emoji
   ============================================================ */
'use strict';

/* ── SVG ICONS ────────────────────────────────────────────── */
const I = {
  code:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  css:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>`,
  js:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17c.5 1 1.5 1.5 2.5 1.5 1.5 0 2.5-1 2.5-2.5V11"/><path d="M14 11h4"/></svg>`,
  python:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 11.5 2 13.5S3 17 5 17h1v-2.5C6 12.5 7.5 11 9.5 11h5C16 11 17 10 17 8.5V7C17 4 15 2 12 2z"/><path d="M12 22c4 0 6-2 6-5v-2h-6v-1h7c2 0 3-1.5 3-3.5S21 7 19 7h-1v2.5C18 11.5 16.5 13 14.5 13h-5C8 13 7 14 7 15.5V19c0 3 2 3 5 3z"/><circle cx="9.5" cy="5.5" r="1" fill="currentColor"/><circle cx="14.5" cy="18.5" r="1" fill="currentColor"/></svg>`,
  sql:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v4c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4"/><path d="M4 14v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4"/></svg>`,
  arduino: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
  canva:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`,
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
  medal:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="14" r="7"/><path d="M8.21 3.61a2 2 0 011.58-.77h4.42a2 2 0 011.58.77l1.41 1.84A2 2 0 0119 7H5a2 2 0 01.8-1.59z"/><line x1="12" y1="11" x2="12" y2="14"/><line x1="12" y1="14" x2="14" y2="16"/></svg>`,
  star:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  arrow:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  close:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  email:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
  phone:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  globe:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>`,
  pin:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  ai:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z"/><path d="M4 22v-1a8 8 0 0116 0v1"/><circle cx="12" cy="8" r="2" fill="currentColor" opacity="0.4"/><line x1="8" y1="14" x2="8" y2="16"/><line x1="16" y1="14" x2="16" y2="16"/><line x1="12" y1="15" x2="12" y2="17"/></svg>`,
  send:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  minimize:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
};

/* ── DATA ─────────────────────────────────────────────────── */
const SKILLS = [
  { name: 'HTML',           icon: 'code',    level: 85, cat: 'web',       label: 'Proficient' },
  { name: 'CSS',            icon: 'css',     level: 80, cat: 'web',       label: 'Proficient' },
  { name: 'JavaScript',     icon: 'js',      level: 60, cat: 'languages', label: 'Learning'   },
  { name: 'Python',         icon: 'python',  level: 50, cat: 'languages', label: 'Learning'   },
  { name: 'SQL',            icon: 'sql',     level: 40, cat: 'languages', label: 'Beginner'   },
  { name: 'Arduino IDE',    icon: 'arduino', level: 75, cat: 'hardware',  label: 'Solid'      },
  { name: 'Canva',          icon: 'canva',   level: 90, cat: 'tools',     label: 'Expert'     },
  { name: 'MS Word',        icon: 'word',    level: 95, cat: 'tools',     label: 'Expert'     },
  { name: 'MS Excel',       icon: 'excel',   level: 80, cat: 'tools',     label: 'Proficient' },
  { name: 'PowerPoint',     icon: 'ppt',     level: 88, cat: 'tools',     label: 'Expert'     },
  { name: 'Communication',  icon: 'comm',    level: 95, cat: 'soft',      label: 'Expert'     },
  { name: 'Problem Solving',icon: 'solve',   level: 90, cat: 'soft',      label: 'Expert'     },
  { name: 'Teamwork',       icon: 'team',    level: 92, cat: 'soft',      label: 'Expert'     },
  { name: 'Sensors & GPIO', icon: 'sensor',  level: 70, cat: 'hardware',  label: 'Solid'      },
];
const PROJECTS = [
  { title: 'Gesture-Controlled Robotic Car', icon: 'robot', tags: ['Arduino','C++','Sensors','Robotics'], desc: 'Built a robotic car controlled by hand gestures using an Arduino microcontroller and accelerometer sensors. Presented at Science Expo 2025, explaining design, coding, and real-time sensor feedback.' },
  { title: 'Physics Olympiad Toolkit',       icon: 'atom',  tags: ['Python','Physics','Problem Solving'], desc: 'A personal collection of simulation scripts and problem-solving frameworks for the International Physics & Astronomy Olympiad. Covers mechanics, optics, and analytical methods.' },
  { title: 'Personal Portfolio v1',          icon: 'web',   tags: ['HTML','CSS','JavaScript'], desc: 'First iteration of my personal portfolio hosted on GitHub Pages. Focused on clean layout, responsive design, and presenting academic and project work in a minimal aesthetic.' },
  { title: 'CEATS Assessment Prep System',   icon: 'chart', tags: ['Excel','Problem Solving','Data'], desc: 'A structured Excel-based study and tracking system for CEATS competitions — covering reasoning, quantitative analysis, and time management simulations.' },
];
const TIMELINE = [
  { date: '2026 — Upcoming', title: 'A-Levels at Beaconhouse', desc: 'Enrolling in Beaconhouse College Program, Wah Cantt — pursuing A-Levels toward a career in AI and Robotics engineering.' },
  { date: '2025', title: 'Science Expo — Robotics 1st Place', desc: 'Designed and presented a gesture-controlled robotic car. 1st position, demonstrating hardware-software integration with Arduino.' },
  { date: '2025', title: 'International Physics & Astronomy Olympiad', desc: 'Competed in the preliminary round applying advanced analytical physics frameworks.' },
  { date: '2025', title: 'Talent Hunt — 1st Position', desc: 'Won 1st position for creativity, presentation skills, and performance under pressure.' },
  { date: '2024–2026', title: 'Matriculation (SSC-1) — Sir Syed School', desc: '98% score. Served as Class Representative (CR) and elected Councillor.' },
  { date: '2024', title: 'CEATS Competition Participant', desc: 'National academic assessment focused on critical thinking, reasoning, and problem-solving under timed conditions.' },
];
const ACHIEVEMENTS = [
  { icon: 'trophy', title: 'Science Exhibition Winner',  desc: '1st Position at Science Expo 2025 — gesture-controlled robotic car recognized for technical precision and presentation.', year: '2025' },
  { icon: 'medal',  title: 'Olympiad Medalist',          desc: 'Medal for outstanding performance in the International Physics & Astronomy Olympiad.', year: '2025' },
  { icon: 'star',   title: 'High Achiever Award',        desc: 'Consistently outstanding academic results maintained across multiple years.', year: 'Multiple Years' },
  { icon: 'trophy', title: 'Talent Hunt Champion',       desc: '1st Position — exceptional creativity, confidence, and stage presence.', year: '2025' },
];

/* ── AI ASSISTANT RESPONSES ───────────────────────────────── */
const ARIA_RESPONSES = {
  default: ["I'm ARIA, Fatima's AI companion. Ask me anything about her work, skills, or background!", "I can tell you about Fatima's projects, awards, skills, or how to get in touch.", "Try asking: 'What projects has Fatima built?' or 'What are her skills?'"],
  project: ["Fatima's flagship project is a gesture-controlled robotic car built with Arduino and accelerometer sensors — it won 1st place at Science Expo 2025.", "She's also built a Physics Olympiad toolkit with Python for simulation and problem-solving. Every project starts with a hardware-software integration challenge.", "Her projects span robotics, physics simulations, and web development. The gesture car is the most technically demanding one so far."],
  skill:   ["Fatima's strongest technical skills are Arduino IDE, HTML/CSS, and Canva. She's currently levelling up in Python and JavaScript.", "On the hardware side she works with sensors, GPIO, and Arduino. On the software side: web development and data tools like Excel.", "Her soft skills — communication, problem-solving, teamwork — score 90%+ and are honestly what make her stand out in competitions."],
  award:   ["Fatima has won 1st place twice in 2025 — Science Expo (robotics) and the school Talent Hunt. She also holds an Olympiad medal.", "The High Achiever Award recognizes her consistently outstanding academic performance across multiple years — not just a one-time thing.", "4 major awards: Science Exhibition Winner, Olympiad Medalist, High Achiever, and Talent Hunt Champion. All earned by 2025."],
  contact: ["You can reach Fatima at fatimaalatiif@gmail.com — she's open to collaborations and internship opportunities.", "Fatima is based in Wah Cantt, Punjab, Pakistan. She's actively looking for opportunities in AI, robotics, and tech.", "Best way to reach her: email fatimaalatiif@gmail.com or call +92 321 5076468."],
  education:["Fatima scored 98% in SSC-1 at Sir Syed School and is about to start A-Levels at Beaconhouse College, Wah Cantt.", "She's on the path to study AI and Robotics engineering. A-Levels at Beaconhouse start in 2026.", "Education: currently finishing Matriculation (2024–2026) with a 98% score, then A-Levels focused on Physics and Computer Science."],
};

function ariaReply(msg) {
  const m = msg.toLowerCase();
  if (m.match(/project|robot|car|arduino|build|gesture/))  return pick(ARIA_RESPONSES.project);
  if (m.match(/skill|tech|python|html|css|excel|language/)) return pick(ARIA_RESPONSES.skill);
  if (m.match(/award|win|trophy|medal|achiev|prize/))      return pick(ARIA_RESPONSES.award);
  if (m.match(/contact|email|reach|hire|collab|phone/))    return pick(ARIA_RESPONSES.contact);
  if (m.match(/school|education|study|degree|beaconhouse|level/)) return pick(ARIA_RESPONSES.education);
  return pick(ARIA_RESPONSES.default);
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ══════════════════════════════════════════════════════════
   LOADER
══════════════════════════════════════════════════════════ */
(function initLoader() {
  const loader = document.getElementById('loader');
  const lineEl = document.getElementById('loader-line');
  const texts  = ['INITIALIZING NEURAL INTERFACE...','LOADING PORTFOLIO SYSTEM...','CALIBRATING EXPERIENCE...','WELCOME, FATIMA'];
  let li = 0;
  const tick = () => { if (li < texts.length) { lineEl.textContent = texts[li++]; setTimeout(tick, 700); } };
  tick();
  setTimeout(() => loader.classList.add('done'), 3100);
})();

/* ══════════════════════════════════════════════════════════
   CANVAS CURSOR — Orbital Scanner
══════════════════════════════════════════════════════════ */
(function initCursor() {
  const dot    = document.getElementById('cur-dot');
  const canvas = document.getElementById('cur-canvas');
  const ctx    = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let rx = mx, ry = my, hovered = false, clicking = false, t = 0;
  const trail = [];
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
    trail.push({ x:mx, y:my, age:0 });
    if (trail.length > 26) trail.shift();
  });
  document.querySelectorAll('a,button,.magnetic,.project-card,.skill-module,.skill-cat-btn,.aria-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => hovered = true);
    el.addEventListener('mouseleave', () => hovered = false);
  });
  document.addEventListener('mousedown', () => clicking = true);
  document.addEventListener('mouseup',   () => clicking = false);
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.025;
    rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
    const baseR=hovered?34:clicking?18:26, outerR=baseR+10, a=hovered?0.9:0.75;
    for (let i=0;i<trail.length;i++) {
      trail[i].age++;
      const p=1-trail[i].age/26;
      if(p<=0)continue;
      ctx.beginPath(); ctx.arc(trail[i].x,trail[i].y,p*2.5,0,Math.PI*2);
      ctx.fillStyle=`rgba(0,212,255,${p*0.3})`; ctx.fill();
    }
    ctx.save(); ctx.translate(rx,ry); ctx.rotate(t*0.4);
    ctx.beginPath(); ctx.arc(0,0,outerR,0,Math.PI*2);
    ctx.setLineDash([4,6]); ctx.strokeStyle=`rgba(0,212,255,${a*0.3})`; ctx.lineWidth=0.8; ctx.stroke();
    ctx.setLineDash([]); ctx.restore();
    ctx.save(); ctx.translate(rx,ry); ctx.rotate(-t*0.7);
    ctx.beginPath(); ctx.arc(0,0,baseR,0,Math.PI*2);
    ctx.strokeStyle=`rgba(0,212,255,${a*0.55})`; ctx.lineWidth=1; ctx.stroke();
    for(let k=0;k<4;k++){const ang=(k/4)*Math.PI*2;ctx.beginPath();ctx.moveTo(Math.cos(ang)*baseR,Math.sin(ang)*baseR);ctx.lineTo(Math.cos(ang)*(baseR+6),Math.sin(ang)*(baseR+6));ctx.strokeStyle=`rgba(0,212,255,${a*0.8})`;ctx.lineWidth=1.2;ctx.stroke();}
    ctx.restore();
    const sw=t*1.8;
    ctx.save(); ctx.translate(rx,ry);
    ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0,0,baseR-1,sw,sw+1.2); ctx.closePath();
    const g=ctx.createRadialGradient(0,0,0,0,0,baseR);
    g.addColorStop(0,`rgba(0,212,255,${hovered?0.22:0.12})`); g.addColorStop(1,'rgba(0,212,255,0)');
    ctx.fillStyle=g; ctx.fill(); ctx.restore();
    const aLen=hovered?16:10, aGap=outerR+3;
    ctx.lineWidth=1.5; ctx.strokeStyle=`rgba(0,212,255,${a*0.9})`;
    [[-1,-1,1,0,0,1],[1,-1,-1,0,0,1],[-1,1,1,0,0,-1],[1,1,-1,0,0,-1]].forEach(([sx,sy,hx,hy,vx,vy])=>{
      const bx=rx+sx*aGap,by=ry+sy*aGap;
      ctx.beginPath(); ctx.moveTo(bx+hx*aLen,by); ctx.lineTo(bx,by); ctx.lineTo(bx,by+vy*aLen); ctx.stroke();
    });
    const ch=clicking?4:6; ctx.strokeStyle='#00D4FF'; ctx.lineWidth=1;
    [-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(rx+d*2,ry);ctx.lineTo(rx+d*ch,ry);ctx.stroke();ctx.beginPath();ctx.moveTo(rx,ry+d*2);ctx.lineTo(rx,ry+d*ch);ctx.stroke();});
    ctx.beginPath(); ctx.arc(rx,ry,clicking?1.5:2.5,0,Math.PI*2); ctx.fillStyle='#00D4FF'; ctx.fill();
    if(!clicking){ctx.font='9px "Space Mono",monospace';ctx.fillStyle=`rgba(0,212,255,${a*0.5})`;ctx.fillText(`${Math.round(mx)},${Math.round(my)}`,rx+outerR+5,ry-4);}
    if(hovered){const da=t*2.2;ctx.beginPath();ctx.arc(rx+Math.cos(da)*outerR,ry+Math.sin(da)*outerR,2.5,0,Math.PI*2);ctx.fillStyle='#8B5CF6';ctx.shadowColor='#8B5CF6';ctx.shadowBlur=8;ctx.fill();ctx.shadowBlur=0;}
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

/* ══════════════════════════════════════════════════════════
   THREE.JS — DEEP SPACE SCENE
   · Wormhole tunnel (torus knot spiral)
   · DNA double helix structure
   · Asteroid debris ring
   · Floating data stream particles
   · Star field backdrop
   · Mouse: camera lean + depth shift
══════════════════════════════════════════════════════════ */
(function initThree() {
  const bgCanvas = document.getElementById('bg-canvas');
  if (!bgCanvas || typeof THREE === 'undefined') return;
  let W = window.innerWidth, H = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas: bgCanvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(W, H);
  renderer.setClearColor(0x05070A, 1);

  const scene  = new THREE.Scene();
  scene.fog    = new THREE.FogExp2(0x05070A, 0.009);

  const camera = new THREE.PerspectiveCamera(65, W/H, 0.1, 1200);
  camera.position.set(0, 8, 55);
  camera.lookAt(0, 0, 0);

  /* ── 1. STAR FIELD ── */
  (function() {
    const count = 3000;
    const geo   = new THREE.BufferGeometry();
    const pos   = new Float32Array(count * 3);
    const cols  = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random()-0.5)*900;
      pos[i*3+1] = (Math.random()-0.5)*500;
      pos[i*3+2] = (Math.random()-0.5)*900;
      const c = new THREE.Color().setHSL(Math.random()>0.7?0.55:0.62, 0.4, 0.7+Math.random()*0.3);
      cols[i*3]=c.r; cols[i*3+1]=c.g; cols[i*3+2]=c.b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos,3));
    geo.setAttribute('color',    new THREE.BufferAttribute(cols,3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size:0.45, vertexColors:true, transparent:true, opacity:0.85, sizeAttenuation:true, depthWrite:false })));
  })();

  /* ── 2. WORMHOLE TUNNEL — torus knots stacked ── */
  const tunnelGroup = new THREE.Group();
  tunnelGroup.position.set(0, 0, -80);
  scene.add(tunnelGroup);
  const TUNNEL_RINGS = 60;
  const tunnelRings = [];
  for (let i = 0; i < TUNNEL_RINGS; i++) {
    const t_norm = i / TUNNEL_RINGS;
    const radius = 18 + Math.sin(t_norm * Math.PI * 3) * 4;
    const geo    = new THREE.TorusGeometry(radius, 0.08, 4, 72);
    const hue    = 0.55 + t_norm * 0.2;
    const mat    = new THREE.MeshBasicMaterial({
      color: new THREE.Color().setHSL(hue, 0.9, 0.55),
      transparent: true,
      opacity: 0.12 + Math.sin(t_norm * Math.PI) * 0.1,
    });
    const ring = new THREE.Mesh(geo, mat);
    ring.position.z = i * 2.8 - TUNNEL_RINGS * 1.4;
    ring.rotation.z = i * 0.12;
    tunnelGroup.add(ring);
    tunnelRings.push({ mesh: ring, baseZ: ring.position.z, baseRotZ: i * 0.12 });
  }

  /* ── 3. DNA DOUBLE HELIX — two interleaved helices ── */
  const dnaGroup = new THREE.Group();
  dnaGroup.position.set(-38, 0, -30);
  scene.add(dnaGroup);

  const DNA_STEPS = 80;
  const helix1Pts = [], helix2Pts = [];
  for (let i = 0; i < DNA_STEPS; i++) {
    const angle  = (i / DNA_STEPS) * Math.PI * 8;
    const y      = (i / DNA_STEPS) * 60 - 30;
    const radius = 5;
    helix1Pts.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    helix2Pts.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius));
  }
  const h1Geo = new THREE.BufferGeometry().setFromPoints(helix1Pts);
  const h2Geo = new THREE.BufferGeometry().setFromPoints(helix2Pts);
  dnaGroup.add(new THREE.Line(h1Geo, new THREE.LineBasicMaterial({ color: 0x00D4FF, transparent: true, opacity: 0.5 })));
  dnaGroup.add(new THREE.Line(h2Geo, new THREE.LineBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.5 })));

  // Rungs between the two strands
  for (let i = 0; i < DNA_STEPS; i += 4) {
    const rGeo = new THREE.BufferGeometry().setFromPoints([helix1Pts[i], helix2Pts[i]]);
    const col  = i % 8 === 0 ? 0x00D4FF : 0x8B5CF6;
    dnaGroup.add(new THREE.Line(rGeo, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.25 })));
    // Sphere node on each strand
    [helix1Pts[i], helix2Pts[i]].forEach((pt, si) => {
      const sg  = new THREE.SphereGeometry(0.25, 6, 6);
      const sm  = new THREE.MeshBasicMaterial({ color: si===0?0x00D4FF:0x8B5CF6, transparent:true, opacity:0.7 });
      const sph = new THREE.Mesh(sg, sm);
      sph.position.copy(pt);
      dnaGroup.add(sph);
    });
  }

  /* ── 4. ASTEROID DEBRIS RING ── */
  const asteroidGroup = new THREE.Group();
  asteroidGroup.position.set(32, -5, -45);
  scene.add(asteroidGroup);

  const ASTEROID_COUNT = 180;
  const asteroidMeshes = [];
  const asteroidGeo    = new THREE.IcosahedronGeometry(1, 0);
  for (let i = 0; i < ASTEROID_COUNT; i++) {
    const angle = (i / ASTEROID_COUNT) * Math.PI * 2;
    const spread = (Math.random()-0.5) * 8;
    const r      = 18 + Math.random() * 6;
    const scale  = 0.08 + Math.random() * 0.35;
    const mat    = new THREE.MeshBasicMaterial({
      color: Math.random() > 0.4 ? 0x00D4FF : 0x8B5CF6,
      wireframe: true, transparent: true, opacity: 0.2 + Math.random()*0.25,
    });
    const m = new THREE.Mesh(asteroidGeo, mat);
    m.position.set(Math.cos(angle)*r, spread*0.5, Math.sin(angle)*r);
    m.scale.setScalar(scale);
    m.userData = { angle, r, speed: 0.001 + Math.random()*0.003, tiltX: Math.random()*Math.PI, tiltY: Math.random()*Math.PI };
    asteroidGroup.add(m);
    asteroidMeshes.push(m);
  }

  /* ── 5. FLOATING DATA STREAM PARTICLES ── */
  const dataGroup = new THREE.Group();
  scene.add(dataGroup);
  const DATA_COUNT = 300;
  const dataGeo    = new THREE.BufferGeometry();
  const dataPos    = new Float32Array(DATA_COUNT * 3);
  const dataVel    = [];
  for (let i = 0; i < DATA_COUNT; i++) {
    dataPos[i*3]   = (Math.random()-0.5)*120;
    dataPos[i*3+1] = (Math.random()-0.5)*80;
    dataPos[i*3+2] = (Math.random()-0.5)*80;
    dataVel.push({ vx:(Math.random()-.5)*0.04, vy:(Math.random()-.5)*0.02+0.015, vz:(Math.random()-.5)*0.02 });
  }
  dataGeo.setAttribute('position', new THREE.BufferAttribute(dataPos, 3));
  const dataPoints = new THREE.Points(dataGeo, new THREE.PointsMaterial({
    color: 0x00D4FF, size: 0.55, transparent: true, opacity: 0.55, sizeAttenuation: true, depthWrite: false,
  }));
  dataGroup.add(dataPoints);

  /* ── 6. CENTRAL WIREFRAME ICOSAHEDRON — slowly rotating ── */
  const coreGeo = new THREE.IcosahedronGeometry(7, 1);
  const coreMat = new THREE.MeshBasicMaterial({ color:0x00D4FF, wireframe:true, transparent:true, opacity:0.07 });
  const core    = new THREE.Mesh(coreGeo, coreMat);
  core.position.set(0, 0, -10);
  scene.add(core);

  /* Inner solid glow sphere */
  const glowGeo = new THREE.SphereGeometry(5, 16, 16);
  const glowMat = new THREE.MeshBasicMaterial({ color:0x001a2e, transparent:true, opacity:0.9 });
  scene.add(new THREE.Mesh(glowGeo, glowMat));

  /* ── MOUSE PARALLAX ── */
  let tMx=0, tMy=0, cMx=0, cMy=0;
  document.addEventListener('mousemove', e => { tMx=(e.clientX/W-.5); tMy=(e.clientY/H-.5); });
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  /* ── ANIMATION LOOP ── */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.007;
    cMx += (tMx-cMx)*0.018; cMy += (tMy-cMy)*0.018;

    // Camera
    camera.position.x  = cMx * 8;
    camera.position.y  = 8 + cMy * -3 - scrollY * 0.008;
    camera.lookAt(cMx * 3, cMy * -1.5, 0);

    // Wormhole tunnel: slow rotation per ring, drift toward camera then reset
    tunnelRings.forEach((r, i) => {
      r.mesh.rotation.z = r.baseRotZ + t * (0.1 + i * 0.001);
      let nz = r.mesh.position.z + 0.05;
      if (nz > TUNNEL_RINGS * 1.4 * 0.5) nz = r.baseZ;
      r.mesh.position.z = nz;
      r.mesh.material.opacity = 0.05 + Math.sin(t * 0.5 + i * 0.15) * 0.08;
    });

    // DNA helix: gentle sway
    dnaGroup.rotation.y = t * 0.18 + Math.sin(t*0.3) * 0.15;
    dnaGroup.position.y = Math.sin(t * 0.22) * 3;

    // Asteroid ring: orbit
    asteroidMeshes.forEach(m => {
      m.userData.angle += m.userData.speed;
      const a = m.userData.angle, r = m.userData.r;
      m.position.x = Math.cos(a)*r;
      m.position.z = Math.sin(a)*r;
      m.rotation.x += 0.008; m.rotation.y += 0.012;
    });
    asteroidGroup.rotation.y = t * 0.04;

    // Data stream: drift upward, wrap
    const dp = dataGeo.attributes.position.array;
    for (let i = 0; i < DATA_COUNT; i++) {
      dp[i*3]   += dataVel[i].vx;
      dp[i*3+1] += dataVel[i].vy;
      dp[i*3+2] += dataVel[i].vz;
      if (dp[i*3+1] > 50)  dp[i*3+1] = -50;
      if (dp[i*3]   > 70)  dp[i*3]   = -70;
      if (dp[i*3]   < -70) dp[i*3]   =  70;
    }
    dataGeo.attributes.position.needsUpdate = true;

    // Core icosahedron spin
    core.rotation.x += 0.003; core.rotation.y += 0.005;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    W=window.innerWidth; H=window.innerHeight;
    camera.aspect=W/H; camera.updateProjectionMatrix(); renderer.setSize(W,H);
  });
})();

/* ══════════════════════════════════════════════════════════
   AI ASSISTANT — ARIA
══════════════════════════════════════════════════════════ */
(function initAria() {
  // Build the widget DOM
  const widget = document.createElement('div');
  widget.id = 'aria-widget';
  widget.innerHTML = `
    <div id="aria-bubble" class="aria-bubble" title="Chat with ARIA">
      <div class="aria-orb">
        <div class="aria-orb-ring r1"></div>
        <div class="aria-orb-ring r2"></div>
        <div class="aria-orb-ring r3"></div>
        <div class="aria-orb-icon">${I.ai}</div>
      </div>
      <span class="aria-label">ARIA</span>
      <span class="aria-pulse"></span>
    </div>
    <div id="aria-panel" class="aria-panel">
      <div class="aria-header">
        <div class="aria-hinfo">
          <div class="aria-avatar">${I.ai}</div>
          <div>
            <div class="aria-name">ARIA</div>
            <div class="aria-status"><span class="aria-dot"></span>AI Online</div>
          </div>
        </div>
        <button class="aria-min" id="aria-min" title="Minimize">${I.minimize}</button>
      </div>
      <div class="aria-messages" id="aria-messages"></div>
      <div class="aria-input-row">
        <input type="text" id="aria-input" placeholder="Ask me about Fatima..." autocomplete="off"/>
        <button id="aria-send" class="aria-send-btn">${I.send}</button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  const bubble   = document.getElementById('aria-bubble');
  const panel    = document.getElementById('aria-panel');
  const msgs     = document.getElementById('aria-messages');
  const input    = document.getElementById('aria-input');
  const sendBtn  = document.getElementById('aria-send');
  const minBtn   = document.getElementById('aria-min');
  let open = false;

  function addMsg(text, who) {
    const d = document.createElement('div');
    d.className = `aria-msg aria-msg-${who}`;
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function greet() {
    setTimeout(() => addMsg("Hi! I'm ARIA — Fatima's AI companion. Ask me about her projects, skills, or how to reach her.", 'bot'), 400);
  }

  function send() {
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    const thinkingEl = document.createElement('div');
    thinkingEl.className = 'aria-msg aria-msg-bot aria-thinking';
    thinkingEl.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(thinkingEl);
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(() => {
      thinkingEl.remove();
      addMsg(ariaReply(val), 'bot');
    }, 900 + Math.random()*400);
  }

  bubble.addEventListener('click', () => {
    open = !open;
    panel.classList.toggle('open', open);
    if (open && msgs.childElementCount === 0) greet();
  });
  minBtn.addEventListener('click', () => { open = false; panel.classList.remove('open'); });
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  // Quick reply chips
  setTimeout(() => {
    if (msgs.childElementCount > 0) {
      const chips = document.createElement('div');
      chips.className = 'aria-chips';
      ['Projects', 'Skills', 'Awards', 'Contact'].forEach(label => {
        const btn = document.createElement('button');
        btn.className = 'aria-chip';
        btn.textContent = label;
        btn.addEventListener('click', () => { input.value = label; send(); chips.remove(); });
        chips.appendChild(btn);
      });
      msgs.appendChild(chips);
      msgs.scrollTop = msgs.scrollHeight;
    }
  }, 1600);
})();

/* ══════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════ */
(function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive:true });
  const hamburger = document.getElementById('nav-hamburger');
  const mobile    = document.getElementById('nav-mobile');
  hamburger.addEventListener('click', () => mobile.classList.toggle('open'));
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
})();

/* ══════════════════════════════════════════════════════════
   MAGNETIC
══════════════════════════════════════════════════════════ */
(function initMagnetic() {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => { const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.24}px,${(e.clientY-r.top-r.height/2)*0.24}px)`; });
    el.addEventListener('mouseleave', () => { el.style.transform=''; });
  });
})();

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(!e.isIntersecting)return; setTimeout(()=>e.target.classList.add('visible'),parseInt(e.target.dataset.delay||0)); obs.unobserve(e.target); });
  }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));
})();

/* ══════════════════════════════════════════════════════════
   ROLE ROTATOR
══════════════════════════════════════════════════════════ */
(function initRoles() {
  const roles=['Computer Science Student','Robotics Enthusiast','Future AI Engineer','Physics Olympiad Competitor','Class Representative'];
  const el=document.getElementById('role-text');
  if(!el)return;
  let idx=0,charI=0,del=false;
  function tick(){const target=roles[idx];if(!del){el.textContent=target.slice(0,++charI);if(charI===target.length){del=true;setTimeout(tick,2200);return;}}else{el.textContent=target.slice(0,--charI);if(charI===0){del=false;idx=(idx+1)%roles.length;}}setTimeout(tick,del?38:72);}
  setTimeout(tick,3300);
})();

/* ══════════════════════════════════════════════════════════
   STAT COUNTERS
══════════════════════════════════════════════════════════ */
(function initCounters() {
  function easeOut(t){return 1-Math.pow(1-t,3);}
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=parseInt(el.dataset.target),dur=1600,s=performance.now(),is98=el.dataset.target==='98';(function step(now){const p=Math.min((now-s)/dur,1);el.textContent=Math.round(easeOut(p)*end)+(p===1&&is98?'%':p===1?'+':'');if(p<1)requestAnimationFrame(step);})(s);obs.unobserve(el);});
  },{threshold:0.5});
  document.querySelectorAll('.stat-number').forEach(el=>obs.observe(el));
})();

/* ══════════════════════════════════════════════════════════
   SKILLS
══════════════════════════════════════════════════════════ */
(function initSkills() {
  const grid=document.getElementById('skills-grid');
  const btns=document.querySelectorAll('.skill-cat-btn');
  function buildGrid(){
    grid.innerHTML='';
    SKILLS.forEach((sk,i)=>{
      const m=document.createElement('div');
      m.className='skill-module reveal-up'; m.dataset.cat=sk.cat; m.style.transitionDelay=(i*38)+'ms';
      m.innerHTML=`<div class="skill-icon">${I[sk.icon]||''}</div><span class="skill-name">${sk.name}</span><div class="skill-level-bar"><div class="skill-level-fill" data-level="${sk.level}"></div></div><span class="skill-level-text">${sk.label}</span>`;
      grid.appendChild(m);
    });
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const bar=e.target.querySelector('.skill-level-fill');if(bar)bar.style.width=bar.dataset.level+'%';e.target.classList.add('visible');obs.unobserve(e.target);});},{threshold:0.15});
    grid.querySelectorAll('.skill-module').forEach(m=>obs.observe(m));
  }
  buildGrid();
  btns.forEach(btn=>{btn.addEventListener('click',()=>{btns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.cat;grid.querySelectorAll('.skill-module').forEach(m=>{m.classList.toggle('hidden',cat!=='all'&&m.dataset.cat!==cat);});});});
})();

/* ══════════════════════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════════════════════ */
(function initProjects() {
  const grid=document.getElementById('projects-grid');
  PROJECTS.forEach((p,i)=>{
    const card=document.createElement('div');
    card.className='project-card reveal-up'; card.style.transitionDelay=(i*80)+'ms';
    card.innerHTML=`<div class="project-thumb"><div class="project-thumb-icon">${I[p.icon]||''}</div><div class="project-thumb-glow"></div></div><div class="project-body"><div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div><div class="project-title">${p.title}</div><p class="project-desc">${p.desc}</p></div>`;
    card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();card.style.transform=`translateY(-8px) rotateX(${-(e.clientY-r.top)/r.height*7-3.5}deg) rotateY(${(e.clientX-r.left)/r.width*7-3.5}deg)`;});
    card.addEventListener('mouseleave',()=>{card.style.transform='';});
    grid.appendChild(card);
  });
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.1});
  grid.querySelectorAll('.project-card').forEach(c=>obs.observe(c));
})();

/* ══════════════════════════════════════════════════════════
   TIMELINE
══════════════════════════════════════════════════════════ */
(function initTimeline() {
  const wrap=document.getElementById('timeline-wrap');
  TIMELINE.forEach((item,i)=>{
    const div=document.createElement('div');
    div.className='timeline-item reveal-left'; div.style.transitionDelay=(i*75)+'ms';
    div.innerHTML=`<div class="timeline-node"></div><div class="timeline-date">${item.date}</div><div class="timeline-card"><div class="timeline-title">${item.title}</div><p class="timeline-desc">${item.desc}</p></div>`;
    wrap.appendChild(div);
  });
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.1});
  wrap.querySelectorAll('.timeline-item').forEach(el=>obs.observe(el));
})();

/* ══════════════════════════════════════════════════════════
   ACHIEVEMENTS
══════════════════════════════════════════════════════════ */
(function initAchievements() {
  const grid=document.getElementById('achievements-grid');
  ACHIEVEMENTS.forEach((a,i)=>{
    const card=document.createElement('div');
    card.className='achieve-card reveal-up'; card.style.transitionDelay=(i*80)+'ms';
    card.innerHTML=`<div class="achieve-medal">${I[a.icon]||''}</div><div class="achieve-title">${a.title}</div><p class="achieve-desc">${a.desc}</p><span class="achieve-year">${a.year}</span>`;
    grid.appendChild(card);
  });
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.1});
  grid.querySelectorAll('.achieve-card').forEach(el=>obs.observe(el));
})();

/* ══════════════════════════════════════════════════════════
   RESUME — real download link
   Replace YOUR_RESUME_URL below with your actual PDF link.
   Example: './FatimaLatif_Resume.pdf'
   or a Google Drive direct-download link:
   'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
══════════════════════════════════════════════════════════ */
const RESUME_URL = './FatimaLatif_Resume.pdf'; // ← CHANGE THIS

['download-resume','nav-resume-btn'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', e => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href     = RESUME_URL;
    a.download = 'FatimaLatif_Resume.pdf';
    a.target   = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

/* ══════════════════════════════════════════════════════════
   ACTIVE NAV
══════════════════════════════════════════════════════════ */
(function(){
  const navLinks=document.querySelectorAll('.nav-links a');
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+e.target.id?'var(--cyan)':'';}); });},{threshold:0.4});
  document.querySelectorAll('section[id]').forEach(s=>obs.observe(s));
})();

/* ══════════════════════════════════════════════════════════
   HERO PARALLAX
══════════════════════════════════════════════════════════ */
(function(){
  const hc=document.querySelector('.hero-content');
  const orbs=document.querySelectorAll('.hero-orb');
  window.addEventListener('scroll',()=>{const sy=window.scrollY;if(hc)hc.style.transform=`translateY(${sy*0.18}px)`;orbs.forEach((o,i)=>{o.style.transform=`translateY(${sy*(0.08+i*0.04)}px)`;});},{passive:true});
})();
