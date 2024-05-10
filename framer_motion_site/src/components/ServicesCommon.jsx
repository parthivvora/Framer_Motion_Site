import { motion } from "framer-motion";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { TiVendorAndroid } from "react-icons/ti";

function ServicesCommon() {
  return (
    <div className="services-section pt-10 sm:pt-32">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services-section-content flex flex-col gap-2 sm:gap-4 mb-3 sm:mb-8">
              <motion.h6
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-xl uppercase text-green-600 font-semibold"
              >
                Our Services
              </motion.h6>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-4xl sm:text-6xl font-semibold leading-tight"
              >
                What We’re Offering?
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
          <div className="col-lg-4 col-md-4 col-sm-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="services-content-box px-4 py-10 flex flex-col gap-4"
            >
              <div className="services-content-box-icon">
                <i className="fa-solid fa-code text-6xl text-green-600" />
              </div>
              <div className="services-content-box-content flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  Web Development
                </h1>
                <p className="text-lg">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio
                  Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur
                </p>
              </div>
              <div className="services-content-box-learn-more-btn">
                <a
                  href="#"
                  className="text-xl font-semibold capitalize text-green-600"
                >
                  learn more
                  <i className="fa-solid fa-arrow-right-long ps-2" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="services-content-box px-4 py-10 flex flex-col gap-4"
            >
              <div className="services-content-box-icon">
                <BsFillMegaphoneFill className="text-6xl text-green-600" />
              </div>
              <div className="services-content-box-content flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  Digital Marketing
                </h1>
                <p className="text-lg">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio
                  Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur
                </p>
              </div>
              <div className="services-content-box-learn-more-btn">
                <a
                  href="#"
                  className="text-xl font-semibold capitalize text-green-600"
                >
                  learn more
                  <i className="fa-solid fa-arrow-right-long ps-2" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="services-content-box px-4 py-10 flex flex-col gap-4"
            >
              <div className="services-content-box-icon">
                <i className="fa-solid fa-magnifying-glass text-6xl text-green-600"></i>
              </div>
              <div className="services-content-box-content flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  SEO Services
                </h1>
                <p className="text-lg">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio
                  Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur
                </p>
              </div>
              <div className="services-content-box-learn-more-btn">
                <a
                  href="#"
                  className="text-xl font-semibold capitalize text-green-600"
                >
                  learn more
                  <i className="fa-solid fa-arrow-right-long ps-2" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="services-content-box px-4 py-10 flex flex-col gap-4"
            >
              <div className="services-content-box-icon">
                <i className="fa-solid fa-bug text-6xl text-green-600" />
              </div>
              <div className="services-content-box-content flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  Cyber Security
                </h1>
                <p className="text-lg">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio
                  Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur
                </p>
              </div>
              <div className="services-content-box-learn-more-btn">
                <a
                  href="#"
                  className="text-xl font-semibold capitalize text-green-600"
                >
                  learn more
                  <i className="fa-solid fa-arrow-right-long ps-2" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="services-content-box px-4 py-10 flex flex-col gap-4 sm:mt-0 mt-[20px]"
            >
              <div className="services-content-box-icon">
                <i className="fa-solid fa-palette text-6xl text-green-600" />
              </div>
              <div className="services-content-box-content flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  Graphic Design
                </h1>
                <p className="text-lg">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio
                  Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur
                </p>
              </div>
              <div className="services-content-box-learn-more-btn">
                <a
                  href="#"
                  className="text-xl font-semibold capitalize text-green-600"
                >
                  learn more
                  <i className="fa-solid fa-arrow-right-long ps-2" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="services-content-box px-4 py-10 flex flex-col gap-4 sm:mt-0 mt-[20px]"
            >
              <div className="services-content-box-icon">
                <TiVendorAndroid className="text-6xl text-green-600" />
              </div>
              <div className="services-content-box-content flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  App Development
                </h1>
                <p className="text-lg">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio
                  Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur
                </p>
              </div>
              <div className="services-content-box-learn-more-btn">
                <a
                  href="#"
                  className="text-xl font-semibold capitalize text-green-600"
                >
                  learn more
                  <i className="fa-solid fa-arrow-right-long ps-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCommon;
