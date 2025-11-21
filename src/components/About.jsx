import "./AboutStyles.css";
import img1 from "../assets/nlb.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree service about page" />
        <link
          rel="canonical"
          href="https://nlbtreeserviceandgardering.com/about"
        />
      </Helmet>

      <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="about-header"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1>About Us</h1>
          <p>
            Professional, family-owned tree care focused on safety, clean work
            and long-term health for your trees and outdoor spaces.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Family-owned tree care experts</h2>
            <p>
              Since 2020, we have been helping homeowners in the all SCRA area
              area remove hazardous trees, shape overgrown canopies and keep
              their yards clean and safe after storms.
            </p>
            <p>
              Every project is handled by a small, trained team that treats your
              property like their own: careful planning, controlled cuts and a
              full clean-up before we leave.
            </p>

            <ul className="about-list">
              <li>
                Safe removal of dangerous or leaning trees close to roofs,
                fences or driveways.
              </li>
              <li>
                Precision pruning to clear structures without harming the tree.
              </li>
              <li>
                Storm response and preventative care to reduce future risks.
              </li>
            </ul>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2020</span>
                <span className="stat-label">Serving all CSRA</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">
                  Trees serviced with no major incidents
                </span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Storm emergency availability</span>
              </div>
            </div>

            <a href="#contact">
              <motion.button
                className="about-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                Schedule a visit
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            className="about-media"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-card">
              <img src={img1} alt="Professional tree service" />
              <div className="about-tag top-left">Family-owned</div>
              <div className="about-tag bottom-right">Fully insured</div>
              <div className="about-badge">
                <span>Since 2020</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
