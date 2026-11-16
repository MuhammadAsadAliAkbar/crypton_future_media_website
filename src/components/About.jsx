
import vrGirl from "../assets/vrGirl.png";
import "../components/css/About.css";

const values = [
  [
    "01",
    "Product Mindset",
    "We focus on useful software and measurable business outcomes.",
  ],
  [
    "02",
    "Modern Engineering",
    "Clean architecture, automation and scalable foundations.",
  ],
  [
    "03",
    "AI-First Thinking",
    "We use AI, RAG and intelligent agents where they create real value.",
  ],
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="heading about-heading">
          <div className="about-heading-left">
            <span className="kicker">
              <span className="kicker-dot" />
              01 / ABOUT US
            </span>

            <h2>
              Technology<span> with a purpose.</span>
            </h2>

            <p>
              We combine engineering, product thinking and emerging AI to turn
              complex ideas into reliable digital experiences.
            </p>
          </div>
        </div>

        <div className="about-layout">
          {/* =====================================
              ABOUT IMAGE VISUAL
          ===================================== */}

          <div className="about-image about-atom-visual">
            {/* Background Glow */}
            <div className="about-image-glow" />

            {/* =====================================
                FLOATING PARTICLES
            ===================================== */}

            <div className="about-particles">
              <span className="about-particle particle-1" />
              <span className="about-particle particle-2" />
              <span className="about-particle particle-3" />
              <span className="about-particle particle-4" />
              <span className="about-particle particle-5" />
              <span className="about-particle particle-6" />
              <span className="about-particle particle-7" />
              <span className="about-particle particle-8" />
              <span className="about-particle particle-9" />
              <span className="about-particle particle-10" />
              <span className="about-particle particle-11" />
              <span className="about-particle particle-12" />
              <span className="about-particle particle-13" />
              <span className="about-particle particle-14" />
              <span className="about-particle particle-15" />
            </div>

            {/* =====================================
                MAIN IMAGE
            ===================================== */}

            <div className="about-image-frame">
              <img src={vrGirl} alt="Future Technology" />
            </div>
          </div>

          {/* =====================================
              ABOUT CONTENT
          ===================================== */}

          <div className="about-content">
            <div className="about-label">
              <span>CRYPTON FUTURE MEDIA</span>
              <span>EST. 2026</span>
            </div>

            <h3 className="about-title">
              Where technology
              <br />
              <span>meets imagination.</span>
            </h3>

            <p className="about-description">
              We design and engineer modern digital products that combine
              powerful software, intelligent systems and exceptional user
              experiences.
            </p>

            <div className="value-list">
              {values.map(([number, title, text]) => (
                <article className="value" key={number}>
                  <span className="value-number">{number}</span>

                  <div className="value-main">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  <span className="value-arrow">↗</span>
                </article>
              ))}
            </div>

            <div className="about-tags">
              <span>SOFTWARE</span>
              <span>AI</span>
              <span>RAG</span>
              <span>AGENTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
