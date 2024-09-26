import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const FooterForm = () => {
  return (
    <>
      <div>
        <br />
        <br />
      </div>
      <footer className="footer">
        <Container className="Container23">
          <Row className="mb-4">
            <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
              <h5>Información</h5>
              <p>
                Si quieres saber más de nosotros o de nuestros productos, por
                favor comunícate por medio de nuestras redes sociales.
              </p>
            </Col>

            <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <Link as={Link} to="" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="" className="text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="" className="text-white"></Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="text-center">
              <h5>Redes Sociales</h5>
              <Row className="justify-content-center">
                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://wa.me/+50685163974"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="whatsapp"
                  >
                    <FaWhatsapp className="footer-icon-img" />
                    <span className="footer-icon-text">WhatsApp</span>
                  </a>
                </Col>
                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://instagram.com/_by.sof_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="instagram"
                  >
                    <FaInstagram className="footer-icon-img" />
                    <span className="footer-icon-text">Instagram</span>
                  </a>
                </Col>

                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://www.google.com/maps/place/Heredia/@9.9978039,-84.1194575,117m/data=!3m1!1e3!4m6!3m5!1s0x8fa0faddaded66bd:0x2527e99d1a1e0bdf!8m2!3d9.9981413!4d-84.1197643!16s%2Fm%2F02rccyb?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="address"
                  >
                    <FaMapMarkerAlt className="footer-icon-img" />
                    <span className="footer-icon-text">Dirección</span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <p>
                &copy; {new Date().getFullYear()} By | Sof. Todos los derechos reservados.
                reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterForm;