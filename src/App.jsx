import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Audience from "./components/Audience.jsx";
import Demo from "./components/Demo.jsx";
import Process from "./components/Process.jsx";
import Pricing from "./components/Pricing.jsx";
import Delays from "./components/Delays.jsx";
import Maintenance from "./components/Maintenance.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { site } from "./data/content.js";

export default function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Hero />
        <Services />
        <Audience />
        <Demo />
        <Process />
        <Pricing />
        <Delays />
        <Maintenance />
        <About />
        <Contact />
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role} · {site.location}
          </p>
        </footer>
      </main>
    </>
  );
}