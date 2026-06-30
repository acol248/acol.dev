import { LocationProvider, Router } from "preact-iso";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProjectShowcase from "./components/ProjectShowcase";
import Projects from "./components/Projects";

export function App() {
  return (
    <LocationProvider>
      <Navbar items={[{ label: "Projects", href: "/projects" }]} />

      <Router>
        <Home />
        <Projects path="/projects" />
        <ProjectShowcase path="/project/:id" />
      </Router>

      <Footer />
    </LocationProvider>
  );
}
