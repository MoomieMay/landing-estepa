// pages/Foucault.jsx
function Foucault() {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold title">Foucault 3124</h1>
        <h5 className="subtitle">Elenco Juvenil "La Estepa"</h5>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1751048809/flyerFoucault_kh3uez.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <strong className="subtitulo">Sinopsis</strong> <br></br>
            <p className="fst-italic">
              Una travesía hacia Marte que pone en juego los límites de la mente, el cuerpo y la misión.
              <br></br>¿Quiénes somos cuando no hay retorno posible?
            </p>

            <div style={{ maxWidth: "600px" }}>
              <strong className="subtitulo">Elenco</strong>
              <ul>
                <li><strong>Psiquiatra</strong> - Allegra Pagano</li>
                <li><strong>Psicólogo Social</strong> - Emma Ducasse</li>
                <li><strong>Cybor</strong> - Fabricio Martel</li>
                <li><strong>El lider</strong> - David Aibar</li>
                <li><strong>Electrónica (Maniático Obsesivo)</strong> - Celene Morales</li>
                <li><strong>La pereza / El olvido</strong> - Catalina De Lisio</li>
                <li><strong>El desamor / Volver a enamorarse </strong> - Juliana Gribaudo </li>
                <li><strong>Recolector (Roba) </strong> - Luca Celiz</li>
                <li><strong>La voluptuosidad / El aturdimiento</strong> - Natalia Agesta</li>
                <li><strong></strong> Fabiola Cabañas </li>

              </ul>

              <strong className="subtitulo">Coordinadores</strong>
              <ul>
                <li><strong>Dirección General:</strong> David Romano</li>
                <li><strong>Expresión Corporal:</strong> Nahir Sánchez</li>
              </ul>

              <strong className="subtitulo">Agradecimientos</strong>
              <ul>
                <li><strong>Música Original:</strong> Fernando Strasnoy</li>
                <li><strong>Realización de Utilería:</strong> Alicia Millahuala</li>
                <li><strong>Make up y Vestuario:</strong> Mariana Paredes</li>
                <li><strong>Ilustraciones Originales:</strong> Benjamín Rivero</li>
                <li><strong>Jefe de Departamento EMT/CeMEPA: </strong> Huayra Martincic</li>
                <li><strong>Fonoaudióloga:</strong> Verónica Seguino</li>
              </ul>
              <p></p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Foucault;
