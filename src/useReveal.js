import { useEffect } from "react";

// Animation discrète : les éléments `.reveal` apparaissent en douceur au défilement.
// Sans JavaScript, sans IntersectionObserver ou si le visiteur préfère réduire
// les animations, tout reste affiché normalement.
export default function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const items = document.querySelectorAll(".reveal");
    // Ce qui est déjà à l'écran au chargement s'affiche tout de suite (pas de page vide
    // pour les robots, les captures ou les connexions lentes) ; seul le reste est animé.
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
    });
    document.documentElement.classList.add("js-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
