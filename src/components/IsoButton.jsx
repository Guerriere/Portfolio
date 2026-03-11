/**
 * IsoButton bouton 3D isométrique incliné façon carte physique
 * Inspiré du screenshot : LinkedIn, GitHub, X(Twitter)
 *
 * Props:
 *  - label      : texte affiché
 *  - icon       : SVG React element ou emoji
 *  - href       : si lien externe
 *  - download   : nom du fichier à télécharger
 *  - onClick    : handler click
 *  - theme      : 'blue' | 'dark' | 'neon' | 'white'
 *  - size       : 'sm' | 'md' | 'lg'
 */
export default function IsoButton({
  label,
  icon,
  href,
  download,
  onClick,
  theme = 'dark',
  size  = 'md',
}) {
  const sizes = {
    sm: { px: 14, py: 8,  font: 10, depth: 5,  iconSize: 14 },
    md: { px: 20, py: 11, font: 12, depth: 7,  iconSize: 18 },
    lg: { px: 26, py: 14, font: 13, depth: 9,  iconSize: 20 },
  };
  const s = sizes[size];

  const themes = {
    blue: {
      face:   '#0066ff',
      shadow: '#003b94',
      text:   '#ffffff',
      border: '#0055dd',
    },
    neon: {
      face:   '#00d4aa',
      shadow: '#008a6e',
      text:   '#001a14',
      border: '#00b891',
    },
    dark: {
      face:   '#1a1d24',
      shadow: '#0a0c0f',
      text:   'rgba(255,255,255,0.75)',
      border: 'rgba(255,255,255,0.12)',
    },
    white: {
      face:   '#ffffff',
      shadow: '#a0a8b8',
      text:   '#0a0c0f',
      border: '#d0d8e8',
    },
  };
  const th = themes[theme];

  /* CSS-only 3D via transform + pseudo-element trick using box-shadow stacking */
  const style = {
    wrapper: {
      display:        'inline-block',
      position:       'relative',
      cursor:         'pointer',
      textDecoration: 'none',
      userSelect:     'none',
      /* tilt isométrique */
      transform:      'perspective(400px) rotateX(12deg) rotateZ(-4deg)',
      transition:     'transform 0.18s cubic-bezier(0.34,1.56,0.64,1), filter 0.18s',
      transformStyle: 'preserve-3d',
    },
    face: {
      display:        'flex',
      alignItems:     'center',
      gap:            8,
      padding:        `${s.py}px ${s.px}px`,
      background:     th.face,
      border:         `1px solid ${th.border}`,
      fontFamily:     'IBM Plex Mono',
      fontSize:       s.font,
      fontWeight:     700,
      letterSpacing:  '0.1em',
      color:          th.text,
      textTransform:  'uppercase',
      whiteSpace:     'nowrap',
      position:       'relative',
      zIndex:         2,
      /* Faux côté droit (ombre isométrique droite) */
      boxShadow: `
        ${s.depth}px ${s.depth}px 0 0 ${th.shadow},
        ${s.depth + 1}px ${s.depth + 1}px 0 0 ${th.border}
      `,
    },
  };

  const content = (
    <span style={style.face}>
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: s.iconSize, height: s.iconSize }}>
          {icon}
        </span>
      )}
      {label}
    </span>
  );

  const hoverIn = e => {
    e.currentTarget.style.transform =
      'perspective(400px) rotateX(6deg) rotateZ(-2deg) translateY(-3px)';
    e.currentTarget.style.filter = 'brightness(1.12)';
  };
  const hoverOut = e => {
    e.currentTarget.style.transform =
      'perspective(400px) rotateX(12deg) rotateZ(-4deg)';
    e.currentTarget.style.filter = 'brightness(1)';
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel="noopener noreferrer"
        style={style.wrapper}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      style={style.wrapper}
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick?.()}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {content}
    </div>
  );
}
