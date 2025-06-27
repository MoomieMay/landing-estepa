import { RiMapPin2Fill, RiWhatsappFill, RiFacebookBoxFill, RiInstagramFill, RiMenuLine } from 'react-icons/ri';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
          const el = document.getElementById(location.state.scrollTo);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 100); // espera a que todo cargue
          }
        }
      }, [location]);

    return (
        <>
            {/* Sobre nosotros */}
            <section id="aboutUs" className="about-section container py-5">.
                <div className="section-title">
                    <h2>Sobre nosotros</h2>
                    <p></p>
                </div>
                <div className="row">
                    <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1743905766/carrousel1_cjlmfw.jpg" class="d-block w-100" alt=""></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1743905767/carrousel2_vlpupm.jpg" class="d-block w-100" alt=""></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1743905770/carrousel3_jnehje.png" class="d-block w-100" alt=""></img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                        <h3>Un poco sobre nosotros...</h3>
                        <p className="">
                            Somos un elenco poliforme de experimentación teatral que busca romper los límites de la escena tradicional.
                            Cada proyecto es una oportunidad para explorar nuevas formas de expresión, desafiando estructuras narrativas
                            y estéticas.<br />
                            Formamos parte de la Escuela Municipal de Teatro perteneciente al CeMEPA, desde donde impulsamos propuestas que invitan al público a vivir
                            experiencias teatrales intensas, sensibles y transformadoras.
                        </p>
                    </div>
                </div>
            </section>


            {/* Contacto */}
            <section id="contact" className="contact-section container py-5">
                <div className="section-title">
                    <h2>Contacto</h2>
                    <p></p>
                </div>
                <div className='contact'>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <div className="info">
                                <div className="phone">
                                    <i> <RiWhatsappFill color="whitesmoke" /> </i>
                                    <h4>WhatsApp:</h4>
                                    <a href="https://wa.me/5492974610883"> (0297) 154 610 883</a>
                                </div>
                                <div className="address">
                                    <i> <RiMapPin2Fill color="whitesmoke" /> </i>
                                    <h4>Ubicación:</h4>
                                    <p>Independencia y Barbara Serrano, Z9011 Caleta Olivia, Santa Cruz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.9416081322547!2d-67.52984152295595!3d-46.451771575208156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5dfce1c8ba749%3A0xb88433aa811330a0!2sCemepa!5e1!3m2!1ses-419!2sar!4v1740182848823!5m2!1ses-419!2sar"
                            width="100%"
                            height="25"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>


                </div>
            </section>

        </>
    );
}

export default Home;
