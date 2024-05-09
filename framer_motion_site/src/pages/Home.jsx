import { motion } from "framer-motion";
import JoinNowButton from "../components/JoinNowButton";
import customerTestimonialData from "../data/customerTestimonialData.json";
import teamData from "../data/teamData.json";
import NavBar from "../components/NavBar";
import itSolutionImage from "../assets/home/it_solution.png";
import faqCustomerImage from "../assets/home/faq_customer.png";
import aboutUsImage from "../assets/about/about_us.png";
import serviceImage from "../assets/about/about_us_2.png";
import itExperienceImage from "../assets/about/about_us_3.png";
import clientLogo1 from "../assets/home/1-white.png";
import clientLogo2 from "../assets/home/2-white.png";
import clientLogo3 from "../assets/home/3-white.png";
import clientLogo4 from "../assets/home/4-white.png";
import clientLogo5 from "../assets/home/5-white.png";
import clientLogo6 from "../assets/home/6-white.png";
import clientLogo7 from "../assets/home/7-white.png";
import "../styles/home.css";
import { TiVendorAndroid, TiShoppingCart } from "react-icons/ti";
import {
  BsFillMegaphoneFill,
  BsCheck2Circle,
  BsCoin,
  BsCash,
  BsCashCoin,
} from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { GoXCircle } from "react-icons/go";
import ProgressBar from "react-bootstrap/ProgressBar";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PortfolioCommon from "../components/PortfolioCommon";
import BlogCommon from "../components/BlogCommon";
import Footer from "../components/Footer";

