import "./hero-left-text-right-img.css";
import talkToAnExpert from "../images/Talk-to-an-expert.jpg";

const TalkExpert = () => {
  return (
    <section className="talk-to-expert-section py-5 mb-4 mb-sm-5">
      <div className="container guidline-width p-0">
        <div className="row g-0">
          {/* TEXT CONTENT */}
          <div className="col-md-6 d-flex align-items-center talk-to-expert-section-cont order-2">
            <div className="d-flex flex-column align-items-start align-items-md-start px-3 px-md-0 pe-lg-4 py-md-4 py-4 py-sm-5 me-md-5">
              <h2 className="mb-3 font-fam-Cinzel fw-400">Talk to an expert</h2>
              <p className="mb-5">
                Dev jewel's expert will assist you throughout the process to
                create a beautiful and ethical jewelery to fit any budget.
              </p>

              <a
                href="#"
                className="btn btn-transparent-radius font-fam-Montserrat fw-600"
              >
                Schedule appointment
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <div className="col-md-6 order-1 order-md-2">
            <div className="hero-image-wrapper">
              <img
                src={talkToAnExpert}
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

export default TalkExpert;
