import React, { useState, useEffect } from "react";

import Footer from "../components/Layout/Footer";
import Hero from "../components/Sections/Hero";
import Projects from "../components/Sections/Projects";
import Experience from "../components/Sections/Experience";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Navbar from "../components/Layout/Navbar";
import Background from "../components/Layout/Background";
import Services from "../components/Sections/Work";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-400 font-sans selection:bg-violet-500/30 selection:text-violet-200 relative overflow-x-hidden">
      <Background />
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
