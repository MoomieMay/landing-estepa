// pages/Mal.jsx
function Mal() {
    return (
        <section className="container py-5">
            <div className="text-center mb-4">
                <h1 className="fw-bold title">El Mal</h1>
                <h5 className="subtitle">Elenco "La Estepa"</h5>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1751054639/flyerElMal_sdaook.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                        <strong className="subtitulo">Sinopsis</strong> <br></br>
                        <p className="fst-italic">
                            “El mal” es un espectáculo que brinda un
                            dramático testimonio poético teatral sobre lo
                            que sucede en nuestra América, atestiguando la
                            violencia ejercida desde el Siglo XX a la
                            actualidad. <br></br>
                            Ante quienes observan perplejos, una entidad
                            sigilosa y escurridiza trae a escena los relatos
                            de aquellos que quedaron en las sombras a
                            causa de la violencia. Recorriendo los
                            márgenes, observa las ruinas de la historia,
                            atesorando huesos a modo de trofeos. <br></br>
                            A partir del relato de cada víctima, El Mal
                            desanda los hilos que anudan con fuerza la
                            violencia, la pasividad cómplice y el olvido de
                            los pueblos, para volver a tejer su red sobre
                            todo aquello que toca.
                        </p>

                        <div style={{ maxWidth: "600px" }}>
                            <strong className="subtitulo">Ficha Técnica</strong>
                            <ul>
                                <li><strong>Dramaturgia Original e Interpretación</strong> - David Romano</li>
                                <li><strong>Dirección y Operación Técnica</strong> - Huayra Martincic</li>
                                <li><strong>Diseño de Iluminación</strong> - Gustavo Martincic</li>
                                <li><strong>Realización de Vestuario</strong> - Alicia Millahuala</li>
                                <li><strong>Utilería</strong> - Eduardo Romano</li>
                                <li><strong>Producción General</strong> - Escuela Municipal de Teatro - CeMEPA</li>
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

export default Mal;
