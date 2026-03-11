import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NeuralBackground from '../components/NeuralBackground';
import { useTypewriter } from '../hooks/useTypewriter';
import { useLang } from '../context/LangContext';
import IsoButton from '../components/IsoButton';

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const STACK = ['Python','React','Laravel','Node.js','FastAPI','PostgreSQL','Docker','TypeScript','Git','Linux'];
const DATA  = ['Pandas','NumPy','Scikit-Learn','Matplotlib','Jupyter','n8n','Flowise','TensorFlow','HuggingFace','LangChain'];

function StackTicker({ items, accent, direction='left', speed=30 }) {
  const doubled  = [...items, ...items];
  const duration = items.length * speed;
  const anim     = direction === 'left' ? 'tickerLeft' : 'tickerRight';
  return (
    <div style={{ overflow:'hidden', position:'relative', width:'100%' }}>
      <div style={{ position:'absolute',left:0,top:0,bottom:0,width:32,zIndex:2,background:'linear-gradient(to right,#0a0c0f,transparent)',pointerEvents:'none' }}/>
      <div style={{ position:'absolute',right:0,top:0,bottom:0,width:32,zIndex:2,background:'linear-gradient(to left,#0a0c0f,transparent)',pointerEvents:'none' }}/>
      <div style={{ display:'flex',gap:8,width:'max-content',animation:`${anim} ${duration}s linear infinite` }}>
        {doubled.map((item,i) => (
          <span key={i} style={{ fontFamily:'IBM Plex Mono',fontSize:11,padding:'5px 10px',border:`1px solid ${accent}40`,background:`${accent}0d`,color:accent,letterSpacing:'0.06em',whiteSpace:'nowrap',flexShrink:0 }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatCard({ value, label, accent='#0066ff', delay=0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div style={{ padding:'14px 18px',background:'rgba(18,21,26,0.9)',border:'1px solid rgba(255,255,255,0.07)',opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(12px)',transition:'all 0.5s cubic-bezier(0.22,1,0.36,1)' }}>
      <div style={{ fontFamily:'IBM Plex Mono',fontSize:28,fontWeight:700,color:accent,textShadow:`0 0 20px ${accent}60`,lineHeight:1,marginBottom:4 }}>{value}</div>
      <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.15em',color:'rgba(255,255,255,0.35)',textTransform:'uppercase' }}>{label}</div>
    </div>
  );
}

const BOOT_LINES_FR = [
  '> Bonjour, je suis Merveille Nzoyem ...',
  '> Ingénieur logiciel, spécialiste en IA ...',
  '> Basé à Douala, ouvert au monde ...',
  '> Prêt à collaborer. Bienvenue 👋',
];
const BOOT_LINES_EN = [
  '> Hello, I am Merveille Nzoyem ...',
  '> Software engineer, AI specialist ...',
  '> Based in Douala, open to the world ...',
  '> Ready to collaborate. Welcome 👋',
];

export default function Home() {
  const { t, lang } = useLang();
  const h = t.home;
  const navigate = useNavigate();
  const BOOT_LINES = lang === 'fr' ? BOOT_LINES_FR : BOOT_LINES_EN;
  const [bootStep, setBootStep]         = useState(0);
  const [heroVisible, setHeroVisible]   = useState(false);

  const { displayed: bootText } = useTypewriter(BOOT_LINES[Math.min(bootStep, BOOT_LINES.length - 1)], 22, 200);

  useEffect(() => {
    if (bootStep < BOOT_LINES.length - 1) {
      const t = setTimeout(() => setBootStep(p => p + 1), 900);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setHeroVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, [bootStep]);

  return (
    <div style={{ minHeight:'100vh', paddingTop:58, position:'relative', overflow:'hidden' }}>
      <NeuralBackground opacity={0.45} />
      <div style={{ position:'absolute',inset:0,pointerEvents:'none',zIndex:1,backgroundImage:'repeating-linear-gradient(0deg,transparent 0px,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)' }}/>

      <div style={{ position:'relative',zIndex:2,maxWidth:1280,margin:'0 auto',padding:'28px 16px 56px' }}>

        {/* Status */}
        <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:28,flexWrap:'wrap' }}>
          <div style={{ display:'flex',alignItems:'center',gap:6 }}>
            <span style={{ width:6,height:6,borderRadius:'50%',background:'#00d4aa',boxShadow:'0 0 8px #00d4aa',display:'inline-block',animation:'pulse 2s infinite' }}/>
            <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,letterSpacing:'0.15em',color:'#00d4aa' }}>{h.statusOnline}</span>
          </div>
          <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(255,255,255,0.35)',letterSpacing:'0.1em' }}>{h.statusLocation}</span>
        </div>

        {/* Main layout grid */}
        <div className="home-grid">

          {/* LEFT */}
          <div>
            {/* Boot terminal */}
            <div style={{ marginBottom:28,padding:'12px 14px',background:'rgba(18,21,26,0.85)',border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ display:'flex',gap:5,marginBottom:8 }}>
                {['#ff5f57','#ffbd2e','#28ca41'].map(c => <span key={c} style={{ width:8,height:8,borderRadius:'50%',background:c,opacity:0.7 }}/>)}
              </div>
              {BOOT_LINES.slice(0, bootStep).map((line,i) => (
                <div key={i} style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(255,255,255,0.32)',marginBottom:2,letterSpacing:'0.03em' }}>{line}</div>
              ))}
              <div style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:bootStep===BOOT_LINES.length-1?'#00d4aa':'#0066ff',letterSpacing:'0.03em' }}>
                {bootText}<span style={{ animation:'blink 1.1s step-end infinite' }}>█</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-title" style={{ opacity:heroVisible?1:0,transform:heroVisible?'translateY(0)':'translateY(24px)',transition:'all 0.6s cubic-bezier(0.22,1,0.36,1)' }}>
              {h.headline1}<br/>
              <span style={{ color:'#0066ff',textShadow:'0 0 60px rgba(0,102,255,0.4)' }}>{h.headline2}</span>
            </h1>

            <div style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(15px,2.5vw,24px)',fontWeight:300,letterSpacing:'0.04em',color:'rgba(255,255,255,0.45)',marginBottom:20,opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s' }}>
              {h.sub}
            </div>

            <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(14px,1.6vw,15px)',lineHeight:1.8,color:'rgba(255,255,255,0.55)',marginBottom:28,opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s' }}>
              {h.intro}
            </p>

            {/* CTA buttons */}
            <div style={{ display:'flex',gap:10,marginBottom:20,flexWrap:'wrap',opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s' }}>
              <button className="btn-primary" onClick={() => navigate('/projects')}>{h.cta1} →</button>
              <button className="btn-ghost"   onClick={() => navigate('/contact')}>{h.cta2}</button>
            </div>

            {/* Stats row  mobile only */}
            <div className="stats-mobile" style={{ opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s' }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginBottom:20 }}>
                <StatCard value="41+" label={h.stat1Label} accent="#0066ff" delay={400}/>
                <StatCard value="3"   label={h.stat2Label} accent="#00d4aa" delay={500}/>
                <StatCard value="14+" label={h.stat3Label} accent="rgba(255,255,255,0.6)" delay={600}/>
              </div>
            </div>

            {/* CV + Socials */}
            <div style={{ display:'flex',gap:14,marginBottom:16,flexWrap:'wrap',alignItems:'flex-end',opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.38s' }}>
              <IsoButton label="CV · Français" icon={<IconDownload/>} href="/CvMerv.pdf" download="CV_Merveille_Nzoyem_FR.pdf" theme="blue" size="sm"/>
              <IsoButton label="CV · English"  icon={<IconDownload/>} href="/CvMervAnglais.pdf" download="CV_Merveille_Nzoyem_EN.pdf" theme="dark" size="sm"/> 
            </div>
            <div style={{ display:'flex',gap:14,marginBottom:36,flexWrap:'wrap',alignItems:'flex-end',opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.45s' }}>
              <IsoButton label="LinkedIn"    icon={<IconLinkedIn/>} href="https://www.linkedin.com/in/merveille-nzoyem-7643662ba/" theme="blue"  size="sm"/>
              <IsoButton label="GitHub"      icon={<IconGitHub/>}   href="https://github.com/Guerriere"     theme="dark"  size="sm"/>
             { /* <IsoButton label="X (Twitter)" icon={<IconX/>}        href="https://x.com/merveille_nzoyem"          theme="white" size="sm"/> */ }
            </div>

            {/* Stack tickers */}
            <div style={{ opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s' }}>
              <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.18em',color:'rgba(0,102,255,0.6)',marginBottom:10,textTransform:'uppercase' }}>{h.stackLabel}</div>
              <StackTicker items={STACK} accent="#0066ff" direction="left"  speed={28}/>
              <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.18em',color:'rgba(0,212,170,0.6)',marginBottom:10,marginTop:14,textTransform:'uppercase' }}>{h.dataLabel}</div>
              <StackTicker items={DATA}  accent="#00d4aa" direction="right" speed={24}/>
            </div>
          </div>

          {/* RIGHT  stats + diagram (desktop only) */}
          <div className="stats-desktop" style={{ opacity:heroVisible?1:0,transition:'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.55s' }}>
            <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',marginBottom:12,textTransform:'uppercase' }}>{h.statsLabel}</div>
            <div style={{ display:'grid',gap:10,marginBottom:18 }}>
              <StatCard value="41+" label={h.stat1Label} accent="#0066ff" delay={600}/>
              <StatCard value="3"   label={h.stat2Label} accent="#00d4aa" delay={700}/>
              <StatCard value="14+" label={h.stat3Label} accent="rgba(255,255,255,0.6)" delay={800}/>
            </div>
            <div style={{ padding:16,background:'rgba(18,21,26,0.8)',border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.12em',color:'rgba(255,255,255,0.22)',marginBottom:12 }}>
                Comment un réseau de neurones fonctionne
              </div>
              <svg viewBox="0 0 280 140" style={{ width:'100%',opacity:0.7 }}>
                {[['INPUT',40],['HIDDEN',140],['OUTPUT',240]].map(([label,x]) => (
                  <text key={label} x={x} y={12} textAnchor="middle" style={{ fontFamily:'IBM Plex Mono',fontSize:7,fill:'rgba(255,255,255,0.3)',letterSpacing:2 }}>{label}</text>
                ))}
                {[30,55,80,105,130].map((y,i) => <circle key={`in${i}`} cx={40} cy={y} r={6} fill="#0066ff" opacity={0.7} style={{ animation:`nodesPulse ${1.5+i*0.2}s ease-in-out infinite` }}/>)}
                {[40,65,90,115].map((y,i) => <circle key={`h${i}`} cx={140} cy={y} r={7} fill="#0066ff" opacity={0.85} style={{ animation:`nodesPulse ${1.8+i*0.15}s ease-in-out infinite` }}/>)}
                {[55,90].map((y,i) => <circle key={`out${i}`} cx={240} cy={y} r={8} fill="#00d4aa" opacity={0.9} style={{ animation:`nodesPulse ${2+i*0.3}s ease-in-out infinite` }}/>)}
                {[30,55,80,105,130].flatMap((iy,ii) => [40,65,90,115].map((hy,hi) => <line key={`ih${ii}${hi}`} x1={46} y1={iy} x2={133} y2={hy} stroke="#0066ff" strokeWidth={0.4} opacity={0.18}/>))}
                {[40,65,90,115].flatMap((hy,hi) => [55,90].map((oy,oi) => <line key={`ho${hi}${oi}`} x1={147} y1={hy} x2={232} y2={oy} stroke="#00d4aa" strokeWidth={0.5} opacity={0.25}/>))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-title {
          font-family: 'IBM Plex Sans Condensed', sans-serif;
          font-size: clamp(44px, 11vw, 108px);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 8px;
        }
        /* Mobile default */
        .home-grid       { display:grid; grid-template-columns:1fr; gap:32px; }
        .stats-desktop   { display:none; }
        .stats-mobile    { display:block; }

        /* Tablet 640px+ */
        @media(min-width:640px) {
          .stats-mobile  { display:none; }
          .stats-desktop { display:block; }
          .home-grid     { grid-template-columns:1fr 260px; gap:40px; }
        }
        /* Desktop 1024px+ */
        @media(min-width:1024px) {
          .home-grid     { grid-template-columns:minmax(0,1fr) 320px; gap:64px; }
        }

        @keyframes nodesPulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes pulse      { 0%,100%{box-shadow:0 0 6px #00d4aa} 50%{box-shadow:0 0 14px #00d4aa} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes tickerLeft  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes tickerRight { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }
      `}</style>
    </div>
  );
}
