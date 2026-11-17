
import { useEffect, useRef, useState } from "react";
import "../components/css/Navbar.css";

import hoverSound from "../assets/audio/button-hover.mp3";
import clickSound from "../assets/audio/button-click.wav";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["mission", "Mission"],
  ["services", "Services"],
  ["whyus", "Why Us"],
  ["team", "Team"],
  ["careers", "Careers"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  const hoverAudioRef = useRef(null);
  const clickAudioRef = useRef(null);
  const particleIdRef = useRef(0);

  const [scrolledDown, setScrolledDown] = useState(
    () => typeof window !== "undefined" && window.scrollY > 20
  );

  // HOVER SOUND
  const playHoverSound = () => {
    const audio = hoverAudioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  // CLICK SOUND
  const playClickSound = () => {
    const audio = clickAudioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  // CLICK PARTICLE BURST
  const createParticles = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const newParticles = Array.from({ length: 14 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 25 + Math.random() * 75;

      return {
        id: particleIdRef.current++,
        x,
        y,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        size: 3 + Math.random() * 5,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // REMOVE PARTICLE
  const removeParticle = (id) => {
    setParticles((prev) => prev.filter((particle) => particle.id !== id));
  };

  // SCROLL EFFECT
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;

      if (currentScrollY <= 20) {
        setScrolledDown(false);
      } else if (difference > 3) {
        setScrolledDown(true);
      } else if (difference < -3) {
        setScrolledDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // COMMON CLICK HANDLER
  const handleNavigationClick = (event) => {
    playClickSound();
    createParticles(event);
    setMenuOpen(false);
  };

  // RESUME BUTTON
  const handleResumeClick = (event) => {
    playClickSound();
    createParticles(event);
    setMenuOpen(false);

    document.getElementById("upload-resume")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // NAVBAR ACTIONS
  const renderActions = () => (
    <>
      {/* CHECK MY RESUME */}
      <button
        type="button"
        className="nav-resume-btn"
        onMouseEnter={playHoverSound}
        onClick={handleResumeClick}
      >
        <span className="btn-icon">↗</span>
        <span>Check My Resume</span>
        <span className="btn-shine" />
      </button>

      {/* LOGIN */}
      <a
        href="/login"
        className="nav-login-btn"
        onMouseEnter={playHoverSound}
        onClick={handleNavigationClick}
      >
        <span className="login-icon">◉</span>
        <span>Login</span>
      </a>

      {/* START PROJECT */}
      <a
        href="#contact"
        className="nav-cta"
        onMouseEnter={playHoverSound}
        onClick={handleNavigationClick}
      >
        <span>Start a Project</span>
        <span className="cta-arrow">↗</span>
      </a>
    </>
  );

  return (
    <>
      {/* PARTICLE LAYER */}
      <div className="navbar-particle-layer">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="navbar-click-particle"
            onAnimationEnd={() => removeParticle(particle.id)}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              "--dx": `${particle.dx}px`,
              "--dy": `${particle.dy}px`,
            }}
          />
        ))}
      </div>

      <header
        className={`navbar-premium ${
          scrolledDown ? "navbar-scrolled-down" : ""
        } ${menuOpen ? "menu-active" : ""}`}
      >
        {/* HOVER AUDIO */}
        <audio
          ref={hoverAudioRef}
          src={hoverSound}
          preload="auto"
        />

        {/* CLICK AUDIO */}
        <audio
          ref={clickAudioRef}
          src={clickSound}
          preload="auto"
        />

        <div className="container nav-inner">

          {/* LOGO */}
          <a
            href="#home"
            className="brand"
            onMouseEnter={playHoverSound}
            onClick={handleNavigationClick}
          >
            <div className="brand-icon">
              <i />
              <i />
              <i />
            </div>

            <div className="brand-text">
              <strong>CRYPTON FUTURE</strong>
              <small>MEDIA</small>
            </div>
          </a>

          {/* NAVIGATION */}
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {links.map(([id, label]) => (
              <a
                href={`#${id}`}
                key={id}
                onMouseEnter={playHoverSound}
                onClick={handleNavigationClick}
              >
                {label}
              </a>
            ))}

            {/* MOBILE BUTTONS */}
            <div className="nav-actions mobile-actions">
              {renderActions()}
            </div>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="nav-actions desktop-actions">
            {renderActions()}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onMouseEnter={playHoverSound}
            onClick={(event) => {
              playClickSound();
              createParticles(event);
              setMenuOpen((prev) => !prev);
            }}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>
    </>
  );
}
