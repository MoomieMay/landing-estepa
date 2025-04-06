// pages/Prudencia.jsx
function Prudencia() {
  return (
    <section className="container py-5">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/poster.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3 className="fw-bold">La Prudencia</h3>
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
              <p>CeMEPA, Fabiola Cabañas, Alicia Beatriz Perez, Alicia Millahuala, Verónica Següino, Giuliana Díaz, Eduardo Del Valle</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Prudencia;
