import Button from "./Button.jsx";
import { audiences } from "../data/content.js";

export default function Audience() {
  return (
    <section className="section section--tight" aria-label="Pour qui">
      <div className="container audience">
        {audiences.map((a, i) => (
          <article className={`card audience__card reveal ${i === 1 ? "audience__card--dark" : ""}`} key={a.title}>
            <h2 className="h3">{a.title}</h2>
            <p>{a.text}</p>
            <Button href={a.cta.href} variant={i === 1 ? "light" : "primary"}>
              {a.cta.label}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
