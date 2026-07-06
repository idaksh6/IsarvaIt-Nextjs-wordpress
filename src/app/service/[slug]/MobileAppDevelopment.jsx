'use client';

import { useState, useEffect, useRef } from 'react';
import Link from '../../components/AppLink';

const GRAD_HERO  = 'linear-gradient(135deg,#667eea 0%,#764ba2 50%,#6366f1 100%)';
const GRAD_CARD  = 'linear-gradient(145deg,rgba(99,102,241,.08),rgba(59,141,77,.06))';
const GRAD_ACCENT= 'linear-gradient(135deg,#6366f1,#3b8d4d)';

const SERVICES = [
  { icon:'📱', title:'Cross-Platform Apps',    desc:'One codebase, two platforms. We use React Native with Expo to build apps that run natively on both iOS and Android.',       points:['Single codebase for iOS & Android','Native performance & feel','Faster time-to-market','Cost-effective development'] },
  { icon:'🏢', title:'Enterprise Solutions',   desc:'Robust business apps for HRMS, CRM, inventory, billing, and industry-specific workflows that scale with your organization.',   points:['HRMS & attendance systems','CRM & sales pipeline apps','Inventory & billing solutions','Custom ERP integrations'] },
  { icon:'🎨', title:'UI/UX Design',           desc:'Beautiful, intuitive interfaces designed for mobile-first experiences that users love and businesses rely on.',                points:['User research & wireframing','Interactive prototypes','Design system creation','Accessibility compliance'] },
  { icon:'🔗', title:'API Integration',        desc:'Seamless connectivity with your existing backend, cloud services, payment gateways, and third-party platforms.',              points:['REST & GraphQL APIs','Real-time data sync','Payment gateway integration','Cloud storage & auth'] },
  { icon:'🚀', title:'App Store Deployment',   desc:'We handle the complete publishing process — from building release versions to getting your app live on both stores.',         points:['Google Play Store publishing','Apple App Store submission','OTA updates via Expo','App Store optimization'] },
  { icon:'🛡️', title:'Maintenance & Support', desc:'Ongoing support to keep your app running smoothly with updates, bug fixes, and performance optimization.',                    points:['24/7 monitoring & alerts','Regular feature updates','Performance optimization','Security patches'] },
];

const TECH_PILLS = [
  { icon:'⚛️', label:'React Native',         bg:'rgba(97,218,251,0.12)' },
  { icon:'📱', label:'Expo',                 bg:'rgba(0,0,32,0.08)' },
  { icon:'📘', label:'TypeScript',           bg:'rgba(49,120,198,0.12)' },
  { icon:'🔮', label:'Redux / Zustand',      bg:'rgba(118,75,162,0.12)' },
  { icon:'🔥', label:'Firebase',             bg:'rgba(255,107,0,0.12)' },
  { icon:'🐘', label:'PostgreSQL',           bg:'rgba(51,103,145,0.12)' },
  { icon:'🌐', label:'REST & GraphQL APIs',  bg:'rgba(99,102,241,0.12)' },
  { icon:'🔔', label:'Push Notifications',   bg:'rgba(59,141,77,0.12)' },
  { icon:'📍', label:'GPS & Geolocation',    bg:'rgba(102,126,234,0.12)' },
  { icon:'🔐', label:'Biometric Auth',       bg:'rgba(118,75,162,0.12)' },
];

const PROCESS_STEPS = [
  { num:'01', title:'Discovery',   desc:'Understanding your goals, users, and requirements through detailed consultation.' },
  { num:'02', title:'Design',      desc:'Wireframes, prototypes, and pixel-perfect UI designs for mobile screens.' },
  { num:'03', title:'Development', desc:'Agile sprints with React Native & Expo for rapid, quality development.' },
  { num:'04', title:'Testing',     desc:'Rigorous QA on real devices across iOS and Android platforms.' },
  { num:'05', title:'Launch',      desc:'App Store deployment, monitoring, and ongoing support & updates.' },
];

const WHY_STATS = [
  { num:'15+', label:'Years of Experience', desc:'Deep expertise in mobile and web development since 2009.' },
  { num:'50+', label:'Apps Delivered',      desc:'Successful mobile apps across industries and use cases.' },
  { num:'100+',label:'Happy Clients',       desc:'Trusted by startups and enterprises across the globe.' },
  { num:'24/7',label:'Support Available',   desc:'Round-the-clock monitoring and maintenance for your apps.' },
];

