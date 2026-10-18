import { useEffect, useRef } from "react";
import Button from "./Button.jsx";
import { hero, status, projects } from "../data/content.js";

// L'écran de l'ordinateur fait défiler les captures des projets, dans l'ordre de la section
// Projets : d'abord le portfolio, puis Maison Aria.
const screens = projects.filter((p) => p.image).slice(0, 2);

// Inclinaison de l'ordinateur selon la position de la souris.
// Les valeurs passent par des variables CSS (--rx, --ry) posées en JavaScript :
// la CSP du site interdit les attributs style dans le HTML, mais pas ce réglage-là.
function useTilt(sceneRef, laptopRef) {
  useEffect(() => {
    const scene = sceneRef.current;
    const laptop = laptopRef.current;
    if (!scene || !laptop) return;
    // Pas d'effet si le visiteur préfère moins d'animations.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e) => {
      if (e.pointerType === "touch") return; // au doigt, l'ordinateur flotte simplement
      const r = scene.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5; // de -0,5 à 0,5
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        laptop.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
        laptop.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      laptop.style.removeProperty("--ry");
      laptop.style.removeProperty("--rx");
    };
    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
    };
  }, [sceneRef, laptopRef]);
}

// Récit au défilement (ordinateur, écrans ≥ 960px) : pendant que l'on fait défiler l'accueil,
// le texte s'efface, l'ordinateur vient au centre et son écran passe d'un projet à l'autre.
// La progression (0 → 1) est posée dans la variable CSS --p ; les styles .hero--story font le reste.
// Sur mobile, ou si l'on préfère moins d'animations, l'accueil reste un écran classique.
function useScrollStory(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const wide = window.matchMedia("(min-width: 960px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const sticky = section.firstElementChild;
      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const distance = section.offsetHeight - sticky.offsetHeight;
      const p = Math.min(1, Math.max(0, (top - section.getBoundingClientRect().top) / (distance || 1)));
      section.style.setProperty("--p", p.toFixed(4));
      section.classList.toggle("is-past", p > 0.3); // texte masqué : ses boutons ne sont plus cliquables
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const setup = () => {
      const on = wide.matches && !reduce.matches;
      section.classList.toggle("hero--story", on);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (on) {
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();
      } else {
        section.style.removeProperty("--p");
        section.classList.remove("is-past");
      }
    };

    setup();
    wide.addEventListener("change", setup);
    reduce.addEventListener("change", setup);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      wide.removeEventListener("change", setup);
      reduce.removeEventListener("change", setup);
    };
  }, [sectionRef]);
}

export default function Hero() {
  const sceneRef = useRef(null);
  const laptopRef = useRef(null);
  const sectionRef = useRef(null);
  useTilt(sceneRef, laptopRef);
  useScrollStory(sectionRef);

  return (
    <section id="accueil" className="hero" ref={sectionRef}>
      <div className="hero__sticky">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="badge">{hero.badge}</p>
            <h1>{hero.title}</h1>
            <p className="lead">{hero.lead}</p>
            <div className="actions">
              <Button href="#projets">Voir mes projets</Button>
              <Button href="#contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </div>

          {/* Ordinateur décoratif : les projets sont présentés plus bas, avec leurs liens. */}
          <div className="hero__stage" aria-hidden="true">
            <div className="laptop-scene" ref={sceneRef}>
              <div className="laptop" ref={laptopRef}>
                <div className="laptop__lid">
                  <div className="laptop__screen">
                    {screens.map((p, i) => (
                      <picture className={`laptop__slide laptop__slide--${i + 1}`} key={p.title}>
                        <source type="image/avif" srcSet={p.image.avif} />
                        <source type="image/webp" srcSet={p.image.webp} />
                        <img
                          src={p.image.fallback}
                          alt=""
                          width={p.image.width}
                          height={p.image.height}
                          {...(i === 0 ? { fetchpriority: "high" } : { loading: "lazy" })}
                          decoding="async"
                        />
                      </picture>
                    ))}
                  </div>
                </div>
                <div className="laptop__base" />
                <div className="laptop__shadow" />
              </div>

              {/* État réel de ce site, vérifié en ligne. */}
              <p className="float-chip float-chip--status">
                <span className="status-dot" />
                {status.url} · {status.label}
              </p>
            </div>

            {/* Légende du récit : seulement pour les projets qui en ont une (`heroCaption`). */}
            <ul className="hero__captions">
              {screens.map(
                (p, i) =>
                  p.heroCaption && (
                    <li className={`hero__caption hero__caption--${i + 1}`} key={p.title}>
                      {p.heroCaption}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <p className="hero__hint" aria-hidden="true">
          Faites défiler
        </p>
      </div>
    </section>
  );
}
