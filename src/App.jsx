import { useState, useEffect } from "react";
import { RiMapPin2Fill, RiWhatsappFill, RiFacebookBoxFill, RiInstagramFill} from '@remixicon/react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      <header id="header" className={`fixed-top ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container d-flex align-items-center justify-content-lg-between">

          <h1 className="logo me-auto me-lg-0"><a href="index.html"><img style={{ height: "75px" }} src='assets/logo-nombre.png' /><span>
            </span></a></h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
              <li><a className="nav-link scrollto" href="#about">Espectáculo</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contacto</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>


        </div>
      </header>


      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>Bienvenidos<span>.</span></h1>
              <h2></h2>
            </div>
          </div>

        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/poster.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>La Prudencia</h3>
                <strong className="subtitulo">Sinopsis</strong> <br></br>

                <p className="fst-italic">
                  Como cada año, tres amigas se reúnen a celebrar año nuevo. La seguridad del hogar y los afectos las protegen de los peligros del afuera, pero poco pueden hacer con su virtuosa prudencia ante la desconfianza y el temor creciente...
                  <br></br>
                  Una comedia negra, disparatada y grotesca
                </p>

                <div style={{ maxWidth: "600px" }}>
                  <strong className="subtitulo">Elenco</strong>
                  <ul>
                    <li><strong>Trinidad</strong> - Allegra Pagano</li>
                    <li><strong>Margarita</strong> - Diana Perez</li>
                    <li><strong>Nina</strong> - Ariana Velasco</li>
                  </ul>

                  <strong className="subtitulo">Equipo Creativo</strong>
                  <ul>
                    <li><strong>Dramaturgia:</strong> Claudio Gotbeter</li>
                    <li><strong>Dirección General:</strong> Huayra Martincic</li>
                    <li><strong>Asistente de Dirección:</strong> Nahir Sánchez</li>
                    <li><strong>Producción General:</strong> David Romano</li>
                  </ul>

                  <strong className="subtitulo">Asesoramientos</strong>
                  <ul>
                    <li><strong>Trabajo Actoral:</strong> Anabela Martins</li>
                    <li><strong>Trabajo Corporal:</strong> Nahir Sánchez</li>
                    <li><strong>Caracterización:</strong> Mariana Paredes</li>
                  </ul>

                  <strong className="subtitulo">Diseño y Técnica</strong>
                  <ul>
                    <li><strong>Diseño de Iluminación:</strong> Gustavo Martincic</li>
                    <li><strong>Operación Técnica:</strong> David Romano</li>
                    <li><strong>Realización Escenográfica:</strong> La Estepa Teatro</li>
                    <li><strong>Diseño de Caracterización:</strong> La Estepa Teatro</li>
                    <li><strong>Realización de Vestuario:</strong> Diana Perez</li>
                  </ul>

                  <strong className="subtitulo">Agradecimientos</strong>
                  <p>CeMEPA, Fabiola Cabañas, Alicia Beatriz Perez, Alicia Millahuala, Verónica Següino, Eduardo Del Valle</p>
                </div>

              </div>
            </div>

          </div>
        </section>



        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contacto</h2>
              <p>Contactanos</p>
            </div>

            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.9416081322547!2d-67.52984152295595!3d-46.451771575208156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5dfce1c8ba749%3A0xb88433aa811330a0!2sCemepa!5e1!3m2!1ses-419!2sar!4v1740182848823!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="row mt-5">

                <div className="col-lg-6">
                  <div className="info">
                    <div className="address">
                      <i> <RiMapPin2Fill color="whitesmoke"/> </i>
                      <h4>Ubicación:</h4>
                      <p>Independencia y Barbara Serrano, Z9011 Caleta Olivia, Santa Cruz</p>
                    </div>

                    <div className="phone">
                      <i> <RiWhatsappFill color="whitesmoke"/> </i>
                      <h4>WhatsApp y Llamadas:</h4>
                      <a href="tel:+5492974610883"> (0297) 154 610 883</a>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">

            <div className="text-center">
              <h3>Nuestras Redes Sociales</h3>
              <p> Seguinos en nuestras redes para enterarte de más información.</p>
              <div className="social-links mt-3">
                <a href="https://www.facebook.com/share/1ExYStjYLE/?mibextid=wwXIfr" className="facebook" target="_blank" style={{ marginRight: "20px" }}> <RiFacebookBoxFill size={50}/> </a>
                <a href="https://www.instagram.com/teatrocemepa?igsh=MWd4aWMwa2xzbjh2cA==" className="instagram" target="_blank" style={{ marginRight: "20px" }}><RiInstagramFill size={50}/></a>

              </div>
            </div>

          </div>
        </section>


      </main>

      <footer id="footer">
        CTRL Kraken @2025
      </footer>

    </>
  )
}

export default App
