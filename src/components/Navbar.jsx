
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

function Logo() {
  return (
    <a href="#home" className="brand" aria-label="Crypton Future Media">
      <span className="brand-icon">
        <i />
        <i />
        <i />
      </span>

      <span className="brand-text">
        <strong>CRYPTON</strong>
        <small>FUTURE MEDIA</small>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`navbar navbar-premium ${
        scrolledDown ? "navbar-scrolled-down" : ""
      } ${open ? "menu-active" : ""}`}
    >
      <div className="container nav-inner">

        {/* LOGO */}
        <Logo />

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAVIGATION */}
        <nav
          id="main-navigation"
          className={`nav-links ${open ? "open" : ""}`}
        >
          {/* NAV LINKS */}
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}

          {/* ACTION BUTTONS */}
          <div className="nav-actions">

            {/* CHECK MY RESUME */}
            <a
              className="nav-resume-btn"
              href="#upload-resume"
              onClick={closeMenu}
            >
              <span>Check My Resume</span>
              <b>↗</b>
            </a>

            {/* LOGIN */}
            <a
              className="nav-login-btn"
              href="/auth/login"
              onClick={closeMenu}
            >
              Login
            </a>

            {/* START PROJECT */}
            <a
              className="nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              <span>Start a Project</span>
              <b>↗</b>
            </a>

          </div>
        </nav>

      </div>
    </header>
  );
}
