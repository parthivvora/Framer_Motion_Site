import { motion } from "framer-motion";
import blogData from "../data/blogData.json";
import "../styles/home.css";

function BlogCommon() {
  return (
    <section className="blog-common-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="blog-common-content flex flex-col gap-3 mb-8">
              <motion.h6
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-xl uppercase text-green-600 font-semibold"
              >
                BLOG
              </motion.h6>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="text-5xl font-semibold"
              >
                Our Blog
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
          {blogData.map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="col-lg-4 col-md"
              key={index}
            >
              <div className="blog-details-box">
                <img
                  src={`${window.location}blog/${blog.image}`}
                  alt="blog_image"
                />
                <div className="blog-details p-4">
                  <ul className="blog-details-top flex items-center justify-between">
                    <li className="capitalize">
                      <i className="fa-solid fa-user text-green-600 pe-2"></i>
                      admin
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days text-green-600 pe-2"></i>
                      {blog.date}
                    </li>
                    <li className="capitalize">
                      <i className="fa-solid fa-tag text-green-600 pe-2"></i>
                      {blog.tag}
                    </li>
                  </ul>
                  <div className="blog-details-middle flex flex-col gap-3 mt-4">
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                    <p className="text-base font-medium leading-8">
                      {blog.description}
                    </p>
                  </div>
                  <div className="blog-details-bottom mt-4">
                    <a href="#" className="text-green-600 font-bold text-xl capitalize">
                      read more
                      <i className="fa-solid fa-arrow-right-long ps-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCommon;
