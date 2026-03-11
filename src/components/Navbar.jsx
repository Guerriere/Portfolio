import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';

const routes = (nav) => [
  { path:'/',         label: nav.home     },
  { path:'/about',    label: nav.about    },
  { path:'/projects', label: nav.projects },
  { path:'/learning', label: nav.learning },
  { path:'/contact',  label: nav.contact  },
];

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = routes(t.nav);

  return (
    <>
      <header style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        background: scrolled ? 'rgba(10,12,15,0.97)' : 'rgba(10,12,15,0.88)',
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        backdropFilter:'blur(16px)',
        transition:'background 0.3s',
      }}>
        {/* Top accent line */}
        <div style={{ height:2, background:'linear-gradient(90deg,#0066ff 0%,#00d4aa 100%)' }}/>

        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 16px', display:'flex', alignItems:'center', height:54 }}>

          {/* Logo */}
          <NavLink to="/" style={{ textDecoration:'none', display:'flex', alignItems:'baseline', gap:4, marginRight:'auto' }}>
            <span style={{ fontFamily:'IBM Plex Mono', fontSize:15, fontWeight:700, color:'#0066ff', letterSpacing:'0.05em' }}>Merveille_Nzoyem</span>
            <span style={{ fontFamily:'IBM Plex Mono', fontSize:10, color:'rgba(255,255,255,0.3)', letterSpacing:'0.15em' }}>.dev</span>
            <span style={{ marginLeft:6, padding:'2px 5px', fontFamily:'IBM Plex Mono', fontSize:8, letterSpacing:'0.15em', color:'#0066ff', border:'1px solid rgba(0,102,255,0.35)', background:'rgba(0,102,255,0.07)' }}>AI</span>
          </NavLink>

          {/* Desktop nav links */}
          <nav style={{ display:'flex', gap:2, alignItems:'center' }} className="desktop-nav">
            {navItems.map(({ path, label }) => (
              <NavLink key={path} to={path} end={path==='/'} style={({ isActive }) => ({
                textDecoration:'none', padding:'6px 12px',
                fontFamily:'IBM Plex Mono', fontSize:11, letterSpacing:'0.08em',
                color:      isActive ? '#ffffff' : 'rgba(255,255,255,0.38)',
                background: isActive ? 'rgba(0,102,255,0.1)' : 'transparent',
                borderBottom: isActive ? '2px solid #0066ff' : '2px solid transparent',
                transition:'all 0.15s', whiteSpace:'nowrap',
              })}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Lang toggle */}
          <button onClick={toggle} style={{
            marginLeft:12, padding:'5px 10px',
            fontFamily:'IBM Plex Mono', fontSize:11, fontWeight:600, letterSpacing:'0.12em',
            color:'#00d4aa', background:'rgba(0,212,170,0.07)', border:'1px solid rgba(0,212,170,0.25)',
            cursor:'pointer', transition:'all 0.2s', flexShrink:0,
          }}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Hamburger  mobile only */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Menu"
            className="burger-btn"
            style={{
              marginLeft:12, background:'none', border:'none', cursor:'pointer',
              color:'rgba(255,255,255,0.7)', padding:'4px 6px', display:'flex',
              flexDirection:'column', gap:4, alignItems:'center', justifyContent:'center',
            }}
          >
            <span style={{ display:'block', width:20, height:2, background: menuOpen ? '#0066ff' : 'rgba(255,255,255,0.7)', transition:'all 0.2s', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}/>
            <span style={{ display:'block', width:20, height:2, background: menuOpen ? 'transparent' : 'rgba(255,255,255,0.7)', transition:'all 0.2s', opacity: menuOpen ? 0 : 1 }}/>
            <span style={{ display:'block', width:20, height:2, background: menuOpen ? '#0066ff' : 'rgba(255,255,255,0.7)', transition:'all 0.2s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}/>
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div style={{
          position:'fixed', top:58, left:0, right:0, bottom:0, zIndex:99,
          background:'rgba(10,12,15,0.98)',
          display:'flex', flexDirection:'column',
          padding:'24px 16px',
          animation:'slideDown 0.25s cubic-bezier(0.22,1,0.36,1)',
        }} className="mobile-menu">
          {navItems.map(({ path, label }, i) => (
            <NavLink key={path} to={path} end={path==='/'} style={({ isActive }) => ({
              display:'block', padding:'16px 0',
              fontFamily:'IBM Plex Sans Condensed', fontSize:28, fontWeight:700,
              letterSpacing:'-0.01em',
              color: isActive ? '#0066ff' : 'rgba(255,255,255,0.6)',
              borderBottom:'1px solid rgba(255,255,255,0.05)',
              textDecoration:'none',
              animation:`fadeUp 0.3s ${i*60}ms ease-out both`,
            })}>
              <span style={{ fontSize:12, fontFamily:'IBM Plex Mono', color:'rgba(255,255,255,0.2)', marginRight:12, letterSpacing:'0.12em' }}>0{i+1}</span>
              {label}
            </NavLink>
          ))}

          {/* Social links in mobile menu */}
          <div style={{ marginTop:'auto', paddingTop:24 }}>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              {['LinkedIn','GitHub','X (Twitter)'].map(s => (
                <span key={s} style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'rgba(255,255,255,0.3)', letterSpacing:'0.1em', padding:'6px 12px', border:'1px solid rgba(255,255,255,0.1)', cursor:'pointer' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Desktop: show nav, hide burger */
        .desktop-nav  { display:flex !important; }
        .burger-btn   { display:none !important; }
        .mobile-menu  { display:flex !important; }

        /* Mobile: hide nav, show burger */
        @media(max-width:767px) {
          .desktop-nav { display:none !important; }
          .burger-btn  { display:flex !important; }
        }

        @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(10px)}  to{opacity:1;transform:translateY(0)} }
      `}</style>
    </>
  );
}
