import { useId } from "react";

// Scène de bureau dessinée pour la carte : mur clair, lampe allumée, plante, bureau en bois,
// écran qui affiche la capture du portfolio. Dessinée en SVG (aucune photo à acheter,
// nette à l'impression). Décorative : masquée aux lecteurs d'écran.
// Le cadrage « slice » remplit toute la zone, quelle que soit sa forme.
// Deux ambiances : « day » (verso, mur clair) et « night » (recto, pièce sombre, lampe et écran allumés).
// Les identifiants des dégradés sont uniques (useId) : plusieurs scènes peuvent cohabiter dans la page.
const palettes = {
  day: { wallTop: "#e4ddd5", wallBottom: "#c9bfb4", glow: 0.75, plant: ["#557d44", "#3f6b3a", "#6a9152"] },
  night: { wallTop: "#3b2f28", wallBottom: "#1e1815", glow: 0.6, plant: ["#4a6b3c", "#365a32", "#5b7d47"] },
};

export default function DeskArt({ className = "", screen, variant = "day" }) {
  const id = useId().replace(/:/g, "");
  const c = palettes[variant] || palettes.day;
  const ref = (name) => `url(#${id}-${name})`;
  return (
    <svg
      className={`bc-desk ${className}`.trim()}
      viewBox="0 0 300 440"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-wall`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.wallTop} />
          <stop offset="1" stopColor={c.wallBottom} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.92" cy="0.42" r="0.55">
          <stop offset="0" stopColor="#ffcf96" stopOpacity={c.glow} />
          <stop offset="1" stopColor="#ffcf96" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-wood`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6b4630" />
          <stop offset="1" stopColor="#3b2619" />
        </linearGradient>
        <linearGradient id={`${id}-glare`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${id}-screen`}>
          <rect x="61" y="123" width="178" height="106" rx="2" />
        </clipPath>
      </defs>

      {/* Mur et lumière de la lampe */}
      <rect width="300" height="440" fill={ref("wall")} />
      <rect width="300" height="440" fill={ref("glow")} />

      {variant === "night" && (
        <>
          {/* Le soir : halo de l'écran sur le mur et cône de lumière de la lampe */}
          <ellipse cx="150" cy="178" rx="120" ry="80" fill="#ffe7c7" opacity="0.12" />
          <path d="M246 192 L186 308 H300 V222z" fill="#ffcf96" opacity="0.14" />
        </>
      )}

      {/* Plante, posée sur le bureau à gauche */}
      <g>
        <path d="M24 264c-12-20-12-42-2-58 4 18 5 38 4 58z" fill={c.plant[0]} />
        <path d="M28 264c2-26 12-44 28-52-6 18-14 36-24 52z" fill={c.plant[1]} />
        <path d="M20 266c-12-10-20-26-18-42 9 12 16 26 21 40z" fill={c.plant[1]} />
        <path d="M30 266c8-14 20-22 34-22-10 9-21 16-31 24z" fill={c.plant[2]} />
        <rect x="8" y="262" width="38" height="46" rx="5" fill="#2a2725" />
      </g>

      {/* Lampe d'architecte, à droite */}
      <g fill="none" stroke="#1c1a19" strokeWidth="5" strokeLinecap="round">
        <path d="M280 306 L292 222" />
        <path d="M292 222 L266 180" />
      </g>
      <rect x="266" y="302" width="30" height="6" rx="2" fill="#1c1a19" />
      <path d="M272 168 l-28 15 a14 14 0 0 0 19 22 l21 -21z" fill="#1c1a19" />
      <ellipse cx="252" cy="196" rx="9" ry="3.5" transform="rotate(-40 252 196)" fill="#ffe2b8" />

      {/* Écran : cadre, capture du site, reflet, pied */}
      <rect x="56" y="118" width="188" height="120" rx="6" fill="#151413" />
      <g clipPath={ref("screen")}>
        <rect x="61" y="123" width="178" height="106" fill="#faf7f2" />
        {screen && (
          <image href={screen} x="61" y="123" width="178" height="106" preserveAspectRatio="xMidYMin slice" />
        )}
        <rect x="61" y="123" width="178" height="106" fill={ref("glare")} />
      </g>
      <rect x="142" y="238" width="16" height="60" fill="#1f1d1c" />
      <rect x="110" y="297" width="80" height="9" rx="3" fill="#1f1d1c" />

      {/* Bureau en bois, clavier et souris */}
      <rect y="308" width="300" height="132" fill={ref("wood")} />
      <rect y="308" width="300" height="3" fill="#8a5f43" />
      <rect x="82" y="324" width="130" height="16" rx="3" fill="#1d1b1a" />
      <g fill="#33302e">
        {[0, 1, 2].map((row) =>
          Array.from({ length: 12 }, (_, i) => (
            <rect key={`${row}-${i}`} x={86.5 + i * 10.2} y={327 + row * 4.4} width="8" height="3" rx="0.8" />
          ))
        )}
      </g>
      <ellipse cx="236" cy="332" rx="9" ry="6.5" fill="#1d1b1a" />
    </svg>
  );
}
