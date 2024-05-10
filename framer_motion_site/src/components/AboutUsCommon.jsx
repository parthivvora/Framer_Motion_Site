import { motion } from "framer-motion";
import aboutUsImage from "../assets/about/about_us.png";
import serviceImage from "../assets/about/about_us_2.png";
import itExperienceImage from "../assets/about/about_us_3.png";
import JoinNowButton from "../components/JoinNowButton";
import { IoGameControllerOutline } from "react-icons/io5";
import ProgressBar from "react-bootstrap/ProgressBar";

function AboutUsCommon() {
  return (
    <>
      <div className="about-us-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="about-us-content flex flex-col gap-2 sm:gap-4">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-xl uppercase text-green-600 font-semibold"
                >
                  about us
                </motion.h6>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-4xl sm:text-6xl font-semibold leading-tight"
                >
                  The Best IT Solution Since 2015
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 140 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-lg"
                >
                  Although, Final Stages Of The Internal Network Gives A
                  Complete Experience Of The Parameter Of Speculative
                  Environment , Lorem Ipsum Dolor Sit Amet Consectetur
                  Adipisicing Elit. Eligendi Voluptas Quibusdam Libero Quos Rem
                  Unde, Sequi Distinctio Eum Excepturi Nobis Facere Expedita
                  Sint Nulla Aliquam, Odio Ea Laboriosam Hic? Consectetur Ullam
                  Eveniet
                </motion.p>
                <motion.div
                  className="join-now"
                  initial={{ opacity: 0, y: 160 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                >
                  <JoinNowButton />
                </motion.div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <motion.img
                src={aboutUsImage}
                alt="about_us.png"
                className="w-[700px] h-[100%] ms-auto"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="it-services-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row flex-col-reverse sm:flex-row-reverse">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="it-services-content flex flex-col gap-2 sm:gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-4xl sm:text-6xl font-semibold leading-tight"
                >
                  We Deal With The Aspects Of Professional IT Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 140 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-lg"
                >
                  Although, Final Stages Of The Internal Network Gives A
                  Complete Experience Of The Parameter Of Speculative
                  Environment
                </motion.p>
                <motion.div
                  className="join-now"
                  initial={{ opacity: 0, y: 160 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="it-service-content-box px-4 py-6 flex gap-4 items-center">
                        <i className="fa-solid fa-map text-3xl text-green-600" />
                        <h1 className="text-xl font-semibold">
                          Worldwide Services
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="it-service-content-box px-4 py-6 flex gap-4 items-center mt-[1.2rem] sm:mt-0">
                        <i className="fa-solid fa-headset text-3xl text-green-600" />
                        <h1 className="text-xl font-semibold">
                          Support 24h/24
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="it-service-content-box px-4 py-6 mt-3 flex gap-4 items-center">
                        <IoGameControllerOutline className="text-4xl text-green-600" />
                        <h1 className="text-xl font-semibold">Easy To Reach</h1>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="it-service-content-box px-4 py-6 mt-3 flex gap-4 items-center">
                        <i className="fa-solid fa-star text-3xl text-green-600" />
                        <h1 className="text-xl font-semibold">
                          First On Field
                        </h1>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <motion.img
                src={serviceImage}
                alt="service_image.png"
                className="w-[700px] h-[100%] m-auto"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="it-experience-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="it-experience-content flex flex-col gap-2 sm:gap-[1rem]">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-4xl sm:text-6xl font-semibold leading-tight"
                >
                  We Are Here To IT Solution With 20 Years Of Experience
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 140 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-lg"
                >
                  Although, Final Stages Of The Internal Network Gives A
                  Complete Experience Of The Parameter Of Speculative
                  Environment
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 160 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                >
                  <ul className="flex flex-col gap-8 mt-3">
                    <li>
                      <div className="progress-bar-content flex justify-between items-center">
                        <h1 className="text-xl font-medium">App Development</h1>
                        <h1 className="text-md font-medium">70%</h1>
                      </div>
                      <ProgressBar now={70} />
                    </li>
                    <li>
                      <div className="progress-bar-content flex justify-between items-center">
                        <h1 className="text-xl font-medium">UI/UX Design</h1>
                        <h1 className="text-md font-medium">20%</h1>
                      </div>
                      <ProgressBar now={20} />
                    </li>
                    <li>
                      <div className="progress-bar-content flex justify-between items-center">
                        <h1 className="text-xl font-medium">Web Development</h1>
                        <h1 className="text-md font-medium">55%</h1>
                      </div>
                      <ProgressBar now={55} />
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.img
                src={itExperienceImage}
                alt="about_us_3.png"
                className="w-[700px] h-[100%] ms-auto mt-3 sm:mt-16"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsCommon;
