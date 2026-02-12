import "./disscount-navbar.css";

const DiscountNavbar = () => {
  return (
    <>
      {/* =======================
          DiscountNavbar
      ======================= */}
      <div className="d-flex justify-content-center py-1 py-md-2 discountnavbar">
        {/* Left Menus */}
        <p className="m-0 px-3 d-flex">
          Shop for 559$ or more and get 10% off{" "}
          <a href="#" className="mx-3">
            Shop now
          </a>
        </p>
      </div>
    </>
  );
};

export default DiscountNavbar;
