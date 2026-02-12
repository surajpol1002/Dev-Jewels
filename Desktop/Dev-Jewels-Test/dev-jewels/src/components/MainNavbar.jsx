import { Link } from "react-router-dom";
import "./navbar.css";
import devJewelsLogo from "../images/logo/DEV-JEWELS-logo.svg";

const MainNavbar = () => {
  return (
    <>
      {/* =======================
          MainNavbar
      ======================= */}
      <nav className="mainnavbar navbar navbar-expand-lg navbar-light bg-white py-0">
        <div className="container-fluid d-lg-flex justify-content-between">
          <div className="d-lg-none d-inline">
            <Link to="/" className="navbar-brand mx-auto px-md-1 px-lg-5 px-xl-0">
              <img
                src={devJewelsLogo}
                className="menu-icons logo"
                alt="Dev Jewels Logo"
              />
            </Link>
          </div>
          {/* Mobile Toggle */}
          <button
            className="navbar-toggler navbar-toggler-cus"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Menu */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="mainNavbar"
          >
            <ul className="navbar-nav gap-lg-3 text-center p-2">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  OUR STORY
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  JEWELRY
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  DIAMOND
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  IMPACT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  LEARN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  WORK FOR NATURE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
