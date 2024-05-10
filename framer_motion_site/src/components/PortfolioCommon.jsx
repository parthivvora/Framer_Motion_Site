import "../styles/home.css";
import "../styles/portfolio.css";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData.json";
import { useState } from "react";

function PortfolioCommon() {
  const [portfolioType, setPortfolioType] = useState("all");
  return (
    <div className="portfolio-common-section pt-10 sm:pt-32">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="portfolio-common-content flex flex-col gap-2 sm:gap-[1rem] mb-3">
              <motion.h6
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-xl uppercase text-green-600 font-semibold"
              >
                PORTFOLIO
              </motion.h6>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-4xl sm:text-5xl font-semibold"
              >
                Our Portfolio
              </motion.h1>
            </div>
          </div>
          <div className="col-sm-12">
            <motion.ul
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="portfolio-nav-tabs flex gap-4 mb-4"
            >
              <li
                className="text-xl font-bold capitalize cursor-pointer"
                onClick={() => setPortfolioType("all")}
              >
                all
              </li>
              <li
                className="text-xl font-bold capitalize cursor-pointer"
                onClick={() => setPortfolioType("mobile")}
              >
                mobile
              </li>
              <li
                className="text-xl font-bold capitalize cursor-pointer"
                onClick={() => setPortfolioType("data")}
              >
                data
              </li>
              <li
                className="text-xl font-bold capitalize cursor-pointer"
                onClick={() => setPortfolioType("web")}
              >
                web
              </li>
            </motion.ul>
          </div>
          {portfolioType != "all"
            ? portfolioData
                .filter((type) => type.type == portfolioType)
                .map((portfolio, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: "easeIn" }}
                      className="portfolio-item-box rounded-lg overflow-hidden"
                    >
                      <img
                        src={`${window.location.origin}/portfolio/${portfolio.appImage}`}
                        alt={window.location}
                        className="img-fluid relative"
                      />
                      <div className="portfolio-item-box-content px-5 flex flex-col gap-2">
                        <h1 className="text-2xl font-bold uppercase text-white">
                          {portfolio.appName}
                        </h1>
                        <h1 className="text-lg font-medium capitalize text-white">
                          {portfolio.appType}
                        </h1>
                        <span className="text-base font-medium capitalize text-green-600">
                          {portfolio.tags.join(", ")}
                        </span>
                        <a
                          href="#"
                          className="view-project-btn capitalize text-lg font-medium text-green-600 text-center py-2"
                        >
                          <i className="fa-regular fa-eye"></i>view Project
                        </a>
                      </div>
                    </motion.div>
                  </div>
                ))
            : portfolioData.map((portfolio, index) => (
                <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeIn" }}
                    className="portfolio-item-box rounded-lg overflow-hidden"
                  >
                    <img
                      src={`${window.location.origin}/portfolio/${portfolio.appImage}`}
                      alt={window.location}
                      className="img-fluid relative"
                    />
                    <div className="portfolio-item-box-content px-5 flex flex-col gap-2">
                      <h1 className="text-2xl font-bold uppercase text-white">
                        {portfolio.appName}
                      </h1>
                      <h1 className="text-lg font-medium capitalize text-white">
                        {portfolio.appType}
                      </h1>
                      <span className="text-base font-medium capitalize text-green-600">
                        {portfolio.tags.join(", ")}
                      </span>
                      <a
                        href="#"
                        className="view-project-btn capitalize text-lg font-medium text-green-600 text-center py-2"
                      >
                        <i className="fa-regular fa-eye"></i>view Project
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCommon;
