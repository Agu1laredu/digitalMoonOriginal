import "./Footer.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <section className="FooterContainer">
      <footer>
        <div class="footer-container">
          <div class="footer-content-container">
            <h3 class="website-logo">Digital Moon</h3>
            {/* <span class="footer-info">111 111 111</span> */}
            <span class="footer-info">DigitalMoon@hotmail.com</span>
          </div>
          <div class="footer-menus">
            <div
              class="footer-content-container"
              style={{ textAlign: "justify" }}
            >
              <span class="menu-title">menu</span>
              <p href="" class="menu-item-footer">
                Home
              </p>
              <p href="" class="menu-item-footer">
                Nosotros
              </p>
              <p href="" class="menu-item-footer">
                Contacto
              </p>
            </div>
            <div
              class="footer-content-container"
              style={{ textAlign: "justify" }}
            >
              <span class="menu-title">Servicios</span>
              <p href="" class="menu-item-footer">
                Landing Page
              </p>
              <p href="" class="menu-item-footer">
                E-commerce
              </p>
              <p
                href=""
                class="menu-item-footer"
                style={{ textAlign: "justify" }}
              >
                Sistemas administrativos
              </p>
              <p href="" class="menu-item-footer">
                Asesorias
              </p>
            </div>
          </div>

          <div class="footer-content-container">
            <span class="menu-title">Siguenos</span>
            <div class="social-container">
              <p href="" class="social-link">
                <AiFillLinkedin style={{ fontSize: 30 }} />
              </p>
              <p href="" class="social-link">
                <AiOutlineInstagram style={{ fontSize: 30 }} />
              </p>
              <p href="" class="social-link">
                <AiFillFacebook style={{ fontSize: 30 }} />
              </p>
            </div>
          </div>
        </div>
        <div class="copyright-container">
          <span class="copyright">
            Copyright 2023, digital-moon.com. Derechos reservados.
          </span>
        </div>
      </footer>
    </section>
  );
}

export default Footer;