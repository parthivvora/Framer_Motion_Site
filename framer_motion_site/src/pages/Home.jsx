import { motion } from "framer-motion";
import JoinNowButton from "../components/JoinNowButton";
import customerTestimonialData from "../data/customerTestimonialData.json";
import teamData from "../data/teamData.json";
import NavBar from "../components/NavBar";
import itSolutionImage from "../assets/home/it_solution.png";
import clientLogo1 from "../assets/home/1-white.png";
import clientLogo2 from "../assets/home/2-white.png";
import clientLogo3 from "../assets/home/3-white.png";
import clientLogo4 from "../assets/home/4-white.png";
import clientLogo5 from "../assets/home/5-white.png";
import clientLogo6 from "../assets/home/6-white.png";
import clientLogo7 from "../assets/home/7-white.png";
import "../styles/home.css";
import { TiShoppingCart } from "react-icons/ti";
import { BsCheck2Circle, BsCoin, BsCash, BsCashCoin } from "react-icons/bs";
import { GoXCircle } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PortfolioCommon from "../components/PortfolioCommon";
import BlogCommon from "../components/BlogCommon";
import Footer from "../components/Footer";
import AboutUsCommon from "../components/AboutUsCommon";
import FaqCommon from "../components/FaqCommon";
import ContactUsCommon from "../components/ContactUsCommon";
import ServicesCommon from "../components/ServicesCommon";

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
        items: 2,
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
      <div className="excellent-it-section pt-10 sm:pt-32">
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
      <ServicesCommon />
      <AboutUsCommon />
      <div className="counter-section mt-10 sm:mt-32 bg-gray-950 py-14">
        <div className="container">
          <div className="row gap-8 sm:gap-0">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-2 sm:gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  500
                </h1>
                <h1 className="font-bold capitalize text-lg sm:text-2xl sm:font-extrabold text-white">
                  happy clients
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-2 sm:gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  60
                </h1>
                <h1 className="font-bold capitalize text-lg sm:text-2xl sm:font-extrabold text-white">
                  Hard Worker
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-2 sm:gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  800
                </h1>
                <h1 className="font-bold capitalize text-lg sm:text-2xl sm:font-extrabold text-white">
                  Complete Project
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box flex flex-col gap-2 sm:gap-4 items-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-green-600">
                  30
                </h1>
                <h1 className="font-bold capitalize text-lg sm:text-2xl sm:font-extrabold text-white">
                  Years Of Exprience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="why-choose-content flex flex-col gap-3 mb-4 sm:mb-8">
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
                  className="text-4xl sm:text-6xl font-semibold"
                >
                  Why Our Clients Choose Us
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
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                whileInView={{ opacity: 1, x: 0 }}
                className="why-choose-box px-4 py-10 flex flex-col gap-4"
              >
                <div className="why-choose-box-icon">
                  <h1 className="text-5xl font-bold text-green-600">01.</h1>
                </div>
                <div className="why-choose-box-content flex flex-col gap-2">
                  <h1 className="text-2xl sm:text-3xl font-semibold">
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
                className="why-choose-box px-4 py-10 flex flex-col gap-4 mt-[1.2rem] sm:mt-0"
              >
                <div className="why-choose-box-icon">
                  <h1 className="text-5xl font-bold text-green-600">02.</h1>
                </div>
                <div className="why-choose-box-content flex flex-col gap-2">
                  <h1 className="text-2xl sm:text-3xl font-semibold">
                    Unique Solutions
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
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                whileInView={{ opacity: 1, x: 0 }}
                className="why-choose-box px-4 py-10 flex flex-col gap-4 mt-[1.2rem] sm:mt-0"
              >
                <div className="why-choose-box-icon">
                  <h1 className="text-5xl font-bold text-green-600">03.</h1>
                </div>
                <div className="why-choose-box-content flex flex-col gap-2">
                  <h1 className="text-2xl sm:text-3xl font-semibold">
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
      <div className="client-section pt-10 sm:pt-32">
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
      <div className="pricing-plan-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pricing-plan-content flex flex-col gap-2 sm:gap-[1rem] mb-8">
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
                  className="text-4xl sm:text-6xl font-semibold"
                >
                  Our Pricing
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
                className="pricing-plan-content-box py-5 flex flex-col items-center mt-[1.5rem] sm:mt-0"
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
                className="pricing-plan-content-box py-5 flex flex-col items-center mt-[1.5rem] sm:mt-0"
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
                className="pricing-plan-content-box py-5 flex flex-col items-center mt-[1.5rem] sm:mt-0"
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
      <div className="customer-testimonial-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="customer-testimonial-content flex flex-col gap-2 sm:gap-[1rem] mb-8">
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
                  className="text-4xl sm:text-6xl font-semibold"
                >
                  Customers Testimonials
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
                      <p className="text-lg leading-8">{review.description}</p>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="our-team-section pt-10 sm:pt-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="our-team-content flex flex-col gap-2 sm:gap-[1rem] mb-8">
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
                  className="text-4xl sm:text-6xl font-semibold"
                >
                  Our Team
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
      <FaqCommon />
      <ContactUsCommon />
      <Footer />
    </section>
  );
}

export default Home;
