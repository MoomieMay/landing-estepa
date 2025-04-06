// pages/Foucault.jsx
function Foucault() {
  return (
    <section className="container py-5">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="src/assets/flyerFoucault.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3 className="fw-bold">Foucault 3124</h3>
            <strong hidden className="subtitulo">Sinopsis</strong> <br></br>
            <p hidden className="fst-italic"></p>

            <div style={{ maxWidth: "600px" }}>
              <strong className="subtitulo">Elenco</strong>
              <ul>
                <li><strong>Psiquiatra</strong> - Allegra Pagano</li>
                <li><strong>Psicólogo Social</strong> - Emma Ducasse</li>
                <li><strong>El lider</strong> - David Aybar</li>
                <li><strong>Electrónica (Maniático Obsesivo)</strong> - Celene Morales</li>
                <li><strong>La pereza</strong> - Salma López</li>
                <li><strong>Cybor</strong> - Fabricio Martel</li>
                <li><strong>El olvido</strong> - Maira Perea</li>
                <li><strong>Recolector (Roba) </strong> - Lucas Celiz</li>
                <li><strong>La voluptuosidad/El aturdimiento</strong> - Natalia Aguesta</li>
              </ul>

              <strong className="subtitulo">Coordinadores</strong>
              <ul>
                <li><strong>Dirección General:</strong> David Romano</li>
                <li><strong>Fonoaudióloga:</strong> Verónica Seguino</li>
                <li><strong>Make up y Vestuario:</strong> Mariana Paredes</li>
                <li><strong>Expresión Corporal:</strong> Nahir Sánchez</li>
                <li><strong>Realización de Utilería:</strong> Alicia Millahuala</li>
                <li><strong>Música Original:</strong> Fernando Strasnoy</li>
                <li><strong>Jefe de Departamento EMT/CeMEPA: </strong> Huayra Martincic</li>
              </ul>

              <strong hidden className="subtitulo">Agradecimientos</strong>
              <p></p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Foucault;
