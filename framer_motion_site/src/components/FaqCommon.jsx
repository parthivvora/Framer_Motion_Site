import faqCustomerImage from "../assets/home/faq_customer.png";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";

function FaqCommon() {
  return (
    <div className="faq-section py-10 sm:py-36">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="faq-content flex flex-col gap-2 sm:gap-[1rem] mb-8">
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
                className="text-4xl sm:text-6xl font-semibold"
              >
                Frequently Asked Questions
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
              className="faq-accordion mt-3"
            >
              <Accordion className="flex flex-col gap-4">
                <Accordion.Item className="rounded-xl border-none" eventKey="0">
                  <Accordion.Header>
                    Do You Offer Both On-Site And Remote IT Support?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                    Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                    Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi
                    Voluptates Aspernatur Consequuntur Facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="rounded-xl border-none" eventKey="1">
                  <Accordion.Header>What Is Techida ?</Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                    Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                    Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi
                    Voluptates Aspernatur Consequuntur Facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="rounded-xl border-none" eventKey="2">
                  <Accordion.Header>
                    Is There Any Updates In The Future ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                    Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                    Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi
                    Voluptates Aspernatur Consequuntur Facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="rounded-xl border-none" eventKey="3">
                  <Accordion.Header>
                    How Much For The Service ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
                    Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure
                    Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi
                    Voluptates Aspernatur Consequuntur Facere?
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqCommon;
