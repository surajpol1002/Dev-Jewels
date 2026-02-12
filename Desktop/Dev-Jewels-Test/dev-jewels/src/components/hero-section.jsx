import { Link } from "react-router-dom";
import "./hero-section.css";
import heroImage from "../images/Something-to-Cherish-Forever.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section container-fluid p-0 mb-4 mb-sm-5">
      <div className="">
        <div className="row g-0 align-items-center">
          {/* TEXT CONTENT */}
          <div className="col-md-6 order-2 order-md-1 py-5">
            <div className="ms-md-3 ms-lg-5 pe-5 ps-3 hero-content">
              <p className="hero-subtitle secondary-font-size fw-500">
                JUST HOW THE ROYAL FEELS
              </p>

              <h1 className="mb-4 mb-sm-5 hero-title font-fam-Cinzel fw-400 ">
                SOMETHING TO <br />
                CHERISH FOREVER
              </h1>

              <Link to="/" className="btn btn-transparent-radius font-fam-Montserrat fw-600"
              >
                Discover more
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-md-6 order-1 order-md-2">
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Luxury Jewelry"
                className="img-fluid w-100 hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
