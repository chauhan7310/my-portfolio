import "./App.css";
import Certificates from "./components/Certificates";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App; 