function Home() {
  const clientReviewOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 1200,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  const customerTestimonialOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1800,
    autoplaySpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section className="home-section">
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
      <div className="client-section py-10 sm:py-24">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn", delay: 0.3 }}
              className="col-sm-12"
            >
              <OwlCarousel className="owl-theme" {...clientReviewOptions}>
                <div className="item">
                  <img src={clientLogo1} alt="client_logo" />
                </div>
                <div className="item">
                  <img src={clientLogo2} alt="client_logo" />
                </div>
                <div className="item">
                  <img src={clientLogo3} alt="client_logo" />
                </div>
                <div className="item">
                  <img src={clientLogo4} alt="client_logo" />
                </div>
                <div className="item">
                  <img src={clientLogo5} alt="client_logo" />
                </div>
                <div className="item">
                  <img src={clientLogo6} alt="client_logo" />
                </div>
                <div className="item">
                  <img src={clientLogo7} alt="client_logo" />
                </div>
              </OwlCarousel>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="pricing-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pricing-plan-content flex flex-col gap-3 mb-8">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-xl uppercase text-green-600 font-semibold"
                >
                  PRICING
                </motion.h6>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-5xl font-semibold"
                >
                  Our Pricing
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
            <div className="col-lg-3 col-md-3 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="pricing-plan-content-box py-5 flex flex-col items-center"
              >
                <div className="icon-box">
                  <TiShoppingCart className="text-7xl" />
                </div>
                <div className="price-details-content flex flex-col items-center gap-3">
                  <h1 className="text-2xl capitalize font-bold">free</h1>
                  <h1 className="text-6xl capitalize font-bold text-green-600">
                    00$
                  </h1>
                  <h1 className="text-2xl capitalize font-bold">per project</h1>
                </div>
                <ul className="pricing-details flex flex-col items-center gap-2 mt-4">
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Single User
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    No Updates
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Limited Access Library
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Lorem Ipsum
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Dolor Sit Amet
                  </li>
                </ul>
                <a
                  href="#"
                  className="start-now-btn capitalize px-4 py-[10px] bg-green-600 rounded-full text-lg font-bold text-white tracking-wide block w-fit mt-10"
                >
                  start now
                </a>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.1 }}
                className="pricing-plan-content-box py-5 flex flex-col items-center"
              >
                <div className="icon-box">
                  <BsCoin className="text-7xl" />
                </div>
                <div className="price-details-content flex flex-col items-center gap-3">
                  <h1 className="text-2xl capitalize font-bold">Basic</h1>
                  <h1 className="text-6xl capitalize font-bold text-green-600">
                    19$
                  </h1>
                  <h1 className="text-2xl capitalize font-bold">per project</h1>
                </div>
                <ul className="pricing-details flex flex-col items-center gap-2 mt-4">
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Single User
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    No Updates
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Limited Access Library
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Lorem Ipsum
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <GoXCircle className="text-lg text-red-950" />
                    Dolor Sit Amet
                  </li>
                </ul>
                <a
                  href="#"
                  className="start-now-btn capitalize px-4 py-[10px] bg-green-600 rounded-full text-lg font-bold text-white tracking-wide block w-fit mt-10"
                >
                  start now
                </a>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
                className="pricing-plan-content-box py-5 flex flex-col items-center"
              >
                <div className="icon-box">
                  <BsCash className="text-7xl" />
                </div>
                <div className="price-details-content flex flex-col items-center gap-3">
                  <h1 className="text-2xl capitalize font-bold">standard</h1>
                  <h1 className="text-6xl capitalize font-bold text-green-600">
                    39$
                  </h1>
                  <h1 className="text-2xl capitalize font-bold">per project</h1>
                </div>
                <ul className="pricing-details flex flex-col items-center gap-2 mt-4">
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Single User
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    No Updates
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Limited Access Library
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <GoXCircle className="text-lg text-red-950" />
                    Lorem Ipsum
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <GoXCircle className="text-lg text-red-950" />
                    Dolor Sit Amet
                  </li>
                </ul>
                <a
                  href="#"
                  className="start-now-btn capitalize px-4 py-[10px] bg-green-600 rounded-full text-lg font-bold text-white tracking-wide block w-fit mt-10"
                >
                  start now
                </a>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.3 }}
                className="pricing-plan-content-box py-5 flex flex-col items-center"
              >
                <div className="icon-box">
                  <BsCashCoin className="text-7xl" />
                </div>
                <div className="price-details-content flex flex-col items-center gap-3">
                  <h1 className="text-2xl capitalize font-bold">pro</h1>
                  <h1 className="text-6xl capitalize font-bold text-green-600">
                    99$
                  </h1>
                  <h1 className="text-2xl capitalize font-bold">per project</h1>
                </div>
                <ul className="pricing-details flex flex-col items-center gap-2 mt-4">
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    Single User
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <BsCheck2Circle className="text-lg text-green-600" />
                    No Updates
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <GoXCircle className="text-lg text-red-950" />
                    Limited Access Library
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <GoXCircle className="text-lg text-red-950" />
                    Lorem Ipsum
                  </li>
                  <li className="font-medium text-lg flex items-center gap-2">
                    <GoXCircle className="text-lg text-red-950" />
                    Dolor Sit Amet
                  </li>
                </ul>
                <a
                  href="#"
                  className="start-now-btn capitalize px-4 py-[10px] bg-green-600 rounded-full text-lg font-bold text-white tracking-wide block w-fit mt-10"
                >
                  start now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-testimonial-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="customer-testimonial-content flex flex-col gap-3 mb-8">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-xl uppercase text-green-600 font-semibold"
                >
                  TESTIMONIALS
                </motion.h6>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-5xl font-semibold"
                >
                  Customers Testimonials
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
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="col-sm-12"
            >
              <OwlCarousel
                className="owl-theme"
                {...customerTestimonialOptions}
              >
                {customerTestimonialData.map((review, index) => (
                  <div
                    className="review-content-box p-4 flex flex-col gap-3"
                    key={index}
                  >
                    <div className="customer-info flex items-center gap-4">
                      <img
                        src={`${window.location}testimonial/${review.image}`}
                        alt="customer_image"
                        className="h-16 rounded-full"
                        style={{ width: "4rem" }}
                      />
                      <h1 className="text-xl capitalize font-bold">
                        {review.name}
                      </h1>
                    </div>
                    <div className="review-details">
                      <p className="text-lg leading-8 text-center">
                        {review.description}
                      </p>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="our-team-section pb-36">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="our-team-content flex flex-col gap-3 mb-8">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-xl uppercase text-green-600 font-semibold"
                >
                  TEAM
                </motion.h6>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-5xl font-semibold"
                >
                  Our Team
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
            {teamData.map((team, index) => (
              <div className="col-lg-3 col-md-3" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="our-team-content-box"
                >
                  <img
                    src={`${window.location}team/${team.image}`}
                    alt="team_member_image"
                  />
                  <div className="team-member-details flex flex-col items-center gap-2 py-3">
                    <h1 className="text-2xl capitalize font-bold">
                      {team.name}
                    </h1>
                    <h1 className="text-base capitalize font-medium">
                      {team.type}
                    </h1>
                    <ul className="social-media-icons flex gap-3 items-center">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook text-2xl text-gray-600 hover:text-green-600" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram text-2xl text-gray-600 hover:text-green-600" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter text-2xl text-gray-600 hover:text-green-600" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin text-2xl text-gray-600 hover:text-green-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BlogCommon />
      <div className="faq-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="faq-content flex flex-col gap-3 mb-8">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-xl uppercase text-green-600 font-semibold"
                >
                  FAQ
                </motion.h6>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                  className="text-5xl font-semibold"
                >
                  Frequently Asked Questions
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
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.img
                src={faqCustomerImage}
                alt="faq_customer_image.png"
                className="w-[700px] h-[100%] ms-auto"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="faq-accordion"
              >
                <Accordion className="flex flex-col gap-4">
                  <Accordion.Item
                    className="rounded-xl border-none"
                    eventKey="0"
                  >
                    <Accordion.Header>
                      Do You Offer Both On-Site And Remote IT Support?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                      Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                      Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias
                      Modi Voluptates Aspernatur Consequuntur Facere?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="rounded-xl border-none"
                    eventKey="1"
                  >
                    <Accordion.Header>What Is Techida ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                      Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                      Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias
                      Modi Voluptates Aspernatur Consequuntur Facere?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="rounded-xl border-none"
                    eventKey="2"
                  >
                    <Accordion.Header>
                      Is There Any Updates In The Future ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                      Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                      Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias
                      Modi Voluptates Aspernatur Consequuntur Facere?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="rounded-xl border-none"
                    eventKey="3"
                  >
                    <Accordion.Header>
                      How Much For The Service ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                      Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                      Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias
                      Modi Voluptates Aspernatur Consequuntur Facere?
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-section py-10 sm:py-36">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-us-content flex flex-col gap-3 mb-8">
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
                  className="text-5xl font-semibold"
                >
                  Contact Us For Any Questions
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
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="contact-info-box">
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
                    <span className="text-xl font-semibold">
                      Techida-Company
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <form method="post">
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
                      className="px-3 py-3 text-xl contact-us-input-field shadow-none border-none"
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
      <Footer />
    </section>
  );
}

export default Home;
// text-4xl sm:text-6xl text-green-600
