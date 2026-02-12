import { useRef, useState } from "react";
import "./explore-category-section.css";

import Ringprod from "./ring-prod";
import Bracelets from "./bracelets-prod";
import Pendantprod from "./pendant-prod";

const categories = [
  { key: "rings", label: "Rings" },
  { key: "bracelets", label: "Bracelets" },
  { key: "pendant", label: "Pendant" },
  { key: "earrings", label: "Earrings" },
  { key: "necklaces", label: "Necklaces" },
];

const ExploreCategory = () => {
  const [activeTab, setActiveTab] = useState("rings");
  const tabsRef = useRef(null);

  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;
    const scrollAmount = 150;
    tabsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="explore-category py-3 py-sm-4 mb-4 mb-sm-5">
      <div className="d-xl-flex justify-content-center">
        <div className="guidline-width">
          <div className="container p-0">
            {/* TITLE */}
            <h2 className="mt-4 mb-3 mt-sm-5 mb-sm-4 hero-title font-fam-Cinzel fw-400 text-center">
              Explore category
            </h2>

            {/* TABS HEADER */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              {/* LEFT + RIGHT ARROWS (MOBILE ONLY) */}
              <button
                className="btn d-md-none"
                onClick={() => scrollTabs("left")}
              >
                ←
              </button>

              {/* TABS */}
              <div
                ref={tabsRef}
                className="category-tabs d-flex flex-nowrap overflow-auto"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`tab-btn ${
                      activeTab === cat.key ? "active" : ""
                    } primary-regular-font-size font-fam-Montserrat`}
                    onClick={() => setActiveTab(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <button
                className="btn d-md-none"
                onClick={() => scrollTabs("right")}
              >
                →
              </button>

              {/* SEE ALL LINK (DESKTOP) */}
              <a
                href="#"
                className="see-all d-none d-md-flex align-items-center fw-600 primary-regular-font-size"
              >
                See all rings &nbsp;{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* MOBILE SEE ALL */}
            <div className="d-md-none mb-3 text-end">
              <a href="#" className="see-all px-3">
                See all rings →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        {/* TAB CONTENT */}

        <div className="tab-content">
          <div key={activeTab} className="tab-animate">
            {activeTab === "rings" && (
              <>
                {/* 🔁 PASTE YOUR EXISTING RINGS CAROUSEL HERE */}
                <Ringprod />
              </>
            )}

            {activeTab === "bracelets" && (
              <>
                {/* 🔁 PASTE BRACELETS CAROUSEL HERE */}
                <Bracelets />
              </>
            )}

            {activeTab === "pendant" && (
              <>
                {/* 🔁 PASTE PENDANT CAROUSEL HERE */}
                <Pendantprod />
              </>
            )}

            {activeTab === "earrings" && (
              <>
                {/* 🔁 PASTE EARRINGS CAROUSEL HERE */}
                <Ringprod />
              </>
            )}

            {activeTab === "necklaces" && (
              <>
                {/* 🔁 PASTE NECKLACES CAROUSEL HERE */}
                <Bracelets />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategory;
