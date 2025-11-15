import "./HomeImgStyles.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

import IntroImg1 from "../assets/img1.jpg";
import IntroImg2 from "../assets/IntroImg.jpg";
import IntroImg3 from "../assets/pruning.jpg";

const images = [IntroImg1, IntroImg2, IntroImg3];

const HomeImg = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="background">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Background"
          className="intro-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="overlay"></div>
      </div>

      <motion.div
        className="content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transform Your Outdoors
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We are the experts in tree and garden care. We offer a range of services from pruning to landscaping to make your outdoor space beautiful and healthy
        </motion.p>
        <motion.p
          className="subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Call: (803) 292-1649
        </motion.p>

        <motion.div
          className="btn-group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#about" className="btn btn-gradient">
            Learn More
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Us
          </a>
        </motion.div>

        <motion.img
          src={logo}
          alt="Logo"
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeImg;
