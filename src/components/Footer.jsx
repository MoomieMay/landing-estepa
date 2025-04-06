import { RiFacebookBoxFill, RiInstagramFill } from '@remixicon/react';

function Footer() {
  return (
    <>
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <p> ¡Seguinos en nuestras redes!</p>
            <div className="social-links mt-3">
              <a href="https://www.facebook.com/share/1ExYStjYLE/?mibextid=wwXIfr" className="facebook" target="_blank" style={{ marginRight: "10px" }}> <RiFacebookBoxFill size={40} /> </a>
              <a href="https://www.instagram.com/teatrocemepa?igsh=MWd4aWMwa2xzbjh2cA==" className="instagram" target="_blank" style={{ marginRight: "20px" }}><RiInstagramFill size={40} /></a>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="text-center py-2">
        <p className='copy'>CTRL Kraken @2025</p>
      </footer>
    </>
  );
}

export default Footer;
