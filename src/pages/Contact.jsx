import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import { useLang } from '../context/LangContext';

function Field({ label, children }) {
  return (
    <div style={{ marginBottom:18 }}>
      <label style={{ display:'block',fontFamily:'IBM Plex Mono',fontSize:10,letterSpacing:'0.14em',color:'rgba(0,102,255,0.7)',marginBottom:7,textTransform:'uppercase' }}>
        <span style={{ color:'#0066ff' }}>→</span> {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm]       = useState({ name:'', email:'', subject:'', message:'' });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

  const set = key => e => setForm(p => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Veuillez remplir les champs obligatoires.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mqeyqqep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSent(true);
        // Reset the form so it's empty for the next message
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      alert("Impossible de contacter le serveur.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ minHeight:'100vh',paddingTop:58,position:'relative',overflow:'hidden' }}>
      <NeuralBackground opacity={0.22} />
      <div style={{ position:'relative',zIndex:2,maxWidth:1100,margin:'0 auto',padding:'40px 16px 60px' }}>

        {/* Header */}
        <div style={{ marginBottom:36 }}>
          <div className="section-label" style={{ marginBottom:12 }}>// {c.sectionLabel}</div>
          <h2 style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:'clamp(32px,7vw,68px)',fontWeight:800,lineHeight:1,color:'#ffffff',letterSpacing:'-0.01em',marginBottom:12 }}>
            {c.headline}
          </h2>
          <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(14px,1.5vw,15px)',color:'rgba(255,255,255,0.45)' }}>{c.intro}</p>
        </div>

        <div className="contact-grid">

          {/* Form */}
          <div style={{ background:'rgba(18,21,26,0.9)',border:'1px solid rgba(255,255,255,0.07)' }}>
            {/* Header bar */}
            <div style={{ display:'flex',alignItems:'center',gap:6,padding:'10px 16px',borderBottom:'1px solid rgba(255,255,255,0.06)',background:'rgba(10,12,15,0.6)' }}>
              {['#ff5f57','#ffbd2e','#28ca41'].map(c => <span key={c} style={{ width:9,height:9,borderRadius:'50%',background:c,opacity:0.7 }}/>)}
              <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(0,102,255,0.5)',marginLeft:6,letterSpacing:'0.08em' }}>Formulaire de contact</span>
            </div>

            <div style={{ padding:'22px 20px' }}>
              {sent ? (
                <div style={{ textAlign:'center',padding:'36px 0' }}>
                  <div style={{ fontSize:44,marginBottom:14,color:'#00d4aa',textShadow:'0 0 30px rgba(0,212,170,0.6)',fontFamily:'IBM Plex Mono' }}>✓</div>
                  <div style={{ fontFamily:'IBM Plex Sans Condensed',fontSize:20,fontWeight:700,color:'#ffffff',marginBottom:8 }}>{c.successTitle}</div>
                  <div style={{ fontFamily:'IBM Plex Sans',fontSize:13,color:'rgba(255,255,255,0.45)' }}>{c.successMsg}</div>
                </div>
              ) : (
                <>
                  {/* Two-col name+email on wider screens */}
                  <div className="form-row">
                    <Field label="Nom">
                      <input className="input-terminal" type="text" placeholder={c.namePH} value={form.name} onChange={set('name')}/>
                    </Field>
                    <Field label="Email">
                      <input className="input-terminal" type="email" placeholder={c.emailPH} value={form.email} onChange={set('email')}/>
                    </Field>
                  </div>
                  <Field label="Sujet">
                    <input className="input-terminal" type="text" placeholder={c.subjectPH} value={form.subject} onChange={set('subject')}/>
                  </Field>
                  <Field label="Message">
                    <textarea className="input-terminal" rows={5} placeholder={c.messagePH} value={form.message} onChange={set('message')} style={{ resize:'vertical' }}/>
                  </Field>
                  <button className="btn-primary" onClick={handleSubmit} style={{ width:'100%',justifyContent:'center',marginTop:4,opacity:sending?0.7:1 }}>
                    {sending ? '⟳  Envoi en cours...' : c.submit}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div style={{ display:'flex',flexDirection:'column',gap:16 }}>

            {/* Details */}
            <div style={{ padding:'20px',background:'rgba(18,21,26,0.85)',border:'1px solid rgba(255,255,255,0.07)' }}>
              <div className="section-label" style={{ marginBottom:16 }}>// Informations</div>
              {[
                ['Localisation', c.location],
                ['Disponibilité',c.availability],
                ['Réponse',      c.response],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex',gap:10,marginBottom:12,flexWrap:'wrap' }}>
                  <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,letterSpacing:'0.1em',color:'rgba(0,102,255,0.55)',minWidth:90,flexShrink:0 }}>{k}:</span>
                  <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'rgba(255,255,255,0.5)' }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Open to */}
            <div style={{ padding:'20px',background:'rgba(18,21,26,0.85)',border:'1px solid rgba(0,102,255,0.15)' }}>
              <div className="section-label" style={{ marginBottom:16,color:'rgba(0,102,255,0.6)' }}>// {c.openTo}</div>
              {[c.c1,c.c2,c.c3,c.c4].map((item,i) => (
                <div key={i} style={{ display:'flex',gap:10,marginBottom:10 }}>
                  <span style={{ color:'#0066ff',flexShrink:0,fontSize:10,marginTop:3 }}>▶</span>
                  <span style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(12px,1.5vw,13px)',color:'rgba(255,255,255,0.5)',lineHeight:1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ padding:'18px',borderLeft:'2px solid rgba(0,212,170,0.6)',background:'rgba(0,212,170,0.03)' }}>
              <p style={{ fontFamily:'IBM Plex Sans',fontSize:'clamp(12px,1.4vw,13px)',lineHeight:1.8,color:'rgba(255,255,255,0.42)',fontStyle:'italic',marginBottom:8 }}>
                "L'Afrique ne manque pas de talent. Elle manque de personnes prêtes à construire sans attendre la permission."
              </p>
              <span style={{ fontFamily:'IBM Plex Mono',fontSize:10,color:'#00d4aa',letterSpacing:'0.08em' }}> Merveille_nzoyem // 2025</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile */
        .contact-grid { display:grid; grid-template-columns:1fr; gap:24px; }
        .form-row     { display:grid; grid-template-columns:1fr; gap:0; }

        /* Tablet+ */
        @media(min-width:640px) {
          .form-row { grid-template-columns:1fr 1fr; gap:0 16px; }
        }
        /* Desktop+ */
        @media(min-width:900px) {
          .contact-grid { grid-template-columns:1fr 320px; gap:40px; }
        }
        @media(min-width:1100px) {
          .contact-grid { grid-template-columns:1fr 340px; gap:48px; }
        }
      `}</style>
    </div>
  );
}
