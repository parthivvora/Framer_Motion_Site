import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";

function ContactUsCommon() {
  return (
    <div className="contact-us-section pb-16 sm:pb-36">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-us-content flex flex-col gap-2 sm:gap-[1rem] mb-8">
              <motion.h6
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-xl uppercase text-green-600 font-semibold"
              >
                contact
              </motion.h6>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-4xl sm:text-6xl font-semibold"
              >
                Contact Us For Any Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-lg sm:w-7/12 leading-8"
              >
                As A Matter Of Fact The Unification Of The Coherent Software
                Provides A Strict Control Over The Accomplishment Of Intended
                Estimation
              </motion.p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="contact-info-box"
            >
              <h1 className="text-3xl font-bold">Contact Info :</h1>
              <ul className="contact-info-list flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-2xl text-green-600" />
                  <span className="text-xl font-semibold">
                    Example@Example.Com
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-phone text-2xl text-green-600" />
                  <span className="text-xl font-semibold">+123 456 6789</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-location-dot text-2xl text-green-600" />
                  <span className="text-xl font-semibold">
                    A108 Adam Street, New York, NY 535022
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-brands fa-instagram text-2xl text-green-600" />
                  <span className="text-xl font-semibold">Techida-Company</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <form method="post" className="mt-[2rem] sm:mt-0">
              <div className="row">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Name"
                    className="px-3 py-3 text-xl contact-us-input-field shadow-none border-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Subject"
                    className="px-3 py-3 text-xl contact-us-input-field shadow-none border-none mt-[1rem] sm:mt-0"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn", delay: 0.4 }}
                  className="col-sm-12"
                >
                  <Form.Control
                    type="email"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Email"
                    className="px-3 py-3 text-xl contact-us-input-field mt-3 shadow-none border-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn", delay: 0.6 }}
                  className="col-sm-12"
                >
                  <Form.Control
                    as="textarea"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Message"
                    className="px-3 py-3 text-xl contact-us-input-field mt-3 shadow-none border-none"
                    rows={6}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn", delay: 0.8 }}
                  className="col-sm-12"
                >
                  <button
                    type="submit"
                    className="capitalize px-4 py-[10px] mt-3 bg-green-600 rounded-full text-lg font-bold text-white tracking-wide block w-fit"
                  >
                    send now
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            className="col-sm-12"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586583708!2d72.73989512882389!3d21.1591802038092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715235587634!5m2!1sen!2sin"
              height={450}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full mt-5"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsCommon;
