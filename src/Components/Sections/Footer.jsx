import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Shihumbu Girls</h3>
              <p>
                P.O BOX 10-50104 <br />
                KHAYEGA
                <br />
                KAKAMEGA
                <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong>shihumbugee@yahoo.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Admission Guide</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Term Dates</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Rules And Regulation</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Shihumbu Girls</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