const HRMS_FEATURES = [
  { icon:'📅', color:'rgba(59,141,77,0.12)',   title:'Leave Application',  desc:'Apply full-day, half-day & multi-day leaves' },
  { icon:'✅', color:'rgba(99,102,241,0.12)',  title:'Approval Workflow',  desc:'Manager approvals with instant notifications' },
  { icon:'📊', color:'rgba(102,126,234,0.12)', title:'Leave Balances',     desc:'Real-time balance tracking & history' },
  { icon:'🔔', color:'rgba(118,75,162,0.12)',  title:'Push Alerts',        desc:'Status updates & holiday reminders' },
];

const CRM_FEATURES = [
  { icon:'👥', color:'rgba(99,102,241,0.12)',  title:'Lead Management', desc:'Capture, track & nurture leads on the go' },
  { icon:'📈', color:'rgba(59,141,77,0.12)',   title:'Deal Pipeline',   desc:'Visual pipeline with priority tracking' },
  { icon:'✅', color:'rgba(255,107,0,0.12)',   title:'Task Management', desc:'Assign, track & complete sales tasks' },
  { icon:'📞', color:'rgba(118,75,162,0.12)',  title:'Quick Actions',   desc:'Call, WhatsApp & email from the app' },
];

function SectionLabel({ text, light = false }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase mb-10" style={{ color: light ? '#4ade80' : '#3b8d4d' }}>
      <span className="block w-8 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #6366f1)' }} />
      <span>{text}</span>
      <span className="block w-8 h-[1px]" style={{ background: 'linear-gradient(90deg, #6366f1, transparent)' }} />
    </div>
  );
}

