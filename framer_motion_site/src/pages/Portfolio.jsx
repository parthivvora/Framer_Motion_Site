import NavBar from "../components/NavBar";
import FaqCommon from "../components/FaqCommon";
import ContactUsCommon from "../components/ContactUsCommon";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import PortfolioCommon from "../components/PortfolioCommon";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <NavBar />
      <Breadcrumb pageTitle="portfolio" pageName="our portfolio" />
      <PortfolioCommon />
      <FaqCommon />
      <ContactUsCommon />
      <Footer />
    </section>
  );
}

export default Portfolio;
