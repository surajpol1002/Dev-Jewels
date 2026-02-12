import "./Shop-diamond-shape-section.css";

// dummy SVG placeholders (replace with real svg paths)
import round from "../images/icons/round.svg";
import oval from "../images/icons/oval.svg";
import cushion from "../images/icons/cushion.svg";
import pear from "../images/icons/pear.svg";
import princess from "../images/icons/princess.svg";
import emerald from "../images/icons/emerald.svg";
import marquise from "../images/icons/marquise.svg";
import asscher from "../images/icons/asscher.svg";
import radiant from "../images/icons/radiant.svg";
import heart from "../images/icons/heart-shape.svg";

const diamondShapes = [
  { name: "Round", img: round },
  { name: "Oval", img: oval },
  { name: "Cushion", img: cushion },
  { name: "Pear", img: pear },
  { name: "Princess", img: princess },
  { name: "Emerald", img: emerald },
  { name: "Marquise", img: marquise },
  { name: "Asscher", img: asscher },
  { name: "Radiant", img: radiant },
  { name: "Heart", img: heart },
];

const DiamondShapeSection = () => {
  return (
    <section className="diamond-shape-section py-3 py-sm-4 mb-4 mb-sm-5 d-xl-flex justify-content-center">
      <div className="guidline-width">
        <div className="container text-center py-3 px-0">
          <h2 className="mt-4 mb-3 mt-sm-5 mb-sm-4 hero-title font-fam-Cinzel fw-400 text-center">
            SHOP DIAMOND BY SHAPE
          </h2>

          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-0 d-md-flex justify-content-md-between">
            {diamondShapes.map((item, index) => (
              <div key={index} className="col col-lg-1 mb-3 mb-sm-4 p-0">
                <div className="shape-card">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid shape-icon"
                  />
                  <p className="shape-name my-2 my-sm-3">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondShapeSection;
