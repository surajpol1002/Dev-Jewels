import { Link } from "react-router-dom";
import "./meeting-section.css";

import bookappointment from "../images/icons/book-an-appointment.svg";
import incrediblevalue from "../images/icons/incredible-value.svg";
import expressdelivery from "../images/icons/express-delivery.svg";
import spectacularquality from "../images/icons/spectacular-quality.svg";

const diamondShapes = [
  { name: "Book an Appointment", img: bookappointment },
  { name: "Incredible Value", img: incrediblevalue },
  { name: "Express Delivery", img: expressdelivery },
  { name: "Spectacular quality", img: spectacularquality },
];

const Meetingsection = () => {
  return (
    <section className="meeting-section py-3 py-sm-5 d-xl-flex justify-content-center">
      <div className="guidline-width">
        <div className="container text-center py-5 px-3 px-sm-0">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-0 d-md-flex justify-content-md-between">
            {diamondShapes.map((item, index) => (
              <div key={index} className="col col-lg-3 mb-3 mb-sm-4 p-0">
                <div className="shape-card">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid shape-icon"
                  />
                  <p className="shape-name my-2 my-sm-4 secondary-font-size fw-600">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-3 my-3 my-sm-0 d-flex justify-content-center">
            <div className="col-12 col-sm-8 col-md-8">
              <p className="mb-4">
                Our jewel store offers a stunning collection of high-quality
                gems and jewelry pieces that are sure to elevate your style and
                make a statement.
              </p>
              <Link to="/" className="btn btn-transparent-radius font-fam-Montserrat fw-600"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetingsection;
