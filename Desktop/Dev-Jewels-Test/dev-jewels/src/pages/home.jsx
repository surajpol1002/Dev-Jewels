import Topnavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import DiscountNavbar from "../components/Disscount-nav";
import HeroSection from "../components/hero-section";
import ProductCarousel from "../components/Trending-now-section";
import Royaljewelrysection from "../components/royal-jewelry-section";
import DiamondShapeSection from "../components/Shop-diamond-shape-section";
import Engagementrings from "../components/hero-left-img-right-text";
import TalkExpert from "../components/hero-left-text-right-img";
import Meetingsection from "../components/Metting-section";
import Footer from "../components/Footer";
import ExploreCategory from "../components/category/explore-category-section";

function Home() {
  return (
    <>
      <header className="d-lg-flex flex-lg-column align-items-lg-center pb-3">
        <DiscountNavbar />
        <div className="guidline-width">
          <Topnavbar />
          <MainNavbar />
        </div>
      </header>
      <HeroSection />
      <ProductCarousel />
      <Royaljewelrysection />
      <DiamondShapeSection />
      <ExploreCategory />
      <Engagementrings />
      <TalkExpert />
      <Meetingsection />
      <Footer />
    </>
  );
}

export default Home;
