import AboutUsCommon from "../components/AboutUsCommon";
import Breadcrumb from "../components/Breadcrumb";
import ContactUsCommon from "../components/ContactUsCommon";
import FaqCommon from "../components/FaqCommon";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function About() {
  return (
    <section className="about-us-section">
      <NavBar />
      <Breadcrumb pageTitle="about" pageName="about us" />
      <AboutUsCommon />
      <FaqCommon />
      <ContactUsCommon />
      <Footer />
    </section>
  );
}

export default About;
