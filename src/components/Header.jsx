import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from '@remixicon/react';
import { useState, useEffect } from 'react';
import ScrollLink from '../ScrollLink';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSubmenuOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // cambia después de scrollear 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo me-auto">
            <Link to="/"><img src="/assets/logo-nombre.png" style={{ height: "50px" }} alt="Logo" /></Link>
          </h1>

          <nav className={`navbar ${mobileMenuOpen ? 'navbar-mobile' : ''}`}>
            <ul>
              <li>
                <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
              </li>
              
              <li className={`dropdown ${submenuOpen ? 'dropdown-active' : ''}`}>
                <a id="desplegable" onClick={toggleSubmenu} style={{ cursor: 'pointer' }}>
                  Espectáculos <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/prudencia" onClick={closeMenu}>La Prudencia</Link></li>
                  <li><Link to="/foucault" onClick={closeMenu}>Foucault 3124</Link></li>
                  <li><Link to="/mal" onClick={closeMenu}>El Mal</Link></li>

                </ul>
              </li>
              
              <li>
                <ScrollLink toId="contact" onClick={closeMenu}>Contacto</ScrollLink>
              </li>
            </ul>

            <i
              className="mobile-nav-toggle"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </i>
          </nav>
        </div>
      </header>

      {/* Hero section con efecto parallax */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <h2 className='hero-text fst-italic fw-bold'>Ningún desierto. <br /> Está poblado de historias.</h2>
      </section>
    </>
  );
}

export default Header;
