import "./hero-left-img-right-text.css";
import bannerEngagementrings from "../images/Banner-Engagement-rings.jpg";

const Engagementrings = () => {
  return (
    <section className="engagementrings-section py-3 py-sm-4 mb-4 mb-sm-5">
      <div className="container guidline-width p-0">
        <div className="row g-0">
          {/* IMAGE */}
          <div className="col-md-6">
            <div className="hero-image-wrapper">
              <img
                src={bannerEngagementrings}
                alt="Luxury Jewelry"
                className="img-fluid w-100 hero-image"
              />
            </div>
          </div>
          {/* TEXT CONTENT */}
          <div className="col-md-6 d-flex align-items-center engagementrings-cont">
            <div className="d-flex flex-column align-items-start align-items-md-start px-3 py-4 py-sm-5 p-md-4 p-lg-5 me-md-5">
              <h2 className="mb-3 font-fam-Cinzel fw-400">Engagement rings</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </p>

              <a
                href="#"
                className="btn btn-transparent-radius font-fam-Montserrat fw-600"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagementrings;
