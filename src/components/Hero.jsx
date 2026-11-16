
import { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

import vv from "../assets/vv.png";
import buttonHoverSound from "../assets/audio/button-hover.mp3";
import "./css/Hero.css";

export default function Hero() {
  const hoverAudioRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Background particles
  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 4,
      opacity: Math.random() * 0.7 + 0.2,
    }));
  }, []);

  // Button hover sound
  const playHoverSound = () => {
    const audio = hoverAudioRef.current;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const visualVariants = {
    hidden: {
      opacity: 0,
      scale: 0.65,
      rotateY: -35,
      rotateX: 20,
      z: -150,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="home" className="hero hero-motion">

      {/* Button Hover Sound */}
      <audio
        ref={hoverAudioRef}
        src={buttonHoverSound}
        preload="auto"
      />

      {/* Background Particles */}
      <div className="custom-particles" aria-hidden="true">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="custom-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -25, 0],
                    x: [0, 10, -8, 0],
                    opacity: [
                      particle.opacity * 0.4,
                      particle.opacity,
                      particle.opacity * 0.4,
                    ],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="hero-grid" />

      <motion.div
        className="hero-glow hero-glow-left"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.75, 0.4],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-glow hero-glow-right"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1.1, 0.9, 1.1],
                opacity: [0.35, 0.7, 0.35],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container hero-inner">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div
            className="eyebrow"
            variants={textVariants}
          >
            <span />
            FUTURE-READY DIGITAL ENGINEERING
          </motion.div>

          <motion.h1 variants={textVariants}>
            Building the <em>future</em> with technology.
          </motion.h1>

          <motion.p variants={textVariants}>
            Crypton Future Media creates modern software, AI solutions,
            intelligent digital products and scalable technology for
            ambitious businesses.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            className="hero-actions"
            variants={textVariants}
          >

            <motion.a
              href="#services"
              className="btn btn-primary hero-motion-btn"
              onMouseEnter={playHoverSound}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -7,
                      scale: 1.06,
                      rotateX: -8,
                      rotateY: 5,
                    }
              }
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Explore Services <b>↗</b>
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn-outline hero-motion-btn"
              onMouseEnter={playHoverSound}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -7,
                      scale: 1.06,
                      rotateX: -8,
                      rotateY: -5,
                    }
              }
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Start a Project
            </motion.a>

          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div
            className="hero-highlights"
            variants={textVariants}
          >

            {[
              ["AI", "AI & RAG"],
              ["WEB", "Full Stack"],
              ["∞", "Scalable"],
            ].map(([heading, description], index) => (
              <motion.div
                key={heading}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                        rotateY: 8,
                        scale: 1.06,
                      }
                }
                transition={{ type: "spring", stiffness: 250 }}
              >
                <strong>{heading}</strong>
                <span>{description}</span>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

        {/* RIGHT 3D VISUAL */}
        <motion.div
          className="hero-art hero-art-motion"
          variants={visualVariants}
          initial="hidden"
          animate="visible"
          style={{ perspective: 1200 }}
        >

          {/* Floating 3D Image Wrapper */}
          <motion.div
            className="vr-wrapper atom-hero-visual"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -18, 0, 12, 0],
                    rotateX: [0, 5, 0, -4, 0],
                    rotateY: [-5, 5, -5],
                    rotateZ: [0, 1.5, 0, -1.5, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.04,
                    rotateY: 10,
                    rotateX: -5,
                    transition: {
                      duration: 0.4,
                    },
                  }
            }
          >

            {/* Main Glow */}
            <motion.div
              className="vr-glow"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [0.9, 1.2, 0.9],
                      opacity: [0.4, 0.8, 0.4],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Circular Image */}
            <motion.div
              className="atom-image-circle"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotateY: [0, 8, 0, -8, 0],
                      rotateX: [0, -5, 0, 5, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <motion.img
                src={vv}
                alt="Virtual Reality Technology"
                className="vr-image atom-image"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.06, 1],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="atom-image-shine" />

            </motion.div>

            {/* ORBIT ONE */}
            <motion.div
              className="atom-orbit atom-orbit-one"
              animate={
                shouldReduceMotion ? {} : { rotate: 360 }
              }
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.span
                className="atom-electron electron-one"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.5, 1] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* ORBIT TWO */}
            <motion.div
              className="atom-orbit atom-orbit-two"
              animate={
                shouldReduceMotion ? {} : { rotate: -360 }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.span
                className="atom-electron electron-two"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.5, 1] }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* ORBIT THREE */}
            <motion.div
              className="atom-orbit atom-orbit-three"
              animate={
                shouldReduceMotion ? {} : { rotate: 360 }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.span
                className="atom-electron electron-three"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.6, 1] }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Center Glow */}
            <motion.div
              className="atom-center-glow"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.3, 0.8],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>

          {/* Floating Particles */}
          {[1, 2, 3, 4, 5].map((number, index) => (
            <motion.span
              key={number}
              className={`vr-particle particle-${number}`}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -25 - index * 5, 0],
                      x: [0, index % 2 === 0 ? 12 : -12, 0],
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }
              }
              transition={{
                duration: 3 + index,
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        </motion.div>
      </div>

      {/* PREMIUM SCROLL INDICATOR */}
      <div className="scroll-cue-anchor">
        <motion.a
          className=""
          href="#about"
          aria-label="Scroll down to About section"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, 7, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.45 }
              : {
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.6, delay: 0.8 },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }
          }
          whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotateX: 8, rotateY: -6 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="scroll-cue-glow" aria-hidden="true" />
          {/* <span className="scroll-cue-label">SCROLL TO EXPLORE</span> */}
          <span className="scroll-cue-mouse" aria-hidden="true">
            <span className="scroll-cue-wheel" />
          </span>
          {/* <span className="scroll-cue-arrow" aria-hidden="true">↓</span> */}
        </motion.a>
      </div>

    </section>
  );
}
