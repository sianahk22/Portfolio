// Illustration abstraite en perspective isométrique : trois plaques empilées
// (infrastructure, code, interface) reliées par des pointillés (l'automatisation).
// Purement décorative, donc masquée aux lecteurs d'écran.
//
// Astuce : chaque plaque est un losange. Le groupe « matrix(...) » déforme un carré
// de 100 × 100 en ce losange, ce qui permet de dessiner les détails « à plat ».
const top = (y) => `matrix(0.7 -0.4 0.7 0.4 30 ${y})`;

function Slab({ y, faceFill, sideFill, stroke, className, children }) {
  return (
    <g className={`bc-art__layer ${className}`}>
      <polygon points={`30,${y} 100,${y + 40} 170,${y} 170,${y + 7} 100,${y + 47} 30,${y + 7}`} fill={sideFill} />
      <polygon
        points={`30,${y} 100,${y - 40} 170,${y} 100,${y + 40}`}
        fill={faceFill}
        stroke={stroke}
        strokeWidth="1"
      />
      <g transform={top(y)}>{children}</g>
    </g>
  );
}

export default function TechArt({ className = "" }) {
  return (
    <svg className={`bc-art ${className}`.trim()} viewBox="0 0 200 210" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bc-art-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9764c" />
          <stop offset="1" stopColor="#a8461f" />
        </linearGradient>
        <radialGradient id="bc-art-glow">
          <stop offset="0" stopColor="#e08a63" stopOpacity="0.55" />
          <stop offset="1" stopColor="#e08a63" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo lumineux derrière l'empilement */}
      <circle cx="100" cy="100" r="92" fill="url(#bc-art-glow)" />

      {/* Liaisons verticales entre les plaques */}
      <g stroke="#a8461f" strokeWidth="1" strokeDasharray="2 3" opacity="0.55">
        <path d="M30 70v80M170 70v80M100 110v80" />
      </g>

      {/* Plaque du bas : infrastructure (grille de points) */}
      <Slab y={155} faceFill="#efe9e1" sideFill="#d9d1c6" stroke="#e2dad0" className="bc-art__layer--1">
        {[20, 40, 60, 80].map((u) =>
          [20, 40, 60, 80].map((v) => <circle key={`${u}-${v}`} cx={u} cy={v} r="3.2" fill="#b9ada0" />)
        )}
      </Slab>

      {/* Plaque du milieu : code */}
      <Slab y={113} faceFill="#ffffff" sideFill="#e4ddd3" stroke="#e7e2db" className="bc-art__layer--2">
        <rect x="14" y="16" width="42" height="7" rx="3.5" fill="#a8461f" />
        <rect x="14" y="32" width="66" height="7" rx="3.5" fill="#57534e" opacity="0.55" />
        <rect x="24" y="48" width="50" height="7" rx="3.5" fill="#57534e" opacity="0.35" />
        <rect x="24" y="64" width="34" height="7" rx="3.5" fill="#a8461f" opacity="0.6" />
        <rect x="14" y="80" width="56" height="7" rx="3.5" fill="#57534e" opacity="0.25" />
      </Slab>

      {/* Plaque du haut : interface */}
      <Slab y={71} faceFill="url(#bc-art-accent)" sideFill="#7f3413" stroke="#c4643c" className="bc-art__layer--3">
        <rect x="12" y="12" width="76" height="76" rx="9" fill="#ffffff" opacity="0.16" />
        <circle cx="22" cy="22" r="3.4" fill="#ffffff" opacity="0.85" />
        <circle cx="32" cy="22" r="3.4" fill="#ffffff" opacity="0.6" />
        <circle cx="42" cy="22" r="3.4" fill="#ffffff" opacity="0.4" />
        <rect x="20" y="38" width="38" height="20" rx="4" fill="#ffffff" opacity="0.9" />
        <rect x="20" y="64" width="60" height="6" rx="3" fill="#ffffff" opacity="0.55" />
      </Slab>

      {/* Point lumineux : le déclencheur d'une automatisation */}
      <g className="bc-art__spark">
        <circle cx="170" cy="70" r="7" fill="#e08a63" opacity="0.3" />
        <circle cx="170" cy="70" r="3" fill="#a8461f" />
      </g>
    </svg>
  );
}
