import NavBar from "../components/NavBar";
import FaqCommon from "../components/FaqCommon";
import ContactUsCommon from "../components/ContactUsCommon";
import Breadcrumb from "../components/Breadcrumb";
import ServicesCommon from "../components/ServicesCommon";
import Footer from "../components/Footer";

function Service() {
  return (
    <section className="services-section">
      <NavBar />
      <Breadcrumb pageTitle="services" pageName="our services" />
      <ServicesCommon />
      <FaqCommon />
      <ContactUsCommon />
      <Footer />
    </section>
  );
}

export default Service;
