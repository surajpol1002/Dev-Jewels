import "./navbar.css";
import searchIcon from "../images/icons/search.svg";
import helpDeskIcon from "../images/icons/help-desk.gif";
import heartIcon from "../images/icons/heart.svg";
import cartIcon from "../images/icons/cart.svg";
import loginIcon from "../images/icons/login.svg";
import devJewelsLogo from "../images/logo/DEV-JEWELS-logo.svg";

const TopNavbar = () => {
  return (
    <>
      {/* =======================
          TopNavbar
      ======================= */}
      <nav className="topnavbar navbar navbar-expand-lg py-3 py-sm-3 py-md-4">
        <div className="container-fluid d-lg-flex justify-content-arround">
          {/* Left Menus */}
          <div className="topnavbar-left d-flex align-items-center gap-4">
            <a href="#" className="nav-link d-flex align-items-center gap-1">
              <img src={searchIcon} className="menu-icons" alt="Search Icon" />
              <span className="d-none d-md-inline">Search</span>
            </a>

            <a href="#" className="nav-link navlink-divider">
              <img
                src={helpDeskIcon}
                className="menu-icons"
                alt="Help Desk Icon"
              />
              <span className="d-none d-md-inline">Help Desk</span>
            </a>
          </div>

          {/* Logo */}
          <a
            className="navbar-brand mx-auto px-md-1 px-lg-5 px-xl-0 d-none d-lg-inline"
            href="#"
          >
            <img
              src={devJewelsLogo}
              className="menu-icons logo"
              alt="Dev Jewels Logo"
            />
          </a>

          {/* Right Menus */}
          <div className="topnavbar-right d-flex align-items-center gap-4">
            <a href="#" className="nav-link">
              <img src={heartIcon} className="menu-icons" alt="Wishlist Icon" />{" "}
              <span className="d-none d-md-inline">Wishlist</span>
            </a>

            <a href="#" className="nav-link">
              <img src={cartIcon} className="menu-icons" alt="Cart Icon" />
              <span className="d-none d-md-inline">Cart</span>
            </a>

            <a href="#" className="nav-link">
              <img src={loginIcon} className="menu-icons" alt="Login Icon" />
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
