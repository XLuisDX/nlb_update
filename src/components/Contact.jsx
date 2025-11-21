import "./Contact.css";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC | Contact</title>
        <meta name="description" content="NLB tree service contact" />
        <link
          rel="canonical"
          href="https://nlbtreeserviceandgardering.com/contact"
        />
      </Helmet>

      <motion.section
        className="contact-section"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-inner">
          <motion.div
            className="contact-info"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="contact-kicker">Contact</p>
            <h2 className="contact-title">Let&apos;s talk about your trees</h2>
            <p className="contact-subtitle">
              Tell us what you need help with and we will get back to you as
              soon as possible to schedule a visit and give you a free estimate.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Call or text</span>
                <a href="tel:+18032921649" className="detail-value">
                  (803) 292-1649
                </a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Email</span>
                <a
                  href="mailto:norbertolainez87@icloud.com"
                  className="detail-value"
                >
                  norbertolainez87@icloud.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Service area</span>
                <span className="detail-value">
                  all SCRA and surrounding areas
                </span>
              </div>
            </div>

            <p className="contact-note">
              We specialize in safe removals, storm damage cleanup, pruning and
              land clearing while taking care of your home and yard.
            </p>
          </motion.div>

          <Form />
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
