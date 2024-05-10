import NavBar from "../components/NavBar";
import FaqCommon from "../components/FaqCommon";
import ContactUsCommon from "../components/ContactUsCommon";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BlogCommon from "../components/BlogCommon";

function Blog() {
  return (
    <section className="blog-section">
      <NavBar />
      <Breadcrumb pageTitle="blog" pageName="our blog" />
      <BlogCommon />
      <FaqCommon />
      <ContactUsCommon />
      <Footer />
    </section>
  );
}

export default Blog;
