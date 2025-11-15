/* eslint-disable react/prop-types */
import "./ServicesStyles.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const WorkCard = (props) => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree services" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <motion.div
        className="service-card"
        initial={{ x: -250 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        viewport={{ once: true }}
      >
        <img src={props.img} alt="img" />
        <h2 className="service-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
        </div>
        <a className="pro-btn" href="#contact">
          <button className="btn">Book Now</button>
        </a>
      </motion.div>
    </>
  );
};

export default WorkCard;