function PhoneStack({ phones, large = false }) {
  const w1 = large ? 210 : 170;
  const w2 = large ? 230 : 190;
  return (
    <div className="mad-phones-wrapper flex items-end justify-center min-h-[420px] py-3 gap-0">
      {phones.map((ph, i) => {
        const w = i === 1 ? w2 : w1;
        const cls = i === 0 ? 'mad-phone-1' : i === 1 ? 'mad-phone-2' : 'mad-phone-3';
        const ml = i > 0 ? -32 : 0;
        return (
          <div key={ph.alt} className={`mad-showcase-phone ${cls} flex-shrink-0 relative rounded-[28px] p-2 bg-gradient-to-br from-[#2d3748] to-[#1a202c] shadow-[0_20px_50px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:z-10`}
            style={{ width: w, marginLeft: ml, zIndex: i === 1 ? 3 : i === 0 ? 1 : 2 }}>
            <div className="rounded-[22px] overflow-hidden bg-white">
              <img src={ph.src} alt={ph.alt} className="w-full h-auto block" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function MobileAppDevelopment() {
  const [activeTab, setActiveTab] = useState('hrms');
  const observerRef = useRef(null);

  const observeAll = () => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('mad-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.mad-reveal,.mad-reveal-l,.mad-reveal-r').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('mad-visible');
      else observerRef.current.observe(el);
    });
  };

  useEffect(() => {
    const t = setTimeout(observeAll, 60);
    return () => { clearTimeout(t); observerRef.current?.disconnect(); };
  }, [activeTab]);

  return (
    <>
      <style>{`
        /* animations */
        .mad-reveal   { opacity:0; transform:translateY(40px); transition:opacity .8s ease,transform .8s ease; }
        .mad-reveal-l { opacity:0; transform:translateX(-40px); transition:opacity .8s ease,transform .8s ease; }
        .mad-reveal-r { opacity:0; transform:translateX(40px); transition:opacity .8s ease,transform .8s ease; }
        .mad-reveal.mad-visible,.mad-reveal-l.mad-visible,.mad-reveal-r.mad-visible { opacity:1; transform:none; }
        .mad-stagger-1{transition-delay:.1s}.mad-stagger-2{transition-delay:.2s}.mad-stagger-3{transition-delay:.3s}
        .mad-stagger-4{transition-delay:.4s}.mad-stagger-5{transition-delay:.5s}.mad-stagger-6{transition-delay:.6s}

        @keyframes madOrb{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-20px) scale(1.05)}66%{transform:translate(-20px,15px) scale(.95)}}
        .mad-orb{animation:madOrb 12s ease-in-out infinite}
        .mad-orb-2{animation-delay:-6s}.mad-orb-3{animation-delay:-3s}

        @keyframes madSide{0%,100%{transform:rotate(var(--t,-3deg)) translateY(0)}50%{transform:rotate(var(--t,-3deg)) translateY(-12px)}}
        @keyframes madCenter{0%,100%{transform:translateY(-16px)}50%{transform:translateY(-28px)}}
        .mad-phone-1{--t:-3deg;animation:madSide 5s ease-in-out infinite}
        .mad-phone-2{animation:madCenter 5s ease-in-out infinite}
        .mad-phone-3{--t:3deg;animation:madSide 5s ease-in-out infinite .5s}

        @keyframes madBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .mad-badge-1{animation:madBadge 4s ease-in-out infinite}
        .mad-badge-2{animation:madBadge 4s ease-in-out infinite;animation-delay:-2s}

        @keyframes madPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.3)}}
        .mad-pulse{animation:madPulse 2s ease infinite}

        @keyframes madMarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .mad-track{animation:madMarquee 30s linear infinite;display:flex;width:max-content;gap:3rem}

        .mad-ph-1{transform:rotate(-2deg)}.mad-ph-2{transform:translateY(-14px)}.mad-ph-3{transform:rotate(2deg)}
        .mad-showcase-phone:nth-child(1):hover{transform:rotate(-2deg) translateY(-8px)}
        .mad-showcase-phone:nth-child(2):hover{transform:translateY(-22px)}
        .mad-showcase-phone:nth-child(3):hover{transform:rotate(2deg) translateY(-8px)}
        .mad-showcase-phone:hover{box-shadow:0 24px 48px rgba(0,0,0,.18);z-index:5}

        @media (max-width: 1024px) {
          .mad-phones-wrapper {
            min-height: auto !important;
            margin-top: 40px;
            gap: 0 !important;
            justify-content: center !important;
            flex-wrap: nowrap !important;
            overflow: visible !important;
          }
          .mad-phone-1, .mad-phone-2, .mad-phone-3, .mad-showcase-phone {
            margin-left: -6vw !important;
            transform: none !important;
            animation: none !important;
          }
          .mad-phone-1 { margin-left: 0 !important; }
          .mad-phone-1, .mad-phone-3 { width: 25vw !important; max-width: 210px !important; }
          .mad-phone-2 { width: 30vw !important; max-width: 230px !important; }
          .mad-badge-1, .mad-badge-2 { display: none !important; }
        }

        @media (max-width: 768px) {
          .mad-phones-wrapper {
            min-height: auto !important;
            margin-top: 24px;
            gap: 0 !important;
            justify-content: center !important;
            flex-wrap: nowrap !important;
            overflow: visible !important;
            width: 100vw !important;
            max-width: 100vw !important;
            margin-left: -24px !important;
            margin-right: -24px !important;
          }
          .mad-phone-1, .mad-phone-2, .mad-phone-3, .mad-showcase-phone {
            margin-left: -28px !important;
            transform: none !important;
            animation: none !important;
          }
          .mad-phone-1 { margin-left: 0 !important; }
          .mad-phone-1, .mad-phone-3 { width: 110px !important; }
          .mad-phone-2 { width: 125px !important; }
          .mad-platform-card { flex-direction: column; gap: 16px; padding: 24px; }
          .mad-badge-1, .mad-badge-2 { display: none !important; }
        }
      `}</style>

      <div className="bg-white overflow-x-hidden">

        {/* ══════════ HERO ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-16 pt-24 sm:pt-32 lg:pt-40">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(99,102,241,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.03) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'radial-gradient(ellipse 80% 70% at 50% 40%,black,transparent)' }}/>
          <div className="mad-orb absolute rounded-full blur-[80px] pointer-events-none" style={{ top:'10%', left:'5%', width:500, height:500, background:'radial-gradient(circle,rgba(102,126,234,.15),transparent 70%)' }}/>
          <div className="mad-orb mad-orb-2 absolute rounded-full blur-[80px] pointer-events-none" style={{ bottom:'10%', right:'5%', width:400, height:400, background:'radial-gradient(circle,rgba(118,75,162,.12),transparent 70%)' }}/>
          <div className="mad-orb mad-orb-3 absolute rounded-full blur-[80px] pointer-events-none" style={{ top:'40%', right:'30%', width:300, height:300, background:'radial-gradient(circle,rgba(59,141,77,.1),transparent 70%)' }}/>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left text */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-8 border border-emerald-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  Mobile App Development Services
                </div>
                <h1 className="mb-6">
                  Build Powerful Apps for<br/>
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">iOS &amp; Android</span>
                </h1>
                <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-xl mx-auto lg:mx-0">
                  We craft high-performance mobile applications using React Native and Expo — delivering native-quality experiences on both platforms from a single codebase. From HRMS to CRM, we turn your business vision into stunning mobile products.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                  <button onClick={() => window.location.href = '/contact-us'}
                    className="press-illusion-btn-orange bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base items-center space-x-2 flex cursor-pointer shadow-lg"
                  >
                    Start Your Project
                    <svg className="w-5 h-5 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <a href="#mad-showcase"
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    View Our Work
                  </a>
                </div>
                <div className="flex gap-10 justify-center lg:justify-start">
                  {[{num:'50+',label:'Apps Delivered'},{num:'15+',label:'Years Experience'},{num:'2',label:'Platforms, 1 Codebase'}].map(s=>(
                    <div key={s.label}>
                      <strong className="block text-2xl lg:text-3xl font-bold text-gray-900 leading-none">{s.num}</strong>
                      <span className="text-[13px] text-gray-500 mt-1 block">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – 3 phones */}
              <div className="mad-phones-wrapper relative flex items-end justify-center min-h-[300px] md:min-h-[520px] py-5 gap-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .mad-phones-wrapper::-webkit-scrollbar { display: none; }
                `}</style>
                <div className="mad-phone-1 relative flex-shrink-0 w-[190px] lg:w-[210px] z-10" style={{ borderRadius:36, padding:10, background:'linear-gradient(145deg,#2d3748,#1a202c)', boxShadow:'0 40px 80px rgba(15,23,42,.25)' }}>
                  <div style={{ borderRadius:28, overflow:'hidden' }}><img src="/mobile-app-development/hrms-login.jpeg" alt="HRMS Login" className="w-full h-auto block"/></div>
                </div>
                <div className="mad-phone-2 relative flex-shrink-0 w-[210px] lg:w-[230px] z-30 -mx-9" style={{ borderRadius:36, padding:10, background:'linear-gradient(145deg,#2d3748,#1a202c)', boxShadow:'0 40px 80px rgba(15,23,42,.25)' }}>
                  <div style={{ borderRadius:28, overflow:'hidden' }}><img src="/mobile-app-development/hrms-dashboard.jpeg" alt="HRMS Dashboard" className="w-full h-auto block"/></div>
                </div>
                <div className="mad-phone-3 relative flex-shrink-0 w-[190px] lg:w-[210px] z-20" style={{ borderRadius:36, padding:10, background:'linear-gradient(145deg,#2d3748,#1a202c)', boxShadow:'0 40px 80px rgba(15,23,42,.25)' }}>
                  <div style={{ borderRadius:28, overflow:'hidden' }}><img src="/mobile-app-development/crm-dashboard.jpeg" alt="CRM Dashboard" className="w-full h-auto block"/></div>
                </div>
                {/* floating badges – z-40 brings them in front of the z-30 center phone */}
                <div className="mad-badge-1 absolute z-40 hidden lg:flex items-center gap-2.5 bg-white rounded-2xl shadow-xl px-5 py-3 text-[13px] font-semibold text-slate-900 lg:-right-20" style={{ top: '10%' }}>
                  <div className="flex items-center justify-center rounded-[10px] text-lg w-8 h-8 text-white bg-emerald-500 flex-shrink-0">✓</div>
                  <div><div className="text-[11px] text-gray-500">Cross-Platform</div>iOS &amp; Android</div>
                </div>
                <div className="mad-badge-2 absolute z-40 hidden lg:flex items-center gap-2.5 bg-white rounded-2xl shadow-xl px-5 py-3 text-[13px] font-semibold text-slate-900 lg:-left-20" style={{ bottom: '15%' }}>
                  <div className="flex items-center justify-center rounded-[10px] text-lg w-8 h-8 text-white bg-indigo-500 flex-shrink-0">⚡</div>
                  <div><div className="text-[11px] text-gray-500">Built with</div>React Native + Expo</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════ TECH MARQUEE ══════════════════════════════════ */}
        <div className="bg-white py-8 overflow-hidden border-t border-b border-gray-100">
          <div className="overflow-hidden" style={{ maskImage:'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)' }}>
            <div className="mad-track">
              {[...TECH_PILLS,...TECH_PILLS].map((t,i)=>(
                <div key={i} className="flex items-center gap-3 rounded-full whitespace-nowrap font-semibold flex-shrink-0 border border-gray-100 text-gray-700 bg-gray-50 text-[15px] px-6 py-3">
                  <span className="flex items-center justify-center rounded-lg text-lg w-8 h-8 bg-slate-200/50 flex-shrink-0" style={{ background:t.bg }}>{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ SERVICES ══════════════════════════════════════ */}
        <section id="mad-services" className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mad-reveal text-center mb-10">
              <SectionLabel text="What We Offer" />
              <h2 className="mb-6">End-to-End Mobile App Development</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">From concept to App Store launch, we handle every stage of mobile app development with precision and care.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {SERVICES.map((s,i)=>(
                <div key={s.title} className="mad-reveal flex flex-col items-center text-center bg-white border border-gray-100 rounded-3xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-100 relative overflow-hidden group">
                  {/* Top orange gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  
                  {/* Center aligned icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-indigo-50/80 text-indigo-600 flex-shrink-0">
                    {s.icon}
                  </div>
                  <h3 className="mb-4 text-slate-900 font-bold text-xl">{s.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 w-full text-left max-w-xs mx-auto" style={{ listStyle:'none', padding:0, margin:0 }}>
                    {s.points.map(p=>(
                      <li key={p} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                        <span className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PORTFOLIO SHOWCASE ════════════════════════════ */}
        <section id="mad-showcase" className="py-12 lg:py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mad-reveal text-center mb-10">
              <SectionLabel text="Our Work" />
              <h2 className="mb-6">Apps We&apos;ve Built</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real mobile applications powering businesses every day — built with React Native and Expo.</p>
            </div>

            {/* Tab bar */}
            <div className="mad-reveal flex justify-center mb-9 border-b-2 border-gray-200">
              <div className="inline-flex gap-2">
                {[{id:'hrms',label:'HRMS Leave Management'},{id:'crm',label:'CRM Mobile App'}].map(tab=>(
                  <button key={tab.id} onClick={()=>setActiveTab(tab.id)}
                    className={`mad-tab ${activeTab===tab.id?'mad-tab-active':''}`}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* HRMS panel */}
            {activeTab==='hrms'&&(
              <div className="mad-panel grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="mad-reveal-l text-center lg:text-left">
                  <h3 className="mb-4">ISARVA HRMS — Leave Management</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">A comprehensive employee leave management app that empowers teams to apply, track, and approve leave requests seamlessly. Built for modern workplaces with role-based access and real-time notifications.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {HRMS_FEATURES.map(f=>(
                      <div key={f.title} className="flex items-start gap-4 p-4 bg-slate-50 border border-gray-100 rounded-2xl text-left">
                        {/* Center aligned icon */}
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 text-white font-bold" style={{ background:f.color }}>{f.icon}</div>
                        <div><h4 className="text-gray-900 text-sm font-bold mb-1">{f.title}</h4><p className="text-gray-500 text-xs">{f.desc}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {['React Native','Expo','HR & Workforce','iOS & Android'].map(tag=>(<span key={tag} className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full font-bold text-xs">{tag}</span>))}
                  </div>
                </div>
                <div className="mad-reveal-r">
                  <PhoneStack phones={[
                    {src:'/mobile-app-development/hrms-login.jpeg',alt:'HRMS Login'},
                    {src:'/mobile-app-development/hrms-dashboard.jpeg',alt:'HRMS Dashboard'},
                    {src:'/mobile-app-development/hrms-apply-leave.jpeg',alt:'Apply Leave'},
                  ]}/>
                </div>
              </div>
            )}

            {/* CRM panel */}
            {activeTab==='crm'&&(
              <div className="mad-panel grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="mad-reveal-l text-center lg:text-left">
                  <h3 className="mb-4">ISARVA CRM — Sales on the Go</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">A powerful CRM mobile app that puts your entire sales pipeline in your pocket. Manage leads, track deals, assign tasks, and close more business — all from your phone, anywhere, anytime.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {CRM_FEATURES.map(f=>(
                      <div key={f.title} className="flex items-start gap-4 p-4 bg-slate-50 border border-gray-100 rounded-2xl text-left">
                        {/* Center aligned icon */}
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 text-white font-bold" style={{ background:f.color }}>{f.icon}</div>
                        <div><h4 className="text-gray-900 text-sm font-bold mb-1">{f.title}</h4><p className="text-gray-500 text-xs">{f.desc}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {['React Native','Expo','Sales & Marketing','iOS & Android'].map(tag=>(<span key={tag} className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full font-bold text-xs">{tag}</span>))}
                  </div>
                </div>
                <div className="mad-reveal-r">
                  <PhoneStack phones={[
                    {src:'/mobile-app-development/crm-dashboard.jpeg',alt:'CRM Dashboard'},
                    {src:'/mobile-app-development/crm-leads.jpeg',alt:'CRM Leads'},
                    {src:'/mobile-app-development/crm-tasks.jpeg',alt:'CRM Tasks'},
                  ]}/>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══════════ PROCESS ═══════════════════════════════════════ */}
        <section id="mad-process" className="py-12 lg:py-16 relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at 20% 50%,rgba(99,102,241,.15),transparent 50%),radial-gradient(ellipse at 80% 50%,rgba(59,141,77,.1),transparent 50%)' }}/>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mad-reveal text-center mb-10">
              <SectionLabel text="How We Work" light />
              <h2 className="text-white mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">A proven, agile methodology that delivers quality mobile apps on time and within budget.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {PROCESS_STEPS.map((step,i)=>(
                <div key={step.num} className="mad-proc-step mad-reveal mad-stagger-${i+1} text-center relative flex flex-col items-center">
                  {/* Center aligned badge */}
                  <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center font-bold text-2xl border-2 border-indigo-500/40 bg-indigo-500/10 text-indigo-400 mb-6 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:scale-110 transition-all duration-300">
                    {step.num}
                  </div>
                  <h4 className="text-white mb-2 font-semibold text-lg">{step.title}</h4>
                  <p className="text-gray-400 text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHY CHOOSE US ══════════════════════════════════ */}
        <section id="mad-why" className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mad-reveal text-center mb-10">
              <SectionLabel text="Why Isarva" />
              <h2 className="mb-6">Trusted Mobile App Partner</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Over 15 years of delivering digital excellence to businesses worldwide.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_STATS.map((w,i)=>(
                <div key={w.label} className="mad-reveal bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div style={{ background:GRAD_HERO, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }} className="text-4xl lg:text-5xl font-black mb-3">
                    {w.num}
                  </div>
                  <h4 className="mb-2 text-slate-900 font-bold text-base">{w.label}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TECHNOLOGY ════════════════════════════════════ */}
        <section id="mad-tech" className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mad-reveal text-center mb-10">
              <SectionLabel text="Technology" />
              <h2 className="mb-6">Why React Native &amp; Expo?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">The modern stack we use to deliver fast, reliable, and beautiful mobile applications.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { icon:'⚛️', title:'React Native', desc:"Facebook's battle-tested framework for building truly native mobile apps. Shared codebase with native modules for camera, GPS, biometrics, and more — delivering 60fps performance on both platforms.", pills:['Native Performance','Hot Reload','Large Ecosystem','TypeScript'], delay:'mad-reveal-l' },
                { icon:'📱', title:'Expo',          desc:"The fastest way to build and deploy React Native apps. Expo handles the complexity of native builds, OTA updates, push notifications, and App Store submissions — so we focus on building great features.",    pills:['OTA Updates','EAS Build','Push Notifications','Easy Deployment'],  delay:'mad-reveal-r' },
              ].map((p)=>(
                <div key={p.title} className={`mad-reveal bg-gradient-to-br from-indigo-500/5 to-emerald-500/5 border border-indigo-500/10 rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${p.delay}`}>
                  {/* Center aligned icon on mobile */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-white shadow-sm flex-shrink-0 mx-auto md:mx-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-xl text-slate-900">{p.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {p.pills.map(pill=>(<span key={pill} className="bg-white px-3 py-1.5 rounded-lg text-slate-700 font-bold text-xs shadow-sm border border-gray-100">{pill}</span>))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA ═══════════════════════════════════════════ */}
        <section id="mad-cta" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mad-reveal relative rounded-[40px] text-center overflow-hidden px-10 py-16" style={{ background:'#e8f6ea' }}>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1a5b33] bg-[#cfeade] px-6 py-2.5 rounded-full mb-6">
                Get In Touch
              </span>
              <h2 className="mb-4 text-emerald-950">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-[#356747] font-medium max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your project and turn your ideas into a powerful mobile application that drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto w-full">
                <button onClick={() => window.location.href = '/contact-us'}
                  className="press-illusion-btn-orange bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-base w-full sm:w-auto items-center justify-center flex cursor-pointer rounded-xl shadow-lg"
                >
                  Get In Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <a href="https://wa.me/919902863697" target="_blank" rel="noopener noreferrer"
                  className="press-illusion-btn-orange bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 text-base w-full sm:w-auto items-center justify-center flex cursor-pointer rounded-xl shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}