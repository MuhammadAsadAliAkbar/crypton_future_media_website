
import { useMemo, useRef } from "react";
import vv from "../assets/vv.png";
import buttonHoverSound from "../assets/audio/button-hover.mp3";
import "./css/Hero.css";

export default function Hero() {
  const hoverAudioRef = useRef(null);

  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 4}s`,
      opacity: Math.random() * 0.7 + 0.2,
    }));
  }, []);

  const playHoverSound = () => {
    const audio = hoverAudioRef.current;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return (
    <section id="home" className="hero">

      {/* Button Hover Sound */}
      <audio
        ref={hoverAudioRef}
        src={buttonHoverSound}
        preload="auto"
      />

      {/* Background Particles */}
      <div className="custom-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="custom-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="container hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-copy">

          <div className="eyebrow">
            <span />
            FUTURE-READY DIGITAL ENGINEERING
          </div>

          <h1>
            Building the <em>future</em> with technology.
          </h1>

          <p>
            Crypton Future Media creates modern software, AI solutions,
            intelligent digital products and scalable technology for
            ambitious businesses.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">

            <a
              href="#services"
              className="btn btn-primary"
              onMouseEnter={playHoverSound}
            >
              Explore Services <b>↗</b>
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
              onMouseEnter={playHoverSound}
            >
              Start a Project
            </a>

          </div>

          {/* HIGHLIGHTS */}
          <div className="hero-highlights">

            <div>
              <strong>AI</strong>
              <span>AI & RAG</span>
            </div>

            <div>
              <strong>WEB</strong>
              <span>Full Stack</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Scalable</span>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-art" aria-hidden="true">

          <div className="vr-wrapper atom-hero-visual">

            <div className="vr-glow" />

            {/* CIRCULAR IMAGE */}
            <div className="atom-image-circle">

              <img
                src={vv}
                alt="Virtual Reality Technology"
                className="vr-image atom-image"
              />

              <div className="atom-image-shine" />

            </div>

            {/* ATOM ORBITAL RINGS */}
            <div className="atom-orbit atom-orbit-one">
              <span className="atom-electron electron-one" />
            </div>

            <div className="atom-orbit atom-orbit-two">
              <span className="atom-electron electron-two" />
            </div>

            <div className="atom-orbit atom-orbit-three">
              <span className="atom-electron electron-three" />
            </div>

            <div className="atom-center-glow" />

          </div>

          {/* FLOATING PARTICLES */}
          <span className="vr-particle particle-1" />
          <span className="vr-particle particle-2" />
          <span className="vr-particle particle-3" />
          <span className="vr-particle particle-4" />
          <span className="vr-particle particle-5" />

        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll down to About section"
      >
        <span className="mouse">
          <span className="mouse-wheel" />
        </span>

        <span className="scroll-arrow">
          <span>↓</span>
        </span>
      </a>

    </section>
  );
}
