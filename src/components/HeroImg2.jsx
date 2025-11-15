import "./HeroImg2Styles.css";
import { motion } from "framer-motion";

const HeroImg2 = () => {
  return (
    <motion.section
      className="hero-img"
      id="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="overlay"></div>

      <motion.div
        className="heading"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>Our Services</h1>
        <p>
          Your satisfaction is our priority. We provide quality tree and
          garden services at affordable prices.
        </p>
        
      </motion.div>
    </motion.section>
  );
};

export default HeroImg2;
