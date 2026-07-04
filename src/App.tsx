import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects, { type Project } from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setActiveProject} />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
