import { useEffect, useRef } from "react";

// Fond du site inspiré d'un bureau « setup » : mur crème chaud, panneau de lattes de bois,
// étagère éclairée par une LED avec une plante retombante, lanterne en papier.
// Tout est dessiné en CSS et en SVG (aucune photo), décoratif et masqué aux lecteurs d'écran.
//
// Mouvements :
// - au défilement, les couches glissent à des vitesses différentes (parallaxe, variable --sp de 0 à 1) ;
// - les lumières « respirent » et la plante se balance (animations CSS) ;
// - une lumière chaude suit le curseur (--mx, --my) et éclaire la carte survolée (--cx, --cy).
// Les variables sont posées en JavaScript avec style.setProperty, autorisé par la CSP du site.
// Rien ne bouge si le visiteur préfère moins d'animations ; au doigt, pas de lumière de curseur.

const leaves = [
  [338, 100, -30],
  [328, 124, 40],
  [344, 150, -20],
  [324, 176, 35],
  [340, 204, -25],
  [328, 232, 30],
  [338, 262, -30],
  [326, 290, 25],
  [332, 318, 0],
  [304, 104, 30],
  [292, 130, -35],
  [300, 158, 20],
  [288, 186, -10],
];

function useAmbientMotion(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let scrollFrame = 0;
    let moveFrame = 0;
    let pointer = null;
    let litCard = null;

    const clearCard = () => {
      litCard?.style.removeProperty("--cx");
      litCard?.style.removeProperty("--cy");
      litCard = null;
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        el.style.setProperty("--sp", max > 0 ? (window.scrollY / max).toFixed(4) : "0");
      });
    };

    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      pointer = e;
      if (moveFrame) return;
      moveFrame = requestAnimationFrame(() => {
        moveFrame = 0;
        const { clientX: x, clientY: y, target } = pointer;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.classList.add("is-lit");

        const card = target instanceof Element ? target.closest(".card") : null;
        if (card !== litCard) clearCard();
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--cx", `${x - r.left}px`);
          card.style.setProperty("--cy", `${y - r.top}px`);
          litCard = card;
        }
      });
    };

    // Le curseur quitte la fenêtre : la lumière s'éteint doucement.
    const onOut = (e) => {
      if (e.relatedTarget) return;
      el.classList.remove("is-lit");
      clearCard();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut);
    return () => {
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(moveFrame);
      clearCard();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, [ref]);
}

export default function Ambient() {
  const ref = useRef(null);
  useAmbientMotion(ref);

  return (
    <div className="ambient" ref={ref} aria-hidden="true">
      <div className="ambient__wall" />
      <div className="ambient__slats" />
      <div className="ambient__lantern" />

      {/* Étagère éclairée par une LED, avec livres, vase, cadre et plante retombante */}
      <svg className="ambient__shelf" viewBox="0 0 400 360" focusable="false">
        <defs>
          <radialGradient id="ambient-led" cx="0.5" cy="0" r="0.75">
            <stop offset="0" stopColor="#ffd9a8" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffd9a8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse className="ambient__led" cx="200" cy="100" rx="230" ry="150" fill="url(#ambient-led)" />

        <rect x="250" y="14" width="64" height="74" rx="2" fill="#3a302a" />
        <rect x="256" y="20" width="52" height="62" fill="#f6efe6" />
        <path d="M270 74c6-14 14-24 26-34M282 56c-4-4-8-5-12-4M288 48c4-2 8-2 11 0" fill="none" stroke="#8a6f5c" strokeWidth="1.4" strokeLinecap="round" />

        <rect x="70" y="64" width="64" height="12" rx="1.5" fill="#efe6da" />
        <rect x="76" y="54" width="56" height="10" rx="1.5" fill="#d9c7b1" />
        <path d="M160 88c-12 0-16-10-14-20 2-8 8-12 10-18h8c2 6 8 10 10 18 2 10-2 20-14 20z" fill="#e9ded1" />

        <rect x="10" y="88" width="380" height="12" rx="3" fill="#c9a27c" />
        <rect x="16" y="100" width="368" height="2" rx="1" fill="#fff1d6" />

        <g className="ambient__vine">
          <path d="M336 84c14 56-18 96-2 146s-8 60-4 90" fill="none" stroke="#6f8f5e" strokeWidth="2" />
          <path d="M318 84c-8 40-30 60-24 104" fill="none" stroke="#6f8f5e" strokeWidth="2" />
          {leaves.map(([x, y, r], i) => (
            <path
              key={i}
              d="M0 0c6-8 18-6 16 6-2 8-10 12-16 14-6-2-14-6-16-14-2-12 10-14 16-6z"
              transform={`translate(${x} ${y}) rotate(${r})`}
              fill={i % 2 ? "#6a8a5a" : "#82a06f"}
            />
          ))}
        </g>
        <path d="M322 62c-10-12-6-24 4-28 0 12 2 20-4 28zM338 60c4-14 14-20 24-18-6 10-14 16-24 18zM330 60c-2-14 4-24 12-28 0 12-4 20-12 28z" fill="#82a06f" />
        <rect x="316" y="60" width="38" height="28" rx="6" fill="#efe6da" />
      </svg>

      <div className="ambient__cursor" />
    </div>
  );
}
