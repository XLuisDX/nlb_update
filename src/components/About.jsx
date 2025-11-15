import "./AboutStyles.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/Imagen de WhatsApp 2023-11-26 a las 09.25.15_70d735d2.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree service about page" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>

      <motion.section
        className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="about"
      >
        <motion.div
          className="title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Us</h1>
        </motion.div>

        <div className="about-container">
          <motion.div
            className="left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>Who We Are?</h2>
            <p>
              We are a family-owned and operated tree and garden company that
              has been serving the Augusta area since 2020. We are passionate
              about creating and maintaining beautiful and healthy outdoor
              spaces for our clients.
            </p>
            <p>
              Whether you need tree removal, pruning, planting, treatment, or
              lawn care, we have the skills and equipment to handle any project.
            </p>
            <a href="#contact">
              <motion.button
                className="btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            className="right"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="img-gallery">
              <motion.div
                className="img-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img1} alt="Tree Service 1" />
              </motion.div>
              <motion.div
                className="img-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img2} alt="Tree Service 2" />
              </motion.div>
              <motion.div
                className="img-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img3} alt="Tree Service 3" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
