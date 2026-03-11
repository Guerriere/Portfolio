import NeuralBackground from '../components/NeuralBackground';
import { useLang } from '../context/LangContext';

const TRAITS = [
  { key:'Discipline & Régularité',    val:97, color:'#0066ff' },
  { key:'Résolution de problèmes',    val:92, color:'#0066ff' },
  { key:'Intelligence Artificielle',  val:78, color:'#00d4aa' },
  { key:'Déploiement & DevOps',       val:74, color:'#00d4aa' },
  { key:'Développement Web & API',    val:87, color:'#0066ff' },
  { key:'Esprit de recherche',        val:82, color:'#00d4aa' },
];

function SkillBar({ label, value, color, delay=0 }) {
  return (
    <div style={{ marginBottom:14 }}>
      <div style={{ display:'flex',justifyContent:'space-between',marginBottom:5 }}>
        <span style={{ fontFamily:'IBM Plex Mono',fontSize:11,color:'rgba(255,255,255,0.55)',letterSpacing:'0.04em' }}>{label}</span>
        <span style={{ fontFamily:'IBM Plex Mono',fontSize:11,color }}>{value}%</span>
      </div>
      <div style={{ height:2,background:'rgba(255,255,255,0.07)',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',left:0,top:0,height:'100%',width:`${value}%`,background:`linear-gradient(90deg,${color},${color}cc)`,boxShadow:`0 0 8px ${color}60`,animation:`growBar 1s ${delay}ms cubic-bezier(0.22,1,0.36,1) both` }}/>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, desc, color='#0066ff', index=0, isLast=false }) {
  return (
    <div style={{ display:'flex',gap:16,paddingBottom:isLast?0:28,animation:`fadeUp 0.5s ${index*120}ms ease-out both` }}>
      <div style={{ display:'flex',flexDirection:'column',alignItems:'center',width:16,flexShrink:0 }}>
        <div style={{ width:10,height:10,borderRadius:'50%',background:color,boxShadow:`0 0 10px ${color}`,flexShrink:0,marginTop:4 }}/>
        {!isLast && <div style={{ flex:1,width:1,background:'rgba(255,255,255,0.07)',marginTop:6 }}/>}
      </div>
      <div style={{ flex:1,paddingBottom:4 }}>
        <span style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.18em',color,textTransform:'uppercase',display:'block',marginBottom:5 }}>{year}</span>
        <h3 style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(15px,2vw,18px)',fontWeight:700,color:'#ffffff',marginBottom:8,lineHeight:1.3 }}>{title}</h3>
        <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(13px,1.5vw,14px)',lineHeight:1.75,color:'rgba(255,255,255,0.48)' }}>{desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLang();
  const a = t.about;

  const timeline = [
    { year:a.t1year, title:a.t1title, desc:a.t1desc, color:'#00d4aa' },
    { year:a.t2year, title:a.t2title, desc:a.t2desc, color:'#0066ff' },
    { year:a.t3year, title:a.t3title, desc:a.t3desc, color:'#0066ff' },
    { year:a.t4year, title:a.t4title, desc:a.t4desc, color:'#00d4aa' },
  ];

  return (
    <div style={{ minHeight:'100vh',paddingTop:58,position:'relative',overflow:'hidden' }}>
      <NeuralBackground opacity={0.3} />
      <div style={{ position:'relative',zIndex:2,maxWidth:1280,margin:'0 auto',padding:'40px 16px 60px' }}>

        {/* Header */}
        <div style={{ marginBottom:40 }}>
          <div className="section-label" style={{ marginBottom:12 }}>// {a.sectionLabel}</div>
          <h2 style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(32px,7vw,68px)',fontWeight:800,lineHeight:1,color:'#ffffff',letterSpacing:'-0.01em',marginBottom:20 }}>
            {a.headline}
          </h2>
          <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(14px,1.6vw,16px)',lineHeight:1.75,color:'rgba(255,255,255,0.5)',maxWidth:600 }}>
            {a.intro}
          </p>
        </div>

        {/* Main responsive grid */}
        <div className="about-grid">

          {/* Timeline */}
          <div>
            <div className="section-label" style={{ marginBottom:24 }}>// {a.timelineLabel}</div>
            {timeline.map((item,i) => (
              <TimelineItem key={i} index={i} isLast={i===timeline.length-1} {...item}/>
            ))}
          </div>

          {/* Skills + Quote + Status */}
          <div>
            <div className="section-label" style={{ marginBottom:18 }}>// {a.traitsLabel}</div>
            <div style={{ padding:'20px',background:'rgba(18,21,26,0.9)',border:'1px solid rgba(255,255,255,0.07)',marginBottom:24 }}>
              {TRAITS.map((trait,i) => (
                <SkillBar key={trait.key} label={trait.key} value={trait.val} color={trait.color} delay={i*100}/>
              ))}
            </div>

            {/* Quote */}
            <div style={{ padding:'20px',borderLeft:'2px solid #0066ff',background:'rgba(0,102,255,0.04)',marginBottom:20 }}>
              <div className="section-label" style={{ marginBottom:12,color:'rgba(0,102,255,0.5)' }}>// {a.quoteLabel}</div>
              <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(13px,1.5vw,14px)',lineHeight:1.8,color:'rgba(255,255,255,0.55)',fontStyle:'italic',marginBottom:12 }}>
                "{a.quote}"
              </p>
              <span style={{ fontFamily:'IBM Plex Mono',fontSize:11,color:'#0066ff',letterSpacing:'0.08em' }}> {a.quoteAuthor}</span>
            </div>

            {/* Status card */}
            <div style={{ padding:'18px',background:'rgba(18,21,26,0.9)',border:'1px solid rgba(0,212,170,0.2)' }}>
              <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.18em',color:'#00d4aa',marginBottom:12 }}>Situation actuelle</div>
              {[
                ['Formation',    "Master 1 Intelligence Artificielle"],
                ['École',        'IUT de Douala'],
                ['Localisation', 'Douala, Cameroun 🇨🇲'],
                ['Spécialité',   'IA · Machine Learning · Data'],
                ['Défi actuel',  '100 Jours de Code → 41+ jours'],
              ].map(([key,val]) => (
                <div key={key} style={{ display:'flex',gap:10,marginBottom:7,flexWrap:'wrap' }}>
                  <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(0,212,170,0.6)',minWidth:86,flexShrink:0 }}>{key}:</span>
                  <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(255,255,255,0.55)' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes growBar { from{width:0} }

        /* Mobile */
        .about-grid { display:grid; grid-template-columns:1fr; gap:32px; }

        /* Tablet+ */
        @media(min-width:768px) {
          .about-grid { grid-template-columns:1fr 1fr; gap:48px; }
        }
        /* Desktop+ */
        @media(min-width:1100px) {
          .about-grid { grid-template-columns:1fr 360px; gap:64px; }
        }
      `}</style>
    </div>
  );
}
