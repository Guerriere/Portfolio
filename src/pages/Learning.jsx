import NeuralBackground from '../components/NeuralBackground';
import { useLang } from '../context/LangContext';

function BookCard({ title, author, takeaway, index=0 }) {
  const colors = ['#0066ff','#00d4aa','rgba(155,89,182,0.9)'];
  const color  = colors[index % colors.length];
  return (
    <div style={{ padding:'20px',background:'rgba(18,21,26,0.85)',border:'1px solid rgba(255,255,255,0.07)',borderLeft:`2px solid ${color}`,animation:`fadeUp 0.5s ${index*120}ms ease-out both` }}>
      <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:8 }}>
        <span style={{ fontFamily:'IBM Plex Mono',fontSize:12,color }}>▲</span>
        <span style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(14px,2vw,16px)',fontWeight:700,color:'#ffffff' }}>{title}</span>
      </div>
      <div style={{ fontFamily:'IBM Plex Mono',fontSize:10,letterSpacing:'0.12em',color,marginBottom:10 }}>{author}</div>
      <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(12px,1.5vw,13px)',lineHeight:1.75,color:'rgba(255,255,255,0.48)' }}>{takeaway}</p>
    </div>
  );
}

function RoadmapItem({ year, item, done, index=0 }) {
  return (
    <div style={{ display:'flex',gap:14,padding:'12px 14px',background:done?'rgba(0,212,170,0.05)':'rgba(18,21,26,0.6)',border:`1px solid ${done?'rgba(0,212,170,0.25)':'rgba(255,255,255,0.06)'}`,marginBottom:7,animation:`fadeUp 0.5s ${index*100}ms ease-out both` }}>
      <div style={{ width:16,height:16,flexShrink:0,border:`1px solid ${done?'#00d4aa':'rgba(255,255,255,0.2)'}`,display:'flex',alignItems:'center',justifyContent:'center',marginTop:2 }}>
        {done && <span style={{ color:'#00d4aa',fontSize:11,lineHeight:1 }}>✓</span>}
      </div>
      <div>
        <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.15em',color:done?'#00d4aa':'rgba(255,255,255,0.28)',marginBottom:4 }}>{year}</div>
        <div style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(12px,1.5vw,13px)',color:done?'rgba(255,255,255,0.7)':'rgba(255,255,255,0.42)',lineHeight:1.6 }}>{item}</div>
      </div>
    </div>
  );
}

export default function Learning() {
  const { t } = useLang();
  const l = t.learning;

  const books = [
    { title:l.book1title, author:l.book1author, takeaway:l.book1take },
    { title:l.book2title, author:l.book2author, takeaway:l.book2take },
    { title:l.book3title, author:l.book3author, takeaway:l.book3take },
  ];
  const roadmap = [
    { year:l.r1year, item:l.r1item, done:true  },
    { year:l.r2year, item:l.r2item, done:false },
    { year:l.r3year, item:l.r3item, done:false },
    { year:l.r4year, item:l.r4item, done:false },
    { year:l.r5year, item:l.r5item, done:false },
  ];

  return (
    <div style={{ minHeight:'100vh',paddingTop:58,position:'relative',overflow:'hidden' }}>
      <NeuralBackground opacity={0.25} />
      <div style={{ position:'relative',zIndex:2,maxWidth:1280,margin:'0 auto',padding:'40px 16px 60px' }}>

        {/* Header */}
        <div style={{ marginBottom:36 }}>
          <div className="section-label" style={{ marginBottom:12 }}>// {l.sectionLabel}</div>
          <h2 style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(32px,7vw,68px)',fontWeight:800,lineHeight:1,color:'#ffffff',letterSpacing:'-0.01em',marginBottom:20 }}>
            {l.headline}
          </h2>
          <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(14px,1.6vw,16px)',lineHeight:1.75,color:'rgba(255,255,255,0.48)',maxWidth:600 }}>
            {l.intro}
          </p>
        </div>

        <div className="learning-grid">

          {/* Books */}
          <div>
            <div className="section-label" style={{ marginBottom:20 }}>// {l.readingLabel}</div>
            <div style={{ display:'flex',flexDirection:'column',gap:14 }}>
              {books.map((b,i) => <BookCard key={b.title} {...b} index={i}/>)}
            </div>
          </div>

          {/* Roadmap + YouTube */}
          <div>
            <div className="section-label" style={{ marginBottom:20 }}>// {l.roadmapLabel}</div>
            <div style={{ marginBottom:28 }}>
              {roadmap.map((r,i) => <RoadmapItem key={i} {...r} index={i}/>)}
            </div>

            {/* YouTube */}
            <div style={{ padding:'20px',background:'rgba(18,21,26,0.85)',border:'1px solid rgba(255,107,53,0.25)',position:'relative',overflow:'hidden',marginBottom:16 }}>
              <div style={{ position:'absolute',top:-40,right:-40,width:100,height:100,borderRadius:'50%',background:'rgba(255,107,53,0.07)',filter:'blur(24px)',pointerEvents:'none' }}/>
              <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:14 }}>
                <span style={{ width:34,height:34,background:'rgba(255,107,53,0.15)',border:'1px solid rgba(255,107,53,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,color:'#ff6b35',flexShrink:0 }}>▶</span>
                <div>
                  <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.18em',color:'#ff6b35',marginBottom:3 }}>{l.youtubeLabel}</div>
                  <div style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(15px,2vw,18px)',fontWeight:700,color:'#ffffff' }}>{l.youtubeTitle}</div>
                </div>
              </div>
              <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(12px,1.4vw,13px)',lineHeight:1.75,color:'rgba(255,255,255,0.48)',marginBottom:16 }}>{l.youtubeDesc}</p>
              <div>
                <div style={{ display:'flex',justifyContent:'space-between',marginBottom:6 }}>
                  <span style={{ fontFamily:'IBM Plex Mono',fontSize:9,color:'rgba(255,255,255,0.28)',letterSpacing:'0.15em' }}>PROGRESSION</span>
                  <span style={{ fontFamily:'IBM Plex Mono',fontSize:9,color:'#ff6b35' }}>2027</span>
                </div>
                <div style={{ height:2,background:'rgba(255,255,255,0.07)' }}>
                  <div style={{ height:'100%',width:'35%',background:'linear-gradient(90deg,#ff6b35,#ff6b3580)' }}/>
                </div>
              </div>
            </div>

            {/* Mini stats */}
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:10 }}>
              {[{v:'41+',l:'Jours codés',c:'#0066ff'},{v:'100%',l:'Parcours public',c:'#00d4aa'}].map(s => (
                <div key={s.l} style={{ padding:'14px',background:'rgba(18,21,26,0.8)',border:`1px solid ${s.c}25`,textAlign:'center' }}>
                  <div style={{ fontFamily:'IBM Plex Mono',fontSize:'clamp(22px,3.5vw,28px)',fontWeight:700,color:s.c,textShadow:`0 0 20px ${s.c}50`,marginBottom:5 }}>{s.v}</div>
                  <div style={{ fontFamily:'IBM Plex Mono',fontSize:9,letterSpacing:'0.15em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        /* Mobile */
        .learning-grid { display:grid; grid-template-columns:1fr; gap:32px; }

        /* Tablet+ */
        @media(min-width:768px) {
          .learning-grid { grid-template-columns:1fr 1fr; gap:48px; }
        }
      `}</style>
    </div>
  );
}
