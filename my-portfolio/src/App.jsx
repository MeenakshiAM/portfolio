import "./index.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Projects from "./Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div class="moving-border">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
