import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import StatsCounter from './components/StatsCounter'
import Clients from "./components/Clients";
import UploadResume from "./components/UploadResume";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        {/* <Projects /> */}
        <WhyUs />
        <Team />
        <Careers />
        <UploadResume />
        <StatsCounter />
        <Contact />
        <Clients />
      </main>
      <Footer />

         <BackgroundMusic />

      
      {showTop && (
        <a
          className="back-top"
          href="#home"
          aria-label="Back to top"
          title="Back to top"
        >
          <span className="back-top-glow" />
          <span className="back-top-icon">↑</span>
          <span className="back-top-ring" />
        </a>
      )}

    </>
  );
}