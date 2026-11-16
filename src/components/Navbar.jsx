
import { useEffect, useState } from "react";
import "../components/css/Navbar.css";

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

  const [scrolledDown, setScrolledDown] = useState(
    () => typeof window !== "undefined" && window.scrollY > 20
  );

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

  const closeMenu = () => setMenuOpen(false);

  const handleResumeClick = () => {
    closeMenu();

    document.getElementById("upload-resume")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderActions = () => (
    <>
      {/* CHECK MY RESUME */}
      <button
        type="button"
        className="nav-resume-btn"
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
        onClick={closeMenu}
      >
        <span className="login-icon">◉</span>
        <span>Login</span>
      </a>

      {/* START PROJECT */}
      <a
        href="#contact"
        className="nav-cta"
        onClick={closeMenu}
      >
        <span>Start a Project</span>
        <span className="cta-arrow">↗</span>
      </a>
    </>
  );

  return (
    <header
      className={`navbar-premium ${
        scrolledDown ? "navbar-scrolled-down" : ""
      } ${menuOpen ? "menu-active" : ""}`}
    >
      <div className="container nav-inner">

        {/* LOGO */}
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
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
              onClick={closeMenu}
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
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}
