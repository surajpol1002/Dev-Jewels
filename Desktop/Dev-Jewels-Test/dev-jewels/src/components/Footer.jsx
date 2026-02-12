import { Link } from "react-router-dom";
import "./footer.css";

import footerBanner from "../images/footer-banner.jpg";
import footerLogo from "../images/logo/DEV-JEWELS-footer-logo.svg";

import facebook from "../images/icons/facebook.svg";
import instagram from "../images/icons/instagram.svg";
import linkedin from "../images/icons/linkedin.svg";
import twitter from "../images/icons/twitter.svg";
import youtube from "../images/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer-section pt-5">
      <div className="container guidline-width pt-5">
        {/* ================= SECTION 1 : LOGO + SUBSCRIBE ================= */}
        <div className="row align-items-center mb-4 mb-sm-5">
          {/* LOGO */}
          <div className="col-12 col-md-1 col-lg-3 text-md-start mb-4 mb-md-0 px-3 px-sm-0">
            <img src={footerLogo} alt="Dev Jewels" className="footer-logo" />
          </div>

          {/* SUBSCRIBE */}
          <div className="col-12 col-md-11 col-lg-9 newsletter d-sm-flex align-items-sm-center justify-content-sm-end px-3 p-sm-0">
            <h6 className="col-12 col-sm-4 col-md-6 secondary-font-size fw-500 footer-title text-start text-md-end my-0 my-sm-0 mb-3 pe-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h6>
            <div className="col-12 col-sm-8 col-md-6 d-flex gap-2 position-relative">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-dark-radius position-absolute footer-subs-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2 : MENUS + SOCIAL + BANNER ================= */}
        <div className="row gy-5">
          {/* MENUS (LEFT) */}
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-6 col-md-3 col-md-4 ps-sm-0 mb-4 px-3 px-sm-0">
                <h6 className="primary-regular-font-size fw-600 mb-sm-3 mb-md-4">
                  Shop
                </h6>
                <ul className="footer-list">
                  <li>Rings</li>
                  <li>Bracelets</li>
                  <li>Earrings</li>
                  <li>Pendants</li>
                  <li>Necklace</li>
                </ul>
              </div>

              <div className="col-6 col-md-3 col-md-4 ps-sm-0 mb-4 px-3 px-sm-0">
                <h6 className="primary-regular-font-size fw-600 mb-sm-3 mb-md-4">
                  Education
                </h6>
                <ul className="footer-list">
                  <li>Our Story</li>
                  <li>Learn</li>
                  <li>Impact</li>
                  <li>Work for Nature</li>
                  <li>Blogs</li>
                </ul>
              </div>

              <div className="col-6 col-md-3 col-md-4 ps-sm-0 mb-3 mb-sm-4 px-3 px-sm-0">
                <h6 className="primary-regular-font-size fw-600 mb-sm-3 mb-md-4">
                  Support
                </h6>
                <ul className="footer-list">
                  <li>Contact Us</li>
                  <li>FAQs</li>
                  <li>Track your Order</li>
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SOCIAL + BANNER (RIGHT) */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center p-0 ps-lg-4 mt-2 mt-sm-2 mt-md-4 mt-lg-5">
            <div className="d-sm-flex align-items-sm-center justify-content-sm-center mb-4">
              <h6 className="primary-regular-font-size fw-600 mb-3 mb-sm-0 mx-sm-4 text-center">
                Our Socials
              </h6>

              <div className="d-flex gap-4 mb-0">
                <Link to="/">
                  {" "}
                  <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="/">
                  <img src={instagram} alt="Instagram" />
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="LinkedIn" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="Twitter" />
                </Link>
                <Link to="/">
                  <img src={youtube} alt="YouTube" />
                </Link>
              </div>
            </div>

            <img
              src={footerBanner}
              alt="Jewelry"
              className="img-fluid footer-img"
            />
          </div>
        </div>

        {/* ================= SECTION 3 : COPYRIGHT ================= */}
        <div className="row">
          <hr className="footer-divider mt-4 mb-3 mt-sm-4 mb-sm-3" />
        </div>

        <div className="row align-items-center pb-4">
          <p className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0 fs-12">
            © 2023 Dev Jewels. All rights reserved.
          </p>

          <div className="col-12 col-md-6 text-center text-md-end">
            <Link to="/" className="fs-12">
              Sitemap
            </Link>
            <Link to="/" className="ms-3 fs-12">
              Terms of use
            </Link>
            <Link to="/" className="ms-3 fs-12">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
