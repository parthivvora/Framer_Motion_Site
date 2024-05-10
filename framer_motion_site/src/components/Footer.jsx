import footerLogoImage from "../assets/logo.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <section className="footer-section py-4 sm:py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="footer-part-1 p-4 rounded-lg"
            >
              <img
                src={footerLogoImage}
                alt="logo.png"
                className="w-6/12 h-2/6 object-cover"
              />
              <p className="leading-8 mt-2">
                Lorem Ipsum Dolor Sit Amet Aspernatur Exercitationem Fugiat.
              </p>
              <h1 className="follow-us-title text-xl font-semibold capitalize mt-4">
                follow us
              </h1>
              <ul className="follow-us-icons flex items-center gap-3 mt-2">
                <li className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full">
                  <i className="fa-brands fa-facebook text-base text-white"></i>
                </li>
                <li className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full">
                  <i className="fa-brands fa-instagram text-base text-white"></i>
                </li>
                <li className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full">
                  <i className="fa-brands fa-twitter text-base text-white"></i>
                </li>
                <li className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full">
                  <i className="fa-brands fa-youtube text-base text-white"></i>
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="text-xl font-semibold capitalize mt-12 sm:mt-0"
            >
              site map
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="site-map-part flex flex-col gap-2 mt-4"
            >
              <li>
                <a href="#" className="capitalize text-base">
                  home
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  about
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  service
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  contact
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="text-xl font-semibold capitalize mt-12 sm:mt-0"
            >
              follow us
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="site-map-part flex flex-col gap-2 mt-4"
            >
              <li>
                <a href="#" className="capitalize text-base">
                  facebook
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  instagram
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  linkedin
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  X
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="text-xl font-semibold capitalize mt-12 sm:mt-0"
            >
              our service
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="site-map-part flex flex-col gap-2 mt-4"
            >
              <li>
                <a href="#" className="capitalize text-base">
                  digital marketing
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  web Development
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  cyber security
                </a>
              </li>
              <li>
                <a href="#" className="capitalize text-base">
                  graphic design
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="col-sm-12">
            <hr />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="copy-right-part flex items-center justify-between"
            >
              <p className="font-medium">
                <i className="fa-regular fa-copyright text-sm pe-2" />
                2024 Created By: Erramix
              </p>
              <div className="terms-policy-part">
                <a href="#" className="capitalize text-base font-medium">
                  terms of use |{" "}
                </a>
                <a href="#" className="capitalize text-base font-medium">
                  privacy policy
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
