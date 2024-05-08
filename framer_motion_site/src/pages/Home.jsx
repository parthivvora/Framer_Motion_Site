import { motion } from "framer-motion";
import JoinNowButton from "../components/JoinNowButton";
import NavBar from "../components/NavBar";
import itSolutionImage from "../assets/home/it_solution.png";
import aboutUsImage from "../assets/about/about_us.png";
import serviceImage from "../assets/about/about_us_2.png";
import itExperienceImage from "../assets/about/about_us_3.png";
import "../styles/home.css";
import { TiVendorAndroid } from "react-icons/ti";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import ProgressBar from "react-bootstrap/ProgressBar";
import PortfolioCommon from "../components/PortfolioCommon";

function Home() {
  return (
    <section className="home-section pb-20">
      <NavBar />
      <div className="excellent-it-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="excellent-it-content flex flex-col gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-4xl sm:text-6xl font-semibold leading-tight"
                >
                  Excellent IT Solutions For Your Success
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 140 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-lg"
                >
                  At Any Rate, Lorem Ipsum Dolor Sit Amet Consectetur
                  Adipisicing Elit. Eaque Amet, Quod Doloribus The Framework Of
                  The Essence Represents A Bond Between The Flexible Production
                  Planning And The Distribution Of Repetitive Aspect
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
                src={itSolutionImage}
                alt="it_solution.png"
                className="w-[700px] h-[100%] ms-auto"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services-section-content flex flex-col gap-4 mb-8">
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
                  className="text-5xl font-semibold"
                >
                  What We’re Offering?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-lg w-7/12 leading-8"
                >
                  As A Matter Of Fact The Unification Of The Coherent Software
                  Provides A Strict Control Over The Accomplishment Of Intended
                  Estimation
                </motion.p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="services-content-box px-4 py-10 flex flex-col gap-4">
                <div className="services-content-box-icon">
                  <i className="fa-solid fa-code text-6xl text-green-600" />
                </div>
                <div className="services-content-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">Web Development</h1>
                  <p className="text-lg">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
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
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="services-content-box px-4 py-10 flex flex-col gap-4">
                <div className="services-content-box-icon">
                  <BsFillMegaphoneFill className="text-6xl text-green-600" />
                </div>
                <div className="services-content-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">Digital Marketing</h1>
                  <p className="text-lg">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
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
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="services-content-box px-4 py-10 flex flex-col gap-4">
                <div className="services-content-box-icon">
                  <i className="fa-solid fa-magnifying-glass text-6xl text-green-600"></i>
                </div>
                <div className="services-content-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">SEO Services</h1>
                  <p className="text-lg">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
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
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="services-content-box px-4 py-10 flex flex-col gap-4">
                <div className="services-content-box-icon">
                  <i className="fa-solid fa-bug text-6xl text-green-600" />
                </div>
                <div className="services-content-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">Cyber Security</h1>
                  <p className="text-lg">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
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
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="services-content-box px-4 py-10 flex flex-col gap-4">
                <div className="services-content-box-icon">
                  <i className="fa-solid fa-palette text-6xl text-green-600" />
                </div>
                <div className="services-content-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">Graphic Design</h1>
                  <p className="text-lg">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
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
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="services-content-box px-4 py-10 flex flex-col gap-4">
                <div className="services-content-box-icon">
                  <TiVendorAndroid className="text-6xl text-green-600" />
                </div>
                <div className="services-content-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">App Development</h1>
                  <p className="text-lg">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="about-us-content flex flex-col gap-4">
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
      <div className="it-services-section">
        <div className="container">
          <div className="row flex-col-reverse sm:flex-row-reverse">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="it-services-content flex flex-col gap-4">
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
                      <div className="it-service-content-box px-4 py-6 flex gap-4 items-center">
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
            <div className="col-lg-6 col-md-6 col-sm-12">
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
      <div className="it-experience-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="it-experience-content flex flex-col gap-4">
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
                  <ul className="flex flex-col gap-8">
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
                className="w-[700px] h-[100%] ms-auto"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section bg-gray-950 py-16">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  500
                </h1>
                <h1 className="font-extrabold capitalize text-2xl text-white">
                  happy clients
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  60
                </h1>
                <h1 className="font-extrabold capitalize text-2xl text-white">
                  Hard Worker
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  800
                </h1>
                <h1 className="font-extrabold capitalize text-2xl text-white">
                  Complete Project
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  30
                </h1>
                <h1 className="font-extrabold capitalize text-2xl text-white">
                  Years Of Exprience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="why-choose-content flex flex-col gap-3 mb-8">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-xl uppercase text-green-600 font-semibold"
                >
                  WHY CHOOSE US
                </motion.h6>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-5xl font-semibold"
                >
                  Why Our Clients Choose Us
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-lg w-7/12 leading-8"
                >
                  As A Matter Of Fact The Unification Of The Coherent Software
                  Provides A Strict Control Over The Accomplishment Of Intended
                  Estimation
                </motion.p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                whileInView={{ opacity: 1, x: 0 }}
                className="why-choose-box px-4 py-10 flex flex-col gap-4"
              >
                <div className="why-choose-box-icon">
                  <h1 className="text-5xl font-bold text-green-600">01.</h1>
                </div>
                <div className="why-choose-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">
                    Latest Technologies
                  </h1>
                  <p className="text-base">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                whileInView={{ opacity: 1, y: 0 }}
                className="why-choose-box px-4 py-10 flex flex-col gap-4"
              >
                <div className="why-choose-box-icon">
                  <h1 className="text-5xl font-bold text-green-600">02.</h1>
                </div>
                <div className="why-choose-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">Uniqe Solutions</h1>
                  <p className="text-base">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                whileInView={{ opacity: 1, x: 0 }}
                className="why-choose-box px-4 py-10 flex flex-col gap-4"
              >
                <div className="why-choose-box-icon">
                  <h1 className="text-5xl font-bold text-green-600">03.</h1>
                </div>
                <div className="why-choose-box-content flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">
                    Powerful Strategies
                  </h1>
                  <p className="text-base">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas
                    Tenetur
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <PortfolioCommon />
    </section>
  );
}

export default Home;
// text-4xl sm:text-6xl text-green-600
