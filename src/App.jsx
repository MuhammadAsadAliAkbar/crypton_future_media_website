
import { useEffect, useState, useRef } from "react";
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
import StatsCounter from "./components/StatsCounter";
import Clients from "./components/Clients";
import UploadResume from "./components/UploadResume";
import BackgroundMusic from "./components/BackgroundMusic";
import jetSound from "./assets/audio/jet-whoosh.mp3";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  const [flying, setFlying] = useState(false);

  const handleJetClick = () => {
    if (typeof playJetSound === "function") playJetSound();
    setFlying(true);
    setTimeout(() => setFlying(false), 1200);
  };

  const jetAudioRef = useRef(null);

  const playJetSound = () => {
    const audio = jetAudioRef.current;

    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 0.65;
    audio.play().catch(() => { });
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Replace with your WhatsApp number (country code + number, without +)
  const whatsappNumber = "923001234567";

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

      {/* Floating Contact Buttons */}
      <div className="floating-contact">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Assalamualaikum! I want to know more about your services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-float"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <span className="floating-tooltip">Chat on WhatsApp</span>

          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16.02 3C8.85 3 3.02 8.82 3.02 15.99c0 2.29.6 4.53 1.74 6.5L3 29l6.69-1.72a13 13 0 0 0 6.32 1.62h.01c7.17 0 13-5.83 13-13S23.19 3 16.02 3Zm0 23.68c-1.91 0-3.79-.51-5.42-1.47l-.39-.23-3.97 1.02 1.06-3.87-.25-.4a10.65 10.65 0 0 1-1.64-5.74c0-5.87 4.77-10.64 10.63-10.64 2.85 0 5.53 1.11 7.54 3.12a10.58 10.58 0 0 1 3.12 7.53c0 5.87-4.77 10.64-10.64 10.64Zm5.84-7.97c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"
            />
          </svg>
        </a>

        {/* AI Chatbot */}
        <button
          className="floating-btn chatbot-float"
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          aria-label="Open AI Chatbot"
          title="Chat with AI Assistant"
        >
          <span className="floating-tooltip">Chat with AI</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3C6.9 3 3 6.5 3 10.8c0 2.2 1.1 4.2 3 5.5V21l4.1-2.2c.6.1 1.2.2 1.9.2 5.1 0 9-3.5 9-7.8S17.1 3 12 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M8 10h8M8 13.5h5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="chatbot-status" />
        </button>
      </div>

      {/* Back To Top */}
      {/* JET SOUND */}
      <audio
        ref={jetAudioRef}
        src={jetSound}
        preload="auto"
      />

      {/* BACK TO TOP */}
      {/* {showTop && (
        <a
          className="back-top"
          href="#home"
          aria-label="Back to top"
          title="Back to top"
          // onClick={playJetSound}
        >
          <span className="back-top-glow" />
          <span className="back-top-icon">↑</span>
          <span className="back-top-ring" />
        </a>
      )} */}

     {showTop && (
  <a
    className={`back-top ${flying ? "flying" : ""}`}
    href="#home"
    aria-label="Back to top"
    title="Back to top"
    onClick={handleJetClick}
  >
    <svg
      className="jet-svg"
      viewBox="0 0 64 64"
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* flame */}
      <path className="jet-flame" d="M29 46 L32 60 L35 46 Z" fill="#ff9f1c" />
      {/* wings */}
      <path d="M30 26 L8 44 L8 49 L30 41 Z" fill="#cfd8ff" />
      <path d="M34 26 L56 44 L56 49 L34 41 Z" fill="#cfd8ff" />
      {/* tail fins */}
      <path d="M30 40 L21 52 L21 55 L30 49 Z" fill="#a9b6f5" />
      <path d="M34 40 L43 52 L43 55 L34 49 Z" fill="#a9b6f5" />
      {/* body */}
      <path
        d="M32 3 C36 11 38 22 38 32 L38 46 L26 46 L26 32 C26 22 28 11 32 3 Z"
        fill="#ffffff"
      />
      {/* cockpit */}
      <ellipse cx="32" cy="20" rx="3" ry="6" fill="#4cc9f0" />
      {/* body stripe */}
      <rect x="26" y="36" width="12" height="3" fill="#a855f7" />
    </svg>
  </a>
)}

    </>
  );
}
