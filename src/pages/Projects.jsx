import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import { useLang } from '../context/LangContext';
import IsoButton from '../components/IsoButton';

const IconExternalLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

function StatusBadge({ status, color }) {
  return (
    <span style={{ display:'inline-flex',alignItems:'center',gap:6,padding:'3px 10px',fontFamily:'IBM Plex Mono',fontSize:10,letterSpacing:'0.1em',color,background:`${color}12`,border:`1px solid ${color}40` }}>
      <span style={{ width:5,height:5,borderRadius:'50%',background:color,boxShadow:`0 0 6px ${color}` }}/>
      {status}
    </span>
  );
}

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [active, setActive] = useState(0);

  const projects = [
    {
      name: p.project1name, tag: p.project1tag, status: p.project1status, statusColor:'#ff6b35',
      desc: p.project1desc, tech:['Python','FastAPI','Scikit-Learn','React','PostgreSQL','Docker','NLP'],
      features:[p.project1f1,p.project1f2,p.project1f3,p.project1f4], stats:null,
      liveUrl:'https://idem-app-1770824125661.netlify.app/ ', githubUrl:null,
    },
    {
      name: p.project2name, tag: p.project2tag, status: p.project2status, statusColor:'#00d4aa',
      desc: p.project2desc, tech:['Python','Jupyter','Pandas','NumPy','Matplotlib','Scikit-Learn'],
      features:[p.project2f1,p.project2f2,p.project2f3,p.project2f4],
      stats:[{v:'41+',l:'Jours'},{v:'100',l:'Objectif'},{v:'∞',l:'Motivation'}],
      liveUrl:null, githubUrl:'https://github.com/merveille-nzoyem/100-days-ml',
    },
    {
      name: p.project3name, tag: p.project3tag, status: p.project3status, statusColor:'#00d4aa',
      desc: p.project3desc, tech:['n8n','Flowise','Docker','Node.js','REST APIs','Webhooks'],
      features:[p.project3f1,p.project3f2,p.project3f3,p.project3f4], stats:null,
      liveUrl:null, githubUrl:null,
    },
  ];

  const proj = projects[active];

  return (
    <div style={{ minHeight:'100vh',paddingTop:58,position:'relative',overflow:'hidden' }}>
      <NeuralBackground opacity={0.28} />
      <div style={{ position:'relative',zIndex:2,maxWidth:1280,margin:'0 auto',padding:'40px 16px 60px' }}>

        {/* Header */}
        <div style={{ marginBottom:32 }}>
          <div className="section-label" style={{ marginBottom:12 }}>// {p.sectionLabel}</div>
          <h2 style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(32px,7vw,68px)',fontWeight:800,lineHeight:1,color:'#ffffff',letterSpacing:'-0.01em',marginBottom:10 }}>
            {p.headline}
          </h2>
          <p style={{ fontFamily:'IBM Plex Mono',fontSize:11,color:'rgba(255,255,255,0.3)',letterSpacing:'0.08em' }}>{p.subheadline}</p>
        </div>

        {/* Project tab selectors  horizontal scroll on mobile */}
        <div style={{ display:'flex',gap:6,marginBottom:24,overflowX:'auto',paddingBottom:4 }} className="no-scrollbar">
          {projects.map((proj,i) => (
            <button key={proj.name} onClick={() => setActive(i)} style={{
              flexShrink:0,
              padding:'10px 16px',
              background: active===i ? 'rgba(0,102,255,0.1)' : 'rgba(18,21,26,0.6)',
              border:`1px solid ${active===i ? 'rgba(0,102,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
              borderBottom:`2px solid ${active===i ? '#0066ff' : 'transparent'}`,
              cursor:'pointer', transition:'all 0.2s',
              fontFamily:'IBM Plex Sans Condensed', fontSize:'clamp(13px,1.8vw,15px)', fontWeight:700,
              color: active===i ? '#ffffff' : 'rgba(255,255,255,0.5)',
              whiteSpace:'nowrap',
            }}>
              {proj.name}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div key={active} style={{ background:'rgba(18,21,26,0.85)',border:'1px solid rgba(255,255,255,0.07)',padding:'24px 20px',animation:'fadeIn 0.3s ease-out both' }}>

          {/* Top */}
          <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',flexWrap:'wrap',gap:12,marginBottom:20,paddingBottom:18,borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.18em',color:'rgba(0,102,255,0.6)',textTransform:'uppercase',marginBottom:8 }}>{proj.tag}</div>
              <h3 style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(22px,4vw,28px)',fontWeight:700,color:'#ffffff' }}>{proj.name}</h3>
            </div>
            <StatusBadge status={proj.status} color={proj.statusColor}/>
          </div>

          <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(13px,1.5vw,15px)',lineHeight:1.8,color:'rgba(255,255,255,0.52)',marginBottom:24 }}>
            {proj.desc}
          </p>

          {/* Features  2 col on tablet, 1 col on mobile */}
          <div style={{ marginBottom:20 }}>
            <div className="section-label" style={{ marginBottom:14,color:'rgba(255,255,255,0.3)' }}>Ce que ça fait</div>
            <div className="features-grid">
              {proj.features.map((f,i) => (
                <div key={i} style={{ display:'flex',gap:10,padding:'10px 12px',background:'rgba(0,102,255,0.04)',border:'1px solid rgba(0,102,255,0.1)' }}>
                  <span style={{ color:'#0066ff',flexShrink:0,marginTop:2,fontSize:10 }}>▶</span>
                  <span style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(12px,1.4vw,13px)',color:'rgba(255,255,255,0.55)',lineHeight:1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div style={{ marginBottom:20 }}>
            <div className="section-label" style={{ marginBottom:12,color:'rgba(255,255,255,0.3)' }}>Outils utilisés</div>
            <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
              {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          {/* Stats (100 days) */}
          {proj.stats && (
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginBottom:8 }}>
              {proj.stats.map(s => (
                <div key={s.l} style={{ padding:'14px 10px',textAlign:'center',background:'rgba(0,212,170,0.05)',border:'1px solid rgba(0,212,170,0.2)' }}>
                  <div style={{ fontFamily:'IBM Plex Mono',fontSize:'clamp(22px,4vw,32px)',fontWeight:700,color:'#00d4aa',textShadow:'0 0 20px rgba(0,212,170,0.5)',marginBottom:4 }}>{s.v}</div>
                  <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.15em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase' }}>{s.l}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA buttons */}
          <div style={{ display:'flex',gap:16,flexWrap:'wrap',alignItems:'flex-end',marginTop:20,paddingTop:18,borderTop:'1px solid rgba(255,255,255,0.06)' }}>
            {proj.liveUrl && <IsoButton label="Voir le projet" icon={<IconExternalLink/>} href={proj.liveUrl}  theme="blue" size="sm"/>}
            {proj.githubUrl && <IsoButton label="GitHub"       icon={<IconGitHub/>}       href={proj.githubUrl} theme="dark" size="sm"/>}
            {!proj.liveUrl && !proj.githubUrl && (
              <span style={{ fontFamily:'IBM Plex Mono',fontSize:11,color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em' }}>Bientôt disponible</span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        /* Mobile */
        .features-grid { display:grid; grid-template-columns:1fr; gap:8px; }
        .no-scrollbar::-webkit-scrollbar { display:none; }
        .no-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }

        /* Tablet+ */
        @media(min-width:640px) {
          .features-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>
    </div>
  );
}
