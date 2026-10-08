import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import Tech from "./components/Tech.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./useReveal.js";

export default function App() {
  useReveal();
  return (
    <>
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="main" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
