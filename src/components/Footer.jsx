import { useLang } from '../context/LangContext';

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.06)', background:'rgba(10,12,15,0.9)', padding:'20px 16px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', flexDirection:'column', gap:10 }}>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
          <span style={{ fontFamily:'IBM Plex Mono', fontSize:10, color:'rgba(255,255,255,0.2)', letterSpacing:'0.08em' }}>
            © {year} MERVEILLE NZOYEM · DOUALA, CM 🇨🇲
          </span>
          <div style={{ display:'flex', gap:14 }}>
            {['GitHub','LinkedIn','X'].map(s => (
              <span key={s} style={{ fontFamily:'IBM Plex Mono', fontSize:10, color:'rgba(255,255,255,0.25)', letterSpacing:'0.1em', cursor:'pointer' }}>{s}</span>
            ))}
          </div>
        </div>

        <span style={{ fontFamily:'IBM Plex Mono', fontSize:9, color:'rgba(0,102,255,0.35)', letterSpacing:'0.08em' }}>
          {lang === 'fr' ? 'Construire le futur. Un commit à la fois.' : 'Building the future. One commit at a time.'}
        </span>
      </div>
    </footer>
  );
}
