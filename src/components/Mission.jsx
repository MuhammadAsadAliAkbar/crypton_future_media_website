
import '../components/css/Mission.css';
import vs from "../assets/vs.png";

export default function Mission() {
  return (
    <section id="mission" className="section mission-section">

      <div className="mission-bg-glow mission-bg-glow-1" />
      <div className="mission-bg-glow mission-bg-glow-2" />

      <div className="container mission-layout">

        {/* LEFT COLUMN */}
        <div className="mission-left">

          {/* HEADING */}
          <div className="mission-heading">

            <div className="mission-kicker">
              <span className="kicker-line" />
              <span>03 / OUR MISSION</span>
            </div>

            <h2>
              Engineering discipline meets{" "}
              <em>creative thinking.</em>
            </h2>

          </div>

          {/* VR CHARACTER */}
          <div className="mission-visual">

            {/* ORBIT RINGS */}
            <div className="mission-orbit orbit-one" />
            <div className="mission-orbit orbit-two" />
            <div className="mission-orbit orbit-three" />

            {/* PARTICLES */}
            <div className="mission-particles">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>

            {/* IMAGE CIRCLE */}
            <div className="mission-circle">

              <div className="mission-circle-inner">

                <img
                  src={vs}
                  alt="Virtual Reality Futuristic Character"
                  className="mission-character"
                />

              </div>

            </div>

            {/* STATUS TAG */}
            <div className="mission-floating-tag">
              <span className="status-dot" />
              <span>INNOVATION MODE</span>
            </div>

            {/* DECORATIONS */}
            <div className="mission-decoration decoration-one">
              ✳
            </div>

            <div className="mission-decoration decoration-two">
              +
            </div>

            <div className="mission-decoration decoration-three">
              ✧
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="mission-copy">

          <p className="mission-lead">
            We build products designed to work today and scale tomorrow.
          </p>

          <p className="mission-description">
            Our approach combines strong engineering principles with
            creative problem-solving to build secure, scalable and
            meaningful digital products.
          </p>

          {/* MISSION POINTS */}
          <div className="mission-points">

            <div className="mission-point">
              <span className="point-number">01</span>

              <div className="point-content">
                <h3>Innovate</h3>
                <p>
                  Turning ambitious ideas into meaningful digital products.
                </p>
              </div>

              <span className="point-arrow">↗</span>
            </div>

            <div className="mission-point">
              <span className="point-number">02</span>

              <div className="point-content">
                <h3>Engineer</h3>
                <p>
                  Building reliable, scalable and future-ready technology.
                </p>
              </div>

              <span className="point-arrow">↗</span>
            </div>

            <div className="mission-point">
              <span className="point-number">03</span>

              <div className="point-content">
                <h3>Empower</h3>
                <p>
                  Helping businesses grow through intelligent technology.
                </p>
              </div>

              <span className="point-arrow">↗</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
