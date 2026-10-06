export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <header className="section-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="intro">{intro}</p>}
    </header>
  );
}