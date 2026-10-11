// Le logo « AB » du site (mêmes proportions, même typographie), en version premium :
// dégradé terracotta et reflet léger. Décoratif : le nom est toujours écrit à côté.
// Étant dessiné en SVG dans la page, il ne dépend d'aucun fichier et ne peut pas échouer à charger.
export default function CardLogo({ className = "" }) {
  return (
    <svg
      className={`bc-logo ${className}`.trim()}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bc-logo-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b8532a" />
          <stop offset="1" stopColor="#8a3815" />
        </linearGradient>
        <linearGradient id="bc-logo-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#bc-logo-fill)" />
      <rect x="1" y="1" width="62" height="30" rx="15" fill="url(#bc-logo-shine)" />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="#FFFFFF"
      >
        AB
      </text>
    </svg>
  );
}
