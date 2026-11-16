
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
        <Logo />

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

        <nav
          id="main-navigation"
          className={`nav-links ${open ? "open" : ""}`}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            <span>Start a Project</span>
            <b>↗</b>
          </a>
        </nav>
      </div>
    </header>
  );
}
