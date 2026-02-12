import { Link } from "react-router-dom";
import "./royal-jewelry-section.css";

import womendiamondRings from "../images/women-diamond-rings.jpg";
import engagementRingsImage from "../images/engagement-rings.jpg";
import diamondRingsImage from "../images/diamond-rings.jpg";

const Royaljewelrysection = () => {
  return (
    <section className="collection-section py-3 py-sm-4 px-3 px-sm-0 mb-4 mb-sm-5 d-flex justify-content-center">
      <div className="guidline-width">
        <div className="container p-0 pb-lg-5">
          <div className="row g-0 align-items-stretch">
            {/* LEFT BIG IMAGE */}
            <div className="col-12 col-md-6 col-lg-6 mb-3 mb-lg-0">
              <div className="img-card big-img">
                <img src={womendiamondRings} alt="Diamond rings" />
                <div className="img-overlay"></div>
                <p className="img-text fw-600">Diamond rings</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-12 col-md-6 col-lg-6 d-flex j-content-main">
              <div className="d-flex flex-column w-100 j-content-child">
                {/* TEXT CONTENT — AUTO EXPANDS */}
                <div className="flex-grow-1 d-flex mb-3 mb-lg-0">
                  <div className="content-box d-flex flex-column justify-content-center align-items-center text-center w-100">
                    <h2 className="mb-3 font-fam-Cinzel fw-400">
                      ROYAL JEWELRY
                    </h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur. Pretium <br />{" "}
                      risus nam risus sit massa nunc faucibus.
                    </p>
                    <Link to="/" className="btn btn-transparent-radius font-fam-Montserrat fw-600"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>

                {/* BOTTOM IMAGES — STICK TO BOTTOM */}
                <div className="row g-0">
                  <div className="col-12 col-md-6 mb-3 mb-lg-0">
                    <div className="img-card small-img j-content-img-left">
                      <img src={engagementRingsImage} alt="Diamond rings" />
                      <div className="img-overlay"></div>
                      <p className="img-text fw-600">Diamond rings</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mb-3 mb-lg-0">
                    <div className="img-card small-img j-content-img-right">
                      <img src={diamondRingsImage} alt="Engagement rings" />
                      <div className="img-overlay"></div>
                      <p className="img-text fw-600">Engagement rings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Royaljewelrysection;
