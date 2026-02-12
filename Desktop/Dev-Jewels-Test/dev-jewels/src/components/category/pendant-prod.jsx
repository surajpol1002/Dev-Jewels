import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import pendantprod from "./pendant.json";

import prodheartIcon from "../../images/icons/prod-heart.svg";

function Pendantprod() {
  return (
    <Swiper
      modules={[Pagination]}
      navigation
      spaceBetween={32}
      slidesPerView={4}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        320: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }}
    >
      {pendantprod.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="product-card">
            <div className="product-image-wrapper">
              <img src={item.image} alt={item.name} />
              <button className="d-flex justify-content-center align-items-center wishlist-btn">
                <img
                  src={prodheartIcon}
                  className="prod-icon"
                  alt="Help Desk Icon"
                />
              </button>
            </div>

            <div className="product-info py-2 py-sm-3 px-1 px-xl-0">
              <p className="mb-0 product-name secondary-font-size">
                {item.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Pendantprod;
