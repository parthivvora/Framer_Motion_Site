import NavBar from "../components/NavBar";
import FaqCommon from "../components/FaqCommon";
import ContactUsCommon from "../components/ContactUsCommon";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

function Contact() {
  return (
    <section className="contact-section">
      <NavBar />
      <Breadcrumb pageTitle="contact" pageName="our contact" />
      <ContactUsCommon />
      <FaqCommon />
      <Footer />
    </section>
  );
}

export default Contact;
